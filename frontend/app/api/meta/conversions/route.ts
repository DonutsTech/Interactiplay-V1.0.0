import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type IncomingPayload = {
  event_name?: string;
  event_id?: string;
  custom_data?: Record<string, string | number | boolean>;
  user_data?: {
    email?: string;
    phone?: string;
  };
  event_source_url?: string;
};

const normalizeEmail = (value?: string): string =>
  (value ?? '').trim().toLowerCase();

const normalizePhone = (value?: string): string =>
  (value ?? '').replace(/\D/g, '');

const hashSha256 = (value: string): string =>
  createHash('sha256').update(value).digest('hex');

const getClientIp = (request: NextRequest): string | undefined => {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (!forwardedFor) {
    return undefined;
  }

  return forwardedFor.split(',')[0]?.trim();
};

export async function POST(request: NextRequest) {
  const pixelId =
    process.env.META_CAPI_PIXEL_ID?.trim() ??
    process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID?.trim();
  const accessToken = process.env.META_CONVERSIONS_API_TOKEN?.trim();
  const testEventCode = process.env.META_TEST_EVENT_CODE?.trim();

  if (!pixelId || !accessToken) {
    return NextResponse.json(
      { error: 'Meta Conversion API nao configurada' },
      { status: 503 }
    );
  }

  if (!/^\d+$/.test(pixelId)) {
    return NextResponse.json(
      {
        error:
          'ID invalido para CAPI. Use o Pixel ID numerico (nao act_, app id, dataset id textual ou outro identificador).',
        details: {
          configuredId: pixelId,
          hint: 'Configure META_CAPI_PIXEL_ID com o Pixel ID numerico do Gerenciador de Eventos.',
        },
      },
      { status: 400 }
    );
  }

  let payload: IncomingPayload;

  try {
    payload = (await request.json()) as IncomingPayload;
  } catch {
    return NextResponse.json({ error: 'Payload invalido' }, { status: 400 });
  }

  const eventName = payload.event_name?.trim();
  const eventId = payload.event_id?.trim();

  if (!eventName || !eventId) {
    return NextResponse.json(
      { error: 'event_name e event_id sao obrigatorios' },
      { status: 400 }
    );
  }

  const normalizedEmail = normalizeEmail(payload.user_data?.email);
  const normalizedPhone = normalizePhone(payload.user_data?.phone);
  const userAgent = request.headers.get('user-agent') ?? undefined;
  const clientIp = getClientIp(request);
  const fbc = request.headers
    .get('cookie')
    ?.match(/(?:^|;)\s*_fbc=([^;]+)/)?.[1]
    ?.trim();
  const fbp = request.headers
    .get('cookie')
    ?.match(/(?:^|;)\s*_fbp=([^;]+)/)?.[1]
    ?.trim();

  const userData: Record<string, string | string[]> = {};

  if (normalizedEmail) {
    userData.em = [hashSha256(normalizedEmail)];
  }

  if (normalizedPhone) {
    userData.ph = [hashSha256(normalizedPhone)];
  }

  if (clientIp) {
    userData.client_ip_address = clientIp;
  }

  if (userAgent) {
    userData.client_user_agent = userAgent;
  }

  if (fbc) {
    userData.fbc = fbc;
  }

  if (fbp) {
    userData.fbp = fbp;
  }

  if (Object.keys(userData).length === 0) {
    return NextResponse.json(
      {
        error:
          'user_data vazio. A Meta exige pelo menos um identificador: email, phone, fbc, fbp ou client_ip_address.',
        details: {
          receivedUserData: payload.user_data,
          derivedUserData: userData,
          hint: 'Envie pelo menos email ou phone do usuario, ou passe fbc/fbp via cookie no header.',
        },
      },
      { status: 400 }
    );
  }

  const body = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: payload.event_source_url,
        custom_data: payload.custom_data,
        user_data: userData,
      },
    ],
    ...(testEventCode ? { test_event_code: testEventCode } : {}),
  };

  const endpoint = `https://graph.facebook.com/v25.0/${pixelId}/events?access_token=${accessToken}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (
      typeof result?.error?.message === 'string' &&
      result.error.message.includes('field (events)')
    ) {
      return NextResponse.json(
        {
          error:
            'A Meta rejeitou o endpoint /events para este ID. Verifique se o ID configurado e o Pixel ID numerico correto.',
          details: {
            configuredId: pixelId,
            metaError: result,
            hint: 'No Gerenciador de Eventos, copie o Pixel ID e salve em META_CAPI_PIXEL_ID.',
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: 'Falha ao enviar evento para Meta Conversion API',
        details: result,
      },
      { status: response.status }
    );
  }

  return NextResponse.json({ ok: true, result });
}

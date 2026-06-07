import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const DEFAULT_META_TEST_EVENT_CODE = 'TEST82888'; //remover

type IncomingPayload = {
  eventName?: string;
  eventId?: string;
  customData?: Record<string, string | number | boolean>;
  userData?: {
    email?: string;
    phone?: string;
  };
  eventSourceUrl?: string;
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
  const testEventCode =
    process.env.META_TEST_EVENT_CODE?.trim() || DEFAULT_META_TEST_EVENT_CODE; //remover

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

  const eventName = payload.eventName?.trim();
  const eventId = payload.eventId?.trim();

  if (!eventName || !eventId) {
    return NextResponse.json(
      { error: 'eventName e eventId sao obrigatorios' },
      { status: 400 }
    );
  }

  const normalizedEmail = normalizeEmail(payload.userData?.email);
  const normalizedPhone = normalizePhone(payload.userData?.phone);
  const userAgent = request.headers.get('user-agent') ?? undefined;
  const clientIp = getClientIp(request);

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

  const body = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: payload.eventSourceUrl,
        custom_data: payload.customData,
        user_data: userData,
      },
    ],
    ...(testEventCode ? { test_event_code: testEventCode } : {}),
  };

  const endpoint = `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${accessToken}`;

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

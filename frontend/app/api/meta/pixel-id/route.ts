import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const pixelId =
    process.env.META_CAPI_PIXEL_ID?.trim() ??
    process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID?.trim() ??
    process.env.NEXT_PUBLIC_META_CAPI_PIXEL_ID?.trim() ??
    '';

  return NextResponse.json({ pixelId });
}

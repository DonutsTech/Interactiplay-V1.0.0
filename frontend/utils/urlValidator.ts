'use client';

export function isURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidUrl(url: string): boolean {
  // Se já for uma URL completa com http/https
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return true;
    }
  } catch {}

  // Tenta com https://
  try {
    const withProtocol = `https://${url}`;
    const parsed = new URL(withProtocol);

    const host = parsed.hostname;

    // Precisa ter ao menos um ponto
    if (!host.includes('.')) return false;

    const parts = host.split('.');
    if (parts.length < 2) return false;

    const domain = parts[0];
    const tld = parts[parts.length - 1];

    // Domínio deve ter pelo menos 2 letras
    if (domain.length < 2) return false;

    // TLD deve ter ao menos 2 letras (.com, .io, .br)
    if (tld.length < 2) return false;

    return true;
  } catch {
    return false;
  }
}

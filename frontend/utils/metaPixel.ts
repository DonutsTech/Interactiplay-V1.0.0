type MetaPixelParams = Record<string, string | number | boolean>;

type ConsentPayload = {
  marketing: boolean;
  updatedAt: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __metaPixelInitialized?: boolean;
  }
}

export const MARKETING_CONSENT_STORAGE_KEY =
  '@interactiplay:consent:marketing:v1';
export const MARKETING_CONSENT_EVENT = 'interactiplay:consent-updated';

export const getMetaPixelId = (): string =>
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID?.trim() ?? '';

export const hasMetaPixelId = (): boolean => getMetaPixelId().length > 0;

const isBrowser = (): boolean => typeof window !== 'undefined';

export const getMarketingConsent = (): boolean | null => {
  if (!isBrowser()) {
    return null;
  }

  try {
    const raw = localStorage.getItem(MARKETING_CONSENT_STORAGE_KEY);

    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as ConsentPayload;
    return Boolean(parsed.marketing);
  } catch {
    return null;
  }
};

export const setMarketingConsent = (marketing: boolean): void => {
  if (!isBrowser()) {
    return;
  }

  const payload: ConsentPayload = {
    marketing,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(MARKETING_CONSENT_STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(
    new CustomEvent(MARKETING_CONSENT_EVENT, {
      detail: payload,
    })
  );
};

export const initializeMetaPixel = (): boolean => {
  if (!isBrowser() || !hasMetaPixelId() || !getMarketingConsent()) {
    return false;
  }

  if (typeof window.fbq !== 'function') {
    return false;
  }

  if (!window.__metaPixelInitialized) {
    window.fbq('init', getMetaPixelId());
    window.__metaPixelInitialized = true;
  }

  return true;
};

export const trackMetaEvent = (
  eventName: string,
  params?: MetaPixelParams
): boolean => {
  if (!initializeMetaPixel() || typeof window.fbq !== 'function') {
    return false;
  }

  if (params) {
    window.fbq('track', eventName, params);
    return true;
  }

  window.fbq('track', eventName);
  return true;
};

export const trackMetaPageView = (pathname: string): boolean => {
  return trackMetaEvent('PageView', {
    path: pathname,
  });
};

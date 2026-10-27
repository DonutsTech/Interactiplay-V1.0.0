import { postMetaPixelEvent } from '@/service/metapixel';
import * as pixel from '../lib/fpixel';

type ConsentPayload = {
  marketing: boolean;
  updatedAt: string;
};

export const MARKETING_CONSENT_STORAGE_KEY =
  '@interactiplay:consent:marketing:v1';
export const MARKETING_CONSENT_EVENT = 'interactiplay:consent-updated';

const isBrowser = (): boolean => typeof window !== 'undefined';

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

const generateEventId = (): string => {
  if (isBrowser() && typeof window.crypto?.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

// Funções auxiliares para capturar os cookies do Facebook no navegador
const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

const getFbclidFromUrl = (): string | undefined => {
  if (typeof window === 'undefined') return undefined;
  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get('fbclid');
  if (fbclid) {
    // Monta no formato padrão que a Meta espera (fb.1.timestamp.fbclid)
    return `fb.1.${Date.now()}.${fbclid}`;
  }
  return undefined;
};

export const metaPixelEventPageView = async () => {
  const evantName = 'PageView';
  const eventSourceUrl = window.location.href;
  const eventId = generateEventId();

  const fbp = getCookie('_fbp');
  const fbc = getCookie('_fbc') || getFbclidFromUrl();

  try {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      pixel.pageview(eventId);
    } else {
      throw new Error('Meta Pixel is not initialized or blocked');
    }
  } catch (error) {
    console.warn('Meta pixel blocked or not initialized');

    try {
      await postMetaPixelEvent({
        event_name: evantName,
        event_source_url: eventSourceUrl,
        event_id: eventId,
        action_source: 'website',
        event_time: Math.floor(Date.now() / 1000).toString(),
        user_data: {
          fbp,
          fbc,
        }
      });
    } catch (error) {
      console.error('Failed to post Meta Pixel event', error);
    }
  }
}
/*
type MetaPixelParams = Record<string, string | number | boolean>;

type MetaUserData = {
  email?: string;
  phone?: string;
};

type MetaEventOptions = {
  eventId?: string;
  userData?: MetaUserData;
};

import { postMetaCapiEvent } from './metaConversions';

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
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID?.trim() ??
  process.env.NEXT_PUBLIC_META_CAPI_PIXEL_ID?.trim() ??
  '';

export const hasMetaPixelId = (): boolean => getMetaPixelId().length > 0;

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
  if (!isBrowser() || !getMarketingConsent()) {
    return false;
  }

  if (typeof window.fbq !== 'function') {
    return false;
  }

  if (window.__metaPixelInitialized) {
    return true;
  }

  if (hasMetaPixelId()) {
    window.fbq('init', getMetaPixelId());
    window.__metaPixelInitialized = true;
    return true;
  }

  return false;
};

export const trackMetaEvent = (
  eventName: string,
  params?: MetaPixelParams,
  options?: MetaEventOptions
): boolean => {
  const eventId = options?.eventId ?? generateEventId();

  if (isBrowser() && getMarketingConsent()) {
    void postMetaCapiEvent({
      eventName,
      eventId,
      customData: params,
      userData: options?.userData,
      eventSourceUrl: window.location.href,
    });
  }

  if (!initializeMetaPixel() || typeof window.fbq !== 'function') {
    return false;
  }

  const eventOptions = { eventID: eventId };

  if (params) {
    window.fbq('track', eventName, params, eventOptions);
    return true;
  }

  window.fbq('track', eventName, {}, eventOptions);
  return true;
};

export const trackMetaPageView = (pathname: string): boolean => {
  return trackMetaEvent('PageView', {
    path: pathname,
  });
};
*/

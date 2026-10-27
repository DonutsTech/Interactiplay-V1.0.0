'use client';

import { getMarketingConsent, metaPixelEventPageView, setMarketingConsent } from '@/utils/metaPixel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import * as pixel from '../../../lib/fpixel';
import styles from './MetaPixelManager.module.scss';

const MetaPixelManager = () => {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith('/dashboard') ?? false;

  const [loaded, setLoaded] = useState(false);
  const [marketingConsent, setMarketingConsentState] = useState<boolean | null | undefined>(
    undefined
  );
  const [pageViewTracked, setPageViewTracked] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useEffect(() => {
    const consent = getMarketingConsent();
    const consentFalse = consent !== true;
    setMarketingConsentState(consent);
    setIsBannerOpen(consentFalse);
    setPageViewTracked(consentFalse);
    console.log('consent:', consent);
  }, []);

  const handleConsent = (accepted: boolean) => {
    setIsBannerOpen(false);
    setMarketingConsent(accepted);
    setMarketingConsentState(accepted);
  };

  useEffect(() => {
    if (marketingConsent === true && loaded && !pageViewTracked) {
      console.log('funcionou o page view');
      metaPixelEventPageView();
      setPageViewTracked(true);
    }
  }, [marketingConsent, loaded, pathname]);

  return (
    <>
    {
       marketingConsent === true && !isDashboardRoute &&
        <Script
          id="fb-pixel"
          src="/scripts/pixel.js"
          strategy="afterInteractive"
          onLoad={() => setLoaded(true)}
          data-pixel-id={pixel.FB_PIXEL_ID}
        />
    }
    {isBannerOpen && !isDashboardRoute && (
      <div className={styles.consentRoot}>
        <div className={styles.panel}>
          <h4 className={styles.title}>Preferencias de cookies</h4>
          <p className={styles.description}>
            Usamos cookies de marketing para medir conversoes e melhorar a
            experiencia. Ao continuar, voce apenas confirma que entendeu esta
            informacao. Saiba mais na{' '}
          <Link href="/Policy" className={styles.policyLink}>
            Politica de Privacidade
          </Link>
            .
          </p>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => {
                handleConsent(true);
              }}
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default MetaPixelManager;

/*
  useEffect(() => {
    if (pixelId) {
      return;
    }

    let cancelled = false;

    const fetchPixelId = async () => {
      try {
        const response = await fetch('/api/meta/pixel-id', {
          method: 'GET',
          cache: 'no-store',
        });

        if (!response.ok || cancelled) {
          return;
        }

        const data = (await response.json()) as { pixelId?: string };

        const value = data.pixelId?.trim() ?? '';

        if (!cancelled && value) {
          setRuntimePixelId(value);
        }
      } catch {
        // Falha silenciosa para nao impactar carregamento da pagina.
      }
    };

    void fetchPixelId();

    return () => {
      cancelled = true;
    };
  }, [pixelId]);

  useEffect(() => {
    const consent = getMarketingConsent();
    setMarketingConsentState(consent);
    setIsBannerOpen(consent !== true);

    const handleConsentUpdate = () => {
      const updatedConsent = getMarketingConsent();
      setMarketingConsentState(updatedConsent);
      setIsBannerOpen(updatedConsent !== true);
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === MARKETING_CONSENT_STORAGE_KEY) {
        handleConsentUpdate();
      }
    };

    window.addEventListener(MARKETING_CONSENT_EVENT, handleConsentUpdate);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(MARKETING_CONSENT_EVENT, handleConsentUpdate);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  useEffect(() => {
    if (marketingConsent !== true || !pathname || isDashboardRoute) {
      return;
    }

    if (lastTrackedPathRef.current === pathname) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 20;
    const attemptTrack = () => {
      attempts += 1;

      if (trackMetaPageView(pathname)) {
        lastTrackedPathRef.current = pathname;
        return true;
      }

      return false;
    };

    if (attemptTrack()) {
      return;
    }

    const interval = window.setInterval(() => {
      if (attemptTrack() || attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, 150);

    return () => {
      window.clearInterval(interval);
    };
  }, [marketingConsent, pathname, isDashboardRoute]);

  const handleConsent = (accepted: boolean) => {
    setMarketingConsent(accepted);
    setMarketingConsentState(accepted);
    setIsBannerOpen(false);

    if (!accepted) {
      lastTrackedPathRef.current = '';
    }
  };

  return (
    <>
      {marketingConsent === true && hasResolvedPixelId && !isDashboardRoute && (
        <Script id="meta-pixel-bootstrap" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${resolvedPixelId}');
            window.__metaPixelInitialized = true;
          `}
        </Script>
      )}

      {isBannerOpen && !isDashboardRoute && (
        <div className={styles.consentRoot}>
          <div className={styles.panel}>
              <h4 className={styles.title}>Preferencias de cookies</h4>
              <p className={styles.description}>
                Usamos cookies de marketing para medir conversoes e melhorar a
                experiencia. Ao continuar, voce apenas confirma que entendeu esta
                informacao. Saiba mais na{' '}
                <Link href="/Policy" className={styles.policyLink}>
                  Politica de Privacidade
                </Link>
                .
              </p>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={() => handleConsent(true)}
              >
                  Entendi
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
*/

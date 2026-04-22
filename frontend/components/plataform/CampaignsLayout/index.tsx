'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { ICampaign } from '@/@types/campaign';
import { getCampaigns } from '@/service/campaign/capaingnServices';
import { useError } from '@/context/ErrorContext';
import BtnG from '../BtnG';
import styles from './CampaignsLayout.module.scss';

interface CampaignsLayoutProps {
  children: ReactNode;
  activeSection: string;
  sections: Array<{ id: string; label: string; path?: string }>;
}

const CampaignsLayout = ({
  children,
  activeSection,
}: CampaignsLayoutProps) => {
  const router = useRouter();
  const { handleRequest } = useError();
  const [campanhas, setCampanhas] = useState<ICampaign[]>([]);

  const loadCampanhas = useCallback(async () => {
    const data = await handleRequest(
      () => getCampaigns(),
      {
        loadingMessage: 'Carregando campanhas...',
        suppressLoadingToast: true,
        suppressLoading: true,
      }
    );

    if (data && Array.isArray(data)) {
      setCampanhas(data);
    }
  }, [handleRequest]);

  useEffect(() => {
    loadCampanhas();
  }, [loadCampanhas]);

  return (
    <div className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.container_header}>
          <div
            className={`${styles.container_header_btn} ${styles.container_header_btn_campanha}`}
          >
            <BtnG
              text="Campanhas"
              disabled={activeSection === 'campanha'}
              goClick={() => router.push('/dashboard/mycampaigns')}
            />
          </div>

          <div
            className={`${styles.container_header_btn} ${styles.container_header_btn_testeab}`}
          >
            <BtnG
              text="Teste AB"
              disabled={activeSection === 'testeab'}
              goClick={() => router.push('/dashboard/mycampaigns/testeab')}
            />
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default CampaignsLayout;

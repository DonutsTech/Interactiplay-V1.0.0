'use client';

import { useError } from '@/context/ErrorContext';
import { useEditCampaign } from '@/context/EditCampaignContext';
import styles from './MyCampaignsPainel.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { ICampaign } from '@/@types/campaign';
import {
  getCampaigns,
  deleteCampaign,
} from '@/service/campaign/capaingnServices';
import CardCampaign from './CardCampaign';
import { ErrorMessage } from '@/@types/error';
import { useRouter } from 'next/navigation';

const MyCampaignsPainel = () => {
  const { handleRequest, showConfirmation } = useError();
  const { setEditingCampaign } = useEditCampaign();
  const router = useRouter();
  const [campanhas, setCampanhas] = useState<ICampaign[]>([]);

  const loadCampanhas = useCallback(async () => {
    const data = await handleRequest(() => getCampaigns(), {
      loadingMessage: 'Carregando campanhas...',
      suppressLoadingToast: true,
      suppressLoading: true,
    });

    if (data && Array.isArray(data)) {
      setCampanhas(data);
    }
  }, [handleRequest]);

  useEffect(() => {
    loadCampanhas();
  }, [loadCampanhas]);

  const handleDelete = useCallback(
    async (campaignId: string) => {
      const confirmed = await showConfirmation(
        'Tem certeza que deseja excluir esta campanha? Esta ação não pode ser desfeita.',
        {
          confirmText: 'Excluir',
          cancelText: 'Cancelar',
          type: 'error',
        }
      );

      if (!confirmed) return;

      const response = await handleRequest(() => deleteCampaign(campaignId), {
        loadingMessage: 'Excluindo campanha...',
        successMessage: 'Campanha excluída com sucesso!',
      });

      if (response && !(response as ErrorMessage).STATUS) {
        setCampanhas((prev) => prev.filter((c) => c.ID !== campaignId));
      }
    },
    [handleRequest, showConfirmation]
  );

  const handleEdit = useCallback(
    async (campaign: ICampaign) => {
      setEditingCampaign(campaign);
      router.push('/dashboard');
    },
    [router, setEditingCampaign]
  );

  const handleView = useCallback((campaign: ICampaign) => {
    // TODO: Implementar visualização da campanha
    console.log('Visualizar campanha:', campaign);
  }, []);

  const handleAnalytics = useCallback((campaign: ICampaign) => {
    // TODO: Implementar analytics da campanha
    console.log('Analytics da campanha:', campaign);
  }, []);

  const handleEmbed = useCallback((campaign: ICampaign) => {
    // TODO: Implementar código de incorporação
    console.log('Embed da campanha:', campaign);
  }, []);

  return (
    <section className={styles.myCampaignsPainel}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>Minhas Campanhas</h3>
          <p>
            Campanhas Ativas <span>{campanhas.length}</span>
          </p>
        </div>
        <div className={styles.body}>
          {campanhas.length === 0 ? (
            <div className={styles.empty}>
              <p>Nenhuma campanha criada ainda.</p>
              <p>Crie sua primeira campanha para começar!</p>
            </div>
          ) : (
            <div className={styles.campaignsList}>
              {campanhas.map((campanha) => (
                <CardCampaign
                  key={campanha.ID}
                  campaign={campanha}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onView={handleView}
                  onAnalytics={handleAnalytics}
                  onEmbed={handleEmbed}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyCampaignsPainel;

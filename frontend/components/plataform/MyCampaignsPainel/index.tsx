'use client';

import { ICampaign } from '@/@types/campaign';
import { ErrorMessage } from '@/@types/error';
import { useEditCampaign } from '@/context/EditCampaignContext';
import { useError } from '@/context/ErrorContext';
import {
  deleteCampaign,
  getCampaigns,
} from '@/service/campaign/capaignServices';
import { getAllTestAB } from '@/service/testeAB';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import CardCampaign from './CardCampaign';
import styles from './MyCampaignsPainel.module.scss';
import ModalPreview from './ModalPreview';
import Analytics from '../Analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineCopyAll } from 'react-icons/md';

const MyCampaignsPainel = () => {
  const { handleRequest, showConfirmation, showError, showSuccess } = useError();
  const { setEditingCampaign, setModalOpenF } = useEditCampaign();
  const router = useRouter();
  const [campanhas, setCampanhas] = useState<ICampaign[]>([]);
  const [blockedCampaignIds, setBlockedCampaignIds] = useState<Set<string>>(new Set());
  const [modalViewOpen, setModalViewOpen] = useState(false);
  const [modalAnalyticsOpen, setModalAnalyticsOpen] = useState(false);
  const [modalEmbedOpen, setModalEmbedOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<ICampaign | null>(
    null
  );

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

  useEffect(() => {
    const loadBlockedCampaigns = async () => {
      const data = await handleRequest(() => getAllTestAB(), {
        loadingMessage: 'Carregando testes A/B...',
        suppressLoadingToast: true,
        suppressLoading: true,
      });

      if (Array.isArray(data)) {
        const blockedIds = new Set<string>();

        data.forEach((testAB) => {
          if (testAB.CAMPAIGN_ID_A) {
            blockedIds.add(testAB.CAMPAIGN_ID_A);
          }
          if (testAB.CAMPAIGN_ID_B) {
            blockedIds.add(testAB.CAMPAIGN_ID_B);
          }
        });

        setBlockedCampaignIds(blockedIds);
      }
    };

    loadBlockedCampaigns();
  }, [handleRequest]);

  const handleDelete = useCallback(
    async (campaignId: string) => {
      if (blockedCampaignIds.has(campaignId)) {
        showError('Esta campanha participa de um teste A/B ativo. Exclua o teste A/B para liberar a exclusão.');
        return;
      }

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
    [blockedCampaignIds, handleRequest, showConfirmation, showError]
  );

  const handleEdit = useCallback(
    async (campaign: ICampaign) => {
      setEditingCampaign(campaign);
      setModalOpenF(true);
      router.push(`/dashboard/${campaign.ID}`);
    },
    [router, setEditingCampaign]
  );

  const handleView = useCallback((campaign: ICampaign) => {
    setSelectedCampaign(campaign);
    setModalViewOpen(true);
  }, []);

  const handleAnalytics = useCallback((campaign: ICampaign) => {
    setSelectedCampaign(campaign);
    setModalAnalyticsOpen(true);
  }, []);

  const handleEmbed = useCallback((campaign: ICampaign) => {
    setSelectedCampaign(campaign);
    setModalEmbedOpen(true);
  }, []);

  return (
    <section className={styles.myCampaignsPainel}>
      {modalEmbedOpen && selectedCampaign && (
        <div className={styles.embedModal}>
          <div
            className={styles.embedModal_overlay}
            onClick={() => {
              setModalEmbedOpen(false);
              setSelectedCampaign(null);
            }}
          />
          <div className={styles.embedModal_content}>
            <div className={styles.embedModal_header}>
              <p className={styles.embedModal_header_title}>
                Embed da campanha {selectedCampaign.NAME}
              </p>
              <button
                className={styles.embedModal_header_close}
                onClick={() => {
                  setModalEmbedOpen(false);
                  setSelectedCampaign(null);
                }}
                title="Fechar"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className={styles.embedModal_body}>
              {selectedCampaign.EMBED_JS && (
                <div className={styles.embedModal_block}>
                  <label className={styles.embedModal_block_label}>
                    Script JS
                    <MdOutlineCopyAll 
                      className={styles.copyIcon}
                      onClick={() => {
                        navigator.clipboard.writeText(selectedCampaign.EMBED_JS || '');
                        showSuccess('Código JS copiado para a área de transferência!', {
                          type: 'success',
                          autoClose: 2000,
                        });
                      }}
                      title="Copiar código JS"
                    />
                    </label>
                  <pre className={styles.embedModal_block_code}>
                    {selectedCampaign.EMBED_JS}
                  </pre>
                </div>
              )}

              {selectedCampaign.EMBED_IFRAME && (
                <div className={styles.embedModal_block}>
                  <label className={styles.embedModal_block_label}>
                    iFrame
                    <MdOutlineCopyAll 
                      className={styles.copyIcon}
                      onClick={() => {
                        navigator.clipboard.writeText(selectedCampaign.EMBED_IFRAME || '');
                        showSuccess('Código iFrame copiado para a área de transferência!', {
                          type: 'success',
                          autoClose: 2000,
                        });
                      }}
                      title="Copiar código iFrame"
                    />
                  </label>
                  <pre className={styles.embedModal_block_code}>
                    {selectedCampaign.EMBED_IFRAME}
                  </pre>
                </div>
              )}

              {!selectedCampaign.EMBED_JS && !selectedCampaign.EMBED_IFRAME && (
                <p className={styles.embedModal_empty}>
                  Nenhum código de incorporação disponível para esta campanha.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {modalViewOpen && selectedCampaign && (
        <ModalPreview
          campaign={selectedCampaign}
          onClose={() => {
            setModalViewOpen(false);
            setSelectedCampaign(null);
          }}
          onEdit={() => handleEdit(selectedCampaign)}
        />
      )}
      {modalAnalyticsOpen && selectedCampaign && (
        <Analytics 
          campaign={selectedCampaign}
          onClose={() => {
            setModalAnalyticsOpen(false);
            setSelectedCampaign(null);
          }}
        />
      )}

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
                  vinculoTestAB={blockedCampaignIds.has(campanha.ID)}
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

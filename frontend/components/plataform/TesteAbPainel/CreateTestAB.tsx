'use client';

import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import styles from './TesteAbPainel.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ICampaign } from '@/@types/campaign';
import { getCampaigns } from '@/service/campaign/capaignServices';
import { useError } from '@/context/ErrorContext';
import BtnG from '../BtnG';
import { ITestAB } from '@/@types/testeAB';
import { createTestAB, getAllTestAB } from '@/service/testeAB';
import CardCampanha from './CardCampanha';

interface Iprops {
  retorno: () => void;
}

const CreateTestAB = ({ retorno }: Iprops) => {
  const [campanhas, setCampanhas] = useState<ICampaign[]>([]);
  const [allTestAB, setAllTestAB] = useState<ITestAB[]>([]);
  const [selectedCampaignAId, setSelectedCampaignAId] = useState<string | null>(null);
  const [selectedCampaignBId, setSelectedCampaignBId] = useState<string | null>(null);
  const { handleRequest } = useError();


    const loadCampanhas = useCallback(async () => {
      const campaignsData = await handleRequest(() => getCampaigns(), {
        loadingMessage: 'Carregando campanhas...',
        suppressLoadingToast: true,
        suppressLoading: true,
      });

      const testABData = await handleRequest(() => getAllTestAB(), {
        loadingMessage: 'Carregando testes A/B...',
        suppressLoadingToast: true,
        suppressLoading: true,
      });
  
      if (campaignsData && Array.isArray(campaignsData)) {
        setCampanhas(campaignsData);
      }

      if (testABData && Array.isArray(testABData)) {
        setAllTestAB(testABData);
      }
    }, [handleRequest]);


  useEffect(() => {
    loadCampanhas();
  }, [loadCampanhas]);

  const blockedCampaignIds = useMemo(() => {
    const blockedIds = new Set<string>();

    allTestAB.forEach((test) => {
      if (test.CAMPAIGN_ID_A) {
        blockedIds.add(test.CAMPAIGN_ID_A);
      }

      if (test.CAMPAIGN_ID_B) {
        blockedIds.add(test.CAMPAIGN_ID_B);
      }
    });

    return blockedIds;
  }, [allTestAB]);

  const selectedCampaignA = useMemo(
    () => campanhas.find((campanha) => campanha.ID === selectedCampaignAId) || null,
    [campanhas, selectedCampaignAId]
  );

  const selectedCampaignB = useMemo(
    () => campanhas.find((campanha) => campanha.ID === selectedCampaignBId) || null,
    [campanhas, selectedCampaignBId]
  );

  const handleSelectCampaign = useCallback(
    (campaign: ICampaign) => {
      if (blockedCampaignIds.has(campaign.ID)) {
        return;
      }

      if (selectedCampaignAId === campaign.ID) {
        setSelectedCampaignAId(null);
        return;
      }

      if (selectedCampaignBId === campaign.ID) {
        setSelectedCampaignBId(null);
        return;
      }

      if (!selectedCampaignAId) {
        setSelectedCampaignAId(campaign.ID);
        return;
      }

      if (!selectedCampaignBId) {
        setSelectedCampaignBId(campaign.ID);
        return;
      }

      setSelectedCampaignAId(campaign.ID);
      setSelectedCampaignBId(null);
    },
    [blockedCampaignIds, selectedCampaignAId, selectedCampaignBId]
  );


  const handleClearA = () => setSelectedCampaignAId(null);
  const handleClearB = () => setSelectedCampaignBId(null);

  const handleClearAll = () => {
    setSelectedCampaignAId(null);
    setSelectedCampaignBId(null);
  };

  const handleCreateTestAB = useCallback(async () => {
    if (!selectedCampaignAId || !selectedCampaignBId) return;

    await handleRequest(
      () => createTestAB({ campaignIdA: selectedCampaignAId, campaignIdB: selectedCampaignBId }),
      {
        loadingMessage: 'Criando teste A/B...',
        successMessage: 'Teste A/B criado com sucesso!',
        onSuccess: retorno,
      }
    );
  }, [handleRequest, selectedCampaignAId, selectedCampaignBId, retorno]);

  const canCreate =
    !!selectedCampaignAId &&
    !!selectedCampaignBId &&
    selectedCampaignAId !== selectedCampaignBId &&
    !blockedCampaignIds.has(selectedCampaignAId) &&
    !blockedCampaignIds.has(selectedCampaignBId);

  const getSlotLabel = (campaignId: string): 'A' | 'B' | undefined => {
    if (selectedCampaignAId === campaignId) return 'A';
    if (selectedCampaignBId === campaignId) return 'B';
    return undefined;
  };

  return (
    <div className={styles.sectionCreate}>
      <FaRegArrowAltCircleLeft onClick={retorno} className={styles.backIcon} />
      <div className={styles.header}>
        <h3>Criar Teste A/B</h3>
        <div className={styles.createBox}>
          <div className={styles.campanhasBox}>
            <div className={`${styles.campanhaSelect} ${selectedCampaignA ? styles.campanhaSelect_filled : ''}`}>
              {selectedCampaignA ? (
                <>
                  <span className={styles.campanhaSelect_slotLabel}>A</span>
                  <p className={styles.campanhaSelect_name}>{selectedCampaignA.NAME}</p>
                  <button
                    type='button'
                    className={styles.campanhaSelect_clear}
                    onClick={handleClearA}
                    title='Remover campanha A'
                    aria-label='Remover campanha A'
                  >
                    <FaTimes />
                  </button>
                </>
              ) : (
                <p>Campanha A</p>
              )}
            </div>
            <h4>X</h4>
            <div className={`${styles.campanhaSelect} ${selectedCampaignB ? styles.campanhaSelect_filled : ''}`}>
              {selectedCampaignB ? (
                <>
                  <span className={styles.campanhaSelect_slotLabel}>B</span>
                  <p className={styles.campanhaSelect_name}>{selectedCampaignB.NAME}</p>
                  <button
                    type='button'
                    className={styles.campanhaSelect_clear}
                    onClick={handleClearB}
                    title='Remover campanha B'
                    aria-label='Remover campanha B'
                  >
                    <FaTimes />
                  </button>
                </>
              ) : (
                <p>Campanha B</p>
              )}
            </div>
          </div>
          <div className={styles.actions}>
            <div className={`${styles.btn} ${styles.btn_save}`}>
              <BtnG 
                text='Criar Teste'
                disabled={!canCreate}
                goClick={handleCreateTestAB}
              />
            </div>
            <div className={`${styles.btn} ${styles.btn_cancel}`}>
              <BtnG 
                text='Cancelar'
                goClick={handleClearAll}
              />

            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.aviso}>Selecione as campanhas para criar um teste A/B.</p>
        {campanhas.length === 0 ? (
          <p className={styles.empty}>Nenhuma campanha disponível. Crie campanhas para usar nesta funcionalidade.</p>
        ) : (
          <div className={styles.campanhasList}>
            {campanhas.map((campanha) => (
              <CardCampanha
                key={campanha.ID}
                campaign={campanha}
                isBlocked={blockedCampaignIds.has(campanha.ID)}
                blockReason='Esta campanha ja participa de um teste A/B. Exclua o teste para reutiliza-la.'
                isSelected={selectedCampaignAId === campanha.ID || selectedCampaignBId === campanha.ID}
                slotLabel={getSlotLabel(campanha.ID)}
                onSelect={handleSelectCampaign}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTestAB;

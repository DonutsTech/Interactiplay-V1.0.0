'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './TesteAbPainel.module.scss';
import { ITestAB } from '@/@types/testeAB';
import { useError } from '@/context/ErrorContext';
import { deleteTestAB, getAllTestAB } from '@/service/testeAB';
import BtnG from '../BtnG';
import CreateTestAB from './CreateTestAB';
import CardTestAB from './CardTestAB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineCopyAll } from 'react-icons/md';

const TesteAbPainel = () => {
  const [stage, setStage] = useState<'view' | 'create'>('view');
  const [allTestAB, setAllTestAB] = useState<ITestAB[]>([]);
  const [selectedEmbedTestAB, setSelectedEmbedTestAB] = useState<ITestAB | null>(null);
  const { handleRequest, isLoading, showConfirmation, showSuccess } = useError();

  const loadTestAB = useCallback(async () => {
    const data = await handleRequest(() => getAllTestAB(), {
      loadingMessage: 'Carregando testes A/B...',
      suppressLoadingToast: true,
      suppressLoading: true,
    });
    if (Array.isArray(data)) {
      setAllTestAB(data);
    }
  }, [handleRequest]);

  useEffect(() => {
    loadTestAB();
  }, [loadTestAB]);

  const handleDeleteTestAB = useCallback(async (testABId: string) => {
    const confirmed = await showConfirmation(
      'Tem certeza que deseja excluir este teste A/B? As campanhas serão liberadas e esta ação não pode ser desfeita.',
      {
        confirmText: 'Excluir',
        cancelText: 'Cancelar',
        type: 'warning',
      }
    );

    if (!confirmed) return;

    await handleRequest(
      () => deleteTestAB(testABId),
      {
        loadingMessage: 'Excluindo teste A/B...',
        successMessage: 'Teste A/B excluído com sucesso!',
        onSuccess: () => setAllTestAB((prev) => prev.filter((t) => t.ID !== testABId)),
      }
    );
  }, [handleRequest, showConfirmation]);

  const handleEmbedTestAB = useCallback((testAB: ITestAB) => {
    setSelectedEmbedTestAB(testAB);
  }, []);

  const handleAnalyticsTestAB = useCallback((testAB: ITestAB) => {

    console.log('Analytics do teste A/B:', testAB.ID);
  }, []);

  const handleRetorno = useCallback(() => {
    setStage('view');
    loadTestAB();
  }, [loadTestAB]);

  return (
    <section className={styles.testeAbPainel}>
      {selectedEmbedTestAB && (
        <div className={styles.embedModal}>
          <div
            className={styles.embedModal_overlay}
            onClick={() => setSelectedEmbedTestAB(null)}
          />
          <div className={styles.embedModal_content}>
            <div className={styles.embedModal_header}>
              <p className={styles.embedModal_header_title}>
                Embed do Teste A/B:{' '}
                {selectedEmbedTestAB.CAMPAIGN_A?.NAME ?? 'A'} ×{' '}
                {selectedEmbedTestAB.CAMPAIGN_B?.NAME ?? 'B'}
              </p>
              <button
                className={styles.embedModal_header_close}
                onClick={() => setSelectedEmbedTestAB(null)}
                title="Fechar"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className={styles.embedModal_body}>
              {selectedEmbedTestAB.EMBED_JS && (
                <div className={styles.embedModal_block}>
                  <label className={styles.embedModal_block_label}>
                    Script JS
                    <MdOutlineCopyAll
                      className={styles.copyIcon}
                      onClick={() => {
                        navigator.clipboard.writeText(selectedEmbedTestAB.EMBED_JS || '');
                        showSuccess('Código JS copiado para a área de transferência!', {
                          type: 'success',
                          autoClose: 2000,
                        });
                      }}
                      title="Copiar código JS"
                    />
                  </label>
                  <pre className={styles.embedModal_block_code}>
                    {selectedEmbedTestAB.EMBED_JS}
                  </pre>
                </div>
              )}

              {selectedEmbedTestAB.EMBED_IFRAME && (
                <div className={styles.embedModal_block}>
                  <label className={styles.embedModal_block_label}>
                    iFrame
                    <MdOutlineCopyAll
                      className={styles.copyIcon}
                      onClick={() => {
                        navigator.clipboard.writeText(selectedEmbedTestAB.EMBED_IFRAME || '');
                        showSuccess('Código iFrame copiado para a área de transferência!', {
                          type: 'success',
                          autoClose: 2000,
                        });
                      }}
                      title="Copiar código iFrame"
                    />
                  </label>
                  <pre className={styles.embedModal_block_code}>
                    {selectedEmbedTestAB.EMBED_IFRAME}
                  </pre>
                </div>
              )}

              {!selectedEmbedTestAB.EMBED_JS && !selectedEmbedTestAB.EMBED_IFRAME && (
                <p className={styles.embedModal_empty}>
                  Nenhum código de incorporação disponível para este teste.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {stage === 'view' && (
        <div className={styles.body_view}>
          <div className={styles.body_view_info}>
            <h3>Teste A/B</h3>
            <p>Testes A/B ativos<span>{allTestAB.length}</span></p>
            <div className={styles.createBtn}>
              <BtnG 
                text='Novo Teste A/B'
                goClick={() => setStage('create')}
                disabled={isLoading}
              />
            </div>
          </div>
          <div className={styles.body_view_list}>
            {allTestAB.length === 0 ? (
              <p className={styles.view_empty}>Nenhum teste A/B. Crie seu primeiro teste!</p>
            ) : (
              <div className={styles.testList}>
                {allTestAB.map((test) => (
                  <CardTestAB
                    key={test.ID}
                    testAB={test}
                    onAnalytics={handleAnalyticsTestAB}
                    onEmbed={handleEmbedTestAB}
                    onDelete={handleDeleteTestAB}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {stage === 'create' && (
        <CreateTestAB retorno={handleRetorno} />
      )}
    </section>
  );
};

export default TesteAbPainel;

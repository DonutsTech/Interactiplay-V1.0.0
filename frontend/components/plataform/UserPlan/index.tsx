'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { createPortalLink } from '@/service/user';
import { formatPrice } from '@/utils/formatPrice';
import { formatDateBR } from '@/utils/stringUtils';
import { useContext, useState } from 'react';
import styles from './UserPlan.module.scss';
import { ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';

const UserPlan = () => {
  const { authUser } = useContext(AuthUserContext);
  const [showModalMsg, setShowModalMsg] = useState(false);
  const [msgProp, setMsgProp] = useState<ErrorModalState>({
    mensagem: '',
    type: 'error',
  });
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);

  if (!authUser) {
    return <div className={styles.loading}>Carregando...</div>;
  }


  const plan = authUser.SUBSCRIPTION?.PLAN || null;
  const isTrial = authUser.SUBSCRIPTION?.IS_TRIAL;
  const isActive = authUser.SUBSCRIPTION?.STATUS === 'active' || isTrial;

  // Cálculos de uso
  const playsUsed = authUser.SUBSCRIPTION?.PLAY_COUNT || 0;
  const playsTotal = plan?.UNLIMITED_PLAYS ? Infinity : plan?.PLAYS || 0;
  const playsPercent = plan?.UNLIMITED_PLAYS
    ? 0
    : Math.min((playsUsed / playsTotal) * 100, 100);

  const videosUsed = authUser.SUBSCRIPTION?.VIDEO_COUNT || 0;
  const videosTotal = plan?.UNLIMITED_VIDEOS ? Infinity : plan?.VIDEOS || 0;
  const videosPercent = plan?.UNLIMITED_VIDEOS
    ? 0
    : Math.min((videosUsed / videosTotal) * 100, 100);

  const campaignsUsed = authUser.SUBSCRIPTION?.CAMPAIGNS_COUNT || 0;

  const hasExceededPlays = playsUsed >= playsTotal && !plan?.UNLIMITED_PLAYS;
  const hasExceededVideos =
    videosUsed >= videosTotal && !plan?.UNLIMITED_VIDEOS;

  const handleOpenBillingPortal = async () => {
    setIsLoadingPortal(true);

    try {
      const response = await createPortalLink();

      if ('STATUS' in response && 'MESSAGE' in response) {
        setMsgProp({
          mensagem: response.MESSAGE,
          type: 'error',
        });
        setShowModalMsg(true);
        setIsLoadingPortal(false);
        return;
      }

      if (response.url) {
        window.open(response.url, '_blank');
      } else {
        setMsgProp({
          mensagem: 'Erro ao acessar o portal de pagamento.',
          type: 'error',
        });
        setShowModalMsg(true);
      }
    } catch (error) {
      console.error('Erro ao abrir portal:', error);
      setMsgProp({
        mensagem:
          'Erro ao abrir portal de pagamento. Tente novamente mais tarde.',
        type: 'error',
      });
      setShowModalMsg(true);
    } finally {
      setIsLoadingPortal(false);
    }
  };

  return (
    <>
      {showModalMsg && (
        <ErrorModal
          isOpen={(show) => setShowModalMsg(show)}
          mensagem={msgProp.mensagem}
          type={msgProp.type}
          onClose={() => setShowModalMsg(false)}
        />
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>Meu Plano</h3>

        {isTrial && (
          <div className={styles.trialBanner}>
            <span className={styles.trialBanner_icon}>🎉</span>
            <div className={styles.trialBanner_content}>
              <h4 className={styles.trialBanner_title}>Período de Teste</h4>
              <p className={styles.trialBanner_text}>
                Você está no período trial até{' '}
                {formatDateBR(authUser.USER.STRIPE_TRIAL_END || '')}
              </p>
            </div>
          </div>
        )}

        <div className={styles.planCard}>
          <div className={styles.planCard_header}>
            <div>
              <h4 className={styles.planCard_name}>{plan?.NAME || 'N/A'}</h4>
              <p className={styles.planCard_status}>
                Status:{' '}
                <span
                  className={
                    isActive ? styles.status_active : styles.status_inactive
                  }
                >
                  {isActive ? 'Ativo' : 'Inativo'}
                </span>
              </p>
            </div>
            <div className={styles.planCard_price}>
              <span className={styles.price_value}>
                {formatPrice(plan?.PRICE || 0)}
              </span>
              <span className={styles.price_period}>/{plan?.BILLING_PERIOD || 'mês'}</span>
            </div>
          </div>

          <div className={styles.planCard_divider} />

          <div className={styles.usageSection}>
            <h5 className={styles.usageSection_title}>Uso do Plano</h5>

            {/* Plays */}
            <div className={styles.usageItem}>
              <div className={styles.usageItem_header}>
                <span className={styles.usageItem_label}>Reproduções (Plays)</span>
                <span className={styles.usageItem_count}>
                  {plan?.UNLIMITED_PLAYS
                    ? `${playsUsed} / Ilimitado`
                    : `${playsUsed} / ${playsTotal}`}
                </span>
              </div>
              {!plan?.UNLIMITED_PLAYS && (
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progressBar_fill} ${
                      hasExceededPlays ? styles.progressBar_fill_exceeded : ''
                    }`}
                    style={{ width: `${playsPercent}%` }}
                  />
                </div>
              )}
              {hasExceededPlays && (
                <p className={styles.warningText}>
                  ⚠ Você atingiu o limite de reproduções
                </p>
              )}
            </div>

            {/* Vídeos */}
            <div className={styles.usageItem}>
              <div className={styles.usageItem_header}>
                <span className={styles.usageItem_label}>Vídeos Criados</span>
                <span className={styles.usageItem_count}>
                  {plan?.UNLIMITED_VIDEOS
                    ? `${videosUsed} / Ilimitado`
                    : `${videosUsed} / ${videosTotal}`}
                </span>
              </div>
              {!plan?.UNLIMITED_VIDEOS && (
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progressBar_fill} ${
                      hasExceededVideos ? styles.progressBar_fill_exceeded : ''
                    }`}
                    style={{ width: `${videosPercent}%` }}
                  />
                </div>
              )}
              {hasExceededVideos && (
                <p className={styles.warningText}>
                  ⚠ Você atingiu o limite de vídeos
                </p>
              )}
            </div>

            {/* Campanhas */}
            <div className={styles.usageItem}>
              <div className={styles.usageItem_header}>
                <span className={styles.usageItem_label}>Campanhas Ativas</span>
                <span className={styles.usageItem_count}>{campaignsUsed}</span>
              </div>
            </div>
          </div>

          <div className={styles.planCard_divider} />

          <div className={styles.billingSection}>
            <h5 className={styles.billingSection_title}>Gerenciar Assinatura</h5>
            <p className={styles.billingSection_description}>
              Acesse o portal de pagamento para atualizar seu plano, alterar
              forma de pagamento ou cancelar assinatura.
            </p>
            <button
              className={styles.btnBilling}
              onClick={handleOpenBillingPortal}
              disabled={isLoadingPortal}
            >
              {isLoadingPortal ? 'Abrindo...' : 'Ir para Portal de Pagamento'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPlan;

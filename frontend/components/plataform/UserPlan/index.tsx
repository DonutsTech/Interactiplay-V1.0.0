'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { createPortalLink } from '@/service/user';
import { formatPrice } from '@/utils/formatPrice';
import { formatDateBR } from '@/utils/stringUtils';
import { useContext, useEffect, useMemo, useState } from 'react';
import styles from './UserPlan.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhotoVideo,
  faPlayCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import BtnG from '../BtnG';
import { getVideos } from '@/service/videos/videosservice';
import { useVideos } from '@/context/VideosContext';

interface IActivePlan {
  PLAYS: number;
  VIDEOS: number;
  PLAYS_PRICE?: number | null;
}

const UserPlan = () => {
  const { authUser } = useContext(AuthUserContext);
  const [portalLink, setPortalLink] = useState<string | null>(null);
  const { videoCount } = useVideos();

  if (!authUser || !(authUser.USER && authUser.USER.PLAN)) {
    return <p>Carregando...</p>;
  }

  const teste = authUser.USER.STRIPE_SUBSCRIPTION_STATUS === 'trialing';
  // const teste = false;

  const loadPlan = async () => {
    const response = await createPortalLink();

    if (typeof response === 'string') {
      setPortalLink(response);
    };
  };

  useEffect(() => {
    loadPlan();
  }, []);

  const ACTIVE_PLAN: IActivePlan = {
    PLAYS: teste ? 1000 : authUser.USER.PLAN.PLAYS,
    VIDEOS: teste ? 10 : authUser.USER.PLAN.VIDEO_LIMIT,
    PLAYS_PRICE: authUser.USER.PLAN.PLAYS_PRICE,
  };

  const [usedplan, setUsedPlan] = useState({
    plays: authUser.USER.HISTORY_PLAYS[0].QTD_PLAYS,
    videos: videoCount,
    campanhas: 0, //authUser.USER.CAMPAIGNS_QTD,
    saldo: authUser.USER.HISTORY_PLAYS[0].QTD_PLAYS - ACTIVE_PLAN.PLAYS,
  });

  const status = useMemo(() => {
    return {
      play_used: usedplan.plays,
      videos_used: usedplan.videos,
      plays_percent:
        usedplan.plays > 0 ? (usedplan.plays / ACTIVE_PLAN.PLAYS) * 100 : 0,
      videos_percent:
        usedplan.videos > 0 ? (usedplan.videos / ACTIVE_PLAN.VIDEOS) * 100 : 0,
      saldo: usedplan.saldo,
      custo: usedplan.saldo > 0 && ACTIVE_PLAN.PLAYS_PRICE ? formatPrice(usedplan.saldo * ACTIVE_PLAN.PLAYS_PRICE) : '0',
    };
  }, [
    usedplan,
    ACTIVE_PLAN.PLAYS,
    ACTIVE_PLAN.VIDEOS,
    ACTIVE_PLAN.PLAYS_PRICE,
  ]);

  const handlerGerenciarPlano = () => {
    if (portalLink) {
      window.open(portalLink, '_blank');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.container_title}>Meu Plano</h2>
      <div className={styles.container_info}>
        <div
          className={`${styles.container_info_item} ${styles.container_info_item_left}`}
        >
          <p className={styles.container_info_item_topic}>
            {teste ? 'Período de Teste' : authUser.USER.PLAN.PLAN}
          </p>
          <p
            className={`${styles.container_info_item_date} ${styles.container_info_item_text}`}
          >
            {teste ? 'Até o dia:' : 'Renova:'}{' '}
            {formatDateBR(authUser.USER.STRIPE_CURRENT_PERIOD_END)}
          </p>
          <p
            className={`${styles.container_info_item_price} ${styles.container_info_item_text}`}
          >
            {teste ? 'após ativação:' : 'investimento:'}{' '}
            {formatPrice(authUser.USER.PLAN.PRICE)}
          </p>
        </div>
        <div
          className={`${styles.container_info_item} ${styles.container_info_item_right}`}
        >
          <p
            className={`${styles.container_info_item_text} ${styles.container_info_item_acervo}`}
          >
            <FontAwesomeIcon
              icon={faPhotoVideo}
              className={styles.container_info_item_text_icon}
            />
            {'  '} Até {teste ? '10' : authUser.USER.PLAN.VIDEO_LIMIT} vídeos
          </p>
          <p
            className={`${styles.container_info_item_text} ${styles.container_info_item_plays}`}
          >
            <FontAwesomeIcon
              icon={faPlayCircle}
              className={styles.container_info_item_text_icon}
            />
            {'  '} {teste ? '1000' : authUser.USER.PLAN.PLAYS} plays
          </p>
          <p
            className={`${styles.container_info_item_text} ${styles.container_info_item_playsExtra}`}
          >
            <FontAwesomeIcon
              icon={faStar}
              className={styles.container_info_item_text_icon}
            />
            {'  '}{' '}
            {teste
              ? 'Ative'
              : `${formatPrice(authUser.USER.PLAN.PLAYS_PRICE)}/play Extra `}
          </p>
        </div>
        <div className={styles.container_info_btn}>
          <BtnG text="Gerenciar Plano" goClick={handlerGerenciarPlano} />
        </div>
      </div>
      <div className={styles.container_stats}>
        <div
          className={classNames({
            [styles.container_stats_used]: true,
            [styles.container_stats_used_plays]: true,
          })}
        >
          <div className={styles.container_stats_used_box}>
            <h4>Plays Status</h4>
            <div className={styles.container_stats_used_box_bar}>
              <div
                className={classNames({
                  [styles.container_stats_used_box_bar_fill]: true,
                  [styles.container_stats_used_box_bar_fill_middle]:
                    status.plays_percent > 80 && status.plays_percent < 100,
                  [styles.container_stats_used_box_bar_fill_full]:
                    status.plays_percent >= 100,
                })}
                style={{ width: `${status.plays_percent}%` }}
              />
              <div className={styles.container_stats_used_box_bar_dados}>
                <span>
                  <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />
                  {status.play_used}
                  <p>Plays</p>
                </span>
                <span>{status.plays_percent.toFixed(2)}%</span>
                <span><p>Franquia :</p> {ACTIVE_PLAN.PLAYS}</span>
              </div>
            </div>
            {(teste && status.saldo >= 0) ? (
              <p>
                Consumo abrangido no período de teste. Ative seu plano para continuar utilizando.
              </p>
            ) : status.saldo <= 0 ? (
              <p>
                Consumo abrangido na franquia do plano. Você tem <span>{ACTIVE_PLAN.PLAYS - status.play_used}</span> plays restantes.
              </p>
            ) : (
              <p>
                Total de <span>{status.saldo}</span> plays extras consumidos, com custo de <span>{status.custo}</span>.
              </p>
            )}
          </div>
        </div>
        <div
          className={classNames({
            [styles.container_stats_used]: true,
            [styles.container_stats_used_videos]: true,
          })}
        >
          <div className={styles.container_stats_used_box}>
            <h4>Videos Status</h4>
            <div className={styles.container_stats_used_box_bar}>
              <div
                className={classNames({
                  [styles.container_stats_used_box_bar_fill]: true,
                  [styles.container_stats_used_box_bar_fill_middle]:
                    status.videos_percent > 80 && status.videos_percent < 100,
                  [styles.container_stats_used_box_bar_fill_full]:
                    status.videos_percent >= 100,
                })}
                style={{ width: `${status.videos_percent}%` }}
              />
              <div className={styles.container_stats_used_box_bar_dados}>
                <span>
                  <FontAwesomeIcon icon={faPhotoVideo} className={styles.icon} />
                  {status.videos_used}
                  <p>Videos</p>
                </span>
                <span>{status.videos_percent.toFixed(2)}%</span>
                <span><p>Franquia :</p> {ACTIVE_PLAN.VIDEOS}</span>
              </div>
            </div>
            <p>
              {status.videos_percent >= 100 ? 'Limite de vídeos atingido. Considere atualizar seu plano para adicionar mais vídeos.' : ''}
            </p>
          </div>
        </div>
        <div className={styles.container_stats_campanha}>
          <h4>Campanhas Ativas:</h4>
          <p>{usedplan.campanhas} Campanhas</p>
        </div>
      </div>
    </div>
  );
};

export default UserPlan;

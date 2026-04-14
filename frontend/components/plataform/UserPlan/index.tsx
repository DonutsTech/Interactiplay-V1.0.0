'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { createPortalLink } from '@/service/user';
import { formatPrice } from '@/utils/formatPrice';
import { formatDateBR } from '@/utils/stringUtils';
import { useContext, useState } from 'react';
import styles from './UserPlan.module.scss';
import { ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo, faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';
// import { faEmpire } from '@fortawesome/brand';

const UserPlan = () => {
  const { authUser } = useContext(AuthUserContext);

  if (!authUser || !(authUser.USER && authUser.USER.PLAN)) {
    return <p>Carregando...</p>;
  }

  const teste = authUser.USER.STRIPE_SUBSCRIPTION_STATUS === 'trialing';

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
            {'  '} {teste ? 'Ative' : `${formatPrice(authUser.USER.PLAN.PLAYS_PRICE)}/play Extra `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPlan;

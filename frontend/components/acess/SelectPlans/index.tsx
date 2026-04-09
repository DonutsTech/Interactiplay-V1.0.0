'use client';

import { useContext, useEffect, useState } from 'react';
import styles from './SelectPlans.module.scss';
import { UserContext } from '@/context/UserContext';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import ButtonAcess from '../ButtonAcess';
import { Plan } from '@/@types/plan';
import { getPlan } from '@/service/plan';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift,
  faPhotoVideo,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

const SelectPlans = () => {
  const { user, setUserState } = useContext(UserContext);
  const [planos, setPlanos] = useState<Plan[]>([]);
  const [selectPlanStatus, setSelectPlanStatus] = useState<string>(
    user.selectedPlan
  ); 



  const handleAssinPlan = async () => {

  }

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getPlan();
        setPlanos(data.reverse());
      } catch (error) {
        console.error('Erro ao buscar planos:', error);
      }
    };

    fetchPlans();
  }, []); 

  if (planos.length === 0) {
    return (
      <div className={styles.container}>
        <p>Carregando planos...</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <Image
          src={logo}
          alt="Logo"
          className={styles.logo}
          draggable={false}
          loading="eager"
        />
        <div className={styles.header}>
          <h3>Bem-vindo, {(user?.name).split(' ')[0]}!</h3>
          <p>Escolha o plano que melhor se encaixa para o seu Negócio.</p>
        </div>
        <div className={styles.body}>
          <div className={styles.body_list}>
            <div
              className={classNames({
                [styles.body_list_item]: true,
                [styles.body_list_item_bonus]: true,
                [styles.body_list_item_active]: selectPlanStatus !== '',
              })}
            >
              <h4>
                <FontAwesomeIcon icon={faGift} className={styles.icon} />
                14 dias grátis*
              </h4>
              <div className={styles.info}>
                <p>
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className={styles.icon}
                  />
                  ou 1000 plays
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPhotoVideo}
                    className={styles.icon}
                  />
                  Até 10 Videos no Acervo
                </p>
              </div>
            </div>
            {planos
              .filter((plans) => plans.PLAYS !== 1000)
              .map((plan) => (
                <div
                  key={plan.ID}
                  className={classNames({
                    [styles.body_list_item]: true,
                    [styles.body_list_item_selection]: true,
                    [styles.body_list_item_active]:
                      selectPlanStatus === plan.ID,
                  })}
                  onClick={() => {
                    if (selectPlanStatus === plan.ID) {
                      setSelectPlanStatus('');
                      return;
                    }
                    setSelectPlanStatus(plan.ID);
                  }}
                >
                  <h4>{plan.PLAN}</h4>
                  <div className={styles.info}>
                    <div className={styles.left}>
                      <p>
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          className={styles.icon}
                        />
                        {plan.PLAYS} Plays
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faPhotoVideo}
                          className={styles.icon}
                        />
                        Até {plan.VIDEO_LIMIT} videos no acervo
                      </p>
                    </div>
                    <div className={styles.right}>
                      <p className={styles.aviso}>*Após o teste</p>
                      <p className={styles.price}>
                        {plan.PRICE.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                      <p className={styles.priceperplay}>
                        {plan.PLAYS_PRICE.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}{' '}
                        /play
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.btn}>
          <ButtonAcess
            text="Assinar"
            type="button"
            disabled={selectPlanStatus === ''}
            goClick={() => {
              setUserState({
                ...user,
                selectedPlan: selectPlanStatus,
              })
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SelectPlans;

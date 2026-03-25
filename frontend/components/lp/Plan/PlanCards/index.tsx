'use client';

import type { Plan } from '@/@types/plan';
import styles from './PlanCards.module.scss';
import { useAccessType } from '@/context/AcessTypeContext';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


interface PlanCardsProps {
  plan: Plan;
  setLoading?: (loading: boolean) => void;
  setLoadingMessage?: (message: string | undefined) => void;
}

const PlanCards = ({ plan, setLoading, setLoadingMessage }: PlanCardsProps) => {
  const { PLAN, PLAYS, PLAYS_PRICE, PRICE, VIDEO_LIMIT } = plan;
  const { setSelectedPlan, setAccessType } = useAccessType();

  const features = [VIDEO_LIMIT];
  const playsIncluded = PLAYS;
  const pricePerPlay = PLAYS_PRICE.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const price = PRICE.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const handleSelectPlan = async () => {
    if (setLoadingMessage) setLoadingMessage("Aguarde, escolhendo plano...");
    if (setLoading) setLoading(true);
    setSelectedPlan(plan);
    setAccessType("cadastro");
    setTimeout(() => {
      if (setLoading) setLoading(false);
      if (setLoadingMessage) setLoadingMessage(undefined);
    }, 1200);
  };

  return (
    <div className={classNames({
      [styles.planCard]: true,
      [styles.popular]: PLAN === "Profissional",
    })}>
      {PLAN === "Profissional" && <div className={styles.popularBadge}>MAIS POPULAR</div>}
      <div className={styles.header}>
        <h2>{PLAN}</h2>
        <p className={styles.price}>
          <span>{price}</span> /mês
        </p>
      </div>
      <div className={styles.content}>
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>
              <FontAwesomeIcon
                icon={faCheck}
                width={16}
                className={styles.checkmarkIcon}
              />{" "}
              limite de acervo {feature} vídeos
            </li>
          ))}
          <li>
            <FontAwesomeIcon
              icon={faCheck}
              width={16}
              className={styles.checkmarkIcon}
            />{" "}
            {playsIncluded} Plays
            <FontAwesomeIcon
              icon={faCircleInfo}
              width={16}
              className={styles.infoIcon}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCheck}
              width={16}
              className={styles.checkmarkIcon}
            />{" "}
            {pricePerPlay
              ? pricePerPlay
              : PLAYS_PRICE}{" "}
            por play extra
          </li>
        </ul>
      </div>
      <Link href="/acess" onClick={handleSelectPlan}>
        Selecionar
      </Link>
    </div>
  );
};

export default PlanCards;
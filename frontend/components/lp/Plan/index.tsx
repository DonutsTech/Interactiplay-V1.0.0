import { useEffect, useState } from 'react';
import type { Plan } from '@/@types/plan';
import styles from './Plan.module.scss';
import { getPlan } from '@/service/plan';
import PlanCards from './PlanCards';

const Plan = () => {
  const [planos, setPlanos] = useState<Plan[]>([]);
  // #apagar remover esse bloco antes do deploy
  const [mockado, setMockado] = useState(false);
  const mockPlan: Plan[] = [
    {
      ID: '7d339164-93cc-4094-a5ac-871c935a193b',
      PLAN: 'Empresarial',
      PLAYS: 50000,
      PLAYS_PRICE: 0.02,
      PRICE: 499.9,
      STATUS: true,
      VIDEO_LIMIT: 100,
      STRIPE_PLAN_ID: 'prod_SLXXovm87E2uxy',
      STRIPE_PLAN_PRICE: 'price_1RQqSLHs4q3jg2YInoRxciKE',
    },
    {
      ID: 'ba6347fa-01f5-4333-acfe-ece4600a6487',
      PLAN: 'Profissional',
      PLAYS: 25000,
      PLAYS_PRICE: 0.03,
      PRICE: 249.9,
      STATUS: true,
      VIDEO_LIMIT: 50,
      STRIPE_PLAN_ID: 'prod_SLXWQ4ISRENBsG',
      STRIPE_PLAN_PRICE: 'price_1RQqRuHs4q3jg2YI1ul11egO',
    },
    {
      ID: 'db9da2ad-c416-45d7-a420-41c73fef270b',
      PLAN: 'Essencial',
      PLAYS: 6000,
      PLAYS_PRICE: 0.05,
      PRICE: 89.9,
      STATUS: true,
      VIDEO_LIMIT: 20,
      STRIPE_PLAN_ID: 'prod_SLGEgeCx2AJBIZ',
      STRIPE_PLAN_PRICE: 'price_1RQZiUHs4q3jg2YI8tNC9snG',
    },
    {
      ID: 'd884b26e-1e90-40ac-b185-6e0ace6da379',
      PLAN: '14 dias Grátis',
      PLAYS: 1000,
      PLAYS_PRICE: 0.05,
      PRICE: 0,
      STATUS: true,
      VIDEO_LIMIT: 10,
      STRIPE_PLAN_ID: 'prod_RS6PNcaXyfCg7U',
      STRIPE_PLAN_PRICE: 'price_1RQZiUHs4q3jg2YI8tNC9snG',
    },
  ];
  // #apagar remover esse bloco antes do deploy

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getPlan();
        console.log(data);

        // #apagar remover esse bloco antes do deploy
          if (!data || data.length === 0) {
            setMockado(true);
            setPlanos(mockPlan);
            return;
          } else {
            setPlanos(data.reverse());
            setMockado(false);
          }
        // #apagar remover esse bloco antes do deploy
      } catch (error) {
        console.error('Erro ao buscar planos:', error);
        setMockado(true);
        setPlanos(mockPlan);
      }
    };
    fetchPlans();
  }, []);

  return (
    <section
      id="plan"
      className={styles.section}
      aria-label="Seção de Planos do site Interactiplay"
    >
      <div className={styles.header}>
        <h2>Planos {mockado && '(Mockado)'}</h2>
        <p>Conheça nossos planos e escolha o que mais se adeque a você!</p>
      </div>
      <div className={styles.container}>
        {planos.length !== 0 &&
          planos.map(
            (plan) =>
              plan.PRICE !== 0 && <PlanCards key={plan.ID} plan={plan} />
          )}
      </div>
    </section>
  );
};

export default Plan;

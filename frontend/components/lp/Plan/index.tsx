
import { useEffect, useState } from 'react';
import type { Plan } from '@/@types/plan';
import styles from './Plan.module.scss';
import { getPlan } from '@/service/plan';
import PlanCards from './PlanCards';




const Plan = () => {
  const [planos, setPlanos] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const data = await getPlan();
      console.log(data);
      setPlanos(data.reverse());
    }
    fetchPlans();
  }, []);

  return (
      <section id="plan" className={styles.section} aria-label="Seção de Planos do site Interactiplay">
      <div className={styles.header}>
        <h2>Planos</h2>
        <p>Conheça nossos planos e escolha o que mais se adeque a você!</p>
      </div>
      <div className={styles.container}>
        {
          planos.length !== 0 && (planos.map((plan) => (
            plan.PRICE !== 0 && (
              <PlanCards key={plan.ID} plan={plan} />
            )
          )))
        }
      </div>

      </section>
  )
};

export default Plan;

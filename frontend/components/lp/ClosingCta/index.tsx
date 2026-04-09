import BtnDefault from '@/components/globals/BtnDefault';
import styles from './ClosingCta.module.scss';
import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';
import { useIsLoading } from '@/context/IsLoadingContext';

const ClosingCta = () => {
  const { setIsLoading } = useIsLoading();
  const { user, setUserState } = useContext(UserContext);


  return (
    <section
      className={styles.closingCta}
      id="closing-cta"
      aria-label="Seção de ultima chamada para a promoção"
    >
      <div className={styles.closingCta_container}>
        <div className={styles.closingCta_container_head}>
          <h2 className={styles.closingCta_container_head_title}>
            Experimente Gratuitamente por até 14 Dias
          </h2>
          <p className={styles.closingCta_container_head_text}>
            No final do teste, você já verá um aumento expressivo nos seus
            resultados.
          </p>
          </div>
          <div className={styles.closingCta_container_btn}>
          <BtnDefault 
            label="Experimentar Grátis"
            href='/acess/cadastro'
            onClick={async () => {
                setIsLoading(true);
                setUserState({
                  ...user,
                  selectedPlan: 'db9da2ad-c416-45d7-a420-41c73fef270b',
                });
                setTimeout(() => {
                  setIsLoading(false);
                }, 1200);
              }}
          />
        </div>
      </div>
    </section>
  );
};

export default ClosingCta;

import BtnDefault from '@/components/globals/BtnDefault';
import styles from './ClosingCta.module.scss';

const ClosingCta = () => {
  return (
    <section
      className={styles.closingCta}
      id="closing-cta"
      aria-label="Seção de ultima chamada para a promoção"
    >
      <div className={styles.closingCta_container}>
        <div className={styles.closingCta_container_head}>
          <h2 className={styles.closingCta_container_head_title}>
            Experimente Gratuitamente por 14 Dias
          </h2>
          <p className={styles.closingCta_container_head_text}>
            No final dos 14 dias, você já verá um aumento expressivo nos seus
            resultados.
          </p>
          </div>
          <div className={styles.closingCta_container_btn}>
          <BtnDefault 
            label="Experimentar Grátis"
            href='/acess/cadastro'
          />
        </div>
      </div>
    </section>
  );
};

export default ClosingCta;

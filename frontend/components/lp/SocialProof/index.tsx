
import styles from './SocialProof.module.scss';

interface Stat {
  number: string;
  description: string;
  highlight: string;
}



const SocialProof = () => {
const statsData: Stat[] = [
    {
      number: "2×",
      description: "taxa de conclusão em comparação aos estáticos",
      highlight: "dobro da"
    },
    {
      number: "+41%",
      description: "de engajamento comparado aos vídeos tradicionais",
      highlight: "mais"
    },
    {
      number: "+47%",
      description: "mais tempo de atenção do que os tradicionais",
      highlight: "mais"
    },
    {
      number: "5×",
      description: "mais conversões quando o público assiste até o fim",
      highlight: "até"
    }
  ];

  return (
    <section className={styles.socialProof}>
      <div className={styles.socialProof_container}>
        <div className={styles.socialProof_container_header}>
          <h2 className={styles.socialProof_container_header_title}>
            Comprovado por Estudos e Pesquisas
          </h2>
          <p className={styles.socialProof_container_header_subtitle}>
            Dados independentes que comprovam a eficácia dos vídeos interativos
          </p>
        </div>

        <div className={styles.socialProof_container_stats}>
          {statsData.slice(0, 2).map((stat, index) => (
            <div key={index} className={styles.socialProof_container_stats_item}>
              <div className={styles.socialProof_container_stats_item_number}>
                {stat.number}
              </div>
              <div className={styles.socialProof_container_stats_item_text}>
                <span className={styles.socialProof_container_stats_item_text_highlight}>
                  {stat.highlight}
                </span>{' '}
                {stat.description}
              </div>
            </div>
          ))}

          <div className={styles.socialProof_container_conclusion}>
            <p className={styles.socialProof_container_conclusion_text}>
              <strong>Quando o público permanece assistindo até o fim ouvindo exatamente a mensagem que faz sentido para ele, o resultado é claro:</strong>
            </p>
            <div className={styles.socialProof_container_conclusion_highlight}>
              Até <span>5× mais conversões</span>
            </div>
          </div>

          {statsData.slice(2, 4).map((stat, index) => (
            <div key={index + 2} className={styles.socialProof_container_stats_item}>
              <div className={styles.socialProof_container_stats_item_number}>
                {stat.number}
              </div>
              <div className={styles.socialProof_container_stats_item_text}>
                <span className={styles.socialProof_container_stats_item_text_highlight}>
                  {stat.highlight}
                </span>{' '}
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
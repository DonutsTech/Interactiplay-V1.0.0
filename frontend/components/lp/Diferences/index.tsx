import React from "react";
import styles from "./Diferences.module.scss";

interface Stat {
  label: string;
  value: string;
  description: string;
}

interface Card {
  title: string;
  type: 'traditional' | 'interactive';
  valueType: 'negative' | 'positive';
  stats: Stat[];
}

const Difference = () => {
  const cardsData: Card[] = [
    {
      title: "VSL TRADICIONAL",
      type: "traditional",
      valueType: "negative",
      stats: [
        {
          label: "Exposição",
          value: "30-40%",
          description: "Espectador assiste até 30-40% do vídeo"
        },
        {
          label: "Conclusão",
          value: "40-50%",
          description: "Não chegam ao pitch final"
        },
        {
          label: "Conversão",
          value: "2-3%",
          description: "Taxa de conversão média"
        }
      ]
    },
    {
      title: "ISL",
      type: "interactive",
      valueType: "positive",
      stats: [
        {
          label: "Exposição",
          value: "+47%",
          description: "Mais tempo de exposição ao vídeo"
        },
        {
          label: "Conclusão",
          value: "≈90%",
          description: "2x mais pessoas chegam à oferta"
        },
        {
          label: "Conversão",
          value: "+25%",
          description: "Aumento na conversão média"
        }
      ]
    }
  ];

  return (
    <section className={styles.difference} aria-label="Comparativo de desempenho entre VSL Tradicional e ISL InteractiPlay">
        <h2 className={styles.difference_container_title}>
          VSL Tradicional vs ISL InteractiPlay
        </h2>
      <div className={styles.difference_container}>

        <div className={styles.difference_container_grid}>
          {cardsData.map((card, cardIndex) => (
            <React.Fragment key={card.title}>
              <div className={`${styles.difference_container_card} ${styles[card.type]}`}>
                <div className={styles.difference_container_card_header}>
                  <h3 className={styles.difference_container_card_header_title}>{card.title}</h3>
                </div>
                
                <div className={styles.difference_container_card_stats}>
                  {card.stats.map((stat, statIndex) => (
                    <div key={`${card.title}-${stat.label}`} className={styles.difference_container_card_stats_item}>
                      <div className={styles.difference_container_card_stats_item_label}>{stat.label}</div>
                      <div className={`${styles.difference_container_card_stats_item_value} ${styles[card.valueType]}`}>
                        {stat.value}
                      </div>
                      <div className={styles.difference_container_card_stats_item_description}>
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* VS only after first card */}
              {cardIndex === 0 && <div className={styles.difference_container_vs}>VS</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
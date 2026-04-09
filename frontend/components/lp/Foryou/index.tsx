import styles from './Foryou.module.scss';

interface Item {
  text: string;
}

interface Column {
  title: string;
  type: 'for' | 'not-for';
  items: Item[];
}


const Foryou = () => {

  const columnsData: Column[] = [
    {
      title: "Para quem é",
      type: "for",
      items: [
        {
          text: "Infoprodutores que precisam destacar suas ofertas em um mercado cada vez mais competitivo."
        },
        {
          text: "Agências de marketing que buscam entregar ROI mais alto para seus clientes."
        },
        {
          text: "Profissionais criativos que querem transformar ideias em funis interativos."
        },
        {
          text: "Negócios digitais iniciantes que precisam de simplicidade para começar a vender rápido."
        }
      ]
    },
    {
      title: "Para quem não é",
      type: "not-for",
      items: [
        {
          text: "Quem não usa vídeo de vendas"
        },
        {
          text: "Quem espera resultados sem testar e otimizar."
        },
        {
          text: "Quem procura atalhos milagrosos em vez de estruturar um funil sólido."
        },
        {
          text: "Quem não valoriza dados e otimização"
        }
      ]
    }
  ];
  return (
<section className={styles.foryou} aria-label="Para quem a InteractiPlay é indicada e contraindicações">
      <div className={styles.foryou_container}>
        <h2 className={styles.foryou_container_title}>
          Para quem é a InteractiPlay?
        </h2>

        <div className={styles.foryou_container_grid}>
          {columnsData.map((column) => (
            <div key={column.title} className={`${styles.foryou_container_column} ${styles[column.type]}`}>
              <div className={styles.foryou_container_column_header}>
                <h3 className={styles.foryou_container_column_header_title}>{column.title}</h3>
              </div>
              
              <div className={styles.foryou_container_column_list}>
                {column.items.map((item, index) => (
                  <div key={index} className={styles.foryou_container_column_list_item}>
                    <span className={styles.foryou_container_column_list_item_icon}>
                      {column.type === 'for' ? '🔹' : '❌'}
                    </span>
                    <p className={styles.foryou_container_column_list_item_text}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Foryou;

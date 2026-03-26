import FaqItem from '@/components/globals/FaqItem';
import styles from './Faq.module.scss';

const FaqLp = () => {

  const faq = [
    {
      question: 'Como calcular quantos Plays vou precisar?',
      answer:
        'Multiplique seus acessos mensais pela taxa de play dos seus vídeos (geralmente entre 30-50%). Exemplo: 10.000 acessos × 40% = 4.000 plays. Na dúvida, comece pelo Essencial e faça upgrade quando precisar.',
    },
    {
      question: 'Como funciona a cobrança por play?',
      answer: 'Cada visitante que dá play conta como 1 uso. Simples assim.',
    },
    {
      question: 'Vídeos interativos gastam plays extras?',
      answer:
        'Não. O play é contado uma única vez, no vídeo inicial. Todas as ramificações e interações estão incluídas.',
    },
    {
      question: 'E se eu ultrapassar meu limite de plays?',
      answer:
        'Seus vídeos continuam funcionando. Você pode comprar plays extras ou fazer upgrade do plano a qualquer momento pelo painel.',
    },
    {
      question: 'Posso fazer upgrade de plano?',
      answer:
        'Sim, a qualquer momento. Você paga só a diferença proporcional e o acesso é imediato. Seus dados e métricas são preservados.',
    },
    {
      question: 'Como funciona o Teste Grátis?',
      answer:
        '14 dias ou 1.000 plays (o que acabar primeiro). Ao final, o plano escolhido é cobrado automaticamente. Cancele antes se preferir não continuar — sem cobrança.',
    },
    {
      question: 'Qual a diferença para um player comum?',
      answer:
        'Players tradicionais reproduzem vídeos lineares. O InteractiPlay transforma seu vídeo em uma experiência interativa (ISL), onde o espectador escolhe caminhos e recebe conteúdo personalizado — gerando mais engajamento e conversão.',
    },
    {
      question: 'Preciso saber programar?',
      answer:
        'Não. Você faz upload, configura as interações no painel visual e cola o embed na sua página. Se já publica páginas de venda, consegue usar.',
    },
    {
      question: 'Como funciona o suporte?',
      answer:
        'Chat e e-mail em horário comercial (seg-sex), com resposta em até 24h úteis. Também temos uma base de conhecimento com tutoriais.',
    },
    {
      question: 'Como funciona o reembolso?',
      answer:
        'Reembolso integral em até 7 dias após a contratação, sem burocracia. Basta solicitar ao suporte.',
    },
  ];

  return (
    <section
      className={styles.faq}
      id="faq-lp"
      aria-label="Seção de Perguntas Frequentes do site Interactiplay"
    >
      <div className={styles.faq_container}>
        <h2 className={styles.faq_container_title}>Perguntas Frequentes</h2>
        <div className={styles.faq_container_list}>
          {faq.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqLp;

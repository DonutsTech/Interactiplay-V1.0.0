'use client';

import BtnDefault from '@/components/globals/BtnDefault';
import { useIsLoading } from '@/context/IsLoadingContext';
import { UserContext } from '@/context/UserContext';
import classNames from 'classnames';
import { useContext } from 'react';
import styles from './Features.module.scss';

const Features = () => {
  const { setIsLoading } = useIsLoading();
  const { user, setUser } = useContext(UserContext);

  const featuresData = [
    {
      video: '/media/videos/botoes_de_acao.mp4',
      title: 'Botões de Ação',
      description:
        'Um botão surge dentro ou abaixo do seu VSL, sincronizado perfeitamente com o tempo do vídeo, impulsionando sua conversão.',
      reverse: false,
    },
    {
      video: '/media/videos/SmartPlay.mp4',
      title: 'SmartPlay',
      description:
        'O Smart Autoplay é compatível com todos os navegadores, simulando o início imediato do vídeo para criar urgência, incentivando a visualização completa. Ao clicar, o vídeo reinicia, garantindo que nenhum segundo seja perdido.',
      reverse: true,
    },
    {
      video: '/media/videos/flow.mp4',
      title: 'Flow',
      description:
        'Conecte vídeos para deixar a experiência do seu cliente interativa e personalizada.',
      reverse: false,
    },
  ];

  return (
    <section
      className={styles.features}
      aria-label="Apresentação das funcionalidades do interactiplay"
      id="features"
      data-scroll-behavior="smooth"
    >
      <div className={styles.features_container}>
        <h2 className={styles.features_container_title}>
          Explore as Funcionalidades Poderosas da InteractiPlay
        </h2>
        <p className={styles.features_container_description}>
          Descubra como nossa plataforma simplifica a edição de vídeo e oferece
          recursos avançados para resultados profissionais.
        </p>
        <div className={styles.features_container_content}>
          {featuresData.map((item, index) => (
            <div
              key={index}
              className={classNames({
                [styles.features_container_content_item]: true,
                [styles.features_container_content_item_canhota]: item.reverse,
              })}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.features_container_content_item_video}
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div className={styles.features_container_content_item_textBox}>
                <h3
                  className={
                    styles.features_container_content_item_textBox_title
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    styles.features_container_content_item_textBox_description
                  }
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.features_container_cta}>
          <h2>Engaje 47% Mais com Vídeos Interativos!</h2>
          <p>
            Leve seus leads a ação de forma mais eficiente e direta com CTAS
            otimizados e uma jornada de compra com zero fricção. Converta mais
            leads em vendas com menos esforço.
          </p>
          <BtnDefault
            label="Criar minha primeira ISL"
            href="/acess/cadastro"
            onClick={async () => {
              setIsLoading(true);
              setUser({
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

export default Features;

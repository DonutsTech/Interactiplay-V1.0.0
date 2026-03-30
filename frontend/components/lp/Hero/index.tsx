'use client';

import styles from './Hero.module.scss';
import { useContext, useEffect, useState } from 'react';
import BtnDefault from '@/components/globals/BtnDefault';
import { useIsLoading } from '@/context/IsLoadingContext';
import { UserContext } from '@/context/UserContext';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  const { setIsLoading } = useIsLoading();
  const { setUserState, user } = useContext(UserContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={styles.hero}
      id="hero"
      aria-label="Seção Hero do site Interactiplay"
      data-scroll-behavior="smooth"
    >
      <div className={styles.hero_container}>
        <div className={styles.hero_container_left}>
          <h1 className={styles.hero_container_left_title}>
            Crie vídeos de vendas interativos que convertem 5x mais em relação a
            vídeos estáticos
          </h1>{' '}
          <br />
          <h3 className={styles.hero_container_left_description}>
            Apresentamos a ISL - Interacti Sales Letter: uma nova geração de
            vídeos de vendas que adaptam a mensagem à dor do seu cliente levá-lo
            direto à ação em tempo real.
          </h3>{' '}
          <br />
          <div className={styles.hero_container_left_btn}>
            <BtnDefault
              label="Impulsionar as minhas Vendas"
              href="/acess/cadastro"
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

        <div className={styles.hero_container_right}>
          <div className={styles.hero_container_right_videoWrapper}>
            {mounted && (
              //Mockup provisório, substituir depois por Campanha interativo
              <video
                src="/media/videos/VHero_mockup.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.hero_container_videoMobile}
              >
                Seu navegador não suporta vídeo.
              </video>
            )}
          </div>
          <div className={styles.hero_container_right_btn}>
            <BtnDefault
              label="Impulsionar as minhas Vendas"
              href="/acess/cadastro"
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

          <br />
        </div>
        <div className={styles.puv} aria-label="Proposta Única de Valor">
          <div className={styles.puv_container}>
            <p>
              Nas VSLs tradicionais, todos assistem ao mesmo roteiro. O
              problema? Grande parte abandona o vídeo antes do pitch final. A
              ISL muda esse jogo: cada clique revela o que o cliente sente, e o
              vídeo se adapta de acordo com as necessidades do seu lead. Você os
              transforma em participantes ativos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

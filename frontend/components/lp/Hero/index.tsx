"use client";

import { useIsMobile } from '@/context/isMobileContext';
import styles from './Hero.module.scss';
import { useEffect, useState } from 'react';
import { useAccessType } from '@/context/AcessTypeContext';
import BtnDefault from '@/components/globals/BtnDefault';

interface HeroProps {
  setLoading?: (loading: boolean) => void;
}

const Hero = ({ setLoading }: HeroProps) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  const { setAccessType, setPromo } = useAccessType();

  useEffect(() => {
    setMounted(true);
  }, []);

  return(
    <section 
      className={styles.hero}
      id='hero'
      aria-label='Seção Hero do site Interactiplay'
    >
      <div className={styles.hero_container}>
        <div className={styles.hero_container_left}>
          <h1 className={styles.hero_container_left_title}>
            Crie vídeos de vendas interativos que convertem 5x mais em relação a
            vídeos estáticos
          </h1>{" "}
          <br />
          <h3 className={styles.hero_container_left_description}>
            Apresentamos a ISL - Interacti Sales Letter: uma nova geração de
            vídeos de vendas que adaptam a mensagem à dor do seu cliente levá-lo
            direto à ação em tempo real.
          </h3>{" "}
          <br />
          <div className={styles.hero_container_left_btn}>
            <BtnDefault
              label="Impulsionar as minhas Vendas"
              href="/acess"
              onClick={async () => {
                if (setLoading) setLoading(true);
                setAccessType("cadastro");
                setPromo(false);
                setTimeout(() => {
                  if (setLoading) setLoading(false);
                }, 1200);
              }}
            />
          </div>
        </div>

        <div className={styles.hero_container_right}>
          <div className={styles.hero_container_right_videoWrapper}>
            {mounted &&
              (isMobile ? (
                <iframe
                  srcDoc={`
              <video 
                src="/media/videos/mobileTeste.mp4" 
                autoplay 
                muted 
                loop 
                playsinline 
                style="width:100%; height:100%; border-radius:16px; object-fit:cover;">
                Seu navegador não suporta vídeo.
              </video>
            `}
                  scrolling="no"
                  allowFullScreen
                  title="VideoLocal"
                  className={styles.hero_container_videoMobile}
                />
              ) : (
                <iframe
                  srcDoc={`
              <div id="interactPlayer" 
                data-id="0197fa85-af38-77db-9c33-6feea6f75433" 
                style="margin:0 auto; width:100%; height:100%; overflow:hidden;"></div>
              <script src="https://d2o4sllvj1jr8r.cloudfront.net/PlayerJs/player.min.js" defer></script>
            `}
                  scrolling="no"
                  allowFullScreen
                  title="InteractPlayer"
                  className={styles.hero_container_videoDesk}
                />
              ))}

            {/* <source src='/media/videos/exemple.mp4' type='video/mp4' /> */}
          </div>
          <div className={styles.hero_container_right_btn}>
            <BtnDefault
              label="Impulsionar as minhas Vendas"
              href="/acess"
              onClick={() => {
                setAccessType("cadastro");
                // setPromo(false);
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
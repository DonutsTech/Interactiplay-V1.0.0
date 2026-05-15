'use client';

import { useState } from 'react';
import styles from './Tutorial.module.scss';
import BtnG from '../../BtnG';

interface IBtns {
  text: string;
  step: number;
}

const Tutorial = () => {
  const [step, setStep] = useState(1);

  const btns: IBtns[] = [
    { text: 'Primeiros Passos', step: 1 },
    { text: 'Flow', step: 2 },
    { text: 'Features', step: 3 },
    { text: 'Campanha', step: 4 },
  ];

  const embeds = [
    {
      step: 1,
      src: '/media/videos/Monstrinho_no0.mp4',
    },
    {
      step: 2,
      src: '/media/videos/SmartPlay.mp4',
    },
    {
      step: 3,
      src: '/media/videos/flow.mp4',
    },
    {
      step: 4,
      src: '/media/videos/exemple.mp4',
    },

  ];

  const currentEmbed = embeds.find((embed) => embed.step === step);

  return (
    <div className={styles.tutorial}>
      <div className={styles.btns}>
        {btns.map((btn) => (
          <div key={btn.step} className={styles.btn}>
            <BtnG
              text={btn.text}
              goClick={() => setStep(btn.step)}
              disabled={step === btn.step}
            />
          </div>
        ))}
      </div>

      <div className={styles.videoContainer}>
        {currentEmbed && (
          <video key={currentEmbed.step} controls preload="metadata" className={styles.tutorialVideo}>
            <source src={currentEmbed.src} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}
      </div>
    </div>
  );
};

export default Tutorial;

'use client';

import styles from './Tutorial.module.scss';

const Tutorial = () => {

  return (
    <div className={styles.tutorial}>
      {/* Aqui vamos colocar o conteúdo do tutorial em embed */}
      <video controls className={styles.tutorialVideo}>
        <source src="/media/videos/Monstrinho_no0.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default Tutorial;

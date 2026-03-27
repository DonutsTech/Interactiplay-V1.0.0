'use client';

import styles from './LottieDoodle.module.scss';
import animationData from '@/data/animation.json';
import Lottie from 'lottie-react';

const LottieDoodle: React.FC = () => {
  
  return (
    <div className={styles.lottieWrapper}>
      <Lottie 
        animationData={animationData}
        loop={true}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          imagePreserveAspectRatio: 'xMidYMid slice',
        }}      
      />
    </div>
  );
};

export default LottieDoodle;
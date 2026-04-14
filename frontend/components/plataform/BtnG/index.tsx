'use client';

import { AnimatedLogo } from '@/components/globals/AnimateLogo';
import styles from './BtnG.module.scss';
import { useIsLoading } from '@/context/IsLoadingContext';


interface BtnGProps {
  text: string;
  disabled?: boolean;
  goClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const BtnG = (props: BtnGProps) => {

  const { isLoading } = useIsLoading();

  return (
    <button 
      className={styles.btnG}
      disabled={isLoading || props.disabled }
      onClick={() => props.goClick}
      type={props.type || 'button'}
      >
      {props.text}
      {isLoading && <AnimatedLogo size={24} className={styles.loading} />}
    </button>
  )
};

export default BtnG;
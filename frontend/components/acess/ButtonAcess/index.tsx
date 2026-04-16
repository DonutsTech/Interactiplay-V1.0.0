'use client';

import { useIsLoading } from '@/context/ErrorContext';
import styles from './ButtonAcess.module.scss';
import { AnimatedLogo } from '@/components/globals/AnimateLogo';

interface ButtonAcessProps {
  text: string;
  goClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  inline?: boolean;
}

const ButtonAcess = ({
  text,
  goClick,
  type = 'submit',
  disabled,
  inline,
}: ButtonAcessProps) => {
  const { isLoading } = useIsLoading();

  return (
    <>
      <button
        className={`${styles.button} ${inline ? styles.inline : ''}`}
        onClick={goClick}
        disabled={isLoading || disabled}
        type={type}
      >
        {isLoading ? (
          <>
            Aguarde ... <AnimatedLogo size={32} className={styles.loading} />
          </>
        ) : (
          text
        )}
      </button>
        
    </>
  );
};

export default ButtonAcess;

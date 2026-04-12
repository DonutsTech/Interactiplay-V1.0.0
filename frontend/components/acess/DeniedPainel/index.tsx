'use client';

import logo from '@/assets/images/logo_white_dg.svg';
import { useIsLoading } from '@/context/IsLoadingContext';
import { UserContext } from '@/context/UserContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import ButtonAcess from '../ButtonAcess';
import styles from './DeniedPainel.module.scss';

const DeniedPainel = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const { setIsLoading } = useIsLoading();

  const onDenied = () => {
    if (user.email === '' || user.name === '' || user.id === '') {
      setIsLoading(true);
      router.push('/acess/cadastro');

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }

    setIsLoading(true);
    router.push('/acess/plans');

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logo do site Interactiplay"
        className={styles.logo}
        loading="lazy"
        draggable={false}
      />
      <div className={styles.head}>
        <h2>Desculpe {user.name.split(' ')[0]}!</h2>
        <p>
          <br /> Por favor, Confira os dados e Tente novamente.
        </p>
      </div>

      <div className={styles.btn}>
        <ButtonAcess text="Tentar novamente" goClick={onDenied} />
      </div>
    </div>
  );
};

export default DeniedPainel;

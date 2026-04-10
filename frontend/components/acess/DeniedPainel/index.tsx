'use client';

import { UserContext } from '@/context/UserContext';
import styles from './DeniedPainel.module.scss';
import { useContext, useEffect } from 'react';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import ButtonAcess from '../ButtonAcess';
import { useIsLoading } from '@/context/IsLoadingContext';




const DeniedPainel = () => {

  const { user, setUserState } = useContext(UserContext);  
  const { setIsLoading, isLoading } = useIsLoading();


  const onDenied = () => {

    if (user.email === ''|| user.name === '' || user.id === '') {
      setIsLoading(true);
      window.location.href = '/acess/cadastro';

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    };

    setIsLoading(true);
    window.location.href = '/acess/plans';

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }


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
        <p><br /> Por favor, Confira os dados e Tente novamente.</p>
      </div>

      <div className={styles.btn}>
        <ButtonAcess 
          text="Tentar novamente"
          goClick={onDenied}
        />
      </div>
    </div>
  )
};

export default DeniedPainel;
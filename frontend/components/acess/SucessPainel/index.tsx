'use client';

import { UserContext } from '@/context/UserContext';
import styles from './SucessPainel.module.scss';
import { useContext, useEffect } from 'react';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import ButtonAcess from '../ButtonAcess';
import { useIsLoading } from '@/context/IsLoadingContext';




const SucessPainel = () => {

  const { user, setUserState } = useContext(UserContext);  
  const { setIsLoading, isLoading } = useIsLoading();

  // if (user.id === '') {
  //   window.location.href = '/acess/login';
  // }


  const onAcess = () => {
    setIsLoading(true);
    // window.location.href = '/dashboard';

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
        <h2>Parabéns {user.name.split(' ')[0]}!</h2>
        <p>Seu cadastro foi realizado com sucesso.<br /> Agora você pode acessar sua conta e aproveitar todas as funcionalidades do Interactiplay.</p>
        <p>Por favor, verifique seu e-mail para confirmar sua conta.</p>
      </div>

      <div className={styles.btn}>
        <ButtonAcess 
          text="Acessar a plataforma"
          goClick={() => onAcess()}
        />
      </div>
    </div>
  )
};

export default SucessPainel;
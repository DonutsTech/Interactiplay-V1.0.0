'use client';

import { UserContext } from '@/context/UserContext';
import styles from './SucessPainel.module.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import ButtonAcess from '../ButtonAcess';
import { useIsLoading } from '@/context/IsLoadingContext';
import { setToken } from '@/service/token';
import { getMe } from '@/service/auth/me';
import { useSearchParams } from 'next/navigation';
import { AuthUserContext } from '@/context/AuthUserContext';




const SucessPainel = () => {
  const { user, setUser } = useContext(UserContext);  
  const { setAuthUser, authUser } = useContext(AuthUserContext);
  const { setIsLoading, isLoading } = useIsLoading();
  const [tokenSet, setTokenSet] = useState(false);

  const token = useSearchParams().get('token');

  useEffect(() => {
    const handleToken = async () => {
      if (token && !tokenSet) {
        setIsLoading(true);
        setToken(token);
        const response = await getMe();
        if (response && 'USER' in response) {
          console.log(response);
          setAuthUser(response);
          setUser({
            ...user,
            id: response.USER.ID,
            name: response.USER.NAME,
            email: response.USER.EMAIL,

          });
          setTokenSet(true);
        }
        setIsLoading(false);
      }
    };

    handleToken();
  }, []);

  const handleAcessPlatform = useCallback(() => {
    setIsLoading(true);
    if (authUser?.USER.ID === user.id) {
      window.location.href = '/dashboard';
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      console.log('Usuário não autenticado');
      setIsLoading(false);
    }
  }, []);


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
          goClick={handleAcessPlatform}
        />
      </div>
    </div>
  )
};

export default SucessPainel;
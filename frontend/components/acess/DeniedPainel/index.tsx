'use client';

import logo from '@/assets/images/logo_white_dg.svg';
import { useError } from '@/context/ErrorContext';
import { UserContext } from '@/context/UserContext';
import { AuthUserContext } from '@/context/AuthUserContext';
import { setToken } from '@/service/token';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import ButtonAcess from '../ButtonAcess';
import styles from './DeniedPainel.module.scss';

const DeniedPainel = () => {
  const { user, setUser } = useContext(UserContext);
  const { loadAuthUser } = useContext(AuthUserContext);
  const router = useRouter();
  const { handleRequest, isLoading } = useError();
  const [isMounted, setIsMounted] = useState(false);
  const token = useSearchParams().get('token');

  useEffect(() => {
    setIsMounted(true);

    if(token) {
      setToken(token);
    }

    const loadUserData = async () => {
      const authenticatedUser = await handleRequest(
        () => loadAuthUser(),
        {
          suppressLoading: true,
          suppressLoadingToast: true,
          suppressErrorToast: true,
        }
      );

      if (authenticatedUser) {
        setUser({
          id: authenticatedUser.USER.ID,
          name: authenticatedUser.USER.NAME,
          email: authenticatedUser.USER.EMAIL,
          selectedPlan: ''
        });

        router.replace('/acess/denied', { scroll: false });
      }
    };
    loadUserData();

  }, [token]);

  const onDenied = () => {

    setUser({
      ...user,
      selectedPlan: '',
    });

    if (!user.email || !user.name || !user.id) {
      router.push('/acess/cadastro');
      return;
    }

    router.push('/acess/plans');
  };

  const firstName = isMounted && user.name ? 
    user.name.split(' ')[0] : 'Visitante';

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
        <h2>Desculpe {firstName}!</h2>
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

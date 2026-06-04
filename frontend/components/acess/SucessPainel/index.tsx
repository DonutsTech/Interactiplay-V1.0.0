'use client';

import logo from '@/assets/images/logo_white_dg.svg';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useIsLoading } from '@/context/ErrorContext';
import { UserContext } from '@/context/UserContext';
import { setToken } from '@/service/token';
import { trackMetaEvent } from '@/utils/metaPixel';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ButtonAcess from '../ButtonAcess';
import styles from './SucessPainel.module.scss';

const SucessPainel = () => {
  const { user, setUser } = useContext(UserContext);
  const { authUser, loadAuthUser } = useContext(AuthUserContext);
  const { setIsLoading } = useIsLoading();
  const [tokenSet, setTokenSet] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const isUnmountedRef = useRef(false);
  const hasTrackedConversion = useRef(false);
  const router = useRouter();

  const token = useSearchParams().get('token');

  useEffect(() => {
    setIsClient(true);

    return () => {
      isUnmountedRef.current = true;
      setIsLoading(false);
    };
  }, [setIsLoading]);

  useEffect(() => {
    const handleToken = async () => {
      if (!token || tokenSet) return;

      // setIsLoading(true);
      setError(null);
      setToken(token);

      const loadedUser = await loadAuthUser();

      if (isUnmountedRef.current) return;

      if (loadedUser) {
        if (!hasTrackedConversion.current) {
          const userEmail = loadedUser.USER.EMAIL;

          trackMetaEvent('CompleteRegistration', undefined, {
            userData: {
              email: userEmail,
            },
          });

          trackMetaEvent('Purchase', undefined, {
            userData: {
              email: userEmail,
            },
          });

          hasTrackedConversion.current = true;
        }

        setUser((prev) => ({
          ...prev,
          id: loadedUser.USER.ID,
          name: loadedUser.USER.NAME,
          email: loadedUser.USER.EMAIL,
        }));

        setTokenSet(true);
        router.replace('/acess/success', { scroll: false });
      } else {
        setError(
          'Erro ao carregar dados do usuário. Por favor, tente novamente.'
        );
      }

      setIsLoading(false);
    };

    handleToken();
  }, [token, tokenSet, loadAuthUser, setIsLoading, setUser, router]);

  const handleAcessPlatform = useCallback(() => {
    if (!authUser || authUser.USER.ID !== user.id) {
      setError('Usuário não autenticado. Por favor, faça login novamente.');
      return;
    }
    router.push('/dashboard');
  }, [authUser, user.id, setIsLoading, router]);

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
        <h2>Parabéns{user.name && isClient ? ` ${user.name.split(' ')[0]}` : ''}!</h2>
        <p>
          Seu cadastro foi realizado com sucesso.
          <br />
          Agora você pode acessar sua conta e aproveitar todas as
          funcionalidades do Interactiplay.
        </p>
        <p>Por favor, verifique seu e-mail para confirmar sua conta.</p>
        {error && <p>{error}</p>}
      </div>

      <div className={styles.btn}>
        <ButtonAcess
          text="Acessar a plataforma"
          goClick={handleAcessPlatform}
        />
      </div>
    </div>
  );
};

export default SucessPainel;

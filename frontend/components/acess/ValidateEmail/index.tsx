'use client';

import styles from './ValidateEmail.module.scss';
import LoadingModal from '@/components/globals/LoadingModal';
import { useIsLoading } from '@/context/IsLoadingContext';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import ButtonAcess from '../ButtonAcess';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useRef } from 'react';
import { AuthUserContext } from '@/context/AuthUserContext';
import { UserContext, UserData } from '@/context/UserContext';
import { MeResponse } from '@/@types/auth';
import { getMe } from '@/service/auth/me';
import { getValidateEmail } from '@/service/auth/validateemail';

const ValidateEmail = () => {
  const mountedRef = useRef(true);
  const { isLoading, setIsLoading } = useIsLoading();
  const { loadAuthUser, authUser, setAuthUser } = useContext(AuthUserContext);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const token = useSearchParams().get('token');

  useEffect(() => {
    setIsLoading(true);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Verificar se o token existe e é válido
  if (!token) {
    router.push('/acess/login');
    return null;
  }

  useEffect(() => {
    const handleToken = async () => {
      if (!token || '') return;

      try {
        
      setIsLoading(true);
      const data = await getValidateEmail(token);
      if (!mountedRef.current || !data) return;
      console.log('data:', data);
      loadAuthUser();

      } catch (error) {
        console.error('Erro ao validar email:', error);
        setIsLoading(false);
        router.push('/acess/login');
      } finally {
        setIsLoading(false);
      }
    };

    handleToken();

  }, []);

  // Aqui você pode fazer uma chamada à API para validar o token
  // Se o token for inválido, você pode redirecionar o usuário para uma página de erro ou exibir uma mensagem

  return (
    <>
      <LoadingModal open={isLoading} />
      <section className={styles.container} aria-label="Validação do email.">
        <Image
          src={logo}
          alt="Logo da Interactiplay"
          width={200}
          height={50}
          loading="lazy"
        />
        <div className={styles.header}>
          <h4>{(user.name).split(' ')[0]}</h4>
          <h3>Obrigado por validar seu email!</h3>
          <p>
            Agora você pode acessar sua conta e aproveitar todos os benefícios
            da Interactiplay.
          </p>
        </div>
        <div className={styles.btn}>
          <ButtonAcess
            text="Acessar minha conta"
            goClick={() => {
              router.push('/acess/login');
            }}
          />
        </div>
      </section>
    </>
  );
};

export default ValidateEmail;

'use client';

import type { ErrorMessage } from '@/@types/error';
import logo from '@/assets/images/logo_white_dg.svg';
import LoadingModal from '@/components/globals/LoadingModal';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useIsLoading } from '@/context/IsLoadingContext';
import { UserContext } from '@/context/UserContext';
import { getValidateEmail } from '@/service/auth/validateemail';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useRef } from 'react';
import ButtonAcess from '../ButtonAcess';
import styles from './ValidateEmail.module.scss';

const isErrorResponse = (value: unknown): value is ErrorMessage =>
  typeof value === 'object' &&
  value !== null &&
  'STATUS' in value &&
  'MESSAGE' in value;

const ValidateEmail = () => {
  const mountedRef = useRef(true);
  const { isLoading, setIsLoading } = useIsLoading();
  const { loadAuthUser } = useContext(AuthUserContext);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const token = useSearchParams().get('token');

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!token) {
      router.replace('/acess/login');
    }
  }, [token, router]);

  useEffect(() => {
    if (!token) return;

    const handleToken = async () => {
      setIsLoading(true);

      try {
        const data = await getValidateEmail(token);
        if (!mountedRef.current) return;

        if (isErrorResponse(data)) {
          router.replace('/acess/login');
          return;
        }

        await loadAuthUser();
      } catch {
        if (mountedRef.current) {
          router.replace('/acess/login');
        }
      } finally {
        if (mountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    handleToken();
  }, [token, router, loadAuthUser, setIsLoading]);

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
          <h4>{(user.name || 'Usuário').split(' ')[0]}</h4>
          <h3>Obrigado por validar seu email!</h3>
          <p>
            Agora você pode acessar sua conta e aproveitar todos os benefícios
            da Interactiplay.
          </p>
        </div>
        <div className={styles.btn}>
          <ButtonAcess
            text="Acessar minha conta"
            goClick={() => router.push('/acess/login')}
          />
        </div>
      </section>
    </>
  );
};

export default ValidateEmail;

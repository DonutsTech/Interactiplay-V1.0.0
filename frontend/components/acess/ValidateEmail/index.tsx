'use client';

import type { ErrorMessage } from '@/@types/error';
import logo from '@/assets/images/logo_white_dg.svg';
import LoadingModal from '@/components/globals/LoadingModal';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useIsLoading } from '@/context/ErrorContext';
import { UserContext } from '@/context/UserContext';
import { getValidateEmail } from '@/service/auth/validateemail';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import ButtonAcess from '../ButtonAcess';
import styles from './ValidateEmail.module.scss';

const ValidateEmail = () => {
  const [mounted, setMounted] = useState(false);
  const { isLoading, setIsLoading } = useIsLoading();
  const { loadAuthUser } = useContext(AuthUserContext);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const token = useSearchParams().get('token');

  useEffect(() => {
    setMounted(true);
    
    if (!token) {
      router.replace('/acess/login');
      return;
    }

    const handleToken = async () => {
      setIsLoading(true);

      try {
        const data = await getValidateEmail(token);
        
        if (!data) {
          router.replace('/acess/login');
          return;
        }

        if (
          typeof data === 'object' &&
          data !== null &&
          'STATUS' in data &&
          'MESSAGE' in data
        ) {
          router.replace('/acess/login');
          return;
        }

        await loadAuthUser();
      } catch {
        router.replace('/acess/login');
      } finally {
        setIsLoading(false);
      }
    };

    handleToken();
  }, [token, router, loadAuthUser, setIsLoading]);

  if (!mounted) {
    return null;
  }

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

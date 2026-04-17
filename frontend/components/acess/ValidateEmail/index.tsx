'use client';

import logo from '@/assets/images/logo_white_dg.svg';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useError } from '@/context/ErrorContext';
import { UserContext } from '@/context/UserContext';
import { getValidateEmail } from '@/service/auth/validateemail';
import { setToken } from '@/service/token';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import ButtonAcess from '../ButtonAcess';
import styles from './ValidateEmail.module.scss';

const ValidateEmail = () => {
  const [mounted, setMounted] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const { handleRequest, showSuccess, showError, isLoading } = useError();
  const { loadAuthUser } = useContext(AuthUserContext);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const token = useSearchParams().get('token');

  useEffect(() => {
    setMounted(true);
    
    if (!token) {
      showError('Token de validação não encontrado.');
      router.replace('/acess/login');
      return;
    }

    const handleValidation = async () => {
      const response = await handleRequest(
        () => getValidateEmail(token),
        {
          loadingMessage: 'Validando seu email...',
          suppressErrorToast: false,
        }
      );

      if (response) {
        if ('ACCESTOKEN' in response || 'token' in response) {
          const accessToken = 'ACCESTOKEN' in response ? response.ACCESTOKEN : response.token;
          setToken(accessToken);
        }

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
            selectedPlan: '',
          });

          setIsValidated(true);
          
          showSuccess('Email validado com sucesso!', {
            autoClose: 3000,
          });
        }
      } else {
        setTimeout(() => {
          router.replace('/acess/login');
        }, 2000);
      }
    };

    handleValidation();
  }, [token]);

  const handleAccessDashboard = () => {
    if (isValidated) {
      router.push('/dashboard');
    } else {
      router.push('/acess/login');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
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
          text={isValidated ? 'Acessar a Plataforma' : 'Ir para login'}
          goClick={handleAccessDashboard}
          disabled={isLoading}
        />
      </div>
    </section>
  );
};

export default ValidateEmail;

'use client';

import Image from 'next/image';
import styles from './FormLogin.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useContext, useMemo, useState } from 'react';
import Link from 'next/link';
import { useError } from '@/context/ErrorContext';
import ButtonAcess from '../ButtonAcess';
import { useRouter } from 'next/navigation';
import { postLogin } from '@/service/auth';
import { setToken } from '@/service/token';
import { AuthUserContext } from '@/context/AuthUserContext';
import { UserContext } from '@/context/UserContext';

interface LoginData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const { loadAuthUser } = useContext(AuthUserContext);
  const { handleRequest, showConfirmation, showSuccess, isLoading } =
    useError();

  const [loginPackage, setLoginPackage] = useState<LoginData>({
    email: '',
    password: '',
  });

  const isDesabled = useMemo(() => {
    return !loginPackage.email.trim() || !loginPackage.password.trim();
  }, [loginPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const response = await handleRequest(
      () =>
        postLogin({
          EMAIL: loginPackage.email,
          HASHED_PASSWORD: loginPackage.password,
        }),
      {
        loadingMessage: 'Realizando login...',
        suppressErrorToast: true,
        onError: async (error) => {
          const errorResponse = error as any;
          if (error.STATUS === 206) {
            // Assinatura cancelada: vai para renovação de plano
            if (errorResponse.USER) {
              setUser({
                id: errorResponse.USER.ID,
                name: errorResponse.USER.NAME,
                email: errorResponse.USER.EMAIL,
                selectedPlan: errorResponse.USER.SELECTED_PLAN || '',
              });
            }
            const goToRenew = await showConfirmation(
              error.MESSAGE || 'Sua assinatura foi cancelada. Escolha um novo plano para continuar.',
              {
                title: 'Assinatura cancelada',
                type: 'warning',
                confirmText: 'Escolher Plano',
                cancelText: 'Cancelar',
              }
            );
            if (goToRenew) {
              router.push('/acess/renewal');
            }
          } else if (error.STATUS === 402) {
            // Assinatura inativa: vai para o portal de pagamento
            const goToPortal = await showConfirmation(
              errorResponse.MESSAGE || 'Sua assinatura está inativa. Deseja acessar o portal de pagamento?',
              {
                title: 'Assinatura inativa',
                type: 'warning',
                confirmText: 'Ir para pagamento',
                cancelText: 'Cancelar',
              }
            );
            if (goToPortal && errorResponse.LINK) {
              window.location.href = errorResponse.LINK;
            } else if (goToPortal && errorResponse.PORTAL) {
              window.location.href = errorResponse.PORTAL;
            }
          } else if (error.STATUS === 403) {
            if (errorResponse.USER) {
              setUser({
                id: errorResponse.USER.ID,
                name: errorResponse.USER.NAME,
                email: errorResponse.USER.EMAIL,
                selectedPlan: '',
              });
            }
            const goToPlans = await showConfirmation(
              error.MESSAGE || 'Você precisa escolher um plano.',
              {
                title: 'Plano necessário',
                type: 'warning',
                confirmText: 'Escolher Plano',
                cancelText: 'Cancelar',
              }
            );
            if (goToPlans) {
              router.push('/acess/plans');
            }
          } else if (error.STATUS === 401) {
            showConfirmation(error.MESSAGE || 'Email ou senha incorretos.', {
              title: 'Falha no login',
              type: 'warning',
              confirmText: 'ok',
              cancelText: '',
            });
          } else {
            showConfirmation(error.MESSAGE || 'Ocorreu um erro inesperado.', {
              title: 'Erro',
              type: 'error',
              confirmText: 'ok',
            });
          }
        },
      }
    );

    if (response && 'ACCESTOKEN' in response) {
      setToken(response.ACCESTOKEN);
      await loadAuthUser();
      showSuccess('Login realizado com sucesso!', {
        autoClose: 2000,
      });

      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logo Interactiplay"
        className={styles.logo}
        width={300}
        height={50}
        loading="lazy"
        draggable={false}
      />
      <div className={styles.headline}>
        <h2>Login</h2>
        <p>Faça o login para ter acesso a todos os recursos.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_inputGroup}>
          <InputForm
            icon={faEnvelope}
            type="email"
            placeholder="Digite seu email"
            value={loginPackage.email}
            onChange={(e) =>
              setLoginPackage((prev: LoginData) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <InputForm
            icon={faLock}
            type="password"
            placeholder="Digite sua senha"
            value={loginPackage.password}
            viewPassword
            onChange={(e) =>
              setLoginPackage((prev: LoginData) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
        </div>
        <div className={styles.form_forgotPassword}>
          <Link
            href={'/acess/forgot-password'}
            className={styles.form_forgotPassword_link}
          >
            Esqueceu a senha?
          </Link>
          {/* <p className={styles.form_forgotPassword_message}>
            {messageError !== '' && messageError}
          </p> */}
        </div>
        <ButtonAcess text="Entrar" disabled={isDesabled} />
      </form>
      <div className={styles.container_text}>
        <p>Ainda não possui uma conta?</p>
        <Link href={'/acess/cadastro'} className={styles.container_text_link}>
          Cadastre-se
        </Link>
      </div>
    </div>
  );
};

export default FormLogin;

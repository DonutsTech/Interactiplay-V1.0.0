'use client';

import Image from 'next/image';
import styles from './FormLogin.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useIsLoading } from '@/context/IsLoadingContext';
import ButtonAcess from '../ButtonAcess';
import { useRouter } from 'next/navigation';
import { postLogin } from '@/service/auth';
import { ErrorMessage, ErrorModalState } from '@/@types/error';
import { setToken } from '@/service/token';
import { AuthUserContext } from '@/context/AuthUserContext';
import { UserContext } from '@/context/UserContext';
import ErrorModal from '@/components/globals/ErrorModal';

interface LoginData {
  email: string;
  password: string;
}

const isErrorResponse = (response: unknown): response is ErrorMessage => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'STATUS' in response &&
    'MESSAGE' in response &&
    typeof (response as ErrorMessage).STATUS === 'number' &&
    typeof (response as ErrorMessage).MESSAGE === 'string'
  );
};

const FormLogin = () => {
  const router = useRouter();
  const { setIsLoading } = useIsLoading();
  const { setUser } = useContext(UserContext);
  const { loadAuthUser } = useContext(AuthUserContext);
  const [modalMessage, setModalMessage] = useState(false);

  const [loginPackage, setLoginPackage] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [errorModal, setErrorModal] = useState<ErrorModalState>({
    mensagem: '',
    statusCode: 0,
    type: 'warning',
  });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const isDesabled = useMemo(() => {
    return !loginPackage.email.trim() || !loginPackage.password.trim();
  }, [loginPackage]);

  const handleModalClose = () => {
    setModalMessage(false);
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await postLogin({
        EMAIL: loginPackage.email,
        HASHED_PASSWORD: loginPackage.password,
      });
      // console.log('Resposta do login:', response);

      if (response && 'MESSAGE' in response && 'STATUS' in response) {
        if (response.STATUS === 403) {
          setUser({
            id: response.USER.ID,
            name: response.USER.NAME,
            email: response.USER.EMAIL,
            selectedPlan: '',
          });
          setModalMessage(true);
          setErrorModal({
            mensagem: response.MESSAGE,
            type: 'warning',
            statusCode: response.STATUS,
            onClose: handleModalClose,
            butonProps: {
              text: 'Escolher o Plano',
              goClick: () => {
                setIsLoading(false);
                setModalMessage(false);
                router.push('/acess/plans');
              },
            },
          });
        }

        if (response.STATUS === 402) {
          setModalMessage(true);
          setErrorModal({
            mensagem: response.MESSAGE,
            type: 'warning',
            statusCode: response.STATUS,
            onClose: handleModalClose,
            butonProps: {
              text: 'Renovar Plano',
              goClick: () => {
                handleModalClose();
                window.open(`${response.PORTAL}`, '_blank');
              },
            },
          });
        }

        if (response.STATUS === 401) {
          setModalMessage(true);
          setErrorModal({
            mensagem: response.MESSAGE,
            type: 'warning',
            statusCode: response.STATUS,
            onClose: handleModalClose,
          });
          setModalMessage(true);
          setTimeout(() => {
            handleModalClose();
          }, 5000);
        }
      }

      if (
        response &&
        'ACCESTOKEN' in response &&
        !('MESSAGE' in response || 'STATUS' in response)
      ) {
        setToken(response.ACCESTOKEN);
        await loadAuthUser();
        setModalMessage(true);
        setErrorModal({
          mensagem: 'Login realizado com sucesso!',
          type: 'success',
          onClose: () => {
            router.push('/dashboard');
            handleModalClose();
          },
        });
        setTimeout(() => {
          router.push('/dashboard');
          handleModalClose();
        }, 3000);
      }
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorModal({
        mensagem: 'Erro desconhecido ao fazer login',
        type: 'error',
        onClose: handleModalClose,
      });
      setModalMessage(true);
    }
  };

  return (
    <div className={styles.container}>
      {modalMessage && (
        <ErrorModal
          isOpen={(show: boolean) => setModalMessage(show)}
          mensagem={errorModal.mensagem}
          type={errorModal.type}
          statusCode={errorModal.statusCode}
          butonProps={errorModal.butonProps}
          onClose={errorModal.onClose}
        />
      )}
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
        <ButtonAcess
          text="Entrar"
          disabled={isDesabled}
        />
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

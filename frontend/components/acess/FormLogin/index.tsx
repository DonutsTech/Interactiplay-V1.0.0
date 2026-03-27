'use client';

import Image from 'next/image';
import styles from './FormLogin.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { email } from 'zod';
import Link from 'next/link';
import { useIsLoading } from '@/context/IsLoadingContext';

interface LoginData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const [loginPakage, setLoginPakage] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [messageError, setMessageError] = useState<string>('');
  const [showModalMensage, setShowModalMessage] = useState<boolean>(false);

  const { isLoading, setIsLoading } = useIsLoading();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (setIsLoading) setIsLoading(true);

    if (!loginPakage.email || !loginPakage.password) {
      setMessageError('Preencha todos os campos');
      setTimeout(() => {
        setMessageError('');
        if (setIsLoading) setIsLoading(false);
      }, 3000);
      return;
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
      />
      <div className={styles.headline}>
        <h2>Login</h2>
        <p>Faça o login para ter acesso a todos os recursos.</p>
      </div>
      <form className={styles.form}>
        <div className={styles.form_inputGroup}>
          <InputForm
            icon={faEnvelope}
            type="email"
            placeholder="Digite seu email"
            value={loginPakage.email}
            onChange={(e) =>
              setLoginPakage((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputForm
            icon={faLock}
            type="password"
            placeholder="Digite sua senha"
            value={loginPakage.password}
            viewPassword
            onChange={(e) =>
              setLoginPakage((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className={styles.form_forgotPassword}>
          <Link
            href={'/acess/forgetPassword'}
            className={styles.form_forgotPassword_link}
          >
            Esqueceu a senha?
          </Link>
          <p className={styles.form_forgotPassword_message}>
            {messageError !== '' && messageError}
          </p>
        </div>
        <button
          type="submit"
          className={styles.form_loginButton}
          disabled={isLoading}
        >
          {isLoading ? 'Entrando...' : 'Login'}
          Login
        </button>
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

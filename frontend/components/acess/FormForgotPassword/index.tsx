'use client';

import styles from './FormForgotPassword.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';
import ButtonAcess from '../ButtonAcess';
import { useRouter } from 'next/navigation';
import { useError } from '@/context/ErrorContext';
import { postForgotPassword } from '@/service/auth/forgotpassword';

const FormForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();
  const { handleRequest, showSuccess, isLoading } = useError();

  const isDisabled = email.trim() === '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await handleRequest(
      () => postForgotPassword({ EMAIL: email }),
      {
        loadingMessage: 'Enviando link de recuperação...',
        suppressErrorToast: true,
        onError: async (error) => {
          // Se há erro (STATUS existe), já foi mostrado automaticamente
          // Nada a fazer aqui - handleRequest já mostrou o toast de erro
        },
      }
    );

    if (response && 'MESSAGE' in response && !('STATUS' in response)) {
      showSuccess(response.MESSAGE || 'Link de recuperação enviado!', {
        autoClose: 4000,
      });

      // Redireciona após 4s
      setTimeout(() => {
        router.push('/acess/login');
      }, 4000);
    }
  };

  return (
    <section className={styles.container}>
      <Image
        src={logo}
        alt="Logo Interactiplay"
        className={styles.logo}
        draggable={false}
        loading="lazy"
      />
      <div className={styles.headline}>
        <h2 className={styles.headline_title}>Esqueceu sua senha?</h2>
        <p className={styles.headline_subtitle}>
          Sem problemas! Insira seu e-mail abaixo e enviaremos um link para
          redefinir sua senha.
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputForm
          type="email"
          placeholder="Digite seu e-mail"
          icon={faEnvelope}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ButtonAcess
          type="submit"
          text="Enviar"
          disabled={isDisabled || isLoading}
        />
      </form>
      <div className={styles.footer}>
        <ButtonAcess
          inline={true}
          type="button"
          text="Voltar"
          goClick={() => router.push('/acess/login')}
          disabled={isLoading}
        />
      </div>
    </section>
  );
};

export default FormForgotPassword;

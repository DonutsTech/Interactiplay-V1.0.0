'use client';

import styles from './FormForgotPassword.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';
import ButtonAcess from '../ButtonAcess';

const FormForgotPassword = () => {
  const [email, setEmail] = useState<string>('');

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
      <form className={styles.form}>
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
          goClick={() => console.log('clicou')}
          disabled={email.trim() === ''}
        />
      </form>
      <div className={styles.footer}>
        <ButtonAcess
          inline={true}
          type="button"
          text="Voltar"
          goClick={() => {
            window.history.back();
          }}
        />
      </div>
    </section>
  );
};

export default FormForgotPassword;

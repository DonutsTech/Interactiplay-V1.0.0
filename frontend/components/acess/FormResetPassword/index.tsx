'use client';

import Image from 'next/image';
import styles from './FormResetPassword.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import { useEffect, useState } from 'react';
import { useError } from '@/context/ErrorContext';
import { useRouter, useSearchParams } from 'next/navigation';
import InputForm from '@/components/globals/InputForm';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import InputPassword from '../InputPassword';
import ButtonAcess from '../ButtonAcess';
import { ResetPassword } from '@/@types/auth';
import { postResetPassword } from '@/service/auth/resetpassword';

const FormResetPassword = () => {
  const { handleRequest, showSuccess, showError, isLoading } = useError();
  const router = useRouter();
  const token = useSearchParams().get('token');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');

  const [resetPackage, setResetPackage] = useState<ResetPassword>({
    TOKEN: token || '',
    HASHED_PASSWORD: '',
    CODE: '',
  });

  useEffect(() => {
    // Se não tem token, redireciona para login
    if (!token) {
      showError('Token de redefinição de senha não encontrado.');
      router.push('/acess/login');
      return;
    }

    // Atualiza token no resetPackage se vier na URL
    setResetPackage((prev) => ({
      ...prev,
      TOKEN: token,
    }));
  }, [token]);

  const isDisabled =
    resetPackage.CODE.length < 4 ||
    !resetPackage.HASHED_PASSWORD ||
    !repeatPassword ||
    resetPackage.HASHED_PASSWORD !== repeatPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await handleRequest(
      () => postResetPassword(resetPackage),
      {
        loadingMessage: 'Redefinindo senha...',
        suppressErrorToast: false, // Mostra toast de erro automaticamente
      }
    );

    // Sucesso - resposta tem MESSAGE mas não tem STATUS
    if (response && 'MESSAGE' in response && !('STATUS' in response)) {
      showSuccess(response.MESSAGE || 'Senha redefinida com sucesso!', {
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
        loading="lazy"
        width={200}
        height={50}
      />
      <div className={styles.header}>
        <h4>Vamos resetar a sua senha</h4>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputForm
          className={styles.codeInput}
          icon={faKey}
          type="text"
          placeholder="Digite aqui o Código"
          inputMode="numeric"
          minLength={4}
          maxLength={4}
          value={resetPackage.CODE}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            setResetPackage({ ...resetPackage, CODE: value });
          }}
        />
        <InputPassword
          password={resetPackage.HASHED_PASSWORD}
          setPassword={(p: string) =>
            setResetPackage({ ...resetPackage, HASHED_PASSWORD: p })
          }
          repeatPassword={repeatPassword}
          setRepeatPassword={(c: string) => setRepeatPassword(c)}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showRepeatPassword={showRepeatPassword}
          setShowRepeatPassword={setShowRepeatPassword}
          passwordFocus={passwordFocus}
          setPasswordFocus={setPasswordFocus}
        />

        <ButtonAcess
          text="Resetar Senha"
          type="submit"
          disabled={isDisabled || isLoading}
        />
      </form>
    </section>
  );
};

export default FormResetPassword;

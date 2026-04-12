'use client';

import Image from 'next/image';
import styles from './FormResetPassword.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import { useContext, useEffect, useRef, useState } from 'react';
import { useIsLoading } from '@/context/IsLoadingContext';
import { AuthUserContext } from '@/context/AuthUserContext';
import { UserContext } from '@/context/UserContext';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingModal from '@/components/globals/LoadingModal';
import InputForm from '@/components/globals/InputForm';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import InputPassword from '../InputPassword';
import ButtonAcess from '../ButtonAcess';
import { ResetPassword } from '@/@types/auth';
import { postResetPassword } from '@/service/auth/resetpassword';
import ErrorModal from '@/components/globals/ErrorModal';
import { ErrorModalState } from '@/@types/error';


const FormResetPassword = () => {
  const mountedRef = useRef(true);
  const [carregando, setCarregando] = useState(true);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const { isLoading, setIsLoading } = useIsLoading();
  const [tokenValid, setTokenValid] = useState<string | null>(null);
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

  const [errorModal, setErrorModal] = useState<ErrorModalState>({
    mensagem: '',
    type: 'warning',
    onClose: () => setShowErrorModal(false),
  });

  useEffect(() => {
    setIsLoading(true);
    return () => {
      mountedRef.current = false;

    };
  }, []);

  useEffect(() => {

    if (!token) {
      router.push('/acess/login');
      return;
    }
    
    if (token) {
      setTokenValid(token);
      setIsLoading(false);
      setCarregando(false);
    }
  }, [token, router]);

  const isDisabled =
    resetPackage.CODE.length < 4 ||
    !resetPackage.HASHED_PASSWORD ||
    !repeatPassword ||
    resetPackage.HASHED_PASSWORD !== repeatPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      console.log('Pacote de reset de senha:', resetPackage);
      const response = await postResetPassword(resetPackage);
      console.log('Resposta do reset de senha:', response);

      if (response && 'MESSAGE' in response && 'STATUS' in response ) {
        setShowErrorModal(true);
        setErrorModal({
          mensagem: response.MESSAGE,
          type: 'error',
          onClose: () => {
            setShowErrorModal(false);
            setIsLoading(false);
          } 
        });

      }
      if (response && 'MESSAGE' in response && !('STATUS' in response)) {
        setShowErrorModal(true);
        setErrorModal({
          mensagem: response.MESSAGE,
          type: 'success',
          onClose: () => {
            setShowErrorModal(false);
            setIsLoading(false);
            router.push('/acess/login');
          } 
        })
          setTimeout(() => {
            setShowErrorModal(false);
            setIsLoading(false);
            router.push('/acess/login');
          }, 5000)
        ;
      }

    } catch (error) {
      console.error('Erro ao resetar senha:', error);
    }
  };

  return (
    <>
      <LoadingModal open={isLoading && carregando} />
    {showErrorModal && (
      <ErrorModal 
        isOpen={(show) => setShowErrorModal(show)}
        mensagem={errorModal.mensagem}
        type={errorModal.type}
        statusCode={errorModal.statusCode}
        butonProps={errorModal.butonProps}
        onClose={errorModal.onClose}
      />
    )}
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
              const value = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja dígito
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
            disabled={isDisabled}
            goClick={() => {
              console.log('resetou a senha');
            }}
          />
        </form>
      </section>
    </>
  );
};

export default FormResetPassword;

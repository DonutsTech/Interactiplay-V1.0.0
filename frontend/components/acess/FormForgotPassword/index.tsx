'use client';

import styles from './FormForgotPassword.module.scss';
import logo from '@/assets/images/logo_white_dg.svg';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';
import ButtonAcess from '../ButtonAcess';
import { useRouter } from 'next/navigation';
import { useIsLoading } from '@/context/ErrorContext';
import { postForgotPassword } from '@/service/auth/forgotpassword';
import { ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';

const FormForgotPassword = () => {
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<ErrorModalState>({
    mensagem: '',
    type: 'warning',
    onClose: () => setShowErrorModal(false),
  });

  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const isDisabled = email.trim() === '';
  const { setIsLoading } = useIsLoading();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await postForgotPassword({ EMAIL: email });
      // console.log(response);

      if (response && 'MESSAGE' in response && 'STATUS' in response) {
        setShowErrorModal(true);
        setErrorModal({
          mensagem: response.MESSAGE,
          type: 'error',
          onClose: () => {
            setShowErrorModal(false);
            setIsLoading(false);
          },
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
          },
        });
        setTimeout(() => {
          setShowErrorModal(false);
          setIsLoading(false);
          router.push('/acess/login');
        }, 5000);
      }
    } catch (error) {
      console.error('Erro ao solicitar redefinição de senha:', error);
      setShowErrorModal(true);
      setErrorModal({
        mensagem:
          'Ocorreu um erro ao solicitar a redefinição de senha. Por favor, tente novamente.',
        type: 'error',
        onClose: () => {
          setShowErrorModal(false);
          setIsLoading(false);
        },
      });
    }
  };

  return (
    <>
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
            goClick={() => console.log('clicou')}
            disabled={isDisabled}
          />
        </form>
        <div className={styles.footer}>
          <ButtonAcess
            inline={true}
            type="button"
            text="Voltar"
            goClick={() => {
              router.push('/acess/login');
            }}
          />
        </div>
      </section>
    </>
  );
};

export default FormForgotPassword;

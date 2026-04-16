'use client';

import styles from './FormCadastro.module.scss';
import { useContext, useMemo, useState } from 'react';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { phoneMask, validarCelularBRCompleto } from '@/utils/PhoneUtils';
import InputPassword from '../InputPassword';
import ButtonAcess from '../ButtonAcess';
import { isPasswordValid } from '@/utils/isPasswordValid';
import { useIsLoading } from '@/context/ErrorContext';
import Link from 'next/link';
import ModalTermos from './ModalTermos';
import { UserContext } from '@/context/UserContext';
import { Register } from '@/@types/auth';
import { postRegister } from '@/service/auth';
import ErrorModal from '@/components/globals/ErrorModal';
import { ErrorMessage, ErrorModalState } from '@/@types/error';
import { sanitizeByRegex } from '@/utils/stringUtils';
import { useRouter } from 'next/navigation';

interface RegisterPackage {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};



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


const FormCadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [modalMessage, setModalMessage] = useState(false);
  const { setIsLoading } = useIsLoading();
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const EMPTY_FORM: RegisterPackage = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const [errorModal, setErrorModal] = useState<ErrorModalState>({
    mensagem: '',
    type: 'warning',
  });

  const [registerPackage, setRegisterPackage] = useState<RegisterPackage>({
    ...EMPTY_FORM,
  });

  const isDisabled = useMemo(() => {
    const hasEmptyField =
      registerPackage.name.trim() === '' ||
      registerPackage.email.trim() === '' ||
      registerPackage.phone.trim() === '' ||
      registerPackage.password.trim() === '' ||
      registerPackage.confirmPassword.trim() === '';

    const invalidPassword =
      registerPackage.password !== registerPackage.confirmPassword ||
      !isPasswordValid(registerPackage.password);

    return hasEmptyField || !!phoneError || invalidPassword || !checked;
  }, [registerPackage, phoneError, checked]);

  const handleModalClose = () => {
    setModalMessage(false);
    setIsLoading(false);
    setRegisterPackage({ ...EMPTY_FORM });
    setChecked(false);
    setPhoneError('');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const body: Register = {
        NAME: registerPackage.name.trim(),
        EMAIL: registerPackage.email.trim(),
        PHONE: registerPackage.phone.replace(/\D/g, ''),
        HASHED_PASSWORD: registerPackage.password,
      };

      const response = await postRegister(body);

      // console.log('Resposta do registro:', response.ID);

      if (isErrorResponse(response)) {
        setErrorModal({
          mensagem: response.MESSAGE || 'Erro desconhecido ao registrar',
          type: 'warning',
          statusCode: response.STATUS,
          onClose: handleModalClose,
          butonProps:
            response.STATUS === 409
              ? {
                  text: 'Login',
                  goClick: () => {
                    setModalMessage(false);
                    router.push('/acess/login');
                  },
                }
              : undefined,
        });
        setModalMessage(true);
        return;
      }


      setUser((prevUser) => ({
        ...prevUser,
        id: response.ID,
        name: registerPackage.name,
        email: registerPackage.email,
      }));

      setIsLoading(false);
      router.push('/acess/plans');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      setErrorModal({
        mensagem: 'Erro desconhecido ao registrar',
        type: 'error',
        onClose: handleModalClose,
      });
      setModalMessage(true);
    } 
  };

  return (
    <section className={styles.container}>
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
        loading="lazy"
        draggable={false}
      />
      <div className={styles.headline}>
        <h2>Cadastro</h2>
        <p>Cadastre-se para ter acesso a todos os recursos.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputForm
          icon={faUser}
          type="text"
          placeholder="Nome completo"
          value={registerPackage.name}
          onChange={(e) =>{
            const sanitized = sanitizeByRegex(e.target.value, /[^A-Za-zÀ-ÖØ-öø-ÿ' ]/g);
            setRegisterPackage({ ...registerPackage, name: sanitized });
          }}
        />
        <InputForm
          icon={faEnvelope}
          type="email"
          placeholder="Endereço de Email"
          value={registerPackage.email}
          onChange={(e) =>
            setRegisterPackage({ ...registerPackage, email: e.target.value })
          }
        />
        <InputForm
          icon={faPhone}
          type="tel"
          placeholder="Telefone"
          value={phoneMask(registerPackage.phone)}
          inputMode="numeric"
          onChange={(e) => {
            const value = e.target.value;
            if (value.length >= 10 && validarCelularBRCompleto(value)) {
              setPhoneError('');
            }
            setRegisterPackage({ ...registerPackage, phone: value });
          }}
          onBlur={(e) => {
            const isValid = validarCelularBRCompleto(e.target.value);
            if (!isValid) {
              setPhoneError('Número de telefone inválido. Por favor verifique');
            } else {
              setPhoneError('');
            }
          }}
        />
        {phoneError && registerPackage.phone.length > 0 && (
          <p className={styles.phoneError}>{phoneError}</p>
        )}
        <InputPassword
          password={registerPackage.password}
          setPassword={(p: string) =>
            setRegisterPackage({ ...registerPackage, password: p })
          }
          repeatPassword={registerPackage.confirmPassword}
          setRepeatPassword={(c: string) =>
            setRegisterPackage({ ...registerPackage, confirmPassword: c })
          }
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showRepeatPassword={showRepeatPassword}
          setShowRepeatPassword={setShowRepeatPassword}
          passwordFocus={passwordFocus}
          setPasswordFocus={setPasswordFocus}
        />
        <div className={styles.form_checkbox}>
          <input
            checked={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
            type="checkbox"
            id="terms"
          />
          <button
            type="button"
            onClick={() => {
              setShowTerms(true);
              setChecked(true);
            }}
            className={styles.form_checkbox_term}
          >
            Aceito os termos de uso
          </button>
        </div>
        <ButtonAcess
          text="Cadastrar"
          type="submit"
          disabled={isDisabled}
        />
      </form>
      <div className={styles.container_text}>
        <p>Já possui uma conta?</p>
        <Link href={'/acess/login'} className={styles.container_text_link}>
          Faça o login
        </Link>
      </div>
      {showTerms && <ModalTermos onClose={() => setShowTerms(false)} />}
    </section>
  );
};

export default FormCadastro;

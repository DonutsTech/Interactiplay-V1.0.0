'use client';

import styles from './FormCadastro.module.scss';
import { useContext, useState } from 'react';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import InputForm from '@/components/globals/InputForm';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { phoneMask, validarCelularBRCompleto } from '@/utils/PhoneUtils';
import InputPassword from '../InputPassword';
import ButtonAcess from '../ButtonAcess';
import { isPasswordValid } from '@/utils/isPasswordValid';
import { useIsLoading } from '@/context/IsLoadingContext';
import Link from 'next/link';
import ModalTermos from './ModalTermos';
import { UserContext } from '@/context/UserContext';
import { Register } from '@/@types/auth';
import { postRegister } from '@/service/auth';
import { setToken } from '@/service/token';
import ErrorModal from '@/components/globals/ErrorModal';

interface RegisterPackage {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const FormCadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [firstCheck, setFirstCheck] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [modalMessage, setModalMessage] = useState(false);
  const { setIsLoading } = useIsLoading();
  const { setUser } = useContext(UserContext);
  const [errorProps, setErrorProps] = useState({
    isOpen: (show: boolean) => setModalMessage(show),
    mensagem: '',
    type: 'warning' as 'error' | 'success' | 'warning',
    statusCode: undefined as number | undefined,
    butonProps: undefined as { text: string; goClick: () => void } | undefined,
  });
  const [registerPackage, setRegisterPackage] = useState<RegisterPackage>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const disabled = () => {
    if (
      registerPackage.name.trim() === '' ||
      registerPackage.email.trim() === '' ||
      registerPackage.phone.trim() === '' ||
      registerPackage.password.trim() === '' ||
      registerPackage.confirmPassword.trim() === '' ||
      phoneError
    ) {
      return true;
    }
    if (
      registerPackage.password !== registerPackage.confirmPassword ||
      !isPasswordValid(registerPackage.password)
    ) {
      return true;
    }
    if (!checked) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Aqui você pode adicionar a lógica para enviar os dados de registro para o servidor

      const body: Register = {
        NAME: registerPackage.name,
        EMAIL: registerPackage.email,
        PHONE: registerPackage.phone.replace(/\D/g, ''),
        HASHED_PASSWORD: registerPackage.password,
      };

      const response = await postRegister(body);

      console.log('Resposta do registro:', response.STATUS);

      if (response.MESSAGE && response.STATUS) {
        setModalMessage(true);
        setErrorProps({
          isOpen: (show: boolean) => setModalMessage(show),
          mensagem: response.MESSAGE || 'Erro desconhecido ao registrar',
          type: 'warning',
          statusCode: response.STATUS as number || undefined,
          butonProps: {
            text: 'Login',
            goClick: () => {
              setModalMessage(false);
              window.location.href = '/acess/login';
            },
          }

        });
      }

      if ('STATUS' in response && response.STATUS === 'ERROR') {
        throw new Error(response.MESSAGE || 'Erro desconhecido ao registrar');
      }

      if (response.token || response.TOKEN) {
        setToken(response.token || response.TOKEN);
      }

      setUser((prevUser) => ({
        ...prevUser,
        id: response.TOKEN,
        name: registerPackage.name,
        email: registerPackage.email,
      }));

      // router.push('/acess/plans');
      // window.location.href = '/acess/plans';
    } catch (error) {
      console.error('Erro ao registrar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      {modalMessage && 
        <ErrorModal 
          {...errorProps}
        />
      }
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
          onChange={(e) =>
            setRegisterPackage({ ...registerPackage, name: e.target.value })
          }
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
          onChange={(e) => {
            const value = e.target.value;
            if (value.length >= 10 && validarCelularBRCompleto(value)) {
              setPhoneError('');
              34;
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
              if (firstCheck) {
                setFirstCheck(false);
              }
              setChecked(!checked);
            }}
            type="checkbox"
            id="terms"
          />
          <button
            type="button"
            onClick={() => {
              setShowTerms(true);
              setChecked(true);
              setFirstCheck(true);
            }}
            className={styles.form_checkbox_term}
          >
            Aceito os termos de uso
          </button>
        </div>
        <ButtonAcess
          text="Cadastrar"
          type="submit"
          disabled={disabled()}
          goClick={() => console.log('Clicou para cadastrar')}
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

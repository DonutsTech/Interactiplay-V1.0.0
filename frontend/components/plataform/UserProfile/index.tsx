'use client';

import { useContext, useState } from 'react';
import styles from './UserProfile.module.scss';
import { AuthUserContext } from '@/context/AuthUserContext';
import { sanitizeByRegex } from '@/utils/stringUtils';
import classNames from 'classnames';
import { phoneMask, validarCelularBRCompleto } from '@/utils/PhoneUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faEnvelope,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import BtnG from '../BtnG';
import { useError } from '@/context/ErrorContext';
import { getToken } from '@/service/token';
import { useRouter } from 'next/navigation';
import { getPaymentActive } from '@/service/plan/payment-active';
import { postResendValidateEmail } from '@/service/auth/resend-validate-email';
import { postForgotPassword } from '@/service/auth/forgotpassword';
import { updateUser } from '@/service/auth/me';

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
}

const UserProfile = () => {
  const { authUser, loadAuthUser } = useContext(AuthUserContext);
  const { handleRequest, showConfirmation, showSuccess, showWarning } =
    useError();
  const router = useRouter();

  if (!authUser) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  const [userShow, setUserShow] = useState<UserProfileProps>({
    email: authUser.USER.EMAIL,
    name: authUser.USER.NAME,
    phone: authUser.USER.PHONE,
  });

  // Verifica se houve alterações
  const hasChanges =
    userShow.name !== authUser.USER.NAME ||
    userShow.phone.replace(/\D/g, '') !==
      authUser.USER.PHONE.replace(/\D/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasChanges) {
      showWarning('Nenhuma alteração foi feita.');
      return;
    }

    if (userShow.name.trim().length < 3) {
      showWarning('Nome deve ter pelo menos 3 caracteres.');
      return;
    }

    const phoneChanged =
      userShow.phone.replace(/\D/g, '') !==
      authUser.USER.PHONE.replace(/\D/g, '');

    if (phoneChanged && !validarCelularBRCompleto(userShow.phone)) {
      showWarning('Telefone inválido.');
      return;
    }

    const response = await handleRequest(
      () =>
        updateUser({
          NAME: userShow.name.trim(),
          PHONE: userShow.phone.replace(/\D/g, ''),
        }),
      {
        loadingMessage: 'Salvando alterações...',
        successMessage: 'Dados atualizados com sucesso!',
      }
    );

    if (response) {
      // Recarrega dados do usuário
      await loadAuthUser();
    }
  };

  const handlerActivePayment = async () => {
    const token = getToken();

    if (!token) {
      const goToLogin = await showConfirmation(
        'Usuário não autenticado. Faça login novamente.',
        {
          title: 'Sessão expirada',
          type: 'warning',
          confirmText: 'Ir para Login',
          cancelText: 'Cancelar',
        }
      );

      if (goToLogin) {
        router.push('/acess/login');
      }
      return;
    }

    const response = await handleRequest(() => getPaymentActive(token), {
      loadingMessage: 'Ativando assinatura...',
      suppressErrorToast: false,
    });

    if (response && 'MESSAGE' in response) {
      await showConfirmation(response.MESSAGE, {
        title: 'Informação',
        type: 'info',
        confirmText: 'OK',
        cancelText: '',
      });
      router.refresh();
    }
  };

  const handleResendValidationEmail = async () => {
    const response = await handleRequest(() => postResendValidateEmail(), {
      loadingMessage: 'Enviando email de validação...',
      suppressErrorToast: false,
    });

    if (response && 'MESSAGE' in response) {
      showSuccess(
        response.MESSAGE || 'Email de validação enviado com sucesso!',
        {
          autoClose: 4000,
        }
      );
    }
  };

  const handleRequestPasswordChange = async () => {
    const confirmRequest = await showConfirmation(
      `Será enviado um email para ${authUser.USER.EMAIL} com instruções para redefinir sua senha. Deseja continuar?`,
      {
        title: 'Solicitar troca de senha',
        type: 'info',
        confirmText: 'Enviar Email',
        cancelText: 'Cancelar',
      }
    );

    if (!confirmRequest) return;

    const response = await handleRequest(
      () => postForgotPassword({ EMAIL: authUser.USER.EMAIL }),
      {
        loadingMessage: 'Enviando email...',
        suppressErrorToast: true,
      }
    );

    // Sucesso - resposta tem MESSAGE mas não tem STATUS
    if (response && 'MESSAGE' in response && !('STATUS' in response)) {
      showSuccess(response.MESSAGE || 'Email enviado com sucesso!', {
        autoClose: 4000,
      });
    }
  };

  return (
    <div className={styles.userProfile}>
      <h2 className={styles.userProfile_title}>Meu Perfil</h2>
      <form className={styles.userProfile_form} onSubmit={handleSubmit}>
        <div className={styles.userProfile_form_formGroup}>
          <label
            htmlFor="name"
            className={styles.userProfile_form_formGroup_label}
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            className={classNames({
              [styles.userProfile_form_formGroup_input]: true,
              [styles.userProfile_form_formGroup_input_disabled]: false,
              [styles.userProfile_form_formGroup_input_alter]:
                userShow.name !== authUser.USER.NAME,
            })}
            value={userShow.name}
            onChange={(e) => {
              const sanitized = sanitizeByRegex(
                e.target.value,
                /[^A-Za-zÀ-ÖØ-öø-ÿ' ]/g
              );
              setUserShow({ ...userShow, name: sanitized });
            }}
            onBlur={(e) => {
              const value = e.target.value;
              if (value.length < 3) {
                setUserShow({ ...userShow, name: authUser.USER.NAME });
              }
            }}
          />
          <FontAwesomeIcon
            className={styles.userProfile_form_formGroup_icon}
            icon={faUser}
          />
        </div>
        <div className={styles.userProfile_form_formGroup}>
          <label
            htmlFor="phone"
            className={styles.userProfile_form_formGroup_label}
          >
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            inputMode="numeric"
            className={classNames({
              [styles.userProfile_form_formGroup_input]: true,
              [styles.userProfile_form_formGroup_input_disabled]: false,
              [styles.userProfile_form_formGroup_input_alter]:
                phoneMask(userShow.phone) !== phoneMask(authUser.USER.PHONE),
            })}
            value={phoneMask(userShow.phone)}
            onChange={(e) => {
              const value = e.target.value;
              setUserShow({ ...userShow, phone: value });
            }}
            onBlur={(e) => {
              const value = e.target.value;
              if (!validarCelularBRCompleto(value)) {
                setUserShow({
                  ...userShow,
                  phone: phoneMask(authUser.USER.PHONE),
                });
              }
            }}
          />
          <FontAwesomeIcon
            className={styles.userProfile_form_formGroup_icon}
            icon={faPhone}
          />
        </div>
        <div className={styles.userProfile_form_formGroup}>
          <label
            htmlFor="email"
            className={styles.userProfile_form_formGroup_label}
          >
            Email
            <FontAwesomeIcon
              icon={faCircleInfo}
              className={styles.userProfile_form_formGroup_label_info}
            />
            <span className={styles.userProfile_form_formGroup_label_baloon}>
              O Email não pode ser alterado, para mais detalhes entre contato
              com o suporte
            </span>
          </label>
          <input
            type="email"
            id="email"
            inputMode="email"
            className={classNames({
              [styles.userProfile_form_formGroup_input]: true,
              [styles.userProfile_form_formGroup_input_disabled]: true,
            })}
            value={userShow.email}
            onChange={(e) => {
              const value = e.target.value;
              setUserShow({ ...userShow, email: value });
            }}
            readOnly
          />
          <FontAwesomeIcon
            className={styles.userProfile_form_formGroup_icon}
            icon={faEnvelope}
          />
        </div>
        <BtnG text="Salvar Alterações" type="submit" disabled={!hasChanges} />
      </form>
      <div className={styles.userProfile_actions}>
        {authUser.USER.STRIPE_SUBSCRIPTION_STATUS === 'trialing' && (
          <div
            className={classNames({
              [styles.userProfile_actions_box]: true,
              [styles.userProfile_actions_box_active]: true,
            })}
          >
            <p className={styles.userProfile_actions_box_text}>
              Ativar agora o meu plano
            </p>
            <BtnG text="Ativar" type="button" goClick={() => handlerActivePayment()} />
          </div>
        )}

        {!authUser.USER.VALIDATION_EMAIL && (
          <div
            className={classNames({
              [styles.userProfile_actions_box]: true,
              [styles.userProfile_actions_box_validation]: true,
            })}
          >
            <p className={styles.userProfile_actions_box_text}>
              Reenviar Email de validação
            </p>
            <BtnG
              text="Reenviar"
              type="button"
              goClick={() => handleResendValidationEmail()}
            />
          </div>
        )}
        <div
          className={classNames({
            [styles.userProfile_actions_box]: true,
            [styles.userProfile_actions_box_senha]: true,
          })}
        >
          <p className={styles.userProfile_actions_box_text}>
            Solicitar troca de senha
          </p>
          <BtnG
            text="Solicitar"
            type="button"
            goClick={() => handleRequestPasswordChange()}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

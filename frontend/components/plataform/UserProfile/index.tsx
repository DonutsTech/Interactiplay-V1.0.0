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
import { useIsLoading } from '@/context/IsLoadingContext';

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
}

const UserProfile = () => {
  const { authUser, loadAuthUser } = useContext(AuthUserContext);
  const { setIsLoading, isLoading } = useIsLoading();
  const [phoneError, setPhoneError] = useState('');

  if (!authUser) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  // setIsLoading(true);


  const [userShow, setUserShow] = useState<UserProfileProps>({
    email: authUser.USER.EMAIL,
    name: authUser.USER.NAME,
    phone: authUser.USER.PHONE,
  });

  return (
    <div className={styles.userProfile}>
      <h2 className={styles.userProfile_title}>Meu Perfil</h2>
      <form className={styles.userProfile_form}>
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
              if (value.length >= 10 && validarCelularBRCompleto(value)) {
                setPhoneError('');
              }
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
        <BtnG text="Salvar Alterações" type="submit" />
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
            <BtnG text="Ativar" type="button" />
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
            <BtnG text="Reenviar" type="button" />
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
            <BtnG text="Solicitar" type="button" />
          </div>
      </div>
    </div>
  );
};

export default UserProfile;

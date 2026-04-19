'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import {
  faCircleExclamation,
  faPowerOff,
  faSquareCaretDown,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useContext, useState } from 'react';
import logo from '@/assets/images/logo_white_dg.svg';
import styles from './MenuDash.module.scss';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/context/isMobileContext';
import { formatDateBR } from '@/utils/stringUtils';
import { getPaymentActive } from '@/service/plan/payment-active';
import { getToken } from '@/service/token';
import { useError } from '@/context/ErrorContext';
import { UserContext } from '@/context/UserContext';

const MenuDash = () => {
  const { authUser, logout, isLoading } = useContext(AuthUserContext);
  const { isMobile, width } = useIsMobile();
  const { handleRequest, showConfirmation, showWarning, showInfo } = useError();
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  if (isLoading || !authUser) {
    return (
      <div className={styles.loading}>
        <Image
          src={logo}
          alt="Logo Interactiplay"
          width={450}
          height={120}
          draggable={false}
          priority
        />
      </div>
    );
  }

  if (!authUser || isMobile) {
    return null;
  }

  const profile = {
    NAME: authUser.USER.NAME || 'Usuário',
    AVATAR: authUser.USER.AVATAR,
    EMAIL_VALIDATED: authUser.USER.VALIDATION_EMAIL ?? true,
  };

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const confirmLogout = await showConfirmation(
      'Tem certeza que deseja sair da plataforma?',
      {
        title: 'Confirmar logout',
        type: 'warning',
        confirmText: 'Sair',
        cancelText: 'Cancelar',
      }
    );

    if (typeof window !== 'undefined') {
      localStorage.removeItem('userTemp');
    }

    if (confirmLogout) {
      logout();
      setUser({
        id: '',
        name: '',
        email: '',
        selectedPlan: '',
      })
      router.push('/acess/login');
    }
  };

  const handleDropdownToggle = () => {
    setDropDownOpen(!dropDownOpen);
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

    const response = await handleRequest(
      () => getPaymentActive(token),
      {
        loadingMessage: 'Ativando assinatura...',
        suppressErrorToast: false, 
      }
    );

    if (response && 'MESSAGE' in response) {
      await showConfirmation(
        response.MESSAGE,
        {
          title: 'Informação',
          type: 'info',
          confirmText: 'OK',
          cancelText: '',
        }
      );
      router.refresh();
    }
  };

  return (
    <>
      <header className={styles.menuDash}>
        <Link href="/dashboard" className={styles.menuDash_link}>
          <Image
            className={styles.menuDash_link_logo}
            src={logo}
            alt="Logo Interactiplay"
            width={936}
            height={157}
            draggable={false}
            priority
          />
        </Link>

        <nav className={styles.menuDash_nav}>
          <Link href="/dashboard" className={styles.menuDash_nav_link}>
            Flow
          </Link>
          <Link href="/dashboard/myvideos" className={styles.menuDash_nav_link}>
            Meus Vídeos
          </Link>
          <Link
            href="/dashboard/campanhas"
            className={styles.menuDash_nav_link}
          >
            Campanhas
          </Link>
        </nav>

        <div className={styles.menuDash_user}>
          {!profile.EMAIL_VALIDATED && (
            <button
              className={styles.menuDash_user_alert}
              title="Por favor, verifique seu email cadastrado"
              aria-label="Alerta de email não verificado"
              onClick={() => router.push('/dashboard/user')}
            >
              <FontAwesomeIcon
                icon={faCircleExclamation}
                title="Por favor, verifique seu email cadastrado"
              />
            </button>
          )}

          <Image
            className={styles.menuDash_user_avatar}
            src={profile.AVATAR}
            alt={`Avatar de ${profile.NAME}`}
            width={40}
            height={40}
            draggable={false}
            priority
          />

          <div
            className={classNames(styles.menuDash_user_menu, {
              [styles.menuDash_user_menu_open]: dropDownOpen,
            })}
            onClick={handleDropdownToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleDropdownToggle()}
            aria-expanded={dropDownOpen}
            aria-haspopup="true"
          >
            <p className={styles.menuDash_user_menu_name}>
              {profile.NAME.split(' ')[0]}
            </p>
            <FontAwesomeIcon
              icon={faSquareCaretDown}
              className={styles.menuDash_user_menu_icon}
            />
          </div>

          <div
            className={classNames(styles.menuDash_user_menu_dropdown, {
              [styles.menuDash_user_menu_dropdown_open]: dropDownOpen,
            })}
          >
            <Link
              href="/dashboard/user"
              className={styles.menuDash_user_menu_dropdown_link}
              onClick={() => setDropDownOpen(false)}
            >
              <FontAwesomeIcon
                icon={faUserAstronaut}
                className={styles.menuDash_user_menu_dropdown_icon}
              />
              <p className={styles.menuDash_user_menu_dropdown_text}>
                Meu Perfil
              </p>
            </Link>

            <button
              className={styles.menuDash_user_menu_dropdown_link}
              onClick={handleLogout}
            >
              <FontAwesomeIcon
                icon={faPowerOff}
                className={styles.menuDash_user_menu_dropdown_icon}
              />
              <p className={styles.menuDash_user_menu_dropdown_text}>Sair</p>
            </button>
          </div>
        </div>
      </header>
      {(authUser.USER.STRIPE_SUBSCRIPTION_STATUS === 'trialing' && width > 1080) && (
        <div className={styles.trialing}>
          <p>
            Aproveite o seu período de Teste que vai até{' '}
            {formatDateBR(authUser.USER.STRIPE_TRIAL_END)}
          </p>
          <div className={styles.trialing_cta}>
            <p>Não perca tempo e ative agora mesmo sua assinatura! &rarr;</p>
            <button onClick={handlerActivePayment}>Ativar Assinatura</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDash;

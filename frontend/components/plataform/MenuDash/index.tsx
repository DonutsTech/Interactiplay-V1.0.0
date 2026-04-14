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
import { ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/context/isMobileContext';
import { formatDateBR } from '@/utils/stringUtils';
import { getPaymentActive } from '@/service/plan/payment-active';
import { getToken } from '@/service/token';

const MenuDash = () => {
  const { authUser, logout, isLoading } = useContext(AuthUserContext);
  const { isMobile, width } = useIsMobile();
  const router = useRouter();
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [showModalMsg, setShowModalMsg] = useState(false);
  const [msgProp, setMsgProp] = useState<ErrorModalState>({
    mensagem: '',
    btn: true,
    type: 'warning',
  });


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

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDropDownOpen(false);
    setShowModalMsg(true);
    setMsgProp({
      mensagem: 'Gostaria de realizar o Logout?',
      type: 'warning',
      btn: true,
      butonProps: {
        text: 'Sair',
        goClick: () => {
          logout();
          router.push('/acess/login');
          setShowModalMsg(false);
        },
      },
    });
  };

  const handleDropdownToggle = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handlerActivePayment = async () => {
    const token = getToken();
    if (!token) {
      setMsgProp({
        mensagem: 'Usuário não autenticado. Faça login novamente.',
        type: 'warning',
        btn: true,
        butonProps: {
          text: 'Login',
          goClick: () => {
            router.push('/acess/login');
            setShowModalMsg(false);
          },
        },
      });
      setShowModalMsg(true);
      return;
    }

    try {
      const data = await getPaymentActive(token);
      if ('MESSAGE' in data) {
        setMsgProp({
          mensagem: data.MESSAGE,
          type: 'warning',
          btn: true,
          butonProps: {
            text: 'OK',
            goClick: () => setShowModalMsg(false),
          },
        });
        setShowModalMsg(true);
      }
    } catch (error) {
      setMsgProp({
        mensagem: 'Erro ao verificar pagamento ativo.',
        type: 'error',
        btn: true,
        butonProps: {
          text: 'OK',
          goClick: () => setShowModalMsg(false),
        },
      });
      setShowModalMsg(true);
    }
  };

  return (
    <>
      {showModalMsg && (
        <ErrorModal
          isOpen={(show) => setShowModalMsg(show)}
          mensagem={msgProp.mensagem}
          type={msgProp.type}
          btn={msgProp.btn}
          butonProps={msgProp.butonProps}
          onClose={() => setShowModalMsg(false)}
        />
      )}
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
          <Link href="/dashboard/videos" className={styles.menuDash_nav_link}>
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

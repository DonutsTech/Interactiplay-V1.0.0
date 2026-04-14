'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { updateUserAvatar } from '@/service/user';
import { faPencilAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { ChangeEvent, ReactNode, useContext, useRef, useState } from 'react';
import avatarDefault from '@/assets/images/USER.svg';
import styles from './ProfileLayout.module.scss';
import { ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';
import { useRouter } from 'next/navigation';

interface ProfileLayoutProps {
  children: ReactNode;
  activeSection: string;
  sections: Array<{ id: string; label: string; path?: string }>;
  onSectionChange: (sectionId: string) => void;
  showLogoutMobile?: boolean;
}

const ProfileLayout = ({
  children,
  activeSection,
  sections,
  onSectionChange,
  showLogoutMobile = false,
}: ProfileLayoutProps) => {
  const { authUser, setAuthUser, logout, loadAuthUser } =
    useContext(AuthUserContext);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showModalMsg, setShowModalMsg] = useState(false);
  const [msgProp, setMsgProp] = useState<ErrorModalState>({
    mensagem: '',
    type: 'error',
  });

  if (!authUser) {
    return null;
  }

  const profile = {
    NAME: authUser.USER.NAME || 'Usuário',
    AVATAR:
      authUser.USER.AVATAR === '/padrao' || !authUser.USER.AVATAR
        ? avatarDefault
        : authUser.USER.AVATAR,
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current && !isUploading) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setMsgProp({
        mensagem: 'Formato inválido. Use apenas JPG, PNG ou WEBP.',
        type: 'error',
      });
      setShowModalMsg(true);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMsgProp({
        mensagem: 'Arquivo muito grande. Máximo 5MB.',
        type: 'error',
      });
      setShowModalMsg(true);
      return;
    }

    setIsUploading(true);

    try {
      const response = await updateUserAvatar(file);

      if ('STATUS' in response && 'MESSAGE' in response) {
        setMsgProp({
          mensagem: response.MESSAGE,
          type: 'error',
        });
        setShowModalMsg(true);
        setIsUploading(false);
        return;
      }

      await loadAuthUser();

      setMsgProp({
        mensagem: 'Avatar atualizado com sucesso!',
        type: 'success',
      });
      setShowModalMsg(true);
    } catch (error) {
      console.error('Erro ao atualizar avatar:', error);
      setMsgProp({
        mensagem: 'Erro ao atualizar avatar. Tente novamente.',
        type: 'error',
      });
      setShowModalMsg(true);
    } finally {
      setIsUploading(false);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleLogout = () => {
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

  const handleSectionClick = (section: (typeof sections)[0]) => {
    if (section.path) {
      router.push(section.path);
    } else {
      onSectionChange(section.id);
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

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.container_left}>
            <div className={styles.profile}>
              <div
                className={styles.avatarContainer}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleAvatarClick}
              >
                <Image
                  src={profile.AVATAR}
                  alt={`Avatar de ${profile.NAME}`}
                  width={160}
                  height={160}
                  className={styles.avatarImage}
                  priority
                />

                {(isHovered || isUploading) && (
                  <div className={styles.overlay}>
                    {isUploading ? (
                      <div className={styles.loading}>Enviando...</div>
                    ) : (
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        className={styles.editIcon}
                      />
                    )}
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleFileChange}
                disabled={isUploading}
              />

              <h4 className={styles.name}>{profile.NAME.split(' ')[0]}</h4>
            </div>

            {/* Botões de Navegação */}
            <div className={styles.btns}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`${styles.btn} ${
                    activeSection === section.id ? styles.btn_active : ''
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section.label}
                </button>
              ))}

              {showLogoutMobile && (
                <button
                  className={`${styles.btn} ${styles.btn_logout}`}
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faPowerOff} className={styles.logoutIcon} />
                </button>
              )}
            </div>
          </div>

          <div className={styles.container_right}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;

'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { updateUserAvatar } from '@/service/user';
import { faPencilAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { ChangeEvent, ReactNode, useContext, useRef, useState } from 'react';
import avatarDefault from '@/assets/images/USER.svg';
import styles from './ProfileLayout.module.scss';
import { useRouter } from 'next/navigation';
import { useError } from '@/context/ErrorContext';
import { UserContext } from '@/context/UserContext';

interface ProfileLayoutProps {
  children: ReactNode;
  activeSection: string;
  sections: Array<{ id: string; label: string; path?: string }>;
  showLogoutMobile?: boolean;
}

const ProfileLayout = ({
  children,
  activeSection,
  sections,
  showLogoutMobile = false,
}: ProfileLayoutProps) => {
  const { authUser, logout, loadAuthUser } = useContext(AuthUserContext);
  const { handleRequest, showConfirmation, showWarning } = useError();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { setUser } = useContext(UserContext);

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

    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/gif',
    ];
    if (!validTypes.includes(file.type)) {
      showWarning('Formato inválido. Use apenas JPG, PNG, WEBP ou GIF.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showWarning('Arquivo muito grande. Máximo 5MB.');
      return;
    }

    setIsUploading(true);

    const response = await handleRequest(() => updateUserAvatar(file), {
      loadingMessage: 'Atualizando avatar...',
      successMessage: 'Avatar atualizado com sucesso!',
      suppressErrorToast: false,
    });

    setIsUploading(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    if (response) {
      await loadAuthUser();
    }
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

  return (
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
              accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
              onChange={handleFileChange}
              disabled={isUploading}
            />

            <h4 className={styles.name}>{profile.NAME.split(' ')[0]}</h4>
          </div>

          <div className={styles.btns}>
            {sections.map((section) => (
              <button
                key={section.id}
                className={`${styles.btn} ${
                  activeSection === section.id ? styles.btn_active : ''
                }`}

              >
                {section.label}
              </button>
            ))}

            {showLogoutMobile && (
              <button
                className={`${styles.btn} ${styles.btn_logout}`}
                onClick={handleLogout}
              >
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className={styles.logoutIcon}
                />
              </button>
            )}
          </div>
        </div>

        <div className={styles.container_right}>{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;

'use client';

import { IoCloseCircle } from 'react-icons/io5';
import styles from './Welcome.module.scss';
import { useCallback, useContext, useState } from 'react';
import { AuthUserContext } from '@/context/AuthUserContext';
import { postFirstAccess } from '@/service/auth/me';
import { useRouter } from 'next/navigation';

type WelcomeProps = {
  onDismiss: () => void;
};

const Welcome = ({ onDismiss }: WelcomeProps) => {
  const { authUser, loadAuthUser } = useContext(AuthUserContext);
  const [isClosed, setIsClosed] = useState(false);
  const router = useRouter();

  const handleClose = useCallback(async () => {
    setIsClosed(true);
    onDismiss();

    const response = await postFirstAccess();
    if (!('STATUS' in response) || response.STATUS < 400) {
      await loadAuthUser();
      router.refresh();
    }
  }, [loadAuthUser, onDismiss, router]);

  if (isClosed) return null;

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          title="Fechar ajuda"
        >
          <IoCloseCircle />
        </button>

        <div className={styles.header}>
          <h4 className={styles.title}>
            {authUser
              ? `Bem-vindo, ${authUser.USER.NAME.split(' ')[0]}!`
              : 'Bem-vindo ao InteractiPlay!'}
          </h4>
        </div>
        <div className={styles.body}>
          <div className={styles.embed}>
            <video controls className={styles.video}>
              <source src="/media/videos/SmartPlay.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

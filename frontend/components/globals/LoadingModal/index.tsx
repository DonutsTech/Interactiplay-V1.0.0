
import React, { FC } from 'react';
import styles from './Loading.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/logo_white_dg.svg';

interface LoadingModalProps {
  open: boolean;
  message?: string;
}

const LoadingModal: FC<LoadingModalProps> = ({ open, message = "" }) => {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <Image
            src={logo}
            alt="Interactiplay Logo"
            className={styles.modal_header_logo}
            width={200}
            height={35}
            draggable={false}
          />
          <h3 className={styles.modal_header_title}>Aguarde...</h3>
        </div>
        <div className={styles.modal_content}>
          <p className={styles.modal_content_message}>{message || "Aguarde, carregando..."}</p>
          <svg viewBox="25 25 50 50" className={styles.loader}>
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal;
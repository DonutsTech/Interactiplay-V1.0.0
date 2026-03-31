'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ErrorModal.module.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';

interface ErrorModalProps {
  isOpen: (show: boolean) => void;
  mensagem: string;
  type?: 'error' | 'success' | 'warning';
};

const ErrorModal = ({ isOpen, mensagem, type = 'error' }: ErrorModalProps) => {
  return (
    <>
      <div 
        className={styles.overlay}
      />
      <div 
        className={styles.modal}
      >
        <FontAwesomeIcon 
          icon={faClose} 
          className={styles.closeIcon} 
          onClick={() => isOpen(false)}
          width={16}
        />
        <Image 
          src={logo}
          alt="Logo"
          width={936}
          height={157}
          className={styles.modal_logo}
          draggable={false}
          loading="lazy"
        />
        <h3 className={styles.modal_title}>
          {type === 'error' ? 'Ocorreu um erro!' : type === 'success' ? 'Sucesso!' : 'Atenção!'}
        </h3>

        <p className={styles.modal_message}>
          {mensagem}
        </p>
      </div>
    </>
  );
};

export default ErrorModal;
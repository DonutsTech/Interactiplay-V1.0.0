'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/media/icons/donutstechIcon.png';
import styles from './FooterDash.module.scss';
import { useIsMobile } from '@/context/isMobileContext';

const FooterDash = () => {
  const {isMobile} = useIsMobile();


  if (isMobile) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p>©InteractPlay - 2026 - Todos os direitos reservados</p>
        <Link
          className={styles.link}
          target="_blank"
          href="https://www.donutstech.com.br"
          title="Acessar site da DonutsTech"
        >
          <p>
            Feito com amor e açúcar - DonutsTech{' '}
            <Image
              src={logo}
              alt="Logo DonutsTech"
              width={20}
              height={20}
              draggable={false}
              loading="lazy"
              className={styles.logo}
            />
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default FooterDash;
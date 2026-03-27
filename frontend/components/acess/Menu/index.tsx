'use client';

import { useIsMobile } from '@/context/isMobileContext';
import styles from './Menu.module.scss';
import { MouseEvent, TouchEvent, useEffect, useState } from 'react';
import icon_logo from '@/assets/icons/logo_menu_mobile.svg';
import logo from '@/assets/images/logo_white_dg.svg';
import Image from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Menu = () => {
  const { isMobile } = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isMobile ? (
        <>
          <div className={styles.menuMobile_btn} 
            onTouchEnd={() => setOpen(!open)}>
            <Image
              src={icon_logo}
              alt="Logo do menu do InteractPlay"
              width={24}
              height={24}
              draggable={false}
              loading="lazy"
            />
          </div>
          <div
            className={classNames({
              [styles.menuMobile_overlay]: true,
              [styles.open]: open,
            })}
            onTouchEnd={() => setOpen(false)}
          />
          <div
            className={classNames({
              [styles.menuMobile]: true,
              [styles.open]: open,
            })}
          >
            <FontAwesomeIcon
              icon={faXmark}
              width={24}
              className={styles.menuMobile_closeIcon}
              onTouchEnd={() => setOpen(false)}
            />
            <div className={styles.menuMobile_content}>
              <Link
                href={'/'}
                className={styles.menuMobile_content_logo}
                onTouchEnd={(e: TouchEvent<HTMLAnchorElement>) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setOpen(false);
                }}
              >
                <Image
                  src={logo}
                  width={238}
                  height={40}
                  alt="Logo da Interactiplay"
                  draggable={false}
                  loading="lazy"
                />
              </Link>
              <div className={styles.menuMobile_content_nav}>
                <Link
                  href={'/'}
                  className={styles.menuMobile_content_nav_link}
                  onTouchEnd={(e: TouchEvent<HTMLAnchorElement>) => {
                    setOpen(false);
                  }}
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.menuDesk}>
          <Link
            href={"/"}
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={styles.menuDesk_logo}
          >
            <Image
              src={logo}
              width={238}
              height={40}
              alt='Logo da Interactiplay'
              draggable={false}
              loading='lazy'
            />
          </Link>

          <nav className={styles.menuDesk_nav}>
                <Link 
                  href={'/'}
                  className={styles.menuDesk_nav_link}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Menu;

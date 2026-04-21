'use client';

import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styles from './MenuAcervo.module.scss';
import logo from '@/assets/icons/logo_menu_mobile.svg';
import Image from 'next/image';
import gsap from 'gsap';
import ArcevoPocket from './ArcevoPocket';

const MENU_WIDTH = 300;

interface MenuAcervoRef {
  closeMenu: () => void;
}

const MenuAcervo = forwardRef<MenuAcervoRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Expor método closeMenu via ref
  useImperativeHandle(ref, () => ({
    closeMenu: () => {
      setIsOpen(false);
    },
  }));

  useEffect(() => {
    if (!menuContainerRef.current) return;
    if (isOpen) {
      gsap.to(menuContainerRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: 'linear',
      });
    } else {
      gsap.to(menuContainerRef.current, {
        x: 304,
        autoAlpha: 1,
        duration: 0.4,
        ease: 'linear',
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (menuContainerRef.current) {
      gsap.set(menuContainerRef.current, { x: MENU_WIDTH + 48, autoAlpha: 1 });
    }
  }, []);

  return (
    <div ref={menuContainerRef} className={styles.menu}>
      <div
        className={styles.menuBtn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={logo}
          alt="logo"
          width={64}
          height={64}
          className={styles.menuBtn_logo}
        />
      </div>

      <div className={styles.menuAcervo}>
        <ArcevoPocket />
      </div>
    </div>
  );
});

MenuAcervo.displayName = 'MenuAcervo';

export default MenuAcervo;

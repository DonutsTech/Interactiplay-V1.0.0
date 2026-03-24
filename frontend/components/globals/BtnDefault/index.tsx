'use client';

import Image from "next/image";
import Link from "next/link";
import arrow from '@/assets/icons/arrow.svg';
import styles from './BtnDefault.module.scss';

interface BtnDefaultProps {
  label: string;
  href: string;
  onClick?: () => void;
  class?: string;
}

const BtnDefault = ({ label, href='/', onClick, class: className }: BtnDefaultProps) => {

  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`${styles.btnDefault} ${className ? className : ''}`}
    >
      {label}
      <Image 
        src={arrow}
        alt="Seta Icon"
        width={24}
        height={24}
        className={styles.btnDefault_arrow}
        draggable={false}
        loading="lazy"
      />
    </Link>
  )
};

export default BtnDefault;
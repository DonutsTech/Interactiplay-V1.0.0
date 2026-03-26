'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './FaqItem.module.scss';
import type { FaqProps } from '@/@types/faq';
import gsap from 'gsap';

export default function FaqItem({ question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        gsap.to(answerRef.current, {
          height: 'auto',
          duration: 0.5,
          ease: 'power2.inOut',
          opacity: 1,
          pointerEvents: 'auto',
        });
      } else {
        gsap.to(answerRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          opacity: 0,
          pointerEvents: 'none',
        });
      }
    }
  }, [isOpen]);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.faqItem_question} onClick={toggleOpen}>
        <span className={styles.faqItem_question_text}>{question}</span>
        <span
          className={`${styles.faqItem_question_icon} ${isOpen ? styles.rotate : ''}`}
        >
          +
        </span>
      </button>
      <div ref={answerRef} className={styles.faqItem_answer}>
        <p className={styles.faqItem_answer_text}>{answer}</p>
      </div>
    </div>
  );
}

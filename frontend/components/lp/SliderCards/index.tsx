'use client';

import BtnDefault from '@/components/globals/BtnDefault';
import { useIsLoading } from '@/context/ErrorContext';
import { UserContext } from '@/context/UserContext';
import { MouseEvent, TouchEvent, useContext, useRef, useState } from 'react';
import styles from './SliderCards.module.scss';
import CardNew from '../CardNew';

interface SliderCardsProps {
  dados: { text: string }[];
  title: string;
  subtitle?: string;
  button?: boolean;
  href?: string;
  label?: string;
}

const SliderCards = ({
  dados,
  title,
  subtitle,
  button,
  href = '',
  label = 'Saiba mais',
}: SliderCardsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { setIsLoading } = useIsLoading();
  const { user, setUser } = useContext(UserContext);

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

    const walk = (clientX - startX) * 1;

    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseDown = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      e.preventDefault();

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      setStartX(clientX);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      id={`${title.toLowerCase().replace(/\s+/g, '-')}`}
      className={styles.slider}
      aria-label={`Seção que mostra o ${title} da Interactiplay`}
    >
      <div className={styles.slider_container}>
        <div className={styles.slider_container_text}>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div
          className={styles.slider_container_content}
          draggable="true"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {dados.map((item, index) => (
            <div key={index} className={styles.slider_container_content_item}>
              <CardNew text={item.text} />
            </div>
          ))}
        </div>
        {button && (
          <div className={styles.slider_container_content_button}>
            <BtnDefault
              href={href}
              label={label}
              onClick={async () => {
                setIsLoading(true);
                setUser({
                  ...user,
                  selectedPlan: 'db9da2ad-c416-45d7-a420-41c73fef270b',
                });
                setTimeout(() => {
                  setIsLoading(false);
                }, 1200);
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SliderCards;

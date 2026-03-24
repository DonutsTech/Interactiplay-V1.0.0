'use client';

import { useAccessType } from '@/context/AcessTypeContext'; 
import styles from './Benefits.module.scss';
import { MouseEvent, TouchEvent, useRef, useState } from 'react';
import BtnDefault from '@/components/globals/BtnDefault';

const Benefits = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  const { setAccessType } = useAccessType(); //Validar

  const diferenceData = [
    {
      text: "Maior engajamento até o pitch",
    },
    {
      text: "Maior conversão",
    },
    {
      text: "Mensagens personalizadas",
    },
    {
      text: "Redução do CAC e maior ROI",
    },
    {
      text: "Possibilidade de criar um funil personalizado de upsell / downsell",
    },
  ];

    const handleMouseMove = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    const walk = (clientX - startX) * 1;

    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseDown = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      e.preventDefault();

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
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

  return(
<section
      id="diference"
      className={styles.diference}
      aria-label="Seção Diferença do site Interactiplay"
    >
      <div className={styles.diference_container}>
        <h3>Benefícios</h3>
        <div
          className={styles.diference_container_content}
          draggable="true"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {diferenceData.map((item, index) => (
            <div
              key={index}
              className={styles.diference_container_content_item}
            >
              <div className={styles.diference_container_content_card}>
                <p className={styles.diference_container_content_card_text}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div> <br /><br />
        <div className={styles.diference_container_content_button}>
          <BtnDefault
            href="/acess"
            label="Experimente Grátis por 14 dias"
            onClick={() => {
              setAccessType("cadastro");
            }}
          />
        </div>
      </div>
    </section>
  )
};

export default Benefits;
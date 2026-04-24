'use client';

import { useState } from 'react';
import styles from './AutoPlay.module.scss';
import BtnG from '@/components/plataform/BtnG';
import { useError } from '@/context/ErrorContext';
import ToggleActive from '@/components/globals/ToggleActive';

interface IAutoPlayProps {
  duration: number;
}

const AutoPlay = ({ duration }: IAutoPlayProps) => {
  const [autoPlayActive, setAutoPlayActive] = useState(false);
  const [time, setTime] = useState(1);
  const { isLoading } = useError();

  return (
    <div className={styles.tool}>
      <div className={styles.tool_content}>
        <div className={`${styles.toggle} ${!autoPlayActive ? styles.toggle_solo : ''}`}>
          <ToggleActive 
            active={autoPlayActive}
            onToggle={() => setAutoPlayActive(prev => !prev)}
          />
        </div>
        {autoPlayActive && (
          <div className={styles.container}>
            <div className={styles.box}>
              <p className={styles.info}>Quanto Tempo de Auto play ?</p>
              <div className={styles.time}>
                <input
                  type="range"
                  min={1}
                  max={duration - 1}
                  id="time"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                />
                <span>{time}s</span>
              </div>
              <span className={styles.info}>Max de {duration - 1}s</span>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <div className={`${styles.actions_btn} ${styles.actions_btn_save}`}>
            <BtnG
              text="Salvar"
              goClick={() => console.log('Salvar clicked')}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPlay;

'use client';

import { useState } from 'react';
import styles from './SmartTimeline.module.scss';
import ToggleActive from '@/components/globals/ToggleActive';
import { useError } from '@/context/ErrorContext';
import BtnG from '@/components/plataform/BtnG';

const SmartTimeline = () => {
  const [smartTimelineActive, setSmartTimelineActive] = useState(false);
  const { isLoading } = useError();

  return (
    <div className={styles.tool}>
      <div className={styles.tool_content}>
        <div
          className={`${styles.toggle} ${!smartTimelineActive ? styles.toggle_solo : ''}`}
        >
          <ToggleActive
            active={smartTimelineActive}
            onToggle={() => setSmartTimelineActive((prev) => !prev)}
          />
        </div>
        {smartTimelineActive && (
          <div className={styles.container}>
            <p>Configurações do Smart Timeline aqui</p>
          </div>
        )}
      </div>
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
  );
};

export default SmartTimeline;

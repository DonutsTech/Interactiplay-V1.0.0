'use client';

import { ICampaign } from '@/@types/campaign';
import styles from './Features.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import BtnG from '../../BtnG';

interface IFeaturesProps {
  campaing: ICampaign;
  onClose: () => void;
}

const Features = ({ campaing, onClose }: IFeaturesProps) => {
  const [isToggled, setIsToggled] = useState(false);
  const [color, setColor] = useState('#f2f2f2');

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.container}>
          <button className={styles.close} onClick={onClose}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        <div className={styles.content}>
          <div
            className={styles.view}
            style={{
              // backgroundColor: isToggled ? '#E4E4E4' : '#0f0f0f',
              backgroundColor: isToggled ? '#E4E4E4' : '#000125',
            }}
          >
            <div className={styles.view_header}>
              <h4
                className={styles.view_header_title}
                style={{
                  color: isToggled ? '#000125' : '#f2f2f2',
                }}
              >
                {campaing.NAME}
              </h4>
              <div className={styles.view_header_mode}>
                <FontAwesomeIcon
                  icon={faMoon}
                  style={{
                    color: isToggled ? '#000125' : '#f2f2f2',
                  }}
                />
                <div className={styles.toggle_box}>
                  <label className={styles.label}>
                    <input
                      type="checkbox"
                      id="toggle"
                      className={styles.toggle_input}
                      checked={isToggled}
                      onChange={(e) => {
                        console.log('Toggle changed:', e.target.checked);
                        setIsToggled(e.target.checked);
                      }}
                    />
                    <span />
                  </label>
                </div>
                <FontAwesomeIcon
                  icon={faSun}
                  style={{
                    color: isToggled ? '#000125' : '#f2f2f2',
                  }}
                />
              </div>
            </div>
            <div className={styles.view_body}></div>
            <div className={styles.view_actions}>
              <div className={`${styles.btn} ${styles.btn_flow}`}>
                <BtnG
                  text="Editar no Flow"
                  goClick={() => console.log('clicou no Flow')}
                />
              </div>
              <div className={styles.action}>
                <div className={`${styles.btn} ${styles.btn_cancel}`}>
                  <BtnG
                    text="Cancelar"
                    goClick={() => console.log('clicou no Cancelar')}
                  />
                </div>
                <div className={`${styles.btn} ${styles.btn_save}`}>
                  <BtnG
                    text="Salvar"
                    goClick={() => console.log('clicou no Salvar')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tools}></div>
        </div>
      </div>
    </>
  );
};

export default Features;

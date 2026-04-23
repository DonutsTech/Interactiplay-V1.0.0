'use client';

import { ICampaign } from '@/@types/campaign';
import styles from './Features.module.scss';
import { ReactNode, useState } from 'react';
import Thumb from './Thumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import BtnG from '../../BtnG';
import classNames from 'classnames';
import { useError } from '@/context/ErrorContext';

interface IFeaturesProps {
  campaing: ICampaign;
  onClose: () => void;
}

interface IStep {
  step: number;
  name: string;
  description: string;
  children?: ReactNode;
}

const Features = ({ campaing, onClose }: IFeaturesProps) => {
  const [isToggled, setIsToggled] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);



  const steps: IStep[] = [
    {
      step: 0,
      name: 'Thumb',
      description: 'Adicione uma imagem para personalizar sua campanha.',
    },
    {
      step: 1,
      name: 'Auto Play',
      description: 'Ative o autoplay para iniciar o vídeo em loop automático.',
    },
    {
      step: 2,
      name: 'Smart Timeline',
      description:
        'Utilize smart Timeline e personalize a experiência de seu público.',
    },
    {
      step: 3,
      name: 'Headline',
      description: 'Defina um headline chamativo para captar atenção.',
    },
    {
      step: 4,
      name: 'CTA Geral',
      description: 'Configure o botão de chamada para ação geral da campanha.',
    },
    {
      step: 5,
      name: 'Pixel',
      description: 'Adicione seu pixel para rastreamento de conversões.',
    },
  ];

  console.log('Current stepIndex:', stepIndex, 'é', steps[stepIndex].step);

  return (
    <section className={styles.wrapper}>
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
                    text={'anterior'}
                    disabled={stepIndex === 0}
                    goClick={() => {
                      if (stepIndex > 0) {
                        setStepIndex(stepIndex - 1);
                        console.log('passo' + stepIndex);
                      } else {
                        console.log('Está no primeiro passo');
                      }
                    }}
                  />
                </div>
                <div className={`${styles.btn} ${styles.btn_save}`}>
                  <BtnG
                    text={stepIndex === 5 ? 'Finalizar' : 'próximo'}
                    goClick={() => {
                      if (stepIndex < steps.length - 1) {
                        setStepIndex(stepIndex + 1);
                        console.log('passo' + stepIndex);
                      } else {
                        console.log('Finalizou o processo');
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tools}>
            <div className={styles.tools_body}>
              <div className={styles.tools_body_content}>
                {steps.filter((s) => s.step === stepIndex).map((s) => (
                  <div key={s.step} className={styles.tools_body_content_item}>
                  <div className={styles.tools_body_content_item_header}>
                    <h4 className={styles.tools_body_content_item_header_title}>{s.name}</h4>
                    <p className={styles.tools_body_content_item_header_desc}>{s.description}</p>
                  </div>
                  <div className={styles.tools_body_content_item_body}>

                  </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.tools_footer}>
              <div className={styles.trace} />
              {steps.slice(0, steps.length).map((_, i) => (
                <div
                  key={i}
                  className={ `${styles.tools_footer_step} ${stepIndex === i ? styles.tools_footer_step_active : ''}` }
                  onClick={() => {
                    setStepIndex(i)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

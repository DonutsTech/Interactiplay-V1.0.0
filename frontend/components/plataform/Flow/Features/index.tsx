'use client';

import { ICampaign } from '@/@types/campaign';
import { useError } from '@/context/ErrorContext';
import {
  faCircleXmark,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useEffect, useState } from 'react';
import BtnG from '../../BtnG';
import Embed from '../../Embed';
import AutoPlay from './AutoPlay';
import styles from './Features.module.scss';
import Thumb from './Thumb';
import SmartTimeline from './SmartTimeline';
import HeadLine from './HeadLine';
import CTAGeral from './CTAGeral';
import { formatDuration } from '@/utils/videoUtils';
import Pixel from './Pixel';

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
  const [totalDuration, setTotalDuration] = useState(0);
  const { isLoading } = useError();

  // console.log('Campanha recebida em Features:', campaing);

  const calc = () => {
    let totalDuration = 0;
    campaing.CAMPAIGN_VIDEOS.forEach((video) => {
      totalDuration += video.VIDEO.DURATION;
    });
    return totalDuration;
  };

    useEffect(() => {
    const duration = calc();
    setTotalDuration(duration);
  }, [campaing]);

  const steps: IStep[] = [
    {
      step: 0,
      name: 'Thumb',
      description: 'Adicione uma imagem para personalizar sua campanha.',
      children: <Thumb />,
    },
    {
      step: 1,
      name: 'Auto Play',
      description: 'Ative o autoplay para iniciar o vídeo em loop automático.',
      children: (
        <AutoPlay duration={campaing.CAMPAIGN_VIDEOS[0].VIDEO.DURATION} />
      ),
    },
    {
      step: 2,
      name: 'Smart Timeline',
      description:
        'Utilize smart Timeline e personalize a experiência de seu público.',
      children: <SmartTimeline />,
    },
    {
      step: 3,
      name: 'Headline',
      description: 'Defina um headline chamativo para captar atenção.',
      children: <HeadLine />,
    },
    {
      step: 4,
      name: 'CTA Geral',
      description: 'Configure o botão de chamada para ação geral da campanha.',
      children: <CTAGeral duration={totalDuration} />,
    },
    {
      step: 5,
      name: 'Pixel',
      description: 'Adicione seu pixel para rastreamento de conversões.',
      children: <Pixel />,
    },
  ];

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
            <div className={styles.view_body}>
              <Embed campaing={campaing} />
            </div>
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
                    goClick={() => setStepIndex(stepIndex - 1)}
                  />
                </div>
                <div className={`${styles.btn} ${styles.btn_save}`}>
                  <BtnG
                    text={stepIndex === 5 ? 'Finalizar' : 'próximo'}
                    goClick={() => setStepIndex(stepIndex + 1)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tools}>
            <div className={styles.tools_body}>
              <div className={styles.tools_body_content}>
                {steps
                  .filter((s) => s.step === stepIndex)
                  .map((s) => (
                    <div
                      key={s.step}
                      className={styles.tools_body_content_item}
                    >
                      <div className={styles.tools_body_content_item_header}>
                        <h4
                          className={
                            styles.tools_body_content_item_header_title
                          }
                        >
                          {s.name}
                        </h4>
                        <p
                          className={styles.tools_body_content_item_header_desc}
                        >
                          {s.description}
                        </p>
                      </div>
                      <div className={styles.tools_body_content_item_body}>
                        {s.children}
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
                  className={`${styles.tools_footer_step}
                  ${stepIndex === i ? styles.tools_footer_step_active : ''}
                  ${isLoading ? styles.tools_footer_step_disabled : ''}
                  `}
                  onClick={() => {
                    setStepIndex(i);
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

'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './CtaGenerator.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import {
  formatNumber,
  getInputWidth,
  getSlider,
  handleStartChange,
} from '@/utils/rangeUtils';
import { useFlow } from '@/context/FlowContext';
import { isValidUrl } from '@/utils/urlValidator';

interface CtaGeneratorProps {
  duration: number;
  ctaActive: boolean;
  setCtaActive: Dispatch<SetStateAction<boolean>>;
  ctaText: string;
  setCtaText: Dispatch<SetStateAction<string>>;
  alignment: string;
  setAlignment: Dispatch<SetStateAction<string>>;
  textStyle: string;
  setTextStyle: Dispatch<SetStateAction<string>>;
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
  buttonText: string;
  setButtonText: Dispatch<SetStateAction<string>>;
  buttonLink: string;
  setButtonLink: Dispatch<SetStateAction<string>>;
  buttonColor: string;
  setButtonColor: Dispatch<SetStateAction<string>>;
  buttonTextColor: string;
  setButtonTextColor: Dispatch<SetStateAction<string>>;
  borderRadius: number;
  setBorderRadius: Dispatch<SetStateAction<number>>;
  start: number;
  setStart: Dispatch<SetStateAction<number>>;
  ctaTop: number;
  ctaLeft: number;
  onCancel: () => void;
  onSave: () => void;
}

const CtaGenerator = ({
  duration,
  ctaActive,
  setCtaActive,
  ctaText,
  setCtaText,
  alignment,
  setAlignment,
  textStyle,
  setTextStyle,
  textColor,
  setTextColor,
  buttonText,
  setButtonText,
  buttonLink,
  setButtonLink,
  buttonColor,
  setButtonColor,
  buttonTextColor,
  setButtonTextColor,
  borderRadius,
  setBorderRadius,
  start,
  setStart,
  ctaTop,
  ctaLeft,
  onCancel,
  onSave,
}: CtaGeneratorProps) => {
  const { nodes, setNodes, dadosModal } = useFlow();

  const saveCta = () => {
    if (!dadosModal) return;

    const updatedNodes = nodes.map((node) => {
      if (node.id === dadosModal.VIDEO.ID) {
        return {
          ...node,
          data: {
            ...node.data,
            CTA: ctaActive,
            CTA_TEXT: ctaText,
            CTA_URL: buttonLink,
            CTA_STYLE: JSON.stringify({
              buttonText,
              alignment,
              textStyle,
              textColor,
              buttonColor,
              buttonTextColor,
              borderRadius,
              ctaTop,
              ctaLeft,
            }),
            CTA_START: start,
          },
        };
      }
      return node;
    });

    setNodes(updatedNodes);

    // console.log(updatedNodes)
    onSave();
  };

  const resetCta = () => {
    setCtaText('');
    setAlignment('center');
    setTextStyle('normal');
    setTextColor('#000000');
    setButtonText('');
    setButtonLink('');
    setButtonColor('#23118E');
    setButtonTextColor('#FFFFFF');
    setBorderRadius(0);
    setStart(0);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.container_title}>CTA</h4>

      <div className={styles.container_header}>
        <div className={styles.checkBox_wrapper}>
          <input
            type="checkbox"
            name="ctaActive"
            id="ctaActive"
            checked={ctaActive}
            onChange={() => {
              const active = !ctaActive;
              setCtaActive(active);
              if (!active) {
                resetCta();
              }
            }}
          />
          <label htmlFor="ctaActive">{ctaActive ? 'Ativo' : 'Inativo'}</label>
        </div>
      </div>

      <div className={styles.container_body}>
        {ctaActive ? (
          <>
            <div className={styles.container_body_textbox}>
              <label htmlFor="ctaText">Texto da CTA</label>
              <textarea
                id="ctaText"
                placeholder="Insira aqui o texto do CTA - Max 100 caracteres"
                maxLength={104}
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                style={{
                  textAlign: (alignment || 'center') as any,
                  fontWeight: textStyle === 'bold' ? 'bold' : 'normal',
                  fontStyle: textStyle === 'italic' ? 'italic' : 'normal',
                }}
              />
            </div>

            <div className={styles.container_body_align}>
              <label htmlFor="ctaAlign">Alinhamento:</label>
              <select
                id="ctaAlign"
                value={alignment}
                onChange={(e) => setAlignment(e.target.value)}
              >
                <option value="center">Centro</option>
                <option value="left">Esquerda</option>
                <option value="right">Direita</option>
              </select>
            </div>

            <div className={styles.container_body_styletext}>
              <div className={styles.container_body_styletext_left}>
                <label htmlFor="styletext">Estilo:</label>
                <select
                  name="styletext"
                  id="styletext"
                  value={textStyle}
                  onChange={(e) => setTextStyle(e.target.value)}
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Negrito</option>
                  <option value="italic">Itálico</option>
                </select>
              </div>
              <div className={styles.container_body_styletext_right}>
                <label htmlFor="textcolor">cor:</label>
                <input
                  type="color"
                  id="textcolor"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.container_body_button}>
              <div>
                <label htmlFor="buttonText">Texto do botão*</label>
                <input
                  type="text"
                  id="buttonText"
                  placeholder="Insira aqui o texto do botão"
                  value={buttonText}
                  required
                  maxLength={50}
                  onChange={(e) => setButtonText(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.container_body_link}>
              <label htmlFor="buttonLink">Link do botão*</label>
              <input
                type="url"
                id="buttonLink"
                placeholder="https://exemplo.com"
                value={buttonLink}
                required
                onChange={(e) => setButtonLink(e.target.value)}
              />
            </div>

            <div className={styles.container_body_buttonColor}>
              <div className={styles.container_body_buttonColor_left}>
                <label htmlFor="buttonColor">Botão:</label>
                <input
                  type="color"
                  id="buttonColor"
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                />
              </div>
              <div className={styles.container_body_buttonColor_right}>
                <label htmlFor="buttonTextColor">Texto:</label>
                <input
                  type="color"
                  id="buttonTextColor"
                  value={buttonTextColor}
                  onChange={(e) => setButtonTextColor(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.container_body_cantos}>
              <div className={styles.container_body_cantos_input}>
                <label htmlFor="borderRadius">Cantos Arredondados</label>
                <input
                  type="range"
                  id="borderRadius"
                  min="0"
                  max="100"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(Number(e.target.value))}
                  style={{
                    background: getSlider(borderRadius, 0, 100),
                  }}
                />
              </div>
              <span className={styles.container_body_cantos_value}>
                {borderRadius}px
              </span>
            </div>

            <div className={styles.container_body_delay}>
              <div className={styles.container_body_delay_input}>
                <label htmlFor="delay">Start em segundos</label>
                <span>Max {duration}seg</span>
                <input
                  type="range"
                  min={0}
                  max={duration - 1}
                  id="delay"
                  value={start}
                  onChange={(e) => setStart(Number(e.target.value))}
                  style={{
                    background: getSlider(start, 0, duration - 1),
                  }}
                />
              </div>
              <div className={styles.container_body_delay_screen}>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  max={duration - 1}
                  id="delay_number"
                  value={formatNumber(start)}
                  onChange={(e) => handleStartChange(e, duration, setStart)}
                  onFocus={(e) => {
                    e.target.value = start.toString();
                  }}
                  onBlur={(e) => {
                    e.target.value = formatNumber(start);
                  }}
                  style={{
                    width: getInputWidth(start),
                  }}
                />
                <span>seg</span>
              </div>
            </div>
          </>
        ) : (
          <p className={styles.container_body_info}>
            Ative o CTA para o seu vídeo e engaje a venda no momento certo!
          </p>
        )}
      </div>

      <div className={styles.container_footer}>
        <button
          className={classNames({
            [styles.container_footer_btn]: true,
            [styles.container_footer_btn_save]: true,
          })}
          disabled={
            ctaActive &&
            (buttonLink.trim() === '' ||
              buttonText.trim() === '' ||
              !isValidUrl(buttonLink))
          }
          onClick={saveCta}
        >
          Salvar
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className={classNames({
            [styles.container_footer_btn]: true,
            [styles.container_footer_btn_cancel]: true,
          })}
          onClick={onCancel}
        >
          Cancelar
          <FontAwesomeIcon icon={faBan} />
        </button>
      </div>
    </div>
  );
};

export default CtaGenerator;

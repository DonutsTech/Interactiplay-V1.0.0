// components/plataform/Flow/ModalFlow/ButtonGenerator/index.tsx
'use client';

import { Bond } from '@/@types/flow';
import { useFlow } from '@/context/FlowContext';
import {
  formatNumber,
  getInputWidth,
  getSlider,
  handleStartChange,
} from '@/utils/rangeUtils';
import {
  faBan,
  faCheck,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import styles from './ButtonGenerator.module.scss';

interface ButtonGeneratorProps {
  duration: number;
  btnActive: boolean;
  setBtnActive: Dispatch<SetStateAction<boolean>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
  borderRadius: number;
  setBorderRadius: Dispatch<SetStateAction<number>>;
  start: number;
  setStart: Dispatch<SetStateAction<number>>;
  btnTop: number;
  btnLeft: number;
  onCancel: () => void;
  onSave: () => void;
}

const ButtonGenerator = ({
  duration,
  btnActive,
  setBtnActive,
  text,
  setText,
  bgColor,
  setBgColor,
  textColor,
  setTextColor,
  borderRadius,
  setBorderRadius,
  start,
  setStart,
  btnTop,
  btnLeft,
  onCancel,
  onSave,
}: ButtonGeneratorProps) => {
  const { nodes, setNodes, dadosModal } = useFlow();

  const saveBtn = () => {
    if (!dadosModal) return;

    const updatedNodes = nodes.map((node) => {
      if (node.id === dadosModal.VIDEO.ID) {
        const updatedBonds = node.data.BONDS.map((bond: Bond) => {
          if (bond.VIDEO_ID === dadosModal.TARGET) {
            return {
              ...bond,
              BUTTON: btnActive,
              BUTTON_START: start,
              BUTTON_TEXT: text,
              BUTTON_STYLE: JSON.stringify({
                backgroundColor: bgColor,
                textColor: textColor,
                borderRadius: borderRadius,
                btnLeft: btnLeft,
                btnTop: btnTop,
              }),
              BUTTON_MODAL: true,
              X_POSITION: btnLeft,
              Y_POSITION: btnTop,
            };
          }
          return bond;
        });

        return {
          ...node,
          data: {
            ...node.data,
            BONDS: updatedBonds,
          },
        };
      }
      return node;
    });

    setNodes(updatedNodes);

    // Chama a função onSave do ModalFlow (fecha modal e mostra toast)
    onSave();
  };

  const hasSequentialBond = () => {
    if (!dadosModal) return false;
    const node = nodes.find((n) => n.id === dadosModal.VIDEO.ID);
    if (!node) return false;

    return node.data.BONDS.some(
      (bond: Bond) =>
        bond.BUTTON === false && bond.VIDEO_ID !== dadosModal.TARGET
    );
  };

  const canToggleSequential = !hasSequentialBond();

  return (
    <div className={styles.container}>
      <h4 className={styles.container_title}>Conexão</h4>

      <div className={styles.container_header}>
        {canToggleSequential ? (
          <div className={styles.checkBox_wrapper}>
            <input
              type="checkbox"
              name="btnActive"
              id="btnActive"
              checked={btnActive}
              onChange={() => setBtnActive(!btnActive)}
            />
            <label htmlFor="btnActive">
              {btnActive ? 'Click' : 'Sequência'}
            </label>
          </div>
        ) : (
          <p className={styles.container_header_warning}>
            <FontAwesomeIcon icon={faTriangleExclamation} color="#FFD700" />{' '}
            Este vídeo já possui uma conexão de sequência ativa.
          </p>
        )}
      </div>

      <div className={styles.container_body}>
        {btnActive ? (
          <>
            <div className={styles.container_body_text}>
              <label htmlFor="text">Texto do Botão*</label>
              <input
                type="text"
                id="text"
                placeholder="Insira aqui o texto do botão"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={50}
              />
            </div>

            <div className={styles.container_body_cor}>
              <div className={styles.container_body_cor_btn}>
                <label htmlFor="color">Botão</label>
                <input
                  type="color"
                  id="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>
              <div className={styles.container_body_cor_txt}>
                <label htmlFor="color_text">Texto</label>
                <input
                  type="color"
                  id="color_text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
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
                  max={duration -1}
                  id="delay"
                  value={start}
                  onChange={(e) => setStart(Number(e.target.value))}
                  style={{
                    background: getSlider(start, 0, duration -1),
                  }}
                />
              </div>
              <div className={styles.container_body_delay_screen}>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
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
            Vídeo de continuação, quando finalizar o vídeo atual, irá
            automaticamente para o vídeo selecionado na conexão.
            <br />
            <br />
            <span>
              <FontAwesomeIcon icon={faTriangleExclamation} color="#FFD700" />
            </span>{' '}
            Só pode haver uma conexão do tipo sequência por vídeo.
          </p>
        )}
      </div>

      <div className={styles.container_footer}>
        <button
          className={classNames({
            [styles.container_footer_btn]: true,
            [styles.container_footer_btn_save]: true,
          })}
          disabled={btnActive && text.trim() === ''}
          onClick={saveBtn}
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

export default ButtonGenerator;

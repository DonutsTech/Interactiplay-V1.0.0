'use client';

import { useState } from 'react';
import styles from './HeadLine.module.scss';
import ToggleActive from '@/components/globals/ToggleActive';
import { useError } from '@/context/ErrorContext';
import BtnG from '@/components/plataform/BtnG';

interface IPayloadHeadLine {
  headLine: string;
  styleHL: string;
  colorHL: string;
  subHeadLine: string;
  alignSHL: string;
  styleSHL: string;
  colorSHL: string;
}

const HeadLine = () => {
  const [headLineActive, setHeadLineActive] = useState(false);
  const { isLoading } = useError();

  const [headLinerPayload, setHeadLinerPayload] = useState<IPayloadHeadLine>({
    headLine: '',
    styleHL: 'normal',
    colorHL: '#000000',
    subHeadLine: '',
    alignSHL: 'center',
    styleSHL: 'normal',
    colorSHL: '#000000',
  });

  return (
    <div className={styles.tool}>
      <div className={styles.tool_content}>
        <div
          className={`${styles.toggle} ${!headLineActive ? styles.toggle_solo : ''}`}
        >
          <ToggleActive
            active={headLineActive}
            onToggle={() => setHeadLineActive((prev) => !prev)}
          />
        </div>
        {headLineActive && (
          <div className={styles.container}>
            <div className={styles.inputs}>
              <div className={styles.headline_box}>
                <p className={styles.headline_box_title}>Head Line</p>
                <textarea
                  className={styles.headline_box_text}
                  placeholder="Digite a HeadLine aqui...(máx 64 caracteres)"
                  maxLength={64}
                  value={headLinerPayload.headLine}
                  onChange={(e) =>
                    setHeadLinerPayload({
                      ...headLinerPayload,
                      headLine: e.target.value,
                    })
                  }
                />
                <div className={styles.headline_box_styles}></div>
                <div className={styles.headline_box_styles_persona}>
                  <div className={styles.headline_box_styles_persona_font}>
                    <p>Estilo</p>
                    <select
                      name="estiloHeadline"
                      id="estiloHeadline"
                      className={`${styles.headline_box_styles_select} ${styles.headline_box_styles_select_alignment}`}
                      value={headLinerPayload.styleHL}
                      onChange={(e) =>
                        setHeadLinerPayload({
                          ...headLinerPayload,
                          styleHL: e.target.value,
                        })
                      }
                    >
                      <option className={styles.op_normal} value="normal">
                        Normal
                      </option>
                      <option className={styles.op_negrito} value="bold">
                        Negrito
                      </option>
                      <option className={styles.op_italico} value="italic">
                        Itálico
                      </option>
                    </select>
                  </div>
                  <div className={styles.headline_box_styles_persona_color}>
                    <p>Cor</p>
                    <input
                      type="color"
                      name="corHeadline"
                      id="corHeadline"
                      className={styles.headline_box_styles_persona_color_input}
                      value={headLinerPayload.colorHL}
                      onChange={(e) =>
                        setHeadLinerPayload({
                          ...headLinerPayload,
                          colorHL: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className={styles.subHeadline_box}>
                <p className={styles.subHeadline_box_title}>Sub Head Line</p>
                <textarea
                  className={styles.subHeadline_box_text}
                  placeholder="Digite a Sub Head Line aqui...(máx 104 caracteres)"
                  maxLength={104}
                  value={headLinerPayload.subHeadLine}
                  onChange={(e) =>
                    setHeadLinerPayload({
                      ...headLinerPayload,
                      subHeadLine: e.target.value,
                    })
                  }
                />
                <div className={styles.subHeadline_box_styles}>
                  <p>Alinhamento</p>
                  <select
                    name="alignmentSubHeadline"
                    id="alignmentSubHeadline"
                    className={`${styles.subHeadline_box_styles_select} ${styles.subHeadline_box_styles_select_alignment}`}
                    value={headLinerPayload.alignSHL}
                    onChange={(e) =>
                      setHeadLinerPayload({
                        ...headLinerPayload,
                        alignSHL: e.target.value,
                      })
                    }
                  >
                    <option className={styles.op_center} value="center">
                      Centro
                    </option>
                    <option className={styles.op_left} value="left">
                      Esquerda
                    </option>
                    <option className={styles.op_right} value="right">
                      Direita
                    </option>
                  </select>
                  <div className={styles.subHeadline_box_styles_persona}>
                    <div className={styles.subHeadline_box_styles_persona_font}>
                      <p>Estilo</p>
                      <select
                        name="estiloSubHeadline"
                        id="estiloSubHeadline"
                        className={`${styles.subHeadline_box_styles_select} ${styles.subHeadline_box_styles_select_alignment}`}
                        value={headLinerPayload.styleSHL}
                        onChange={(e) =>
                          setHeadLinerPayload({
                            ...headLinerPayload,
                            styleSHL: e.target.value,
                          })
                        }
                      >
                        <option className={styles.op_normal} value="normal">
                          Normal
                        </option>
                        <option className={styles.op_negrito} value="bold">
                          Negrito
                        </option>
                        <option className={styles.op_italico} value="italic">
                          Itálico
                        </option>
                      </select>
                    </div>
                    <div
                      className={styles.subHeadline_box_styles_persona_color}
                    >
                      <p>Cor</p>
                      <input
                        type="color"
                        name="corSubHeadline"
                        id="corSubHeadline"
                        className={
                          styles.subHeadline_box_styles_persona_color_input
                        }
                        value={headLinerPayload.colorSHL}
                        onChange={(e) =>
                          setHeadLinerPayload({
                            ...headLinerPayload,
                            colorSHL: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default HeadLine;

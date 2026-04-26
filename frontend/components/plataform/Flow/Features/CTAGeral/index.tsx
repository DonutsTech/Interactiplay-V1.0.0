'use client';

import { ctaBtnStyle as ctaBtnStyleBG, ctaPStyle } from '@/@types/embed';
import ToggleActive from '@/components/globals/ToggleActive';
import BtnG from '@/components/plataform/BtnG';
import { useEditCampaign } from '@/context/EditCampaignContext';
import { useError } from '@/context/ErrorContext';
import {
  ExternalLinkRequest,
  postCampaignExternalLink,
} from '@/service/externalLink';
import { getSlider } from '@/utils/rangeUtils';
import { isURL } from '@/utils/urlValidator';
import { formatDuration } from '@/utils/videoUtils';
import { useEffect, useState } from 'react';
import styles from './CTAGeral.module.scss';

interface IPayloadCTAGeral {
  ctaText: string;
  alignCTA: string;
  styleCTA: string;
  colorCTA: string;
  textBtn: string;
  linkBtn: string;
  corBtn: string;
  corTextBtn: string;
  cantosBtn: number;
  delay: number;
}

interface Iprops {
  duration: number;
}

const CTAGeral = ({ duration }: Iprops) => {
  const { editingCampaign, fecthCampaignForEdit } = useEditCampaign();
  const [CtaGeralActive, setCtaGeralActive] = useState(false);
  const { isLoading, setIsLoading, showError, showSuccess } = useError();

  const [CtaGeralPayload, setCtaGeralPayload] = useState<IPayloadCTAGeral>({
    ctaText: '',
    alignCTA: 'center',
    styleCTA: 'normal',
    colorCTA: '#000000',
    textBtn: '',
    linkBtn: '',
    corBtn: '#000125',
    corTextBtn: '#F2F2F2',
    cantosBtn: 0,
    delay: 0,
  });

  useEffect(() => {
    if (editingCampaign?.FEATURE?.EXTERNAL_LINK?.ATIVE) {
      const externalLink = editingCampaign.FEATURE.EXTERNAL_LINK;
      const styleText: ctaPStyle = JSON.parse(externalLink.STYLE_TEXT || '{}');
      const buttonStyle: ctaBtnStyleBG = JSON.parse(
        externalLink.BUTTON_STYLE || '{}'
      );
      setCtaGeralActive(true);
      setCtaGeralPayload({
        ctaText: externalLink.TEXT || '',
        alignCTA: styleText.alinhamentoCta || 'center',
        styleCTA: styleText.estiloCta || 'normal',
        colorCTA: styleText.corCta || '#000000',
        textBtn: externalLink.BUTTON_TEXT || '',
        linkBtn: externalLink.LINK_URL || '',
        corBtn: buttonStyle.corBG || '#000125',
        corTextBtn: buttonStyle.corTX || '#F2F2F2',
        cantosBtn: buttonStyle.borderRadius || 0,
        delay: styleText.delay || 0,
      });
    } else {
      clean();
    }
  }, [editingCampaign]);

  const clean = () => {
    setCtaGeralActive(false);
    setCtaGeralPayload({
      ctaText: '',
      alignCTA: 'center',
      styleCTA: 'normal',
      colorCTA: '#000000',
      textBtn: '',
      linkBtn: '',
      corBtn: '#000125',
      corTextBtn: '#F2F2F2',
      cantosBtn: 0,
      delay: 0,
    });
  };

  const disabled =
    CtaGeralActive &&
    (CtaGeralPayload.textBtn === '' || CtaGeralPayload.linkBtn === '');

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (!editingCampaign) {
        showError('Nenhuma campanha selecionada para editar.');
        return;
      }

      const body = {
        ATIVE: CtaGeralActive,
        TEXT: CtaGeralPayload.ctaText,
        STYLE_TEXT: JSON.stringify({
          alinhamentoCta: CtaGeralPayload.alignCTA,
          estiloCta: CtaGeralPayload.styleCTA,
          corCta: CtaGeralPayload.colorCTA,
          styleCta: CtaGeralPayload.styleCTA,
          delay: CtaGeralPayload.delay,
        }),
        BUTTON_TEXT: CtaGeralPayload.textBtn,
        BUTTON_STYLE: JSON.stringify({
          corBG: CtaGeralPayload.corBtn,
          corTX: CtaGeralPayload.corTextBtn,
          borderRadius: `${CtaGeralPayload.cantosBtn}px`,
        }),
        LINK_URL: isURL(CtaGeralPayload.linkBtn)
          ? CtaGeralPayload.linkBtn
          : `https://${CtaGeralPayload.linkBtn}`,
      };

      const result = await postCampaignExternalLink(
        editingCampaign?.ID || '',
        body as ExternalLinkRequest
      );

      if ('STATUS' in result && result.STATUS !== 200) {
        showError('Erro ao salvar CTA Geral. Tente novamente.');
        return;
      }

      showSuccess(`CTA Geral ${CtaGeralActive ? 'ativada' : 'desativada'}!`);

      if (!CtaGeralActive) {
        clean();
      }
    } catch (error) {
      console.error('Error saving CTA Geral:', error);
    } finally {
      fecthCampaignForEdit(editingCampaign?.ID || '');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.tool}>
      <div className={styles.tool_content}>
        <div
          className={`${styles.toggle} ${!CtaGeralActive ? styles.toggle_solo : ''}`}
        >
          <ToggleActive
            active={CtaGeralActive}
            onToggle={() => setCtaGeralActive((prev) => !prev)}
          />
        </div>
        {CtaGeralActive && (
          <div className={styles.container}>
            <div className={styles.inputs}>
              <div className={styles.textBox}>
                <p className={styles.textBox_title}>Head Line</p>
                <textarea
                  className={styles.textBox_text}
                  placeholder="Digite a HeadLine aqui...(máx 100 caracteres)"
                  maxLength={104}
                  value={CtaGeralPayload.ctaText}
                  onChange={(e) =>
                    setCtaGeralPayload({
                      ...CtaGeralPayload,
                      ctaText: e.target.value,
                    })
                  }
                />
              </div>
              <div className={styles.ctaStyle}>
                <div className={styles.ctaStyle_aling}>
                  <p>Alinhamento</p>
                  <select
                    name="alignmentCTA"
                    id="alignmentCTA"
                    className={`${styles.ctaStyle_aling_select} ${styles.ctaStyle_aling_select_alignment}`}
                    value={CtaGeralPayload.alignCTA}
                    onChange={(e) =>
                      setCtaGeralPayload({
                        ...CtaGeralPayload,
                        alignCTA: e.target.value,
                      })
                    }
                  >
                    <option className={styles.op_left} value="left">
                      Esquerda
                    </option>
                    <option className={styles.op_center} value="center">
                      Centro
                    </option>
                    <option className={styles.op_right} value="right">
                      Direita
                    </option>
                  </select>
                </div>
                <div className={styles.ctaStyle_font}>
                  <div className={styles.ctaStyle_font_style}>
                    <p>Estilo</p>
                    <select
                      name="estiloCTA"
                      id="estiloCTA"
                      className={`${styles.ctaStyle_font_style_select} ${styles.ctaStyle_font_style_select_alignment}`}
                      value={CtaGeralPayload.styleCTA}
                      onChange={(e) =>
                        setCtaGeralPayload({
                          ...CtaGeralPayload,
                          styleCTA: e.target.value,
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
                  <div className={styles.ctaStyle_font_color}>
                    <p>Cor</p>
                    <input
                      type="color"
                      name="corCTA"
                      id="corCTA"
                      className={styles.ctaStyle_font_color_input}
                      value={CtaGeralPayload.colorCTA}
                      onChange={(e) =>
                        setCtaGeralPayload({
                          ...CtaGeralPayload,
                          colorCTA: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className={styles.textBtnBox}>
                <p>Texto do Botão *</p>
                <input
                  type="text"
                  id="buttonText"
                  placeholder="Insira aqui o texto do botão"
                  value={CtaGeralPayload.textBtn}
                  required
                  maxLength={50}
                  onChange={(e) =>
                    setCtaGeralPayload({
                      ...CtaGeralPayload,
                      textBtn: e.target.value,
                    })
                  }
                />
                <p>Link do Botão *</p>
                <input
                  type="text"
                  id="buttonLink"
                  placeholder="https://exemplo.com"
                  value={CtaGeralPayload.linkBtn}
                  required
                  maxLength={200}
                  onChange={(e) =>
                    setCtaGeralPayload({
                      ...CtaGeralPayload,
                      linkBtn: e.target.value,
                    })
                  }
                />
              </div>

              <div className={styles.btnstyle}>
                <div className={styles.btnstyle_color}>
                  <div className={styles.btnstyle_color_left}>
                    <label htmlFor="buttonColor">Botão:</label>
                    <input
                      type="color"
                      id="buttonColor"
                      value={CtaGeralPayload.corBtn}
                      onChange={(e) =>
                        setCtaGeralPayload({
                          ...CtaGeralPayload,
                          corBtn: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className={styles.btnstyle_color_right}>
                    <label htmlFor="buttonTextColor">Texto:</label>
                    <input
                      type="color"
                      id="buttonTextColor"
                      value={CtaGeralPayload.corTextBtn}
                      onChange={(e) =>
                        setCtaGeralPayload({
                          ...CtaGeralPayload,
                          corTextBtn: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className={styles.btnstyle_cantos}>
                  <div className={styles.btnstyle_cantos_input}>
                    <label htmlFor="borderRadius">Cantos Arredondados</label>
                    <input
                      type="range"
                      id="borderRadius"
                      min="0"
                      max="100"
                      value={CtaGeralPayload.cantosBtn}
                      onChange={(e) =>
                        setCtaGeralPayload({
                          ...CtaGeralPayload,
                          cantosBtn: Number(e.target.value),
                        })
                      }
                      style={{
                        background: getSlider(
                          CtaGeralPayload.cantosBtn,
                          0,
                          100
                        ),
                      }}
                    />
                  </div>
                  <span className={styles.btnstyle_cantos_value}>
                    {CtaGeralPayload.cantosBtn}px
                  </span>
                </div>
              </div>

              <div className={styles.timerBox}>
                <p>
                  Tempo Máximo de campanha presumida: {formatDuration(duration)}
                </p>
                <div className={styles.timerBox_input}>
                  <input
                    type="range"
                    id="delay"
                    min="0"
                    max={duration - 1}
                    value={CtaGeralPayload.delay}
                    onChange={(e) =>
                      setCtaGeralPayload({
                        ...CtaGeralPayload,
                        delay: Number(e.target.value),
                      })
                    }
                    style={{
                      background: getSlider(
                        CtaGeralPayload.delay,
                        0,
                        duration - 1
                      ),
                    }}
                  />
                  <span className={styles.timerBox_input_value}>
                    {formatDuration(CtaGeralPayload.delay)}
                  </span>
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
            goClick={() => handleSave()}
            disabled={isLoading || disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default CTAGeral;

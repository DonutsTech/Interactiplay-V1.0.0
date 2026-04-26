'use client';

import { useEffect, useState } from 'react';
import styles from './SmartTimeline.module.scss';
import ToggleActive from '@/components/globals/ToggleActive';
import { useError } from '@/context/ErrorContext';
import BtnG from '@/components/plataform/BtnG';
import { useEditCampaign } from '@/context/EditCampaignContext';
import { postCampaignTimeLine } from '@/service/smartTime';

const SmartTimeline = () => {
  const { editingCampaign, fecthCampaignForEdit } = useEditCampaign();
  const [smartTimelineActive, setSmartTimelineActive] = useState(false);
  const [height, setHeight] = useState(10);
  const [color, setColor] = useState('#f2f2f2');
  const { isLoading, setIsLoading, showError, showSuccess } = useError();

  useEffect(() => {
    if (editingCampaign?.FEATURE?.TIMELINE) {
      const timeLineFeature = editingCampaign.FEATURE.TIMELINE;
      setSmartTimelineActive(timeLineFeature.ATIVE);
      setHeight(timeLineFeature.ATIVE ? timeLineFeature.HEIGHT : 10);
      setColor(timeLineFeature.ATIVE ? timeLineFeature.COR : '#f2f2f2');
    }
  }, [editingCampaign]);

  const handleSave = async () => {
    setIsLoading(true);

    try {
      if (!editingCampaign) {
        showError('Nenhuma campanha selecionada para editar.');
        return;
      }

      const result = await postCampaignTimeLine(
        editingCampaign.ID,
        {
          ATIVE: smartTimelineActive,
          HEIGHT: height,
          COR: color,
        }
      )

      if ('STATUS' in result && result.STATUS !== 200) {
        showError('Erro ao salvar Smart Timeline. Tente novamente.');
        return;
      }

      showSuccess(`Smart Timeline ${smartTimelineActive ? 'ativada' : 'desativada'}.`);
    } catch (erro: any) {
      console.error('Error in handleSave:', erro);
      showError(erro.message || 'Erro ao salvar Smart Timeline.');
    } finally {
      fecthCampaignForEdit(editingCampaign?.ID || '');
      setIsLoading(false);
    }
  }

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
            <div className={styles.colorBox}>
              <label htmlFor="color">Cor:</label>
              <input
                type="color"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className={styles.heightBox}>
              <label htmlFor="height">Altura</label>
              <div className={styles.heightInput}>
                <input
                  type="range"
                  id="height"
                  min={10}
                  max={48}
                  value={height}
                  step={1}
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
                <span>{height}px</span>
              </div>
            </div>
            <div className={styles.view}>
              <div
                style={{
                  backgroundColor: color,
                  height: `${height}px`,
                  width: '100%',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.actions}>
        <div className={`${styles.actions_btn} ${styles.actions_btn_save}`}>
          <BtnG
            text="Salvar"
            goClick={() => handleSave()}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default SmartTimeline;

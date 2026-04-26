'use client';

import { useEffect, useState } from 'react';
import styles from './AutoPlay.module.scss';
import BtnG from '@/components/plataform/BtnG';
import { useError } from '@/context/ErrorContext';
import ToggleActive from '@/components/globals/ToggleActive';
import { useEditCampaign } from '@/context/EditCampaignContext';
import { postCampaignAutoPlay } from '@/service/autoPlay';

interface IAutoPlayProps {
  duration: number;
}

const AutoPlay = ({ duration }: IAutoPlayProps) => {
  const { editingCampaign, fecthCampaignForEdit } = useEditCampaign();
  const [autoPlayActive, setAutoPlayActive] = useState(false);
  const [time, setTime] = useState(1);
  const { isLoading, setIsLoading, showError, showSuccess } = useError();

  useEffect(() => {
    if (editingCampaign?.FEATURE?.AUTO_PLAY) {
      const autoPlayFeature = editingCampaign.FEATURE.AUTO_PLAY;
      setAutoPlayActive(autoPlayFeature.ATIVE);
      setTime(autoPlayFeature.ATIVE ? autoPlayFeature.SECOND : 1);
    }
  }, [editingCampaign]);

  const handleSave = async () => {
    setIsLoading(true);

    try {
      if (!editingCampaign) {
        showError('Nenhuma campanha selecionada para editar.');
        return;
      }

      const result = await postCampaignAutoPlay(
        editingCampaign.ID,
        {
          ATIVE: autoPlayActive,
          SECOND: time,
        }
      );

      if ('STATUS' in result && result.STATUS !== 200) {
        showError('Erro ao salvar autoplay. Tente novamente.');
        return;
      }

      showSuccess(`Auto play ${autoPlayActive ? 'ativado' : 'desativado'}.`);
    } catch (err: any) {
      console.error('Error in handleSave:', err);
      showError(err.message || 'Erro ao salvar autoplay.');
    } finally {
      fecthCampaignForEdit(editingCampaign?.ID || '');
      setIsLoading(false);
    }
  }



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
              goClick={() => handleSave()}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPlay;

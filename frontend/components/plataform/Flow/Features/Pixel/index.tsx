'use client';

import MetaLogo from '@/assets/icons/meta-logo.svg';
import ToggleActive from '@/components/globals/ToggleActive';
import BtnG from '@/components/plataform/BtnG';
import { useEditCampaign } from '@/context/EditCampaignContext';
import { useError } from '@/context/ErrorContext';
import { postCampaignPixel } from '@/service/pixel';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Pixel.module.scss';

interface IPayloadPixel {
  nome: string;
  id: string;
}

export function Pixel() {
  const { editingCampaign, fecthCampaignForEdit } = useEditCampaign();
  const [pixelActive, setPixelActive] = useState(false);
  const { isLoading, setIsLoading, showError, showSuccess } = useError();
  const [pixelPayload, setPixelPayload] = useState<IPayloadPixel>({
    nome: '',
    id: '',
  });

  useEffect(() => {
    if (editingCampaign && editingCampaign.FEATURE?.PIXEL) {
      const pixel = editingCampaign.FEATURE.PIXEL;
      setPixelActive(pixel.ATIVE);
      setPixelPayload({
        nome: pixel.ATIVE ? pixel.NAME_META || '' : '',
        id: pixel.ATIVE ? pixel.ID_META || '' : '',
      });
    }
  }, [editingCampaign]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (!editingCampaign) {
        showError('Nenhuma campanha selecionada para editar.');
        return;
      }

      const result = await postCampaignPixel(editingCampaign.ID, {
        ATIVE: pixelActive,
        NAME_META: pixelPayload.nome,
        ID_META: pixelPayload.id,
      });

      if ('STATUS' in result && result.STATUS !== 200) {
        showError('Erro ao salvar Pixel. Tente novamente.');
        return;
      }

      showSuccess(`Pixel ${pixelActive ? 'ativado' : 'desativado'}!`);

      if (!pixelActive) {
        setPixelPayload({ nome: '', id: '' });
      }
    } catch (error) {
      showError('Ocorreu um erro ao salvar o Pixel. Tente novamente.');
    } finally {
      fecthCampaignForEdit(editingCampaign?.ID || '');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.tool}>
      <div className={styles.tool_content}>
        <div
          className={`${styles.toggle} ${!pixelActive ? styles.toggle_solo : ''}`}
        >
          <ToggleActive
            active={pixelActive}
            onToggle={() => setPixelActive((prev) => !prev)}
          />
        </div>
        {pixelActive && (
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image src={MetaLogo} alt="Logo da Meta" height={50} />
            </div>
            <div className={styles.inputs}>
              <div className={styles.nameBox}>
                <label htmlFor="pixelName">Nome do Pixel</label>
                <input
                  type="text"
                  id="pixelName"
                  placeholder="De um nome para o seu pixel"
                  value={pixelPayload.nome}
                  onChange={(e) =>
                    setPixelPayload({ ...pixelPayload, nome: e.target.value })
                  }
                />
              </div>
              <div className={styles.idBox}>
                <label
                  htmlFor="pixelId"
                  title="O ID do Pixel pode ser encontrado no Gerenciador de Eventos da Meta."
                >
                  ID
                  <FontAwesomeIcon icon={faCircleInfo} />
                </label>
                <input
                  type="text"
                  id="pixelId"
                  placeholder="Ex. 0123456789101112"
                  value={pixelPayload.id}
                  onChange={(e) =>
                    setPixelPayload({ ...pixelPayload, id: e.target.value })
                  }
                />
              </div>
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
}

export default Pixel;

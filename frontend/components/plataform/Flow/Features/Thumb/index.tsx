'use client';

import { AnimatedLogo } from '@/components/globals/AnimateLogo';
import ToggleActive from '@/components/globals/ToggleActive';
import BtnG from '@/components/plataform/BtnG';
import { useEditCampaign } from '@/context/EditCampaignContext';
import { useError } from '@/context/ErrorContext';
import { deleteCampaignThumb, postCampaignThumb } from '@/service/thumb';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from './Thumb.module.scss';

const Thumb = () => {
  const { editingCampaign, fecthCampaignForEdit } = useEditCampaign();
  const [thumbActive, setThumbActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>(
    'Nenhuma imagem selecionada.'
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoading, setIsLoading, showError, showSuccess } = useError();

  // Resetar Thumb (desativa, não apaga arquivo)
  const resetThumb = () => {
    setThumbActive(false);
  };

  useEffect(() => {
    if (editingCampaign?.FEATURE?.THUMB_ID) {
      setThumbActive(true);
      setFileName(editingCampaign.FEATURE.THUMB?.IMAGE_URL.split('/').pop() || 'Imagem atual');
    }
  }, [editingCampaign]);

  // Excluir arquivo Thumb (apaga arquivo e desativa)
  const handleDelete = () => {
    setSelectedFile(null);
    setFileName('Nenhuma imagem selecionada.');
    setThumbActive(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  // Salvar Thumb (ativa se arquivo, inativa se não)
  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (
        editingCampaign === undefined
      ) {
        showError('Nenhuma campanha selecionada para editar.');
        return;
      }

      if (thumbActive) {
          const result = await postCampaignThumb(
            editingCampaign.ID,
            selectedFile as File
          );

          if ('STATUS' in result && result.STATUS !== 201) {
            showError('Erro ao excluir salvar thumb. Tente novamente.');
          }

          showSuccess('Thumb salva.');
      } else {
        if (!editingCampaign.FEATURE?.THUMB_ID) {
          throw new Error(
            'Não existe nenhuma thumb para excluir nesta campanha.'
          );
        }

        const result = await deleteCampaignThumb(
          editingCampaign.FEATURE?.THUMB_ID
        );

        if ('STATUS' in result && result.STATUS !== 204) {
          showError('Erro ao excluir thumb. Tente novamente.');
        }

        showSuccess('Thumb excluida.');
      }
    } catch (err: any) {
      console.error('Error in handleSave:', err);
      showError(err.message || 'Erro ao salvar thumb.');
    } finally {
      fecthCampaignForEdit(editingCampaign?.ID || '');
      setIsLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showError('Por favor, selecione um arquivo de imagem válido.');
      return;
    }
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      showError('A imagem deve ter no máximo 50MB.');
      return;
    }
    setSelectedFile(file);
    setFileName(file.name);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isLoading) return;
    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className={styles.tool}>
      <div className={styles.tool_content}>
        <div
          className={`${styles.toggle} ${!thumbActive ? styles.toggle_solo : ''}`}
        >
          <ToggleActive
            active={thumbActive}
            onToggle={() => setThumbActive((prev) => !prev)}
          />
        </div>

        {thumbActive && (
          <div className={styles.container}>
            <div
              className={classNames({
                [styles.inputThumb]: true,
                [styles.inputThumb_disabled]: isLoading,
              })}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {isLoading && (
                <div className={styles.inputThumb_spinner}>
                  <AnimatedLogo size={40} />
                  <span className={styles.inputThumb_spinnerText}>
                    Enviando thumbmail...
                  </span>
                </div>
              )}
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                className={styles.inputThumb_icon}
              />
              <p className={styles.inputThumb_text}>
                Clique ou arraste sua imagem aqui
              </p>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                title="Clique ou arraste a imagem"
                className={styles.inputThumb_input}
                disabled={isLoading}
                onChange={handleFileChange}
              />
            </div>
            <span className={styles.recommendation}>
              Recomenda-se uma imagem com proporção 16:9 e tamanho mínimo de
              1280x720 pixels.
              <span />
            </span>
            <div className={styles.btnBox}>
              <span className={styles.btnBox_name}>
                Arquivo atual: <br />
                <span>{fileName}</span>
              </span>
              <div className={styles.btnBox_btns}>
                <div
                  className={`${styles.btnBox_btns_btn} ${styles.btnBox_btns_btn_excluir}`}
                >
                  <BtnG text="Excluir Thumb" goClick={handleDelete} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <div className={`${styles.actions_btn} ${styles.actions_btn_save}`}>
            <BtnG text="Salvar" goClick={handleSave} disabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumb;

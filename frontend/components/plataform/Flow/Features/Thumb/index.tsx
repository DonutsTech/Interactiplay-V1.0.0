'use client';

import { useRef, useState } from 'react';
import styles from './Thumb.module.scss';
import BtnG from '@/components/plataform/BtnG';
import classNames from 'classnames';
import { useError } from '@/context/ErrorContext';
import { AnimatedLogo } from '@/components/globals/AnimateLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const Thumb = () => {
  const [thumbActive, setThumbActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>(
    'Nenhuma imagem selecionada.'
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoading, setIsLoading, showError, showSuccess } = useError();

  // Mock de envio para o backend
  const mockSendThumb = async (file: File | null, ativo: boolean) => {
    setIsLoading(true);
    return new Promise<{ success: boolean; message: string }>(
      (resolve, reject) => {
        setTimeout(() => {
          if (ativo && file) {
            resolve({ success: true, message: 'Thumb enviada e ativada!' });
          } else if (!ativo) {
            resolve({ success: true, message: 'Thumb desativada.' });
          } else {
            reject(new Error('Erro ao enviar thumb.'));
          }
          setIsLoading(false);
        }, 1200);
      }
    );
  };

  // Resetar Thumb (desativa, não apaga arquivo)
  const resetThumb = () => {
    setThumbActive(false);
  };

  // Excluir arquivo Thumb (apaga arquivo e desativa)
  const handleDelete = () => {
    setSelectedFile(null);
    setFileName('Nenhuma imagem selecionada.');
    setThumbActive(false);
    showSuccess('Thumb excluída.');
    if (inputRef.current) inputRef.current.value = '';
  };

  // Salvar Thumb (ativa se arquivo, inativa se não)
  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (!selectedFile) {
        // Salva como inativo
        await mockSendThumb(null, false);
        setThumbActive(false);
        showSuccess('Thumb salva como inativa.');
      } else {
        // Salva como ativo
        await mockSendThumb(selectedFile, true);
        setThumbActive(true);
        showSuccess('Thumb enviada e ativada!');
      }
    } catch (err: any) {
      showError(err.message || 'Erro ao salvar thumb.');
    } finally {
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
        <div className={`${styles.toggle} ${!thumbActive ? styles.toggle_solo : ''}`}>
          <div className={styles.checkBox_wrapper}>
            <input
              type="checkbox"
              name="thumbActive"
              id="thumbActive"
              checked={thumbActive}
              onChange={() => {
                const active = !thumbActive;
                setThumbActive(active);
                if (!active) {
                  resetThumb();
                }
              }}
            />
            <label htmlFor="thumbActive">
              {thumbActive ? 'Ativo' : 'Ativar'}
            </label>
          </div>
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

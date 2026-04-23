// Thumb feature migrado do IP para V100
'use client';

import { useRef, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faCheck, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
// TODO: Implemente os serviços reais no V100
// import { thumbService, thumbServiceDelete } from '@/services/thumbService';

interface ThumbProps {
  token: string;
  campaignId: string;
  fetchCampaignData: () => Promise<void>;
  image: boolean;
}

const Thumb = ({ token, campaignId, fetchCampaignData, image }: ThumbProps) => {
  const [msg, setMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('Nenhuma imagem selecionada.');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file?.type.startsWith('image/')) {
      setMsg('Por favor, selecione um arquivo de imagem válido.');
      setTimeout(() => setMsg(''), 3000);
      return;
    }
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setMsg('A imagem deve ter no max 5mb.');
      setTimeout(() => setMsg(''), 3000);
      return;
    }
    setSelectedFile(file);
    setFileName(file.name);
    setMsg('');
  };

  const handleUpload = async () => {
    if (selectedFile === null) {
      setMsg('selecione uma imagem primeiro.');
      setTimeout(() => setMsg(''), 3000);
      return;
    }
    setLoading(true);
    setMsg('');
    try {
      // const response = await thumbService(campaignId, token, selectedFile);
      // setMsg(response.message || 'Thumbnail enviada com sucesso!');
      setMsg('Thumbnail enviada com sucesso! (mock)');
      setTimeout(() => setMsg(''), 3000);
      if (inputRef.current) inputRef.current.value = '';
      setSelectedFile(null);
      setFileName('Nenhuma imagem selecionada.');
      await fetchCampaignData();
    } catch (error) {
      setMsg(error instanceof Error ? error.message : 'Erro ao enviar thumbnail');
      setTimeout(() => setMsg(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      // await thumbServiceDelete(campaignId, token);
      await fetchCampaignData();
    } catch (error) {
      setMsg(error instanceof Error ? error.message : 'Erro ao excluir thumbnail');
      setTimeout(() => setMsg(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.content}>
      <div className={classNames({
        [styles.inputThumb]: true,
        [styles.inputThumb_disabled]: loading || msg !== '',
      })}>
        {loading && (
          <div className={styles.inputThumb_spinner}>
            <FontAwesomeIcon icon={faSpinner} spin className={styles.inputThumb_spinnerIcon} />
            <span className={styles.inputThumb_spinnerText}>Enviando thumbnail...</span>
          </div>
        )}
        <FontAwesomeIcon icon={faArrowUpFromBracket} className={styles.inputThumb_icon} />
        <p className={styles.inputThumb_text}>Clique ou arraste a imagem</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          title='Clique ou arraste a imagem'
          className={styles.inputThumb_input}
          onChange={handleFileChange}
          disabled={loading || msg !== ''}
        />
        {msg !== '' && <p className={styles.inputThumb_msg}>{msg}</p>}
      </div>
      <span className={styles.recommendation}>
        Recomenda-se uma imagem com proporção 16:9 e tamanho mínimo de 1280x720 pixels.<span />
      </span>
      <div className={styles.btnBox}>
        <span className={styles.btnBox_name}>
          Arquivo atual: <br />
          <span>{fileName}</span>
        </span>
        <div className={styles.btnBox_btns}>
          <button
            className={classNames({
              [styles.btnBox_btns_btn]: true,
              [styles.btnBox_btns_btn_excluir]: true,
            })}
            disabled={loading || !image}
            onClick={handleDelete}
          >
            Excluir <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className={classNames({
              [styles.btnBox_btns_btn]: true,
              [styles.btnBox_btns_btn_salvar]: true,
            })}
            onClick={handleUpload}
            disabled={selectedFile === null || loading}
          >
            Salvar <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thumb;

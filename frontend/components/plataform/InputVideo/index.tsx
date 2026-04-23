'use client';

import { useEffect, useState } from 'react';
import styles from './InputVideo.module.scss';
import { getVideos, uploadVideo } from '@/service/videos/videosservice';
import classNames from 'classnames';
import { getToken } from '@/service/token';
import { getMe } from '@/service/auth/me';
import { useError } from '@/context/ErrorContext';
import { AnimatedLogo } from '@/components/globals/AnimateLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useVideos } from '@/context/VideosContext';

const InputVideo = () => {
  const { videoCount, videoLimit, refreshVideos } = useVideos();
  const { handleRequest, showWarning, isLoading } = useError();

  // Estado para hover de drag
  const [isDragActive, setIsDragActive] = useState(false);

  // Função para tratar arquivo (input ou drop)
  const handleVideoFile = async (file?: File, resetInput?: () => void) => {
    if (!file) return;

    if (videoCount >= videoLimit) {
      showWarning(
        'Limite de vídeos atingido. Por favor, exclua um vídeo existente para adicionar um novo.'
      );
      return;
    }

    const validTypes = ['video/mp4'];
    if (!validTypes.includes(file.type)) {
      showWarning('Formato inválido. Por favor use apenas Mp4');
      return;
    }

    const maxSize = 2000000000;
    if (file.size > maxSize) {
      showWarning('O vídeo excede o tamanho máximo permitido de 2GB.');
      return;
    }

    const response = await handleRequest(() => uploadVideo(file), {
      loadingMessage: 'Enviando vídeo... Pode levar alguns minutos dependendo do tamanho.',
      successMessage: 'Vídeo enviado com sucesso!',
      suppressErrorToast: false,
    });

    if (resetInput) resetInput();

    if (response) {
      await refreshVideos();
    }
  };

  // Handler para input file
  const handleVideoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    await handleVideoFile(file, () => { event.target.value = ''; });
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);
    if (isDisabled) return;
    const file = event.dataTransfer.files?.[0];
    await handleVideoFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDragActive) setIsDragActive(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);
  };

  const isDisabled = (videoCount >= videoLimit) || isLoading;

  return (
    <div
      className={classNames({
        [styles.inputVideo]: true,
        [styles.inputVideo_disabled]: isDisabled,
        [styles.inputVideo_hover]: isDragActive && !isDisabled,
      })}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {isLoading ? (
        <div className={styles.inputVideo_loading}>
          <AnimatedLogo size={40} />
          <span className={styles.inputVideo_loading_text}>Carregando...</span>
        </div>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            className={styles.inputVideo_icon}
          />
          <p className={styles.inputVideo_text}>
            {isDisabled
              ? `Limite de ${videoLimit} vídeo(s) atingido`
              : 'Clique ou arraste o arquivo'}
          </p>
          <input
            type="file"
            accept="video/mp4"
            title="Clique ou arraste o arquivo"
            className={styles.inputVideo_input}
            onChange={handleVideoUpload}
            disabled={isDisabled}
          />
        </>
      )}
    </div>
  );
};

export default InputVideo;

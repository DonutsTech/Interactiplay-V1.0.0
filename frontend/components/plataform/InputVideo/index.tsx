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

  const handleVideoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

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

    const maxSize = 2 * 1024 * 1024 * 1024;
    if (file.size > maxSize) {
      showWarning('O vídeo excede o tamanho máximo permitido de 2GB.');
      return;
    }

    const response = await handleRequest(() => uploadVideo(file), {
      loadingMessage: 'Enviando vídeo...',
      successMessage: 'Vídeo enviado com sucesso!',
      suppressErrorToast: false,
    });

    event.target.value = '';

    if (response) {
      await refreshVideos();
    }
  };

  const isDisabled = (videoCount >= videoLimit) || isLoading;

  return (
    <div
      className={classNames({
        [styles.inputVideo]: true,
        [styles.inputVideo_disabled]: isDisabled,
      })}
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
            accept="video/mp4,video/webm,video/ogg,video/quicktime"
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

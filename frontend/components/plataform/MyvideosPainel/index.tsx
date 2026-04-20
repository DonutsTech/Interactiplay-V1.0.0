'use client';

import { deleteVideo, getVideos, updateVideoName } from '@/service/videos/videosservice';
import styles from './MyvideosPainel.module.scss';
import { useEffect, useState } from 'react';
import InputVideo from '../InputVideo';
import { getMe } from '@/service/auth/me';
import { useVideos } from '@/context/VideosContext';
import VideoCard from '../VideoCard';
import { useError } from '@/context/ErrorContext';

const MyvideosPainel = () => {
  const { loadVideos, videoCount, videoLimit, videos, refreshVideos } =
    useVideos();
  const { handleRequest, showConfirmation } = useError();

  useEffect(() => {
    loadVideos();
  }, [videoCount, videoLimit]);

  const percents = videoLimit > 0 ? (videoCount / videoLimit) * 100 : 0;

  const handleDeleteVideo = async (videoId: string) => {
    const confirmed = await showConfirmation(
      'Esta ação não pode ser desfeita. Todos os dados relacionados a este vídeo serão perdidos.',
      {
        title: 'Excluir vídeo',
        confirmText: 'Sim, excluir',
        cancelText: 'Cancelar',
        type: 'warning',
      }
    );

    if (!confirmed) return;

    await handleRequest(() => deleteVideo(videoId), {
      successMessage: 'Vídeo excluído com sucesso!',
      loadingMessage: 'Excluindo vídeo...',
      onSuccess: async () => {
        await refreshVideos();
      },
      onError: async (error) => {
        console.error('Erro ao excluir:', error);
      },
    });
  };

  const handleEditVideo = async (videoId: string, newName: string) => {
    if (!newName.trim()) {
      return;
    }

  await handleRequest(() => updateVideoName(videoId, newName), {
      successMessage: 'Nome do vídeo atualizado com sucesso!',
      loadingMessage: 'Atualizando nome...',
      onSuccess: async () => {
        await refreshVideos();
      },
      onError: async (error) => {
          console.error('Erro ao atualizar nome do vídeo:', {
          videoId,
          newName,
          error,
          errorStatus: error?.STATUS,
          errorMessage: error?.MESSAGE,
        });
      },
    });
  };

  return (
    <section className={styles.myvideosPainel}>
      <div className={styles.myvideosPainel_content}>
        <div className={styles.myvideosPainel_content_header}>
          <div className={styles.myvideosPainel_content_header_information}>
            <h4>Meus Vídeos - Acervo</h4>
            <div
              className={styles.myvideosPainel_content_header_information_count}
            >
              <div className={styles.info}>
                <span className={styles.count}>
                  {videoCount} {'/'} {videoLimit} Vídeos{' '}
                </span>
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.progress}
                  style={{ width: `${percents}%` }}
                />
              </div>
            </div>
            <p>{percents.toFixed(2)}%</p>
          </div>

          <div className={styles.myvideosPainel_content_header_input}>
            <InputVideo />
          </div>
        </div>
        <div className={styles.myvideosPainel_content_body}>
          {videoCount === 0 && (
            <div className={styles.empty}>
              <p className={styles.empty_title}>
                Você ainda não possui vídeos adicionados.
              </p>
              <span>
                Adicione vídeos para começar a criar suas campanhas interativas!
              </span>
            </div>
          )}
          {videoCount > 0 && (
            <div className={styles.myvideosPainel_content_body_grade}>
              {videos.map((video) => (
                <VideoCard
                  key={video.ID}
                  video={video}
                  onDelete={handleDeleteVideo}
                  onEdit={handleEditVideo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyvideosPainel;

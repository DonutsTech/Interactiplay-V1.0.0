'use client';

import { useEffect } from 'react';
import styles from './VideoModal.module.scss';

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}


const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);


  return (
    <div className={styles.videoModal}>
      <div className={styles.videoModal_overlay}  onClick={onClose}/>
      <div className={styles.videoModal_content}>
        <button className={styles.videoModal_closeButton} onClick={onClose}>
          &times;
        </button>
        {videoUrl ? (
          <video 
            controls
            className={styles.videoModal_video}
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        ) : (
          <p>Carregando vídeo...</p>
        )}
      </div>
    </div>
  );
};

export default VideoModal;  
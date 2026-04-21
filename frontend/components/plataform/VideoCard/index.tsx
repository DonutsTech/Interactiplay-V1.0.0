'use client';

import { IVideo } from '@/@types/video';
import styles from './VideoCard.module.scss';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faClock,
  faEye,
  faPencil,
  faTimes,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import {
  formatDuration,
  formatFileSize,
  formatVideoName,
} from '@/utils/videoUtils';
import VideoModal from './VideoModal';
import { formatDateBR } from '@/utils/stringUtils';
import { useError } from '@/context/ErrorContext';

interface VideoCardProps {
  video: IVideo;
  onDelete?: (videoId: string) => void;
  onEdit?: (videoId: string, newName: string) => void;
  onView?: (video: IVideo) => void;
}

const VideoCard = ({ video, onEdit, onDelete, onView }: VideoCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(video.NAME);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoModal, setIsVideoModal] = useState<string | null>(null);
  const { isLoading } = useError();

  // Handlers de preview com tratamento de erro
  const handleMouseEnter = async () => {
    if (!videoRef.current) return;

    try {
      playPromiseRef.current = videoRef.current.play();
      await playPromiseRef.current;
      playPromiseRef.current = null;
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Erro ao reproduzir vídeo:', error);
      }
      playPromiseRef.current = null;
    }
  };

  const handleMouseLeave = async () => {
    if (!videoRef.current) return;

    if (playPromiseRef.current) {
      try {
        await playPromiseRef.current;
      } catch {
      }
    }

    try {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } catch (error) {
    }
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    if (editedName.trim() && editedName !== video.NAME) {
      onEdit?.(video.ID, editedName.trim());
    }
    setIsEditingName(false);
  };

  const handleCancelEdit = () => {
    setEditedName(video.NAME);
    setIsEditingName(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSaveName();
    if (e.key === 'Escape') handleCancelEdit();
  };

  return (
    <>
      {isVideoModalOpen && (
        <VideoModal
          videoUrl={isVideoModal}
          onClose={() => {
            setIsVideoModalOpen(false);
            setIsVideoModal(null);
          }}
        />
      )}
      <div className={styles.videoCard}>
        {isEditingName && (
          <div className={styles.videoCard_modal}>
            <div className={styles.videoCard_modal_content}>
              <h3 className={styles.videoCard_modal_title}>
                Editar Nome do Vídeo
              </h3>
              <input
                type="text"
                className={styles.videoCard_modal_input}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                maxLength={100}
              />
              <div className={styles.videoCard_modal_actions}>
                <button
                  className={`${styles.videoCard_modal_btn} ${styles.videoCard_modal_btn_cancel}`}
                  onClick={handleCancelEdit}
                >
                  <FontAwesomeIcon icon={faTimes} />
                  Cancelar
                </button>
                <button
                  className={`${styles.videoCard_modal_btn} ${styles.videoCard_modal_btn_save}`}
                  onClick={handleSaveName}
                >
                  <FontAwesomeIcon icon={faCheck} />
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={styles.videoCard_preview}>
          {!imageError && video.URL ? (
            <video
              ref={videoRef}
              className={styles.videoCard_preview_video}
              src={video.URL}
              muted
              loop
              playsInline
              preload="metadata"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onError={() => setImageError(true)}
              onClick={() => {
                setIsVideoModal(video.URL);
                setIsVideoModalOpen(true);
              }}
            />
          ) : (
            <div className={styles.videoCard_preview_placeholder}>
              <FontAwesomeIcon icon={faEye} />
            </div>
          )}
          <div className={styles.videoCard_preview_duration}>
            <FontAwesomeIcon icon={faClock} />
            <span>{formatDuration(video.DURATION)}</span>
          </div>
        </div>

        <div className={styles.videoCard_info}>
          <h4 className={styles.videoCard_info_title} title={video.NAME}>
            {formatVideoName(video.NAME)}
          </h4>

          <div className={styles.videoCard_info_details}>
            <span className={styles.videoCard_info_detail}>
              <strong>Upload</strong> {formatDateBR(video.CREATED_AT)}
            </span>
            <span className={styles.videoCard_info_detail}>
              <strong>Tamanho:</strong> {formatFileSize(video.SIZE)}
            </span>
            <span className={styles.videoCard_info_detail}>
              <strong>Orientação:</strong> {video.ORIENTATION}
            </span>
            <span className={styles.videoCard_info_detail}>
              <strong>Dimensões:</strong> {video.WIDTH}x{video.HEIGHT}
            </span>
          </div>
          {/* TODO: Placeholder para indicador de campanha futura */}
          {/* <div className={styles.videoCard_info_campaign}>
          <span>📊 Vinculado a: Nome da Campanha</span>
        </div> */}
        </div>

        <div className={styles.videoCard_actions}>
          {onView && (
            <button
              className={styles.videoCard_actions_btn}
              onClick={() => onView(video)}
              title="Visualizar vídeo"
              disabled={!video.URL || isLoading}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          )}
          {onEdit && (
            <button
              className={styles.videoCard_actions_btn}
              onClick={handleEditName}
              title="Editar nome do vídeo"
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faPencil} />
            </button>
          )}
          {onDelete && (
            <button
              className={`${styles.videoCard_actions_btn} ${styles.videoCard_actions_btn_delete}`}
              onClick={() => onDelete(video.ID)}
              title="Excluir vídeo"
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoCard;

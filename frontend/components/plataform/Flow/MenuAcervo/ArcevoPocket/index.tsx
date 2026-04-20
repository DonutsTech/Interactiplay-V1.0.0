'use client';

import InputVideo from '@/components/plataform/InputVideo';
import styles from './ArcevoPocket.module.scss';
import { useVideos } from '@/context/VideosContext';
import CardVideoPocket from './CardVideoPocket';

const ArcevoPocket = () => {
  const { videos, videoCount, videoLimit } = useVideos();

  return (
    <div className={styles.acervoPocket}>
      <div className={styles.acervoPocket_inputBox}>
        <InputVideo />
      </div>
      <p className={styles.acervoPocket_videoCount}>{videoCount}/{videoLimit} vídeos</p>
      <div className={styles.acervoPocket_list}>
        {videos.map((video) => (
          <CardVideoPocket key={video.ID} video={video} />
        ))}
      </div>
    </div>
  );
};

export default ArcevoPocket;
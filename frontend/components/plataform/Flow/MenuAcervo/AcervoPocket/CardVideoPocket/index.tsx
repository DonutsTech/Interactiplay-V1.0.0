'use client';

import { IVideo } from '@/@types/video';
import styles from './CardVideoPocket.module.scss';
import { formatDuration, formatVideoName } from '@/utils/videoUtils';
import { DragEvent } from 'react';


const onDragStart = (event: DragEvent, nodeType: string, id: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.setData('videoId', id);
  event.dataTransfer.effectAllowed = 'move';
  console.log('Drag started with video ID:', id);
};


const CardVideoPocket = ({ video } : { video: IVideo }) => {



  return (
    <div 
      className={styles.cardVideoPocket} 
      draggable={true}
      id={video.ID}
      onDragStart={(event) => onDragStart(event, 'video', video.ID)}
      title="Arraste para adicionar ao Flow"
      >
      <video 
        loop
        muted
        autoPlay
        playsInline
        className={styles.cardVideoPocket_video}
        preload="metadata"
      >
        <source src={video.URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.cardVideoPocket_info}>
        <p className={styles.cardVideoPocket_info_title}>{formatVideoName(video.NAME)}</p>
        <p className={styles.cardVideoPocket_info_duration}>{formatDuration(video.DURATION)}</p>
      </div>
    </div>
  )
};

export default CardVideoPocket;
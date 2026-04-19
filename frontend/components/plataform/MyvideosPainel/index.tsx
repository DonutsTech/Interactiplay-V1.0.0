'use client';

import { getVideos } from '@/service/videos/videosservice';
import styles from './MyvideosPainel.module.scss';
import { useEffect, useState } from 'react';
import InputVideo from '../InputVideo';
import { getMe } from '@/service/auth/me';
import { useVideos } from '@/context/VideosContext';

const MyvideosPainel = () => {
  const { videoCount, videoLimit } = useVideos();


  const percents = videoLimit > 0 ? (videoCount / videoLimit) * 100 : 0;

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
      </div>
    </section>
  );
};

export default MyvideosPainel;

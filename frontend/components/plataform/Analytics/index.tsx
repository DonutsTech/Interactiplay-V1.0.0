'use client';

import { useEffect, useState } from 'react';
import styles from './Analytics.module.scss';
import { IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { ICampaign } from '@/@types/campaign';
import socket from '@/service/sockets/sockets';
import { IoCloseCircle } from 'react-icons/io5';

interface IAnalyticsProps {
  campaign: ICampaign;
  onClose: () => void;
}

// Paleta de cores para gráficos (pode ser expandida)
// const COLORS = ['#9900FF', '#5B71B9', '#00FFF1', '#FFCE08', '#0CB189'];

// Estilo customizado para tooltip dos gráficos
// const TOOLTIP_STYLE = {
//   contentStyle: { backgroundColor: '#0F073E', border: '1px solid rgba(153,0,255,0.3)', borderRadius: '10px', fontSize: '12px' },
//   labelStyle: { color: '#F2F2F2', fontWeight: 600 },
//   itemStyle: { color: '#9C9C9C' },
// };

socket.on('connect', () => console.log('[IO] => new connnwct'));
const Analytics = ({ campaign, onClose }: IAnalyticsProps) => {
  const [data, setData] = useState<IAnalyticsSocketData | null>(null);

  useEffect(() => {
  if (!campaign.ID) return;

  socket.emit('campaignAnalytics', campaign.ID);

  const handleAnalyticsData = (analyticsData: IAnalyticsSocketData) => {
    setData(analyticsData);
    console.log('Analytics data:', analyticsData);
  };

  socket.on('campaignAnalyticsData', handleAnalyticsData);

  return () => {
    socket.off('campaignAnalyticsData', handleAnalyticsData);
  };
}, [campaign.ID]);

  return (
    <div className={styles.analytics}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          title="Fechar analytics"
        >
          <IoCloseCircle />
        </button>

        <div className={styles.header}>
          <p className={styles.headerTitle}> Analytic: {campaign.NAME}</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

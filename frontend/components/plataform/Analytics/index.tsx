'use client';

import { useEffect, useState } from 'react';
import styles from './Analytics.module.scss';
import { IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { ICampaign } from '@/@types/campaign';
import socket from '@/service/sockets/sockets';
import { IoCloseCircle } from 'react-icons/io5';
import { FaPlay, FaUserClock } from 'react-icons/fa6';
import { MdOutlineViewSidebar } from 'react-icons/md';
import { TbHandClick } from 'react-icons/tb';
import { PiTreeStructureLight } from 'react-icons/pi';
import { formatDuration } from '@/utils/videoUtils';

import SectionPlay from './SectionPlay';
import SectionViews from './SectionViews';
import SectionTime from './SectionTime';
import { SectionFlow } from './SectionFlow';
import SectionClicks from './SectionClicks';

interface IAnalyticsProps {
  campaign: ICampaign;
  onClose: () => void;
}

socket.on('connect', () => console.log('[IO] => new connnwct'));

const Analytics = ({ campaign, onClose }: IAnalyticsProps) => {
  const [data, setData] = useState<IAnalyticsSocketData | null>(null);
  const [section, setSection] = useState<
    'plays' | 'views' | 'clicks' | 'time' | 'flow'
  >('plays');

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
  }, [campaign.ID, socket]);

  if (!data) return null;

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
          <p className={styles.headerTitle}>{campaign.NAME}</p>
          <div className={styles.info}>
            <div
              className={`${styles.info_item} ${styles.info_item_plays} ${section === 'plays' ? styles.active : ''}`}
              onClick={() => setSection('plays')}
            >
              <FaPlay className={styles.icon} />
              <div className={styles.info_item_dados}>
                <p>{data.ANALYTICS.TOTAL_PLAYS} Plays</p>
                <p>{data.ANALYTICS.TOTAL_PLAY_UNIQUE} Unique Plays</p>
              </div>
            </div>
            <div
              className={`${styles.info_item} ${styles.info_item_views} ${section === 'views' ? styles.active : ''}`}
              onClick={() => setSection('views')}
            >
              <MdOutlineViewSidebar className={styles.icon} />
              <div className={styles.info_item_dados}>
                <p>{data.ANALYTICS.TOTAL_VIEWS} Views</p>
                <p>
                  {data.ANALYTICS.TOTAL_VIEWS === 0
                    ? '-'
                    : (
                        (data.ANALYTICS.TOTAL_PLAYS /
                          data.ANALYTICS.TOTAL_VIEWS) *
                        100
                      ).toFixed(2)}
                  %
                </p>
              </div>
            </div>
            <div
              className={`${styles.info_item} ${styles.info_item_click} ${section === 'clicks' ? styles.active : ''}`}
              onClick={() => setSection('clicks')}
            >
              <TbHandClick className={styles.icon} />
              <div className={styles.info_item_dados}>
                <p>
                  {data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.BUTTON_CLICK_CAMPAING}{' '}
                  Click no CTA Geral
                </p>
                <p>
                  {(
                    (data.CAMPAIGN.FEATURE &&
                    data.CAMPAIGN.FEATURE?.EXTERNAL_LINK
                      ? data.CAMPAIGN.FEATURE?.EXTERNAL_LINK
                          ?.BUTTON_CLICK_CAMPAING / data.ANALYTICS.TOTAL_PLAYS
                      : 0) * 100
                  ).toFixed(2)}
                  %
                </p>
              </div>
            </div>
            <div
              className={`${styles.info_item} ${styles.info_item_time} ${section === 'time' ? styles.active : ''}`}
              onClick={() => setSection('time')}
            >
              <FaUserClock className={styles.icon} />
              <div className={styles.info_item_dados}>
                <p>Tempo médio</p>
                <p>
                  {data.ANALYTICS.TOTAL_PLAYS === 0
                    ? '-'
                    : formatDuration(
                        data.MODEL_TIME.TOTAL_TIMESCREEN /
                          data.ANALYTICS.TOTAL_PLAYS
                      )}
                </p>
              </div>
            </div>
            <div
              className={`${styles.info_item} ${styles.info_item_flow} ${section === 'flow' ? styles.active : ''}`}
              onClick={() => setSection('flow')}
            >
              <PiTreeStructureLight className={styles.icon} />
            </div>
          </div>
        </div>

        <div className={styles.body}>
          {section === 'plays' && <SectionPlay {...data} />}
          {section === 'views' && <SectionViews {...data} />}
          {section === 'clicks' && <SectionClicks data={data} campaign={campaign} />}
          {section === 'time' && <SectionTime {...data} />}
          {section === 'flow' && <SectionFlow data={data} campaign={campaign} />}
        </div>
      </div>
    </div>
  );
};

export default Analytics;

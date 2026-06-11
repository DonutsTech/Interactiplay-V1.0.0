'use client';

import { useEffect, useState } from 'react';
import styles from '../Analytics/Analytics.module.scss';
import testeABStyles from './AnalyticsTesteAB.module.scss';
import { ITestABAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { ITestAB } from '@/@types/testeAB';
import socket from '@/service/sockets/sockets';
import { IoCloseCircle } from 'react-icons/io5';
import { FaPlay } from 'react-icons/fa6';
import { MdOutlineViewSidebar } from 'react-icons/md';
import { TbHandClick } from 'react-icons/tb';
import { FaUserClock } from 'react-icons/fa6';
import { PiTreeStructureLight } from 'react-icons/pi';
import SectionPlayTesteAB from './SectionPlayTesteAB';
import SectionViewsTesteAB from './SectionViewsTesteAB';
import SectionClicksTesteAB from './SectionClicksTesteAB';
import SectionTimeTesteAB from './SectionTimeTesteAB';
import SectionFlowTesteAB from './SectionFlowTesteAB';

interface IAnalyticsTesteABProps {
  testAB: ITestAB;
  onClose: () => void;
}

const AnalyticsTesteAB = ({ testAB, onClose }: IAnalyticsTesteABProps) => {
  const [data, setData] = useState<ITestABAnalyticsSocketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState<
    'plays' | 'views' | 'clicks' | 'time' | 'flow'
  >('plays');

  useEffect(() => {
    if (!testAB.ID) return;

    setLoading(true);
    setData(null);

    socket.emit('testABAnalytics', testAB.ID);

    const handleData = (payload: ITestABAnalyticsSocketData) => {
      // console.log('[AnalyticsTesteAB] testABAnalyticsData recebido:', payload);
      setData(payload);
      setLoading(false);
    };

    socket.on('testABAnalyticsData', handleData);

    return () => {
      socket.off('testABAnalyticsData', handleData);
    };
  }, [testAB.ID]);

  const nameA = testAB.CAMPAIGN_A?.NAME ?? 'Campanha A';
  const nameB = testAB.CAMPAIGN_B?.NAME ?? 'Campanha B';

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
          <p className={`${styles.headerTitle} ${testeABStyles.headerTitleAB}`}>
            <span className={testeABStyles.slotA}>A</span>
            {nameA}
            <span style={{ opacity: 0.5, fontWeight: 400 }}>×</span>
            <span className={testeABStyles.slotB}>B</span>
            {nameB}
          </p>

          <div className={`${styles.info} ${testeABStyles.infoStretch}`}>
            <div
              className={`${styles.info_item} ${styles.info_item_plays} ${section === 'plays' ? styles.active : ''}`}
              onClick={() => setSection('plays')}
            >
              <FaPlay className={styles.icon} />
              <div className={styles.info_item_dados}>
                <p>A: {data ? data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS : '—'} Plays</p>
                <p>B: {data ? data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS : '—'} Plays</p>
              </div>
            </div>

            <div
              className={`${styles.info_item} ${styles.info_item_views} ${section === 'views' ? styles.active : ''}`}
              onClick={() => setSection('views')}
            >
              <MdOutlineViewSidebar className={styles.icon} />
              <div className={styles.info_item_dados}>
                <p>A: {data ? data.ANALYTICS_A.ANALYTICS.TOTAL_VIEWS : '—'} Views</p>
                <p>B: {data ? data.ANALYTICS_B.ANALYTICS.TOTAL_VIEWS : '—'} Views</p>
              </div>
            </div>

            <div
              className={`${styles.info_item} ${styles.info_item_click} ${section === 'clicks' ? styles.active : ''}`}
              onClick={() => setSection('clicks')}
            >
              <TbHandClick className={styles.icon} />
              <div className={styles.info_item_dados}>
                {(() => {
                  // Campanha A
                  let ctaGeralA = data?.ANALYTICS_A.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.ATIVE === true
                    ? (data?.ANALYTICS_A.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.BUTTON_CLICK_TEST_AB ?? 0)
                    : 0;
                  let ctaInternoA = Array.isArray(data?.ANALYTICS_A.CAMPAIGN.CAMPAIGN_VIDEOS)
                    ? data.ANALYTICS_A.CAMPAIGN.CAMPAIGN_VIDEOS.reduce((sum, video) => {
                        if (video.CTA === true) {
                          return sum + (video.CTA_CLICK_TEST_AB ?? 0);
                        }
                        return sum;
                      }, 0)
                    : 0;
                  let totalCTAA = ctaGeralA + ctaInternoA;
                  let totalPlaysA = data?.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS ?? 0;
                  let pctA = totalPlaysA > 0 ? ((totalCTAA / totalPlaysA) * 100).toFixed(2) : '0.00';

                  // Campanha B
                  let ctaGeralB = data?.ANALYTICS_B.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.ATIVE === true
                    ? (data?.ANALYTICS_B.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.BUTTON_CLICK_TEST_AB ?? 0)
                    : 0;
                  let ctaInternoB = Array.isArray(data?.ANALYTICS_B.CAMPAIGN.CAMPAIGN_VIDEOS)
                    ? data.ANALYTICS_B.CAMPAIGN.CAMPAIGN_VIDEOS.reduce((sum, video) => {
                        if (video.CTA === true) {
                          return sum + (video.CTA_CLICK_TEST_AB ?? 0);
                        }
                        return sum;
                      }, 0)
                    : 0;
                  let totalCTAB = ctaGeralB + ctaInternoB;
                  let totalPlaysB = data?.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS ?? 0;
                  let pctB = totalPlaysB > 0 ? ((totalCTAB / totalPlaysB) * 100).toFixed(2) : '0.00';

                  return (
                    <>
                      <p>
                        A: {data ? totalCTAA : '—'} Clicks em CTA 
                        <span style={{ marginLeft: 8, color: '#aaa', fontSize: 12 }}>({pctA}%)</span>
                      </p>
                      <p>
                        B: {data ? totalCTAB : '—'} Clicks em CTA 
                        <span style={{ marginLeft: 8, color: '#aaa', fontSize: 12 }}>({pctB}%)</span>
                      </p>
                    </>
                  );
                })()}
              </div>
            </div>

            <div
              className={`${styles.info_item} ${styles.info_item_time} ${section === 'time' ? styles.active : ''}`}
              onClick={() => setSection('time')}
            >
              <FaUserClock className={styles.icon} />
              <div className={styles.info_item_dados}>
                <p>A: {data ? (data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS === 0 ? '—' : (data.ANALYTICS_A.MODEL_TIME.TOTAL_TIMESCREEN / data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS).toFixed(1) + 's') : '—'}</p>
                <p>B: {data ? (data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS === 0 ? '—' : (data.ANALYTICS_B.MODEL_TIME.TOTAL_TIMESCREEN / data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS).toFixed(1) + 's') : '—'}</p>
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
          {loading && (
            <p style={{ color: 'white', padding: '32px', textAlign: 'center' }}>
              Carregando analytics do Teste A/B...
            </p>
          )}
          {!loading && !data && (
            <p style={{ color: 'white', padding: '32px', textAlign: 'center' }}>
              Nenhum dado encontrado para este teste A/B.
            </p>
          )}
          {!loading && data && section === 'plays' && <SectionPlayTesteAB data={data} />}
          {!loading && data && section === 'views' && <SectionViewsTesteAB data={data} />}
          {!loading && data && section === 'clicks' && (
            <SectionClicksTesteAB
              data={data}
              campaignA={testAB.CAMPAIGN_A}
              campaignB={testAB.CAMPAIGN_B}
              campaignIdA={testAB.CAMPAIGN_ID_A}
              campaignIdB={testAB.CAMPAIGN_ID_B}
            />
          )}
          {!loading && data && section === 'time' && <SectionTimeTesteAB data={data} />}
          {!loading && data && section === 'flow' && (
            <SectionFlowTesteAB
              data={data}
              testABIdA={testAB.CAMPAIGN_ID_A}
              testABIdB={testAB.CAMPAIGN_ID_B}
              nameA={nameA}
              nameB={nameB}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTesteAB;

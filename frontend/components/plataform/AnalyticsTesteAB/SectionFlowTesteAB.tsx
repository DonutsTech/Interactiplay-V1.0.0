'use client';

import { useEffect, useMemo, useState } from 'react';
import localStyles from './AnalyticsTesteAB.module.scss';
import { ITestABAnalyticsSocketData, IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { ICampaign } from '@/@types/campaign';
import { ErrorMessage } from '@/@types/error';
import { getCampaignById } from '@/service/campaign/capaignServices';
import { SectionFlow } from '../Analytics/SectionFlow';
import { useError } from '@/context/ErrorContext';

interface ISectionFlowTesteABProps {
  testABIdA: string | null;
  testABIdB: string | null;
  nameA: string;
  nameB: string;
  data: ITestABAnalyticsSocketData;
}

const isErrorMessage = (value: unknown): value is ErrorMessage => {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'STATUS' in value &&
      'MESSAGE' in value
  );
};

const SectionFlowTesteAB = ({
  testABIdA,
  testABIdB,
  nameA,
  nameB,
  data,
}: ISectionFlowTesteABProps) => {
  const { showError } = useError();
  const [campaignA, setCampaignA] = useState<ICampaign | null>(null);
  const [campaignB, setCampaignB] = useState<ICampaign | null>(null);
  const [activeCampaign, setActiveCampaign] = useState<'A' | 'B'>('A');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadCampaigns = async () => {
      if (!testABIdA || !testABIdB) {
        if (isMounted) {
          setCampaignA(null);
          setCampaignB(null);
          setLoading(false);
        }
        return;
      }

      setLoading(true);

      const [resultA, resultB] = await Promise.all([
        getCampaignById(testABIdA),
        getCampaignById(testABIdB),
      ]);

      if (!isMounted) {
        return;
      }

      if (isErrorMessage(resultA)) {
        showError(resultA);
        setCampaignA(null);
      } else {
        setCampaignA(resultA);
      }

      if (isErrorMessage(resultB)) {
        showError(resultB);
        setCampaignB(null);
      } else {
        setCampaignB(resultB);
      }

      setLoading(false);
    };

    void loadCampaigns();

    return () => {
      isMounted = false;
    };
  }, [showError, testABIdA, testABIdB]);

  const selectedCampaign = useMemo<ICampaign | null>(() => {
    return activeCampaign === 'A' ? campaignA : campaignB;
  }, [activeCampaign, campaignA, campaignB]);

  const selectedData = useMemo<IAnalyticsSocketData>(() => {
    return activeCampaign === 'A' ? data.ANALYTICS_A : data.ANALYTICS_B;
  }, [activeCampaign, data]);

  const selectedFlowData = useMemo<IAnalyticsSocketData>(() => {
    return {
      ...selectedData,
      CAMPAIGN: {
        ...selectedData.CAMPAIGN,
        CAMPAIGN_VIDEOS: selectedData.CAMPAIGN.CAMPAIGN_VIDEOS.map((video) => ({
          ...video,
          CTA_CLICK_CAMPAING: video.CTA === true ? (video.CTA_CLICK_TEST_AB ?? 0) : 0,
          BONDS: (video.BONDS ?? []).map((bondItem) => ({
            ...bondItem,
            BOND: {
              ...bondItem.BOND,
              CONTINUITY_CAMPAING: bondItem.BOND.CONTINUITY_TEST_AB ?? 0,
              BUTTON_CLICK_CAMPAING:
                bondItem.BOND.BUTTON === true
                  ? (bondItem.BOND.BUTTON_CLICK_TEST_AB ?? 0)
                  : 0,
            },
          })),
        })),
      },
    };
  }, [selectedData]);

  return (
    <div className={localStyles.flowSection}>
      <div className={localStyles.flowToggle}>
        <button
          className={`${localStyles.flowToggleButton} ${activeCampaign === 'A' ? localStyles.flowToggleButtonActiveA : ''}`}
          onClick={() => setActiveCampaign('A')}
          type="button"
        >
          <span className={localStyles.slotA}>A</span>
          {nameA}
        </button>
        <button
          className={`${localStyles.flowToggleButton} ${activeCampaign === 'B' ? localStyles.flowToggleButtonActiveB : ''}`}
          onClick={() => setActiveCampaign('B')}
          type="button"
        >
          <span className={localStyles.slotB}>B</span>
          {nameB}
        </button>
      </div>

      {loading && (
        <p className={localStyles.flowMessage}>Carregando estrutura do flow...</p>
      )}

      {!loading && !selectedCampaign && (
        <p className={localStyles.flowMessage}>Nao foi possivel carregar a campanha selecionada.</p>
      )}

      {!loading && selectedCampaign && (
        <div className={localStyles.flowWrapper}>
          <SectionFlow data={selectedFlowData} campaign={selectedCampaign} />
        </div>
      )}
    </div>
  );
};

export default SectionFlowTesteAB;
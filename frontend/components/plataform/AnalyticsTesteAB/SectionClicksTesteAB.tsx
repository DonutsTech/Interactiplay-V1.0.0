'use client';

import { useEffect, useState } from 'react';
import styles from '../Analytics/Analytics.module.scss';
import localStyles from './AnalyticsTesteAB.module.scss';
import { ICampaign } from '@/@types/campaign';
import { ErrorMessage } from '@/@types/error';
import { getCampaignById } from '@/service/campaign/capaignServices';
import { normalizeSpaces } from '@/utils/stringUtils';
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  IAnalyticsSocketData,
  ITestABAnalyticsSocketData,
} from '@/@types/AnalyticSocketData';

interface ISectionClicksTesteABProps {
  data: ITestABAnalyticsSocketData;
  campaignA?: ICampaign | null;
  campaignB?: ICampaign | null;
  campaignIdA?: string | null;
  campaignIdB?: string | null;
}

const isErrorMessage = (value: unknown): value is ErrorMessage => {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'STATUS' in value &&
      'MESSAGE' in value
  );
};

const hasVideoNames = (campaign?: ICampaign | null): boolean => {
  return Boolean(campaign?.CAMPAIGN_VIDEOS?.some((video) => video.VIDEO?.NAME));
};

const hasVideoCtaFlags = (campaign?: ICampaign | null): boolean => {
  return Boolean(
    campaign?.CAMPAIGN_VIDEOS?.length &&
      campaign.CAMPAIGN_VIDEOS.every((video) => typeof video.CTA === 'boolean')
  );
};

const cleanVideoName = (rawName: string | undefined, fallback: string) => {
  const replaced = (rawName ?? '').replace(/[._]/g, ' ');
  return normalizeSpaces(replaced) || fallback;
};

const buildShortVideoLabel = (rawName: string | undefined, fallback: string) => {
  const clean = cleanVideoName(rawName, fallback);
  return clean.slice(0, 12);
};

const isExternalLinkActive = (data: IAnalyticsSocketData) => {
  return data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.ATIVE === true;
};

const isVideoCtaActiveFromData = (data: IAnalyticsSocketData, index: number) => {
  return data.CAMPAIGN.CAMPAIGN_VIDEOS[index]?.CTA === true;
};

const summarizeClicks = (data: IAnalyticsSocketData) => {
  const totalPlays = data.ANALYTICS.TOTAL_PLAYS;
  const ctaGeral = isExternalLinkActive(data)
    ? (data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.BUTTON_CLICK_TEST_AB ?? 0)
    : 0;
  const ctaInternoTotal = data.CAMPAIGN.CAMPAIGN_VIDEOS.reduce(
    (sum, video) => sum + (video.CTA === true ? (video.CTA_CLICK_TEST_AB ?? 0) : 0),
    0
  );
  const totalCTA = ctaGeral + ctaInternoTotal;

  const toPct = (value: number) =>
    totalPlays > 0 ? Number(((value / totalPlays) * 100).toFixed(1)) : 0;

  return {
    totalPlays,
    ctaGeral,
    ctaInternoTotal,
    totalCTA,
    toPct,
    byVideo: data.CAMPAIGN.CAMPAIGN_VIDEOS.map((video, index) => ({
      name: `Video ${index + 1}`,
      fullName: cleanVideoName(video.VIDEO?.NAME, `Video ${index + 1}`),
      clicks: video.CTA === true ? (video.CTA_CLICK_TEST_AB ?? 0) : 0,
      pct: toPct(video.CTA === true ? (video.CTA_CLICK_TEST_AB ?? 0) : 0),
      ctaActive: video.CTA === true,
    })),
  };
};

const SectionClicksTesteAB = ({
  data,
  campaignA,
  campaignB,
  campaignIdA,
  campaignIdB,
}: ISectionClicksTesteABProps) => {
  const statsA = summarizeClicks(data.ANALYTICS_A);
  const statsB = summarizeClicks(data.ANALYTICS_B);
  const [resolvedCampaignA, setResolvedCampaignA] = useState<ICampaign | null>(campaignA ?? null);
  const [resolvedCampaignB, setResolvedCampaignB] = useState<ICampaign | null>(campaignB ?? null);

  useEffect(() => {
    let mounted = true;

    const loadCampaignNames = async () => {
      const needsA =
        ((!hasVideoNames(campaignA) || !hasVideoCtaFlags(campaignA)) &&
          Boolean(campaignIdA));
      const needsB =
        ((!hasVideoNames(campaignB) || !hasVideoCtaFlags(campaignB)) &&
          Boolean(campaignIdB));

      if (!needsA && !needsB) {
        setResolvedCampaignA(campaignA ?? null);
        setResolvedCampaignB(campaignB ?? null);
        return;
      }

      const [resultA, resultB] = await Promise.all([
        needsA && campaignIdA ? getCampaignById(campaignIdA) : Promise.resolve(campaignA ?? null),
        needsB && campaignIdB ? getCampaignById(campaignIdB) : Promise.resolve(campaignB ?? null),
      ]);

      if (!mounted) return;

      if (!isErrorMessage(resultA)) {
        setResolvedCampaignA((resultA as ICampaign) ?? campaignA ?? null);
      }

      if (!isErrorMessage(resultB)) {
        setResolvedCampaignB((resultB as ICampaign) ?? campaignB ?? null);
      }
    };

    void loadCampaignNames();

    return () => {
      mounted = false;
    };
  }, [campaignA, campaignB, campaignIdA, campaignIdB]);

  const getVideoLabel = (
    campaign: ICampaign | null | undefined,
    dataAnalytics: IAnalyticsSocketData,
    slot: 'A' | 'B',
    index: number
  ) => {
    const rawName =
      dataAnalytics.CAMPAIGN.CAMPAIGN_VIDEOS[index]?.VIDEO?.NAME ??
      campaign?.CAMPAIGN_VIDEOS?.[index]?.VIDEO?.NAME;
    const fallback = `Video ${index + 1}`;
    const shortName = buildShortVideoLabel(rawName, fallback);
    const fullName = cleanVideoName(rawName, fallback);
    return {
      short: `${slot}: ${shortName}`,
      full: `${slot}: ${fullName}`,
    };
  };

  const isVideoCtaActive = (
    campaign: ICampaign | null | undefined,
    dataAnalytics: IAnalyticsSocketData,
    index: number
  ) => {
    return (
      isVideoCtaActiveFromData(dataAnalytics, index) ||
      campaign?.CAMPAIGN_VIDEOS?.[index]?.CTA === true
    );
  };

  const chartData = [
    ...(isExternalLinkActive(data.ANALYTICS_A)
      ? [
          {
            name: 'A: CTA Geral',
            fullName: 'A: CTA Geral',
            slot: 'A' as const,
            clicksA: statsA.ctaGeral,
            clicksB: 0,
            pctA: statsA.toPct(statsA.ctaGeral),
            pctB: 0,
          },
        ]
      : []),
    ...(isExternalLinkActive(data.ANALYTICS_B)
      ? [
          {
            name: 'B: CTA Geral',
            fullName: 'B: CTA Geral',
            slot: 'B' as const,
            clicksA: 0,
            clicksB: statsB.ctaGeral,
            pctA: 0,
            pctB: statsB.toPct(statsB.ctaGeral),
          },
        ]
      : []),
    ...Array.from(
      { length: Math.max(statsA.byVideo.length, statsB.byVideo.length) },
      (_, index) => {
        const entries: Array<{
          name: string;
          fullName: string;
          slot: 'A' | 'B';
          clicksA: number;
          clicksB: number;
          pctA: number;
          pctB: number;
        }> = [];

        if (isVideoCtaActive(resolvedCampaignA, data.ANALYTICS_A, index)) {
          const labelA = getVideoLabel(resolvedCampaignA, data.ANALYTICS_A, 'A', index);
          entries.push({
            name: labelA.short,
            fullName: labelA.full,
            slot: 'A',
            clicksA: statsA.byVideo[index]?.clicks ?? 0,
            clicksB: 0,
            pctA: statsA.byVideo[index]?.pct ?? 0,
            pctB: 0,
          });
        }

        if (isVideoCtaActive(resolvedCampaignB, data.ANALYTICS_B, index)) {
          const labelB = getVideoLabel(resolvedCampaignB, data.ANALYTICS_B, 'B', index);
          entries.push({
            name: labelB.short,
            fullName: labelB.full,
            slot: 'B',
            clicksA: 0,
            clicksB: statsB.byVideo[index]?.clicks ?? 0,
            pctA: 0,
            pctB: statsB.byVideo[index]?.pct ?? 0,
          });
        }

        return entries;
      }
    ).flat(),
  ];

  const maxPlays = Math.max(statsA.totalPlays, statsB.totalPlays, 1);

  return (
    <div className={localStyles.viewsCampaignCard}>
      <p className={localStyles.viewsCampaignTitle}>Clicks</p>

      <div className={styles.sectionClicks}>
        <div className={styles.clickCards}>
          <div className={styles.clickCard}>
            <span className={styles.clickCardLabel}>Total de Plays</span>
            <strong className={styles.clickCardValue}>
              A: {statsA.totalPlays} | B: {statsB.totalPlays}
            </strong>
            <em className={styles.clickCardHint}>Base de conversao A/B</em>
          </div>

          <div className={styles.clickCard}>
            <span className={styles.clickCardLabel}>CTA Geral</span>
            <strong className={styles.clickCardValue}>
              A: {statsA.ctaGeral} | B: {statsB.ctaGeral}
            </strong>
            <em className={styles.clickCardHint}>
              A: {statsA.toPct(statsA.ctaGeral)}% | B: {statsB.toPct(statsB.ctaGeral)}%
            </em>
          </div>

          <div className={styles.clickCard}>
            <span className={styles.clickCardLabel}>CTA Interno (videos)</span>
            <strong className={styles.clickCardValue}>
              A: {statsA.ctaInternoTotal} | B: {statsB.ctaInternoTotal}
            </strong>
            <em className={styles.clickCardHint}>
              A: {statsA.toPct(statsA.ctaInternoTotal)}% | B: {statsB.toPct(statsB.ctaInternoTotal)}%
            </em>
          </div>

          <div className={styles.clickCard}>
            <span className={styles.clickCardLabel}>Total CTA</span>
            <strong className={styles.clickCardValue}>
              A: {statsA.totalCTA} | B: {statsB.totalCTA}
            </strong>
            <em className={styles.clickCardHint}>
              A: {statsA.toPct(statsA.totalCTA)}% | B: {statsB.toPct(statsB.totalCTA)}%
            </em>
          </div>
        </div>

        <div className={styles.clickChart}>
          <p className={styles.clickChartTitle}>Relacao: cliques por tipo x base de plays (A x B)</p>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              data={chartData}
              margin={{ top: 8, right: 24, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />

              <XAxis
                dataKey="name"
                stroke="rgba(255,255,255,0.3)"
                fontSize={11}
                tick={{ fill: 'rgba(242,242,242,0.6)' }}
                interval={0}
              />

              <YAxis
                yAxisId="left"
                stroke="rgba(255,255,255,0.3)"
                fontSize={11}
                allowDecimals={false}
                domain={[0, maxPlays]}
                tick={{ fill: 'rgba(242,242,242,0.6)' }}
              />

              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="rgba(255,255,255,0.15)"
                fontSize={11}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: 'rgba(242,242,242,0.45)' }}
              />

              <Tooltip
                content={({ payload }) => {
                  if (!payload || payload.length === 0) {
                    return null;
                  }

                  const barItemA = payload.find((p) => p.dataKey === 'clicksA');
                  const barItemB = payload.find((p) => p.dataKey === 'clicksB');
                  const lineItemA = payload.find((p) => p.dataKey === 'pctA');
                  const lineItemB = payload.find((p) => p.dataKey === 'pctB');
                  const point = payload[0].payload as { fullName: string; slot: 'A' | 'B' };
                  const isA = point.slot === 'A';

                  return (
                    <div
                      style={{
                        backgroundColor: '#0F073E',
                        border: '1px solid rgba(153,0,255,0.3)',
                        borderRadius: '10px',
                        padding: '8px 12px',
                        fontSize: '12px',
                        color: '#F2F2F2',
                        minWidth: '170px',
                      }}
                    >
                      <p style={{ fontWeight: 600, marginBottom: 4, color: '#F2F2F2' }}>
                        {point.fullName}
                      </p>
                      {isA ? (
                        <p style={{ color: 'rgba(242,242,242,0.55)' }}>
                          A: {barItemA?.value ?? 0} eventos | {lineItemA?.value ?? 0}% sobre {statsA.totalPlays} plays
                        </p>
                      ) : (
                        <p style={{ color: 'rgba(242,242,242,0.55)' }}>
                          B: {barItemB?.value ?? 0} eventos | {lineItemB?.value ?? 0}% sobre {statsB.totalPlays} plays
                        </p>
                      )}
                    </div>
                  );
                }}
              />

              <Bar yAxisId="left" dataKey="clicksA" name="Cliques A" barSize={24}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill="#30FFFB" />
                ))}
              </Bar>

              <Bar yAxisId="left" dataKey="clicksB" name="Cliques B" barSize={24}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill="#5B71B9" />
                ))}
              </Bar>

              <Line
                yAxisId="right"
                type="monotone"
                dataKey="pctA"
                name="Taxa A"
                stroke="#8FFFFF"
                strokeWidth={2.5}
                dot={{ fill: '#8FFFFF', stroke: '#0F073E', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 7, fill: '#8FFFFF', stroke: '#F2F2F2', strokeWidth: 2 }}
              />

              <Line
                yAxisId="right"
                type="monotone"
                dataKey="pctB"
                name="Taxa B"
                stroke="#AAB8FF"
                strokeWidth={2.5}
                dot={{ fill: '#AAB8FF', stroke: '#0F073E', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 7, fill: '#AAB8FF', stroke: '#F2F2F2', strokeWidth: 2 }}
              />

              <Legend
                wrapperStyle={{
                  fontSize: '11px',
                  color: 'rgba(242,242,242,0.5)',
                  paddingTop: '8px',
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionClicksTesteAB;

'use client';

import styles from './Analytics.module.scss';
import { IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { ICampaign } from '@/@types/campaign';
import { normalizeSpaces } from '@/utils/stringUtils';
import {
  ComposedChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';

interface ISectionClicksProps {
  data: IAnalyticsSocketData;
  campaign: ICampaign;
}

const SectionClicks = ({ data, campaign }: ISectionClicksProps) => {
  const totalPlays = data.ANALYTICS.TOTAL_PLAYS;
  const ctaGeral = data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.BUTTON_CLICK_CAMPAING ?? 0;

  const ctaInternoTotal = data.CAMPAIGN.CAMPAIGN_VIDEOS.reduce(
    (sum, video) => sum + (video.CTA_CLICK_CAMPAING ?? 0),
    0
  );

  const totalCTA = ctaGeral + ctaInternoTotal;

  const toPct = (value: number) =>
    totalPlays > 0 ? Number(((value / totalPlays) * 100).toFixed(1)) : 0;

  const cleanVideoName = (rawName: string | undefined, fallback: string) => {
    const replaced = (rawName ?? '').replace(/[._]/g, ' ');
    return normalizeSpaces(replaced) || fallback;
  };

  const buildVideoLabel = (rawName: string | undefined, index: number) => {
    const clean = cleanVideoName(rawName, `Video${index + 1}`);
    const firstName = clean.split(/\s+/)[0];
    return firstName.length > 12 ? `${firstName.slice(0, 12)}...` : firstName;
  };

  const internalByVideo = data.CAMPAIGN.CAMPAIGN_VIDEOS.map((video, index) => ({
    name: buildVideoLabel(campaign.CAMPAIGN_VIDEOS[index]?.VIDEO?.NAME, index),
    fullName: cleanVideoName(campaign.CAMPAIGN_VIDEOS[index]?.VIDEO?.NAME, `Video ${index + 1}`),
    clicks: video.CTA_CLICK_CAMPAING ?? 0,
    pct: toPct(video.CTA_CLICK_CAMPAING ?? 0),
    fill: '#FFCE08',
  }));

  const chartData = [
    {
      name: 'CTA Geral',
      fullName: 'CTA Geral',
      clicks: ctaGeral,
      pct: toPct(ctaGeral),
      fill: '#0CB189',
    },
    ...internalByVideo,
  ];

  return (
    <div className={styles.sectionClicks}>
      <div className={styles.clickCards}>
        <div className={styles.clickCard}>
          <span className={styles.clickCardLabel}>Total de Plays</span>
          <strong className={styles.clickCardValue}>{totalPlays}</strong>
          <em className={styles.clickCardHint}>Base de conversao</em>
        </div>

        <div className={styles.clickCard}>
          <span className={styles.clickCardLabel}>CTA Geral</span>
          <strong className={styles.clickCardValue}>{ctaGeral}</strong>
          <em className={styles.clickCardHint}>{toPct(ctaGeral)}% dos plays</em>
        </div>

        <div className={styles.clickCard}>
          <span className={styles.clickCardLabel}>CTA Interno (videos)</span>
          <strong className={styles.clickCardValue}>{ctaInternoTotal}</strong>
          <em className={styles.clickCardHint}>{toPct(ctaInternoTotal)}% dos plays</em>
        </div>

        <div className={styles.clickCard}>
          <span className={styles.clickCardLabel}>Total CTA</span>
          <strong className={styles.clickCardValue}>{totalCTA}</strong>
          <em className={styles.clickCardHint}>{toPct(totalCTA)}% dos plays</em>
        </div>
      </div>

      <div className={styles.clickChart}>
        <p className={styles.clickChartTitle}>Relacao: cliques por tipo x base de plays</p>
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
            />

            <YAxis
              yAxisId="left"
              stroke="rgba(255,255,255,0.3)"
              fontSize={11}
              allowDecimals={false}
              domain={[0, totalPlays]}
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
                if (!payload || payload.length === 0) return null;
                const barItem = payload.find((p) => p.dataKey === 'clicks');
                const lineItem = payload.find((p) => p.dataKey === 'pct');
                const point = payload[0].payload;
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
                    <p style={{ fontWeight: 600, marginBottom: 4, color: point.fill }}>
                      {point.fullName}
                    </p>
                    <p style={{ marginBottom: 2 }}>
                      <strong>{barItem?.value}</strong> eventos
                    </p>
                    <p style={{ color: 'rgba(242,242,242,0.55)' }}>
                      {lineItem?.value}% sobre {totalPlays} plays
                    </p>
                  </div>
                );
              }}
            />

            <Bar yAxisId="left" dataKey="clicks" name="Cliques" barSize={40}>
              {chartData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="pct"
              name="Taxa sobre plays"
              stroke="#8FFFFF"
              strokeWidth={2.5}
              dot={{ fill: '#8FFFFF', stroke: '#0F073E', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 7, fill: '#8FFFFF', stroke: '#F2F2F2', strokeWidth: 2 }}
            />

            <Legend
              wrapperStyle={{
                fontSize: '11px',
                color: 'rgba(242,242,242,0.5)',
                paddingTop: '8px',
              }}
              formatter={(value) =>
                value === 'Cliques' ? 'Volume absoluto' : 'Percentual sobre plays'
              }
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectionClicks;

'use client';

import styles from '../Analytics/Analytics.module.scss';
import localStyles from './AnalyticsTesteAB.module.scss';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type DotItemDotProps,
} from 'recharts';
import {
  IAnalyticsSocketData,
  ITestABAnalyticsSocketData,
} from '@/@types/AnalyticSocketData';
import { formatDuration } from '@/utils/videoUtils';

interface ISectionTimeTesteABProps {
  data: ITestABAnalyticsSocketData;
}

const getRetentionBaseInfo = (
  time: Record<string, number>,
  totalPlays: number
) => {
  const totalExitEvents = Object.values(time).reduce((sum, count) => sum + count, 0);
  const retentionBase = Math.max(totalPlays, totalExitEvents);

  return {
    totalExitEvents,
    retentionBase,
    isAdjusted: totalExitEvents > totalPlays,
  };
};

const buildRetentionCurve = (
  time: Record<string, number>,
  totalPlays: number
) => {
  const exits = Object.entries(time)
    .map(([sec, count]) => ({ sec: Number(sec), count }))
    .sort((a, b) => a.sec - b.sec);

  const { retentionBase } = getRetentionBaseInfo(time, totalPlays);

  const points: { segundo: number; retencao: number }[] = [
    { segundo: 0, retencao: 100 },
  ];

  let remaining = retentionBase;

  for (const { sec, count } of exits) {
    remaining = Math.max(0, remaining - count);
    const pctRaw = retentionBase > 0 ? (remaining / retentionBase) * 100 : 0;
    const pct = remaining > 0 ? Math.max(pctRaw, 0.1) : 0;
    points.push({ segundo: sec, retencao: parseFloat(pct.toFixed(1)) });
  }

  return points;
};

const getBiggestDrop = (retentionData: Array<{ segundo: number; retencao: number }>) => {
  return retentionData.slice(1).reduce(
    (best, point, index) => {
      const previous = retentionData[index];
      const drop = previous.retencao - point.retencao;

      if (drop > best.drop) {
        return { segundo: point.segundo, drop };
      }

      return best;
    },
    { segundo: 0, drop: 0 }
  );
};

const SectionTimeTesteAB = ({ data }: ISectionTimeTesteABProps) => {
  const baseInfoA = getRetentionBaseInfo(
    data.ANALYTICS_A.MODEL_TIME.TIME,
    data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS
  );
  const baseInfoB = getRetentionBaseInfo(
    data.ANALYTICS_B.MODEL_TIME.TIME,
    data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS
  );

  const retentionA = buildRetentionCurve(
    data.ANALYTICS_A.MODEL_TIME.TIME,
    data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS
  );
  const retentionB = buildRetentionCurve(
    data.ANALYTICS_B.MODEL_TIME.TIME,
    data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS
  );

  const dropPointA = getBiggestDrop(retentionA);
  const dropPointB = getBiggestDrop(retentionB);

  const avgTimeA =
    data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS > 0
      ? data.ANALYTICS_A.MODEL_TIME.TOTAL_TIMESCREEN /
        data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS
      : 0;

  const avgTimeB =
    data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS > 0
      ? data.ANALYTICS_B.MODEL_TIME.TOTAL_TIMESCREEN /
        data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS
      : 0;

  const retentionMap = new Map<
    number,
    { segundo: number; retencaoA?: number; retencaoB?: number }
  >();

  retentionA.forEach((point) => {
    retentionMap.set(point.segundo, {
      segundo: point.segundo,
      retencaoA: point.retencao,
    });
  });

  retentionB.forEach((point) => {
    const existing = retentionMap.get(point.segundo);
    if (existing) {
      existing.retencaoB = point.retencao;
      return;
    }
    retentionMap.set(point.segundo, {
      segundo: point.segundo,
      retencaoB: point.retencao,
    });
  });

  const sortedRaw = [...retentionMap.values()].sort(
    (a, b) => a.segundo - b.segundo
  );

  // Forward-fill: se um ponto existe numa curva mas não na outra,
  // usa o último valor conhecido em vez de deixar undefined (que aparece como "-")
  let lastA: number | undefined;
  let lastB: number | undefined;
  const chartData = sortedRaw.map((point) => {
    if (point.retencaoA !== undefined) lastA = point.retencaoA;
    if (point.retencaoB !== undefined) lastB = point.retencaoB;
    return {
      segundo: point.segundo,
      retencaoA: point.retencaoA !== undefined ? point.retencaoA : lastA,
      retencaoB: point.retencaoB !== undefined ? point.retencaoB : lastB,
    };
  });

  return (
    <div className={styles.sectionTime}>
      <div className={styles.retentionCards}>
        <div className={styles.retentionCard}>
          <span className={styles.retentionCardLabel}>
            Tempo médio por play
          </span>
          <strong
            className={styles.retentionCardValue}
            style={{ color: '#30FFFB' }}
          >
            A: {formatDuration(avgTimeA)}
          </strong>
          <strong
            className={styles.retentionCardValue}
            style={{ color: '#5B71B9' }}
          >
            B: {formatDuration(avgTimeB)}
          </strong>
        </div>
        <div className={styles.retentionCard}>
          <span className={styles.retentionCardLabel}>Tempo total em tela</span>
          <strong
            className={styles.retentionCardValue}
            style={{ color: '#30FFFB' }}
          >
            A: {formatDuration(data.ANALYTICS_A.MODEL_TIME.TOTAL_TIMESCREEN)}
          </strong>
          <strong
            className={styles.retentionCardValue}
            style={{ color: '#5B71B9' }}
          >
            B: {formatDuration(data.ANALYTICS_B.MODEL_TIME.TOTAL_TIMESCREEN)}
          </strong>
        </div>
        <div className={styles.retentionCard}>
          <span className={styles.retentionCardLabel}>Maior queda em</span>
          <strong
            className={styles.retentionCardValue}
            style={{ color: '#30FFFB' }}
          >
            A: {formatDuration(dropPointA.segundo)}
          </strong>
          <strong
            className={styles.retentionCardValue}
            style={{ color: '#5B71B9' }}
          >
            B: {formatDuration(dropPointB.segundo)}
          </strong>
        </div>
      </div>

      {(baseInfoA.isAdjusted || baseInfoB.isAdjusted) && (
        <p
          style={{
            marginTop: 8,
            marginBottom: 6,
            fontSize: 11,
            color: 'rgba(242,242,242,0.62)',
          }}
        >
          Base da retenção ajustada quando eventos de tempo superam plays: A base {baseInfoA.retentionBase} (plays {data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS}, eventos {baseInfoA.totalExitEvents}) | B base {baseInfoB.retentionBase} (plays {data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS}, eventos {baseInfoB.totalExitEvents}).
        </p>
      )}

      <div className={styles.retentionChart}>
        <p className={styles.retentionChartTitle}>
          Retenção de Audiência (A × B)
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={chartData}
            margin={{ top: 8, right: 24, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="retentionGradA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#30FFFB" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#30FFFB" stopOpacity={0.06} />
              </linearGradient>
              <linearGradient id="retentionGradB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5B71B9" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#5B71B9" stopOpacity={0.06} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
            />
            <XAxis
              dataKey="segundo"
              stroke="rgba(255,255,255,0.3)"
              fontSize={11}
              tickFormatter={(v) => formatDuration(v)}
            />
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              fontSize={11}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 100]}
            />
            <Tooltip
              content={({ payload, label }) => {
                if (!payload || payload.length === 0) {
                  return null;
                }

                const itemA = payload.find((p) => p.dataKey === 'retencaoA');
                const itemB = payload.find((p) => p.dataKey === 'retencaoB');

                return (
                  <div
                    style={{
                      backgroundColor: '#0F073E',
                      border: '1px solid rgba(153,0,255,0.3)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      fontSize: '12px',
                      color: '#F2F2F2',
                      minWidth: '150px',
                    }}
                  >
                    <p style={{ fontWeight: 600, marginBottom: 4 }}>
                      {formatDuration(Number(label))}
                    </p>
                    <p style={{ color: '#30FFFB' }}>
                      A: {itemA?.value ?? '-'}%
                    </p>
                    <p style={{ color: '#5B71B9' }}>
                      B: {itemB?.value ?? '-'}%
                    </p>
                  </div>
                );
              }}
            />
            <ReferenceLine
              x={dropPointA.segundo}
              stroke="#30FFFB"
              strokeDasharray="4 2"
              label={{
                value: 'Queda A',
                fill: '#30FFFB',
                fontSize: 10,
                position: 'top',
                offset: -10,
              }}
            />
            <ReferenceLine
              x={dropPointB.segundo}
              stroke="#5B71B9"
              strokeDasharray="4 2"
              label={{
                value: 'Queda B',
                fill: '#5B71B9',
                fontSize: 10,
                position: 'top',
                offset: 2,
              }}
            />
            <Area
              type="monotone"
              dataKey="retencaoA"
              name="Retenção A"
              stroke="#30FFFB"
              strokeWidth={2.5}
              fill="url(#retentionGradA)"
              connectNulls
              activeDot={{
                r: 7,
                fill: '#00FFF1',
                stroke: '#0F073E',
                strokeWidth: 2,
              }}
              dot={(props: DotItemDotProps) => {
                if (props.cx == null || props.cy == null) return null;

                return (
                  <circle
                    key={`dotA-${String(props.payload?.segundo ?? '')}`}
                    cx={props.cx}
                    cy={props.cy}
                    r={4}
                    fill="#0F073E"
                    stroke="#30FFFB"
                    strokeWidth={2}
                  />
                );
              }}
            />
            <Area
              type="monotone"
              dataKey="retencaoB"
              name="Retenção B"
              stroke="#5B71B9"
              strokeWidth={2.5}
              fill="url(#retentionGradB)"
              connectNulls
              activeDot={{
                r: 7,
                fill: '#5B71B9',
                stroke: '#0F073E',
                strokeWidth: 2,
              }}
              dot={(props: DotItemDotProps) => {
                if (props.cx == null || props.cy == null) return null;

                return (
                  <circle
                    key={`dotB-${String(props.payload?.segundo ?? '')}`}
                    cx={props.cx}
                    cy={props.cy}
                    r={4}
                    fill="#0F073E"
                    stroke="#5B71B9"
                    strokeWidth={2}
                  />
                );
              }}
            />
            <Legend
              wrapperStyle={{
                fontSize: '11px',
                color: 'rgba(242,242,242,0.6)',
                paddingTop: '8px',
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectionTimeTesteAB;

'use client';

import styles from './Analytics.module.scss';
import { IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { formatDuration } from '@/utils/videoUtils';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const SectionTime = (data: IAnalyticsSocketData) => {
  const buildRetentionCurve = (
    time: Record<string, number>,
    totalPlays: number
  ) => {
    const exits = Object.entries(time)
      .map(([sec, count]) => ({ sec: Number(sec), count }))
      .sort((a, b) => a.sec - b.sec);

    const totalExitEvents = exits.reduce((sum, item) => sum + item.count, 0);
    // TIME pode ter mais eventos que TOTAL_PLAYS; usa a maior base para manter a curva consistente.
    const retentionBase = Math.max(totalPlays, totalExitEvents);

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

  const retentionData = buildRetentionCurve(
    data.MODEL_TIME.TIME,
    data.ANALYTICS.TOTAL_PLAYS
  );

  const biggestDrop = retentionData.slice(1).reduce(
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

  const avgTime =
    data.ANALYTICS.TOTAL_PLAYS > 0
      ? data.MODEL_TIME.TOTAL_TIMESCREEN / data.ANALYTICS.TOTAL_PLAYS
      : 0;

  return (
    <div className={styles.sectionTime}>
      <div className={styles.retentionCards}>
        <div className={styles.retentionCard}>
          <span className={styles.retentionCardLabel}>
            Tempo médio por play
          </span>
          <strong className={styles.retentionCardValue}>
            {formatDuration(avgTime)}
          </strong>
        </div>
        <div className={styles.retentionCard}>
          <span className={styles.retentionCardLabel}>Tempo total em tela</span>
          <strong className={styles.retentionCardValue}>
            {formatDuration(data.MODEL_TIME.TOTAL_TIMESCREEN)}
          </strong>
        </div>
        <div className={styles.retentionCard}>
          <span className={styles.retentionCardLabel}>Maior queda em</span>
          <strong className={styles.retentionCardValue}>
            {formatDuration(biggestDrop.segundo)}
          </strong>
        </div>
      </div>

      <div className={styles.retentionChart}>
        <p className={styles.retentionChartTitle}>Retenção de Audiência</p>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart
            data={retentionData}
            margin={{ top: 8, right: 24, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9900FF" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#9900FF" stopOpacity={0} />
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
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const item = payload[0];
                return (
                  <div
                    style={{
                      backgroundColor: '#0F073E',
                      border: '1px solid rgba(153,0,255,0.3)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      fontSize: '12px',
                      color: '#F2F2F2',
                      minWidth: '140px',
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        marginBottom: 4,
                        color: '#9900FF',
                      }}
                    >
                      {formatDuration(item.payload.segundo)}
                    </p>
                    <p>{item.payload.retencao}% assistindo</p>
                  </div>
                );
              }}
            />
            <ReferenceLine
              x={biggestDrop.segundo}
              stroke="#C72C41"
              strokeDasharray="4 2"
              label={{
                value: 'Maior queda',
                fill: '#C72C41',
                fontSize: 10,
                position: 'top',
                offset: -10,
              }}
            />
            <Area
              type="monotone"
              dataKey="retencao"
              stroke="#9900FF"
              strokeWidth={2.5}
              fill="url(#retentionGrad)"
              activeDot={{
                r: 7,
                fill: '#00FFF1',
                stroke: '#0F073E',
                strokeWidth: 2,
              }}
              dot={(props) => (
                <circle
                  key={`dot-${props.payload.segundo}`}
                  cx={props.cx}
                  cy={props.cy}
                  r={5}
                  fill="#0F073E"
                  stroke="#9900FF"
                  strokeWidth={2}
                />
              )}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectionTime;
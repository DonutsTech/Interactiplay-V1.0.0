'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../Analytics/Analytics.module.scss';
import { ITestABAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { FaPercent } from 'react-icons/fa6';
import { TbClockPlay, TbMathMax } from 'react-icons/tb';
import {
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface ISectionPlayTesteABProps {
  data: ITestABAnalyticsSocketData;
}

interface IProgressionPoint {
  timestamp: number;
  datetime: string;
  label: string;
  plays: number;
}

const parseDateTime = (str: string): number => {
  const [datePart, timePart] = str.split(', ');
  const [day, month, year] = datePart.split('/');
  return new Date(`${year}-${month}-${day}T${timePart}:00`).getTime();
};

const buildDateProgression = (agrupDate?: Record<string, number>): IProgressionPoint[] => {
  if (!agrupDate || Object.keys(agrupDate).length === 0) {
    return [];
  }

  const browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const sorted = Object.entries(agrupDate)
    .map(([datetime, plays]) => ({ datetime, plays, timestamp: parseDateTime(datetime) }))
    .sort((a, b) => a.timestamp - b.timestamp);

  return sorted.map(({ timestamp, plays }) => ({
    timestamp,
    plays,
    datetime: new Date(timestamp).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: browserTz,
    }),
    label: new Date(timestamp).toLocaleString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: browserTz,
    }),
  }));
};

const SectionPlayTesteAB = ({ data }: ISectionPlayTesteABProps) => {
  const progressionA = useMemo(
    () => buildDateProgression(data.ANALYTICS_A.MODEL_TIME.AGRUP_DATE),
    [data.ANALYTICS_A.MODEL_TIME.AGRUP_DATE]
  );

  const progressionB = useMemo(
    () => buildDateProgression(data.ANALYTICS_B.MODEL_TIME.AGRUP_DATE),
    [data.ANALYTICS_B.MODEL_TIME.AGRUP_DATE]
  );

  const combined = useMemo(() => {
    const map = new Map<number, { timestamp: number; label: string; datetime: string; playsA: number; playsB: number }>();

    progressionA.forEach((entry) => {
      map.set(entry.timestamp, {
        timestamp: entry.timestamp,
        label: entry.label,
        datetime: entry.datetime,
        playsA: entry.plays,
        playsB: 0,
      });
    });

    progressionB.forEach((entry) => {
      const existing = map.get(entry.timestamp);
      if (existing) {
        existing.playsB = entry.plays;
      } else {
        map.set(entry.timestamp, {
          timestamp: entry.timestamp,
          label: entry.label,
          datetime: entry.datetime,
          playsA: 0,
          playsB: entry.plays,
        });
      }
    });

    const sorted = [...map.values()].sort((a, b) => a.timestamp - b.timestamp);

    let cumulativeA = 0;
    let cumulativeB = 0;

    return sorted.map((entry) => {
      cumulativeA += entry.playsA;
      cumulativeB += entry.playsB;

      return {
        ...entry,
        cumulativeA,
        cumulativeB,
      };
    });
  }, [progressionA, progressionB]);

  const peakA = progressionA.reduce<IProgressionPoint | null>(
    (acc, point) => (!acc || point.plays > acc.plays ? point : acc),
    null
  );

  const peakB = progressionB.reduce<IProgressionPoint | null>(
    (acc, point) => (!acc || point.plays > acc.plays ? point : acc),
    null
  );

  const dayBoundaries = useMemo(() => {
    const boundaries: { label: string; dayLabel: string }[] = [];
    const seenDays = new Set<string>();

    combined.forEach((entry) => {
      const datePart = entry.datetime.split(',')[0].trim();
      if (seenDays.has(datePart)) {
        return;
      }

      seenDays.add(datePart);
      if (seenDays.size === 1) {
        return;
      }

      const [day, month] = datePart.split('/');
      boundaries.push({
        label: entry.label,
        dayLabel: `${day}/${month}`,
      });
    });

    return boundaries;
  }, [combined]);

  const [chartWidth, setChartWidth] = useState(600);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setChartWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const axisLabelSize = Math.max(8, Math.min(11, Math.round(chartWidth * 0.013)));

  const totalPlaysA = data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS;
  const totalPlaysB = data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS;

  const [brushRange, setBrushRange] = useState({
    start: 0,
    end: Math.max(combined.length - 1, 0),
  });

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (combined.length <= 2) {
        return;
      }

      e.preventDefault();
      const total = combined.length;
      const { start, end } = brushRange;
      const size = end - start;
      const center = Math.round((start + end) / 2);
      const delta = e.deltaY < 0 ? -1 : 1;
      const newSize = Math.max(2, Math.min(total - 1, size + delta * Math.max(1, Math.round(size * 0.1))));
      const half = Math.round(newSize / 2);
      const newStart = Math.max(0, center - half);
      const newEnd = Math.min(total - 1, newStart + newSize);
      setBrushRange({ start: newStart, end: newEnd });
    },
    [brushRange, combined.length]
  );

  if (combined.length === 0) {
    return (
      <div className={styles.sectionPlay}>
        <p
          style={{
            color: 'rgba(242,242,242,0.4)',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          Sem dados de progressao de plays para A/B.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.sectionPlay}>
      <div className={styles.progressionHeader}>
        <div className={styles.progressionStat}>
          <span>Pico campanha A</span>
          <strong style={{ color: '#91fff9' }}>{peakA?.datetime ?? '-'}</strong>
          <em>{peakA?.plays ?? 0} plays</em>
        </div>

        <div className={styles.progressionStat}>
          <span>Pico campanha B</span>
          <strong style={{ color: '#9aa8ff' }}>{peakB?.datetime ?? '-'}</strong>
          <em>{peakB?.plays ?? 0} plays</em>
        </div>

        <div className={styles.progressionStat}>
          <span>Total de plays</span>
          <strong>
            A: {totalPlaysA} | B: {totalPlaysB}
          </strong>
          <em>{combined.length} pontos de comparacao</em>
        </div>
      </div>

      <div ref={chartRef} className={styles.progressionChart} onWheel={handleWheel} style={{ userSelect: 'none' }}>
        <p style={{ fontSize: 11, color: 'rgba(0,255,241,0.6)', textAlign: 'right', marginBottom: 4 }}>
          {combined[brushRange.start]?.datetime} - {combined[brushRange.end]?.datetime}
        </p>

        <ResponsiveContainer width="100%" height={340}>
          <ComposedChart data={combined} margin={{ top: 16, right: 24, left: 0, bottom: 8 }}>
            <defs>
              <linearGradient id="barGradA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00FFF1" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#00FFF1" stopOpacity={0.25} />
              </linearGradient>
              <linearGradient id="barGradB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5E7BFF" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#5E7BFF" stopOpacity={0.25} />
              </linearGradient>
            </defs>

            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255,255,255,0.05)" 
              vertical={false} />

            {dayBoundaries.map(({ label, dayLabel }) => (
              <ReferenceLine
                key={label}
                x={label}
                yAxisId="left"
                stroke="rgba(153,0,255,0.35)"
                strokeDasharray="4 3"
                strokeWidth={1.5}
                label={{
                  value: dayLabel,
                  position: 'insideTopRight',
                  fill: 'rgba(228,228,228,0.45)',
                  fontSize: 10,
                  fontWeight: 600,
                }}
              />
            ))}

            <XAxis dataKey="label" stroke="rgba(255,255,255,0.3)" fontSize={11} tick={{ fill: 'rgba(242,242,242,0.5)' }} />
            <YAxis
              yAxisId="left"
              stroke="rgba(255,255,255,0.3)"
              fontSize={11}
              tick={{ fill: 'rgba(242,242,242,0.5)' }}
              allowDecimals={false}
              label={{
                value: 'Plays',
                angle: -90,
                position: 'insideLeft',
                fill: 'rgba(242,242,242,0.3)',
                fontSize: axisLabelSize,
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="rgba(255,255,255,0.1)"
              fontSize={11}
              tick={{ fill: 'rgba(242,242,242,0.3)' }}
              allowDecimals={false}
              label={{
                value: 'Acumulado',
                angle: 90,
                position: 'insideRight',
                fill: 'rgba(242,242,242,0.3)',
                fontSize: axisLabelSize,
              }}
            />

            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.04)' }}
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;

                const barA = payload.find((p) => p.dataKey === 'playsA');
                const barB = payload.find((p) => p.dataKey === 'playsB');
                const lineA = payload.find((p) => p.dataKey === 'cumulativeA');
                const lineB = payload.find((p) => p.dataKey === 'cumulativeB');
                const item = payload[0]?.payload;

                const pctA =
                  totalPlaysA > 0 ? ((Number(barA?.value ?? 0) / totalPlaysA) * 100).toFixed(1) : '0';
                const pctB =
                  totalPlaysB > 0 ? ((Number(barB?.value ?? 0) / totalPlaysB) * 100).toFixed(1) : '0';

                return (
                  <div
                    style={{
                      backgroundColor: '#0F073E',
                      border: '1px solid rgba(0,255,241,0.3)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      fontSize: '12px',
                      color: '#F2F2F2',
                      minWidth: '220px',
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        marginBottom: 6,
                        color: '#00FFF1',
                        fontSize: '13px',
                      }}
                    >
                      {item?.datetime}
                    </p>
                    <p style={{ marginBottom: 2 }}>
                      <TbClockPlay /> A: <strong>{barA?.value ?? 0}</strong> plays ({pctA}%)
                    </p>
                    <p style={{ marginBottom: 2 }}>
                      <TbClockPlay /> B: <strong>{barB?.value ?? 0}</strong> plays ({pctB}%)
                    </p>
                    <p style={{ marginBottom: 2, color: 'rgba(242,242,242,0.6)' }}>
                      <FaPercent /> Delta A-B: {(Number(pctA) - Number(pctB)).toFixed(1)}pp
                    </p>
                    <p style={{ color: '#8CFFF9' }}>
                      <TbMathMax /> Acum A: <strong>{lineA?.value ?? 0}</strong>
                    </p>
                    <p style={{ color: '#AAB8FF' }}>
                      <TbMathMax /> Acum B: <strong>{lineB?.value ?? 0}</strong>
                    </p>
                  </div>
                );
              }}
            />

            {peakA && (
              <ReferenceLine
                yAxisId="left"
                y={peakA.plays}
                stroke="#00FFF1"
                strokeDasharray="4 2"
                label={{
                  value: `Pico A: ${peakA.plays}`,
                  fill: '#00FFF1',
                  fontSize: 10,
                  position: 'right',
                }}
              />
            )}

            {peakB && (
              <ReferenceLine
                yAxisId="left"
                y={peakB.plays}
                stroke="#5E7BFF"
                strokeDasharray="4 2"
                label={{
                  value: `Pico B: ${peakB.plays}`,
                  fill: '#5E7BFF',
                  fontSize: 10,
                  position: 'left',
                }}
              />
            )}

            <Legend
              wrapperStyle={{
                fontSize: '11px',
                color: 'rgba(242,242,242,0.5)',
                paddingTop: '8px',
              }}
              formatter={(value) => {
                if (value === 'playsA') return 'Plays por horario A';
                if (value === 'playsB') return 'Plays por horario B';
                if (value === 'cumulativeA') return 'Acumulado A';
                return 'Acumulado B';
              }}
            />

            <Bar yAxisId="left" dataKey="playsA" name="playsA" fill="url(#barGradA)" radius={[4, 4, 0, 0]} barSize={14} />
            <Bar yAxisId="left" dataKey="playsB" name="playsB" fill="url(#barGradB)" radius={[4, 4, 0, 0]} barSize={14} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cumulativeA"
              name="cumulativeA"
              stroke="#8CFFF9"
              strokeWidth={2.5}
              dot={{ fill: '#0F073E', stroke: '#8CFFF9', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 6, fill: '#8CFFF9', stroke: '#F2F2F2', strokeWidth: 2 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cumulativeB"
              name="cumulativeB"
              stroke="#AAB8FF"
              strokeWidth={2.5}
              dot={{ fill: '#0F073E', stroke: '#AAB8FF', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 6, fill: '#AAB8FF', stroke: '#F2F2F2', strokeWidth: 2 }}
            />

            <Brush
              dataKey="label"
              height={26}
              stroke="rgba(153,0,255,0.3)"
              fill="rgba(15,7,62,0.8)"
              travellerWidth={8}
              startIndex={brushRange.start}
              endIndex={brushRange.end}
              onChange={(range) => {
                if (
                  range &&
                  typeof range.startIndex === 'number' &&
                  typeof range.endIndex === 'number'
                ) {
                  setBrushRange({ start: range.startIndex, end: range.endIndex });
                }
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectionPlayTesteAB;

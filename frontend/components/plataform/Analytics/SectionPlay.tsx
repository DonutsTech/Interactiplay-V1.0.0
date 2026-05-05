'use client';

import { useState, useCallback, useMemo } from 'react';
import styles from './Analytics.module.scss';
import { IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { FaPercent } from 'react-icons/fa6';
import { TbClockPlay, TbMathMax } from 'react-icons/tb';
import {
  ComposedChart, 
  Bar, 
  Line,
  CartesianGrid, 
  XAxis, 
  YAxis,
  ReferenceLine, 
  Brush, 
  Legend,
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';


const SectionPlay = (data: IAnalyticsSocketData) => {
  const agrupDate = data.MODEL_TIME.AGRUP_DATE;

  if (!agrupDate || Object.keys(agrupDate).length === 0) {
    return (
      <div className={styles.sectionPlay}>
        <p
          style={{
            color: 'rgba(242,242,242,0.4)',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          Sem dados de progressão disponíveis.
        </p>
      </div>
    );
  }

  const buildDateProgression = (agrupDate: Record<string, number>) => {
    const browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const parseDateTime = (str: string): number => {
      const [datePart, timePart] = str.split(', ');
      const [day, month, year] = datePart.split('/');
      return new Date(`${year}-${month}-${day}T${timePart}:00`).getTime();
    };

    // detecta se os dados cobrem mais de 1 dia
    const allDays = new Set(
      Object.keys(agrupDate).map((str) => str.split(', ')[0])
    );
    const isMultiDay = allDays.size > 1;

    // detecta se cobre mais de 1 mês
    const allMonths = new Set([...allDays].map((d) => d.slice(3))); // "MM/YYYY"
    const isMultiMonth = allMonths.size > 1;

    const buildLabel = (timestamp: number): string => {
      if (isMultiMonth) {

        return new Date(timestamp).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: browserTz,
        });
      }
      if (isMultiDay) {

        return new Date(timestamp).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: browserTz,
        });
      }

      return new Date(timestamp).toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: browserTz,
      });
    };

    const buildDatetime = (timestamp: number): string =>
      new Date(timestamp).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: browserTz,
      });

    const sorted = Object.entries(agrupDate)
      .map(([datetime, plays]) => ({
        datetime,
        plays,
        timestamp: parseDateTime(datetime),
      }))
      .sort((a, b) => a.timestamp - b.timestamp);

    let cumulative = 0;
    return sorted.map(({ plays, timestamp }) => {
      cumulative += plays;
      return {
        label: buildLabel(timestamp),
        datetime: buildDatetime(timestamp),
        plays,
        cumulative,
      };
    });
  };

  const progressionData = useMemo(() => buildDateProgression(agrupDate), [agrupDate]);
  const peak = useMemo(
    () => progressionData.reduce((a, b) => (b.plays > a.plays ? b : a)),
    [progressionData]
  );
  const totalPlays = data.ANALYTICS.TOTAL_PLAYS;

  // Linhas verticais no primeiro ponto de cada novo dia (garante match com XAxis)
  const dayBoundaries = useMemo(() => {
    const boundaries: { label: string; dayLabel: string }[] = [];
    const seenDays = new Set<string>();

    for (const entry of progressionData) {
      const datePart = entry.datetime.split(',')[0].trim();
      if (!seenDays.has(datePart)) {
        seenDays.add(datePart);
        if (seenDays.size > 1) {
          const parts = datePart.split('/');
          const shortDay = parts.length >= 2 ? `${parts[0]}/${parts[1]}` : datePart;
          boundaries.push({ label: entry.label, dayLabel: shortDay });
        }
      }
    }

    return boundaries;
  }, [progressionData]);

  const [brushRange, setBrushRange] = useState({
    start: 0,
    end: progressionData.length - 1,
  });
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (progressionData.length <= 2) {
        return;
      }

      e.preventDefault();
      const total = progressionData.length;
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
    [brushRange, progressionData.length]
  );

  return (
    <div className={styles.sectionPlay}>
      <div className={styles.progressionHeader}>
        <div className={styles.progressionStat}>
          <span>Pico de audiência</span>
          <strong style={{ color: '#F2F2F2' }}>{peak.datetime}</strong>
          <em>{peak.plays} plays</em>
        </div>
        <div className={styles.progressionStat}>
          <span>Total de plays</span>
          <strong>{totalPlays}</strong>
        </div>
        <div className={styles.progressionStat}>
          <span>Sessões registradas</span>
          <strong>{progressionData.length}</strong>
        </div>
      </div>

      <div
        className={styles.progressionChart}
        onWheel={handleWheel}
        style={{ userSelect: 'none' }}
      >
        <p style={{ fontSize: 11, color: 'rgba(0,255,241,0.6)', textAlign: 'right', marginBottom: 4 }}>
          {progressionData[brushRange.start]?.datetime} &mdash; {progressionData[brushRange.end]?.datetime}
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart
            data={progressionData}
            margin={{ top: 16, right: 24, left: 0, bottom: 8 }}
          >
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00FFF1" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#00FFF1" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />

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

            <XAxis
              dataKey="label"
              stroke="rgba(255,255,255,0.3)"
              fontSize={11}
              tick={{ fill: 'rgba(242,242,242,0.5)' }}
            />
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
                fontSize: 10,
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
                fontSize: 10,
              }}
            />

            <Tooltip
              content={({ payload, label }) => {
                if (!payload || payload.length === 0) return null;
                const bar = payload.find((p) => p.dataKey === 'plays');
                const line = payload.find((p) => p.dataKey === 'cumulative');
                const item = payload[0].payload;
                const pct =
                  totalPlays > 0
                    ? ((Number(bar?.value ?? 0) / totalPlays) * 100).toFixed(1)
                    : '0';
                return (
                  <div
                    style={{
                      backgroundColor: '#0F073E',
                      border: '1px solid rgba(0,255,241,0.3)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      fontSize: '12px',
                      color: '#F2F2F2',
                      minWidth: '180px',
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
                      {item.datetime}
                    </p>
                    <p style={{ marginBottom: 2 }}>
                      <TbClockPlay /> <strong>{bar?.value}</strong> plays nesse horário
                    </p>
                    <p
                      style={{
                        marginBottom: 2,
                        color: 'rgba(242,242,242,0.6)',
                      }}
                    >
                      <FaPercent /> {pct}% do total
                    </p>
                    <p style={{ color: '#9900FF' }}>
                      <TbMathMax /> <strong>{line?.value}</strong> acumulados
                    </p>
                  </div>
                );
              }}
            />

            <ReferenceLine
              yAxisId="left"
              y={peak.plays}
              stroke="#FFCE08"
              strokeDasharray="4 2"
              label={{
                value: `Pico: ${peak.plays}`,
                fill: '#FFCE08',
                fontSize: 10,
                position: 'right',
              }}
            />

            <Bar
              yAxisId="left"
              dataKey="plays"
              fill="url(#barGrad)"
              radius={[4, 4, 0, 0]}
              barSize={28}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cumulative"
              stroke="#9900FF"
              strokeWidth={2.5}
              dot={{ fill: '#0F073E', stroke: '#9900FF', strokeWidth: 2, r: 4 }}
              activeDot={{
                r: 7,
                fill: '#9900FF',
                stroke: '#F2F2F2',
                strokeWidth: 2,
              }}
            />

            <Brush
              dataKey="label"
              height={24}
              stroke="rgba(153,0,255,0.3)"
              fill="rgba(15,7,62,0.8)"
              travellerWidth={8}
              startIndex={brushRange.start}
              endIndex={brushRange.end}
              onChange={(range) => {
                if (range?.startIndex != null && range?.endIndex != null) {
                  setBrushRange({ start: range.startIndex, end: range.endIndex });
                }
              }}
            />

            <Legend
              wrapperStyle={{
                fontSize: '11px',
                color: 'rgba(242,242,242,0.5)',
                paddingTop: '8px',
              }}
              formatter={(value) =>
                value === 'plays' ? 'Plays por horário' : 'Acumulado'
              }
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectionPlay;
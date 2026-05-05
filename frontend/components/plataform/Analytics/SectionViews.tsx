'use client';

import { useMemo } from 'react';
import styles from './Analytics.module.scss';
import { IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import {
  RadialBarChart, RadialBar,
  PieChart, Pie,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

const SectionViews = (data: IAnalyticsSocketData) => {
  const total = data.ANALYTICS.TOTAL_VIEWS;
  const totalPlays = data.ANALYTICS.TOTAL_PLAYS;

  const ctaGeral =
    data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.ATIVE === true
      ? (data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.BUTTON_CLICK_CAMPAING ?? 0)
      : 0;

  const radialData = useMemo(
    () => [
      {
        name: 'Clicks CTA',
        value: totalPlays > 0 ? (ctaGeral / totalPlays) * 100 : 0,
        absolute: ctaGeral,
        base: totalPlays,
        fill: '#5FFF9E',
        complemento: 'do total de plays',
      },
      {
        name: 'Plays Únicos',
        value:
          totalPlays > 0
            ? (data.ANALYTICS.TOTAL_PLAY_UNIQUE / totalPlays) * 100
            : 0,
        absolute: data.ANALYTICS.TOTAL_PLAY_UNIQUE,
        base: totalPlays,
        fill: '#FFE85F',
        complemento: 'do total de plays',
      },
      {
        name: 'Plays',
        value: total > 0 ? (data.ANALYTICS.TOTAL_PLAYS / total) * 100 : 0,
        absolute: data.ANALYTICS.TOTAL_PLAYS,
        base: total,
        fill: '#00FFF1',
        complemento: 'do total de views',
      },
      {
        name: 'Views',
        value: 100,
        absolute: total,
        base: total,
        fill: 'rgba(242,242,242,0.4)',
        complemento: 'do total de views',
      },
    ],
    [ctaGeral, data.ANALYTICS.TOTAL_PLAY_UNIQUE, data.ANALYTICS.TOTAL_PLAYS, total, totalPlays]
  );

  const deviceData = useMemo(() => {
    let desktop = 0;
    let mobile = 0;
    let others = 0;

    for (const item of data.MODEL_PLAYS) {
      if (item.DEVICE === 'desktop') desktop += item._sum.PLAY;
      else if (item.DEVICE === 'mobile') mobile += item._sum.PLAY;
      else others += item._sum.PLAY;
    }

    return [
      { name: 'Desktop', value: desktop, fill: '#00FFF1' },
      { name: 'Mobile', value: mobile, fill: '#9900FF' },
      { name: 'Outros', value: others, fill: '#FFCE08' },
    ].filter((d) => d.value > 0);
  }, [data.MODEL_PLAYS]);

  return (
    <div className={styles.sectionViews}>
      <div className={styles.funnelWrapper}>
        <div className={styles.funnelCol}>
          <p className={styles.title}>Eficiência:</p>
          <div className={styles.radialArea}>
            <ResponsiveContainer width="100%" height={260}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="25%"
                outerRadius="90%"
                barSize={20}
                data={radialData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  dataKey="value"
                  cornerRadius={8}
                  background={{ fill: 'rgba(255,255,255,0.04)' }}
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
                            color: item.payload.fill,
                          }}
                        >
                          {item.payload.name}
                        </p>
                        <p style={{ marginBottom: 2 }}>
                          {Number(item.value).toFixed(1)}% do total
                        </p>
                        <p style={{ color: 'rgba(242,242,242,0.5)' }}>
                          {item.payload.absolute} usuário
                          {item.payload.absolute !== 1 ? 's' : ''}
                        </p>
                      </div>
                    );
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.funnelLegend}>
            {[...radialData].reverse().map((item, index) => {
              const pct =
                item.base > 0
                  ? ((item.absolute / item.base) * 100).toFixed(2)
                  : '0.0';
              const stages = [
                '1. Alcance',
                '2. Engajamento',
                '3. Retenção',
                '4. Conversão',
              ];
              return (
                <div key={item.name} className={styles.funnelLegendItem}>
                  <span className={styles.funnelStage}>{stages[index]}</span>
                  <span
                    className={styles.funnelDot}
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className={styles.funnelName}>{item.name}</span>
                  <span className={styles.funnelAbsolute}>{item.absolute}</span>
                  <span className={styles.funnelPct}>
                    {pct}% {item.complemento}
                  </span>
                  {/* <span className={styles.funnelPct}>{item.complemento}</span> */}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.deviceCol}>
          <p className={styles.title}>:Dispositivos</p>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius="45%"
                outerRadius="75%"
                dataKey="value"
                paddingAngle={3}
                cornerRadius={4}
              >
                {deviceData.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                content={({ payload }) => {
                  if (!payload || payload.length === 0) return null;
                  const item = payload[0];
                  const pct =
                    totalPlays > 0
                      ? ((item.payload.value / totalPlays) * 100).toFixed(1)
                      : '0';
                  return (
                    <div
                      style={{
                        backgroundColor: '#0F073E',
                        border: '1px solid rgba(153,0,255,0.3)',
                        borderRadius: '10px',
                        padding: '8px 12px',
                        fontSize: '12px',
                        color: '#F2F2F2',
                        minWidth: '120px',
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          marginBottom: 4,
                          color: item.payload.fill,
                        }}
                      >
                        {item.payload.name}
                      </p>
                      <p>{item.payload.value} plays</p>
                      <p style={{ color: 'rgba(242,242,242,0.5)' }}>
                        {pct}% do total
                      </p>
                    </div>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className={styles.deviceLegend}>
            {deviceData.map((item) => {
              const pct =
                totalPlays > 0
                  ? ((item.value / totalPlays) * 100).toFixed(1)
                  : '0';
              return (
                <div key={item.name} className={styles.deviceLegendItem}>
                  <span
                    className={styles.deviceDot}
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className={styles.deviceName}>{item.name}</span>
                  <span className={styles.deviceValue}>{item.value}</span>
                  <span className={styles.devicePct}>{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionViews;
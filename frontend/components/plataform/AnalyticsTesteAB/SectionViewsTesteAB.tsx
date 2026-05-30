"use client";

import styles from "../Analytics/Analytics.module.scss";
import localStyles from "./AnalyticsTesteAB.module.scss";
import {
  Cell,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  IAnalyticsSocketData,
  ITestABAnalyticsSocketData,
} from "@/@types/AnalyticSocketData";

interface ISectionViewsTesteABProps {
  data: ITestABAnalyticsSocketData;
}

interface ICampaignEfficiencyPanelProps {
  badgeClassName: string;
  badgeLabel: string;
  data: IAnalyticsSocketData;
}

const CampaignEfficiencyPanel = ({
  badgeClassName,
  badgeLabel,
  data,
}: ICampaignEfficiencyPanelProps) => {
  const total = data.ANALYTICS.TOTAL_VIEWS;
  const totalPlays = data.ANALYTICS.TOTAL_PLAYS;
  // CTA Geral
  const ctaGeral =
    data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.ATIVE === true
      ? (data.CAMPAIGN.FEATURE?.EXTERNAL_LINK?.BUTTON_CLICK_TEST_AB ?? 0)
      : 0;

  // Cliques CTA interno dos vídeos
  const ctaInterno = Array.isArray(data.CAMPAIGN.CAMPAIGN_VIDEOS)
    ? data.CAMPAIGN.CAMPAIGN_VIDEOS.reduce(
        (acc, video) => acc + (video.CTA_CLICK_TEST_AB ?? 0),
        0
      )
    : 0;

  // Soma total de cliques
  const totalCta = ctaGeral + ctaInterno;

  const radialData = [
    {
      name: "Clicks CTA",
      value:
        totalPlays > 0
          ? Math.min((totalCta / totalPlays) * 100, 100)
          : 0,
      absolute: totalCta,
      base: totalPlays,
      fill: "#5FFF9E",
      complemento: "do total de plays",
      realPct: totalPlays > 0 ? ((totalCta / totalPlays) * 100) : 0,
      ctaGeral,
      ctaInterno,
    },
    {
      name: "Plays Unicos",
      value:
        totalPlays > 0
          ? (data.ANALYTICS.TOTAL_PLAY_UNIQUE / totalPlays) * 100
          : 0,
      absolute: data.ANALYTICS.TOTAL_PLAY_UNIQUE,
      base: totalPlays,
      fill: "#FFE85F",
      complemento: "do total de plays",
    },
    {
      name: "Plays",
      value: total > 0 ? (data.ANALYTICS.TOTAL_PLAYS / total) * 100 : 0,
      absolute: data.ANALYTICS.TOTAL_PLAYS,
      base: total,
      fill: "#00FFF1",
      complemento: "do total de views",
    },
    {
      name: "Views",
      value: 100,
      absolute: total,
      base: total,
      fill: "rgba(242,242,242,0.4)",
      complemento: "do total de views",
    },
  ];

  return (
    <div className={localStyles.viewsEfficiencyPanel}>
      <p className={localStyles.viewsInlineTitle}>
        <span className={badgeClassName}>{badgeLabel}</span>
        Eficiencia
      </p>

      <div className={styles.radialArea}>
        <ResponsiveContainer width="100%" height={220}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="25%"
            outerRadius="90%"
            barSize={16}
            data={radialData}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              dataKey="value"
              cornerRadius={8}
              background={{ fill: "rgba(255,255,255,0.04)" }}
            />
            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) {
                  return null;
                }
                const item = payload[0];
                // Tooltip especial para Clicks CTA
                if (item.payload.name === "Clicks CTA") {
                  return (
                    <div
                      style={{
                        backgroundColor: "#0F073E",
                        border: "1px solid rgba(153,0,255,0.3)",
                        borderRadius: "10px",
                        padding: "8px 12px",
                        fontSize: "12px",
                        color: "#F2F2F2",
                        minWidth: "170px",
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
                        {item.payload.realPct?.toFixed(1)}% do total
                      </p>
                      <p style={{ color: "rgba(242,242,242,0.5)", marginBottom: 2 }}>
                        {item.payload.absolute} usuario{item.payload.absolute !== 1 ? "s" : ""}
                      </p>
                      <p style={{ color: "#5FFF9E", marginBottom: 0 }}>
                        CTA Geral: {item.payload.ctaGeral}
                      </p>
                      <p style={{ color: "#FFE85F", marginBottom: 0 }}>
                        CTA Interno: {item.payload.ctaInterno}
                      </p>
                    </div>
                  );
                }
                // Demais
                return (
                  <div
                    style={{
                      backgroundColor: "#0F073E",
                      border: "1px solid rgba(153,0,255,0.3)",
                      borderRadius: "10px",
                      padding: "8px 12px",
                      fontSize: "12px",
                      color: "#F2F2F2",
                      minWidth: "140px",
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
                    <p style={{ color: "rgba(242,242,242,0.5)" }}>
                      {item.payload.absolute} usuario
                      {item.payload.absolute !== 1 ? "s" : ""}
                    </p>
                  </div>
                );
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className={localStyles.viewsLegend}>
        {[...radialData].reverse().map((item, index) => {
          const pct =
            item.base > 0
              ? ((item.absolute / item.base) * 100).toFixed(1)
              : "0.0";
          const stages = [
            "1. Alcance",
            "2. Engajamento",
            "3. Descoberta",
            "4. Conversao",
          ];

          return (
            <div key={item.name} className={localStyles.viewsLegendItem}>
              <span className={localStyles.viewsLegendStage}>
                {stages[index]}
              </span>
              <span
                className={localStyles.viewsLegendDot}
                style={{ backgroundColor: item.fill }}
              />
              <span className={localStyles.viewsLegendName}>{item.name}</span>
              <span className={localStyles.viewsLegendValue}>
                {item.absolute}
              </span>
              <span className={localStyles.viewsLegendPct}>
                {pct}% {item.complemento}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CombinedDonutPanel = ({ data }: { data: ITestABAnalyticsSocketData }) => {
  const viewsA = data.ANALYTICS_A.ANALYTICS.TOTAL_VIEWS;
  const viewsB = data.ANALYTICS_B.ANALYTICS.TOTAL_VIEWS;
  const playsA = data.ANALYTICS_A.ANALYTICS.TOTAL_PLAYS;
  const playsB = data.ANALYTICS_B.ANALYTICS.TOTAL_PLAYS;

  const totalViews = viewsA + viewsB;
  const totalPlays = playsA + playsB;

  const viewsData = [
    { name: "Views A", value: viewsA, fill: "#00FFF1" },
    { name: "Views B", value: viewsB, fill: "#5E7BFF" },
  ];

  const playsData = [
    { name: "Plays A", value: playsA, fill: "#8CFFF9" },
    { name: "Plays B", value: playsB, fill: "#AAB8FF" },
  ];

  return (
    <div className={localStyles.viewsDonutCenter}>
      <div
        className={styles.radialArea}
        style={{ width: "100%", minWidth: 0, position: "relative" }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            {/* Aro externo: Views */}
            <Pie
              data={viewsData}
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="68%"
              dataKey="value"
              strokeWidth={0}
            >
              {viewsData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            {/* Aro interno: Plays */}
            <Pie
              data={playsData}
              cx="50%"
              cy="50%"
              innerRadius="28%"
              outerRadius="46%"
              dataKey="value"
              strokeWidth={0}
            >
              {playsData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              wrapperStyle={{ zIndex: 10 }}
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const item = payload[0]?.payload;
                const isViewsData = item.name.includes("Views");
                const base = isViewsData ? totalViews : totalPlays;
                const pct =
                  base > 0 ? ((item.value / base) * 100).toFixed(1) : "0.0";
                return (
                  <div
                    style={{
                      backgroundColor: "#0F073E",
                      border: "1px solid rgba(153,0,255,0.3)",
                      borderRadius: 10,
                      padding: "8px 12px",
                      fontSize: 12,
                      color: "#F2F2F2",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        color: item.fill,
                        marginBottom: 4,
                      }}
                    >
                      {item.name}
                    </p>
                    <p style={{ marginBottom: 2 }}>{item.value} entradas</p>
                    <p style={{ color: "rgba(242,242,242,0.6)" }}>
                      {pct}% do total
                    </p>
                  </div>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Label central */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
            lineHeight: 1.5,
            zIndex: 0,
          }}
        >
          <p
            style={{
              fontSize: 9,
              color: "rgba(242,242,242,0.35)",
              marginBottom: 1,
            }}
          >
            total
          </p>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#F2F2F2",
              lineHeight: 1.2,
            }}
          >
            {totalViews} views
          </p>
          <p style={{ fontSize: 11, color: "rgba(242,242,242,0.5)" }}>
            {totalPlays} plays
          </p>
        </div>
      </div>
    </div>
  );
};

const SectionViewsTesteAB = ({ data }: ISectionViewsTesteABProps) => {
  return (
    <div className={localStyles.viewsCampaignCard}>
      <p className={localStyles.viewsCampaignTitle}>Views</p>

      <div className={localStyles.viewsRow}>
        <CampaignEfficiencyPanel
          badgeClassName={localStyles.slotA}
          badgeLabel="A"
          data={data.ANALYTICS_A}
        />
        <CombinedDonutPanel data={data} />
        <CampaignEfficiencyPanel
          badgeClassName={localStyles.slotB}
          badgeLabel="B"
          data={data.ANALYTICS_B}
        />
      </div>
    </div>
  );
};

export default SectionViewsTesteAB;

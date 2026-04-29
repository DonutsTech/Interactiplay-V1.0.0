
'use client';

// Importações essenciais do React
import { useCallback, useEffect, useState } from "react";
// Importação dos estilos do novo layout V100
import styles from "./Analytics.module.scss";
// Ícones modernos para cards e ações
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEye, faMousePointer, faClock, faPercent,
//   faRotateRight, faVideo, faHandPointer
// } from "@fortawesome/free-solid-svg-icons";
// Tipagem da campanha e serviço de analytics
import { ICampaign } from '@/@types/campaign';
import socket from "@/service/sockets/sockets";
// (Busca assíncrona removida, pois os dados já vêm por props)
// Bibliotecas de gráficos responsivos
// import {
//   AreaChart, Area, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from "recharts";


// Tipos para dados de analytics (expansível para novos elementos)
// interface IModelPlay {
//   ID: string;
//   DEVICE: string;
//   BROWSER: string;
//   OS: string;
//   COUNTRY: string;
//   CITY: string;
//   REGION: string;
//   PLAY: number;
//   VIEW: number;
//   PLAY_BLOCK: number;
//   CREATED_AT: string;
// }

// interface IAnalytics {
//   ID: string;
//   TOTAL_VIEWS: number;
//   TOTAL_PLAYS: number;
//   TOTAL_PLAY_BLOCK: number;
//   MODEL_PLAYS: IModelPlay[];
// }

// interface ICampaignVideo {
//   ID: string;
//   ORDER: number;
//   VIDEO: { ID: string; NAME: string; URL: string } | null;
//   CTA_CLICK_CAMPAING: number;
// }

// interface ICampaignFull extends ICampaign {
//   ANALYTICS: IAnalytics | null;
//   CAMPAIGN_VIDEOS: ICampaignVideo[];
// }

interface IAnalyticsProps {
  campaign: ICampaign;
  onClose: () => void;
}

// Paleta de cores para gráficos (pode ser expandida)
// const COLORS = ['#9900FF', '#5B71B9', '#00FFF1', '#FFCE08', '#0CB189'];

// Estilo customizado para tooltip dos gráficos
// const TOOLTIP_STYLE = {
//   contentStyle: { backgroundColor: '#0F073E', border: '1px solid rgba(153,0,255,0.3)', borderRadius: '10px', fontSize: '12px' },
//   labelStyle: { color: '#F2F2F2', fontWeight: 600 },
//   itemStyle: { color: '#9C9C9C' },
// };

/**
 * Componente principal de Analytics
 * - Busca dados de analytics da campanha
 * - Exibe cards de resumo, gráficos e prepara slots para novos elementos
 * - Totalmente adaptado ao layout V100
 * - Comentários detalhados para facilitar manutenção e expansão
 */


socket.on('connect', () => console.log('[IO] => new connnwct'));
const Analytics = ({ campaign, onClose }: IAnalyticsProps) => {
const [data, setData] = useState(null);

  useEffect(() => {
    if (campaign.ID) {
      const campaignId = campaign.ID;
      socket.emit('campaignAnalytics',  campaignId );
      socket.on('campaignAnalyticsData', (analyticsData) => {
        setData(analyticsData);
      });
      return () => {
        socket.off('campaignAnalyticsData');
      };
    }
  },[]);

  console.log('Analytics data:', data);

  // Dados de analytics da campanha recebidos diretamente via props
  // const analytics = campaign.ANALYTICS;

  

  return (
    <div className={styles.analytics}>
      {/* Overlay para fechar o modal */}
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        {/* Botão de fechar, sempre visível */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          title="Fechar analytics"
        >
          {/* <FontAwesomeIcon icon={faRotateRight} /> */}
        </button>

        {/* Header do Analytics, preparado para expansão */}
        <div className={styles.header}>
          <div className={styles.header_info}>
            <h2>Analytics da Campanha</h2>
            <span>ID: {campaign.ID}</span>
          </div>
        </div>

        {/* Cards de resumo - facilmente expansível */}
        {/* <div className={styles.cards}>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faEye} />
            <span>Visualizações</span>
            <strong>{analytics?.TOTAL_VIEWS ?? 0}</strong>
          </div>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faVideo} />
            <span>Plays</span>
            <strong>{analytics?.TOTAL_PLAYS ?? 0}</strong>
          </div>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faHandPointer} />
            <span>Plays Bloqueados</span>
            <strong>{analytics?.TOTAL_PLAY_BLOCK ?? 0}</strong>
          </div>
          {/* Exemplo de slot para novo elemento futuro */}
          {/* <div className={styles.card}> ...novo card... </div> */}
        {/* </div> */}

        {/* Gráfico de área - exemplo de visualização de plays ao longo do tempo */}
        {/* {analytics?.MODEL_PLAYS && analytics.MODEL_PLAYS.length > 0 && (
          <div className={styles.chartArea}>
            <h3>Plays por Data</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={analytics.MODEL_PLAYS}>
                <defs>
                  <linearGradient id="colorPlay" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9900FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9900FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="CREATED_AT" stroke="#9C9C9C" fontSize={12} />
                <YAxis stroke="#9C9C9C" fontSize={12} />
                <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                <Tooltip {...TOOLTIP_STYLE} />
                <Area type="monotone" dataKey="PLAY" stroke="#9900FF" fillOpacity={1} fill="url(#colorPlay)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )} */}

        {/* Gráfico de pizza - exemplo de distribuição por device */}
        {/* {analytics?.MODEL_PLAYS && analytics.MODEL_PLAYS.length > 0 && (
          <div className={styles.chartPie}>
            <h3>Dispositivos</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={analytics.MODEL_PLAYS}
                  dataKey="PLAY"
                  nameKey="DEVICE"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  label
                >
                  {analytics.MODEL_PLAYS.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip {...TOOLTIP_STYLE} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )} */}

        {/* Slot para novos gráficos ou elementos futuros */}
        {/* <div className={styles.chartCustom}> ...novo gráfico... </div> */}
      </div>
    </div>
  );
};

export default Analytics;

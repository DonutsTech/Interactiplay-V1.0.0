'use client';

import styles from './Analytics.module.scss';
import nodeStyles from '../Flow/CustomFlow/CustomNode.module.scss';
import { ICampaign } from '@/@types/campaign';
import { IAnalyticsSocketData } from '@/@types/AnalyticSocketData';
import { mapToFlow } from '@/utils/flowUteis';
import { formatVideoName } from '@/utils/videoUtils';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BaseEdge,
  Handle,
  Position,
  EdgeLabelRenderer,
  getBezierPath,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
} from '@xyflow/react';
import { useMemo } from 'react';
import '@xyflow/react/dist/style.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AnalyticsNodeData extends Record<string, unknown> {
  VIDEO: { ID: string; NAME: string; URL: string; ORIENTATION: string };
  ORDER: number | null;
  arrivals: number;
  arrivalPct: string;
  cta: boolean;
  ctaClicks: number;
  ctaEfficiency: string;
}

interface AnalyticsEdgeData extends Record<string, unknown> {
  btnClicks: number;
  continuity: number;
  total: number;
  isButton: boolean; // estrutural: BOND.BUTTON — independe de ter cliques
}

// ─── AnalyticsNode ────────────────────────────────────────────────────────────

const AnalyticsNode = ({ data, isConnectable }: NodeProps) => {
  const d = data as AnalyticsNodeData;
  const isPortrait = d.VIDEO.ORIENTATION === 'portrait';
  const name = formatVideoName(d.VIDEO.NAME);

  return (
    <div className={nodeStyles.videoNode}>
      {d.ORDER !== 1 && (
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
          style={{ background: '#353AA4', width: 12, height: 12, border: '2px solid #f2f2f2' }}
        />
      )}

      <p className={nodeStyles.videoNode_title}>
        {name.length > 12 ? name.slice(0, 12) + '...' : name}
      </p>

      <div
        className={[
          nodeStyles.videoNode_card,
          isPortrait ? nodeStyles.videoNode_card_portrait : nodeStyles.videoNode_card_landscape,
        ].join(' ')}
      >
        <video
          className={nodeStyles.videoNode_card_video}
          width={isPortrait ? 1080 : 1920}
          height={isPortrait ? 1920 : 1080}
          loop
          muted
          autoPlay
          playsInline
          draggable={false}
          src={d.VIDEO.URL}
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className={styles.analyticsOverlay}>
        {d.ORDER !== null && (
          <span className={styles.analyticsOverlay_order}>#{d.ORDER}</span>
        )}
        <div className={styles.analyticsOverlay_stat}>
          <strong>{d.arrivals}</strong>
          <span>{d.arrivalPct}% do total</span>
        </div>
        {d.cta && (
          <div className={styles.analyticsOverlay_cta}>
            <span>CTA: {d.ctaClicks} cliques</span>
            <strong>{d.ctaEfficiency}% ef.</strong>
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ background: '#353AA4', width: 12, height: 12, border: '2px solid #f2f2f2' }}
      />
    </div>
  );
};

// ─── AnalyticsEdge ────────────────────────────────────────────────────────────

const AnalyticsEdge = ({
  sourceX, sourceY, targetX, targetY,
  sourcePosition, targetPosition,
  style = {},
  markerEnd,
  animated,
  data,
}: EdgeProps) => {
  const d = data as AnalyticsEdgeData | undefined;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition,
  });

  const hasLabel = d && d.total > 0;

  // continuidade → BaseEdge sólido animado
  // botão → <path> tracejado fixo
  const onlyContinuity = !(d?.isButton ?? true);

  return (
    <>
      {onlyContinuity ? (
        <BaseEdge
          path={edgePath}
          markerEnd={markerEnd}
          style={{ ...style, strokeWidth: 2, stroke: '#8FFFFF' }}
        />
      ) : (
        <path
          d={edgePath}
          fill="none"
          strokeWidth={2}
          strokeDasharray="8 5"
          markerEnd={markerEnd}
          className="react-flow__edge-path"
          style={{ stroke: '#8FFFFF' }}
        />
      )}
      {hasLabel && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              background: '#0F073E',
              border: '1px solid rgba(143,255,255,0.4)',
              borderRadius: '6px',
              padding: '3px 8px',
              fontSize: 11,
              color: '#8FFFFF',
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              lineHeight: 1.3,
            }}
            className="nodrag nopan"
          >
            {d!.btnClicks > 0 && <span>btn: {d!.btnClicks}</span>}
            {d!.continuity > 0 && <span>cont: {d!.continuity}</span>}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

// ─── Type maps ────────────────────────────────────────────────────────────────

const nodeTypes = { analyticsNode: AnalyticsNode };
const edgeTypes = { analyticsEdge: AnalyticsEdge };

// ─── Data builder ─────────────────────────────────────────────────────────────

function buildFlowAnalytics(
  campaign: ICampaign,
  data: IAnalyticsSocketData
): { nodes: Node[]; edges: Edge[] } {
  const totalPlays = data.ANALYTICS.TOTAL_PLAYS;
  const { nodes: baseNodes, edges: baseEdges } = mapToFlow(campaign);

  const arrivalsMap = new Map<string, number>();
  const bondClickMap = new Map<string, { btnClicks: number; continuity: number; total: number; isButton: boolean }>();

  const minOrder = Math.min(...campaign.CAMPAIGN_VIDEOS.map((v) => v.ORDER ?? Infinity));
  const videoIndexById = new Map(
    campaign.CAMPAIGN_VIDEOS.map((video, index) => [video.VIDEO.ID, index])
  );

  // Cria mapa de dados do socket por ID do vídeo (busca por ID, não por índice)
  const socketVideoMap = new Map(
    data.CAMPAIGN.CAMPAIGN_VIDEOS.map((v) => [v.ID, v])
  );

  // Inicializa arrivals: nó de entrada recebe totalPlays, demais 0
  for (const cv of campaign.CAMPAIGN_VIDEOS) {
    arrivalsMap.set(cv.VIDEO.ID, (cv.ORDER ?? Infinity) === minOrder ? totalPlays : 0);
  }

  // Usa dados reais do socket (data.CAMPAIGN) para contagem de cliques por ID
  for (let i = 0; i < campaign.CAMPAIGN_VIDEOS.length; i++) {
    const cv = campaign.CAMPAIGN_VIDEOS[i];
    const cvData = socketVideoMap.get(cv.ID);
    if (!cvData) continue;

    for (let j = 0; j < cv.BONDS.length; j++) {
      const bondItem = cv.BONDS[j];
      const bondData = cvData.BONDS[j];
      const targetId = bondItem.BOND?.VIDEO_ID;
      if (!targetId || !bondData) continue;

      const btnClicks = (bondItem.BOND.BUTTON ?? false)
        ? (bondData.BOND.BUTTON_CLICK_CAMPAING ?? 0)
        : 0;
      const continuity = bondData.BOND.CONTINUITY_CAMPAING ?? 0;
      const total = btnClicks + continuity;
      arrivalsMap.set(targetId, (arrivalsMap.get(targetId) ?? 0) + total);
      bondClickMap.set(`${cv.VIDEO.ID}-${targetId}`, {
        btnClicks,
        continuity,
        total,
        isButton: bondItem.BOND.BUTTON ?? false,
      });
    }
  }

  // Enrich nodes — CTA clicks também do socket
  const nodes: Node[] = baseNodes.map((node) => {
    const i = videoIndexById.get(node.id) ?? -1;
    const cv = i >= 0 ? campaign.CAMPAIGN_VIDEOS[i] : undefined;
    const cvData = cv ? socketVideoMap.get(cv.ID) : undefined;
    const arrivals = arrivalsMap.get(node.id) ?? 0;
    const arrivalPct = totalPlays > 0 ? ((arrivals / totalPlays) * 100).toFixed(1) : '0.0';
    // CTA APENAS do socket (data.CAMPAIGN_VIDEOS), sem fallback para campaign
    const ctaEnabled = cvData?.CTA ?? false;
    const ctaClicks = ctaEnabled ? (cvData?.CTA_CLICK_CAMPAING ?? 0) : 0;
    const ctaEfficiency = arrivals > 0 ? ((ctaClicks / arrivals) * 100).toFixed(1) : '0.0';

    return {
      ...node,
      type: 'analyticsNode',
      draggable: false,
      selectable: false,
      data: {
        ...node.data,
        arrivals,
        arrivalPct,
        cta: ctaEnabled,
        ctaClicks,
        ctaEfficiency,
      } as AnalyticsNodeData,
    };
  });

  // Enrich edges
  const edges: Edge[] = baseEdges.map((edge) => {
    const info = bondClickMap.get(`${edge.source}-${edge.target}`);
    const isButton = info?.isButton ?? false;
    return {
      ...edge,
      type: 'analyticsEdge',
      animated: isButton, // botão → animated (sólido animado), continuidade → false (tracejado)
      data: {
        btnClicks: info?.btnClicks ?? 0,
        continuity: info?.continuity ?? 0,
        total: info?.total ?? 0,
        isButton,
      } as AnalyticsEdgeData,
    };
  });

  return { nodes, edges };
}

// ─── Componente ───────────────────────────────────────────────────────────────

interface ISectionFlowProps {
  data: IAnalyticsSocketData;
  campaign: ICampaign;
}

const FlowInner = ({ data, campaign }: ISectionFlowProps) => {
  const { nodes, edges } = useMemo(
    () => buildFlowAnalytics(campaign, data),
    [campaign, data]
  );

  return (
    <div className={styles.sectionFlow}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag
        zoomOnScroll
        fitView
        fitViewOptions={{ padding: 0.2 }}
        colorMode="dark"
        proOptions={{ hideAttribution: true }}
      >
        <Background
          bgColor="#000125"
          variant={BackgroundVariant.Dots}
          color="rgba(153,0,255,0.5)"
          gap={20}
          size={1.5}
        />
      </ReactFlow>
    </div>
  );
};

export const SectionFlow = (props: ISectionFlowProps) => (
  <ReactFlowProvider>
    <FlowInner {...props} />
  </ReactFlowProvider>
);

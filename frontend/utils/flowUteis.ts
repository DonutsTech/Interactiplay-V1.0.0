import { ICampaign } from '@/@types/campaign';
import { Bond, MyNode } from '@/@types/flow';
import { isURL } from './urlValidator';

export const orderForEdges = (data: MyNode[]) => {
  const start = data.find((node) => node.data.ORDER === 1);
  if (!start) return;

  const map = Object.fromEntries(data.map((node) => [node.id, node]));
  const list = [start];

  while (list.length) {
    const now = list.shift();
    if (now?.data.BONDS.length === 0) continue;

    now?.data.BONDS.forEach((bond: Bond) => {
      const on = map[bond.VIDEO_ID];
      if (on && on.data.ORDER === null) {
        on.data.ORDER = (now.data.ORDER || 0) + 1;
        list.push(on);
      }
    });
  }

  return data;
};

export const nodeNew = (nodes: MyNode[], source: MyNode, target: MyNode) => {
  const newNodes: MyNode[] = nodes.map((node: MyNode) => {
    if (node.id === source.id) {
      return {
        ...node,
        data: {
          ...node.data,
          BONDS: [
            ...node.data.BONDS,
            {
              VIDEO_ID: target.data.VIDEO.ID || '',
              BUTTON: true,
              BUTTON_START: 0,
              BUTTON_TEXT: '',
              BUTTON_STYLE: '',
              BUTTON_MODAL: false,
            },
          ],
        },
      };
    }
    if (node.id === target.id) {
      return {
        ...node,
        data: {
          ...node.data,
          ORDER:
            source && source.data.ORDER !== null
              ? node.data.ORDER === null
                ? source.data.ORDER + 1
                : node.data.ORDER < source.data.ORDER + 1
                  ? node.data.ORDER
                  : source.data.ORDER + 1
              : null,
        },
      };
    }
    return node;
  });

  const newMapNodes = newNodes.map((node: MyNode) => {
    if (node.data.ORDER === 1) {
      return node;
    }

    return {
      ...node,
      data: {
        ...node.data,
        ORDER: null,
      },
    };
  });

  const newOrderNode = orderForEdges(newMapNodes);

  return newOrderNode || newNodes;
};

export type EdgeLike = {
  source?: string;
  target?: string;
  id?: string;
};

export function willCreateCycle(
  current: EdgeLike[],
  newEdge: EdgeLike
): boolean {
  if (!newEdge || !newEdge.source || !newEdge.target) return false;

  // Auto-loop direto (A -> A)
  if (newEdge.source === newEdge.target) return true;

  // Constrói grafo de adjacência a partir das edges existentes
  const adj = new Map<string, string[]>();
  for (const e of current) {
    if (!e.source || !e.target) continue;
    const arr = adj.get(e.source) ?? [];
    arr.push(e.target);
    adj.set(e.source, arr);
  }

  const duplicate = current.some(
    (e) => e.source === newEdge.source && e.target === newEdge.target
  );
  if (duplicate) return false;

  const start = newEdge.target!;
  const goal = newEdge.source!;
  const stack: string[] = [start];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const node = stack.pop()!;
    if (node === goal) return true;
    if (visited.has(node)) continue;
    visited.add(node);

    const neighbors = adj.get(node) ?? [];
    for (const nb of neighbors) {
      if (!visited.has(nb)) stack.push(nb);
    }
  }

  return false;
}

export const convertFlowToCampaignPayload = (
  campaignName: string,
  campaign: MyNode[]
) => {
  return {
    NAME: campaignName,
    CAMPAIGN_VIDEOS: campaign.map(({ data }) => {
      return {
        VIDEO_ID: data.VIDEO.ID,
        ORDER: data.ORDER || 0,
        CTA: data.CTA,
        CTA_START: data.CTA_START,
        CTA_TEXT: data.CTA_TEXT,
        CTA_URL:
          data.CTA_URL === ''
            ? ''
            : isURL(data.CTA_URL)
              ? data.CTA_URL
              : `https://${data.CTA_URL}`,
        CTA_STYLE: data.CTA_STYLE,
        X_POSITION: data.X_POSITION,
        Y_POSITION: data.Y_POSITION,
        BONDS: data.BONDS.map((bond: Bond) => {
          return {
            VIDEO_ID: data.VIDEO.ID,
            BOND: {
              BUTTON: bond.BUTTON,
              BUTTON_TEXT: bond.BUTTON_TEXT,
              BUTTON_STYLE: bond.BUTTON_STYLE,
              BUTTON_START: bond.BUTTON_START,
              VIDEO_ID: bond.VIDEO_ID,
              X_POSITION: bond.X_POSITION,
              Y_POSITION: bond.Y_POSITION,
            },
          };
        }),
      };
    }),
  };
};

export function mapToFlow(data: ICampaign): {
  nodes: MyNode[];
  edges: { id: string; source: string; target: string }[];
} {
  const videos = data?.CAMPAIGN_VIDEOS ?? [];

  const nodes = videos.map((item) => ({
    id: item.VIDEO.ID,
    position: {
      x: item.X_POSITION ?? 0,
      y: item.Y_POSITION ?? 0,
    },
    data: {
      VIDEO: item.VIDEO,
      ORDER: item.ORDER,
      BONDS: item.BONDS.map((bondItem) => ({
        VIDEO_ID: bondItem?.BOND?.VIDEO_ID ?? '',
        BUTTON: bondItem?.BOND?.BUTTON ?? false,
        BUTTON_START: bondItem?.BOND?.BUTTON_START ?? 0,
        BUTTON_TEXT: bondItem?.BOND?.BUTTON_TEXT ?? '',
        BUTTON_STYLE: bondItem?.BOND?.BUTTON_STYLE ?? '',
        BUTTON_MODAL: false,
        X_POSITION: bondItem?.BOND?.X_POSITION ?? 0,
        Y_POSITION: bondItem?.BOND?.Y_POSITION ?? 0,
      })),
      CTA: item.CTA ?? false,
      CTA_START: item.CTA_START ?? 0,
      CTA_URL: item.CTA_URL ?? '',
      CTA_TEXT: item.CTA_TEXT ?? '',
      CTA_STYLE: item.CTA_STYLE ?? '',
      X_POSITION: item.X_POSITION ?? 0,
      Y_POSITION: item.Y_POSITION ?? 0,
    },
    type: 'customNode',
  }));

  const videoBonds = videos
    .map(({ VIDEO, BONDS }) => ({
      VIDEO,
      BONDS: BONDS ?? [],
    }))
    .filter((v) => v.BONDS.length > 0);

  const edges = videoBonds.flatMap(({ VIDEO, BONDS }) =>
    BONDS.map((bondItem) => ({
      id: crypto.randomUUID(),
      source: VIDEO?.ID ?? '',
      target: bondItem?.BOND?.VIDEO_ID ?? '',
      type: 'customEdge',
    }))
  );

  return { nodes, edges };
}

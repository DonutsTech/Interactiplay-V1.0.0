export interface Bond {
  VIDEO_ID: string;
  BUTTON: boolean;
  BUTTON_START: number;
  BUTTON_TEXT: string;
  BUTTON_STYLE: string;
  BUTTON_MODAL: boolean;
}

interface NodeData extends Record<string, unknown>  {
  VIDEO: IVideos;
  ORDER: number | null;
  BONDS: Bond[];
  CTA: boolean;
  CTA_URL: string;
  CTA_TEXT: string;
  CTA_STYLE: string;
  CTA_START: number;
  X_POSITION: number;
  Y_POSITION: number;
}

export interface DadosModal  {
  TARGET: string | null;
  VIDEO: IVideos;
  ORDER: number | null;
  BONDS: Bond[];
  CTA: boolean;
  CTA_URL: string;
  CTA_TEXT: string;
  CTA_STYLE: string;
  CTA_START: number;
  X_POSITION: number;
  Y_POSITION: number;
}

export type MyNode = Node<NodeData>;
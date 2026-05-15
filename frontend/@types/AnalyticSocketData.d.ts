export interface IBondData {
  BUTTON?: boolean;
  CONTINUITY_CAMPAING: number;
  CONTINUITY_TEST_AB: number;
  BUTTON_CLICK_CAMPAING: number;
  BUTTON_CLICK_TEST_AB: number;
}

export interface ICampaignVideoBondItem {
  BOND: IBondData;
}

export interface ICampaignVideoData {
  ID?: string;
  VIDEO?: { NAME?: string };
  CTA?: boolean;
  CTA_CLICK_CAMPAING: number;
  CTA_CLICK_TEST_AB: number;
  BONDS: ICampaignVideoBondItem[];
}

export interface IExternalLinkData {
  ATIVE?: boolean;
  BUTTON_CLICK_CAMPAING: number;
  BUTTON_CLICK_TEST_AB: number;
}

export interface ICampaignFeatureData {
  EXTERNAL_LINK: IExternalLinkData | null;
}

export interface ICampaignData {
  CAMPAIGN_VIDEOS: ICampaignVideoData[];
  FEATURE: ICampaignFeatureData | null;
  ANALYTICS_ID: string;
}

export interface IAnalyticsData {
  TOTAL_PLAY_BLOCK: number;
  TOTAL_PLAYS: number;
  TOTAL_VIEWS: number;
  TOTAL_PLAY_UNIQUE: number;
}

export interface IModelPlayItem {
  _sum: { PLAY: number };
  DEVICE: string;
}

export type IModelPlaysMap = Record<string, number>;

export interface IModelTimeData {
  TIME: Record<string, number>; // chave = segundo do vídeo, valor = contagem de eventos
  TOTAL_TIMESCREEN: number;
  AGRUP_DATE?: Record<string, number>;
}

export interface IAnalyticsSocketData {
  CAMPAIGN: ICampaignData;
  ANALYTICS: IAnalyticsData;
  MODEL_PLAYS: IModelPlayItem[] | IModelPlaysMap;
  MODEL_TIME: IModelTimeData;
}

export interface ITestABAnalyticsSocketData {
  ANALYTICS_A: IAnalyticsSocketData;
  ANALYTICS_B: IAnalyticsSocketData;
}
import { IVideo } from './video';
import { Bond } from './flow';

// ==================== CAMPAIGN ====================

export interface ICampaign {
  ID: string;
  NAME: string;
  EMBED_JS: string | null;
  EMBED_IFRAME: string | null;
  CORS: string;
  FEATURE: IFeature | null;
  FEATURE_ID: string | null;
  USER_ID: string | null;
  CAMPAIGN_VIDEOS: ICampaignVideo[];
  ANALYTICS: IAnalytics | null;
  ANALYTICS_ID: string | null;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface IAnalytics {
  ID: string;
  CAMPAIGN_ID: string | null;
}

// ==================== CAMPAIGN VIDEO ====================

export interface ICampaignVideo {
  ID: string;
  CAMPAIGN_ID: string | null;
  VIDEO_ID: string | null;
  VIDEO: IVideo;
  // Campos CTA (mesmos do flow)
  CTA: boolean;
  CTA_TEXT: string | null;
  CTA_URL: string | null;
  CTA_STYLE: string | null;
  CTA_START: number;
  CTA_CLICK_CAMPAING: number;
  CTA_CLICK_TEST_AB: number;
  X_POSITION: number;
  Y_POSITION: number;
  ORDER: number;
  BONDS: IBondVideo[];
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

// ==================== BONDS ====================

export interface IBondVideo {
  ID: string;
  CAMPAIGN_VIDEO_ID: string | null;
  BOND_ID: string | null;
  BOND: IBond;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface IBond {
  ID: string;
  VIDEO_ID: string | null;
  VIDEO: IVideo;
  BUTTON: boolean;
  BUTTON_TEXT: string | null;
  BUTTON_CLICK_CAMPAING: number;
  BUTTON_CLICK_TEST_AB: number;
  BUTTON_STYLE: string | null;
  BUTTON_START: number;
  X_POSITION: number;
  Y_POSITION: number;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

// ==================== FEATURES ====================

export interface IFeature {
  ID: string;
  AUTO_PLAY: IAutoPlay | null;
  AUTO_PLAY_ID: string | null;
  THUMB: IThumb | null;
  THUMB_ID: string | null;
  GANCHO: IGancho | null;
  GANCHO_ID: string | null;
  TIMELINE: ITimeline | null;
  TIMELINE_ID: string | null;
  EXTERNAL_LINK: IExternalLink | null;
  EXTERNAL_LINK_ID: string | null;
  PIXEL: IPixel | null;
  PIXEL_ID: string | null;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface IAutoPlay {
  ID: string;
  ATIVE: boolean;
  SECOND: number;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface IThumb {
  ID: string;
  IMAGE_URL: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface IGancho {
  ID: string;
  ATIVE: boolean;
  TITLE: string;
  TITLE_STYLE: string;
  SUBTITLE: string;
  SUBTITLE_ANIMATION: boolean;
  SUBTITLE_ANIMATION_TYPE: string | null;
  SUBTITLE_STYLE: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface ITimeline {
  ID: string;
  ATIVE: boolean;
  HEIGHT: number;
  COR: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface IExternalLink {
  ID: string;
  ATIVE: boolean;
  TEXT: string | null;
  STYLE_TEXT: string | null;
  BUTTON_TEXT: string | null;
  BUTTON_STYLE: string | null;
  BUTTON_CLICK_CAMPAING: number;
  BUTTON_CLICK_TEST_AB: number;
  LINK_URL: string | null;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

export interface IPixel {
  ID: string;
  ATIVE: boolean;
  NAME_META: string | null;
  ID_META: string | null;
  NAME_GOOGLE: string | null;
  ID_GOOGLE: string | null;
  LABEL_CONVERSION_GOOGLE: string | null;
  SHOOTING_EVENT_GOOGLE: string | null;
  SHOOTING_EVENT_VALUE_GOOGLE: number | null;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
}

// ==================== CREATE/UPDATE PAYLOADS ====================

export interface ICreateCampaignPayload {
  NAME: string;
  CAMPAIGN_VIDEOS: ICreateCampaignVideo[];
}

export interface ICreateCampaignVideo {
  VIDEO_ID: string;
  ORDER: number;
  X_POSITION: number;
  Y_POSITION: number;
  CTA: boolean;
  CTA_TEXT: string;
  CTA_URL: string;
  CTA_STYLE: string;
  CTA_START: number;
  BONDS: ICreateBondsCampaign[];
}

export interface ICreateBondsCampaign {
  VIDEO_ID: string;
  BOND: Bond;
}

// export interface ICreateBondCampaign {
//   VIDEO_ID: string;
//   BUTTON: boolean;
//   BUTTON_TEXT: string;
//   BUTTON_STYLE: string;
//   BUTTON_START: number;
//   X_POSITION: number;
//   Y_POSITION: number;
// }

export interface IUpdateCampaignPayload extends ICreateCampaignPayload {}

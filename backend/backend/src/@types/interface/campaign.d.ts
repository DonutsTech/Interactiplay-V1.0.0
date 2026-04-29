export interface CreateCampaign {
  NAME: string;
  CAMPAIGN_VIDEOS: VideoCampaign[];
}

export interface VideoCampaign {
  VIDEO_ID: string;
  ORDER: number;
  X_POSITION: number;
  Y_POSITION: number;
  CTA: boolean;
  CTA_TEXT: string;
  CTA_URL: string;
  CTA_STYLE: string;
  CTA_START: number;
  BONDS: BondsCampaign[];
}

export interface BondsCampaign {
  VIDEO_ID: string;
  BOND: BondCampaign;
}

export interface BondCampaign {
  ID: string;
  VIDEO_ID: string;
  BUTTON: boolean;
  BUTTON_TEXT: string;
  BUTTON_STYLE: string;
  BUTTON_START: number;
  X_POSITION: number;
  Y_POSITION: number;
}

export type UpdateCampaign = CreateCampaign;

export interface CampaignUpdateClient {
  ID: string;
  CAMPAIGN_VIDEOS: CampaignVideoClient[];
  FEATURE: {
    EXTERNAL_LINK: externalLinkClient;
  };
}

export interface externalLinkClient {
  ID: string;
  BUTTON_CLICK_CAMPAING: number;
  BUTTON_CLICK_TEST_AB: number;
}

export interface CampaignVideoClient {
  ID: string;
  CTA_CLICK_CAMPAING: number;
  CTA_CLICK_TEST_AB: number;
  BONDS: BondClient[];
}

export interface BondClient {
  ID: string;
  BUTTON_CLICK_CAMPAING: number;
  BUTTON_CLICK_TEST_AB: number;
}

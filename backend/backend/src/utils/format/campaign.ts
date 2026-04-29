import type { CampaignUpdateClient } from '../../@types/interface/campaign';

export const transformCampaignForClient = (
  campaign: CampaignUpdateClient,
): CampaignUpdateClient => {
  return {
    ...campaign,
    FEATURE: {
      EXTERNAL_LINK: {
        ID: campaign.FEATURE.EXTERNAL_LINK.ID,
        BUTTON_CLICK_CAMPAING: 0,
        BUTTON_CLICK_TEST_AB: 0,
      },
    },
    CAMPAIGN_VIDEOS: campaign.CAMPAIGN_VIDEOS.map(video => ({
      ...video,
      CTA_CLICK_CAMPAING: 0,
      CTA_CLICK_TEST_AB: 0,
      BONDS: video.BONDS.map(bond => ({
        ...bond,
        BUTTON_CLICK_CAMPAING: 0,
        BUTTON_CLICK_TEST_AB: 0,
      })),
    })),
  };
};

export type CampaignEmbed = {
  CAMPAIGN_VIDEOS: {
    include: {
      BONDS: {
        include: {
          BOND: true;
        };
      };
      VIDEO: true;
    };
  };
  FEATURE: {
    include: {
      AUTO_PLAY: true;
      THUMB: true;
      EXTERNAL_LINK: true;
      TIMELINE: true;
      PIXEL: true;
      GANCHO: true;
    };
  };
  ANALYTICS: {
    select: {
      ID: true;
    };
  };
};

export type CampaignBasic = {
  CAMPAIGN_VIDEOS: {
    include: {
      BONDS: {
        include: {
          BOND: true;
        };
      };
      VIDEO: true;
    };
  };
  FEATURE: {
    include: {
      AUTO_PLAY: true;
      THUMB: true;
      EXTERNAL_LINK: true;
      TIMELINE: true;
      PIXEL: true;
      GANCHO: true;
    };
  };
};

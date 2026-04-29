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
  USER: {
    select: {
      HISTORY_PLAYS: {
        select: {
          QTD_PLAYS: true;
          STATUS: true;
        };
      };
      STRIPE_SUBSCRIPTION_STATUS: true;
      PLAN: {
        select: {
          PLAYS: true;
        };
      };
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

export type Campaign = {
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
      EXTERNAL_LINK: true;
    };
  };
  ANALYTICS: {
    include: {
      MODEL_PLAYS: {
        include: {
          MODEL_TIME: true;
        };
      };
    };
  };
};

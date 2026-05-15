export interface createBondVideo {
  idVideoCampaign: string;
  VIDEO_ID: string;
  BOND: {
    ID: string;
    VIDEO_ID: string;
    BUTTON: boolean;
    BUTTON_TEXT: string;
    BUTTON_STYLE: string;
    BUTTON_START: number;
    X_POSITION: number;
    Y_POSITION: number;
  };
}

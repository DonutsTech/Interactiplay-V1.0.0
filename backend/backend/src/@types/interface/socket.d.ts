export interface ClientPublic {
  ID_CAMPAIGN: string | undefined;
  ID_ANALYTICS: string | undefined;
  ID_USER: string | undefined;
  ID_MODEL_PLAY: string | undefined;
  ID_MODEL_TIME: string | undefined;
  BROWSER: string;
  DEVICE: string;
  OS: string;
  COUNTRY: string;
  CITY: string;
  REGION: string;
  PLAY: number;
  VIEW: number;
  TIMESCREEN: number;
}

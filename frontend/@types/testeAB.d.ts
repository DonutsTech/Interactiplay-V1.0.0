import { ICampaign } from "./campaign";

export interface ITestAB {
  ID: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  EMBED_JS: string | null;
  EMBED_IFRAME: string | null;
  CAMPAIGN_ID_A: string | null;
  CAMPAIGN_A: ICampaign | null;
  CAMPAIGN_ID_B: string | null;
  CAMPAIGN_B: ICampaign | null;
  ANALYTICS_ID_A: string | null;
  ANALYTICS_ID_B: string | null;
  USER_ID: string | null;
}

export interface ICreateTestABPayload {
  campaignIdA: string;
  campaignIdB: string;
}
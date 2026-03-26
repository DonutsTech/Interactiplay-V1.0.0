export interface CheckoutPlanRegister {
  ID_PLAN: string;
  ID_USER: string;
}

export interface Plan {
  ID: string;
  PLAN: string;
  PLAYS: number;
  PLAYS_PRICE: number;
  PRICE: number;
  STATUS: boolean;
  VIDEO_LIMIT: number;
  STRIPE_PLAN_ID: string;
  STRIPE_PLAN_PRICE: string;
}

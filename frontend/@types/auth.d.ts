export interface Login {
  EMAIL: string;
  HASHED_PASSWORD: string;
}

export interface ResetPassword {
  TOKEN: string;
  HASHED_PASSWORD: string;
  CODE: string;
}

export interface Register extends Login {
  NAME: string;
  PHONE: string;
}

export interface MeResponse {
  USER: {
    ID: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN: string | null;
    CREATED_AT: string;
    UPDATED_AT: string;
    FIRST_ACESS: boolean;
    VALIDATION_EMAIL: boolean;
    ROLE: string;
    ACTIVE: boolean;
    STRIPE_CUSTOMER_ID: string;
    STRIPE_SUBSCRIPTION_ID: string;
    STRIPE_SUBSCRIPTION_STATUS: string;
    STRIPE_TRIAL_END: string | null;
    STRIPE_CURRENT_PERIOD_START: string | null;
    STRIPE_CURRENT_PERIOD_END: string | null;
    PLAN_ID: string | null;
    PLAN: Plan | null;
  };
}

export interface Plan {
  ID: string;
  PLAN: string;
  PLAYS: number;
  PLAYS_PRICE: number;
  PRICE: number;
  STATUS: boolean;
  STRIPE_PLAN_ID: string;
  STRIPE_PLAN_PRICE: string;
  VIDEO_LIMIT: number;
}

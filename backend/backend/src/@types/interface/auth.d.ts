export interface ResetPassword {
  ID: string;
  HASHED_PASSWORD: string;
  CODE: string;
}

export interface PaymentCheckout {
  ID_PLAN: string;
  ID_USER: string;
}

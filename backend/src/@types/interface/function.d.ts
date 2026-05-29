export interface FunctionCheckout {
  userId: string;
  email: string;
  planId: string;
  token: string;
  price: string;
  trivial: boolean;
}

export interface FunctionCheckoutFree {
  userId: string;
  email: string;
  planId: string;
  price: string;
}

export interface FunctionUpdateFinishTrial {
  userId: string;
  email: string;
  stripeSubscriptionId: string;
  planId: string;
  price: string;
}

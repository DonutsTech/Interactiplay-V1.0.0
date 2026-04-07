import type Stripe from "stripe";
import type { Plan } from "../../@types/interface/plan";

interface PlanStripe {
  PLAN: string,
  STRIPE_PLAN_ID: string,
  STRIPE_PLAN_PRICE: string,
  PLAYS: string,
  PLAYS_PRICE: string,
  PRICE: string,
  STATUS: string,
  VIDEO_LIMIT: string,
}

export async function formatProductsForPlan(products: Stripe.Product[]) {
  const Plan = await Promise.all(products.map(async (product) => {
    const planItem = {
      PLAN: product.name,
      STRIPE_PLAN_ID: product.id,
      STRIPE_PLAN_PRICE: product.default_price as string,
      ...(product.metadata || {}),
    }

    return planItem as PlanStripe;
  }));

  return Plan.map((plan) => ({
    PLAN: plan.PLAN,
    STRIPE_PLAN_ID: plan.STRIPE_PLAN_ID,
    STRIPE_PLAN_PRICE: plan.STRIPE_PLAN_PRICE,
    PLAYS: Number(plan.PLAYS),
    PLAYS_PRICE: Number(plan.PLAYS_PRICE),
    PRICE: Number(plan.PRICE),
    STATUS: plan.STATUS === 'true',
    VIDEO_LIMIT: Number(plan.VIDEO_LIMIT),
  })) as Plan[];
}

import { StatusCodes } from "http-status-codes";
import Stripe from "stripe";
import type { FunctionCheckout } from "../@types/interface/function";
import { CustomError } from "../error";
import { handleStripeError } from "../error/errorStripe";
import type { Plan } from "../generated/prisma/client";
import { planService } from "../services/plan";
import { formatNummberForDate } from "./format/data";
import { formatProductsForPlan } from "./format/plan";

export const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
  httpClient: Stripe.createFetchHttpClient(),
});

export const getStripeProducts = async () => {
  try {
    const products = await stripe.products.list();
    const formattedProducts = formatProductsForPlan(products.data);
    return formattedProducts;
  } catch (error) {
    handleStripeError(error);
  }
}

export const getStripeCustomerByEmail = async (email: string) => {
  try {
    const customers = await stripe.customers.list({
      email,
      limit: 1,
    });

    return customers.data[0] || null;
  } catch (error) {
    handleStripeError(error);
  }
}

export const createStripeCustomer = async (email: string, name: string) => {
  try {
    const customer = await getStripeCustomerByEmail(email);

    let plan: Plan | null = null;
    if (customer) {
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: 'all',
        limit: 1,
      });

      const subscription = subscriptions.data[0];

      if (subscription && subscription.items && subscription.items.data && subscription.items.data.length > 0) {
        const item = subscription.items.data[0];
        const price = item?.price;
        if (price && price.product) {
          plan = await planService.getPlanByStripeId(price.product as string);
        }
      }
      /*
      ()STRIPE_TRIAL_END: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
STRIPE_CURRENT_PERIOD_START: '',
STRIPE_CURRENT_PERIOD_END: '',
*/
      if (subscription) {
        return {
          STRIPE_CUSTOMER_ID: customer.id,
          STRIPE_SUBSCRIPTON_ID: subscription.id,
          STRIPE_SUBSCRIPTON_STATUS: subscription.status,
          ACTIVE: subscription.status === 'active' || subscription.status === 'trialing',
          ...(subscription.trial_end ? { STRIPE_TRIAL_END: formatNummberForDate(subscription.trial_end) } : {}),
          ...(plan ? { PLAN: { connect: { ID: plan.ID } } } : {}),
          ...(plan ? { HISTORY_PLAYS: { create: { QTD_PLAYS: 0, PRICE_MONTH: 0 } } } : {}),
        }
      }
    }

    const createCustomer = await stripe.customers.create({
      email,
      name,
    });

    return {
      STRIPE_CUSTOMER_ID: createCustomer.id,
      STRIPE_SUBSCRIPTON_ID: '',
      STRIPE_SUBSCRIPTON_STATUS: '',
      ACTIVE: false,
    };
  } catch (error) {
    handleStripeError(error);
  }
}

export const generatedCheckout = async ({ email, planId, token, userId, price }: FunctionCheckout) => {
  try {
    const customer = await getStripeCustomerByEmail(email);

    if (!customer) {
      throw new CustomError('Cliente não encontrado para o email fornecido', StatusCodes.NOT_FOUND);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      client_reference_id: userId,
      customer: customer.id,
      success_url: `${process.env.FRONTEND_URL}/dash?token=${token}`,
      cancel_url: `${process.env.FRONTEND_URL}/acess?payment=deny&&userId=${userId}`,
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          userId,
          planId,
          price,
        }
      }
    });

    return session.url;
  } catch (error) {
    handleStripeError(error);
  }
}

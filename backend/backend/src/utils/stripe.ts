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
    let periodStart: number | undefined = undefined;
    let periodEnd: number | undefined = undefined;

    if (customer) {
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: 'all',
        limit: 1,
      });

      const subscription = subscriptions.data[0] as Stripe.Subscription;

      if (subscription && subscription.items && subscription.items.data && subscription.items.data.length > 0) {
        const item = subscription.items.data[0];
        const price = item?.price;
        periodEnd = item?.current_period_end;
        periodStart = item?.current_period_start;
        if (price && price.product) {
          plan = await planService.getPlanByStripeId(price.product as string);
        }
      }

      if (subscription) {
        return {
          STRIPE_CUSTOMER_ID: customer.id,
          STRIPE_SUBSCRIPTON_ID: subscription.id,
          STRIPE_SUBSCRIPTON_STATUS: subscription.status,
          ACTIVE: subscription.status === 'active' || subscription.status === 'trialing',
          ...(subscription.trial_end ? { STRIPE_TRIAL_END: formatNummberForDate(subscription.trial_end) } : {}),
          ...(periodStart ? { STRIPE_CURRENT_PERIOD_START: formatNummberForDate(periodStart) } : {}),
          ...(periodEnd ? { STRIPE_CURRENT_PERIOD_END: formatNummberForDate(periodEnd) } : {}),
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

export const handleCheckoutSessionCompleted = async (event: {
  data: { object: Stripe.Checkout.Session }
}) => {
  try {
    const idUser = event.data.object.client_reference_id as string;
    const stripeSubscriptionId = event.data.object.subscription as string;
    const stripeCustumerId = event.data.object.customer as string;
    const checkoutStatus = event.data.object.status;

    if (event.data.object.metadata && event.data.object.metadata.planId) {
      const planId = event.data.object.metadata.planId;

      if (checkoutStatus !== 'complete') return;

      if (!idUser || !stripeSubscriptionId || !stripeCustumerId) {
        throw new Error('idUser, stripeSubscriptionId, stripeCustumerId is required');
      }

    }
    /*
    const userExist = await userService.showId(idUser);

    if (!userExist) {
      throw new Error('user not found');
    }

    await userService.update(idUser, {
      ACTIVE: true,
      STRIPE_CUSTOMER_ID: stripeCustumerId,
      STRIPE_SUBSCRIPTON_ID: stripeSubscriptionId,
      STRIPE_SUBSCRIPTON_STATUS: checkoutStatus,
      PLAN_ID: planId,
    });
    */
  } catch (error) {
    handleStripeError(error);
  }
}

export const handleSubscriptionSessionCompleted = async (event: {
  data: { object: Stripe.Subscription }
}) => {
  try {
    const subscriptionStatus = event.data.object.status;
    const stripeCustumerId = event.data.object.customer as string;
    const stripeSubscriptionId = event.data.object.id as string;
    const data = event.data.object.items.data[0];
  } catch (error) {
    handleStripeError(error);
  }
}

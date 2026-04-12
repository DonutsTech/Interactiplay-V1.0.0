import { StatusCodes } from "http-status-codes";
import Stripe from "stripe";
import type { FunctionCheckout, FunctionCheckoutFree } from "../@types/interface/function";
import { CustomError } from "../error";
import { handleStripeError } from "../error/errorStripe";
import type { Plan } from "../generated/prisma/client";
import { historyPlaysService } from "../services/historyPlays";
import { planService } from "../services/plan";
import { userService } from "../services/user";
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

export const createStripeFreeCustomer = async ({ email, planId, userId, price }: FunctionCheckoutFree) => {
  try {
    const customer = await getStripeCustomerByEmail(email);

    if (!customer) {
      throw new CustomError('Cliente não encontrado para o email fornecido', StatusCodes.NOT_FOUND);
    }

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price, quantity: 1 }],
      metadata: {
        userId,
        planId,
        price,
      }
    });

    return subscription;
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
      success_url: `${process.env.FRONTEND_URL}/acess/success?token=${token}`,
      cancel_url: `${process.env.FRONTEND_URL}/acess/denied?token=${token}`,
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
          type: 'monthly_subscription',
        }
      }
    });

    return { LINK: session.url };
  } catch (error) {
    handleStripeError(error);
  }
}

export const handleCheckoutSessionCompleted = async (event: {
  data: { object: Stripe.Checkout.Session }
}) => {
  try {
    console.log('handleCheckoutSessionCompleted - 1 ?', JSON.stringify(event.data.object));
    const idUser = event.data.object.client_reference_id as string;
    const stripeSubscriptionId = event.data.object.subscription as string;
    const stripeCustumerId = event.data.object.customer as string;
    const checkoutStatus = event.data.object.status;
    const metadata = event.data.object.metadata as { userId: string, planId: string, price: string } || undefined;

    let planId = undefined;

    if (checkoutStatus !== 'complete') return;

    if (metadata) {
      const plan = await planService.getPlanByStripeId(metadata.planId);

      if (plan) {
        planId = plan.ID;
      }
    }

    await userService.update(idUser, {
      ACTIVE: true,
      STRIPE_CUSTOMER_ID: stripeCustumerId,
      STRIPE_SUBSCRIPTON_ID: stripeSubscriptionId,
      ...(planId ? { PLAN: { connect: { ID: planId } } } : {}),
    });
  } catch (error) {
    handleStripeError(error);
  }
}

export const handleSubscriptionSessionCompleted = async (event: {
  data: { object: Stripe.Subscription & {
    current_period_start?: number;
    current_period_end?: number;
    trial_start?: number | null;
    trial_end?: number | null;
   } }
}) => {
  try {
    console.log('handleSubscriptionSessionCompleted - 2 ?', JSON.stringify(event.data.object));
    const subscriptionStatus = event.data.object.status;
    const stripeCustumerId = event.data.object.customer as string;
    const stripeSubscriptionId = event.data.object.id as string;
    const trialEnd = event.data.object.trial_end as number | null;
    const trialStart = event.data.object.trial_start as number | null;
    const metadata = event.data.object.metadata as { userId: string, planId: string, price: string } || undefined;
    const currentPeriodStart = event.data.object.current_period_start as number | null;
    const currentPeriodEnd = event.data.object.current_period_end as number | null;

    const user = await userService.showStripeCustomerId(stripeCustumerId);

    if (user && metadata) {
      const plan = await planService.showId(metadata.planId);

      await userService.update(user.ID, {
        STRIPE_SUBSCRIPTON_ID: stripeSubscriptionId,
        STRIPE_SUBSCRIPTON_STATUS: subscriptionStatus,
        ACTIVE: subscriptionStatus === 'active' || subscriptionStatus === 'trialing',
        ...(trialEnd ? { STRIPE_TRIAL_END: formatNummberForDate(trialEnd) } : {}),
        ...(trialStart ? { STRIPE_TRIAL_START: formatNummberForDate(trialStart) } : {}),
        ...(currentPeriodStart ? { STRIPE_CURRENT_PERIOD_START: formatNummberForDate(currentPeriodStart) } : {}),
        ...(currentPeriodEnd ? { STRIPE_CURRENT_PERIOD_END: formatNummberForDate(currentPeriodEnd) } : {}),
        ...(plan ? { PLAN: { connect: { ID: plan.ID } } } : {}),
      });

    }
  } catch (error) {
    handleStripeError(error);
  }
}

export const handleCancelPlan = async (event: {
  data: { object: Stripe.Subscription }
}) => {
  try {
    const stripeCustumerId = event.data.object.customer as string;
    const subscriptionStatus = event.data.object.status;

    const user = await userService.showStripeCustomerId(stripeCustumerId);

    if (user) {
      await userService.update(user.ID, {
        STRIPE_SUBSCRIPTON_STATUS: subscriptionStatus,
        ACTIVE: subscriptionStatus === 'active' || subscriptionStatus === 'trialing',
        PLAN: { disconnect: true },
      });
    }
  } catch (error) {
    handleStripeError(error);
  }
}

export const handleInvoicePaid = async (event: {
  data: { object: Stripe.Invoice & {
    paid: boolean;
    subscription?: string | null;
   }}
}) => {
  try {
    console.log('handleInvoicePaid - 3 ?', JSON.stringify(event.data.object));
    const stripeCustumerId = event.data.object.customer as string;
    const subscriptionId = event.data.object.subscription as string | null;
    const paid = event.data.object.paid as boolean;

    const user = await userService.showStripeCustomerId(stripeCustumerId);

    if (subscriptionId) {
      const periodend = event.data.object.period_end as number | null;
      const periodStart = event.data.object.period_start as number | null;

      if (user && user.PLAN) {
        await userService.update(user.ID, {
          ...(periodend ? { STRIPE_CURRENT_PERIOD_END: formatNummberForDate(periodend) } : {}),
          ...(periodStart ? { STRIPE_CURRENT_PERIOD_START: formatNummberForDate(periodStart) } : {}),
          ACTIVE: paid,
        });

        if (!(user.HISTORY_PLAYS.length > 0)) {
          await userService.update(user.ID, {
            HISTORY_PLAYS: { create: { QTD_PLAYS: 0, PRICE_MONTH: 0, STATUS: (user.STRIPE_SUBSCRIPTON_STATUS === 'trialing' ? 'teste' : 'ativo') } }
          });
        }

        if (user.HISTORY_PLAYS.length > 0) {
          const currentPlays = user.HISTORY_PLAYS.find(history => history.STATUS === 'ativo');

          if (currentPlays && user.PLAN.PLAYS < currentPlays.QTD_PLAYS) {
            const playDifference = currentPlays.QTD_PLAYS - user.PLAN.PLAYS;
            const value = Math.floor(playDifference * user.PLAN.PLAYS_PRICE * 100) / 100;

            await stripe.invoiceItems.create({
              customer: stripeCustumerId,
              amount: value,
              currency: 'brl',
              description: `Cobrança por excesso de ${playDifference} plays do plano ${user.PLAN.PLAN}`,
              metadata: {
                userId: user.ID,
                historyPlaysId: currentPlays.ID,
                type: 'excess_plays',
              }
            });

            await historyPlaysService.update(currentPlays.ID, {
              STATUS: 'aguardando pagamento',
              PRICE_MONTH: value,
            });
          }

          if (currentPlays && user.PLAN.PLAYS <= currentPlays.QTD_PLAYS) {
            await historyPlaysService.update(currentPlays.ID, {
              STATUS: 'isento',
              PRICE_MONTH: 0,
            });
          }

          await historyPlaysService.create({
            QTD_PLAYS: 0,
            PRICE_MONTH: 0,
            STATUS: 'ativo',
            USER: { connect: { ID: user.ID } },
          })
        }
      }
    } else {
      const metadata = event.data.object.metadata as { userId: string, historyPlaysId: string, type: string } | null;

      if (metadata && metadata.type === 'excess_plays' && metadata.userId && metadata.historyPlaysId) {
        await historyPlaysService.update(metadata.historyPlaysId, {
          STATUS: paid ? 'pago' : 'aguardando pagamento',
        });
      }
    }
  } catch (error) {
    handleStripeError(error);
  }
}

export const handleInvoicePaymentFailed = async (event: {
  data: { object: Stripe.Invoice }
}) => {
  try {
    console.log('handleInvoicePaymentFailed - falhou', event.data.object);
    const stripeCustumerId = event.data.object.customer as string;

    const user = await userService.showStripeCustomerId(stripeCustumerId);

    if (!user) return;

    await userService.update(user.ID, {
      ACTIVE: false,
    });
  } catch (error) {
    handleStripeError(error);
  }
}

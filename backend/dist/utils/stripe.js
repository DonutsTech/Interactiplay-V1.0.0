import { StatusCodes } from 'http-status-codes';
import Stripe from 'stripe';
import { CustomError } from '../error';
import { handleStripeError } from '../error/errorStripe';
import { historyPlaysService } from '../services/historyPlays';
import { planService } from '../services/plan';
import { userService } from '../services/user';
import { formatNummberForDate } from './format/data';
import { formatProductsForPlan } from './format/plan';
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
    httpClient: Stripe.createFetchHttpClient(),
});
export const getStripeProducts = async () => {
    try {
        const products = await stripe.products.list();
        const formattedProducts = formatProductsForPlan(products.data);
        return formattedProducts;
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const getStripeCustomerByEmail = async (email) => {
    try {
        const customers = await stripe.customers.list({ email });
        console.log('getStripeCustomerByEmail ?', customers);
        return customers.data[0] || null;
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const createStripeCustomer = async (email, name) => {
    try {
        const customer = await getStripeCustomerByEmail(email);
        let plan = null;
        let periodStart = undefined;
        let periodEnd = undefined;
        let trialEnd = undefined;
        let trialStart = undefined;
        if (customer) {
            const subscriptions = await stripe.subscriptions.list({
                customer: customer.id,
                status: 'all',
                limit: 1,
            });
            const subscription = subscriptions.data[0];
            if (subscription &&
                subscription.items &&
                subscription.items.data &&
                subscription.items.data.length > 0) {
                const item = subscription.items.data[0];
                const price = item?.price;
                periodEnd = item?.current_period_end;
                periodStart = item?.current_period_start;
                trialEnd = subscription.trial_end || undefined;
                trialStart = subscription.trial_start || undefined;
                if (price && price.product) {
                    plan = await planService.getPlanByStripeId(price.product);
                }
            }
            if (subscription) {
                return {
                    STRIPE_CUSTOMER_ID: customer.id,
                    STRIPE_SUBSCRIPTION_ID: subscription.id ? subscription.id : '',
                    STRIPE_SUBSCRIPTION_STATUS: subscription.status || '',
                    STRIPE_CURRENT_PERIOD_END: periodEnd ? formatNummberForDate(periodEnd) : '',
                    STRIPE_CURRENT_PERIOD_START: periodStart ? formatNummberForDate(periodStart) : '',
                    STRIPE_TRIAL_END: trialEnd ? formatNummberForDate(trialEnd) : '',
                    STRIPE_TRIAL_START: trialStart ? formatNummberForDate(trialStart) : '',
                    ACTIVE: subscription.status === 'active' || subscription.status === 'trialing',
                    ...(plan ? { PLAN: { connect: { ID: plan.ID } } } : {}),
                    ...(plan ? { HISTORY_PLAYS: { create: { QTD_PLAYS: 0, STATUS: subscription.status === 'trialing' ? 'teste' : 'ativo' } } } : {}),
                };
            }
        }
        // para teste clock tirar depois (tirar depois) aqui clock_1TLV5GHs4q3jg2YIfvnEZAAl
        const createCustomer = await stripe.customers.create({
            email,
            name,
            // test_clock: 'clock_1TLV5GHs4q3jg2YIfvnEZAAl',
        });
        // console.log('createStripeCustomer ?', createCustomer);
        return {
            STRIPE_CUSTOMER_ID: createCustomer.id,
            STRIPE_SUBSCRIPTION_ID: '',
            STRIPE_SUBSCRIPTION_STATUS: '',
            ACTIVE: false,
        };
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const createStripeFreeCustomer = async ({ email, planId, userId, price, }) => {
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
            },
        });
        return subscription;
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const generatedCheckout = async ({ email, planId, token, userId, price, }) => {
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
                    type: 'monthly_subscription',
                },
            },
        });
        return { LINK: session.url };
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const handleCheckoutSessionCompleted = async (event) => {
    try {
        console.log('handleCheckoutSessionCompleted - 1 ?', JSON.stringify(event.data.object));
        const idUser = event.data.object.client_reference_id;
        const stripeSubscriptionId = event.data.object.subscription;
        const stripeCustumerId = event.data.object.customer;
        const checkoutStatus = event.data.object.status;
        const metadata = event.data.object.metadata || undefined;
        let planId = undefined;
        if (checkoutStatus !== 'complete')
            return;
        if (metadata) {
            const plan = await planService.getPlanByStripeId(metadata.planId); //errado
            if (plan) {
                planId = plan.ID;
            }
        }
        await userService.update(idUser, {
            ACTIVE: true,
            STRIPE_CUSTOMER_ID: stripeCustumerId,
            STRIPE_SUBSCRIPTION_ID: stripeSubscriptionId,
            ...(planId ? { PLAN: { connect: { ID: planId } } } : {}),
        });
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const handleSubscriptionFinishedTrial = async ({ email, stripeSubscriptionId, planId, userId, price, }) => {
    try {
        const customer = await getStripeCustomerByEmail(email);
        if (!customer) {
            throw new CustomError('Cliente não encontrado para o email fornecido', StatusCodes.NOT_FOUND);
        }
        const finishTrial = await stripe.subscriptions.update(stripeSubscriptionId, {
            trial_end: 'now',
            billing_cycle_anchor: 'now',
            proration_behavior: 'create_prorations',
            metadata: {
                userId,
                planId,
                type: 'monthly_subscription',
            },
        });
        return finishTrial;
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const handleSubscriptionSessionCompleted = async (event) => {
    try {
        const subscriptionStatus = event.data.object.status;
        const stripeCustumerId = event.data.object.customer;
        const stripeSubscriptionId = event.data.object.id;
        const trialEnd = event.data.object.trial_end;
        const trialStart = event.data.object.trial_start;
        const currentPeriodStart = event.data.object.current_period_start;
        const currentPeriodEnd = event.data.object.current_period_end;
        const data = event.data.object.items.data[0];
        const user = await userService.showStripeCustomerId(stripeCustumerId);
        if (user && data) {
            const plan = await planService.getPlanByStripeId(data.plan.product);
            await userService.update(user.ID, {
                STRIPE_SUBSCRIPTION_ID: stripeSubscriptionId,
                STRIPE_SUBSCRIPTION_STATUS: subscriptionStatus,
                ACTIVE: subscriptionStatus === 'active' || subscriptionStatus === 'trialing',
                ...(trialEnd ? { STRIPE_TRIAL_END: formatNummberForDate(trialEnd) } : {}),
                ...(trialStart ? { STRIPE_TRIAL_START: formatNummberForDate(trialStart) } : {}),
                ...(currentPeriodStart
                    ? { STRIPE_CURRENT_PERIOD_START: formatNummberForDate(currentPeriodStart) }
                    : {}),
                ...(currentPeriodEnd
                    ? { STRIPE_CURRENT_PERIOD_END: formatNummberForDate(currentPeriodEnd) }
                    : {}),
                ...(plan ? { PLAN: { connect: { ID: plan.ID } } } : {}),
            });
        }
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const handleCancelPlan = async (event) => {
    try {
        const stripeCustumerId = event.data.object.customer;
        const subscriptionStatus = event.data.object.status;
        const user = await userService.showStripeCustomerId(stripeCustumerId);
        if (user) {
            await userService.update(user.ID, {
                STRIPE_SUBSCRIPTION_STATUS: subscriptionStatus,
                ACTIVE: subscriptionStatus === 'active' || subscriptionStatus === 'trialing',
                PLAN: { disconnect: true },
            });
            const activeHistoryPlays = user.HISTORY_PLAYS.find(history => history.STATUS === 'ativo');
            if (activeHistoryPlays && user.PLAN && user.PLAN.PLAYS < activeHistoryPlays.QTD_PLAYS) {
                const playDifference = activeHistoryPlays.QTD_PLAYS - user.PLAN.PLAYS;
                const value = Math.floor(playDifference * user.PLAN.PLAYS_PRICE * 100) / 100;
                await stripe.invoiceItems.create({
                    customer: stripeCustumerId,
                    amount: value,
                    currency: 'brl',
                    description: `Cobrança por excesso de ${playDifference} plays do plano ${user.PLAN.PLAN}`,
                    metadata: {
                        userId: user.ID,
                        historyPlaysId: activeHistoryPlays.ID,
                        type: 'excess_plays',
                    },
                });
                await stripe.invoices.create({
                    customer: stripeCustumerId,
                    auto_advance: true,
                });
                await historyPlaysService.update(activeHistoryPlays.ID, {
                    STATUS: 'aguardando pagamento',
                    PRICE_MONTH: value,
                });
            }
            if (activeHistoryPlays && user.PLAN && user.PLAN.PLAYS >= activeHistoryPlays.QTD_PLAYS) {
                await historyPlaysService.update(activeHistoryPlays.ID, {
                    STATUS: 'isento',
                    PRICE_MONTH: 0,
                });
            }
        }
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const handleInvoicePaid = async (event) => {
    try {
        console.log('handleInvoicePaid - 3 ?', JSON.stringify(event.data.object));
        const stripeCustumerId = event.data.object.customer;
        const paid = event.data.object.paid;
        const line = event.data.object.lines.data;
        const user = await userService.showStripeCustomerId(stripeCustumerId);
        if (line.length > 0 && user) {
            for (const item of line) {
                const metadata = item.metadata;
                if (metadata && metadata.type === 'monthly_subscription' && metadata.planId) {
                    const periodend = item.period.end;
                    const periodStart = item.period.start;
                    await userService.update(user.ID, {
                        ...(periodend ? { STRIPE_CURRENT_PERIOD_END: formatNummberForDate(periodend) } : {}),
                        ...(periodStart
                            ? { STRIPE_CURRENT_PERIOD_START: formatNummberForDate(periodStart) }
                            : {}),
                        ACTIVE: paid,
                    });
                    if (user.HISTORY_PLAYS.length === 0) {
                        await userService.update(user.ID, {
                            HISTORY_PLAYS: {
                                create: {
                                    QTD_PLAYS: 0,
                                    PRICE_MONTH: 0,
                                    STATUS: user.STRIPE_SUBSCRIPTION_STATUS === 'trialing' ? 'teste' : 'ativo',
                                },
                            },
                        });
                    }
                    if (user.HISTORY_PLAYS.length > 0) {
                        const currentPlays = user.HISTORY_PLAYS.find(history => history.STATUS === 'ativo');
                        if (currentPlays && user.PLAN && user.PLAN.PLAYS < currentPlays.QTD_PLAYS) {
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
                                },
                            });
                            await historyPlaysService.update(currentPlays.ID, {
                                STATUS: 'aguardando pagamento',
                                PRICE_MONTH: value,
                            });
                        }
                        if (currentPlays && user.PLAN && user.PLAN.PLAYS >= currentPlays.QTD_PLAYS) {
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
                        });
                    }
                }
                if (metadata &&
                    metadata.type === 'excess_plays' &&
                    metadata.userId &&
                    metadata.historyPlaysId) {
                    await historyPlaysService.update(metadata.historyPlaysId, {
                        STATUS: 'pago',
                    });
                }
            }
        }
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const handleInvoicePaymentFailed = async (event) => {
    try {
        const stripeCustumerId = event.data.object.customer;
        const line = event.data.object.lines.data;
        const user = await userService.showStripeCustomerId(stripeCustumerId);
        if (!user)
            return;
        for (const item of line) {
            const metadata = item.metadata;
            if (metadata && metadata.type === 'excess_plays' && metadata.historyPlaysId) {
                await historyPlaysService.update(metadata.historyPlaysId, {
                    STATUS: 'falhou',
                });
            }
        }
        await userService.update(user.ID, {
            ACTIVE: false,
        });
    }
    catch (error) {
        handleStripeError(error);
    }
};
export const createPortalCustomer = async (idCustomer) => {
    const subscription = await stripe.billingPortal.sessions.create({
        customer: idCustomer,
        return_url: `${process.env.FRONTEND_URL}/acess`,
    });
    return { PORTAL_URL: subscription.url };
};
// para deletar depois (depois) aqui clock_1TLV5GHs4q3jg2YIfvnEZAAl
// export const advanceTestClock = async (clockId: string, targetTimestamp?: number) => {
//   try {
//     const clock = await stripe.testHelpers.testClocks.retrieve(clockId);
//     // Se não especificar uma data, avança para o próximo mês
//     const currentTime = clock.frozen_time;
//     const targetTime = targetTimestamp || getNextMonthTimestamp(currentTime);
//     const advancedClock = await stripe.testHelpers.testClocks.advance(clockId, {
//       frozen_time: targetTime,
//     });
//     console.log('Test clock avançado para:', new Date(targetTime * 1000));
//     return advancedClock;
//   } catch (error) {
//     handleStripeError(error);
//   }
// }
// export const getNextMonthTimestamp = (currentTimestamp: number) => {
//   const currentDate = new Date(currentTimestamp * 1000);
//   const nextMonth = new Date(currentDate);
//   nextMonth.setMonth(nextMonth.getMonth() + 1);
//   return Math.floor(nextMonth.getTime() / 1000);
// }
//# sourceMappingURL=stripe.js.map
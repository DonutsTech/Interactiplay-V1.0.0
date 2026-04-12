import { Request, Response } from 'express';
import { eventService } from '../../services/stripe/event.service';
import { userService } from '../../services/user';
import { stripe } from '../../utils/stripe';

import {
  handleCancelPlan,
  handleCheckoutSessionCompleted,
  handleInvoicePaid,
  handleInvoicePaymentFailed,
  handleSubscriptionSessionCompleted,
} from '../../utils/stripe';

class WebhookController {
  async webhook(request: Request, response: Response) {
    const signature = request.headers['stripe-signature'] as string;

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        request.body, // ⚠️ precisa ser raw buffer
        signature,
        process.env.STRIPE_WEBHOOK_SECRET as string,
      );
    } catch (error) {
      return response.status(400).send('Webhook Error');
    }

    // 🔥 IDEMPOTÊNCIA
    const isNewEvent = await eventService.createIfNotExists(event);

    if (!isNewEvent) {
      return response.json({ received: true });
    }

    const getCustomerId = (event: any): string | null => {
      const object = event.data.object as any;
      return object.customer || object.customer_id || null;
    };

    try {
      switch (event.type) {
        // 🟢 Checkout finalizado
        case 'checkout.session.completed': {
          await handleCheckoutSessionCompleted(event);
          break;
        }

        // 🔄 Assinatura criada/atualizada
        case 'customer.subscription.created':
        case 'customer.subscription.updated': {
          const customerId = getCustomerId(event);
          if (!customerId) break;

          const user = await userService.showStripeCustomerId(customerId);
          if (!user) break;

          await handleSubscriptionSessionCompleted(event);
          break;
        }

        // ❌ Assinatura cancelada
        case 'customer.subscription.deleted': {
          const customerId = getCustomerId(event);
          if (!customerId) break;

          const user = await userService.showStripeCustomerId(customerId);
          if (!user) break;

          await handleCancelPlan(event);
          break;
        }

        // 💰 Pagamento aprovado
        case 'invoice.payment_succeeded': {
          const customerId = getCustomerId(event);
          if (!customerId) break;

          const user = await userService.showStripeCustomerId(customerId);
          if (!user) break;

          await handleInvoicePaid(event);
          break;
        }

        // ❌ Pagamento falhou
        case 'invoice.payment_failed': {
          const customerId = getCustomerId(event);
          if (!customerId) break;

          const user = await userService.showStripeCustomerId(customerId);
          if (!user) break;

          await handleInvoicePaymentFailed(event);
          break;
        }

        // 👀 Cliente abriu portal
        case 'billing_portal.session.created':
          console.log('Cliente acessou o portal');
          break;

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      return response.json({ received: true });
    } catch (error) {
      console.error('Erro no webhook:', error);
      return response.status(500).send('Internal Error');
    }
  }
}

export const webhookController = new WebhookController();

import type { NextFunction, Request, Response } from 'express';
import { userService } from '../../services/user';
import {
  handleCancelPlan,
  handleCheckoutSessionCompleted,
  handleInvoicePaid,
  handleInvoicePaymentFailed,
  handleSubscriptionSessionCompleted,
  stripe,
} from '../../utils/stripe';


class WebhookController {
  async webhook(request: Request, response: Response, next: NextFunction) {
    const signature = request.headers['stripe-signature'] as string;

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET as string,
      );
    } catch (error) {
      response.status(400).send('Webhook Error');
      return;
    }

    const getUserFromEvent = async () => {
      const obj = event.data.object as any;
      const customerId =  obj.customer || obj.customerId || obj.client || obj?.subscription_details?.customer || '';
      return await userService.showCustomerId(customerId);
    }

    const user = await getUserFromEvent();

    switch (event.type) {
      case 'checkout.session.completed': // primeiro pagamento
        await handleCheckoutSessionCompleted(event);
        break;
      case 'customer.subscription.created': // sempre que uma nova assinatura é criada para um cliente na Stripe.
      case 'customer.subscription.updated':
        if (!user) {
          // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
            console.log("⚠️ User não encontrado, ignorando evento até receber customerId.");
          break;
        }

        await handleSubscriptionSessionCompleted(event);
        break;
      case 'customer.subscription.deleted': // deleta o plano
        if (!user) {
          // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
            console.log("⚠️ User não encontrado, ignorando evento até receber customerId.");
          break;
        }
        await handleCancelPlan(event);
        break;
      case 'invoice.paid': // cada ciclo de cobrança gera uma nova invoice
        if (!user) {
          // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
            console.log("⚠️ User não encontrado, ignorando evento até receber customerId.");
          break;
        }
        await handleInvoicePaid(event);
        break;
      case 'invoice.payment_failed': // falha de pagamento
        if (!user) {
          // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
            console.warn("⚠️ User não encontrado, ignorando evento até receber customerId.");
          break;
        }
        await handleInvoicePaymentFailed(event);
        break;
      case 'product.created': //quando você cria um produto novo.
        break;
      case 'product.updated': //quando edita (ex: muda o nome de "Plano Básico" para "Essencial").
        break;
      case 'product.deleted': //se excluir o produto.
        break;
      case 'price.created': // quando cria um novo preço para um produto
        break;
      case 'price.updated': // quando muda algo no preço (ex: ativa/desativa).
        break;
      case 'price.deleted': // se excluir o preço.
        break;
      case 'billing_portal.session.created': // quando o cliente acessa o portal de faturamento
        console.log('Cliente acessou o portal de faturamento');
        // Aqui você pode adicionar lógica para rastrear quando clientes acessam o portal
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.send();
  }
}

export const webhookController = new WebhookController();

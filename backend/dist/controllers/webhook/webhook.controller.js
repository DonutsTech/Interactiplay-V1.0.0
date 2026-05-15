import { stripeEventService } from '../../services/stripeEvent';
import { userService } from '../../services/user';
import { handleCancelPlan, handleCheckoutSessionCompleted, handleInvoicePaid, handleInvoicePaymentFailed, handleSubscriptionSessionCompleted, stripe, } from '../../utils/stripe';
class WebhookController {
    async webhook(request, response, next) {
        const signature = request.headers['stripe-signature'];
        let event;
        try {
            event = stripe.webhooks.constructEvent(request.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
        }
        catch (error) {
            response.status(400).send('Webhook Error');
            return;
        }
        const isNewEvent = await stripeEventService.createIfNotExists(event);
        if (!isNewEvent) {
            return response.json({ received: true });
        }
        const getCustomerId = (event) => {
            const object = event.data.object;
            if ('customer' in object) {
                return object.customer;
            }
            if ('customer_id' in object) {
                return object.customer_id;
            }
            return null;
        };
        const getUserFromEvent = async () => {
            const obj = event.data.object;
            const customerId = getCustomerId(event);
            if (!customerId) {
                console.warn('⚠️ Customer ID não encontrado no evento, ignorando.');
                return null;
            }
            return await userService.showStripeCustomerId(customerId);
        };
        const user = await getUserFromEvent();
        switch (event.type) {
            case 'checkout.session.completed': // primeiro pagamento
                await handleCheckoutSessionCompleted(event);
                break;
            case 'customer.subscription.created': // sempre que uma nova assinatura é criada para um cliente na Stripe.
            case 'customer.subscription.updated':
                if (!user) {
                    // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
                    console.log('⚠️ User não encontrado, ignorando evento até receber customerId.');
                    break;
                }
                await handleSubscriptionSessionCompleted(event);
                break;
            case 'customer.subscription.deleted': // deleta o plano
                if (!user) {
                    // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
                    console.log('⚠️ User não encontrado, ignorando evento até receber customerId.');
                    break;
                }
                await handleCancelPlan(event);
                break;
            case 'invoice.payment_succeeded': // cada ciclo de cobrança gera uma nova invoice
                if (!user) {
                    // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
                    console.log('⚠️ User não encontrado, ignorando evento até receber customerId.');
                    break;
                }
                await handleInvoicePaid(event);
                break;
            case 'invoice.payment_failed': // falha de pagamento
                if (!user) {
                    // Atualize os detalhes da assinatura do usuário no banco de dados, se necessário
                    console.warn('⚠️ User não encontrado, ignorando evento até receber customerId.');
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
            // Test Clock Events - disparados quando o test clock é avançado
            case 'test_helpers.test_clock.advancing':
                console.log('🕐 Test clock está sendo avançado:', {
                    clockId: event.data.object.id,
                    timestamp: event.data.object.frozen_time,
                    date: new Date((event.data.object.frozen_time || 0) * 1000).toISOString(),
                });
                break;
            case 'test_helpers.test_clock.ready':
                console.log('✅ Test clock avançado com sucesso:', {
                    clockId: event.data.object.id,
                    timestamp: event.data.object.frozen_time,
                    date: new Date((event.data.object.frozen_time || 0) * 1000).toISOString(),
                });
                break;
            case 'invoice.upcoming':
                console.log('📋 Fatura próxima detectada:', {
                    customerId: event.data.object.customer,
                    amount: event.data.object.amount_due,
                    currency: event.data.object.currency,
                    nextPaymentAttempt: event.data.object.next_payment_attempt,
                    date: new Date((event.data.object.next_payment_attempt || 0) * 1000).toISOString(),
                });
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        response.send();
    }
}
export const webhookController = new WebhookController();
//# sourceMappingURL=webhook.controller.js.map
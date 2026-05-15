import { raw } from "express";
import { webhookController } from "../../controllers/webhook/webhook.controller";
class WebhookRouter {
    static create(router) {
        router.post("/webhook", raw({ type: 'application/json' }), (request, response, next) => {
            webhookController.webhook(request, response, next);
        });
    }
}
export default WebhookRouter;
//# sourceMappingURL=index.js.map
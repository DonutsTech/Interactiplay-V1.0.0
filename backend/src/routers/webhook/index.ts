import { raw, type NextFunction, type Request, type Response, type Router } from "express";
import { webhookController } from "../../controllers/webhook/webhook.controller";

class WebhookRouter {
  public static create(router: Router): void {
    router.post("/webhook", raw({ type: 'application/json' }), (request: Request, response: Response, next: NextFunction) => {
      webhookController.webhook(request, response, next);
    });
  }
}

export default WebhookRouter;

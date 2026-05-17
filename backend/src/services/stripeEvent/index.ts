import type Stripe from "stripe";
import { stripeEventModel } from "../../models/stripeEvent";

class StripeEventService {
  async existById(id: string) {
    if (await stripeEventModel.count({ ID: id })) {
      return false;
    }
  }

  async createIfNotExists(event: Stripe.Event): Promise<boolean> {
    try {
      await this.existById(event.id);

      console.log("Stripe Event Received:", event.type, "ID:", event.id);

      const customerId = (event.data.object as any).customer || null;

      await stripeEventModel.create({
        data: {
          ID: event.id,
          TYPE: event.type,
          CUSTOMER_ID: customerId === null ? "" : String(customerId),
        }
      });

      return true;
    } catch (error: any) {
      throw error;
    }
  }
}

export const stripeEventService = new StripeEventService();

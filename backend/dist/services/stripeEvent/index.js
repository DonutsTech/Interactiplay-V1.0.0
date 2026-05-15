import { stripeEventModel } from "../../models/stripeEvent";
class StripeEventService {
    async existById(id) {
        if (await stripeEventModel.count({ ID: id })) {
            return false;
        }
    }
    async createIfNotExists(event) {
        try {
            await this.existById(event.id);
            const customerId = event.data.object.customer || null;
            await stripeEventModel.create({
                data: {
                    ID: event.id,
                    TYPE: event.type,
                    CUSTOMER_ID: customerId === null ? "" : String(customerId),
                }
            });
            return true;
        }
        catch (error) {
            throw error;
        }
    }
}
export const stripeEventService = new StripeEventService();
//# sourceMappingURL=index.js.map
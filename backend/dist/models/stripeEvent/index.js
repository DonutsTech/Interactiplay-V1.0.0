import { handlePrismaError } from "../../error";
import { prisma } from "../../prisma";
class StripeEventModel {
    async create(params) {
        try {
            return await prisma.stripe_events.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.stripe_events.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const stripeEventModel = new StripeEventModel();
//# sourceMappingURL=index.js.map
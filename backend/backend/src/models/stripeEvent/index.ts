import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/browser";
import { prisma } from "../../prisma";

class StripeEventModel {
  async create(params: Prisma.Stripe_eventsCreateArgs) {
    try {
      return await prisma.stripe_events.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Stripe_eventsWhereInput) {
    try {
      return await prisma.stripe_events.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const stripeEventModel = new StripeEventModel();

import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class PlanModel {
  async create(params: Prisma.PlanCreateArgs) {
    try {
      return await prisma.plan.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.PlanFindManyArgs) {
    try {
      return await prisma.plan.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.PlanFindFirstArgs) {
    try {
      return await prisma.plan.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.PlanWhereUniqueInput) {
    try {
      return await prisma.plan.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.PlanWhereInput) {
    try {
      return await prisma.plan.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.PlanUpdateArgs) {
    try {
      return await prisma.plan.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.PlanWhereInput) {
    try {
      return await prisma.plan.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const planModel = new PlanModel();

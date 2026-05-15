import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class AnalyticsModel {
  async create(params: Prisma.AnalyticsCreateArgs) {
    try {
      return await prisma.analytics.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.AnalyticsFindManyArgs) {
    try {
      return await prisma.analytics.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.AnalyticsFindFirstArgs) {
    try {
      return await prisma.analytics.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.AnalyticsWhereUniqueInput) {
    try {
      return await prisma.analytics.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.AnalyticsWhereInput) {
    try {
      return await prisma.analytics.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.AnalyticsUpdateArgs) {
    try {
      return await prisma.analytics.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.AnalyticsWhereInput) {
    try {
      return await prisma.analytics.count({
        where: where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const analyticsModel = new AnalyticsModel();

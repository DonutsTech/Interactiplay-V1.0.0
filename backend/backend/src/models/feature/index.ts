import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class FeatureModel {
  async create(params: Prisma.FeatureCreateArgs) {
    try {
      return await prisma.feature.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.FeatureFindManyArgs) {
    try {
      return await prisma.feature.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.FeatureFindFirstArgs) {
    try {
      return await prisma.feature.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.FeatureWhereUniqueInput) {
    try {
      return await prisma.feature.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.FeatureWhereInput) {
    try {
      return await prisma.feature.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.FeatureUpdateArgs) {
    try {
      return await prisma.feature.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.FeatureWhereInput) {
    try {
      return await prisma.feature.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class ModelTimeModel {
  async create(params: Prisma.Model_TimeCreateArgs) {
    try {
      return await prisma.model_Time.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.Model_TimeFindManyArgs) {
    try {
      return await prisma.model_Time.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.Model_TimeFindFirstArgs) {
    try {
      return await prisma.model_Time.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.Model_TimeWhereUniqueInput) {
    try {
      return await prisma.model_Time.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.Model_TimeWhereInput) {
    try {
      return await prisma.model_Time.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }


  async updateBy(params: Prisma.Model_TimeUpdateArgs) {
    try {
      return await prisma.model_Time.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Model_TimeWhereInput) {
    try {
      return await prisma.model_Time.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const modelTimeModel = new ModelTimeModel();

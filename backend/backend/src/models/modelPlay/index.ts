import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class ModelPlayModel {
  async create(params: Prisma.Model_PlayCreateArgs) {
    try {
      return await prisma.model_Play.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.Model_PlayFindManyArgs) {
    try {
      return await prisma.model_Play.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.Model_PlayFindFirstArgs) {
    try {
      return await prisma.model_Play.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }


  async deleteBy(where: Prisma.Model_PlayWhereUniqueInput) {
    try {
      return await prisma.model_Play.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.Model_PlayWhereInput) {
    try {
      return await prisma.model_Play.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.Model_PlayUpdateArgs) {
    try {
      return await prisma.model_Play.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Model_PlayWhereInput) {
    try {
      return await prisma.model_Play.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const modelPlay = new ModelPlayModel();

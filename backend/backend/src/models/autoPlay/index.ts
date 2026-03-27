import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class AutoPlayModel {
  async create(params: Prisma.Auto_PlayCreateArgs) {
    try {
      return await prisma.auto_Play.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.Auto_PlayFindManyArgs) {
    try {
      return await prisma.auto_Play.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.Auto_PlayFindFirstArgs) {
    try {
      return await prisma.auto_Play.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.Auto_PlayWhereUniqueInput) {
    try {
      return await prisma.auto_Play.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.Auto_PlayWhereInput) {
    try {
      return await prisma.auto_Play.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.Auto_PlayUpdateArgs) {
    try {
      return await prisma.auto_Play.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Auto_PlayWhereInput) {
    try {
      return await prisma.auto_Play.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class GanchoModel {
  async create(params: Prisma.GanchoCreateArgs) {
    try {
      return await prisma.gancho.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.GanchoFindManyArgs) {
    try {
      return await prisma.gancho.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.GanchoFindFirstArgs) {
    try {
      return await prisma.gancho.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.GanchoWhereUniqueInput) {
    try {
      return await prisma.gancho.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.GanchoWhereInput) {
    try {
      return await prisma.gancho.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.GanchoUpdateArgs) {
    try {
      return await prisma.gancho.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.GanchoWhereInput) {
    try {
      return await prisma.gancho.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const ganchoModel = new GanchoModel();

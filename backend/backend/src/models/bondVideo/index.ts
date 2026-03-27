import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class BondVideoModel {
  async create(params: Prisma.Bond_VideoCreateArgs) {
    try {
      return await prisma.bond_Video.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.Bond_VideoFindManyArgs) {
    try {
      return await prisma.bond_Video.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.Bond_VideoFindFirstArgs) {
    try {
      return await prisma.bond_Video.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.Bond_VideoWhereUniqueInput) {
    try {
      return await prisma.bond_Video.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.Bond_VideoWhereInput) {
    try {
      return await prisma.bond_Video.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.Bond_VideoUpdateArgs) {
    try {
      return await prisma.bond_Video.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Bond_VideoWhereInput) {
    try {
      return await prisma.bond_Video.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const bondVideoModel = new BondVideoModel();

import { handlePrismaError } from '../../error';
import type { Prisma } from '../../generated/prisma/client';
import { prisma } from '../../prisma';

class BondModel {
  async create(params: Prisma.BondCreateArgs) {
    try {
      return await prisma.bond.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.BondFindManyArgs) {
    try {
      return await prisma.bond.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.BondFindFirstArgs) {
    try {
      return await prisma.bond.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.BondWhereUniqueInput) {
    try {
      return await prisma.bond.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.BondWhereInput) {
    try {
      return await prisma.bond.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.BondUpdateArgs) {
    try {
      return await prisma.bond.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.BondWhereInput) {
    try {
      return await prisma.bond.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const bondModel = new BondModel();

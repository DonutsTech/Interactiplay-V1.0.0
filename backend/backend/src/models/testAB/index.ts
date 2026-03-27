import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class TestABModel {
  async create(params: Prisma.Test_ABCreateArgs) {
    try {
      return await prisma.test_AB.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.Test_ABFindManyArgs) {
    try {
      return await prisma.test_AB.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.Test_ABFindFirstArgs) {
    try {
      return await prisma.test_AB.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.Test_ABWhereUniqueInput) {
    try {
      return await prisma.test_AB.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.Test_ABWhereInput) {
    try {
      return await prisma.test_AB.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.Test_ABUpdateArgs) {
    try {
      return await prisma.test_AB.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Test_ABWhereInput) {
    try {
      return await prisma.test_AB.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const testABModel = new TestABModel();

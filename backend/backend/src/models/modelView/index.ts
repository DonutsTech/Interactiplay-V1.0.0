import { handlePrismaError } from '../../error';
import type { Prisma } from '../../generated/prisma/browser';
import { prisma } from '../../prisma';

class ModelViewModel {
  async create(params: Prisma.Model_ViewsCreateArgs) {
    try {
      return await prisma.model_Views.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.Model_ViewsFindManyArgs) {
    try {
      return await prisma.model_Views.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy<T extends Prisma.Model_ViewsInclude = {}>(find: Prisma.Model_ViewsFindFirstArgs) {
    try {
      return (await prisma.model_Views.findFirst(find)) as Prisma.Model_ViewsGetPayload<{
        include: T;
      }> | null;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.Model_ViewsWhereUniqueInput) {
    try {
      return await prisma.model_Views.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.Model_ViewsWhereInput) {
    try {
      return await prisma.model_Views.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.Model_ViewsUpdateArgs) {
    try {
      return await prisma.model_Views.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Model_ViewsWhereInput) {
    try {
      return await prisma.model_Views.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const modelViewsModel = new ModelViewModel();

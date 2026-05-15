import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class ThumbModel {
  async create(params: Prisma.ThumbCreateArgs) {
    try {
      return await prisma.thumb.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.ThumbFindManyArgs) {
    try {
      return await prisma.thumb.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.ThumbFindFirstArgs) {
    try {
      return await prisma.thumb.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.ThumbWhereUniqueInput) {
    try {
      return await prisma.thumb.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.ThumbWhereInput) {
    try {
      return await prisma.thumb.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.ThumbUpdateArgs) {
    try {
      return await prisma.thumb.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.ThumbWhereInput) {
    try {
      return await prisma.thumb.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const thumbModel = new ThumbModel();

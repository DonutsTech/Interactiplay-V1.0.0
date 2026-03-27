import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class PixelModel {
  async create(params: Prisma.PixelCreateArgs) {
    try {
      return await prisma.pixel.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.PixelFindManyArgs) {
    try {
      return await prisma.pixel.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.PixelFindFirstArgs) {
    try {
      return await prisma.pixel.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.PixelWhereUniqueInput) {
    try {
      return await prisma.pixel.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.PixelWhereInput) {
    try {
      return await prisma.pixel.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.PixelUpdateArgs) {
    try {
      return await prisma.pixel.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.PixelWhereInput) {
    try {
      return await prisma.pixel.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const pixelModel = new PixelModel();

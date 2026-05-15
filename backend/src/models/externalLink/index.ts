import { handlePrismaError } from '../../error';
import type { Prisma } from '../../generated/prisma/client';
import { prisma } from '../../prisma';

class ExternalLinkModel {
  async create(params: Prisma.External_LinkCreateArgs) {
    try {
      return await prisma.external_Link.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.External_LinkFindManyArgs) {
    try {
      return await prisma.external_Link.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.External_LinkFindFirstArgs) {
    try {
      return await prisma.external_Link.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.External_LinkWhereUniqueInput) {
    try {
      return await prisma.external_Link.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.External_LinkWhereInput) {
    try {
      return await prisma.external_Link.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.External_LinkUpdateArgs) {
    try {
      return await prisma.external_Link.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.External_LinkWhereInput) {
    try {
      return await prisma.external_Link.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const externalLinkModel = new ExternalLinkModel();

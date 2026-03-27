import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class Campaign {
  async create(params: Prisma.CampaignCreateArgs) {
    try {
      return await prisma.campaign.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.CampaignFindManyArgs) {
    try {
      return await prisma.campaign.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.CampaignFindFirstArgs) {
    try {
      return await prisma.campaign.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.CampaignWhereUniqueInput) {
    try {
      return await prisma.campaign.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.CampaignWhereInput) {
    try {
      return await prisma.campaign.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.CampaignUpdateArgs) {
    try {
      return await prisma.campaign.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.CampaignWhereInput) {
    try {
      return await prisma.campaign.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const campaignModel = new Campaign();

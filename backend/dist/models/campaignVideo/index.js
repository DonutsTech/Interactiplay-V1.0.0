import { handlePrismaError } from '../../error';
import { prisma } from '../../prisma';
class CampaignVideoModel {
    async create(params) {
        try {
            return await prisma.campaign_Video.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.campaign_Video.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.campaign_Video.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.campaign_Video.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.campaign_Video.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.campaign_Video.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.campaign_Video.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const campaignVideoModel = new CampaignVideoModel();
//# sourceMappingURL=index.js.map
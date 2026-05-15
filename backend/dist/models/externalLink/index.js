import { handlePrismaError } from '../../error';
import { prisma } from '../../prisma';
class ExternalLinkModel {
    async create(params) {
        try {
            return await prisma.external_Link.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.external_Link.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.external_Link.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.external_Link.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.external_Link.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.external_Link.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.external_Link.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const externalLinkModel = new ExternalLinkModel();
//# sourceMappingURL=index.js.map
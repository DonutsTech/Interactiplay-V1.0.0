import { handlePrismaError } from '../../error';
import { prisma } from '../../prisma';
class ModelViewModel {
    async create(params) {
        try {
            return await prisma.model_Views.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.model_Views.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return (await prisma.model_Views.findFirst(find));
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.model_Views.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.model_Views.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.model_Views.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.model_Views.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const modelViewsModel = new ModelViewModel();
//# sourceMappingURL=index.js.map
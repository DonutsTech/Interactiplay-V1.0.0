import { handlePrismaError } from "../../error";
import { prisma } from "../../prisma";
class PixelModel {
    async create(params) {
        try {
            return await prisma.pixel.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.pixel.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.pixel.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.pixel.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.pixel.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.pixel.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.pixel.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const pixelModel = new PixelModel();
//# sourceMappingURL=index.js.map
import { handlePrismaError } from "../../error";
import { prisma } from "../../prisma";
class BondVideoModel {
    async create(params) {
        try {
            return await prisma.bond_Video.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.bond_Video.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.bond_Video.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.bond_Video.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.bond_Video.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.bond_Video.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.bond_Video.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const bondVideoModel = new BondVideoModel();
//# sourceMappingURL=index.js.map
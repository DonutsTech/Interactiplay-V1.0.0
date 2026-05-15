import type { Prisma } from "../../generated/prisma/client";
declare class ThumbModel {
    create(params: Prisma.ThumbCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        IMAGE_URL: string;
    }>;
    findMany(params: Prisma.ThumbFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        IMAGE_URL: string;
    }[]>;
    findBy(find: Prisma.ThumbFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        IMAGE_URL: string;
    } | null>;
    deleteBy(where: Prisma.ThumbWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        IMAGE_URL: string;
    }>;
    deleteMany(where: Prisma.ThumbWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.ThumbUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        IMAGE_URL: string;
    }>;
    count(where: Prisma.ThumbWhereInput): Promise<number>;
}
export declare const thumbModel: ThumbModel;
export {};
//# sourceMappingURL=index.d.ts.map
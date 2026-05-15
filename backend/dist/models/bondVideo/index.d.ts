import type { Prisma } from "../../generated/prisma/client";
declare class BondVideoModel {
    create(params: Prisma.Bond_VideoCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_VIDEO_ID: string | null;
        BOND_ID: string | null;
    }>;
    findMany(params: Prisma.Bond_VideoFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_VIDEO_ID: string | null;
        BOND_ID: string | null;
    }[]>;
    findBy(find: Prisma.Bond_VideoFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_VIDEO_ID: string | null;
        BOND_ID: string | null;
    } | null>;
    deleteBy(where: Prisma.Bond_VideoWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_VIDEO_ID: string | null;
        BOND_ID: string | null;
    }>;
    deleteMany(where: Prisma.Bond_VideoWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.Bond_VideoUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_VIDEO_ID: string | null;
        BOND_ID: string | null;
    }>;
    count(where: Prisma.Bond_VideoWhereInput): Promise<number>;
}
export declare const bondVideoModel: BondVideoModel;
export {};
//# sourceMappingURL=index.d.ts.map
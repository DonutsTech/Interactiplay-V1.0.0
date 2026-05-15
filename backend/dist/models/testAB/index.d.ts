import type { Prisma } from "../../generated/prisma/client";
declare class TestABModel {
    create(params: Prisma.Test_ABCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }>;
    findMany(params: Prisma.Test_ABFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }[]>;
    findBy(find: Prisma.Test_ABFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    } | null>;
    deleteBy(where: Prisma.Test_ABWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }>;
    deleteMany(where: Prisma.Test_ABWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.Test_ABUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }>;
    count(where: Prisma.Test_ABWhereInput): Promise<number>;
}
export declare const testABModel: TestABModel;
export {};
//# sourceMappingURL=index.d.ts.map
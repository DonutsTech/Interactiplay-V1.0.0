import type { Prisma } from "../../generated/prisma/client";
declare class ModelTimeModel {
    create(params: Prisma.Model_TimeCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        MODEL_PLAYS_ID: string | null;
        TIMESCREEN: number;
    }>;
    findMany(params: Prisma.Model_TimeFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        MODEL_PLAYS_ID: string | null;
        TIMESCREEN: number;
    }[]>;
    findBy(find: Prisma.Model_TimeFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        MODEL_PLAYS_ID: string | null;
        TIMESCREEN: number;
    } | null>;
    deleteBy(where: Prisma.Model_TimeWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        MODEL_PLAYS_ID: string | null;
        TIMESCREEN: number;
    }>;
    deleteMany(where: Prisma.Model_TimeWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.Model_TimeUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        MODEL_PLAYS_ID: string | null;
        TIMESCREEN: number;
    }>;
    count(where: Prisma.Model_TimeWhereInput): Promise<number>;
}
export declare const modelTimeModel: ModelTimeModel;
export {};
//# sourceMappingURL=index.d.ts.map
import type { Prisma } from "../../generated/prisma/client";
declare class HistoryPlaysModel {
    create(params: Prisma.History_PlaysCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }>;
    findMany(params: Prisma.History_PlaysFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }[]>;
    findBy(find: Prisma.History_PlaysFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    } | null>;
    deleteBy(where: Prisma.History_PlaysWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }>;
    deleteMany(where: Prisma.History_PlaysWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.History_PlaysUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }>;
    count(where: Prisma.History_PlaysWhereInput): Promise<number>;
}
export declare const historyPlaysModel: HistoryPlaysModel;
export {};
//# sourceMappingURL=index.d.ts.map
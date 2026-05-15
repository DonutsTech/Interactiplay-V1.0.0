import type { Prisma } from '../../generated/prisma/client';
declare class HistoryPlaysService {
    existsById(id: string): Promise<void>;
    create(data: Prisma.History_PlaysCreateInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }>;
    update(id: string, data: Prisma.History_PlaysUpdateInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }>;
    getHistoryPlaysByUserId(userId: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }[]>;
    testUpdate(id: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }>;
    historyPlayExistsByUserId(userId: string): Promise<boolean>;
    updateHistoryPlayForUser(userId: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        USER_ID: string | null;
    }>;
}
export declare const historyPlaysService: HistoryPlaysService;
export {};
//# sourceMappingURL=index.d.ts.map
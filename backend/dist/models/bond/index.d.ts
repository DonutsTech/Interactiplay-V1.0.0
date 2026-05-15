import type { Prisma } from '../../generated/prisma/client';
declare class BondModel {
    create(params: Prisma.BondCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        VIDEO_ID: string | null;
        X_POSITION: number;
        Y_POSITION: number;
        BUTTON: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        BUTTON_START: number;
        CONTINUITY_CAMPAING: number;
        CONTINUITY_TEST_AB: number;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }>;
    findMany(params: Prisma.BondFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        VIDEO_ID: string | null;
        X_POSITION: number;
        Y_POSITION: number;
        BUTTON: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        BUTTON_START: number;
        CONTINUITY_CAMPAING: number;
        CONTINUITY_TEST_AB: number;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }[]>;
    findBy(find: Prisma.BondFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        VIDEO_ID: string | null;
        X_POSITION: number;
        Y_POSITION: number;
        BUTTON: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        BUTTON_START: number;
        CONTINUITY_CAMPAING: number;
        CONTINUITY_TEST_AB: number;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    } | null>;
    deleteBy(where: Prisma.BondWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        VIDEO_ID: string | null;
        X_POSITION: number;
        Y_POSITION: number;
        BUTTON: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        BUTTON_START: number;
        CONTINUITY_CAMPAING: number;
        CONTINUITY_TEST_AB: number;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }>;
    deleteMany(where: Prisma.BondWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.BondUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        VIDEO_ID: string | null;
        X_POSITION: number;
        Y_POSITION: number;
        BUTTON: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        BUTTON_START: number;
        CONTINUITY_CAMPAING: number;
        CONTINUITY_TEST_AB: number;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }>;
    count(where: Prisma.BondWhereInput): Promise<number>;
}
export declare const bondModel: BondModel;
export {};
//# sourceMappingURL=index.d.ts.map
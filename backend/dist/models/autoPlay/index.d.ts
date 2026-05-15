import type { Prisma } from '../../generated/prisma/client';
declare class AutoPlayModel {
    create(params: Prisma.Auto_PlayCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        SECOND: number;
        ATIVE: boolean;
    }>;
    findMany(params: Prisma.Auto_PlayFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        SECOND: number;
        ATIVE: boolean;
    }[]>;
    findBy(find: Prisma.Auto_PlayFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        SECOND: number;
        ATIVE: boolean;
    } | null>;
    deleteBy(where: Prisma.Auto_PlayWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        SECOND: number;
        ATIVE: boolean;
    }>;
    deleteMany(where: Prisma.Auto_PlayWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.Auto_PlayUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        SECOND: number;
        ATIVE: boolean;
    }>;
    count(where: Prisma.Auto_PlayWhereInput): Promise<number>;
}
export declare const autoPlayModel: AutoPlayModel;
export {};
//# sourceMappingURL=index.d.ts.map
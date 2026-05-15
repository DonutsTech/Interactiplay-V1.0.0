import type { Prisma } from '../../generated/prisma/client';
declare class Campaign {
    create(params: Prisma.CampaignCreateArgs): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CORS: string;
        FEATURE_ID: string | null;
        ANALYTICS_ID: string | null;
    }>;
    findMany<T extends Prisma.CampaignInclude = {}>(params: Prisma.CampaignFindManyArgs): Promise<[] | ({ [K in keyof T as (object & T)[K] extends false | {
        ifUndefined<T_1>(value: T_1 | undefined): T_1 | /*elided*/ any;
    } | null | undefined ? never : K]: (object & T)[K] extends object ? Prisma.$CampaignPayload<import("@prisma/client/runtime/client").DefaultArgs> extends infer T_1 ? T_1 extends Prisma.$CampaignPayload<import("@prisma/client/runtime/client").DefaultArgs> ? T_1 extends import("@prisma/client/runtime/client").SelectablePayloadFields<K, (infer O)[]> ? O extends import("@prisma/client/runtime/client").OperationPayload ? import("@prisma/client/runtime/client").GetFindResult<O, (object & T)[K], {}>[] : never : T_1 extends import("@prisma/client/runtime/client").SelectablePayloadFields<K, infer O_1 | null> ? O_1 extends import("@prisma/client/runtime/client").OperationPayload ? import("@prisma/client/runtime/client").GetFindResult<O_1, (object & T)[K], {}> | (import("@prisma/client/runtime/client").SelectField<T_1, K> & null) : never : K extends "_count" ? import("@prisma/client/runtime/client").GetFindResult<T_1, (object & T)[K], {}> extends infer T_2 ? { [K_2 in keyof T_2]: number; } : never : never : never : never : Prisma.$CampaignPayload<import("@prisma/client/runtime/client").DefaultArgs> extends infer T_3 ? T_3 extends Prisma.$CampaignPayload<import("@prisma/client/runtime/client").DefaultArgs> ? T_3 extends import("@prisma/client/runtime/client").SelectablePayloadFields<K, (infer O_2)[]> ? O_2 extends import("@prisma/client/runtime/client").OperationPayload ? import("@prisma/client/runtime/client").Compute<(O_2 extends {
        scalars: infer S;
        composites: infer C;
    }[] ? (S & import("@prisma/client/runtime/client").UnwrapPayload<C>)[] : O_2 extends {
        scalars: infer S_1;
        composites: infer C_1;
    } | null ? (S_1 & import("@prisma/client/runtime/client").UnwrapPayload<C_1>) | import("@prisma/client/runtime/client").Select<null & O_2, null> | import("@prisma/client/runtime/client").Select<{
        scalars: infer S_1;
        composites: infer C_1;
    } & O_2, null> : never) extends infer T_4 ? { [K_3 in keyof T_4 as import("@prisma/client/runtime/client").OmitValue<{}, K_3> extends true ? never : K_3]: T_4[K_3]; } : never>[] : never : T_3 extends import("@prisma/client/runtime/client").SelectablePayloadFields<K, infer O_3 | null> ? O_3 extends import("@prisma/client/runtime/client").OperationPayload ? import("@prisma/client/runtime/client").Compute<(O_3 extends {
        scalars: infer S;
        composites: infer C;
    }[] ? (S & import("@prisma/client/runtime/client").UnwrapPayload<C>)[] : O_3 extends {
        scalars: infer S_1;
        composites: infer C_1;
    } | null ? (S_1 & import("@prisma/client/runtime/client").UnwrapPayload<C_1>) | import("@prisma/client/runtime/client").Select<null & O_3, null> | import("@prisma/client/runtime/client").Select<{
        scalars: infer S_1;
        composites: infer C_1;
    } & O_3, null> : never) extends infer T_5 ? { [K_4 in keyof T_5 as import("@prisma/client/runtime/client").OmitValue<{}, K_4> extends true ? never : K_4]: T_5[K_4]; } : never> | (import("@prisma/client/runtime/client").SelectField<T_3, K> & null) : never : T_3 extends {
        scalars: { [k in K]: infer O_4; };
    } ? O_4 : K extends "_count" ? T_3["objects"] extends infer T_6 ? { [K_5 in keyof T_6]: number; } : never : never : never : never; } & {
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CORS: string;
        FEATURE_ID: string | null;
        ANALYTICS_ID: string | null;
    })[]>;
    findBy<T extends Prisma.CampaignInclude = {}>(find: Prisma.CampaignFindFirstArgs): Promise<Prisma.CampaignGetPayload<{
        include: T;
    }> | null>;
    deleteBy(where: Prisma.CampaignWhereUniqueInput): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CORS: string;
        FEATURE_ID: string | null;
        ANALYTICS_ID: string | null;
    }>;
    deleteMany(where: Prisma.CampaignWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.CampaignUpdateArgs): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CORS: string;
        FEATURE_ID: string | null;
        ANALYTICS_ID: string | null;
    }>;
    count(where: Prisma.CampaignWhereInput): Promise<number>;
}
export declare const campaignModel: Campaign;
export {};
//# sourceMappingURL=index.d.ts.map
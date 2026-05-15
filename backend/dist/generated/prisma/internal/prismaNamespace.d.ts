import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.5.0
 * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Plan: "Plan";
    readonly User: "User";
    readonly History_Plays: "History_Plays";
    readonly Video: "Video";
    readonly Campaign: "Campaign";
    readonly Analytics: "Analytics";
    readonly Model_Views: "Model_Views";
    readonly Model_Play: "Model_Play";
    readonly Model_Time: "Model_Time";
    readonly Test_AB: "Test_AB";
    readonly Campaign_Video: "Campaign_Video";
    readonly Bond_Video: "Bond_Video";
    readonly Bond: "Bond";
    readonly Feature: "Feature";
    readonly Auto_Play: "Auto_Play";
    readonly Thumb: "Thumb";
    readonly Gancho: "Gancho";
    readonly Timeline: "Timeline";
    readonly External_Link: "External_Link";
    readonly Pixel: "Pixel";
    readonly Stripe_events: "Stripe_events";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "plan" | "user" | "history_Plays" | "video" | "campaign" | "analytics" | "model_Views" | "model_Play" | "model_Time" | "test_AB" | "campaign_Video" | "bond_Video" | "bond" | "feature" | "auto_Play" | "thumb" | "gancho" | "timeline" | "external_Link" | "pixel" | "stripe_events";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Plan: {
            payload: Prisma.$PlanPayload<ExtArgs>;
            fields: Prisma.PlanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findFirst: {
                    args: Prisma.PlanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findMany: {
                    args: Prisma.PlanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                create: {
                    args: Prisma.PlanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                createMany: {
                    args: Prisma.PlanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                delete: {
                    args: Prisma.PlanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                update: {
                    args: Prisma.PlanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                upsert: {
                    args: Prisma.PlanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                aggregate: {
                    args: Prisma.PlanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlan>;
                };
                groupBy: {
                    args: Prisma.PlanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        History_Plays: {
            payload: Prisma.$History_PlaysPayload<ExtArgs>;
            fields: Prisma.History_PlaysFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.History_PlaysFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.History_PlaysFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>;
                };
                findFirst: {
                    args: Prisma.History_PlaysFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.History_PlaysFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>;
                };
                findMany: {
                    args: Prisma.History_PlaysFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>[];
                };
                create: {
                    args: Prisma.History_PlaysCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>;
                };
                createMany: {
                    args: Prisma.History_PlaysCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.History_PlaysCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>[];
                };
                delete: {
                    args: Prisma.History_PlaysDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>;
                };
                update: {
                    args: Prisma.History_PlaysUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>;
                };
                deleteMany: {
                    args: Prisma.History_PlaysDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.History_PlaysUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.History_PlaysUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>[];
                };
                upsert: {
                    args: Prisma.History_PlaysUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$History_PlaysPayload>;
                };
                aggregate: {
                    args: Prisma.History_PlaysAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHistory_Plays>;
                };
                groupBy: {
                    args: Prisma.History_PlaysGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.History_PlaysGroupByOutputType>[];
                };
                count: {
                    args: Prisma.History_PlaysCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.History_PlaysCountAggregateOutputType> | number;
                };
            };
        };
        Video: {
            payload: Prisma.$VideoPayload<ExtArgs>;
            fields: Prisma.VideoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VideoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
                };
                findFirst: {
                    args: Prisma.VideoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
                };
                findMany: {
                    args: Prisma.VideoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>[];
                };
                create: {
                    args: Prisma.VideoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
                };
                createMany: {
                    args: Prisma.VideoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>[];
                };
                delete: {
                    args: Prisma.VideoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
                };
                update: {
                    args: Prisma.VideoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
                };
                deleteMany: {
                    args: Prisma.VideoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VideoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>[];
                };
                upsert: {
                    args: Prisma.VideoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
                };
                aggregate: {
                    args: Prisma.VideoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVideo>;
                };
                groupBy: {
                    args: Prisma.VideoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VideoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VideoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VideoCountAggregateOutputType> | number;
                };
            };
        };
        Campaign: {
            payload: Prisma.$CampaignPayload<ExtArgs>;
            fields: Prisma.CampaignFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CampaignFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                findFirst: {
                    args: Prisma.CampaignFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                findMany: {
                    args: Prisma.CampaignFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>[];
                };
                create: {
                    args: Prisma.CampaignCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                createMany: {
                    args: Prisma.CampaignCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>[];
                };
                delete: {
                    args: Prisma.CampaignDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                update: {
                    args: Prisma.CampaignUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                deleteMany: {
                    args: Prisma.CampaignDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CampaignUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>[];
                };
                upsert: {
                    args: Prisma.CampaignUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                aggregate: {
                    args: Prisma.CampaignAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCampaign>;
                };
                groupBy: {
                    args: Prisma.CampaignGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CampaignCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignCountAggregateOutputType> | number;
                };
            };
        };
        Analytics: {
            payload: Prisma.$AnalyticsPayload<ExtArgs>;
            fields: Prisma.AnalyticsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                findFirst: {
                    args: Prisma.AnalyticsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                findMany: {
                    args: Prisma.AnalyticsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>[];
                };
                create: {
                    args: Prisma.AnalyticsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                createMany: {
                    args: Prisma.AnalyticsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>[];
                };
                delete: {
                    args: Prisma.AnalyticsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                update: {
                    args: Prisma.AnalyticsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                deleteMany: {
                    args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>[];
                };
                upsert: {
                    args: Prisma.AnalyticsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                aggregate: {
                    args: Prisma.AnalyticsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalytics>;
                };
                groupBy: {
                    args: Prisma.AnalyticsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyticsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnalyticsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyticsCountAggregateOutputType> | number;
                };
            };
        };
        Model_Views: {
            payload: Prisma.$Model_ViewsPayload<ExtArgs>;
            fields: Prisma.Model_ViewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Model_ViewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Model_ViewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>;
                };
                findFirst: {
                    args: Prisma.Model_ViewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Model_ViewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>;
                };
                findMany: {
                    args: Prisma.Model_ViewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>[];
                };
                create: {
                    args: Prisma.Model_ViewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>;
                };
                createMany: {
                    args: Prisma.Model_ViewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Model_ViewsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>[];
                };
                delete: {
                    args: Prisma.Model_ViewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>;
                };
                update: {
                    args: Prisma.Model_ViewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>;
                };
                deleteMany: {
                    args: Prisma.Model_ViewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Model_ViewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Model_ViewsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>[];
                };
                upsert: {
                    args: Prisma.Model_ViewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_ViewsPayload>;
                };
                aggregate: {
                    args: Prisma.Model_ViewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModel_Views>;
                };
                groupBy: {
                    args: Prisma.Model_ViewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_ViewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Model_ViewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_ViewsCountAggregateOutputType> | number;
                };
            };
        };
        Model_Play: {
            payload: Prisma.$Model_PlayPayload<ExtArgs>;
            fields: Prisma.Model_PlayFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Model_PlayFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Model_PlayFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>;
                };
                findFirst: {
                    args: Prisma.Model_PlayFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Model_PlayFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>;
                };
                findMany: {
                    args: Prisma.Model_PlayFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>[];
                };
                create: {
                    args: Prisma.Model_PlayCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>;
                };
                createMany: {
                    args: Prisma.Model_PlayCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Model_PlayCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>[];
                };
                delete: {
                    args: Prisma.Model_PlayDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>;
                };
                update: {
                    args: Prisma.Model_PlayUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>;
                };
                deleteMany: {
                    args: Prisma.Model_PlayDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Model_PlayUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Model_PlayUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>[];
                };
                upsert: {
                    args: Prisma.Model_PlayUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_PlayPayload>;
                };
                aggregate: {
                    args: Prisma.Model_PlayAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModel_Play>;
                };
                groupBy: {
                    args: Prisma.Model_PlayGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_PlayGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Model_PlayCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_PlayCountAggregateOutputType> | number;
                };
            };
        };
        Model_Time: {
            payload: Prisma.$Model_TimePayload<ExtArgs>;
            fields: Prisma.Model_TimeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Model_TimeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Model_TimeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>;
                };
                findFirst: {
                    args: Prisma.Model_TimeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Model_TimeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>;
                };
                findMany: {
                    args: Prisma.Model_TimeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>[];
                };
                create: {
                    args: Prisma.Model_TimeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>;
                };
                createMany: {
                    args: Prisma.Model_TimeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Model_TimeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>[];
                };
                delete: {
                    args: Prisma.Model_TimeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>;
                };
                update: {
                    args: Prisma.Model_TimeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>;
                };
                deleteMany: {
                    args: Prisma.Model_TimeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Model_TimeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Model_TimeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>[];
                };
                upsert: {
                    args: Prisma.Model_TimeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Model_TimePayload>;
                };
                aggregate: {
                    args: Prisma.Model_TimeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModel_Time>;
                };
                groupBy: {
                    args: Prisma.Model_TimeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_TimeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Model_TimeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_TimeCountAggregateOutputType> | number;
                };
            };
        };
        Test_AB: {
            payload: Prisma.$Test_ABPayload<ExtArgs>;
            fields: Prisma.Test_ABFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Test_ABFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Test_ABFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>;
                };
                findFirst: {
                    args: Prisma.Test_ABFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Test_ABFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>;
                };
                findMany: {
                    args: Prisma.Test_ABFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>[];
                };
                create: {
                    args: Prisma.Test_ABCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>;
                };
                createMany: {
                    args: Prisma.Test_ABCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Test_ABCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>[];
                };
                delete: {
                    args: Prisma.Test_ABDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>;
                };
                update: {
                    args: Prisma.Test_ABUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>;
                };
                deleteMany: {
                    args: Prisma.Test_ABDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Test_ABUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Test_ABUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>[];
                };
                upsert: {
                    args: Prisma.Test_ABUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Test_ABPayload>;
                };
                aggregate: {
                    args: Prisma.Test_ABAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTest_AB>;
                };
                groupBy: {
                    args: Prisma.Test_ABGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Test_ABGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Test_ABCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Test_ABCountAggregateOutputType> | number;
                };
            };
        };
        Campaign_Video: {
            payload: Prisma.$Campaign_VideoPayload<ExtArgs>;
            fields: Prisma.Campaign_VideoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Campaign_VideoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Campaign_VideoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>;
                };
                findFirst: {
                    args: Prisma.Campaign_VideoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Campaign_VideoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>;
                };
                findMany: {
                    args: Prisma.Campaign_VideoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>[];
                };
                create: {
                    args: Prisma.Campaign_VideoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>;
                };
                createMany: {
                    args: Prisma.Campaign_VideoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Campaign_VideoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>[];
                };
                delete: {
                    args: Prisma.Campaign_VideoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>;
                };
                update: {
                    args: Prisma.Campaign_VideoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>;
                };
                deleteMany: {
                    args: Prisma.Campaign_VideoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Campaign_VideoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Campaign_VideoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>[];
                };
                upsert: {
                    args: Prisma.Campaign_VideoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Campaign_VideoPayload>;
                };
                aggregate: {
                    args: Prisma.Campaign_VideoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCampaign_Video>;
                };
                groupBy: {
                    args: Prisma.Campaign_VideoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Campaign_VideoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Campaign_VideoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Campaign_VideoCountAggregateOutputType> | number;
                };
            };
        };
        Bond_Video: {
            payload: Prisma.$Bond_VideoPayload<ExtArgs>;
            fields: Prisma.Bond_VideoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Bond_VideoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Bond_VideoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>;
                };
                findFirst: {
                    args: Prisma.Bond_VideoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Bond_VideoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>;
                };
                findMany: {
                    args: Prisma.Bond_VideoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>[];
                };
                create: {
                    args: Prisma.Bond_VideoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>;
                };
                createMany: {
                    args: Prisma.Bond_VideoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Bond_VideoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>[];
                };
                delete: {
                    args: Prisma.Bond_VideoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>;
                };
                update: {
                    args: Prisma.Bond_VideoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>;
                };
                deleteMany: {
                    args: Prisma.Bond_VideoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Bond_VideoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Bond_VideoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>[];
                };
                upsert: {
                    args: Prisma.Bond_VideoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Bond_VideoPayload>;
                };
                aggregate: {
                    args: Prisma.Bond_VideoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBond_Video>;
                };
                groupBy: {
                    args: Prisma.Bond_VideoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Bond_VideoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Bond_VideoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Bond_VideoCountAggregateOutputType> | number;
                };
            };
        };
        Bond: {
            payload: Prisma.$BondPayload<ExtArgs>;
            fields: Prisma.BondFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BondFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BondFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>;
                };
                findFirst: {
                    args: Prisma.BondFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BondFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>;
                };
                findMany: {
                    args: Prisma.BondFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>[];
                };
                create: {
                    args: Prisma.BondCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>;
                };
                createMany: {
                    args: Prisma.BondCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BondCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>[];
                };
                delete: {
                    args: Prisma.BondDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>;
                };
                update: {
                    args: Prisma.BondUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>;
                };
                deleteMany: {
                    args: Prisma.BondDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BondUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BondUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>[];
                };
                upsert: {
                    args: Prisma.BondUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BondPayload>;
                };
                aggregate: {
                    args: Prisma.BondAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBond>;
                };
                groupBy: {
                    args: Prisma.BondGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BondGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BondCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BondCountAggregateOutputType> | number;
                };
            };
        };
        Feature: {
            payload: Prisma.$FeaturePayload<ExtArgs>;
            fields: Prisma.FeatureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeatureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                findFirst: {
                    args: Prisma.FeatureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                findMany: {
                    args: Prisma.FeatureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>[];
                };
                create: {
                    args: Prisma.FeatureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                createMany: {
                    args: Prisma.FeatureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>[];
                };
                delete: {
                    args: Prisma.FeatureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                update: {
                    args: Prisma.FeatureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                deleteMany: {
                    args: Prisma.FeatureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeatureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>[];
                };
                upsert: {
                    args: Prisma.FeatureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                aggregate: {
                    args: Prisma.FeatureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeature>;
                };
                groupBy: {
                    args: Prisma.FeatureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeatureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeatureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeatureCountAggregateOutputType> | number;
                };
            };
        };
        Auto_Play: {
            payload: Prisma.$Auto_PlayPayload<ExtArgs>;
            fields: Prisma.Auto_PlayFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Auto_PlayFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Auto_PlayFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>;
                };
                findFirst: {
                    args: Prisma.Auto_PlayFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Auto_PlayFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>;
                };
                findMany: {
                    args: Prisma.Auto_PlayFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>[];
                };
                create: {
                    args: Prisma.Auto_PlayCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>;
                };
                createMany: {
                    args: Prisma.Auto_PlayCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Auto_PlayCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>[];
                };
                delete: {
                    args: Prisma.Auto_PlayDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>;
                };
                update: {
                    args: Prisma.Auto_PlayUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>;
                };
                deleteMany: {
                    args: Prisma.Auto_PlayDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Auto_PlayUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Auto_PlayUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>[];
                };
                upsert: {
                    args: Prisma.Auto_PlayUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Auto_PlayPayload>;
                };
                aggregate: {
                    args: Prisma.Auto_PlayAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuto_Play>;
                };
                groupBy: {
                    args: Prisma.Auto_PlayGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auto_PlayGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Auto_PlayCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auto_PlayCountAggregateOutputType> | number;
                };
            };
        };
        Thumb: {
            payload: Prisma.$ThumbPayload<ExtArgs>;
            fields: Prisma.ThumbFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ThumbFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ThumbFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>;
                };
                findFirst: {
                    args: Prisma.ThumbFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ThumbFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>;
                };
                findMany: {
                    args: Prisma.ThumbFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>[];
                };
                create: {
                    args: Prisma.ThumbCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>;
                };
                createMany: {
                    args: Prisma.ThumbCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ThumbCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>[];
                };
                delete: {
                    args: Prisma.ThumbDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>;
                };
                update: {
                    args: Prisma.ThumbUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>;
                };
                deleteMany: {
                    args: Prisma.ThumbDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ThumbUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ThumbUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>[];
                };
                upsert: {
                    args: Prisma.ThumbUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThumbPayload>;
                };
                aggregate: {
                    args: Prisma.ThumbAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateThumb>;
                };
                groupBy: {
                    args: Prisma.ThumbGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ThumbGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ThumbCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ThumbCountAggregateOutputType> | number;
                };
            };
        };
        Gancho: {
            payload: Prisma.$GanchoPayload<ExtArgs>;
            fields: Prisma.GanchoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GanchoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GanchoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>;
                };
                findFirst: {
                    args: Prisma.GanchoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GanchoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>;
                };
                findMany: {
                    args: Prisma.GanchoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>[];
                };
                create: {
                    args: Prisma.GanchoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>;
                };
                createMany: {
                    args: Prisma.GanchoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GanchoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>[];
                };
                delete: {
                    args: Prisma.GanchoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>;
                };
                update: {
                    args: Prisma.GanchoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>;
                };
                deleteMany: {
                    args: Prisma.GanchoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GanchoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GanchoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>[];
                };
                upsert: {
                    args: Prisma.GanchoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanchoPayload>;
                };
                aggregate: {
                    args: Prisma.GanchoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGancho>;
                };
                groupBy: {
                    args: Prisma.GanchoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GanchoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GanchoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GanchoCountAggregateOutputType> | number;
                };
            };
        };
        Timeline: {
            payload: Prisma.$TimelinePayload<ExtArgs>;
            fields: Prisma.TimelineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TimelineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TimelineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>;
                };
                findFirst: {
                    args: Prisma.TimelineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TimelineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>;
                };
                findMany: {
                    args: Prisma.TimelineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>[];
                };
                create: {
                    args: Prisma.TimelineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>;
                };
                createMany: {
                    args: Prisma.TimelineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TimelineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>[];
                };
                delete: {
                    args: Prisma.TimelineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>;
                };
                update: {
                    args: Prisma.TimelineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>;
                };
                deleteMany: {
                    args: Prisma.TimelineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TimelineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TimelineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>[];
                };
                upsert: {
                    args: Prisma.TimelineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimelinePayload>;
                };
                aggregate: {
                    args: Prisma.TimelineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTimeline>;
                };
                groupBy: {
                    args: Prisma.TimelineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimelineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TimelineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimelineCountAggregateOutputType> | number;
                };
            };
        };
        External_Link: {
            payload: Prisma.$External_LinkPayload<ExtArgs>;
            fields: Prisma.External_LinkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.External_LinkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.External_LinkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>;
                };
                findFirst: {
                    args: Prisma.External_LinkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.External_LinkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>;
                };
                findMany: {
                    args: Prisma.External_LinkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>[];
                };
                create: {
                    args: Prisma.External_LinkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>;
                };
                createMany: {
                    args: Prisma.External_LinkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.External_LinkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>[];
                };
                delete: {
                    args: Prisma.External_LinkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>;
                };
                update: {
                    args: Prisma.External_LinkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>;
                };
                deleteMany: {
                    args: Prisma.External_LinkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.External_LinkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.External_LinkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>[];
                };
                upsert: {
                    args: Prisma.External_LinkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$External_LinkPayload>;
                };
                aggregate: {
                    args: Prisma.External_LinkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExternal_Link>;
                };
                groupBy: {
                    args: Prisma.External_LinkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.External_LinkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.External_LinkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.External_LinkCountAggregateOutputType> | number;
                };
            };
        };
        Pixel: {
            payload: Prisma.$PixelPayload<ExtArgs>;
            fields: Prisma.PixelFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PixelFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PixelFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>;
                };
                findFirst: {
                    args: Prisma.PixelFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PixelFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>;
                };
                findMany: {
                    args: Prisma.PixelFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>[];
                };
                create: {
                    args: Prisma.PixelCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>;
                };
                createMany: {
                    args: Prisma.PixelCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PixelCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>[];
                };
                delete: {
                    args: Prisma.PixelDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>;
                };
                update: {
                    args: Prisma.PixelUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>;
                };
                deleteMany: {
                    args: Prisma.PixelDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PixelUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PixelUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>[];
                };
                upsert: {
                    args: Prisma.PixelUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PixelPayload>;
                };
                aggregate: {
                    args: Prisma.PixelAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePixel>;
                };
                groupBy: {
                    args: Prisma.PixelGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PixelGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PixelCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PixelCountAggregateOutputType> | number;
                };
            };
        };
        Stripe_events: {
            payload: Prisma.$Stripe_eventsPayload<ExtArgs>;
            fields: Prisma.Stripe_eventsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Stripe_eventsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Stripe_eventsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>;
                };
                findFirst: {
                    args: Prisma.Stripe_eventsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Stripe_eventsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>;
                };
                findMany: {
                    args: Prisma.Stripe_eventsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>[];
                };
                create: {
                    args: Prisma.Stripe_eventsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>;
                };
                createMany: {
                    args: Prisma.Stripe_eventsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Stripe_eventsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>[];
                };
                delete: {
                    args: Prisma.Stripe_eventsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>;
                };
                update: {
                    args: Prisma.Stripe_eventsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>;
                };
                deleteMany: {
                    args: Prisma.Stripe_eventsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Stripe_eventsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Stripe_eventsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>[];
                };
                upsert: {
                    args: Prisma.Stripe_eventsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Stripe_eventsPayload>;
                };
                aggregate: {
                    args: Prisma.Stripe_eventsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStripe_events>;
                };
                groupBy: {
                    args: Prisma.Stripe_eventsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stripe_eventsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Stripe_eventsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stripe_eventsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const PlanScalarFieldEnum: {
    readonly ID: "ID";
    readonly PLAN: "PLAN";
    readonly STRIPE_PLAN_ID: "STRIPE_PLAN_ID";
    readonly STRIPE_PLAN_PRICE: "STRIPE_PLAN_PRICE";
    readonly PRICE: "PRICE";
    readonly STATUS: "STATUS";
    readonly PLAYS: "PLAYS";
    readonly PLAYS_PRICE: "PLAYS_PRICE";
    readonly VIDEO_LIMIT: "VIDEO_LIMIT";
};
export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly ID: "ID";
    readonly NAME: "NAME";
    readonly EMAIL: "EMAIL";
    readonly PHONE: "PHONE";
    readonly AVATAR: "AVATAR";
    readonly HASHED_PASSWORD: "HASHED_PASSWORD";
    readonly HASHED_TOKEN: "HASHED_TOKEN";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
    readonly FIRST_ACESS: "FIRST_ACESS";
    readonly VALIDATION_EMAIL: "VALIDATION_EMAIL";
    readonly ROLE: "ROLE";
    readonly ACTIVE: "ACTIVE";
    readonly STRIPE_CUSTOMER_ID: "STRIPE_CUSTOMER_ID";
    readonly STRIPE_SUBSCRIPTION_ID: "STRIPE_SUBSCRIPTION_ID";
    readonly STRIPE_SUBSCRIPTION_STATUS: "STRIPE_SUBSCRIPTION_STATUS";
    readonly STRIPE_TRIAL_END: "STRIPE_TRIAL_END";
    readonly STRIPE_TRIAL_START: "STRIPE_TRIAL_START";
    readonly STRIPE_CURRENT_PERIOD_START: "STRIPE_CURRENT_PERIOD_START";
    readonly STRIPE_CURRENT_PERIOD_END: "STRIPE_CURRENT_PERIOD_END";
    readonly PLAN_ID: "PLAN_ID";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const History_PlaysScalarFieldEnum: {
    readonly ID: "ID";
    readonly QTD_PLAYS: "QTD_PLAYS";
    readonly PRICE_MONTH: "PRICE_MONTH";
    readonly STATUS: "STATUS";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
    readonly USER_ID: "USER_ID";
};
export type History_PlaysScalarFieldEnum = (typeof History_PlaysScalarFieldEnum)[keyof typeof History_PlaysScalarFieldEnum];
export declare const VideoScalarFieldEnum: {
    readonly ID: "ID";
    readonly NAME: "NAME";
    readonly SIZE: "SIZE";
    readonly FORMAT: "FORMAT";
    readonly DURATION: "DURATION";
    readonly ORIENTATION: "ORIENTATION";
    readonly HEIGHT: "HEIGHT";
    readonly WIDTH: "WIDTH";
    readonly URL: "URL";
    readonly USER_ID: "USER_ID";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum];
export declare const CampaignScalarFieldEnum: {
    readonly ID: "ID";
    readonly NAME: "NAME";
    readonly EMBED_JS: "EMBED_JS";
    readonly EMBED_IFRAME: "EMBED_IFRAME";
    readonly CORS: "CORS";
    readonly FEATURE_ID: "FEATURE_ID";
    readonly USER_ID: "USER_ID";
    readonly ANALYTICS_ID: "ANALYTICS_ID";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum];
export declare const AnalyticsScalarFieldEnum: {
    readonly ID: "ID";
    readonly CAMPAIGN_ID: "CAMPAIGN_ID";
    readonly TEST_AB_ID_A: "TEST_AB_ID_A";
    readonly TEST_AB_ID_B: "TEST_AB_ID_B";
    readonly TOTAL_PLAYS: "TOTAL_PLAYS";
    readonly TOTAL_VIEWS: "TOTAL_VIEWS";
    readonly TOTAL_PLAY_BLOCK: "TOTAL_PLAY_BLOCK";
    readonly TOTAL_PLAY_UNIQUE: "TOTAL_PLAY_UNIQUE";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum];
export declare const Model_ViewsScalarFieldEnum: {
    readonly ID: "ID";
    readonly DEVICE: "DEVICE";
    readonly BROWSER: "BROWSER";
    readonly OS: "OS";
    readonly COUNTRY: "COUNTRY";
    readonly CITY: "CITY";
    readonly REGION: "REGION";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Model_ViewsScalarFieldEnum = (typeof Model_ViewsScalarFieldEnum)[keyof typeof Model_ViewsScalarFieldEnum];
export declare const Model_PlayScalarFieldEnum: {
    readonly ID: "ID";
    readonly ANALYTICS_ID: "ANALYTICS_ID";
    readonly MODEL_VIEWS_ID: "MODEL_VIEWS_ID";
    readonly PLAY_UNIQUE: "PLAY_UNIQUE";
    readonly PLAY_BLOCK: "PLAY_BLOCK";
    readonly PLAY: "PLAY";
    readonly VIEW: "VIEW";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Model_PlayScalarFieldEnum = (typeof Model_PlayScalarFieldEnum)[keyof typeof Model_PlayScalarFieldEnum];
export declare const Model_TimeScalarFieldEnum: {
    readonly ID: "ID";
    readonly MODEL_PLAYS_ID: "MODEL_PLAYS_ID";
    readonly TIMESCREEN: "TIMESCREEN";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Model_TimeScalarFieldEnum = (typeof Model_TimeScalarFieldEnum)[keyof typeof Model_TimeScalarFieldEnum];
export declare const Test_ABScalarFieldEnum: {
    readonly ID: "ID";
    readonly EMBED_JS: "EMBED_JS";
    readonly EMBED_IFRAME: "EMBED_IFRAME";
    readonly CAMPAIGN_ID_A: "CAMPAIGN_ID_A";
    readonly CAMPAIGN_ID_B: "CAMPAIGN_ID_B";
    readonly ANALYTICS_ID_A: "ANALYTICS_ID_A";
    readonly ANALYTICS_ID_B: "ANALYTICS_ID_B";
    readonly USER_ID: "USER_ID";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Test_ABScalarFieldEnum = (typeof Test_ABScalarFieldEnum)[keyof typeof Test_ABScalarFieldEnum];
export declare const Campaign_VideoScalarFieldEnum: {
    readonly ID: "ID";
    readonly CAMPAIGN_ID: "CAMPAIGN_ID";
    readonly VIDEO_ID: "VIDEO_ID";
    readonly CTA: "CTA";
    readonly CTA_TEXT: "CTA_TEXT";
    readonly CTA_URL: "CTA_URL";
    readonly CTA_STYLE: "CTA_STYLE";
    readonly CTA_START: "CTA_START";
    readonly CTA_CLICK_CAMPAING: "CTA_CLICK_CAMPAING";
    readonly CTA_CLICK_TEST_AB: "CTA_CLICK_TEST_AB";
    readonly X_POSITION: "X_POSITION";
    readonly Y_POSITION: "Y_POSITION";
    readonly ORDER: "ORDER";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Campaign_VideoScalarFieldEnum = (typeof Campaign_VideoScalarFieldEnum)[keyof typeof Campaign_VideoScalarFieldEnum];
export declare const Bond_VideoScalarFieldEnum: {
    readonly ID: "ID";
    readonly CAMPAIGN_VIDEO_ID: "CAMPAIGN_VIDEO_ID";
    readonly BOND_ID: "BOND_ID";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Bond_VideoScalarFieldEnum = (typeof Bond_VideoScalarFieldEnum)[keyof typeof Bond_VideoScalarFieldEnum];
export declare const BondScalarFieldEnum: {
    readonly ID: "ID";
    readonly VIDEO_ID: "VIDEO_ID";
    readonly CONTINUITY_CAMPAING: "CONTINUITY_CAMPAING";
    readonly CONTINUITY_TEST_AB: "CONTINUITY_TEST_AB";
    readonly BUTTON: "BUTTON";
    readonly BUTTON_TEXT: "BUTTON_TEXT";
    readonly BUTTON_CLICK_CAMPAING: "BUTTON_CLICK_CAMPAING";
    readonly BUTTON_CLICK_TEST_AB: "BUTTON_CLICK_TEST_AB";
    readonly BUTTON_STYLE: "BUTTON_STYLE";
    readonly BUTTON_START: "BUTTON_START";
    readonly X_POSITION: "X_POSITION";
    readonly Y_POSITION: "Y_POSITION";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type BondScalarFieldEnum = (typeof BondScalarFieldEnum)[keyof typeof BondScalarFieldEnum];
export declare const FeatureScalarFieldEnum: {
    readonly ID: "ID";
    readonly AUTO_PLAY_ID: "AUTO_PLAY_ID";
    readonly THUMB_ID: "THUMB_ID";
    readonly GANCHO_ID: "GANCHO_ID";
    readonly TIMELINE_ID: "TIMELINE_ID";
    readonly EXTERNAL_LINK_ID: "EXTERNAL_LINK_ID";
    readonly PIXEL_ID: "PIXEL_ID";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum];
export declare const Auto_PlayScalarFieldEnum: {
    readonly ID: "ID";
    readonly ATIVE: "ATIVE";
    readonly SECOND: "SECOND";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Auto_PlayScalarFieldEnum = (typeof Auto_PlayScalarFieldEnum)[keyof typeof Auto_PlayScalarFieldEnum];
export declare const ThumbScalarFieldEnum: {
    readonly ID: "ID";
    readonly IMAGE_URL: "IMAGE_URL";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type ThumbScalarFieldEnum = (typeof ThumbScalarFieldEnum)[keyof typeof ThumbScalarFieldEnum];
export declare const GanchoScalarFieldEnum: {
    readonly ID: "ID";
    readonly ATIVE: "ATIVE";
    readonly TITLE: "TITLE";
    readonly TITLE_STYLE: "TITLE_STYLE";
    readonly SUBTITLE: "SUBTITLE";
    readonly SUBTITLE_ANIMATION: "SUBTITLE_ANIMATION";
    readonly SUBTITLE_ANIMATION_TYPE: "SUBTITLE_ANIMATION_TYPE";
    readonly SUBTITLE_STYLE: "SUBTITLE_STYLE";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type GanchoScalarFieldEnum = (typeof GanchoScalarFieldEnum)[keyof typeof GanchoScalarFieldEnum];
export declare const TimelineScalarFieldEnum: {
    readonly ID: "ID";
    readonly ATIVE: "ATIVE";
    readonly HEIGHT: "HEIGHT";
    readonly COR: "COR";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum];
export declare const External_LinkScalarFieldEnum: {
    readonly ID: "ID";
    readonly ATIVE: "ATIVE";
    readonly TEXT: "TEXT";
    readonly STYLE_TEXT: "STYLE_TEXT";
    readonly BUTTON_TEXT: "BUTTON_TEXT";
    readonly BUTTON_STYLE: "BUTTON_STYLE";
    readonly BUTTON_CLICK_CAMPAING: "BUTTON_CLICK_CAMPAING";
    readonly BUTTON_CLICK_TEST_AB: "BUTTON_CLICK_TEST_AB";
    readonly LINK_URL: "LINK_URL";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type External_LinkScalarFieldEnum = (typeof External_LinkScalarFieldEnum)[keyof typeof External_LinkScalarFieldEnum];
export declare const PixelScalarFieldEnum: {
    readonly ID: "ID";
    readonly ATIVE: "ATIVE";
    readonly NAME_META: "NAME_META";
    readonly ID_META: "ID_META";
    readonly NAME_GOOGLE: "NAME_GOOGLE";
    readonly ID_GOOGLE: "ID_GOOGLE";
    readonly LABEL_CONVERSION_GOOGLE: "LABEL_CONVERSION_GOOGLE";
    readonly SHOOTING_EVENT_GOOGLE: "SHOOTING_EVENT_GOOGLE";
    readonly SHOOTING_EVENT_VALUE_GOOGLE: "SHOOTING_EVENT_VALUE_GOOGLE";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type PixelScalarFieldEnum = (typeof PixelScalarFieldEnum)[keyof typeof PixelScalarFieldEnum];
export declare const Stripe_eventsScalarFieldEnum: {
    readonly ID: "ID";
    readonly TYPE: "TYPE";
    readonly CUSTOMER_ID: "CUSTOMER_ID";
    readonly CREATED_AT: "CREATED_AT";
    readonly UPDATED_AT: "UPDATED_AT";
};
export type Stripe_eventsScalarFieldEnum = (typeof Stripe_eventsScalarFieldEnum)[keyof typeof Stripe_eventsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    plan?: Prisma.PlanOmit;
    user?: Prisma.UserOmit;
    history_Plays?: Prisma.History_PlaysOmit;
    video?: Prisma.VideoOmit;
    campaign?: Prisma.CampaignOmit;
    analytics?: Prisma.AnalyticsOmit;
    model_Views?: Prisma.Model_ViewsOmit;
    model_Play?: Prisma.Model_PlayOmit;
    model_Time?: Prisma.Model_TimeOmit;
    test_AB?: Prisma.Test_ABOmit;
    campaign_Video?: Prisma.Campaign_VideoOmit;
    bond_Video?: Prisma.Bond_VideoOmit;
    bond?: Prisma.BondOmit;
    feature?: Prisma.FeatureOmit;
    auto_Play?: Prisma.Auto_PlayOmit;
    thumb?: Prisma.ThumbOmit;
    gancho?: Prisma.GanchoOmit;
    timeline?: Prisma.TimelineOmit;
    external_Link?: Prisma.External_LinkOmit;
    pixel?: Prisma.PixelOmit;
    stripe_events?: Prisma.Stripe_eventsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map
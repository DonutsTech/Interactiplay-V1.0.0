import type { Prisma } from '../../generated/prisma/client';
declare class FeaturesModel {
    create(params: Prisma.FeatureCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
    }>;
    findMany(params: Prisma.FeatureFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
    }[]>;
    findBy(find: Prisma.FeatureFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
    } | null>;
    deleteBy(where: Prisma.FeatureWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
    }>;
    deleteMany(where: Prisma.FeatureWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.FeatureUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
    }>;
    count(where: Prisma.FeatureWhereInput): Promise<number>;
}
export declare const featuresModel: FeaturesModel;
export {};
//# sourceMappingURL=index.d.ts.map
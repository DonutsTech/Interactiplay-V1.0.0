import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map
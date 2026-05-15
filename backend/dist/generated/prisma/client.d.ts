import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Plans
 * const plans = await prisma.plan.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Plan
 *
 */
export type Plan = Prisma.PlanModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model History_Plays
 *
 */
export type History_Plays = Prisma.History_PlaysModel;
/**
 * Model Video
 *
 */
export type Video = Prisma.VideoModel;
/**
 * Model Campaign
 *
 */
export type Campaign = Prisma.CampaignModel;
/**
 * Model Analytics
 *
 */
export type Analytics = Prisma.AnalyticsModel;
/**
 * Model Model_Views
 *
 */
export type Model_Views = Prisma.Model_ViewsModel;
/**
 * Model Model_Play
 *
 */
export type Model_Play = Prisma.Model_PlayModel;
/**
 * Model Model_Time
 *
 */
export type Model_Time = Prisma.Model_TimeModel;
/**
 * Model Test_AB
 *
 */
export type Test_AB = Prisma.Test_ABModel;
/**
 * Model Campaign_Video
 *
 */
export type Campaign_Video = Prisma.Campaign_VideoModel;
/**
 * Model Bond_Video
 *
 */
export type Bond_Video = Prisma.Bond_VideoModel;
/**
 * Model Bond
 *
 */
export type Bond = Prisma.BondModel;
/**
 * Model Feature
 *
 */
export type Feature = Prisma.FeatureModel;
/**
 * Model Auto_Play
 *
 */
export type Auto_Play = Prisma.Auto_PlayModel;
/**
 * Model Thumb
 *
 */
export type Thumb = Prisma.ThumbModel;
/**
 * Model Gancho
 *
 */
export type Gancho = Prisma.GanchoModel;
/**
 * Model Timeline
 *
 */
export type Timeline = Prisma.TimelineModel;
/**
 * Model External_Link
 *
 */
export type External_Link = Prisma.External_LinkModel;
/**
 * Model Pixel
 *
 */
export type Pixel = Prisma.PixelModel;
/**
 * Model Stripe_events
 *
 */
export type Stripe_events = Prisma.Stripe_eventsModel;
//# sourceMappingURL=client.d.ts.map
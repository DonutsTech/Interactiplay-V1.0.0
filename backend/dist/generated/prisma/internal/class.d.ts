import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Plans
  * const plans = await prisma.plan.findMany()
  * ```
  */
    get plan(): Prisma.PlanDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.history_Plays`: Exposes CRUD operations for the **History_Plays** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more History_Plays
      * const history_Plays = await prisma.history_Plays.findMany()
      * ```
      */
    get history_Plays(): Prisma.History_PlaysDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.video`: Exposes CRUD operations for the **Video** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Videos
      * const videos = await prisma.video.findMany()
      * ```
      */
    get video(): Prisma.VideoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Campaigns
      * const campaigns = await prisma.campaign.findMany()
      * ```
      */
    get campaign(): Prisma.CampaignDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Analytics
      * const analytics = await prisma.analytics.findMany()
      * ```
      */
    get analytics(): Prisma.AnalyticsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.model_Views`: Exposes CRUD operations for the **Model_Views** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Model_Views
      * const model_Views = await prisma.model_Views.findMany()
      * ```
      */
    get model_Views(): Prisma.Model_ViewsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.model_Play`: Exposes CRUD operations for the **Model_Play** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Model_Plays
      * const model_Plays = await prisma.model_Play.findMany()
      * ```
      */
    get model_Play(): Prisma.Model_PlayDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.model_Time`: Exposes CRUD operations for the **Model_Time** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Model_Times
      * const model_Times = await prisma.model_Time.findMany()
      * ```
      */
    get model_Time(): Prisma.Model_TimeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.test_AB`: Exposes CRUD operations for the **Test_AB** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Test_ABS
      * const test_ABS = await prisma.test_AB.findMany()
      * ```
      */
    get test_AB(): Prisma.Test_ABDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.campaign_Video`: Exposes CRUD operations for the **Campaign_Video** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Campaign_Videos
      * const campaign_Videos = await prisma.campaign_Video.findMany()
      * ```
      */
    get campaign_Video(): Prisma.Campaign_VideoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bond_Video`: Exposes CRUD operations for the **Bond_Video** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Bond_Videos
      * const bond_Videos = await prisma.bond_Video.findMany()
      * ```
      */
    get bond_Video(): Prisma.Bond_VideoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bond`: Exposes CRUD operations for the **Bond** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Bonds
      * const bonds = await prisma.bond.findMany()
      * ```
      */
    get bond(): Prisma.BondDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Features
      * const features = await prisma.feature.findMany()
      * ```
      */
    get feature(): Prisma.FeatureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auto_Play`: Exposes CRUD operations for the **Auto_Play** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Auto_Plays
      * const auto_Plays = await prisma.auto_Play.findMany()
      * ```
      */
    get auto_Play(): Prisma.Auto_PlayDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.thumb`: Exposes CRUD operations for the **Thumb** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Thumbs
      * const thumbs = await prisma.thumb.findMany()
      * ```
      */
    get thumb(): Prisma.ThumbDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.gancho`: Exposes CRUD operations for the **Gancho** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ganchos
      * const ganchos = await prisma.gancho.findMany()
      * ```
      */
    get gancho(): Prisma.GanchoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.timeline`: Exposes CRUD operations for the **Timeline** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Timelines
      * const timelines = await prisma.timeline.findMany()
      * ```
      */
    get timeline(): Prisma.TimelineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.external_Link`: Exposes CRUD operations for the **External_Link** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more External_Links
      * const external_Links = await prisma.external_Link.findMany()
      * ```
      */
    get external_Link(): Prisma.External_LinkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pixel`: Exposes CRUD operations for the **Pixel** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Pixels
      * const pixels = await prisma.pixel.findMany()
      * ```
      */
    get pixel(): Prisma.PixelDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.stripe_events`: Exposes CRUD operations for the **Stripe_events** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Stripe_events
      * const stripe_events = await prisma.stripe_events.findMany()
      * ```
      */
    get stripe_events(): Prisma.Stripe_eventsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map
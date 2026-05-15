import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Plan
 *
 */
export type PlanModel = runtime.Types.Result.DefaultSelection<Prisma.$PlanPayload>;
export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null;
    _avg: PlanAvgAggregateOutputType | null;
    _sum: PlanSumAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
};
export type PlanAvgAggregateOutputType = {
    PRICE: number | null;
    PLAYS: number | null;
    PLAYS_PRICE: number | null;
    VIDEO_LIMIT: number | null;
};
export type PlanSumAggregateOutputType = {
    PRICE: number | null;
    PLAYS: number | null;
    PLAYS_PRICE: number | null;
    VIDEO_LIMIT: number | null;
};
export type PlanMinAggregateOutputType = {
    ID: string | null;
    PLAN: string | null;
    STRIPE_PLAN_ID: string | null;
    STRIPE_PLAN_PRICE: string | null;
    PRICE: number | null;
    STATUS: boolean | null;
    PLAYS: number | null;
    PLAYS_PRICE: number | null;
    VIDEO_LIMIT: number | null;
};
export type PlanMaxAggregateOutputType = {
    ID: string | null;
    PLAN: string | null;
    STRIPE_PLAN_ID: string | null;
    STRIPE_PLAN_PRICE: string | null;
    PRICE: number | null;
    STATUS: boolean | null;
    PLAYS: number | null;
    PLAYS_PRICE: number | null;
    VIDEO_LIMIT: number | null;
};
export type PlanCountAggregateOutputType = {
    ID: number;
    PLAN: number;
    STRIPE_PLAN_ID: number;
    STRIPE_PLAN_PRICE: number;
    PRICE: number;
    STATUS: number;
    PLAYS: number;
    PLAYS_PRICE: number;
    VIDEO_LIMIT: number;
    _all: number;
};
export type PlanAvgAggregateInputType = {
    PRICE?: true;
    PLAYS?: true;
    PLAYS_PRICE?: true;
    VIDEO_LIMIT?: true;
};
export type PlanSumAggregateInputType = {
    PRICE?: true;
    PLAYS?: true;
    PLAYS_PRICE?: true;
    VIDEO_LIMIT?: true;
};
export type PlanMinAggregateInputType = {
    ID?: true;
    PLAN?: true;
    STRIPE_PLAN_ID?: true;
    STRIPE_PLAN_PRICE?: true;
    PRICE?: true;
    STATUS?: true;
    PLAYS?: true;
    PLAYS_PRICE?: true;
    VIDEO_LIMIT?: true;
};
export type PlanMaxAggregateInputType = {
    ID?: true;
    PLAN?: true;
    STRIPE_PLAN_ID?: true;
    STRIPE_PLAN_PRICE?: true;
    PRICE?: true;
    STATUS?: true;
    PLAYS?: true;
    PLAYS_PRICE?: true;
    VIDEO_LIMIT?: true;
};
export type PlanCountAggregateInputType = {
    ID?: true;
    PLAN?: true;
    STRIPE_PLAN_ID?: true;
    STRIPE_PLAN_PRICE?: true;
    PRICE?: true;
    STATUS?: true;
    PLAYS?: true;
    PLAYS_PRICE?: true;
    VIDEO_LIMIT?: true;
    _all?: true;
};
export type PlanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: Prisma.PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: Prisma.PlanOrderByWithRelationInput | Prisma.PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType;
};
export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
    [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlan[P]> : Prisma.GetScalarType<T[P], AggregatePlan[P]>;
};
export type PlanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanWhereInput;
    orderBy?: Prisma.PlanOrderByWithAggregationInput | Prisma.PlanOrderByWithAggregationInput[];
    by: Prisma.PlanScalarFieldEnum[] | Prisma.PlanScalarFieldEnum;
    having?: Prisma.PlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanCountAggregateInputType | true;
    _avg?: PlanAvgAggregateInputType;
    _sum?: PlanSumAggregateInputType;
    _min?: PlanMinAggregateInputType;
    _max?: PlanMaxAggregateInputType;
};
export type PlanGroupByOutputType = {
    ID: string;
    PLAN: string;
    STRIPE_PLAN_ID: string;
    STRIPE_PLAN_PRICE: string;
    PRICE: number;
    STATUS: boolean;
    PLAYS: number;
    PLAYS_PRICE: number;
    VIDEO_LIMIT: number;
    _count: PlanCountAggregateOutputType | null;
    _avg: PlanAvgAggregateOutputType | null;
    _sum: PlanSumAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
};
type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanGroupByOutputType[P]>;
}>>;
export type PlanWhereInput = {
    AND?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    OR?: Prisma.PlanWhereInput[];
    NOT?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    ID?: Prisma.StringFilter<"Plan"> | string;
    PLAN?: Prisma.StringFilter<"Plan"> | string;
    STRIPE_PLAN_ID?: Prisma.StringFilter<"Plan"> | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFilter<"Plan"> | string;
    PRICE?: Prisma.FloatFilter<"Plan"> | number;
    STATUS?: Prisma.BoolFilter<"Plan"> | boolean;
    PLAYS?: Prisma.IntFilter<"Plan"> | number;
    PLAYS_PRICE?: Prisma.FloatFilter<"Plan"> | number;
    VIDEO_LIMIT?: Prisma.IntFilter<"Plan"> | number;
    users?: Prisma.UserListRelationFilter;
};
export type PlanOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    PLAN?: Prisma.SortOrder;
    STRIPE_PLAN_ID?: Prisma.SortOrder;
    STRIPE_PLAN_PRICE?: Prisma.SortOrder;
    PRICE?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    PLAYS?: Prisma.SortOrder;
    PLAYS_PRICE?: Prisma.SortOrder;
    VIDEO_LIMIT?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
};
export type PlanWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    STRIPE_PLAN_ID?: string;
    AND?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    OR?: Prisma.PlanWhereInput[];
    NOT?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    PLAN?: Prisma.StringFilter<"Plan"> | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFilter<"Plan"> | string;
    PRICE?: Prisma.FloatFilter<"Plan"> | number;
    STATUS?: Prisma.BoolFilter<"Plan"> | boolean;
    PLAYS?: Prisma.IntFilter<"Plan"> | number;
    PLAYS_PRICE?: Prisma.FloatFilter<"Plan"> | number;
    VIDEO_LIMIT?: Prisma.IntFilter<"Plan"> | number;
    users?: Prisma.UserListRelationFilter;
}, "ID" | "STRIPE_PLAN_ID">;
export type PlanOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    PLAN?: Prisma.SortOrder;
    STRIPE_PLAN_ID?: Prisma.SortOrder;
    STRIPE_PLAN_PRICE?: Prisma.SortOrder;
    PRICE?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    PLAYS?: Prisma.SortOrder;
    PLAYS_PRICE?: Prisma.SortOrder;
    VIDEO_LIMIT?: Prisma.SortOrder;
    _count?: Prisma.PlanCountOrderByAggregateInput;
    _avg?: Prisma.PlanAvgOrderByAggregateInput;
    _max?: Prisma.PlanMaxOrderByAggregateInput;
    _min?: Prisma.PlanMinOrderByAggregateInput;
    _sum?: Prisma.PlanSumOrderByAggregateInput;
};
export type PlanScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlanScalarWhereWithAggregatesInput | Prisma.PlanScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlanScalarWhereWithAggregatesInput | Prisma.PlanScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Plan"> | string;
    PLAN?: Prisma.StringWithAggregatesFilter<"Plan"> | string;
    STRIPE_PLAN_ID?: Prisma.StringWithAggregatesFilter<"Plan"> | string;
    STRIPE_PLAN_PRICE?: Prisma.StringWithAggregatesFilter<"Plan"> | string;
    PRICE?: Prisma.FloatWithAggregatesFilter<"Plan"> | number;
    STATUS?: Prisma.BoolWithAggregatesFilter<"Plan"> | boolean;
    PLAYS?: Prisma.IntWithAggregatesFilter<"Plan"> | number;
    PLAYS_PRICE?: Prisma.FloatWithAggregatesFilter<"Plan"> | number;
    VIDEO_LIMIT?: Prisma.IntWithAggregatesFilter<"Plan"> | number;
};
export type PlanCreateInput = {
    ID?: string;
    PLAN: string;
    STRIPE_PLAN_ID: string;
    STRIPE_PLAN_PRICE: string;
    PRICE: number;
    STATUS?: boolean;
    PLAYS: number;
    PLAYS_PRICE: number;
    VIDEO_LIMIT: number;
    users?: Prisma.UserCreateNestedManyWithoutPLANInput;
};
export type PlanUncheckedCreateInput = {
    ID?: string;
    PLAN: string;
    STRIPE_PLAN_ID: string;
    STRIPE_PLAN_PRICE: string;
    PRICE: number;
    STATUS?: boolean;
    PLAYS: number;
    PLAYS_PRICE: number;
    VIDEO_LIMIT: number;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutPLANInput;
};
export type PlanUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAN?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFieldUpdateOperationsInput | string;
    PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    STATUS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAYS_PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    VIDEO_LIMIT?: Prisma.IntFieldUpdateOperationsInput | number;
    users?: Prisma.UserUpdateManyWithoutPLANNestedInput;
};
export type PlanUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAN?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFieldUpdateOperationsInput | string;
    PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    STATUS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAYS_PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    VIDEO_LIMIT?: Prisma.IntFieldUpdateOperationsInput | number;
    users?: Prisma.UserUncheckedUpdateManyWithoutPLANNestedInput;
};
export type PlanCreateManyInput = {
    ID?: string;
    PLAN: string;
    STRIPE_PLAN_ID: string;
    STRIPE_PLAN_PRICE: string;
    PRICE: number;
    STATUS?: boolean;
    PLAYS: number;
    PLAYS_PRICE: number;
    VIDEO_LIMIT: number;
};
export type PlanUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAN?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFieldUpdateOperationsInput | string;
    PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    STATUS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAYS_PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    VIDEO_LIMIT?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAN?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFieldUpdateOperationsInput | string;
    PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    STATUS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAYS_PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    VIDEO_LIMIT?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    PLAN?: Prisma.SortOrder;
    STRIPE_PLAN_ID?: Prisma.SortOrder;
    STRIPE_PLAN_PRICE?: Prisma.SortOrder;
    PRICE?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    PLAYS?: Prisma.SortOrder;
    PLAYS_PRICE?: Prisma.SortOrder;
    VIDEO_LIMIT?: Prisma.SortOrder;
};
export type PlanAvgOrderByAggregateInput = {
    PRICE?: Prisma.SortOrder;
    PLAYS?: Prisma.SortOrder;
    PLAYS_PRICE?: Prisma.SortOrder;
    VIDEO_LIMIT?: Prisma.SortOrder;
};
export type PlanMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    PLAN?: Prisma.SortOrder;
    STRIPE_PLAN_ID?: Prisma.SortOrder;
    STRIPE_PLAN_PRICE?: Prisma.SortOrder;
    PRICE?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    PLAYS?: Prisma.SortOrder;
    PLAYS_PRICE?: Prisma.SortOrder;
    VIDEO_LIMIT?: Prisma.SortOrder;
};
export type PlanMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    PLAN?: Prisma.SortOrder;
    STRIPE_PLAN_ID?: Prisma.SortOrder;
    STRIPE_PLAN_PRICE?: Prisma.SortOrder;
    PRICE?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    PLAYS?: Prisma.SortOrder;
    PLAYS_PRICE?: Prisma.SortOrder;
    VIDEO_LIMIT?: Prisma.SortOrder;
};
export type PlanSumOrderByAggregateInput = {
    PRICE?: Prisma.SortOrder;
    PLAYS?: Prisma.SortOrder;
    PLAYS_PRICE?: Prisma.SortOrder;
    VIDEO_LIMIT?: Prisma.SortOrder;
};
export type PlanNullableScalarRelationFilter = {
    is?: Prisma.PlanWhereInput | null;
    isNot?: Prisma.PlanWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PlanCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutUsersInput, Prisma.PlanUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutUsersInput;
    connect?: Prisma.PlanWhereUniqueInput;
};
export type PlanUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutUsersInput, Prisma.PlanUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.PlanUpsertWithoutUsersInput;
    disconnect?: Prisma.PlanWhereInput | boolean;
    delete?: Prisma.PlanWhereInput | boolean;
    connect?: Prisma.PlanWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlanUpdateToOneWithWhereWithoutUsersInput, Prisma.PlanUpdateWithoutUsersInput>, Prisma.PlanUncheckedUpdateWithoutUsersInput>;
};
export type PlanCreateWithoutUsersInput = {
    ID?: string;
    PLAN: string;
    STRIPE_PLAN_ID: string;
    STRIPE_PLAN_PRICE: string;
    PRICE: number;
    STATUS?: boolean;
    PLAYS: number;
    PLAYS_PRICE: number;
    VIDEO_LIMIT: number;
};
export type PlanUncheckedCreateWithoutUsersInput = {
    ID?: string;
    PLAN: string;
    STRIPE_PLAN_ID: string;
    STRIPE_PLAN_PRICE: string;
    PRICE: number;
    STATUS?: boolean;
    PLAYS: number;
    PLAYS_PRICE: number;
    VIDEO_LIMIT: number;
};
export type PlanCreateOrConnectWithoutUsersInput = {
    where: Prisma.PlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanCreateWithoutUsersInput, Prisma.PlanUncheckedCreateWithoutUsersInput>;
};
export type PlanUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.PlanUpdateWithoutUsersInput, Prisma.PlanUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.PlanCreateWithoutUsersInput, Prisma.PlanUncheckedCreateWithoutUsersInput>;
    where?: Prisma.PlanWhereInput;
};
export type PlanUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.PlanWhereInput;
    data: Prisma.XOR<Prisma.PlanUpdateWithoutUsersInput, Prisma.PlanUncheckedUpdateWithoutUsersInput>;
};
export type PlanUpdateWithoutUsersInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAN?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFieldUpdateOperationsInput | string;
    PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    STATUS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAYS_PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    VIDEO_LIMIT?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanUncheckedUpdateWithoutUsersInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAN?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    STRIPE_PLAN_PRICE?: Prisma.StringFieldUpdateOperationsInput | string;
    PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    STATUS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAYS_PRICE?: Prisma.FloatFieldUpdateOperationsInput | number;
    VIDEO_LIMIT?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type PlanCountOutputType
 */
export type PlanCountOutputType = {
    users: number;
};
export type PlanCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | PlanCountOutputTypeCountUsersArgs;
};
/**
 * PlanCountOutputType without action
 */
export type PlanCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: Prisma.PlanCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PlanCountOutputType without action
 */
export type PlanCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type PlanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    PLAN?: boolean;
    STRIPE_PLAN_ID?: boolean;
    STRIPE_PLAN_PRICE?: boolean;
    PRICE?: boolean;
    STATUS?: boolean;
    PLAYS?: boolean;
    PLAYS_PRICE?: boolean;
    VIDEO_LIMIT?: boolean;
    users?: boolean | Prisma.Plan$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plan"]>;
export type PlanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    PLAN?: boolean;
    STRIPE_PLAN_ID?: boolean;
    STRIPE_PLAN_PRICE?: boolean;
    PRICE?: boolean;
    STATUS?: boolean;
    PLAYS?: boolean;
    PLAYS_PRICE?: boolean;
    VIDEO_LIMIT?: boolean;
}, ExtArgs["result"]["plan"]>;
export type PlanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    PLAN?: boolean;
    STRIPE_PLAN_ID?: boolean;
    STRIPE_PLAN_PRICE?: boolean;
    PRICE?: boolean;
    STATUS?: boolean;
    PLAYS?: boolean;
    PLAYS_PRICE?: boolean;
    VIDEO_LIMIT?: boolean;
}, ExtArgs["result"]["plan"]>;
export type PlanSelectScalar = {
    ID?: boolean;
    PLAN?: boolean;
    STRIPE_PLAN_ID?: boolean;
    STRIPE_PLAN_PRICE?: boolean;
    PRICE?: boolean;
    STATUS?: boolean;
    PLAYS?: boolean;
    PLAYS_PRICE?: boolean;
    VIDEO_LIMIT?: boolean;
};
export type PlanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "PLAN" | "STRIPE_PLAN_ID" | "STRIPE_PLAN_PRICE" | "PRICE" | "STATUS" | "PLAYS" | "PLAYS_PRICE" | "VIDEO_LIMIT", ExtArgs["result"]["plan"]>;
export type PlanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Plan$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PlanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PlanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Plan";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        PLAN: string;
        STRIPE_PLAN_ID: string;
        STRIPE_PLAN_PRICE: string;
        PRICE: number;
        STATUS: boolean;
        PLAYS: number;
        PLAYS_PRICE: number;
        VIDEO_LIMIT: number;
    }, ExtArgs["result"]["plan"]>;
    composites: {};
};
export type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlanPayload, S>;
export type PlanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanCountAggregateInputType | true;
};
export interface PlanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Plan'];
        meta: {
            name: 'Plan';
        };
    };
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: Prisma.SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: Prisma.SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     *
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const planWithIDOnly = await prisma.plan.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends PlanFindManyArgs>(args?: Prisma.SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     *
     */
    create<T extends PlanCreateArgs>(args: Prisma.SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlanCreateManyArgs>(args?: Prisma.SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Plans and only return the `ID`
     * const planWithIDOnly = await prisma.plan.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     *
     */
    delete<T extends PlanDeleteArgs>(args: Prisma.SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlanUpdateArgs>(args: Prisma.SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlanUpdateManyArgs>(args: Prisma.SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Plans and only return the `ID`
     * const planWithIDOnly = await prisma.plan.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: Prisma.SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(args?: Prisma.Subset<T, PlanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Prisma.Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>;
    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PlanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlanGroupByArgs['orderBy'];
    } : {
        orderBy?: PlanGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Plan model
     */
    readonly fields: PlanFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Plan.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PlanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Plan$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Plan$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Plan model
 */
export interface PlanFieldRefs {
    readonly ID: Prisma.FieldRef<"Plan", 'String'>;
    readonly PLAN: Prisma.FieldRef<"Plan", 'String'>;
    readonly STRIPE_PLAN_ID: Prisma.FieldRef<"Plan", 'String'>;
    readonly STRIPE_PLAN_PRICE: Prisma.FieldRef<"Plan", 'String'>;
    readonly PRICE: Prisma.FieldRef<"Plan", 'Float'>;
    readonly STATUS: Prisma.FieldRef<"Plan", 'Boolean'>;
    readonly PLAYS: Prisma.FieldRef<"Plan", 'Int'>;
    readonly PLAYS_PRICE: Prisma.FieldRef<"Plan", 'Float'>;
    readonly VIDEO_LIMIT: Prisma.FieldRef<"Plan", 'Int'>;
}
/**
 * Plan findUnique
 */
export type PlanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where: Prisma.PlanWhereUniqueInput;
};
/**
 * Plan findUniqueOrThrow
 */
export type PlanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where: Prisma.PlanWhereUniqueInput;
};
/**
 * Plan findFirst
 */
export type PlanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where?: Prisma.PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: Prisma.PlanOrderByWithRelationInput | Prisma.PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Plans.
     */
    cursor?: Prisma.PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Plans.
     */
    distinct?: Prisma.PlanScalarFieldEnum | Prisma.PlanScalarFieldEnum[];
};
/**
 * Plan findFirstOrThrow
 */
export type PlanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where?: Prisma.PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: Prisma.PlanOrderByWithRelationInput | Prisma.PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Plans.
     */
    cursor?: Prisma.PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Plans.
     */
    distinct?: Prisma.PlanScalarFieldEnum | Prisma.PlanScalarFieldEnum[];
};
/**
 * Plan findMany
 */
export type PlanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plans to fetch.
     */
    where?: Prisma.PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: Prisma.PlanOrderByWithRelationInput | Prisma.PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Plans.
     */
    cursor?: Prisma.PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Plans.
     */
    distinct?: Prisma.PlanScalarFieldEnum | Prisma.PlanScalarFieldEnum[];
};
/**
 * Plan create
 */
export type PlanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * The data needed to create a Plan.
     */
    data: Prisma.XOR<Prisma.PlanCreateInput, Prisma.PlanUncheckedCreateInput>;
};
/**
 * Plan createMany
 */
export type PlanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: Prisma.PlanCreateManyInput | Prisma.PlanCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Plan createManyAndReturn
 */
export type PlanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * The data used to create many Plans.
     */
    data: Prisma.PlanCreateManyInput | Prisma.PlanCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Plan update
 */
export type PlanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * The data needed to update a Plan.
     */
    data: Prisma.XOR<Prisma.PlanUpdateInput, Prisma.PlanUncheckedUpdateInput>;
    /**
     * Choose, which Plan to update.
     */
    where: Prisma.PlanWhereUniqueInput;
};
/**
 * Plan updateMany
 */
export type PlanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: Prisma.XOR<Prisma.PlanUpdateManyMutationInput, Prisma.PlanUncheckedUpdateManyInput>;
    /**
     * Filter which Plans to update
     */
    where?: Prisma.PlanWhereInput;
    /**
     * Limit how many Plans to update.
     */
    limit?: number;
};
/**
 * Plan updateManyAndReturn
 */
export type PlanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * The data used to update Plans.
     */
    data: Prisma.XOR<Prisma.PlanUpdateManyMutationInput, Prisma.PlanUncheckedUpdateManyInput>;
    /**
     * Filter which Plans to update
     */
    where?: Prisma.PlanWhereInput;
    /**
     * Limit how many Plans to update.
     */
    limit?: number;
};
/**
 * Plan upsert
 */
export type PlanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: Prisma.PlanWhereUniqueInput;
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: Prisma.XOR<Prisma.PlanCreateInput, Prisma.PlanUncheckedCreateInput>;
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PlanUpdateInput, Prisma.PlanUncheckedUpdateInput>;
};
/**
 * Plan delete
 */
export type PlanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    /**
     * Filter which Plan to delete.
     */
    where: Prisma.PlanWhereUniqueInput;
};
/**
 * Plan deleteMany
 */
export type PlanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: Prisma.PlanWhereInput;
    /**
     * Limit how many Plans to delete.
     */
    limit?: number;
};
/**
 * Plan.users
 */
export type Plan$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * Plan without action
 */
export type PlanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Plan.d.ts.map
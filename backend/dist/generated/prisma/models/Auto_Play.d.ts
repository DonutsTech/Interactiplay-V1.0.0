import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Auto_Play
 *
 */
export type Auto_PlayModel = runtime.Types.Result.DefaultSelection<Prisma.$Auto_PlayPayload>;
export type AggregateAuto_Play = {
    _count: Auto_PlayCountAggregateOutputType | null;
    _avg: Auto_PlayAvgAggregateOutputType | null;
    _sum: Auto_PlaySumAggregateOutputType | null;
    _min: Auto_PlayMinAggregateOutputType | null;
    _max: Auto_PlayMaxAggregateOutputType | null;
};
export type Auto_PlayAvgAggregateOutputType = {
    SECOND: number | null;
};
export type Auto_PlaySumAggregateOutputType = {
    SECOND: number | null;
};
export type Auto_PlayMinAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    SECOND: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Auto_PlayMaxAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    SECOND: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Auto_PlayCountAggregateOutputType = {
    ID: number;
    ATIVE: number;
    SECOND: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Auto_PlayAvgAggregateInputType = {
    SECOND?: true;
};
export type Auto_PlaySumAggregateInputType = {
    SECOND?: true;
};
export type Auto_PlayMinAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    SECOND?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Auto_PlayMaxAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    SECOND?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Auto_PlayCountAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    SECOND?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Auto_PlayAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Auto_Play to aggregate.
     */
    where?: Prisma.Auto_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auto_Plays to fetch.
     */
    orderBy?: Prisma.Auto_PlayOrderByWithRelationInput | Prisma.Auto_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Auto_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auto_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auto_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Auto_Plays
    **/
    _count?: true | Auto_PlayCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Auto_PlayAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Auto_PlaySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Auto_PlayMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Auto_PlayMaxAggregateInputType;
};
export type GetAuto_PlayAggregateType<T extends Auto_PlayAggregateArgs> = {
    [P in keyof T & keyof AggregateAuto_Play]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuto_Play[P]> : Prisma.GetScalarType<T[P], AggregateAuto_Play[P]>;
};
export type Auto_PlayGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Auto_PlayWhereInput;
    orderBy?: Prisma.Auto_PlayOrderByWithAggregationInput | Prisma.Auto_PlayOrderByWithAggregationInput[];
    by: Prisma.Auto_PlayScalarFieldEnum[] | Prisma.Auto_PlayScalarFieldEnum;
    having?: Prisma.Auto_PlayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Auto_PlayCountAggregateInputType | true;
    _avg?: Auto_PlayAvgAggregateInputType;
    _sum?: Auto_PlaySumAggregateInputType;
    _min?: Auto_PlayMinAggregateInputType;
    _max?: Auto_PlayMaxAggregateInputType;
};
export type Auto_PlayGroupByOutputType = {
    ID: string;
    ATIVE: boolean;
    SECOND: number;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Auto_PlayCountAggregateOutputType | null;
    _avg: Auto_PlayAvgAggregateOutputType | null;
    _sum: Auto_PlaySumAggregateOutputType | null;
    _min: Auto_PlayMinAggregateOutputType | null;
    _max: Auto_PlayMaxAggregateOutputType | null;
};
type GetAuto_PlayGroupByPayload<T extends Auto_PlayGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Auto_PlayGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Auto_PlayGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Auto_PlayGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Auto_PlayGroupByOutputType[P]>;
}>>;
export type Auto_PlayWhereInput = {
    AND?: Prisma.Auto_PlayWhereInput | Prisma.Auto_PlayWhereInput[];
    OR?: Prisma.Auto_PlayWhereInput[];
    NOT?: Prisma.Auto_PlayWhereInput | Prisma.Auto_PlayWhereInput[];
    ID?: Prisma.StringFilter<"Auto_Play"> | string;
    ATIVE?: Prisma.BoolFilter<"Auto_Play"> | boolean;
    SECOND?: Prisma.IntFilter<"Auto_Play"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Auto_Play"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Auto_Play"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
};
export type Auto_PlayOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    SECOND?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    FEATURE?: Prisma.FeatureOrderByWithRelationInput;
};
export type Auto_PlayWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.Auto_PlayWhereInput | Prisma.Auto_PlayWhereInput[];
    OR?: Prisma.Auto_PlayWhereInput[];
    NOT?: Prisma.Auto_PlayWhereInput | Prisma.Auto_PlayWhereInput[];
    ATIVE?: Prisma.BoolFilter<"Auto_Play"> | boolean;
    SECOND?: Prisma.IntFilter<"Auto_Play"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Auto_Play"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Auto_Play"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
}, "ID">;
export type Auto_PlayOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    SECOND?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Auto_PlayCountOrderByAggregateInput;
    _avg?: Prisma.Auto_PlayAvgOrderByAggregateInput;
    _max?: Prisma.Auto_PlayMaxOrderByAggregateInput;
    _min?: Prisma.Auto_PlayMinOrderByAggregateInput;
    _sum?: Prisma.Auto_PlaySumOrderByAggregateInput;
};
export type Auto_PlayScalarWhereWithAggregatesInput = {
    AND?: Prisma.Auto_PlayScalarWhereWithAggregatesInput | Prisma.Auto_PlayScalarWhereWithAggregatesInput[];
    OR?: Prisma.Auto_PlayScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Auto_PlayScalarWhereWithAggregatesInput | Prisma.Auto_PlayScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Auto_Play"> | string;
    ATIVE?: Prisma.BoolWithAggregatesFilter<"Auto_Play"> | boolean;
    SECOND?: Prisma.IntWithAggregatesFilter<"Auto_Play"> | number;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Auto_Play"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Auto_Play"> | Date | string | null;
};
export type Auto_PlayCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    SECOND: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutAUTO_PLAYInput;
};
export type Auto_PlayUncheckedCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    SECOND: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedCreateNestedOneWithoutAUTO_PLAYInput;
};
export type Auto_PlayUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SECOND?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutAUTO_PLAYNestedInput;
};
export type Auto_PlayUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SECOND?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedUpdateOneWithoutAUTO_PLAYNestedInput;
};
export type Auto_PlayCreateManyInput = {
    ID?: string;
    ATIVE?: boolean;
    SECOND: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Auto_PlayUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SECOND?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Auto_PlayUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SECOND?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Auto_PlayNullableScalarRelationFilter = {
    is?: Prisma.Auto_PlayWhereInput | null;
    isNot?: Prisma.Auto_PlayWhereInput | null;
};
export type Auto_PlayCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    SECOND?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Auto_PlayAvgOrderByAggregateInput = {
    SECOND?: Prisma.SortOrder;
};
export type Auto_PlayMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    SECOND?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Auto_PlayMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    SECOND?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Auto_PlaySumOrderByAggregateInput = {
    SECOND?: Prisma.SortOrder;
};
export type Auto_PlayCreateNestedOneWithoutFEATUREInput = {
    create?: Prisma.XOR<Prisma.Auto_PlayCreateWithoutFEATUREInput, Prisma.Auto_PlayUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.Auto_PlayCreateOrConnectWithoutFEATUREInput;
    connect?: Prisma.Auto_PlayWhereUniqueInput;
};
export type Auto_PlayUpdateOneWithoutFEATURENestedInput = {
    create?: Prisma.XOR<Prisma.Auto_PlayCreateWithoutFEATUREInput, Prisma.Auto_PlayUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.Auto_PlayCreateOrConnectWithoutFEATUREInput;
    upsert?: Prisma.Auto_PlayUpsertWithoutFEATUREInput;
    disconnect?: Prisma.Auto_PlayWhereInput | boolean;
    delete?: Prisma.Auto_PlayWhereInput | boolean;
    connect?: Prisma.Auto_PlayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Auto_PlayUpdateToOneWithWhereWithoutFEATUREInput, Prisma.Auto_PlayUpdateWithoutFEATUREInput>, Prisma.Auto_PlayUncheckedUpdateWithoutFEATUREInput>;
};
export type Auto_PlayCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    SECOND: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Auto_PlayUncheckedCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    SECOND: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Auto_PlayCreateOrConnectWithoutFEATUREInput = {
    where: Prisma.Auto_PlayWhereUniqueInput;
    create: Prisma.XOR<Prisma.Auto_PlayCreateWithoutFEATUREInput, Prisma.Auto_PlayUncheckedCreateWithoutFEATUREInput>;
};
export type Auto_PlayUpsertWithoutFEATUREInput = {
    update: Prisma.XOR<Prisma.Auto_PlayUpdateWithoutFEATUREInput, Prisma.Auto_PlayUncheckedUpdateWithoutFEATUREInput>;
    create: Prisma.XOR<Prisma.Auto_PlayCreateWithoutFEATUREInput, Prisma.Auto_PlayUncheckedCreateWithoutFEATUREInput>;
    where?: Prisma.Auto_PlayWhereInput;
};
export type Auto_PlayUpdateToOneWithWhereWithoutFEATUREInput = {
    where?: Prisma.Auto_PlayWhereInput;
    data: Prisma.XOR<Prisma.Auto_PlayUpdateWithoutFEATUREInput, Prisma.Auto_PlayUncheckedUpdateWithoutFEATUREInput>;
};
export type Auto_PlayUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SECOND?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Auto_PlayUncheckedUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SECOND?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Auto_PlaySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    SECOND?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FEATURE?: boolean | Prisma.Auto_Play$FEATUREArgs<ExtArgs>;
}, ExtArgs["result"]["auto_Play"]>;
export type Auto_PlaySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    SECOND?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["auto_Play"]>;
export type Auto_PlaySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    SECOND?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["auto_Play"]>;
export type Auto_PlaySelectScalar = {
    ID?: boolean;
    ATIVE?: boolean;
    SECOND?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Auto_PlayOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "ATIVE" | "SECOND" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["auto_Play"]>;
export type Auto_PlayInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    FEATURE?: boolean | Prisma.Auto_Play$FEATUREArgs<ExtArgs>;
};
export type Auto_PlayIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type Auto_PlayIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $Auto_PlayPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Auto_Play";
    objects: {
        FEATURE: Prisma.$FeaturePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        ATIVE: boolean;
        SECOND: number;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["auto_Play"]>;
    composites: {};
};
export type Auto_PlayGetPayload<S extends boolean | null | undefined | Auto_PlayDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload, S>;
export type Auto_PlayCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Auto_PlayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Auto_PlayCountAggregateInputType | true;
};
export interface Auto_PlayDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Auto_Play'];
        meta: {
            name: 'Auto_Play';
        };
    };
    /**
     * Find zero or one Auto_Play that matches the filter.
     * @param {Auto_PlayFindUniqueArgs} args - Arguments to find a Auto_Play
     * @example
     * // Get one Auto_Play
     * const auto_Play = await prisma.auto_Play.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Auto_PlayFindUniqueArgs>(args: Prisma.SelectSubset<T, Auto_PlayFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Auto_Play that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Auto_PlayFindUniqueOrThrowArgs} args - Arguments to find a Auto_Play
     * @example
     * // Get one Auto_Play
     * const auto_Play = await prisma.auto_Play.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Auto_PlayFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Auto_PlayFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Auto_Play that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auto_PlayFindFirstArgs} args - Arguments to find a Auto_Play
     * @example
     * // Get one Auto_Play
     * const auto_Play = await prisma.auto_Play.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Auto_PlayFindFirstArgs>(args?: Prisma.SelectSubset<T, Auto_PlayFindFirstArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Auto_Play that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auto_PlayFindFirstOrThrowArgs} args - Arguments to find a Auto_Play
     * @example
     * // Get one Auto_Play
     * const auto_Play = await prisma.auto_Play.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Auto_PlayFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Auto_PlayFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Auto_Plays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auto_PlayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auto_Plays
     * const auto_Plays = await prisma.auto_Play.findMany()
     *
     * // Get first 10 Auto_Plays
     * const auto_Plays = await prisma.auto_Play.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const auto_PlayWithIDOnly = await prisma.auto_Play.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Auto_PlayFindManyArgs>(args?: Prisma.SelectSubset<T, Auto_PlayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Auto_Play.
     * @param {Auto_PlayCreateArgs} args - Arguments to create a Auto_Play.
     * @example
     * // Create one Auto_Play
     * const Auto_Play = await prisma.auto_Play.create({
     *   data: {
     *     // ... data to create a Auto_Play
     *   }
     * })
     *
     */
    create<T extends Auto_PlayCreateArgs>(args: Prisma.SelectSubset<T, Auto_PlayCreateArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Auto_Plays.
     * @param {Auto_PlayCreateManyArgs} args - Arguments to create many Auto_Plays.
     * @example
     * // Create many Auto_Plays
     * const auto_Play = await prisma.auto_Play.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Auto_PlayCreateManyArgs>(args?: Prisma.SelectSubset<T, Auto_PlayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Auto_Plays and returns the data saved in the database.
     * @param {Auto_PlayCreateManyAndReturnArgs} args - Arguments to create many Auto_Plays.
     * @example
     * // Create many Auto_Plays
     * const auto_Play = await prisma.auto_Play.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Auto_Plays and only return the `ID`
     * const auto_PlayWithIDOnly = await prisma.auto_Play.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Auto_PlayCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Auto_PlayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Auto_Play.
     * @param {Auto_PlayDeleteArgs} args - Arguments to delete one Auto_Play.
     * @example
     * // Delete one Auto_Play
     * const Auto_Play = await prisma.auto_Play.delete({
     *   where: {
     *     // ... filter to delete one Auto_Play
     *   }
     * })
     *
     */
    delete<T extends Auto_PlayDeleteArgs>(args: Prisma.SelectSubset<T, Auto_PlayDeleteArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Auto_Play.
     * @param {Auto_PlayUpdateArgs} args - Arguments to update one Auto_Play.
     * @example
     * // Update one Auto_Play
     * const auto_Play = await prisma.auto_Play.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Auto_PlayUpdateArgs>(args: Prisma.SelectSubset<T, Auto_PlayUpdateArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Auto_Plays.
     * @param {Auto_PlayDeleteManyArgs} args - Arguments to filter Auto_Plays to delete.
     * @example
     * // Delete a few Auto_Plays
     * const { count } = await prisma.auto_Play.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Auto_PlayDeleteManyArgs>(args?: Prisma.SelectSubset<T, Auto_PlayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Auto_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auto_PlayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auto_Plays
     * const auto_Play = await prisma.auto_Play.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Auto_PlayUpdateManyArgs>(args: Prisma.SelectSubset<T, Auto_PlayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Auto_Plays and returns the data updated in the database.
     * @param {Auto_PlayUpdateManyAndReturnArgs} args - Arguments to update many Auto_Plays.
     * @example
     * // Update many Auto_Plays
     * const auto_Play = await prisma.auto_Play.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Auto_Plays and only return the `ID`
     * const auto_PlayWithIDOnly = await prisma.auto_Play.updateManyAndReturn({
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
    updateManyAndReturn<T extends Auto_PlayUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Auto_PlayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Auto_Play.
     * @param {Auto_PlayUpsertArgs} args - Arguments to update or create a Auto_Play.
     * @example
     * // Update or create a Auto_Play
     * const auto_Play = await prisma.auto_Play.upsert({
     *   create: {
     *     // ... data to create a Auto_Play
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auto_Play we want to update
     *   }
     * })
     */
    upsert<T extends Auto_PlayUpsertArgs>(args: Prisma.SelectSubset<T, Auto_PlayUpsertArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Auto_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auto_PlayCountArgs} args - Arguments to filter Auto_Plays to count.
     * @example
     * // Count the number of Auto_Plays
     * const count = await prisma.auto_Play.count({
     *   where: {
     *     // ... the filter for the Auto_Plays we want to count
     *   }
     * })
    **/
    count<T extends Auto_PlayCountArgs>(args?: Prisma.Subset<T, Auto_PlayCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Auto_PlayCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Auto_Play.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auto_PlayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auto_PlayAggregateArgs>(args: Prisma.Subset<T, Auto_PlayAggregateArgs>): Prisma.PrismaPromise<GetAuto_PlayAggregateType<T>>;
    /**
     * Group by Auto_Play.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auto_PlayGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Auto_PlayGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Auto_PlayGroupByArgs['orderBy'];
    } : {
        orderBy?: Auto_PlayGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Auto_PlayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuto_PlayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Auto_Play model
     */
    readonly fields: Auto_PlayFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Auto_Play.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Auto_PlayClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    FEATURE<T extends Prisma.Auto_Play$FEATUREArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Auto_Play$FEATUREArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Auto_Play model
 */
export interface Auto_PlayFieldRefs {
    readonly ID: Prisma.FieldRef<"Auto_Play", 'String'>;
    readonly ATIVE: Prisma.FieldRef<"Auto_Play", 'Boolean'>;
    readonly SECOND: Prisma.FieldRef<"Auto_Play", 'Int'>;
    readonly CREATED_AT: Prisma.FieldRef<"Auto_Play", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Auto_Play", 'DateTime'>;
}
/**
 * Auto_Play findUnique
 */
export type Auto_PlayFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * Filter, which Auto_Play to fetch.
     */
    where: Prisma.Auto_PlayWhereUniqueInput;
};
/**
 * Auto_Play findUniqueOrThrow
 */
export type Auto_PlayFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * Filter, which Auto_Play to fetch.
     */
    where: Prisma.Auto_PlayWhereUniqueInput;
};
/**
 * Auto_Play findFirst
 */
export type Auto_PlayFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * Filter, which Auto_Play to fetch.
     */
    where?: Prisma.Auto_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auto_Plays to fetch.
     */
    orderBy?: Prisma.Auto_PlayOrderByWithRelationInput | Prisma.Auto_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Auto_Plays.
     */
    cursor?: Prisma.Auto_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auto_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auto_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Auto_Plays.
     */
    distinct?: Prisma.Auto_PlayScalarFieldEnum | Prisma.Auto_PlayScalarFieldEnum[];
};
/**
 * Auto_Play findFirstOrThrow
 */
export type Auto_PlayFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * Filter, which Auto_Play to fetch.
     */
    where?: Prisma.Auto_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auto_Plays to fetch.
     */
    orderBy?: Prisma.Auto_PlayOrderByWithRelationInput | Prisma.Auto_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Auto_Plays.
     */
    cursor?: Prisma.Auto_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auto_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auto_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Auto_Plays.
     */
    distinct?: Prisma.Auto_PlayScalarFieldEnum | Prisma.Auto_PlayScalarFieldEnum[];
};
/**
 * Auto_Play findMany
 */
export type Auto_PlayFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * Filter, which Auto_Plays to fetch.
     */
    where?: Prisma.Auto_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auto_Plays to fetch.
     */
    orderBy?: Prisma.Auto_PlayOrderByWithRelationInput | Prisma.Auto_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Auto_Plays.
     */
    cursor?: Prisma.Auto_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auto_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auto_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Auto_Plays.
     */
    distinct?: Prisma.Auto_PlayScalarFieldEnum | Prisma.Auto_PlayScalarFieldEnum[];
};
/**
 * Auto_Play create
 */
export type Auto_PlayCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * The data needed to create a Auto_Play.
     */
    data: Prisma.XOR<Prisma.Auto_PlayCreateInput, Prisma.Auto_PlayUncheckedCreateInput>;
};
/**
 * Auto_Play createMany
 */
export type Auto_PlayCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auto_Plays.
     */
    data: Prisma.Auto_PlayCreateManyInput | Prisma.Auto_PlayCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Auto_Play createManyAndReturn
 */
export type Auto_PlayCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * The data used to create many Auto_Plays.
     */
    data: Prisma.Auto_PlayCreateManyInput | Prisma.Auto_PlayCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Auto_Play update
 */
export type Auto_PlayUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * The data needed to update a Auto_Play.
     */
    data: Prisma.XOR<Prisma.Auto_PlayUpdateInput, Prisma.Auto_PlayUncheckedUpdateInput>;
    /**
     * Choose, which Auto_Play to update.
     */
    where: Prisma.Auto_PlayWhereUniqueInput;
};
/**
 * Auto_Play updateMany
 */
export type Auto_PlayUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Auto_Plays.
     */
    data: Prisma.XOR<Prisma.Auto_PlayUpdateManyMutationInput, Prisma.Auto_PlayUncheckedUpdateManyInput>;
    /**
     * Filter which Auto_Plays to update
     */
    where?: Prisma.Auto_PlayWhereInput;
    /**
     * Limit how many Auto_Plays to update.
     */
    limit?: number;
};
/**
 * Auto_Play updateManyAndReturn
 */
export type Auto_PlayUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * The data used to update Auto_Plays.
     */
    data: Prisma.XOR<Prisma.Auto_PlayUpdateManyMutationInput, Prisma.Auto_PlayUncheckedUpdateManyInput>;
    /**
     * Filter which Auto_Plays to update
     */
    where?: Prisma.Auto_PlayWhereInput;
    /**
     * Limit how many Auto_Plays to update.
     */
    limit?: number;
};
/**
 * Auto_Play upsert
 */
export type Auto_PlayUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * The filter to search for the Auto_Play to update in case it exists.
     */
    where: Prisma.Auto_PlayWhereUniqueInput;
    /**
     * In case the Auto_Play found by the `where` argument doesn't exist, create a new Auto_Play with this data.
     */
    create: Prisma.XOR<Prisma.Auto_PlayCreateInput, Prisma.Auto_PlayUncheckedCreateInput>;
    /**
     * In case the Auto_Play was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Auto_PlayUpdateInput, Prisma.Auto_PlayUncheckedUpdateInput>;
};
/**
 * Auto_Play delete
 */
export type Auto_PlayDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
    /**
     * Filter which Auto_Play to delete.
     */
    where: Prisma.Auto_PlayWhereUniqueInput;
};
/**
 * Auto_Play deleteMany
 */
export type Auto_PlayDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Auto_Plays to delete
     */
    where?: Prisma.Auto_PlayWhereInput;
    /**
     * Limit how many Auto_Plays to delete.
     */
    limit?: number;
};
/**
 * Auto_Play.FEATURE
 */
export type Auto_Play$FEATUREArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feature
     */
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where?: Prisma.FeatureWhereInput;
};
/**
 * Auto_Play without action
 */
export type Auto_PlayDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auto_Play
     */
    select?: Prisma.Auto_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auto_Play
     */
    omit?: Prisma.Auto_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Auto_PlayInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Auto_Play.d.ts.map
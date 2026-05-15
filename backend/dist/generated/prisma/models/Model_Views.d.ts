import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Model_Views
 *
 */
export type Model_ViewsModel = runtime.Types.Result.DefaultSelection<Prisma.$Model_ViewsPayload>;
export type AggregateModel_Views = {
    _count: Model_ViewsCountAggregateOutputType | null;
    _min: Model_ViewsMinAggregateOutputType | null;
    _max: Model_ViewsMaxAggregateOutputType | null;
};
export type Model_ViewsMinAggregateOutputType = {
    ID: string | null;
    DEVICE: string | null;
    BROWSER: string | null;
    OS: string | null;
    COUNTRY: string | null;
    CITY: string | null;
    REGION: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Model_ViewsMaxAggregateOutputType = {
    ID: string | null;
    DEVICE: string | null;
    BROWSER: string | null;
    OS: string | null;
    COUNTRY: string | null;
    CITY: string | null;
    REGION: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Model_ViewsCountAggregateOutputType = {
    ID: number;
    DEVICE: number;
    BROWSER: number;
    OS: number;
    COUNTRY: number;
    CITY: number;
    REGION: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Model_ViewsMinAggregateInputType = {
    ID?: true;
    DEVICE?: true;
    BROWSER?: true;
    OS?: true;
    COUNTRY?: true;
    CITY?: true;
    REGION?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Model_ViewsMaxAggregateInputType = {
    ID?: true;
    DEVICE?: true;
    BROWSER?: true;
    OS?: true;
    COUNTRY?: true;
    CITY?: true;
    REGION?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Model_ViewsCountAggregateInputType = {
    ID?: true;
    DEVICE?: true;
    BROWSER?: true;
    OS?: true;
    COUNTRY?: true;
    CITY?: true;
    REGION?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Model_ViewsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Model_Views to aggregate.
     */
    where?: Prisma.Model_ViewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Views to fetch.
     */
    orderBy?: Prisma.Model_ViewsOrderByWithRelationInput | Prisma.Model_ViewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Model_ViewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Views.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Model_Views
    **/
    _count?: true | Model_ViewsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Model_ViewsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Model_ViewsMaxAggregateInputType;
};
export type GetModel_ViewsAggregateType<T extends Model_ViewsAggregateArgs> = {
    [P in keyof T & keyof AggregateModel_Views]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModel_Views[P]> : Prisma.GetScalarType<T[P], AggregateModel_Views[P]>;
};
export type Model_ViewsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Model_ViewsWhereInput;
    orderBy?: Prisma.Model_ViewsOrderByWithAggregationInput | Prisma.Model_ViewsOrderByWithAggregationInput[];
    by: Prisma.Model_ViewsScalarFieldEnum[] | Prisma.Model_ViewsScalarFieldEnum;
    having?: Prisma.Model_ViewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Model_ViewsCountAggregateInputType | true;
    _min?: Model_ViewsMinAggregateInputType;
    _max?: Model_ViewsMaxAggregateInputType;
};
export type Model_ViewsGroupByOutputType = {
    ID: string;
    DEVICE: string;
    BROWSER: string;
    OS: string;
    COUNTRY: string;
    CITY: string;
    REGION: string;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Model_ViewsCountAggregateOutputType | null;
    _min: Model_ViewsMinAggregateOutputType | null;
    _max: Model_ViewsMaxAggregateOutputType | null;
};
type GetModel_ViewsGroupByPayload<T extends Model_ViewsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Model_ViewsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Model_ViewsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Model_ViewsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Model_ViewsGroupByOutputType[P]>;
}>>;
export type Model_ViewsWhereInput = {
    AND?: Prisma.Model_ViewsWhereInput | Prisma.Model_ViewsWhereInput[];
    OR?: Prisma.Model_ViewsWhereInput[];
    NOT?: Prisma.Model_ViewsWhereInput | Prisma.Model_ViewsWhereInput[];
    ID?: Prisma.StringFilter<"Model_Views"> | string;
    DEVICE?: Prisma.StringFilter<"Model_Views"> | string;
    BROWSER?: Prisma.StringFilter<"Model_Views"> | string;
    OS?: Prisma.StringFilter<"Model_Views"> | string;
    COUNTRY?: Prisma.StringFilter<"Model_Views"> | string;
    CITY?: Prisma.StringFilter<"Model_Views"> | string;
    REGION?: Prisma.StringFilter<"Model_Views"> | string;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Views"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Views"> | Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayListRelationFilter;
};
export type Model_ViewsOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    DEVICE?: Prisma.SortOrder;
    BROWSER?: Prisma.SortOrder;
    OS?: Prisma.SortOrder;
    COUNTRY?: Prisma.SortOrder;
    CITY?: Prisma.SortOrder;
    REGION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    MODEL_PLAYS?: Prisma.Model_PlayOrderByRelationAggregateInput;
};
export type Model_ViewsWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.Model_ViewsWhereInput | Prisma.Model_ViewsWhereInput[];
    OR?: Prisma.Model_ViewsWhereInput[];
    NOT?: Prisma.Model_ViewsWhereInput | Prisma.Model_ViewsWhereInput[];
    DEVICE?: Prisma.StringFilter<"Model_Views"> | string;
    BROWSER?: Prisma.StringFilter<"Model_Views"> | string;
    OS?: Prisma.StringFilter<"Model_Views"> | string;
    COUNTRY?: Prisma.StringFilter<"Model_Views"> | string;
    CITY?: Prisma.StringFilter<"Model_Views"> | string;
    REGION?: Prisma.StringFilter<"Model_Views"> | string;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Views"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Views"> | Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayListRelationFilter;
}, "ID">;
export type Model_ViewsOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    DEVICE?: Prisma.SortOrder;
    BROWSER?: Prisma.SortOrder;
    OS?: Prisma.SortOrder;
    COUNTRY?: Prisma.SortOrder;
    CITY?: Prisma.SortOrder;
    REGION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Model_ViewsCountOrderByAggregateInput;
    _max?: Prisma.Model_ViewsMaxOrderByAggregateInput;
    _min?: Prisma.Model_ViewsMinOrderByAggregateInput;
};
export type Model_ViewsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Model_ViewsScalarWhereWithAggregatesInput | Prisma.Model_ViewsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Model_ViewsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Model_ViewsScalarWhereWithAggregatesInput | Prisma.Model_ViewsScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Model_Views"> | string;
    DEVICE?: Prisma.StringWithAggregatesFilter<"Model_Views"> | string;
    BROWSER?: Prisma.StringWithAggregatesFilter<"Model_Views"> | string;
    OS?: Prisma.StringWithAggregatesFilter<"Model_Views"> | string;
    COUNTRY?: Prisma.StringWithAggregatesFilter<"Model_Views"> | string;
    CITY?: Prisma.StringWithAggregatesFilter<"Model_Views"> | string;
    REGION?: Prisma.StringWithAggregatesFilter<"Model_Views"> | string;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Model_Views"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Model_Views"> | Date | string | null;
};
export type Model_ViewsCreateInput = {
    ID?: string;
    DEVICE: string;
    BROWSER: string;
    OS: string;
    COUNTRY: string;
    CITY: string;
    REGION: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayCreateNestedManyWithoutMODEL_VIEWSInput;
};
export type Model_ViewsUncheckedCreateInput = {
    ID?: string;
    DEVICE: string;
    BROWSER: string;
    OS: string;
    COUNTRY: string;
    CITY: string;
    REGION: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedCreateNestedManyWithoutMODEL_VIEWSInput;
};
export type Model_ViewsUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    DEVICE?: Prisma.StringFieldUpdateOperationsInput | string;
    BROWSER?: Prisma.StringFieldUpdateOperationsInput | string;
    OS?: Prisma.StringFieldUpdateOperationsInput | string;
    COUNTRY?: Prisma.StringFieldUpdateOperationsInput | string;
    CITY?: Prisma.StringFieldUpdateOperationsInput | string;
    REGION?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayUpdateManyWithoutMODEL_VIEWSNestedInput;
};
export type Model_ViewsUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    DEVICE?: Prisma.StringFieldUpdateOperationsInput | string;
    BROWSER?: Prisma.StringFieldUpdateOperationsInput | string;
    OS?: Prisma.StringFieldUpdateOperationsInput | string;
    COUNTRY?: Prisma.StringFieldUpdateOperationsInput | string;
    CITY?: Prisma.StringFieldUpdateOperationsInput | string;
    REGION?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedUpdateManyWithoutMODEL_VIEWSNestedInput;
};
export type Model_ViewsCreateManyInput = {
    ID?: string;
    DEVICE: string;
    BROWSER: string;
    OS: string;
    COUNTRY: string;
    CITY: string;
    REGION: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_ViewsUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    DEVICE?: Prisma.StringFieldUpdateOperationsInput | string;
    BROWSER?: Prisma.StringFieldUpdateOperationsInput | string;
    OS?: Prisma.StringFieldUpdateOperationsInput | string;
    COUNTRY?: Prisma.StringFieldUpdateOperationsInput | string;
    CITY?: Prisma.StringFieldUpdateOperationsInput | string;
    REGION?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_ViewsUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    DEVICE?: Prisma.StringFieldUpdateOperationsInput | string;
    BROWSER?: Prisma.StringFieldUpdateOperationsInput | string;
    OS?: Prisma.StringFieldUpdateOperationsInput | string;
    COUNTRY?: Prisma.StringFieldUpdateOperationsInput | string;
    CITY?: Prisma.StringFieldUpdateOperationsInput | string;
    REGION?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_ViewsCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    DEVICE?: Prisma.SortOrder;
    BROWSER?: Prisma.SortOrder;
    OS?: Prisma.SortOrder;
    COUNTRY?: Prisma.SortOrder;
    CITY?: Prisma.SortOrder;
    REGION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_ViewsMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    DEVICE?: Prisma.SortOrder;
    BROWSER?: Prisma.SortOrder;
    OS?: Prisma.SortOrder;
    COUNTRY?: Prisma.SortOrder;
    CITY?: Prisma.SortOrder;
    REGION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_ViewsMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    DEVICE?: Prisma.SortOrder;
    BROWSER?: Prisma.SortOrder;
    OS?: Prisma.SortOrder;
    COUNTRY?: Prisma.SortOrder;
    CITY?: Prisma.SortOrder;
    REGION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_ViewsNullableScalarRelationFilter = {
    is?: Prisma.Model_ViewsWhereInput | null;
    isNot?: Prisma.Model_ViewsWhereInput | null;
};
export type Model_ViewsCreateNestedOneWithoutMODEL_PLAYSInput = {
    create?: Prisma.XOR<Prisma.Model_ViewsCreateWithoutMODEL_PLAYSInput, Prisma.Model_ViewsUncheckedCreateWithoutMODEL_PLAYSInput>;
    connectOrCreate?: Prisma.Model_ViewsCreateOrConnectWithoutMODEL_PLAYSInput;
    connect?: Prisma.Model_ViewsWhereUniqueInput;
};
export type Model_ViewsUpdateOneWithoutMODEL_PLAYSNestedInput = {
    create?: Prisma.XOR<Prisma.Model_ViewsCreateWithoutMODEL_PLAYSInput, Prisma.Model_ViewsUncheckedCreateWithoutMODEL_PLAYSInput>;
    connectOrCreate?: Prisma.Model_ViewsCreateOrConnectWithoutMODEL_PLAYSInput;
    upsert?: Prisma.Model_ViewsUpsertWithoutMODEL_PLAYSInput;
    disconnect?: Prisma.Model_ViewsWhereInput | boolean;
    delete?: Prisma.Model_ViewsWhereInput | boolean;
    connect?: Prisma.Model_ViewsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Model_ViewsUpdateToOneWithWhereWithoutMODEL_PLAYSInput, Prisma.Model_ViewsUpdateWithoutMODEL_PLAYSInput>, Prisma.Model_ViewsUncheckedUpdateWithoutMODEL_PLAYSInput>;
};
export type Model_ViewsCreateWithoutMODEL_PLAYSInput = {
    ID?: string;
    DEVICE: string;
    BROWSER: string;
    OS: string;
    COUNTRY: string;
    CITY: string;
    REGION: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_ViewsUncheckedCreateWithoutMODEL_PLAYSInput = {
    ID?: string;
    DEVICE: string;
    BROWSER: string;
    OS: string;
    COUNTRY: string;
    CITY: string;
    REGION: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_ViewsCreateOrConnectWithoutMODEL_PLAYSInput = {
    where: Prisma.Model_ViewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Model_ViewsCreateWithoutMODEL_PLAYSInput, Prisma.Model_ViewsUncheckedCreateWithoutMODEL_PLAYSInput>;
};
export type Model_ViewsUpsertWithoutMODEL_PLAYSInput = {
    update: Prisma.XOR<Prisma.Model_ViewsUpdateWithoutMODEL_PLAYSInput, Prisma.Model_ViewsUncheckedUpdateWithoutMODEL_PLAYSInput>;
    create: Prisma.XOR<Prisma.Model_ViewsCreateWithoutMODEL_PLAYSInput, Prisma.Model_ViewsUncheckedCreateWithoutMODEL_PLAYSInput>;
    where?: Prisma.Model_ViewsWhereInput;
};
export type Model_ViewsUpdateToOneWithWhereWithoutMODEL_PLAYSInput = {
    where?: Prisma.Model_ViewsWhereInput;
    data: Prisma.XOR<Prisma.Model_ViewsUpdateWithoutMODEL_PLAYSInput, Prisma.Model_ViewsUncheckedUpdateWithoutMODEL_PLAYSInput>;
};
export type Model_ViewsUpdateWithoutMODEL_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    DEVICE?: Prisma.StringFieldUpdateOperationsInput | string;
    BROWSER?: Prisma.StringFieldUpdateOperationsInput | string;
    OS?: Prisma.StringFieldUpdateOperationsInput | string;
    COUNTRY?: Prisma.StringFieldUpdateOperationsInput | string;
    CITY?: Prisma.StringFieldUpdateOperationsInput | string;
    REGION?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_ViewsUncheckedUpdateWithoutMODEL_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    DEVICE?: Prisma.StringFieldUpdateOperationsInput | string;
    BROWSER?: Prisma.StringFieldUpdateOperationsInput | string;
    OS?: Prisma.StringFieldUpdateOperationsInput | string;
    COUNTRY?: Prisma.StringFieldUpdateOperationsInput | string;
    CITY?: Prisma.StringFieldUpdateOperationsInput | string;
    REGION?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type Model_ViewsCountOutputType
 */
export type Model_ViewsCountOutputType = {
    MODEL_PLAYS: number;
};
export type Model_ViewsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MODEL_PLAYS?: boolean | Model_ViewsCountOutputTypeCountMODEL_PLAYSArgs;
};
/**
 * Model_ViewsCountOutputType without action
 */
export type Model_ViewsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_ViewsCountOutputType
     */
    select?: Prisma.Model_ViewsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Model_ViewsCountOutputType without action
 */
export type Model_ViewsCountOutputTypeCountMODEL_PLAYSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Model_PlayWhereInput;
};
export type Model_ViewsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    DEVICE?: boolean;
    BROWSER?: boolean;
    OS?: boolean;
    COUNTRY?: boolean;
    CITY?: boolean;
    REGION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    MODEL_PLAYS?: boolean | Prisma.Model_Views$MODEL_PLAYSArgs<ExtArgs>;
    _count?: boolean | Prisma.Model_ViewsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["model_Views"]>;
export type Model_ViewsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    DEVICE?: boolean;
    BROWSER?: boolean;
    OS?: boolean;
    COUNTRY?: boolean;
    CITY?: boolean;
    REGION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["model_Views"]>;
export type Model_ViewsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    DEVICE?: boolean;
    BROWSER?: boolean;
    OS?: boolean;
    COUNTRY?: boolean;
    CITY?: boolean;
    REGION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["model_Views"]>;
export type Model_ViewsSelectScalar = {
    ID?: boolean;
    DEVICE?: boolean;
    BROWSER?: boolean;
    OS?: boolean;
    COUNTRY?: boolean;
    CITY?: boolean;
    REGION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Model_ViewsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "DEVICE" | "BROWSER" | "OS" | "COUNTRY" | "CITY" | "REGION" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["model_Views"]>;
export type Model_ViewsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MODEL_PLAYS?: boolean | Prisma.Model_Views$MODEL_PLAYSArgs<ExtArgs>;
    _count?: boolean | Prisma.Model_ViewsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Model_ViewsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type Model_ViewsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $Model_ViewsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Model_Views";
    objects: {
        MODEL_PLAYS: Prisma.$Model_PlayPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        DEVICE: string;
        BROWSER: string;
        OS: string;
        COUNTRY: string;
        CITY: string;
        REGION: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["model_Views"]>;
    composites: {};
};
export type Model_ViewsGetPayload<S extends boolean | null | undefined | Model_ViewsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload, S>;
export type Model_ViewsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Model_ViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Model_ViewsCountAggregateInputType | true;
};
export interface Model_ViewsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Model_Views'];
        meta: {
            name: 'Model_Views';
        };
    };
    /**
     * Find zero or one Model_Views that matches the filter.
     * @param {Model_ViewsFindUniqueArgs} args - Arguments to find a Model_Views
     * @example
     * // Get one Model_Views
     * const model_Views = await prisma.model_Views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Model_ViewsFindUniqueArgs>(args: Prisma.SelectSubset<T, Model_ViewsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Model_Views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Model_ViewsFindUniqueOrThrowArgs} args - Arguments to find a Model_Views
     * @example
     * // Get one Model_Views
     * const model_Views = await prisma.model_Views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Model_ViewsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Model_ViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Model_Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_ViewsFindFirstArgs} args - Arguments to find a Model_Views
     * @example
     * // Get one Model_Views
     * const model_Views = await prisma.model_Views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Model_ViewsFindFirstArgs>(args?: Prisma.SelectSubset<T, Model_ViewsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Model_Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_ViewsFindFirstOrThrowArgs} args - Arguments to find a Model_Views
     * @example
     * // Get one Model_Views
     * const model_Views = await prisma.model_Views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Model_ViewsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Model_ViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Model_Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_ViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Model_Views
     * const model_Views = await prisma.model_Views.findMany()
     *
     * // Get first 10 Model_Views
     * const model_Views = await prisma.model_Views.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const model_ViewsWithIDOnly = await prisma.model_Views.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Model_ViewsFindManyArgs>(args?: Prisma.SelectSubset<T, Model_ViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Model_Views.
     * @param {Model_ViewsCreateArgs} args - Arguments to create a Model_Views.
     * @example
     * // Create one Model_Views
     * const Model_Views = await prisma.model_Views.create({
     *   data: {
     *     // ... data to create a Model_Views
     *   }
     * })
     *
     */
    create<T extends Model_ViewsCreateArgs>(args: Prisma.SelectSubset<T, Model_ViewsCreateArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Model_Views.
     * @param {Model_ViewsCreateManyArgs} args - Arguments to create many Model_Views.
     * @example
     * // Create many Model_Views
     * const model_Views = await prisma.model_Views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Model_ViewsCreateManyArgs>(args?: Prisma.SelectSubset<T, Model_ViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Model_Views and returns the data saved in the database.
     * @param {Model_ViewsCreateManyAndReturnArgs} args - Arguments to create many Model_Views.
     * @example
     * // Create many Model_Views
     * const model_Views = await prisma.model_Views.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Model_Views and only return the `ID`
     * const model_ViewsWithIDOnly = await prisma.model_Views.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Model_ViewsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Model_ViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Model_Views.
     * @param {Model_ViewsDeleteArgs} args - Arguments to delete one Model_Views.
     * @example
     * // Delete one Model_Views
     * const Model_Views = await prisma.model_Views.delete({
     *   where: {
     *     // ... filter to delete one Model_Views
     *   }
     * })
     *
     */
    delete<T extends Model_ViewsDeleteArgs>(args: Prisma.SelectSubset<T, Model_ViewsDeleteArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Model_Views.
     * @param {Model_ViewsUpdateArgs} args - Arguments to update one Model_Views.
     * @example
     * // Update one Model_Views
     * const model_Views = await prisma.model_Views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Model_ViewsUpdateArgs>(args: Prisma.SelectSubset<T, Model_ViewsUpdateArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Model_Views.
     * @param {Model_ViewsDeleteManyArgs} args - Arguments to filter Model_Views to delete.
     * @example
     * // Delete a few Model_Views
     * const { count } = await prisma.model_Views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Model_ViewsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Model_ViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Model_Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_ViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Model_Views
     * const model_Views = await prisma.model_Views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Model_ViewsUpdateManyArgs>(args: Prisma.SelectSubset<T, Model_ViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Model_Views and returns the data updated in the database.
     * @param {Model_ViewsUpdateManyAndReturnArgs} args - Arguments to update many Model_Views.
     * @example
     * // Update many Model_Views
     * const model_Views = await prisma.model_Views.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Model_Views and only return the `ID`
     * const model_ViewsWithIDOnly = await prisma.model_Views.updateManyAndReturn({
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
    updateManyAndReturn<T extends Model_ViewsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Model_ViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Model_Views.
     * @param {Model_ViewsUpsertArgs} args - Arguments to update or create a Model_Views.
     * @example
     * // Update or create a Model_Views
     * const model_Views = await prisma.model_Views.upsert({
     *   create: {
     *     // ... data to create a Model_Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model_Views we want to update
     *   }
     * })
     */
    upsert<T extends Model_ViewsUpsertArgs>(args: Prisma.SelectSubset<T, Model_ViewsUpsertArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Model_Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_ViewsCountArgs} args - Arguments to filter Model_Views to count.
     * @example
     * // Count the number of Model_Views
     * const count = await prisma.model_Views.count({
     *   where: {
     *     // ... the filter for the Model_Views we want to count
     *   }
     * })
    **/
    count<T extends Model_ViewsCountArgs>(args?: Prisma.Subset<T, Model_ViewsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Model_ViewsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Model_Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Model_ViewsAggregateArgs>(args: Prisma.Subset<T, Model_ViewsAggregateArgs>): Prisma.PrismaPromise<GetModel_ViewsAggregateType<T>>;
    /**
     * Group by Model_Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_ViewsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Model_ViewsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Model_ViewsGroupByArgs['orderBy'];
    } : {
        orderBy?: Model_ViewsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Model_ViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_ViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Model_Views model
     */
    readonly fields: Model_ViewsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Model_Views.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Model_ViewsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MODEL_PLAYS<T extends Prisma.Model_Views$MODEL_PLAYSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Model_Views$MODEL_PLAYSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Model_Views model
 */
export interface Model_ViewsFieldRefs {
    readonly ID: Prisma.FieldRef<"Model_Views", 'String'>;
    readonly DEVICE: Prisma.FieldRef<"Model_Views", 'String'>;
    readonly BROWSER: Prisma.FieldRef<"Model_Views", 'String'>;
    readonly OS: Prisma.FieldRef<"Model_Views", 'String'>;
    readonly COUNTRY: Prisma.FieldRef<"Model_Views", 'String'>;
    readonly CITY: Prisma.FieldRef<"Model_Views", 'String'>;
    readonly REGION: Prisma.FieldRef<"Model_Views", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Model_Views", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Model_Views", 'DateTime'>;
}
/**
 * Model_Views findUnique
 */
export type Model_ViewsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Views to fetch.
     */
    where: Prisma.Model_ViewsWhereUniqueInput;
};
/**
 * Model_Views findUniqueOrThrow
 */
export type Model_ViewsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Views to fetch.
     */
    where: Prisma.Model_ViewsWhereUniqueInput;
};
/**
 * Model_Views findFirst
 */
export type Model_ViewsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Views to fetch.
     */
    where?: Prisma.Model_ViewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Views to fetch.
     */
    orderBy?: Prisma.Model_ViewsOrderByWithRelationInput | Prisma.Model_ViewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Model_Views.
     */
    cursor?: Prisma.Model_ViewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Views.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Views.
     */
    distinct?: Prisma.Model_ViewsScalarFieldEnum | Prisma.Model_ViewsScalarFieldEnum[];
};
/**
 * Model_Views findFirstOrThrow
 */
export type Model_ViewsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Views to fetch.
     */
    where?: Prisma.Model_ViewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Views to fetch.
     */
    orderBy?: Prisma.Model_ViewsOrderByWithRelationInput | Prisma.Model_ViewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Model_Views.
     */
    cursor?: Prisma.Model_ViewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Views.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Views.
     */
    distinct?: Prisma.Model_ViewsScalarFieldEnum | Prisma.Model_ViewsScalarFieldEnum[];
};
/**
 * Model_Views findMany
 */
export type Model_ViewsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Views to fetch.
     */
    where?: Prisma.Model_ViewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Views to fetch.
     */
    orderBy?: Prisma.Model_ViewsOrderByWithRelationInput | Prisma.Model_ViewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Model_Views.
     */
    cursor?: Prisma.Model_ViewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Views.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Views.
     */
    distinct?: Prisma.Model_ViewsScalarFieldEnum | Prisma.Model_ViewsScalarFieldEnum[];
};
/**
 * Model_Views create
 */
export type Model_ViewsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Model_Views.
     */
    data: Prisma.XOR<Prisma.Model_ViewsCreateInput, Prisma.Model_ViewsUncheckedCreateInput>;
};
/**
 * Model_Views createMany
 */
export type Model_ViewsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Model_Views.
     */
    data: Prisma.Model_ViewsCreateManyInput | Prisma.Model_ViewsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Model_Views createManyAndReturn
 */
export type Model_ViewsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * The data used to create many Model_Views.
     */
    data: Prisma.Model_ViewsCreateManyInput | Prisma.Model_ViewsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Model_Views update
 */
export type Model_ViewsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Model_Views.
     */
    data: Prisma.XOR<Prisma.Model_ViewsUpdateInput, Prisma.Model_ViewsUncheckedUpdateInput>;
    /**
     * Choose, which Model_Views to update.
     */
    where: Prisma.Model_ViewsWhereUniqueInput;
};
/**
 * Model_Views updateMany
 */
export type Model_ViewsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Model_Views.
     */
    data: Prisma.XOR<Prisma.Model_ViewsUpdateManyMutationInput, Prisma.Model_ViewsUncheckedUpdateManyInput>;
    /**
     * Filter which Model_Views to update
     */
    where?: Prisma.Model_ViewsWhereInput;
    /**
     * Limit how many Model_Views to update.
     */
    limit?: number;
};
/**
 * Model_Views updateManyAndReturn
 */
export type Model_ViewsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * The data used to update Model_Views.
     */
    data: Prisma.XOR<Prisma.Model_ViewsUpdateManyMutationInput, Prisma.Model_ViewsUncheckedUpdateManyInput>;
    /**
     * Filter which Model_Views to update
     */
    where?: Prisma.Model_ViewsWhereInput;
    /**
     * Limit how many Model_Views to update.
     */
    limit?: number;
};
/**
 * Model_Views upsert
 */
export type Model_ViewsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Model_Views to update in case it exists.
     */
    where: Prisma.Model_ViewsWhereUniqueInput;
    /**
     * In case the Model_Views found by the `where` argument doesn't exist, create a new Model_Views with this data.
     */
    create: Prisma.XOR<Prisma.Model_ViewsCreateInput, Prisma.Model_ViewsUncheckedCreateInput>;
    /**
     * In case the Model_Views was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Model_ViewsUpdateInput, Prisma.Model_ViewsUncheckedUpdateInput>;
};
/**
 * Model_Views delete
 */
export type Model_ViewsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
    /**
     * Filter which Model_Views to delete.
     */
    where: Prisma.Model_ViewsWhereUniqueInput;
};
/**
 * Model_Views deleteMany
 */
export type Model_ViewsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Model_Views to delete
     */
    where?: Prisma.Model_ViewsWhereInput;
    /**
     * Limit how many Model_Views to delete.
     */
    limit?: number;
};
/**
 * Model_Views.MODEL_PLAYS
 */
export type Model_Views$MODEL_PLAYSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Play
     */
    select?: Prisma.Model_PlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Play
     */
    omit?: Prisma.Model_PlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_PlayInclude<ExtArgs> | null;
    where?: Prisma.Model_PlayWhereInput;
    orderBy?: Prisma.Model_PlayOrderByWithRelationInput | Prisma.Model_PlayOrderByWithRelationInput[];
    cursor?: Prisma.Model_PlayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_PlayScalarFieldEnum | Prisma.Model_PlayScalarFieldEnum[];
};
/**
 * Model_Views without action
 */
export type Model_ViewsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Views
     */
    select?: Prisma.Model_ViewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Views
     */
    omit?: Prisma.Model_ViewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_ViewsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Model_Views.d.ts.map
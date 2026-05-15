import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Model_Time
 *
 */
export type Model_TimeModel = runtime.Types.Result.DefaultSelection<Prisma.$Model_TimePayload>;
export type AggregateModel_Time = {
    _count: Model_TimeCountAggregateOutputType | null;
    _avg: Model_TimeAvgAggregateOutputType | null;
    _sum: Model_TimeSumAggregateOutputType | null;
    _min: Model_TimeMinAggregateOutputType | null;
    _max: Model_TimeMaxAggregateOutputType | null;
};
export type Model_TimeAvgAggregateOutputType = {
    TIMESCREEN: number | null;
};
export type Model_TimeSumAggregateOutputType = {
    TIMESCREEN: number | null;
};
export type Model_TimeMinAggregateOutputType = {
    ID: string | null;
    MODEL_PLAYS_ID: string | null;
    TIMESCREEN: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Model_TimeMaxAggregateOutputType = {
    ID: string | null;
    MODEL_PLAYS_ID: string | null;
    TIMESCREEN: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Model_TimeCountAggregateOutputType = {
    ID: number;
    MODEL_PLAYS_ID: number;
    TIMESCREEN: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Model_TimeAvgAggregateInputType = {
    TIMESCREEN?: true;
};
export type Model_TimeSumAggregateInputType = {
    TIMESCREEN?: true;
};
export type Model_TimeMinAggregateInputType = {
    ID?: true;
    MODEL_PLAYS_ID?: true;
    TIMESCREEN?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Model_TimeMaxAggregateInputType = {
    ID?: true;
    MODEL_PLAYS_ID?: true;
    TIMESCREEN?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Model_TimeCountAggregateInputType = {
    ID?: true;
    MODEL_PLAYS_ID?: true;
    TIMESCREEN?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Model_TimeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Model_Time to aggregate.
     */
    where?: Prisma.Model_TimeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Times to fetch.
     */
    orderBy?: Prisma.Model_TimeOrderByWithRelationInput | Prisma.Model_TimeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Model_TimeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Times.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Model_Times
    **/
    _count?: true | Model_TimeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Model_TimeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Model_TimeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Model_TimeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Model_TimeMaxAggregateInputType;
};
export type GetModel_TimeAggregateType<T extends Model_TimeAggregateArgs> = {
    [P in keyof T & keyof AggregateModel_Time]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModel_Time[P]> : Prisma.GetScalarType<T[P], AggregateModel_Time[P]>;
};
export type Model_TimeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Model_TimeWhereInput;
    orderBy?: Prisma.Model_TimeOrderByWithAggregationInput | Prisma.Model_TimeOrderByWithAggregationInput[];
    by: Prisma.Model_TimeScalarFieldEnum[] | Prisma.Model_TimeScalarFieldEnum;
    having?: Prisma.Model_TimeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Model_TimeCountAggregateInputType | true;
    _avg?: Model_TimeAvgAggregateInputType;
    _sum?: Model_TimeSumAggregateInputType;
    _min?: Model_TimeMinAggregateInputType;
    _max?: Model_TimeMaxAggregateInputType;
};
export type Model_TimeGroupByOutputType = {
    ID: string;
    MODEL_PLAYS_ID: string | null;
    TIMESCREEN: number;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Model_TimeCountAggregateOutputType | null;
    _avg: Model_TimeAvgAggregateOutputType | null;
    _sum: Model_TimeSumAggregateOutputType | null;
    _min: Model_TimeMinAggregateOutputType | null;
    _max: Model_TimeMaxAggregateOutputType | null;
};
type GetModel_TimeGroupByPayload<T extends Model_TimeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Model_TimeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Model_TimeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Model_TimeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Model_TimeGroupByOutputType[P]>;
}>>;
export type Model_TimeWhereInput = {
    AND?: Prisma.Model_TimeWhereInput | Prisma.Model_TimeWhereInput[];
    OR?: Prisma.Model_TimeWhereInput[];
    NOT?: Prisma.Model_TimeWhereInput | Prisma.Model_TimeWhereInput[];
    ID?: Prisma.StringFilter<"Model_Time"> | string;
    MODEL_PLAYS_ID?: Prisma.StringNullableFilter<"Model_Time"> | string | null;
    TIMESCREEN?: Prisma.IntFilter<"Model_Time"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Time"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Time"> | Date | string | null;
    MODEL_PLAYS?: Prisma.XOR<Prisma.Model_PlayNullableScalarRelationFilter, Prisma.Model_PlayWhereInput> | null;
};
export type Model_TimeOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    MODEL_PLAYS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIMESCREEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    MODEL_PLAYS?: Prisma.Model_PlayOrderByWithRelationInput;
};
export type Model_TimeWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.Model_TimeWhereInput | Prisma.Model_TimeWhereInput[];
    OR?: Prisma.Model_TimeWhereInput[];
    NOT?: Prisma.Model_TimeWhereInput | Prisma.Model_TimeWhereInput[];
    MODEL_PLAYS_ID?: Prisma.StringNullableFilter<"Model_Time"> | string | null;
    TIMESCREEN?: Prisma.IntFilter<"Model_Time"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Time"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Time"> | Date | string | null;
    MODEL_PLAYS?: Prisma.XOR<Prisma.Model_PlayNullableScalarRelationFilter, Prisma.Model_PlayWhereInput> | null;
}, "ID">;
export type Model_TimeOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    MODEL_PLAYS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIMESCREEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Model_TimeCountOrderByAggregateInput;
    _avg?: Prisma.Model_TimeAvgOrderByAggregateInput;
    _max?: Prisma.Model_TimeMaxOrderByAggregateInput;
    _min?: Prisma.Model_TimeMinOrderByAggregateInput;
    _sum?: Prisma.Model_TimeSumOrderByAggregateInput;
};
export type Model_TimeScalarWhereWithAggregatesInput = {
    AND?: Prisma.Model_TimeScalarWhereWithAggregatesInput | Prisma.Model_TimeScalarWhereWithAggregatesInput[];
    OR?: Prisma.Model_TimeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Model_TimeScalarWhereWithAggregatesInput | Prisma.Model_TimeScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Model_Time"> | string;
    MODEL_PLAYS_ID?: Prisma.StringNullableWithAggregatesFilter<"Model_Time"> | string | null;
    TIMESCREEN?: Prisma.IntWithAggregatesFilter<"Model_Time"> | number;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Model_Time"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Model_Time"> | Date | string | null;
};
export type Model_TimeCreateInput = {
    ID?: string;
    TIMESCREEN?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayCreateNestedOneWithoutMODEL_TIMEInput;
};
export type Model_TimeUncheckedCreateInput = {
    ID?: string;
    MODEL_PLAYS_ID?: string | null;
    TIMESCREEN?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_TimeUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TIMESCREEN?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MODEL_PLAYS?: Prisma.Model_PlayUpdateOneWithoutMODEL_TIMENestedInput;
};
export type Model_TimeUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    MODEL_PLAYS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMESCREEN?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_TimeCreateManyInput = {
    ID?: string;
    MODEL_PLAYS_ID?: string | null;
    TIMESCREEN?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_TimeUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TIMESCREEN?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_TimeUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    MODEL_PLAYS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMESCREEN?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_TimeListRelationFilter = {
    every?: Prisma.Model_TimeWhereInput;
    some?: Prisma.Model_TimeWhereInput;
    none?: Prisma.Model_TimeWhereInput;
};
export type Model_TimeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Model_TimeCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    MODEL_PLAYS_ID?: Prisma.SortOrder;
    TIMESCREEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_TimeAvgOrderByAggregateInput = {
    TIMESCREEN?: Prisma.SortOrder;
};
export type Model_TimeMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    MODEL_PLAYS_ID?: Prisma.SortOrder;
    TIMESCREEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_TimeMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    MODEL_PLAYS_ID?: Prisma.SortOrder;
    TIMESCREEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_TimeSumOrderByAggregateInput = {
    TIMESCREEN?: Prisma.SortOrder;
};
export type Model_TimeCreateNestedManyWithoutMODEL_PLAYSInput = {
    create?: Prisma.XOR<Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput> | Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput[] | Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput[];
    connectOrCreate?: Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput | Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput[];
    createMany?: Prisma.Model_TimeCreateManyMODEL_PLAYSInputEnvelope;
    connect?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
};
export type Model_TimeUncheckedCreateNestedManyWithoutMODEL_PLAYSInput = {
    create?: Prisma.XOR<Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput> | Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput[] | Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput[];
    connectOrCreate?: Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput | Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput[];
    createMany?: Prisma.Model_TimeCreateManyMODEL_PLAYSInputEnvelope;
    connect?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
};
export type Model_TimeUpdateManyWithoutMODEL_PLAYSNestedInput = {
    create?: Prisma.XOR<Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput> | Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput[] | Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput[];
    connectOrCreate?: Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput | Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput[];
    upsert?: Prisma.Model_TimeUpsertWithWhereUniqueWithoutMODEL_PLAYSInput | Prisma.Model_TimeUpsertWithWhereUniqueWithoutMODEL_PLAYSInput[];
    createMany?: Prisma.Model_TimeCreateManyMODEL_PLAYSInputEnvelope;
    set?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    disconnect?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    delete?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    connect?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    update?: Prisma.Model_TimeUpdateWithWhereUniqueWithoutMODEL_PLAYSInput | Prisma.Model_TimeUpdateWithWhereUniqueWithoutMODEL_PLAYSInput[];
    updateMany?: Prisma.Model_TimeUpdateManyWithWhereWithoutMODEL_PLAYSInput | Prisma.Model_TimeUpdateManyWithWhereWithoutMODEL_PLAYSInput[];
    deleteMany?: Prisma.Model_TimeScalarWhereInput | Prisma.Model_TimeScalarWhereInput[];
};
export type Model_TimeUncheckedUpdateManyWithoutMODEL_PLAYSNestedInput = {
    create?: Prisma.XOR<Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput> | Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput[] | Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput[];
    connectOrCreate?: Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput | Prisma.Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput[];
    upsert?: Prisma.Model_TimeUpsertWithWhereUniqueWithoutMODEL_PLAYSInput | Prisma.Model_TimeUpsertWithWhereUniqueWithoutMODEL_PLAYSInput[];
    createMany?: Prisma.Model_TimeCreateManyMODEL_PLAYSInputEnvelope;
    set?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    disconnect?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    delete?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    connect?: Prisma.Model_TimeWhereUniqueInput | Prisma.Model_TimeWhereUniqueInput[];
    update?: Prisma.Model_TimeUpdateWithWhereUniqueWithoutMODEL_PLAYSInput | Prisma.Model_TimeUpdateWithWhereUniqueWithoutMODEL_PLAYSInput[];
    updateMany?: Prisma.Model_TimeUpdateManyWithWhereWithoutMODEL_PLAYSInput | Prisma.Model_TimeUpdateManyWithWhereWithoutMODEL_PLAYSInput[];
    deleteMany?: Prisma.Model_TimeScalarWhereInput | Prisma.Model_TimeScalarWhereInput[];
};
export type Model_TimeCreateWithoutMODEL_PLAYSInput = {
    ID?: string;
    TIMESCREEN?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput = {
    ID?: string;
    TIMESCREEN?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_TimeCreateOrConnectWithoutMODEL_PLAYSInput = {
    where: Prisma.Model_TimeWhereUniqueInput;
    create: Prisma.XOR<Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput>;
};
export type Model_TimeCreateManyMODEL_PLAYSInputEnvelope = {
    data: Prisma.Model_TimeCreateManyMODEL_PLAYSInput | Prisma.Model_TimeCreateManyMODEL_PLAYSInput[];
    skipDuplicates?: boolean;
};
export type Model_TimeUpsertWithWhereUniqueWithoutMODEL_PLAYSInput = {
    where: Prisma.Model_TimeWhereUniqueInput;
    update: Prisma.XOR<Prisma.Model_TimeUpdateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedUpdateWithoutMODEL_PLAYSInput>;
    create: Prisma.XOR<Prisma.Model_TimeCreateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedCreateWithoutMODEL_PLAYSInput>;
};
export type Model_TimeUpdateWithWhereUniqueWithoutMODEL_PLAYSInput = {
    where: Prisma.Model_TimeWhereUniqueInput;
    data: Prisma.XOR<Prisma.Model_TimeUpdateWithoutMODEL_PLAYSInput, Prisma.Model_TimeUncheckedUpdateWithoutMODEL_PLAYSInput>;
};
export type Model_TimeUpdateManyWithWhereWithoutMODEL_PLAYSInput = {
    where: Prisma.Model_TimeScalarWhereInput;
    data: Prisma.XOR<Prisma.Model_TimeUpdateManyMutationInput, Prisma.Model_TimeUncheckedUpdateManyWithoutMODEL_PLAYSInput>;
};
export type Model_TimeScalarWhereInput = {
    AND?: Prisma.Model_TimeScalarWhereInput | Prisma.Model_TimeScalarWhereInput[];
    OR?: Prisma.Model_TimeScalarWhereInput[];
    NOT?: Prisma.Model_TimeScalarWhereInput | Prisma.Model_TimeScalarWhereInput[];
    ID?: Prisma.StringFilter<"Model_Time"> | string;
    MODEL_PLAYS_ID?: Prisma.StringNullableFilter<"Model_Time"> | string | null;
    TIMESCREEN?: Prisma.IntFilter<"Model_Time"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Time"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Time"> | Date | string | null;
};
export type Model_TimeCreateManyMODEL_PLAYSInput = {
    ID?: string;
    TIMESCREEN?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_TimeUpdateWithoutMODEL_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TIMESCREEN?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_TimeUncheckedUpdateWithoutMODEL_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TIMESCREEN?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_TimeUncheckedUpdateManyWithoutMODEL_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TIMESCREEN?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_TimeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    MODEL_PLAYS_ID?: boolean;
    TIMESCREEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    MODEL_PLAYS?: boolean | Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs>;
}, ExtArgs["result"]["model_Time"]>;
export type Model_TimeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    MODEL_PLAYS_ID?: boolean;
    TIMESCREEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    MODEL_PLAYS?: boolean | Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs>;
}, ExtArgs["result"]["model_Time"]>;
export type Model_TimeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    MODEL_PLAYS_ID?: boolean;
    TIMESCREEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    MODEL_PLAYS?: boolean | Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs>;
}, ExtArgs["result"]["model_Time"]>;
export type Model_TimeSelectScalar = {
    ID?: boolean;
    MODEL_PLAYS_ID?: boolean;
    TIMESCREEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Model_TimeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "MODEL_PLAYS_ID" | "TIMESCREEN" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["model_Time"]>;
export type Model_TimeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MODEL_PLAYS?: boolean | Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs>;
};
export type Model_TimeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MODEL_PLAYS?: boolean | Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs>;
};
export type Model_TimeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MODEL_PLAYS?: boolean | Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs>;
};
export type $Model_TimePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Model_Time";
    objects: {
        MODEL_PLAYS: Prisma.$Model_PlayPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        MODEL_PLAYS_ID: string | null;
        TIMESCREEN: number;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["model_Time"]>;
    composites: {};
};
export type Model_TimeGetPayload<S extends boolean | null | undefined | Model_TimeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Model_TimePayload, S>;
export type Model_TimeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Model_TimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Model_TimeCountAggregateInputType | true;
};
export interface Model_TimeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Model_Time'];
        meta: {
            name: 'Model_Time';
        };
    };
    /**
     * Find zero or one Model_Time that matches the filter.
     * @param {Model_TimeFindUniqueArgs} args - Arguments to find a Model_Time
     * @example
     * // Get one Model_Time
     * const model_Time = await prisma.model_Time.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Model_TimeFindUniqueArgs>(args: Prisma.SelectSubset<T, Model_TimeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Model_Time that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Model_TimeFindUniqueOrThrowArgs} args - Arguments to find a Model_Time
     * @example
     * // Get one Model_Time
     * const model_Time = await prisma.model_Time.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Model_TimeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Model_TimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Model_Time that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_TimeFindFirstArgs} args - Arguments to find a Model_Time
     * @example
     * // Get one Model_Time
     * const model_Time = await prisma.model_Time.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Model_TimeFindFirstArgs>(args?: Prisma.SelectSubset<T, Model_TimeFindFirstArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Model_Time that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_TimeFindFirstOrThrowArgs} args - Arguments to find a Model_Time
     * @example
     * // Get one Model_Time
     * const model_Time = await prisma.model_Time.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Model_TimeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Model_TimeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Model_Times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_TimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Model_Times
     * const model_Times = await prisma.model_Time.findMany()
     *
     * // Get first 10 Model_Times
     * const model_Times = await prisma.model_Time.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const model_TimeWithIDOnly = await prisma.model_Time.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Model_TimeFindManyArgs>(args?: Prisma.SelectSubset<T, Model_TimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Model_Time.
     * @param {Model_TimeCreateArgs} args - Arguments to create a Model_Time.
     * @example
     * // Create one Model_Time
     * const Model_Time = await prisma.model_Time.create({
     *   data: {
     *     // ... data to create a Model_Time
     *   }
     * })
     *
     */
    create<T extends Model_TimeCreateArgs>(args: Prisma.SelectSubset<T, Model_TimeCreateArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Model_Times.
     * @param {Model_TimeCreateManyArgs} args - Arguments to create many Model_Times.
     * @example
     * // Create many Model_Times
     * const model_Time = await prisma.model_Time.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Model_TimeCreateManyArgs>(args?: Prisma.SelectSubset<T, Model_TimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Model_Times and returns the data saved in the database.
     * @param {Model_TimeCreateManyAndReturnArgs} args - Arguments to create many Model_Times.
     * @example
     * // Create many Model_Times
     * const model_Time = await prisma.model_Time.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Model_Times and only return the `ID`
     * const model_TimeWithIDOnly = await prisma.model_Time.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Model_TimeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Model_TimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Model_Time.
     * @param {Model_TimeDeleteArgs} args - Arguments to delete one Model_Time.
     * @example
     * // Delete one Model_Time
     * const Model_Time = await prisma.model_Time.delete({
     *   where: {
     *     // ... filter to delete one Model_Time
     *   }
     * })
     *
     */
    delete<T extends Model_TimeDeleteArgs>(args: Prisma.SelectSubset<T, Model_TimeDeleteArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Model_Time.
     * @param {Model_TimeUpdateArgs} args - Arguments to update one Model_Time.
     * @example
     * // Update one Model_Time
     * const model_Time = await prisma.model_Time.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Model_TimeUpdateArgs>(args: Prisma.SelectSubset<T, Model_TimeUpdateArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Model_Times.
     * @param {Model_TimeDeleteManyArgs} args - Arguments to filter Model_Times to delete.
     * @example
     * // Delete a few Model_Times
     * const { count } = await prisma.model_Time.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Model_TimeDeleteManyArgs>(args?: Prisma.SelectSubset<T, Model_TimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Model_Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_TimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Model_Times
     * const model_Time = await prisma.model_Time.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Model_TimeUpdateManyArgs>(args: Prisma.SelectSubset<T, Model_TimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Model_Times and returns the data updated in the database.
     * @param {Model_TimeUpdateManyAndReturnArgs} args - Arguments to update many Model_Times.
     * @example
     * // Update many Model_Times
     * const model_Time = await prisma.model_Time.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Model_Times and only return the `ID`
     * const model_TimeWithIDOnly = await prisma.model_Time.updateManyAndReturn({
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
    updateManyAndReturn<T extends Model_TimeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Model_TimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Model_Time.
     * @param {Model_TimeUpsertArgs} args - Arguments to update or create a Model_Time.
     * @example
     * // Update or create a Model_Time
     * const model_Time = await prisma.model_Time.upsert({
     *   create: {
     *     // ... data to create a Model_Time
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model_Time we want to update
     *   }
     * })
     */
    upsert<T extends Model_TimeUpsertArgs>(args: Prisma.SelectSubset<T, Model_TimeUpsertArgs<ExtArgs>>): Prisma.Prisma__Model_TimeClient<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Model_Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_TimeCountArgs} args - Arguments to filter Model_Times to count.
     * @example
     * // Count the number of Model_Times
     * const count = await prisma.model_Time.count({
     *   where: {
     *     // ... the filter for the Model_Times we want to count
     *   }
     * })
    **/
    count<T extends Model_TimeCountArgs>(args?: Prisma.Subset<T, Model_TimeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Model_TimeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Model_Time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_TimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Model_TimeAggregateArgs>(args: Prisma.Subset<T, Model_TimeAggregateArgs>): Prisma.PrismaPromise<GetModel_TimeAggregateType<T>>;
    /**
     * Group by Model_Time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_TimeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Model_TimeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Model_TimeGroupByArgs['orderBy'];
    } : {
        orderBy?: Model_TimeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Model_TimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_TimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Model_Time model
     */
    readonly fields: Model_TimeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Model_Time.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Model_TimeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MODEL_PLAYS<T extends Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Model_Time$MODEL_PLAYSArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Model_Time model
 */
export interface Model_TimeFieldRefs {
    readonly ID: Prisma.FieldRef<"Model_Time", 'String'>;
    readonly MODEL_PLAYS_ID: Prisma.FieldRef<"Model_Time", 'String'>;
    readonly TIMESCREEN: Prisma.FieldRef<"Model_Time", 'Int'>;
    readonly CREATED_AT: Prisma.FieldRef<"Model_Time", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Model_Time", 'DateTime'>;
}
/**
 * Model_Time findUnique
 */
export type Model_TimeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Time to fetch.
     */
    where: Prisma.Model_TimeWhereUniqueInput;
};
/**
 * Model_Time findUniqueOrThrow
 */
export type Model_TimeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Time to fetch.
     */
    where: Prisma.Model_TimeWhereUniqueInput;
};
/**
 * Model_Time findFirst
 */
export type Model_TimeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Time to fetch.
     */
    where?: Prisma.Model_TimeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Times to fetch.
     */
    orderBy?: Prisma.Model_TimeOrderByWithRelationInput | Prisma.Model_TimeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Model_Times.
     */
    cursor?: Prisma.Model_TimeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Times.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Times.
     */
    distinct?: Prisma.Model_TimeScalarFieldEnum | Prisma.Model_TimeScalarFieldEnum[];
};
/**
 * Model_Time findFirstOrThrow
 */
export type Model_TimeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Time to fetch.
     */
    where?: Prisma.Model_TimeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Times to fetch.
     */
    orderBy?: Prisma.Model_TimeOrderByWithRelationInput | Prisma.Model_TimeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Model_Times.
     */
    cursor?: Prisma.Model_TimeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Times.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Times.
     */
    distinct?: Prisma.Model_TimeScalarFieldEnum | Prisma.Model_TimeScalarFieldEnum[];
};
/**
 * Model_Time findMany
 */
export type Model_TimeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * Filter, which Model_Times to fetch.
     */
    where?: Prisma.Model_TimeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Times to fetch.
     */
    orderBy?: Prisma.Model_TimeOrderByWithRelationInput | Prisma.Model_TimeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Model_Times.
     */
    cursor?: Prisma.Model_TimeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Times.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Times.
     */
    distinct?: Prisma.Model_TimeScalarFieldEnum | Prisma.Model_TimeScalarFieldEnum[];
};
/**
 * Model_Time create
 */
export type Model_TimeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Model_Time.
     */
    data?: Prisma.XOR<Prisma.Model_TimeCreateInput, Prisma.Model_TimeUncheckedCreateInput>;
};
/**
 * Model_Time createMany
 */
export type Model_TimeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Model_Times.
     */
    data: Prisma.Model_TimeCreateManyInput | Prisma.Model_TimeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Model_Time createManyAndReturn
 */
export type Model_TimeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * The data used to create many Model_Times.
     */
    data: Prisma.Model_TimeCreateManyInput | Prisma.Model_TimeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Model_Time update
 */
export type Model_TimeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Model_Time.
     */
    data: Prisma.XOR<Prisma.Model_TimeUpdateInput, Prisma.Model_TimeUncheckedUpdateInput>;
    /**
     * Choose, which Model_Time to update.
     */
    where: Prisma.Model_TimeWhereUniqueInput;
};
/**
 * Model_Time updateMany
 */
export type Model_TimeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Model_Times.
     */
    data: Prisma.XOR<Prisma.Model_TimeUpdateManyMutationInput, Prisma.Model_TimeUncheckedUpdateManyInput>;
    /**
     * Filter which Model_Times to update
     */
    where?: Prisma.Model_TimeWhereInput;
    /**
     * Limit how many Model_Times to update.
     */
    limit?: number;
};
/**
 * Model_Time updateManyAndReturn
 */
export type Model_TimeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * The data used to update Model_Times.
     */
    data: Prisma.XOR<Prisma.Model_TimeUpdateManyMutationInput, Prisma.Model_TimeUncheckedUpdateManyInput>;
    /**
     * Filter which Model_Times to update
     */
    where?: Prisma.Model_TimeWhereInput;
    /**
     * Limit how many Model_Times to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Model_Time upsert
 */
export type Model_TimeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Model_Time to update in case it exists.
     */
    where: Prisma.Model_TimeWhereUniqueInput;
    /**
     * In case the Model_Time found by the `where` argument doesn't exist, create a new Model_Time with this data.
     */
    create: Prisma.XOR<Prisma.Model_TimeCreateInput, Prisma.Model_TimeUncheckedCreateInput>;
    /**
     * In case the Model_Time was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Model_TimeUpdateInput, Prisma.Model_TimeUncheckedUpdateInput>;
};
/**
 * Model_Time delete
 */
export type Model_TimeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
    /**
     * Filter which Model_Time to delete.
     */
    where: Prisma.Model_TimeWhereUniqueInput;
};
/**
 * Model_Time deleteMany
 */
export type Model_TimeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Model_Times to delete
     */
    where?: Prisma.Model_TimeWhereInput;
    /**
     * Limit how many Model_Times to delete.
     */
    limit?: number;
};
/**
 * Model_Time.MODEL_PLAYS
 */
export type Model_Time$MODEL_PLAYSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Model_Time without action
 */
export type Model_TimeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Time
     */
    select?: Prisma.Model_TimeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Time
     */
    omit?: Prisma.Model_TimeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_TimeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Model_Time.d.ts.map
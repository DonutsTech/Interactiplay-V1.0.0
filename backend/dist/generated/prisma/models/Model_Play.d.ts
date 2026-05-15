import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Model_Play
 *
 */
export type Model_PlayModel = runtime.Types.Result.DefaultSelection<Prisma.$Model_PlayPayload>;
export type AggregateModel_Play = {
    _count: Model_PlayCountAggregateOutputType | null;
    _avg: Model_PlayAvgAggregateOutputType | null;
    _sum: Model_PlaySumAggregateOutputType | null;
    _min: Model_PlayMinAggregateOutputType | null;
    _max: Model_PlayMaxAggregateOutputType | null;
};
export type Model_PlayAvgAggregateOutputType = {
    PLAY_UNIQUE: number | null;
    PLAY_BLOCK: number | null;
    PLAY: number | null;
    VIEW: number | null;
};
export type Model_PlaySumAggregateOutputType = {
    PLAY_UNIQUE: number | null;
    PLAY_BLOCK: number | null;
    PLAY: number | null;
    VIEW: number | null;
};
export type Model_PlayMinAggregateOutputType = {
    ID: string | null;
    ANALYTICS_ID: string | null;
    MODEL_VIEWS_ID: string | null;
    PLAY_UNIQUE: number | null;
    PLAY_BLOCK: number | null;
    PLAY: number | null;
    VIEW: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Model_PlayMaxAggregateOutputType = {
    ID: string | null;
    ANALYTICS_ID: string | null;
    MODEL_VIEWS_ID: string | null;
    PLAY_UNIQUE: number | null;
    PLAY_BLOCK: number | null;
    PLAY: number | null;
    VIEW: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Model_PlayCountAggregateOutputType = {
    ID: number;
    ANALYTICS_ID: number;
    MODEL_VIEWS_ID: number;
    PLAY_UNIQUE: number;
    PLAY_BLOCK: number;
    PLAY: number;
    VIEW: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Model_PlayAvgAggregateInputType = {
    PLAY_UNIQUE?: true;
    PLAY_BLOCK?: true;
    PLAY?: true;
    VIEW?: true;
};
export type Model_PlaySumAggregateInputType = {
    PLAY_UNIQUE?: true;
    PLAY_BLOCK?: true;
    PLAY?: true;
    VIEW?: true;
};
export type Model_PlayMinAggregateInputType = {
    ID?: true;
    ANALYTICS_ID?: true;
    MODEL_VIEWS_ID?: true;
    PLAY_UNIQUE?: true;
    PLAY_BLOCK?: true;
    PLAY?: true;
    VIEW?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Model_PlayMaxAggregateInputType = {
    ID?: true;
    ANALYTICS_ID?: true;
    MODEL_VIEWS_ID?: true;
    PLAY_UNIQUE?: true;
    PLAY_BLOCK?: true;
    PLAY?: true;
    VIEW?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Model_PlayCountAggregateInputType = {
    ID?: true;
    ANALYTICS_ID?: true;
    MODEL_VIEWS_ID?: true;
    PLAY_UNIQUE?: true;
    PLAY_BLOCK?: true;
    PLAY?: true;
    VIEW?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Model_PlayAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Model_Play to aggregate.
     */
    where?: Prisma.Model_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Plays to fetch.
     */
    orderBy?: Prisma.Model_PlayOrderByWithRelationInput | Prisma.Model_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Model_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Model_Plays
    **/
    _count?: true | Model_PlayCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Model_PlayAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Model_PlaySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Model_PlayMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Model_PlayMaxAggregateInputType;
};
export type GetModel_PlayAggregateType<T extends Model_PlayAggregateArgs> = {
    [P in keyof T & keyof AggregateModel_Play]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModel_Play[P]> : Prisma.GetScalarType<T[P], AggregateModel_Play[P]>;
};
export type Model_PlayGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Model_PlayWhereInput;
    orderBy?: Prisma.Model_PlayOrderByWithAggregationInput | Prisma.Model_PlayOrderByWithAggregationInput[];
    by: Prisma.Model_PlayScalarFieldEnum[] | Prisma.Model_PlayScalarFieldEnum;
    having?: Prisma.Model_PlayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Model_PlayCountAggregateInputType | true;
    _avg?: Model_PlayAvgAggregateInputType;
    _sum?: Model_PlaySumAggregateInputType;
    _min?: Model_PlayMinAggregateInputType;
    _max?: Model_PlayMaxAggregateInputType;
};
export type Model_PlayGroupByOutputType = {
    ID: string;
    ANALYTICS_ID: string | null;
    MODEL_VIEWS_ID: string | null;
    PLAY_UNIQUE: number;
    PLAY_BLOCK: number;
    PLAY: number;
    VIEW: number;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Model_PlayCountAggregateOutputType | null;
    _avg: Model_PlayAvgAggregateOutputType | null;
    _sum: Model_PlaySumAggregateOutputType | null;
    _min: Model_PlayMinAggregateOutputType | null;
    _max: Model_PlayMaxAggregateOutputType | null;
};
type GetModel_PlayGroupByPayload<T extends Model_PlayGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Model_PlayGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Model_PlayGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Model_PlayGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Model_PlayGroupByOutputType[P]>;
}>>;
export type Model_PlayWhereInput = {
    AND?: Prisma.Model_PlayWhereInput | Prisma.Model_PlayWhereInput[];
    OR?: Prisma.Model_PlayWhereInput[];
    NOT?: Prisma.Model_PlayWhereInput | Prisma.Model_PlayWhereInput[];
    ID?: Prisma.StringFilter<"Model_Play"> | string;
    ANALYTICS_ID?: Prisma.StringNullableFilter<"Model_Play"> | string | null;
    MODEL_VIEWS_ID?: Prisma.StringNullableFilter<"Model_Play"> | string | null;
    PLAY_UNIQUE?: Prisma.IntFilter<"Model_Play"> | number;
    PLAY_BLOCK?: Prisma.IntFilter<"Model_Play"> | number;
    PLAY?: Prisma.IntFilter<"Model_Play"> | number;
    VIEW?: Prisma.IntFilter<"Model_Play"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Play"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Play"> | Date | string | null;
    ANALYTICS?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    MODEL_VIEWS?: Prisma.XOR<Prisma.Model_ViewsNullableScalarRelationFilter, Prisma.Model_ViewsWhereInput> | null;
    MODEL_TIME?: Prisma.Model_TimeListRelationFilter;
};
export type Model_PlayOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    MODEL_VIEWS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    PLAY_UNIQUE?: Prisma.SortOrder;
    PLAY_BLOCK?: Prisma.SortOrder;
    PLAY?: Prisma.SortOrder;
    VIEW?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    ANALYTICS?: Prisma.AnalyticsOrderByWithRelationInput;
    MODEL_VIEWS?: Prisma.Model_ViewsOrderByWithRelationInput;
    MODEL_TIME?: Prisma.Model_TimeOrderByRelationAggregateInput;
};
export type Model_PlayWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.Model_PlayWhereInput | Prisma.Model_PlayWhereInput[];
    OR?: Prisma.Model_PlayWhereInput[];
    NOT?: Prisma.Model_PlayWhereInput | Prisma.Model_PlayWhereInput[];
    ANALYTICS_ID?: Prisma.StringNullableFilter<"Model_Play"> | string | null;
    MODEL_VIEWS_ID?: Prisma.StringNullableFilter<"Model_Play"> | string | null;
    PLAY_UNIQUE?: Prisma.IntFilter<"Model_Play"> | number;
    PLAY_BLOCK?: Prisma.IntFilter<"Model_Play"> | number;
    PLAY?: Prisma.IntFilter<"Model_Play"> | number;
    VIEW?: Prisma.IntFilter<"Model_Play"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Play"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Play"> | Date | string | null;
    ANALYTICS?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    MODEL_VIEWS?: Prisma.XOR<Prisma.Model_ViewsNullableScalarRelationFilter, Prisma.Model_ViewsWhereInput> | null;
    MODEL_TIME?: Prisma.Model_TimeListRelationFilter;
}, "ID">;
export type Model_PlayOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    MODEL_VIEWS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    PLAY_UNIQUE?: Prisma.SortOrder;
    PLAY_BLOCK?: Prisma.SortOrder;
    PLAY?: Prisma.SortOrder;
    VIEW?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Model_PlayCountOrderByAggregateInput;
    _avg?: Prisma.Model_PlayAvgOrderByAggregateInput;
    _max?: Prisma.Model_PlayMaxOrderByAggregateInput;
    _min?: Prisma.Model_PlayMinOrderByAggregateInput;
    _sum?: Prisma.Model_PlaySumOrderByAggregateInput;
};
export type Model_PlayScalarWhereWithAggregatesInput = {
    AND?: Prisma.Model_PlayScalarWhereWithAggregatesInput | Prisma.Model_PlayScalarWhereWithAggregatesInput[];
    OR?: Prisma.Model_PlayScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Model_PlayScalarWhereWithAggregatesInput | Prisma.Model_PlayScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Model_Play"> | string;
    ANALYTICS_ID?: Prisma.StringNullableWithAggregatesFilter<"Model_Play"> | string | null;
    MODEL_VIEWS_ID?: Prisma.StringNullableWithAggregatesFilter<"Model_Play"> | string | null;
    PLAY_UNIQUE?: Prisma.IntWithAggregatesFilter<"Model_Play"> | number;
    PLAY_BLOCK?: Prisma.IntWithAggregatesFilter<"Model_Play"> | number;
    PLAY?: Prisma.IntWithAggregatesFilter<"Model_Play"> | number;
    VIEW?: Prisma.IntWithAggregatesFilter<"Model_Play"> | number;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Model_Play"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Model_Play"> | Date | string | null;
};
export type Model_PlayCreateInput = {
    ID?: string;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutMODEL_PLAYSInput;
    MODEL_VIEWS?: Prisma.Model_ViewsCreateNestedOneWithoutMODEL_PLAYSInput;
    MODEL_TIME?: Prisma.Model_TimeCreateNestedManyWithoutMODEL_PLAYSInput;
};
export type Model_PlayUncheckedCreateInput = {
    ID?: string;
    ANALYTICS_ID?: string | null;
    MODEL_VIEWS_ID?: string | null;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    MODEL_TIME?: Prisma.Model_TimeUncheckedCreateNestedManyWithoutMODEL_PLAYSInput;
};
export type Model_PlayUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutMODEL_PLAYSNestedInput;
    MODEL_VIEWS?: Prisma.Model_ViewsUpdateOneWithoutMODEL_PLAYSNestedInput;
    MODEL_TIME?: Prisma.Model_TimeUpdateManyWithoutMODEL_PLAYSNestedInput;
};
export type Model_PlayUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MODEL_VIEWS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MODEL_TIME?: Prisma.Model_TimeUncheckedUpdateManyWithoutMODEL_PLAYSNestedInput;
};
export type Model_PlayCreateManyInput = {
    ID?: string;
    ANALYTICS_ID?: string | null;
    MODEL_VIEWS_ID?: string | null;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_PlayUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_PlayUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MODEL_VIEWS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_PlayListRelationFilter = {
    every?: Prisma.Model_PlayWhereInput;
    some?: Prisma.Model_PlayWhereInput;
    none?: Prisma.Model_PlayWhereInput;
};
export type Model_PlayOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Model_PlayCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrder;
    MODEL_VIEWS_ID?: Prisma.SortOrder;
    PLAY_UNIQUE?: Prisma.SortOrder;
    PLAY_BLOCK?: Prisma.SortOrder;
    PLAY?: Prisma.SortOrder;
    VIEW?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_PlayAvgOrderByAggregateInput = {
    PLAY_UNIQUE?: Prisma.SortOrder;
    PLAY_BLOCK?: Prisma.SortOrder;
    PLAY?: Prisma.SortOrder;
    VIEW?: Prisma.SortOrder;
};
export type Model_PlayMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrder;
    MODEL_VIEWS_ID?: Prisma.SortOrder;
    PLAY_UNIQUE?: Prisma.SortOrder;
    PLAY_BLOCK?: Prisma.SortOrder;
    PLAY?: Prisma.SortOrder;
    VIEW?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_PlayMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrder;
    MODEL_VIEWS_ID?: Prisma.SortOrder;
    PLAY_UNIQUE?: Prisma.SortOrder;
    PLAY_BLOCK?: Prisma.SortOrder;
    PLAY?: Prisma.SortOrder;
    VIEW?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Model_PlaySumOrderByAggregateInput = {
    PLAY_UNIQUE?: Prisma.SortOrder;
    PLAY_BLOCK?: Prisma.SortOrder;
    PLAY?: Prisma.SortOrder;
    VIEW?: Prisma.SortOrder;
};
export type Model_PlayNullableScalarRelationFilter = {
    is?: Prisma.Model_PlayWhereInput | null;
    isNot?: Prisma.Model_PlayWhereInput | null;
};
export type Model_PlayCreateNestedManyWithoutANALYTICSInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput> | Prisma.Model_PlayCreateWithoutANALYTICSInput[] | Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput | Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput[];
    createMany?: Prisma.Model_PlayCreateManyANALYTICSInputEnvelope;
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
};
export type Model_PlayUncheckedCreateNestedManyWithoutANALYTICSInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput> | Prisma.Model_PlayCreateWithoutANALYTICSInput[] | Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput | Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput[];
    createMany?: Prisma.Model_PlayCreateManyANALYTICSInputEnvelope;
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
};
export type Model_PlayUpdateManyWithoutANALYTICSNestedInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput> | Prisma.Model_PlayCreateWithoutANALYTICSInput[] | Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput | Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput[];
    upsert?: Prisma.Model_PlayUpsertWithWhereUniqueWithoutANALYTICSInput | Prisma.Model_PlayUpsertWithWhereUniqueWithoutANALYTICSInput[];
    createMany?: Prisma.Model_PlayCreateManyANALYTICSInputEnvelope;
    set?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    disconnect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    delete?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    update?: Prisma.Model_PlayUpdateWithWhereUniqueWithoutANALYTICSInput | Prisma.Model_PlayUpdateWithWhereUniqueWithoutANALYTICSInput[];
    updateMany?: Prisma.Model_PlayUpdateManyWithWhereWithoutANALYTICSInput | Prisma.Model_PlayUpdateManyWithWhereWithoutANALYTICSInput[];
    deleteMany?: Prisma.Model_PlayScalarWhereInput | Prisma.Model_PlayScalarWhereInput[];
};
export type Model_PlayUncheckedUpdateManyWithoutANALYTICSNestedInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput> | Prisma.Model_PlayCreateWithoutANALYTICSInput[] | Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput | Prisma.Model_PlayCreateOrConnectWithoutANALYTICSInput[];
    upsert?: Prisma.Model_PlayUpsertWithWhereUniqueWithoutANALYTICSInput | Prisma.Model_PlayUpsertWithWhereUniqueWithoutANALYTICSInput[];
    createMany?: Prisma.Model_PlayCreateManyANALYTICSInputEnvelope;
    set?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    disconnect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    delete?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    update?: Prisma.Model_PlayUpdateWithWhereUniqueWithoutANALYTICSInput | Prisma.Model_PlayUpdateWithWhereUniqueWithoutANALYTICSInput[];
    updateMany?: Prisma.Model_PlayUpdateManyWithWhereWithoutANALYTICSInput | Prisma.Model_PlayUpdateManyWithWhereWithoutANALYTICSInput[];
    deleteMany?: Prisma.Model_PlayScalarWhereInput | Prisma.Model_PlayScalarWhereInput[];
};
export type Model_PlayCreateNestedManyWithoutMODEL_VIEWSInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput> | Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput[] | Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput | Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput[];
    createMany?: Prisma.Model_PlayCreateManyMODEL_VIEWSInputEnvelope;
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
};
export type Model_PlayUncheckedCreateNestedManyWithoutMODEL_VIEWSInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput> | Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput[] | Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput | Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput[];
    createMany?: Prisma.Model_PlayCreateManyMODEL_VIEWSInputEnvelope;
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
};
export type Model_PlayUpdateManyWithoutMODEL_VIEWSNestedInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput> | Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput[] | Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput | Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput[];
    upsert?: Prisma.Model_PlayUpsertWithWhereUniqueWithoutMODEL_VIEWSInput | Prisma.Model_PlayUpsertWithWhereUniqueWithoutMODEL_VIEWSInput[];
    createMany?: Prisma.Model_PlayCreateManyMODEL_VIEWSInputEnvelope;
    set?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    disconnect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    delete?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    update?: Prisma.Model_PlayUpdateWithWhereUniqueWithoutMODEL_VIEWSInput | Prisma.Model_PlayUpdateWithWhereUniqueWithoutMODEL_VIEWSInput[];
    updateMany?: Prisma.Model_PlayUpdateManyWithWhereWithoutMODEL_VIEWSInput | Prisma.Model_PlayUpdateManyWithWhereWithoutMODEL_VIEWSInput[];
    deleteMany?: Prisma.Model_PlayScalarWhereInput | Prisma.Model_PlayScalarWhereInput[];
};
export type Model_PlayUncheckedUpdateManyWithoutMODEL_VIEWSNestedInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput> | Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput[] | Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput[];
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput | Prisma.Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput[];
    upsert?: Prisma.Model_PlayUpsertWithWhereUniqueWithoutMODEL_VIEWSInput | Prisma.Model_PlayUpsertWithWhereUniqueWithoutMODEL_VIEWSInput[];
    createMany?: Prisma.Model_PlayCreateManyMODEL_VIEWSInputEnvelope;
    set?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    disconnect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    delete?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    connect?: Prisma.Model_PlayWhereUniqueInput | Prisma.Model_PlayWhereUniqueInput[];
    update?: Prisma.Model_PlayUpdateWithWhereUniqueWithoutMODEL_VIEWSInput | Prisma.Model_PlayUpdateWithWhereUniqueWithoutMODEL_VIEWSInput[];
    updateMany?: Prisma.Model_PlayUpdateManyWithWhereWithoutMODEL_VIEWSInput | Prisma.Model_PlayUpdateManyWithWhereWithoutMODEL_VIEWSInput[];
    deleteMany?: Prisma.Model_PlayScalarWhereInput | Prisma.Model_PlayScalarWhereInput[];
};
export type Model_PlayCreateNestedOneWithoutMODEL_TIMEInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_TIMEInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_TIMEInput>;
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutMODEL_TIMEInput;
    connect?: Prisma.Model_PlayWhereUniqueInput;
};
export type Model_PlayUpdateOneWithoutMODEL_TIMENestedInput = {
    create?: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_TIMEInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_TIMEInput>;
    connectOrCreate?: Prisma.Model_PlayCreateOrConnectWithoutMODEL_TIMEInput;
    upsert?: Prisma.Model_PlayUpsertWithoutMODEL_TIMEInput;
    disconnect?: Prisma.Model_PlayWhereInput | boolean;
    delete?: Prisma.Model_PlayWhereInput | boolean;
    connect?: Prisma.Model_PlayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Model_PlayUpdateToOneWithWhereWithoutMODEL_TIMEInput, Prisma.Model_PlayUpdateWithoutMODEL_TIMEInput>, Prisma.Model_PlayUncheckedUpdateWithoutMODEL_TIMEInput>;
};
export type Model_PlayCreateWithoutANALYTICSInput = {
    ID?: string;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    MODEL_VIEWS?: Prisma.Model_ViewsCreateNestedOneWithoutMODEL_PLAYSInput;
    MODEL_TIME?: Prisma.Model_TimeCreateNestedManyWithoutMODEL_PLAYSInput;
};
export type Model_PlayUncheckedCreateWithoutANALYTICSInput = {
    ID?: string;
    MODEL_VIEWS_ID?: string | null;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    MODEL_TIME?: Prisma.Model_TimeUncheckedCreateNestedManyWithoutMODEL_PLAYSInput;
};
export type Model_PlayCreateOrConnectWithoutANALYTICSInput = {
    where: Prisma.Model_PlayWhereUniqueInput;
    create: Prisma.XOR<Prisma.Model_PlayCreateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput>;
};
export type Model_PlayCreateManyANALYTICSInputEnvelope = {
    data: Prisma.Model_PlayCreateManyANALYTICSInput | Prisma.Model_PlayCreateManyANALYTICSInput[];
    skipDuplicates?: boolean;
};
export type Model_PlayUpsertWithWhereUniqueWithoutANALYTICSInput = {
    where: Prisma.Model_PlayWhereUniqueInput;
    update: Prisma.XOR<Prisma.Model_PlayUpdateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedUpdateWithoutANALYTICSInput>;
    create: Prisma.XOR<Prisma.Model_PlayCreateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedCreateWithoutANALYTICSInput>;
};
export type Model_PlayUpdateWithWhereUniqueWithoutANALYTICSInput = {
    where: Prisma.Model_PlayWhereUniqueInput;
    data: Prisma.XOR<Prisma.Model_PlayUpdateWithoutANALYTICSInput, Prisma.Model_PlayUncheckedUpdateWithoutANALYTICSInput>;
};
export type Model_PlayUpdateManyWithWhereWithoutANALYTICSInput = {
    where: Prisma.Model_PlayScalarWhereInput;
    data: Prisma.XOR<Prisma.Model_PlayUpdateManyMutationInput, Prisma.Model_PlayUncheckedUpdateManyWithoutANALYTICSInput>;
};
export type Model_PlayScalarWhereInput = {
    AND?: Prisma.Model_PlayScalarWhereInput | Prisma.Model_PlayScalarWhereInput[];
    OR?: Prisma.Model_PlayScalarWhereInput[];
    NOT?: Prisma.Model_PlayScalarWhereInput | Prisma.Model_PlayScalarWhereInput[];
    ID?: Prisma.StringFilter<"Model_Play"> | string;
    ANALYTICS_ID?: Prisma.StringNullableFilter<"Model_Play"> | string | null;
    MODEL_VIEWS_ID?: Prisma.StringNullableFilter<"Model_Play"> | string | null;
    PLAY_UNIQUE?: Prisma.IntFilter<"Model_Play"> | number;
    PLAY_BLOCK?: Prisma.IntFilter<"Model_Play"> | number;
    PLAY?: Prisma.IntFilter<"Model_Play"> | number;
    VIEW?: Prisma.IntFilter<"Model_Play"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Model_Play"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Model_Play"> | Date | string | null;
};
export type Model_PlayCreateWithoutMODEL_VIEWSInput = {
    ID?: string;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutMODEL_PLAYSInput;
    MODEL_TIME?: Prisma.Model_TimeCreateNestedManyWithoutMODEL_PLAYSInput;
};
export type Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput = {
    ID?: string;
    ANALYTICS_ID?: string | null;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    MODEL_TIME?: Prisma.Model_TimeUncheckedCreateNestedManyWithoutMODEL_PLAYSInput;
};
export type Model_PlayCreateOrConnectWithoutMODEL_VIEWSInput = {
    where: Prisma.Model_PlayWhereUniqueInput;
    create: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput>;
};
export type Model_PlayCreateManyMODEL_VIEWSInputEnvelope = {
    data: Prisma.Model_PlayCreateManyMODEL_VIEWSInput | Prisma.Model_PlayCreateManyMODEL_VIEWSInput[];
    skipDuplicates?: boolean;
};
export type Model_PlayUpsertWithWhereUniqueWithoutMODEL_VIEWSInput = {
    where: Prisma.Model_PlayWhereUniqueInput;
    update: Prisma.XOR<Prisma.Model_PlayUpdateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedUpdateWithoutMODEL_VIEWSInput>;
    create: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_VIEWSInput>;
};
export type Model_PlayUpdateWithWhereUniqueWithoutMODEL_VIEWSInput = {
    where: Prisma.Model_PlayWhereUniqueInput;
    data: Prisma.XOR<Prisma.Model_PlayUpdateWithoutMODEL_VIEWSInput, Prisma.Model_PlayUncheckedUpdateWithoutMODEL_VIEWSInput>;
};
export type Model_PlayUpdateManyWithWhereWithoutMODEL_VIEWSInput = {
    where: Prisma.Model_PlayScalarWhereInput;
    data: Prisma.XOR<Prisma.Model_PlayUpdateManyMutationInput, Prisma.Model_PlayUncheckedUpdateManyWithoutMODEL_VIEWSInput>;
};
export type Model_PlayCreateWithoutMODEL_TIMEInput = {
    ID?: string;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutMODEL_PLAYSInput;
    MODEL_VIEWS?: Prisma.Model_ViewsCreateNestedOneWithoutMODEL_PLAYSInput;
};
export type Model_PlayUncheckedCreateWithoutMODEL_TIMEInput = {
    ID?: string;
    ANALYTICS_ID?: string | null;
    MODEL_VIEWS_ID?: string | null;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_PlayCreateOrConnectWithoutMODEL_TIMEInput = {
    where: Prisma.Model_PlayWhereUniqueInput;
    create: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_TIMEInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_TIMEInput>;
};
export type Model_PlayUpsertWithoutMODEL_TIMEInput = {
    update: Prisma.XOR<Prisma.Model_PlayUpdateWithoutMODEL_TIMEInput, Prisma.Model_PlayUncheckedUpdateWithoutMODEL_TIMEInput>;
    create: Prisma.XOR<Prisma.Model_PlayCreateWithoutMODEL_TIMEInput, Prisma.Model_PlayUncheckedCreateWithoutMODEL_TIMEInput>;
    where?: Prisma.Model_PlayWhereInput;
};
export type Model_PlayUpdateToOneWithWhereWithoutMODEL_TIMEInput = {
    where?: Prisma.Model_PlayWhereInput;
    data: Prisma.XOR<Prisma.Model_PlayUpdateWithoutMODEL_TIMEInput, Prisma.Model_PlayUncheckedUpdateWithoutMODEL_TIMEInput>;
};
export type Model_PlayUpdateWithoutMODEL_TIMEInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutMODEL_PLAYSNestedInput;
    MODEL_VIEWS?: Prisma.Model_ViewsUpdateOneWithoutMODEL_PLAYSNestedInput;
};
export type Model_PlayUncheckedUpdateWithoutMODEL_TIMEInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MODEL_VIEWS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_PlayCreateManyANALYTICSInput = {
    ID?: string;
    MODEL_VIEWS_ID?: string | null;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_PlayUpdateWithoutANALYTICSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MODEL_VIEWS?: Prisma.Model_ViewsUpdateOneWithoutMODEL_PLAYSNestedInput;
    MODEL_TIME?: Prisma.Model_TimeUpdateManyWithoutMODEL_PLAYSNestedInput;
};
export type Model_PlayUncheckedUpdateWithoutANALYTICSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    MODEL_VIEWS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MODEL_TIME?: Prisma.Model_TimeUncheckedUpdateManyWithoutMODEL_PLAYSNestedInput;
};
export type Model_PlayUncheckedUpdateManyWithoutANALYTICSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    MODEL_VIEWS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Model_PlayCreateManyMODEL_VIEWSInput = {
    ID?: string;
    ANALYTICS_ID?: string | null;
    PLAY_UNIQUE?: number;
    PLAY_BLOCK?: number;
    PLAY?: number;
    VIEW?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Model_PlayUpdateWithoutMODEL_VIEWSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutMODEL_PLAYSNestedInput;
    MODEL_TIME?: Prisma.Model_TimeUpdateManyWithoutMODEL_PLAYSNestedInput;
};
export type Model_PlayUncheckedUpdateWithoutMODEL_VIEWSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MODEL_TIME?: Prisma.Model_TimeUncheckedUpdateManyWithoutMODEL_PLAYSNestedInput;
};
export type Model_PlayUncheckedUpdateManyWithoutMODEL_VIEWSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    PLAY?: Prisma.IntFieldUpdateOperationsInput | number;
    VIEW?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type Model_PlayCountOutputType
 */
export type Model_PlayCountOutputType = {
    MODEL_TIME: number;
};
export type Model_PlayCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MODEL_TIME?: boolean | Model_PlayCountOutputTypeCountMODEL_TIMEArgs;
};
/**
 * Model_PlayCountOutputType without action
 */
export type Model_PlayCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_PlayCountOutputType
     */
    select?: Prisma.Model_PlayCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Model_PlayCountOutputType without action
 */
export type Model_PlayCountOutputTypeCountMODEL_TIMEArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Model_TimeWhereInput;
};
export type Model_PlaySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ANALYTICS_ID?: boolean;
    MODEL_VIEWS_ID?: boolean;
    PLAY_UNIQUE?: boolean;
    PLAY_BLOCK?: boolean;
    PLAY?: boolean;
    VIEW?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    ANALYTICS?: boolean | Prisma.Model_Play$ANALYTICSArgs<ExtArgs>;
    MODEL_VIEWS?: boolean | Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs>;
    MODEL_TIME?: boolean | Prisma.Model_Play$MODEL_TIMEArgs<ExtArgs>;
    _count?: boolean | Prisma.Model_PlayCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["model_Play"]>;
export type Model_PlaySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ANALYTICS_ID?: boolean;
    MODEL_VIEWS_ID?: boolean;
    PLAY_UNIQUE?: boolean;
    PLAY_BLOCK?: boolean;
    PLAY?: boolean;
    VIEW?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    ANALYTICS?: boolean | Prisma.Model_Play$ANALYTICSArgs<ExtArgs>;
    MODEL_VIEWS?: boolean | Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs>;
}, ExtArgs["result"]["model_Play"]>;
export type Model_PlaySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ANALYTICS_ID?: boolean;
    MODEL_VIEWS_ID?: boolean;
    PLAY_UNIQUE?: boolean;
    PLAY_BLOCK?: boolean;
    PLAY?: boolean;
    VIEW?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    ANALYTICS?: boolean | Prisma.Model_Play$ANALYTICSArgs<ExtArgs>;
    MODEL_VIEWS?: boolean | Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs>;
}, ExtArgs["result"]["model_Play"]>;
export type Model_PlaySelectScalar = {
    ID?: boolean;
    ANALYTICS_ID?: boolean;
    MODEL_VIEWS_ID?: boolean;
    PLAY_UNIQUE?: boolean;
    PLAY_BLOCK?: boolean;
    PLAY?: boolean;
    VIEW?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Model_PlayOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "ANALYTICS_ID" | "MODEL_VIEWS_ID" | "PLAY_UNIQUE" | "PLAY_BLOCK" | "PLAY" | "VIEW" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["model_Play"]>;
export type Model_PlayInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ANALYTICS?: boolean | Prisma.Model_Play$ANALYTICSArgs<ExtArgs>;
    MODEL_VIEWS?: boolean | Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs>;
    MODEL_TIME?: boolean | Prisma.Model_Play$MODEL_TIMEArgs<ExtArgs>;
    _count?: boolean | Prisma.Model_PlayCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Model_PlayIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ANALYTICS?: boolean | Prisma.Model_Play$ANALYTICSArgs<ExtArgs>;
    MODEL_VIEWS?: boolean | Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs>;
};
export type Model_PlayIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ANALYTICS?: boolean | Prisma.Model_Play$ANALYTICSArgs<ExtArgs>;
    MODEL_VIEWS?: boolean | Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs>;
};
export type $Model_PlayPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Model_Play";
    objects: {
        ANALYTICS: Prisma.$AnalyticsPayload<ExtArgs> | null;
        MODEL_VIEWS: Prisma.$Model_ViewsPayload<ExtArgs> | null;
        MODEL_TIME: Prisma.$Model_TimePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        ANALYTICS_ID: string | null;
        MODEL_VIEWS_ID: string | null;
        PLAY_UNIQUE: number;
        PLAY_BLOCK: number;
        PLAY: number;
        VIEW: number;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["model_Play"]>;
    composites: {};
};
export type Model_PlayGetPayload<S extends boolean | null | undefined | Model_PlayDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload, S>;
export type Model_PlayCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Model_PlayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Model_PlayCountAggregateInputType | true;
};
export interface Model_PlayDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Model_Play'];
        meta: {
            name: 'Model_Play';
        };
    };
    /**
     * Find zero or one Model_Play that matches the filter.
     * @param {Model_PlayFindUniqueArgs} args - Arguments to find a Model_Play
     * @example
     * // Get one Model_Play
     * const model_Play = await prisma.model_Play.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Model_PlayFindUniqueArgs>(args: Prisma.SelectSubset<T, Model_PlayFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Model_Play that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Model_PlayFindUniqueOrThrowArgs} args - Arguments to find a Model_Play
     * @example
     * // Get one Model_Play
     * const model_Play = await prisma.model_Play.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Model_PlayFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Model_PlayFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Model_Play that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_PlayFindFirstArgs} args - Arguments to find a Model_Play
     * @example
     * // Get one Model_Play
     * const model_Play = await prisma.model_Play.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Model_PlayFindFirstArgs>(args?: Prisma.SelectSubset<T, Model_PlayFindFirstArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Model_Play that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_PlayFindFirstOrThrowArgs} args - Arguments to find a Model_Play
     * @example
     * // Get one Model_Play
     * const model_Play = await prisma.model_Play.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Model_PlayFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Model_PlayFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Model_Plays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_PlayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Model_Plays
     * const model_Plays = await prisma.model_Play.findMany()
     *
     * // Get first 10 Model_Plays
     * const model_Plays = await prisma.model_Play.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const model_PlayWithIDOnly = await prisma.model_Play.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Model_PlayFindManyArgs>(args?: Prisma.SelectSubset<T, Model_PlayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Model_Play.
     * @param {Model_PlayCreateArgs} args - Arguments to create a Model_Play.
     * @example
     * // Create one Model_Play
     * const Model_Play = await prisma.model_Play.create({
     *   data: {
     *     // ... data to create a Model_Play
     *   }
     * })
     *
     */
    create<T extends Model_PlayCreateArgs>(args: Prisma.SelectSubset<T, Model_PlayCreateArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Model_Plays.
     * @param {Model_PlayCreateManyArgs} args - Arguments to create many Model_Plays.
     * @example
     * // Create many Model_Plays
     * const model_Play = await prisma.model_Play.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Model_PlayCreateManyArgs>(args?: Prisma.SelectSubset<T, Model_PlayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Model_Plays and returns the data saved in the database.
     * @param {Model_PlayCreateManyAndReturnArgs} args - Arguments to create many Model_Plays.
     * @example
     * // Create many Model_Plays
     * const model_Play = await prisma.model_Play.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Model_Plays and only return the `ID`
     * const model_PlayWithIDOnly = await prisma.model_Play.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Model_PlayCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Model_PlayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Model_Play.
     * @param {Model_PlayDeleteArgs} args - Arguments to delete one Model_Play.
     * @example
     * // Delete one Model_Play
     * const Model_Play = await prisma.model_Play.delete({
     *   where: {
     *     // ... filter to delete one Model_Play
     *   }
     * })
     *
     */
    delete<T extends Model_PlayDeleteArgs>(args: Prisma.SelectSubset<T, Model_PlayDeleteArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Model_Play.
     * @param {Model_PlayUpdateArgs} args - Arguments to update one Model_Play.
     * @example
     * // Update one Model_Play
     * const model_Play = await prisma.model_Play.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Model_PlayUpdateArgs>(args: Prisma.SelectSubset<T, Model_PlayUpdateArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Model_Plays.
     * @param {Model_PlayDeleteManyArgs} args - Arguments to filter Model_Plays to delete.
     * @example
     * // Delete a few Model_Plays
     * const { count } = await prisma.model_Play.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Model_PlayDeleteManyArgs>(args?: Prisma.SelectSubset<T, Model_PlayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Model_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_PlayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Model_Plays
     * const model_Play = await prisma.model_Play.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Model_PlayUpdateManyArgs>(args: Prisma.SelectSubset<T, Model_PlayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Model_Plays and returns the data updated in the database.
     * @param {Model_PlayUpdateManyAndReturnArgs} args - Arguments to update many Model_Plays.
     * @example
     * // Update many Model_Plays
     * const model_Play = await prisma.model_Play.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Model_Plays and only return the `ID`
     * const model_PlayWithIDOnly = await prisma.model_Play.updateManyAndReturn({
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
    updateManyAndReturn<T extends Model_PlayUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Model_PlayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Model_Play.
     * @param {Model_PlayUpsertArgs} args - Arguments to update or create a Model_Play.
     * @example
     * // Update or create a Model_Play
     * const model_Play = await prisma.model_Play.upsert({
     *   create: {
     *     // ... data to create a Model_Play
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model_Play we want to update
     *   }
     * })
     */
    upsert<T extends Model_PlayUpsertArgs>(args: Prisma.SelectSubset<T, Model_PlayUpsertArgs<ExtArgs>>): Prisma.Prisma__Model_PlayClient<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Model_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_PlayCountArgs} args - Arguments to filter Model_Plays to count.
     * @example
     * // Count the number of Model_Plays
     * const count = await prisma.model_Play.count({
     *   where: {
     *     // ... the filter for the Model_Plays we want to count
     *   }
     * })
    **/
    count<T extends Model_PlayCountArgs>(args?: Prisma.Subset<T, Model_PlayCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Model_PlayCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Model_Play.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_PlayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Model_PlayAggregateArgs>(args: Prisma.Subset<T, Model_PlayAggregateArgs>): Prisma.PrismaPromise<GetModel_PlayAggregateType<T>>;
    /**
     * Group by Model_Play.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_PlayGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Model_PlayGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Model_PlayGroupByArgs['orderBy'];
    } : {
        orderBy?: Model_PlayGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Model_PlayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_PlayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Model_Play model
     */
    readonly fields: Model_PlayFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Model_Play.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Model_PlayClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ANALYTICS<T extends Prisma.Model_Play$ANALYTICSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Model_Play$ANALYTICSArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    MODEL_VIEWS<T extends Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Model_Play$MODEL_VIEWSArgs<ExtArgs>>): Prisma.Prisma__Model_ViewsClient<runtime.Types.Result.GetResult<Prisma.$Model_ViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    MODEL_TIME<T extends Prisma.Model_Play$MODEL_TIMEArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Model_Play$MODEL_TIMEArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_TimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Model_Play model
 */
export interface Model_PlayFieldRefs {
    readonly ID: Prisma.FieldRef<"Model_Play", 'String'>;
    readonly ANALYTICS_ID: Prisma.FieldRef<"Model_Play", 'String'>;
    readonly MODEL_VIEWS_ID: Prisma.FieldRef<"Model_Play", 'String'>;
    readonly PLAY_UNIQUE: Prisma.FieldRef<"Model_Play", 'Int'>;
    readonly PLAY_BLOCK: Prisma.FieldRef<"Model_Play", 'Int'>;
    readonly PLAY: Prisma.FieldRef<"Model_Play", 'Int'>;
    readonly VIEW: Prisma.FieldRef<"Model_Play", 'Int'>;
    readonly CREATED_AT: Prisma.FieldRef<"Model_Play", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Model_Play", 'DateTime'>;
}
/**
 * Model_Play findUnique
 */
export type Model_PlayFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Model_Play to fetch.
     */
    where: Prisma.Model_PlayWhereUniqueInput;
};
/**
 * Model_Play findUniqueOrThrow
 */
export type Model_PlayFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Model_Play to fetch.
     */
    where: Prisma.Model_PlayWhereUniqueInput;
};
/**
 * Model_Play findFirst
 */
export type Model_PlayFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Model_Play to fetch.
     */
    where?: Prisma.Model_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Plays to fetch.
     */
    orderBy?: Prisma.Model_PlayOrderByWithRelationInput | Prisma.Model_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Model_Plays.
     */
    cursor?: Prisma.Model_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Plays.
     */
    distinct?: Prisma.Model_PlayScalarFieldEnum | Prisma.Model_PlayScalarFieldEnum[];
};
/**
 * Model_Play findFirstOrThrow
 */
export type Model_PlayFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Model_Play to fetch.
     */
    where?: Prisma.Model_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Plays to fetch.
     */
    orderBy?: Prisma.Model_PlayOrderByWithRelationInput | Prisma.Model_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Model_Plays.
     */
    cursor?: Prisma.Model_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Plays.
     */
    distinct?: Prisma.Model_PlayScalarFieldEnum | Prisma.Model_PlayScalarFieldEnum[];
};
/**
 * Model_Play findMany
 */
export type Model_PlayFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Model_Plays to fetch.
     */
    where?: Prisma.Model_PlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Model_Plays to fetch.
     */
    orderBy?: Prisma.Model_PlayOrderByWithRelationInput | Prisma.Model_PlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Model_Plays.
     */
    cursor?: Prisma.Model_PlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Model_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Model_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Model_Plays.
     */
    distinct?: Prisma.Model_PlayScalarFieldEnum | Prisma.Model_PlayScalarFieldEnum[];
};
/**
 * Model_Play create
 */
export type Model_PlayCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Model_Play.
     */
    data?: Prisma.XOR<Prisma.Model_PlayCreateInput, Prisma.Model_PlayUncheckedCreateInput>;
};
/**
 * Model_Play createMany
 */
export type Model_PlayCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Model_Plays.
     */
    data: Prisma.Model_PlayCreateManyInput | Prisma.Model_PlayCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Model_Play createManyAndReturn
 */
export type Model_PlayCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Play
     */
    select?: Prisma.Model_PlaySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Play
     */
    omit?: Prisma.Model_PlayOmit<ExtArgs> | null;
    /**
     * The data used to create many Model_Plays.
     */
    data: Prisma.Model_PlayCreateManyInput | Prisma.Model_PlayCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_PlayIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Model_Play update
 */
export type Model_PlayUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Model_Play.
     */
    data: Prisma.XOR<Prisma.Model_PlayUpdateInput, Prisma.Model_PlayUncheckedUpdateInput>;
    /**
     * Choose, which Model_Play to update.
     */
    where: Prisma.Model_PlayWhereUniqueInput;
};
/**
 * Model_Play updateMany
 */
export type Model_PlayUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Model_Plays.
     */
    data: Prisma.XOR<Prisma.Model_PlayUpdateManyMutationInput, Prisma.Model_PlayUncheckedUpdateManyInput>;
    /**
     * Filter which Model_Plays to update
     */
    where?: Prisma.Model_PlayWhereInput;
    /**
     * Limit how many Model_Plays to update.
     */
    limit?: number;
};
/**
 * Model_Play updateManyAndReturn
 */
export type Model_PlayUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_Play
     */
    select?: Prisma.Model_PlaySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Model_Play
     */
    omit?: Prisma.Model_PlayOmit<ExtArgs> | null;
    /**
     * The data used to update Model_Plays.
     */
    data: Prisma.XOR<Prisma.Model_PlayUpdateManyMutationInput, Prisma.Model_PlayUncheckedUpdateManyInput>;
    /**
     * Filter which Model_Plays to update
     */
    where?: Prisma.Model_PlayWhereInput;
    /**
     * Limit how many Model_Plays to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Model_PlayIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Model_Play upsert
 */
export type Model_PlayUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Model_Play to update in case it exists.
     */
    where: Prisma.Model_PlayWhereUniqueInput;
    /**
     * In case the Model_Play found by the `where` argument doesn't exist, create a new Model_Play with this data.
     */
    create: Prisma.XOR<Prisma.Model_PlayCreateInput, Prisma.Model_PlayUncheckedCreateInput>;
    /**
     * In case the Model_Play was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Model_PlayUpdateInput, Prisma.Model_PlayUncheckedUpdateInput>;
};
/**
 * Model_Play delete
 */
export type Model_PlayDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Model_Play to delete.
     */
    where: Prisma.Model_PlayWhereUniqueInput;
};
/**
 * Model_Play deleteMany
 */
export type Model_PlayDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Model_Plays to delete
     */
    where?: Prisma.Model_PlayWhereInput;
    /**
     * Limit how many Model_Plays to delete.
     */
    limit?: number;
};
/**
 * Model_Play.ANALYTICS
 */
export type Model_Play$ANALYTICSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analytics
     */
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsWhereInput;
};
/**
 * Model_Play.MODEL_VIEWS
 */
export type Model_Play$MODEL_VIEWSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Model_ViewsWhereInput;
};
/**
 * Model_Play.MODEL_TIME
 */
export type Model_Play$MODEL_TIMEArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Model_TimeWhereInput;
    orderBy?: Prisma.Model_TimeOrderByWithRelationInput | Prisma.Model_TimeOrderByWithRelationInput[];
    cursor?: Prisma.Model_TimeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_TimeScalarFieldEnum | Prisma.Model_TimeScalarFieldEnum[];
};
/**
 * Model_Play without action
 */
export type Model_PlayDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Model_Play.d.ts.map
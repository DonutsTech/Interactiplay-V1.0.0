import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Test_AB
 *
 */
export type Test_ABModel = runtime.Types.Result.DefaultSelection<Prisma.$Test_ABPayload>;
export type AggregateTest_AB = {
    _count: Test_ABCountAggregateOutputType | null;
    _min: Test_ABMinAggregateOutputType | null;
    _max: Test_ABMaxAggregateOutputType | null;
};
export type Test_ABMinAggregateOutputType = {
    ID: string | null;
    EMBED_JS: string | null;
    EMBED_IFRAME: string | null;
    CAMPAIGN_ID_A: string | null;
    CAMPAIGN_ID_B: string | null;
    ANALYTICS_ID_A: string | null;
    ANALYTICS_ID_B: string | null;
    USER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Test_ABMaxAggregateOutputType = {
    ID: string | null;
    EMBED_JS: string | null;
    EMBED_IFRAME: string | null;
    CAMPAIGN_ID_A: string | null;
    CAMPAIGN_ID_B: string | null;
    ANALYTICS_ID_A: string | null;
    ANALYTICS_ID_B: string | null;
    USER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Test_ABCountAggregateOutputType = {
    ID: number;
    EMBED_JS: number;
    EMBED_IFRAME: number;
    CAMPAIGN_ID_A: number;
    CAMPAIGN_ID_B: number;
    ANALYTICS_ID_A: number;
    ANALYTICS_ID_B: number;
    USER_ID: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Test_ABMinAggregateInputType = {
    ID?: true;
    EMBED_JS?: true;
    EMBED_IFRAME?: true;
    CAMPAIGN_ID_A?: true;
    CAMPAIGN_ID_B?: true;
    ANALYTICS_ID_A?: true;
    ANALYTICS_ID_B?: true;
    USER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Test_ABMaxAggregateInputType = {
    ID?: true;
    EMBED_JS?: true;
    EMBED_IFRAME?: true;
    CAMPAIGN_ID_A?: true;
    CAMPAIGN_ID_B?: true;
    ANALYTICS_ID_A?: true;
    ANALYTICS_ID_B?: true;
    USER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Test_ABCountAggregateInputType = {
    ID?: true;
    EMBED_JS?: true;
    EMBED_IFRAME?: true;
    CAMPAIGN_ID_A?: true;
    CAMPAIGN_ID_B?: true;
    ANALYTICS_ID_A?: true;
    ANALYTICS_ID_B?: true;
    USER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Test_ABAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Test_AB to aggregate.
     */
    where?: Prisma.Test_ABWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Test_ABS to fetch.
     */
    orderBy?: Prisma.Test_ABOrderByWithRelationInput | Prisma.Test_ABOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Test_ABWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Test_ABS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Test_ABS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Test_ABS
    **/
    _count?: true | Test_ABCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Test_ABMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Test_ABMaxAggregateInputType;
};
export type GetTest_ABAggregateType<T extends Test_ABAggregateArgs> = {
    [P in keyof T & keyof AggregateTest_AB]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTest_AB[P]> : Prisma.GetScalarType<T[P], AggregateTest_AB[P]>;
};
export type Test_ABGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Test_ABWhereInput;
    orderBy?: Prisma.Test_ABOrderByWithAggregationInput | Prisma.Test_ABOrderByWithAggregationInput[];
    by: Prisma.Test_ABScalarFieldEnum[] | Prisma.Test_ABScalarFieldEnum;
    having?: Prisma.Test_ABScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Test_ABCountAggregateInputType | true;
    _min?: Test_ABMinAggregateInputType;
    _max?: Test_ABMaxAggregateInputType;
};
export type Test_ABGroupByOutputType = {
    ID: string;
    EMBED_JS: string | null;
    EMBED_IFRAME: string | null;
    CAMPAIGN_ID_A: string | null;
    CAMPAIGN_ID_B: string | null;
    ANALYTICS_ID_A: string | null;
    ANALYTICS_ID_B: string | null;
    USER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Test_ABCountAggregateOutputType | null;
    _min: Test_ABMinAggregateOutputType | null;
    _max: Test_ABMaxAggregateOutputType | null;
};
type GetTest_ABGroupByPayload<T extends Test_ABGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Test_ABGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Test_ABGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Test_ABGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Test_ABGroupByOutputType[P]>;
}>>;
export type Test_ABWhereInput = {
    AND?: Prisma.Test_ABWhereInput | Prisma.Test_ABWhereInput[];
    OR?: Prisma.Test_ABWhereInput[];
    NOT?: Prisma.Test_ABWhereInput | Prisma.Test_ABWhereInput[];
    ID?: Prisma.StringFilter<"Test_AB"> | string;
    EMBED_JS?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_A?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_B?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    ANALYTICS_ID_A?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    ANALYTICS_ID_B?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    USER_ID?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Test_AB"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Test_AB"> | Date | string | null;
    CAMPAIGN_A?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    CAMPAIGN_B?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    ANALYTICS_A?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    ANALYTICS_B?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type Test_ABOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN_ID_A?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN_ID_B?: Prisma.SortOrderInput | Prisma.SortOrder;
    ANALYTICS_ID_A?: Prisma.SortOrderInput | Prisma.SortOrder;
    ANALYTICS_ID_B?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN_A?: Prisma.CampaignOrderByWithRelationInput;
    CAMPAIGN_B?: Prisma.CampaignOrderByWithRelationInput;
    ANALYTICS_A?: Prisma.AnalyticsOrderByWithRelationInput;
    ANALYTICS_B?: Prisma.AnalyticsOrderByWithRelationInput;
    USER?: Prisma.UserOrderByWithRelationInput;
};
export type Test_ABWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    ANALYTICS_ID_A?: string;
    ANALYTICS_ID_B?: string;
    AND?: Prisma.Test_ABWhereInput | Prisma.Test_ABWhereInput[];
    OR?: Prisma.Test_ABWhereInput[];
    NOT?: Prisma.Test_ABWhereInput | Prisma.Test_ABWhereInput[];
    EMBED_JS?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_A?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_B?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    USER_ID?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Test_AB"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Test_AB"> | Date | string | null;
    CAMPAIGN_A?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    CAMPAIGN_B?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    ANALYTICS_A?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    ANALYTICS_B?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "ID" | "ANALYTICS_ID_A" | "ANALYTICS_ID_B">;
export type Test_ABOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN_ID_A?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN_ID_B?: Prisma.SortOrderInput | Prisma.SortOrder;
    ANALYTICS_ID_A?: Prisma.SortOrderInput | Prisma.SortOrder;
    ANALYTICS_ID_B?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Test_ABCountOrderByAggregateInput;
    _max?: Prisma.Test_ABMaxOrderByAggregateInput;
    _min?: Prisma.Test_ABMinOrderByAggregateInput;
};
export type Test_ABScalarWhereWithAggregatesInput = {
    AND?: Prisma.Test_ABScalarWhereWithAggregatesInput | Prisma.Test_ABScalarWhereWithAggregatesInput[];
    OR?: Prisma.Test_ABScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Test_ABScalarWhereWithAggregatesInput | Prisma.Test_ABScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Test_AB"> | string;
    EMBED_JS?: Prisma.StringNullableWithAggregatesFilter<"Test_AB"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableWithAggregatesFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_A?: Prisma.StringNullableWithAggregatesFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_B?: Prisma.StringNullableWithAggregatesFilter<"Test_AB"> | string | null;
    ANALYTICS_ID_A?: Prisma.StringNullableWithAggregatesFilter<"Test_AB"> | string | null;
    ANALYTICS_ID_B?: Prisma.StringNullableWithAggregatesFilter<"Test_AB"> | string | null;
    USER_ID?: Prisma.StringNullableWithAggregatesFilter<"Test_AB"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Test_AB"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Test_AB"> | Date | string | null;
};
export type Test_ABCreateInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignCreateNestedOneWithoutTESTS_AInput;
    CAMPAIGN_B?: Prisma.CampaignCreateNestedOneWithoutTESTS_BInput;
    ANALYTICS_A?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_AInput;
    ANALYTICS_B?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_BInput;
    USER?: Prisma.UserCreateNestedOneWithoutTESTS_ABInput;
};
export type Test_ABUncheckedCreateInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignUpdateOneWithoutTESTS_ANestedInput;
    CAMPAIGN_B?: Prisma.CampaignUpdateOneWithoutTESTS_BNestedInput;
    ANALYTICS_A?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_ANestedInput;
    ANALYTICS_B?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_BNestedInput;
    USER?: Prisma.UserUpdateOneWithoutTESTS_ABNestedInput;
};
export type Test_ABUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABCreateManyInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABListRelationFilter = {
    every?: Prisma.Test_ABWhereInput;
    some?: Prisma.Test_ABWhereInput;
    none?: Prisma.Test_ABWhereInput;
};
export type Test_ABOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Test_ABNullableScalarRelationFilter = {
    is?: Prisma.Test_ABWhereInput | null;
    isNot?: Prisma.Test_ABWhereInput | null;
};
export type Test_ABCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrder;
    CAMPAIGN_ID_A?: Prisma.SortOrder;
    CAMPAIGN_ID_B?: Prisma.SortOrder;
    ANALYTICS_ID_A?: Prisma.SortOrder;
    ANALYTICS_ID_B?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Test_ABMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrder;
    CAMPAIGN_ID_A?: Prisma.SortOrder;
    CAMPAIGN_ID_B?: Prisma.SortOrder;
    ANALYTICS_ID_A?: Prisma.SortOrder;
    ANALYTICS_ID_B?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Test_ABMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrder;
    CAMPAIGN_ID_A?: Prisma.SortOrder;
    CAMPAIGN_ID_B?: Prisma.SortOrder;
    ANALYTICS_ID_A?: Prisma.SortOrder;
    ANALYTICS_ID_B?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Test_ABCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutUSERInput, Prisma.Test_ABUncheckedCreateWithoutUSERInput> | Prisma.Test_ABCreateWithoutUSERInput[] | Prisma.Test_ABUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutUSERInput | Prisma.Test_ABCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.Test_ABCreateManyUSERInputEnvelope;
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
};
export type Test_ABUncheckedCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutUSERInput, Prisma.Test_ABUncheckedCreateWithoutUSERInput> | Prisma.Test_ABCreateWithoutUSERInput[] | Prisma.Test_ABUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutUSERInput | Prisma.Test_ABCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.Test_ABCreateManyUSERInputEnvelope;
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
};
export type Test_ABUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutUSERInput, Prisma.Test_ABUncheckedCreateWithoutUSERInput> | Prisma.Test_ABCreateWithoutUSERInput[] | Prisma.Test_ABUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutUSERInput | Prisma.Test_ABCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.Test_ABUpsertWithWhereUniqueWithoutUSERInput | Prisma.Test_ABUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.Test_ABCreateManyUSERInputEnvelope;
    set?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    disconnect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    delete?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    update?: Prisma.Test_ABUpdateWithWhereUniqueWithoutUSERInput | Prisma.Test_ABUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.Test_ABUpdateManyWithWhereWithoutUSERInput | Prisma.Test_ABUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
};
export type Test_ABUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutUSERInput, Prisma.Test_ABUncheckedCreateWithoutUSERInput> | Prisma.Test_ABCreateWithoutUSERInput[] | Prisma.Test_ABUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutUSERInput | Prisma.Test_ABCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.Test_ABUpsertWithWhereUniqueWithoutUSERInput | Prisma.Test_ABUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.Test_ABCreateManyUSERInputEnvelope;
    set?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    disconnect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    delete?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    update?: Prisma.Test_ABUpdateWithWhereUniqueWithoutUSERInput | Prisma.Test_ABUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.Test_ABUpdateManyWithWhereWithoutUSERInput | Prisma.Test_ABUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
};
export type Test_ABCreateNestedManyWithoutCAMPAIGN_AInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_AInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_AInputEnvelope;
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
};
export type Test_ABCreateNestedManyWithoutCAMPAIGN_BInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_BInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_BInputEnvelope;
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
};
export type Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_AInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_AInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_AInputEnvelope;
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
};
export type Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_BInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_BInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_BInputEnvelope;
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
};
export type Test_ABUpdateManyWithoutCAMPAIGN_ANestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_AInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput[];
    upsert?: Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_AInput | Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_AInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_AInputEnvelope;
    set?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    disconnect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    delete?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    update?: Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_AInput | Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_AInput[];
    updateMany?: Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_AInput | Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_AInput[];
    deleteMany?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
};
export type Test_ABUpdateManyWithoutCAMPAIGN_BNestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_BInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput[];
    upsert?: Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_BInput | Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_BInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_BInputEnvelope;
    set?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    disconnect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    delete?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    update?: Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_BInput | Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_BInput[];
    updateMany?: Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_BInput | Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_BInput[];
    deleteMany?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
};
export type Test_ABUncheckedUpdateManyWithoutCAMPAIGN_ANestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_AInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_AInput[];
    upsert?: Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_AInput | Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_AInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_AInputEnvelope;
    set?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    disconnect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    delete?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    update?: Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_AInput | Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_AInput[];
    updateMany?: Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_AInput | Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_AInput[];
    deleteMany?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
};
export type Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BNestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput> | Prisma.Test_ABCreateWithoutCAMPAIGN_BInput[] | Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput[];
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput | Prisma.Test_ABCreateOrConnectWithoutCAMPAIGN_BInput[];
    upsert?: Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_BInput | Prisma.Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_BInput[];
    createMany?: Prisma.Test_ABCreateManyCAMPAIGN_BInputEnvelope;
    set?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    disconnect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    delete?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    connect?: Prisma.Test_ABWhereUniqueInput | Prisma.Test_ABWhereUniqueInput[];
    update?: Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_BInput | Prisma.Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_BInput[];
    updateMany?: Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_BInput | Prisma.Test_ABUpdateManyWithWhereWithoutCAMPAIGN_BInput[];
    deleteMany?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
};
export type Test_ABCreateNestedOneWithoutANALYTICS_AInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_AInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_AInput;
    connect?: Prisma.Test_ABWhereUniqueInput;
};
export type Test_ABCreateNestedOneWithoutANALYTICS_BInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_BInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_BInput;
    connect?: Prisma.Test_ABWhereUniqueInput;
};
export type Test_ABUncheckedCreateNestedOneWithoutANALYTICS_AInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_AInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_AInput;
    connect?: Prisma.Test_ABWhereUniqueInput;
};
export type Test_ABUncheckedCreateNestedOneWithoutANALYTICS_BInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_BInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_BInput;
    connect?: Prisma.Test_ABWhereUniqueInput;
};
export type Test_ABUpdateOneWithoutANALYTICS_ANestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_AInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_AInput;
    upsert?: Prisma.Test_ABUpsertWithoutANALYTICS_AInput;
    disconnect?: Prisma.Test_ABWhereInput | boolean;
    delete?: Prisma.Test_ABWhereInput | boolean;
    connect?: Prisma.Test_ABWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Test_ABUpdateToOneWithWhereWithoutANALYTICS_AInput, Prisma.Test_ABUpdateWithoutANALYTICS_AInput>, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_AInput>;
};
export type Test_ABUpdateOneWithoutANALYTICS_BNestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_BInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_BInput;
    upsert?: Prisma.Test_ABUpsertWithoutANALYTICS_BInput;
    disconnect?: Prisma.Test_ABWhereInput | boolean;
    delete?: Prisma.Test_ABWhereInput | boolean;
    connect?: Prisma.Test_ABWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Test_ABUpdateToOneWithWhereWithoutANALYTICS_BInput, Prisma.Test_ABUpdateWithoutANALYTICS_BInput>, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_BInput>;
};
export type Test_ABUncheckedUpdateOneWithoutANALYTICS_ANestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_AInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_AInput;
    upsert?: Prisma.Test_ABUpsertWithoutANALYTICS_AInput;
    disconnect?: Prisma.Test_ABWhereInput | boolean;
    delete?: Prisma.Test_ABWhereInput | boolean;
    connect?: Prisma.Test_ABWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Test_ABUpdateToOneWithWhereWithoutANALYTICS_AInput, Prisma.Test_ABUpdateWithoutANALYTICS_AInput>, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_AInput>;
};
export type Test_ABUncheckedUpdateOneWithoutANALYTICS_BNestedInput = {
    create?: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_BInput>;
    connectOrCreate?: Prisma.Test_ABCreateOrConnectWithoutANALYTICS_BInput;
    upsert?: Prisma.Test_ABUpsertWithoutANALYTICS_BInput;
    disconnect?: Prisma.Test_ABWhereInput | boolean;
    delete?: Prisma.Test_ABWhereInput | boolean;
    connect?: Prisma.Test_ABWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Test_ABUpdateToOneWithWhereWithoutANALYTICS_BInput, Prisma.Test_ABUpdateWithoutANALYTICS_BInput>, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_BInput>;
};
export type Test_ABCreateWithoutUSERInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignCreateNestedOneWithoutTESTS_AInput;
    CAMPAIGN_B?: Prisma.CampaignCreateNestedOneWithoutTESTS_BInput;
    ANALYTICS_A?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_AInput;
    ANALYTICS_B?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_BInput;
};
export type Test_ABUncheckedCreateWithoutUSERInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABCreateOrConnectWithoutUSERInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutUSERInput, Prisma.Test_ABUncheckedCreateWithoutUSERInput>;
};
export type Test_ABCreateManyUSERInputEnvelope = {
    data: Prisma.Test_ABCreateManyUSERInput | Prisma.Test_ABCreateManyUSERInput[];
    skipDuplicates?: boolean;
};
export type Test_ABUpsertWithWhereUniqueWithoutUSERInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    update: Prisma.XOR<Prisma.Test_ABUpdateWithoutUSERInput, Prisma.Test_ABUncheckedUpdateWithoutUSERInput>;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutUSERInput, Prisma.Test_ABUncheckedCreateWithoutUSERInput>;
};
export type Test_ABUpdateWithWhereUniqueWithoutUSERInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateWithoutUSERInput, Prisma.Test_ABUncheckedUpdateWithoutUSERInput>;
};
export type Test_ABUpdateManyWithWhereWithoutUSERInput = {
    where: Prisma.Test_ABScalarWhereInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateManyMutationInput, Prisma.Test_ABUncheckedUpdateManyWithoutUSERInput>;
};
export type Test_ABScalarWhereInput = {
    AND?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
    OR?: Prisma.Test_ABScalarWhereInput[];
    NOT?: Prisma.Test_ABScalarWhereInput | Prisma.Test_ABScalarWhereInput[];
    ID?: Prisma.StringFilter<"Test_AB"> | string;
    EMBED_JS?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_A?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CAMPAIGN_ID_B?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    ANALYTICS_ID_A?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    ANALYTICS_ID_B?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    USER_ID?: Prisma.StringNullableFilter<"Test_AB"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Test_AB"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Test_AB"> | Date | string | null;
};
export type Test_ABCreateWithoutCAMPAIGN_AInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_B?: Prisma.CampaignCreateNestedOneWithoutTESTS_BInput;
    ANALYTICS_A?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_AInput;
    ANALYTICS_B?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_BInput;
    USER?: Prisma.UserCreateNestedOneWithoutTESTS_ABInput;
};
export type Test_ABUncheckedCreateWithoutCAMPAIGN_AInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABCreateOrConnectWithoutCAMPAIGN_AInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput>;
};
export type Test_ABCreateManyCAMPAIGN_AInputEnvelope = {
    data: Prisma.Test_ABCreateManyCAMPAIGN_AInput | Prisma.Test_ABCreateManyCAMPAIGN_AInput[];
    skipDuplicates?: boolean;
};
export type Test_ABCreateWithoutCAMPAIGN_BInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignCreateNestedOneWithoutTESTS_AInput;
    ANALYTICS_A?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_AInput;
    ANALYTICS_B?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_BInput;
    USER?: Prisma.UserCreateNestedOneWithoutTESTS_ABInput;
};
export type Test_ABUncheckedCreateWithoutCAMPAIGN_BInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABCreateOrConnectWithoutCAMPAIGN_BInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput>;
};
export type Test_ABCreateManyCAMPAIGN_BInputEnvelope = {
    data: Prisma.Test_ABCreateManyCAMPAIGN_BInput | Prisma.Test_ABCreateManyCAMPAIGN_BInput[];
    skipDuplicates?: boolean;
};
export type Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_AInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    update: Prisma.XOR<Prisma.Test_ABUpdateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedUpdateWithoutCAMPAIGN_AInput>;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_AInput>;
};
export type Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_AInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateWithoutCAMPAIGN_AInput, Prisma.Test_ABUncheckedUpdateWithoutCAMPAIGN_AInput>;
};
export type Test_ABUpdateManyWithWhereWithoutCAMPAIGN_AInput = {
    where: Prisma.Test_ABScalarWhereInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateManyMutationInput, Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_AInput>;
};
export type Test_ABUpsertWithWhereUniqueWithoutCAMPAIGN_BInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    update: Prisma.XOR<Prisma.Test_ABUpdateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedUpdateWithoutCAMPAIGN_BInput>;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedCreateWithoutCAMPAIGN_BInput>;
};
export type Test_ABUpdateWithWhereUniqueWithoutCAMPAIGN_BInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateWithoutCAMPAIGN_BInput, Prisma.Test_ABUncheckedUpdateWithoutCAMPAIGN_BInput>;
};
export type Test_ABUpdateManyWithWhereWithoutCAMPAIGN_BInput = {
    where: Prisma.Test_ABScalarWhereInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateManyMutationInput, Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BInput>;
};
export type Test_ABCreateWithoutANALYTICS_AInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignCreateNestedOneWithoutTESTS_AInput;
    CAMPAIGN_B?: Prisma.CampaignCreateNestedOneWithoutTESTS_BInput;
    ANALYTICS_B?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_BInput;
    USER?: Prisma.UserCreateNestedOneWithoutTESTS_ABInput;
};
export type Test_ABUncheckedCreateWithoutANALYTICS_AInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_B?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABCreateOrConnectWithoutANALYTICS_AInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_AInput>;
};
export type Test_ABCreateWithoutANALYTICS_BInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignCreateNestedOneWithoutTESTS_AInput;
    CAMPAIGN_B?: Prisma.CampaignCreateNestedOneWithoutTESTS_BInput;
    ANALYTICS_A?: Prisma.AnalyticsCreateNestedOneWithoutTEST_AB_AInput;
    USER?: Prisma.UserCreateNestedOneWithoutTESTS_ABInput;
};
export type Test_ABUncheckedCreateWithoutANALYTICS_BInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_A?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABCreateOrConnectWithoutANALYTICS_BInput = {
    where: Prisma.Test_ABWhereUniqueInput;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_BInput>;
};
export type Test_ABUpsertWithoutANALYTICS_AInput = {
    update: Prisma.XOR<Prisma.Test_ABUpdateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_AInput>;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_AInput>;
    where?: Prisma.Test_ABWhereInput;
};
export type Test_ABUpdateToOneWithWhereWithoutANALYTICS_AInput = {
    where?: Prisma.Test_ABWhereInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateWithoutANALYTICS_AInput, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_AInput>;
};
export type Test_ABUpdateWithoutANALYTICS_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignUpdateOneWithoutTESTS_ANestedInput;
    CAMPAIGN_B?: Prisma.CampaignUpdateOneWithoutTESTS_BNestedInput;
    ANALYTICS_B?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_BNestedInput;
    USER?: Prisma.UserUpdateOneWithoutTESTS_ABNestedInput;
};
export type Test_ABUncheckedUpdateWithoutANALYTICS_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABUpsertWithoutANALYTICS_BInput = {
    update: Prisma.XOR<Prisma.Test_ABUpdateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_BInput>;
    create: Prisma.XOR<Prisma.Test_ABCreateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedCreateWithoutANALYTICS_BInput>;
    where?: Prisma.Test_ABWhereInput;
};
export type Test_ABUpdateToOneWithWhereWithoutANALYTICS_BInput = {
    where?: Prisma.Test_ABWhereInput;
    data: Prisma.XOR<Prisma.Test_ABUpdateWithoutANALYTICS_BInput, Prisma.Test_ABUncheckedUpdateWithoutANALYTICS_BInput>;
};
export type Test_ABUpdateWithoutANALYTICS_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignUpdateOneWithoutTESTS_ANestedInput;
    CAMPAIGN_B?: Prisma.CampaignUpdateOneWithoutTESTS_BNestedInput;
    ANALYTICS_A?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_ANestedInput;
    USER?: Prisma.UserUpdateOneWithoutTESTS_ABNestedInput;
};
export type Test_ABUncheckedUpdateWithoutANALYTICS_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABCreateManyUSERInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignUpdateOneWithoutTESTS_ANestedInput;
    CAMPAIGN_B?: Prisma.CampaignUpdateOneWithoutTESTS_BNestedInput;
    ANALYTICS_A?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_ANestedInput;
    ANALYTICS_B?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_BNestedInput;
};
export type Test_ABUncheckedUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABUncheckedUpdateManyWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABCreateManyCAMPAIGN_AInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_B?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABCreateManyCAMPAIGN_BInput = {
    ID?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CAMPAIGN_ID_A?: string | null;
    ANALYTICS_ID_A?: string | null;
    ANALYTICS_ID_B?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Test_ABUpdateWithoutCAMPAIGN_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_B?: Prisma.CampaignUpdateOneWithoutTESTS_BNestedInput;
    ANALYTICS_A?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_ANestedInput;
    ANALYTICS_B?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_BNestedInput;
    USER?: Prisma.UserUpdateOneWithoutTESTS_ABNestedInput;
};
export type Test_ABUncheckedUpdateWithoutCAMPAIGN_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABUncheckedUpdateManyWithoutCAMPAIGN_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABUpdateWithoutCAMPAIGN_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_A?: Prisma.CampaignUpdateOneWithoutTESTS_ANestedInput;
    ANALYTICS_A?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_ANestedInput;
    ANALYTICS_B?: Prisma.AnalyticsUpdateOneWithoutTEST_AB_BNestedInput;
    USER?: Prisma.UserUpdateOneWithoutTESTS_ABNestedInput;
};
export type Test_ABUncheckedUpdateWithoutCAMPAIGN_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CAMPAIGN_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Test_ABSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CAMPAIGN_ID_A?: boolean;
    CAMPAIGN_ID_B?: boolean;
    ANALYTICS_ID_A?: boolean;
    ANALYTICS_ID_B?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN_A?: boolean | Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs>;
    CAMPAIGN_B?: boolean | Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs>;
    ANALYTICS_A?: boolean | Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs>;
    ANALYTICS_B?: boolean | Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs>;
    USER?: boolean | Prisma.Test_AB$USERArgs<ExtArgs>;
}, ExtArgs["result"]["test_AB"]>;
export type Test_ABSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CAMPAIGN_ID_A?: boolean;
    CAMPAIGN_ID_B?: boolean;
    ANALYTICS_ID_A?: boolean;
    ANALYTICS_ID_B?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN_A?: boolean | Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs>;
    CAMPAIGN_B?: boolean | Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs>;
    ANALYTICS_A?: boolean | Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs>;
    ANALYTICS_B?: boolean | Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs>;
    USER?: boolean | Prisma.Test_AB$USERArgs<ExtArgs>;
}, ExtArgs["result"]["test_AB"]>;
export type Test_ABSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CAMPAIGN_ID_A?: boolean;
    CAMPAIGN_ID_B?: boolean;
    ANALYTICS_ID_A?: boolean;
    ANALYTICS_ID_B?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN_A?: boolean | Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs>;
    CAMPAIGN_B?: boolean | Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs>;
    ANALYTICS_A?: boolean | Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs>;
    ANALYTICS_B?: boolean | Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs>;
    USER?: boolean | Prisma.Test_AB$USERArgs<ExtArgs>;
}, ExtArgs["result"]["test_AB"]>;
export type Test_ABSelectScalar = {
    ID?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CAMPAIGN_ID_A?: boolean;
    CAMPAIGN_ID_B?: boolean;
    ANALYTICS_ID_A?: boolean;
    ANALYTICS_ID_B?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Test_ABOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "EMBED_JS" | "EMBED_IFRAME" | "CAMPAIGN_ID_A" | "CAMPAIGN_ID_B" | "ANALYTICS_ID_A" | "ANALYTICS_ID_B" | "USER_ID" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["test_AB"]>;
export type Test_ABInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_A?: boolean | Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs>;
    CAMPAIGN_B?: boolean | Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs>;
    ANALYTICS_A?: boolean | Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs>;
    ANALYTICS_B?: boolean | Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs>;
    USER?: boolean | Prisma.Test_AB$USERArgs<ExtArgs>;
};
export type Test_ABIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_A?: boolean | Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs>;
    CAMPAIGN_B?: boolean | Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs>;
    ANALYTICS_A?: boolean | Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs>;
    ANALYTICS_B?: boolean | Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs>;
    USER?: boolean | Prisma.Test_AB$USERArgs<ExtArgs>;
};
export type Test_ABIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_A?: boolean | Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs>;
    CAMPAIGN_B?: boolean | Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs>;
    ANALYTICS_A?: boolean | Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs>;
    ANALYTICS_B?: boolean | Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs>;
    USER?: boolean | Prisma.Test_AB$USERArgs<ExtArgs>;
};
export type $Test_ABPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Test_AB";
    objects: {
        CAMPAIGN_A: Prisma.$CampaignPayload<ExtArgs> | null;
        CAMPAIGN_B: Prisma.$CampaignPayload<ExtArgs> | null;
        ANALYTICS_A: Prisma.$AnalyticsPayload<ExtArgs> | null;
        ANALYTICS_B: Prisma.$AnalyticsPayload<ExtArgs> | null;
        USER: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
        USER_ID: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["test_AB"]>;
    composites: {};
};
export type Test_ABGetPayload<S extends boolean | null | undefined | Test_ABDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Test_ABPayload, S>;
export type Test_ABCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Test_ABFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Test_ABCountAggregateInputType | true;
};
export interface Test_ABDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Test_AB'];
        meta: {
            name: 'Test_AB';
        };
    };
    /**
     * Find zero or one Test_AB that matches the filter.
     * @param {Test_ABFindUniqueArgs} args - Arguments to find a Test_AB
     * @example
     * // Get one Test_AB
     * const test_AB = await prisma.test_AB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Test_ABFindUniqueArgs>(args: Prisma.SelectSubset<T, Test_ABFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Test_AB that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Test_ABFindUniqueOrThrowArgs} args - Arguments to find a Test_AB
     * @example
     * // Get one Test_AB
     * const test_AB = await prisma.test_AB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Test_ABFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Test_ABFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Test_AB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_ABFindFirstArgs} args - Arguments to find a Test_AB
     * @example
     * // Get one Test_AB
     * const test_AB = await prisma.test_AB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Test_ABFindFirstArgs>(args?: Prisma.SelectSubset<T, Test_ABFindFirstArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Test_AB that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_ABFindFirstOrThrowArgs} args - Arguments to find a Test_AB
     * @example
     * // Get one Test_AB
     * const test_AB = await prisma.test_AB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Test_ABFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Test_ABFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Test_ABS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_ABFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_ABS
     * const test_ABS = await prisma.test_AB.findMany()
     *
     * // Get first 10 Test_ABS
     * const test_ABS = await prisma.test_AB.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const test_ABWithIDOnly = await prisma.test_AB.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Test_ABFindManyArgs>(args?: Prisma.SelectSubset<T, Test_ABFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Test_AB.
     * @param {Test_ABCreateArgs} args - Arguments to create a Test_AB.
     * @example
     * // Create one Test_AB
     * const Test_AB = await prisma.test_AB.create({
     *   data: {
     *     // ... data to create a Test_AB
     *   }
     * })
     *
     */
    create<T extends Test_ABCreateArgs>(args: Prisma.SelectSubset<T, Test_ABCreateArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Test_ABS.
     * @param {Test_ABCreateManyArgs} args - Arguments to create many Test_ABS.
     * @example
     * // Create many Test_ABS
     * const test_AB = await prisma.test_AB.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Test_ABCreateManyArgs>(args?: Prisma.SelectSubset<T, Test_ABCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Test_ABS and returns the data saved in the database.
     * @param {Test_ABCreateManyAndReturnArgs} args - Arguments to create many Test_ABS.
     * @example
     * // Create many Test_ABS
     * const test_AB = await prisma.test_AB.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Test_ABS and only return the `ID`
     * const test_ABWithIDOnly = await prisma.test_AB.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Test_ABCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Test_ABCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Test_AB.
     * @param {Test_ABDeleteArgs} args - Arguments to delete one Test_AB.
     * @example
     * // Delete one Test_AB
     * const Test_AB = await prisma.test_AB.delete({
     *   where: {
     *     // ... filter to delete one Test_AB
     *   }
     * })
     *
     */
    delete<T extends Test_ABDeleteArgs>(args: Prisma.SelectSubset<T, Test_ABDeleteArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Test_AB.
     * @param {Test_ABUpdateArgs} args - Arguments to update one Test_AB.
     * @example
     * // Update one Test_AB
     * const test_AB = await prisma.test_AB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Test_ABUpdateArgs>(args: Prisma.SelectSubset<T, Test_ABUpdateArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Test_ABS.
     * @param {Test_ABDeleteManyArgs} args - Arguments to filter Test_ABS to delete.
     * @example
     * // Delete a few Test_ABS
     * const { count } = await prisma.test_AB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Test_ABDeleteManyArgs>(args?: Prisma.SelectSubset<T, Test_ABDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Test_ABS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_ABUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_ABS
     * const test_AB = await prisma.test_AB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Test_ABUpdateManyArgs>(args: Prisma.SelectSubset<T, Test_ABUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Test_ABS and returns the data updated in the database.
     * @param {Test_ABUpdateManyAndReturnArgs} args - Arguments to update many Test_ABS.
     * @example
     * // Update many Test_ABS
     * const test_AB = await prisma.test_AB.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Test_ABS and only return the `ID`
     * const test_ABWithIDOnly = await prisma.test_AB.updateManyAndReturn({
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
    updateManyAndReturn<T extends Test_ABUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Test_ABUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Test_AB.
     * @param {Test_ABUpsertArgs} args - Arguments to update or create a Test_AB.
     * @example
     * // Update or create a Test_AB
     * const test_AB = await prisma.test_AB.upsert({
     *   create: {
     *     // ... data to create a Test_AB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_AB we want to update
     *   }
     * })
     */
    upsert<T extends Test_ABUpsertArgs>(args: Prisma.SelectSubset<T, Test_ABUpsertArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Test_ABS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_ABCountArgs} args - Arguments to filter Test_ABS to count.
     * @example
     * // Count the number of Test_ABS
     * const count = await prisma.test_AB.count({
     *   where: {
     *     // ... the filter for the Test_ABS we want to count
     *   }
     * })
    **/
    count<T extends Test_ABCountArgs>(args?: Prisma.Subset<T, Test_ABCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Test_ABCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Test_AB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_ABAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test_ABAggregateArgs>(args: Prisma.Subset<T, Test_ABAggregateArgs>): Prisma.PrismaPromise<GetTest_ABAggregateType<T>>;
    /**
     * Group by Test_AB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_ABGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Test_ABGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Test_ABGroupByArgs['orderBy'];
    } : {
        orderBy?: Test_ABGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Test_ABGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_ABGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Test_AB model
     */
    readonly fields: Test_ABFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Test_AB.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Test_ABClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CAMPAIGN_A<T extends Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Test_AB$CAMPAIGN_AArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    CAMPAIGN_B<T extends Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Test_AB$CAMPAIGN_BArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ANALYTICS_A<T extends Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Test_AB$ANALYTICS_AArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ANALYTICS_B<T extends Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Test_AB$ANALYTICS_BArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USER<T extends Prisma.Test_AB$USERArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Test_AB$USERArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Test_AB model
 */
export interface Test_ABFieldRefs {
    readonly ID: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly EMBED_JS: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly EMBED_IFRAME: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly CAMPAIGN_ID_A: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly CAMPAIGN_ID_B: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly ANALYTICS_ID_A: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly ANALYTICS_ID_B: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly USER_ID: Prisma.FieldRef<"Test_AB", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Test_AB", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Test_AB", 'DateTime'>;
}
/**
 * Test_AB findUnique
 */
export type Test_ABFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * Filter, which Test_AB to fetch.
     */
    where: Prisma.Test_ABWhereUniqueInput;
};
/**
 * Test_AB findUniqueOrThrow
 */
export type Test_ABFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * Filter, which Test_AB to fetch.
     */
    where: Prisma.Test_ABWhereUniqueInput;
};
/**
 * Test_AB findFirst
 */
export type Test_ABFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * Filter, which Test_AB to fetch.
     */
    where?: Prisma.Test_ABWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Test_ABS to fetch.
     */
    orderBy?: Prisma.Test_ABOrderByWithRelationInput | Prisma.Test_ABOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Test_ABS.
     */
    cursor?: Prisma.Test_ABWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Test_ABS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Test_ABS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Test_ABS.
     */
    distinct?: Prisma.Test_ABScalarFieldEnum | Prisma.Test_ABScalarFieldEnum[];
};
/**
 * Test_AB findFirstOrThrow
 */
export type Test_ABFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * Filter, which Test_AB to fetch.
     */
    where?: Prisma.Test_ABWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Test_ABS to fetch.
     */
    orderBy?: Prisma.Test_ABOrderByWithRelationInput | Prisma.Test_ABOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Test_ABS.
     */
    cursor?: Prisma.Test_ABWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Test_ABS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Test_ABS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Test_ABS.
     */
    distinct?: Prisma.Test_ABScalarFieldEnum | Prisma.Test_ABScalarFieldEnum[];
};
/**
 * Test_AB findMany
 */
export type Test_ABFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * Filter, which Test_ABS to fetch.
     */
    where?: Prisma.Test_ABWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Test_ABS to fetch.
     */
    orderBy?: Prisma.Test_ABOrderByWithRelationInput | Prisma.Test_ABOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Test_ABS.
     */
    cursor?: Prisma.Test_ABWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Test_ABS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Test_ABS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Test_ABS.
     */
    distinct?: Prisma.Test_ABScalarFieldEnum | Prisma.Test_ABScalarFieldEnum[];
};
/**
 * Test_AB create
 */
export type Test_ABCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * The data needed to create a Test_AB.
     */
    data?: Prisma.XOR<Prisma.Test_ABCreateInput, Prisma.Test_ABUncheckedCreateInput>;
};
/**
 * Test_AB createMany
 */
export type Test_ABCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Test_ABS.
     */
    data: Prisma.Test_ABCreateManyInput | Prisma.Test_ABCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Test_AB createManyAndReturn
 */
export type Test_ABCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * The data used to create many Test_ABS.
     */
    data: Prisma.Test_ABCreateManyInput | Prisma.Test_ABCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Test_AB update
 */
export type Test_ABUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * The data needed to update a Test_AB.
     */
    data: Prisma.XOR<Prisma.Test_ABUpdateInput, Prisma.Test_ABUncheckedUpdateInput>;
    /**
     * Choose, which Test_AB to update.
     */
    where: Prisma.Test_ABWhereUniqueInput;
};
/**
 * Test_AB updateMany
 */
export type Test_ABUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Test_ABS.
     */
    data: Prisma.XOR<Prisma.Test_ABUpdateManyMutationInput, Prisma.Test_ABUncheckedUpdateManyInput>;
    /**
     * Filter which Test_ABS to update
     */
    where?: Prisma.Test_ABWhereInput;
    /**
     * Limit how many Test_ABS to update.
     */
    limit?: number;
};
/**
 * Test_AB updateManyAndReturn
 */
export type Test_ABUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * The data used to update Test_ABS.
     */
    data: Prisma.XOR<Prisma.Test_ABUpdateManyMutationInput, Prisma.Test_ABUncheckedUpdateManyInput>;
    /**
     * Filter which Test_ABS to update
     */
    where?: Prisma.Test_ABWhereInput;
    /**
     * Limit how many Test_ABS to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Test_AB upsert
 */
export type Test_ABUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * The filter to search for the Test_AB to update in case it exists.
     */
    where: Prisma.Test_ABWhereUniqueInput;
    /**
     * In case the Test_AB found by the `where` argument doesn't exist, create a new Test_AB with this data.
     */
    create: Prisma.XOR<Prisma.Test_ABCreateInput, Prisma.Test_ABUncheckedCreateInput>;
    /**
     * In case the Test_AB was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Test_ABUpdateInput, Prisma.Test_ABUncheckedUpdateInput>;
};
/**
 * Test_AB delete
 */
export type Test_ABDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    /**
     * Filter which Test_AB to delete.
     */
    where: Prisma.Test_ABWhereUniqueInput;
};
/**
 * Test_AB deleteMany
 */
export type Test_ABDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Test_ABS to delete
     */
    where?: Prisma.Test_ABWhereInput;
    /**
     * Limit how many Test_ABS to delete.
     */
    limit?: number;
};
/**
 * Test_AB.CAMPAIGN_A
 */
export type Test_AB$CAMPAIGN_AArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign
     */
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
};
/**
 * Test_AB.CAMPAIGN_B
 */
export type Test_AB$CAMPAIGN_BArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign
     */
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
};
/**
 * Test_AB.ANALYTICS_A
 */
export type Test_AB$ANALYTICS_AArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Test_AB.ANALYTICS_B
 */
export type Test_AB$ANALYTICS_BArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Test_AB.USER
 */
export type Test_AB$USERArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Test_AB without action
 */
export type Test_ABDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Test_AB.d.ts.map
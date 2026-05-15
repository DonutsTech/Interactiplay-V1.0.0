import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Campaign
 *
 */
export type CampaignModel = runtime.Types.Result.DefaultSelection<Prisma.$CampaignPayload>;
export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
export type CampaignMinAggregateOutputType = {
    ID: string | null;
    NAME: string | null;
    EMBED_JS: string | null;
    EMBED_IFRAME: string | null;
    CORS: string | null;
    FEATURE_ID: string | null;
    USER_ID: string | null;
    ANALYTICS_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type CampaignMaxAggregateOutputType = {
    ID: string | null;
    NAME: string | null;
    EMBED_JS: string | null;
    EMBED_IFRAME: string | null;
    CORS: string | null;
    FEATURE_ID: string | null;
    USER_ID: string | null;
    ANALYTICS_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type CampaignCountAggregateOutputType = {
    ID: number;
    NAME: number;
    EMBED_JS: number;
    EMBED_IFRAME: number;
    CORS: number;
    FEATURE_ID: number;
    USER_ID: number;
    ANALYTICS_ID: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type CampaignMinAggregateInputType = {
    ID?: true;
    NAME?: true;
    EMBED_JS?: true;
    EMBED_IFRAME?: true;
    CORS?: true;
    FEATURE_ID?: true;
    USER_ID?: true;
    ANALYTICS_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type CampaignMaxAggregateInputType = {
    ID?: true;
    NAME?: true;
    EMBED_JS?: true;
    EMBED_IFRAME?: true;
    CORS?: true;
    FEATURE_ID?: true;
    USER_ID?: true;
    ANALYTICS_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type CampaignCountAggregateInputType = {
    ID?: true;
    NAME?: true;
    EMBED_JS?: true;
    EMBED_IFRAME?: true;
    CORS?: true;
    FEATURE_ID?: true;
    USER_ID?: true;
    ANALYTICS_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type CampaignAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: Prisma.CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType;
};
export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaign[P]> : Prisma.GetScalarType<T[P], AggregateCampaign[P]>;
};
export type CampaignGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithAggregationInput | Prisma.CampaignOrderByWithAggregationInput[];
    by: Prisma.CampaignScalarFieldEnum[] | Prisma.CampaignScalarFieldEnum;
    having?: Prisma.CampaignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignCountAggregateInputType | true;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type CampaignGroupByOutputType = {
    ID: string;
    NAME: string;
    EMBED_JS: string | null;
    EMBED_IFRAME: string | null;
    CORS: string;
    FEATURE_ID: string | null;
    USER_ID: string | null;
    ANALYTICS_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: CampaignCountAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]>;
}>>;
export type CampaignWhereInput = {
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    ID?: Prisma.StringFilter<"Campaign"> | string;
    NAME?: Prisma.StringFilter<"Campaign"> | string;
    EMBED_JS?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    CORS?: Prisma.StringFilter<"Campaign"> | string;
    FEATURE_ID?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    USER_ID?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    ANALYTICS_ID?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoListRelationFilter;
    ANALYTICS?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    TESTS_A?: Prisma.Test_ABListRelationFilter;
    TESTS_B?: Prisma.Test_ABListRelationFilter;
};
export type CampaignOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrderInput | Prisma.SortOrder;
    CORS?: Prisma.SortOrder;
    FEATURE_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    FEATURE?: Prisma.FeatureOrderByWithRelationInput;
    USER?: Prisma.UserOrderByWithRelationInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoOrderByRelationAggregateInput;
    ANALYTICS?: Prisma.AnalyticsOrderByWithRelationInput;
    TESTS_A?: Prisma.Test_ABOrderByRelationAggregateInput;
    TESTS_B?: Prisma.Test_ABOrderByRelationAggregateInput;
};
export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    FEATURE_ID?: string;
    ANALYTICS_ID?: string;
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    NAME?: Prisma.StringFilter<"Campaign"> | string;
    EMBED_JS?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    CORS?: Prisma.StringFilter<"Campaign"> | string;
    USER_ID?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoListRelationFilter;
    ANALYTICS?: Prisma.XOR<Prisma.AnalyticsNullableScalarRelationFilter, Prisma.AnalyticsWhereInput> | null;
    TESTS_A?: Prisma.Test_ABListRelationFilter;
    TESTS_B?: Prisma.Test_ABListRelationFilter;
}, "ID" | "FEATURE_ID" | "ANALYTICS_ID">;
export type CampaignOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrderInput | Prisma.SortOrder;
    CORS?: Prisma.SortOrder;
    FEATURE_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CampaignCountOrderByAggregateInput;
    _max?: Prisma.CampaignMaxOrderByAggregateInput;
    _min?: Prisma.CampaignMinOrderByAggregateInput;
};
export type CampaignScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampaignScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    NAME?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    EMBED_JS?: Prisma.StringNullableWithAggregatesFilter<"Campaign"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableWithAggregatesFilter<"Campaign"> | string | null;
    CORS?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    FEATURE_ID?: Prisma.StringNullableWithAggregatesFilter<"Campaign"> | string | null;
    USER_ID?: Prisma.StringNullableWithAggregatesFilter<"Campaign"> | string | null;
    ANALYTICS_ID?: Prisma.StringNullableWithAggregatesFilter<"Campaign"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null;
};
export type CampaignCreateInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutCAMPAIGNInput;
    USER?: Prisma.UserCreateNestedOneWithoutCAMPAIGNSInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutCAMPAIGNInput;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignUncheckedCreateInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    USER_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutCAMPAIGNNestedInput;
    USER?: Prisma.UserUpdateOneWithoutCAMPAIGNSNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutCAMPAIGNNestedInput;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignCreateManyInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    USER_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type CampaignUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CampaignUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CampaignListRelationFilter = {
    every?: Prisma.CampaignWhereInput;
    some?: Prisma.CampaignWhereInput;
    none?: Prisma.CampaignWhereInput;
};
export type CampaignOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CampaignCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrder;
    CORS?: Prisma.SortOrder;
    FEATURE_ID?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type CampaignMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrder;
    CORS?: Prisma.SortOrder;
    FEATURE_ID?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type CampaignMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMBED_JS?: Prisma.SortOrder;
    EMBED_IFRAME?: Prisma.SortOrder;
    CORS?: Prisma.SortOrder;
    FEATURE_ID?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    ANALYTICS_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type CampaignNullableScalarRelationFilter = {
    is?: Prisma.CampaignWhereInput | null;
    isNot?: Prisma.CampaignWhereInput | null;
};
export type CampaignCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUSERInput, Prisma.CampaignUncheckedCreateWithoutUSERInput> | Prisma.CampaignCreateWithoutUSERInput[] | Prisma.CampaignUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUSERInput | Prisma.CampaignCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.CampaignCreateManyUSERInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUncheckedCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUSERInput, Prisma.CampaignUncheckedCreateWithoutUSERInput> | Prisma.CampaignCreateWithoutUSERInput[] | Prisma.CampaignUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUSERInput | Prisma.CampaignCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.CampaignCreateManyUSERInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUSERInput, Prisma.CampaignUncheckedCreateWithoutUSERInput> | Prisma.CampaignCreateWithoutUSERInput[] | Prisma.CampaignUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUSERInput | Prisma.CampaignCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutUSERInput | Prisma.CampaignUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.CampaignCreateManyUSERInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutUSERInput | Prisma.CampaignUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutUSERInput | Prisma.CampaignUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUSERInput, Prisma.CampaignUncheckedCreateWithoutUSERInput> | Prisma.CampaignCreateWithoutUSERInput[] | Prisma.CampaignUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUSERInput | Prisma.CampaignCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutUSERInput | Prisma.CampaignUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.CampaignCreateManyUSERInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutUSERInput | Prisma.CampaignUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutUSERInput | Prisma.CampaignUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignCreateNestedOneWithoutANALYTICSInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutANALYTICSInput, Prisma.CampaignUncheckedCreateWithoutANALYTICSInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutANALYTICSInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUncheckedCreateNestedOneWithoutANALYTICSInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutANALYTICSInput, Prisma.CampaignUncheckedCreateWithoutANALYTICSInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutANALYTICSInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateOneWithoutANALYTICSNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutANALYTICSInput, Prisma.CampaignUncheckedCreateWithoutANALYTICSInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutANALYTICSInput;
    upsert?: Prisma.CampaignUpsertWithoutANALYTICSInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutANALYTICSInput, Prisma.CampaignUpdateWithoutANALYTICSInput>, Prisma.CampaignUncheckedUpdateWithoutANALYTICSInput>;
};
export type CampaignUncheckedUpdateOneWithoutANALYTICSNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutANALYTICSInput, Prisma.CampaignUncheckedCreateWithoutANALYTICSInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutANALYTICSInput;
    upsert?: Prisma.CampaignUpsertWithoutANALYTICSInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutANALYTICSInput, Prisma.CampaignUpdateWithoutANALYTICSInput>, Prisma.CampaignUncheckedUpdateWithoutANALYTICSInput>;
};
export type CampaignCreateNestedOneWithoutTESTS_AInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_AInput, Prisma.CampaignUncheckedCreateWithoutTESTS_AInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTESTS_AInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignCreateNestedOneWithoutTESTS_BInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_BInput, Prisma.CampaignUncheckedCreateWithoutTESTS_BInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTESTS_BInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateOneWithoutTESTS_ANestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_AInput, Prisma.CampaignUncheckedCreateWithoutTESTS_AInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTESTS_AInput;
    upsert?: Prisma.CampaignUpsertWithoutTESTS_AInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutTESTS_AInput, Prisma.CampaignUpdateWithoutTESTS_AInput>, Prisma.CampaignUncheckedUpdateWithoutTESTS_AInput>;
};
export type CampaignUpdateOneWithoutTESTS_BNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_BInput, Prisma.CampaignUncheckedCreateWithoutTESTS_BInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTESTS_BInput;
    upsert?: Prisma.CampaignUpsertWithoutTESTS_BInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutTESTS_BInput, Prisma.CampaignUpdateWithoutTESTS_BInput>, Prisma.CampaignUncheckedUpdateWithoutTESTS_BInput>;
};
export type CampaignCreateNestedOneWithoutCAMPAIGN_VIDEOSInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.CampaignUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutCAMPAIGN_VIDEOSInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.CampaignUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutCAMPAIGN_VIDEOSInput;
    upsert?: Prisma.CampaignUpsertWithoutCAMPAIGN_VIDEOSInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutCAMPAIGN_VIDEOSInput, Prisma.CampaignUpdateWithoutCAMPAIGN_VIDEOSInput>, Prisma.CampaignUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
};
export type CampaignCreateNestedOneWithoutFEATUREInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutFEATUREInput, Prisma.CampaignUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutFEATUREInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUncheckedCreateNestedOneWithoutFEATUREInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutFEATUREInput, Prisma.CampaignUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutFEATUREInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateOneWithoutFEATURENestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutFEATUREInput, Prisma.CampaignUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutFEATUREInput;
    upsert?: Prisma.CampaignUpsertWithoutFEATUREInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutFEATUREInput, Prisma.CampaignUpdateWithoutFEATUREInput>, Prisma.CampaignUncheckedUpdateWithoutFEATUREInput>;
};
export type CampaignUncheckedUpdateOneWithoutFEATURENestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutFEATUREInput, Prisma.CampaignUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutFEATUREInput;
    upsert?: Prisma.CampaignUpsertWithoutFEATUREInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutFEATUREInput, Prisma.CampaignUpdateWithoutFEATUREInput>, Prisma.CampaignUncheckedUpdateWithoutFEATUREInput>;
};
export type CampaignCreateWithoutUSERInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutCAMPAIGNInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutCAMPAIGNInput;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignUncheckedCreateWithoutUSERInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignCreateOrConnectWithoutUSERInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutUSERInput, Prisma.CampaignUncheckedCreateWithoutUSERInput>;
};
export type CampaignCreateManyUSERInputEnvelope = {
    data: Prisma.CampaignCreateManyUSERInput | Prisma.CampaignCreateManyUSERInput[];
    skipDuplicates?: boolean;
};
export type CampaignUpsertWithWhereUniqueWithoutUSERInput = {
    where: Prisma.CampaignWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutUSERInput, Prisma.CampaignUncheckedUpdateWithoutUSERInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutUSERInput, Prisma.CampaignUncheckedCreateWithoutUSERInput>;
};
export type CampaignUpdateWithWhereUniqueWithoutUSERInput = {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutUSERInput, Prisma.CampaignUncheckedUpdateWithoutUSERInput>;
};
export type CampaignUpdateManyWithWhereWithoutUSERInput = {
    where: Prisma.CampaignScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyWithoutUSERInput>;
};
export type CampaignScalarWhereInput = {
    AND?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    OR?: Prisma.CampaignScalarWhereInput[];
    NOT?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    ID?: Prisma.StringFilter<"Campaign"> | string;
    NAME?: Prisma.StringFilter<"Campaign"> | string;
    EMBED_JS?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    EMBED_IFRAME?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    CORS?: Prisma.StringFilter<"Campaign"> | string;
    FEATURE_ID?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    USER_ID?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    ANALYTICS_ID?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
};
export type CampaignCreateWithoutANALYTICSInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutCAMPAIGNInput;
    USER?: Prisma.UserCreateNestedOneWithoutCAMPAIGNSInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignUncheckedCreateWithoutANALYTICSInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignCreateOrConnectWithoutANALYTICSInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutANALYTICSInput, Prisma.CampaignUncheckedCreateWithoutANALYTICSInput>;
};
export type CampaignUpsertWithoutANALYTICSInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutANALYTICSInput, Prisma.CampaignUncheckedUpdateWithoutANALYTICSInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutANALYTICSInput, Prisma.CampaignUncheckedCreateWithoutANALYTICSInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutANALYTICSInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutANALYTICSInput, Prisma.CampaignUncheckedUpdateWithoutANALYTICSInput>;
};
export type CampaignUpdateWithoutANALYTICSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutCAMPAIGNNestedInput;
    USER?: Prisma.UserUpdateOneWithoutCAMPAIGNSNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUncheckedUpdateWithoutANALYTICSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignCreateWithoutTESTS_AInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutCAMPAIGNInput;
    USER?: Prisma.UserCreateNestedOneWithoutCAMPAIGNSInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutCAMPAIGNInput;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutCAMPAIGNInput;
    TESTS_B?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignUncheckedCreateWithoutTESTS_AInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    USER_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutCAMPAIGNInput;
    TESTS_B?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignCreateOrConnectWithoutTESTS_AInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_AInput, Prisma.CampaignUncheckedCreateWithoutTESTS_AInput>;
};
export type CampaignCreateWithoutTESTS_BInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutCAMPAIGNInput;
    USER?: Prisma.UserCreateNestedOneWithoutCAMPAIGNSInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutCAMPAIGNInput;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_AInput;
};
export type CampaignUncheckedCreateWithoutTESTS_BInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    USER_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_AInput;
};
export type CampaignCreateOrConnectWithoutTESTS_BInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_BInput, Prisma.CampaignUncheckedCreateWithoutTESTS_BInput>;
};
export type CampaignUpsertWithoutTESTS_AInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutTESTS_AInput, Prisma.CampaignUncheckedUpdateWithoutTESTS_AInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_AInput, Prisma.CampaignUncheckedCreateWithoutTESTS_AInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutTESTS_AInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutTESTS_AInput, Prisma.CampaignUncheckedUpdateWithoutTESTS_AInput>;
};
export type CampaignUpdateWithoutTESTS_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutCAMPAIGNNestedInput;
    USER?: Prisma.UserUpdateOneWithoutCAMPAIGNSNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutCAMPAIGNNestedInput;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutCAMPAIGNNestedInput;
    TESTS_B?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUncheckedUpdateWithoutTESTS_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNNestedInput;
    TESTS_B?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUpsertWithoutTESTS_BInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutTESTS_BInput, Prisma.CampaignUncheckedUpdateWithoutTESTS_BInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutTESTS_BInput, Prisma.CampaignUncheckedCreateWithoutTESTS_BInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutTESTS_BInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutTESTS_BInput, Prisma.CampaignUncheckedUpdateWithoutTESTS_BInput>;
};
export type CampaignUpdateWithoutTESTS_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutCAMPAIGNNestedInput;
    USER?: Prisma.UserUpdateOneWithoutCAMPAIGNSNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutCAMPAIGNNestedInput;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_ANestedInput;
};
export type CampaignUncheckedUpdateWithoutTESTS_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_ANestedInput;
};
export type CampaignCreateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutCAMPAIGNInput;
    USER?: Prisma.UserCreateNestedOneWithoutCAMPAIGNSInput;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignUncheckedCreateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    USER_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    TESTS_A?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignCreateOrConnectWithoutCAMPAIGN_VIDEOSInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.CampaignUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
};
export type CampaignUpsertWithoutCAMPAIGN_VIDEOSInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutCAMPAIGN_VIDEOSInput, Prisma.CampaignUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.CampaignUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutCAMPAIGN_VIDEOSInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutCAMPAIGN_VIDEOSInput, Prisma.CampaignUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
};
export type CampaignUpdateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutCAMPAIGNNestedInput;
    USER?: Prisma.UserUpdateOneWithoutCAMPAIGNSNestedInput;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    TESTS_A?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignCreateWithoutFEATUREInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    USER?: Prisma.UserCreateNestedOneWithoutCAMPAIGNSInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutCAMPAIGNInput;
    ANALYTICS?: Prisma.AnalyticsCreateNestedOneWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignUncheckedCreateWithoutFEATUREInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    USER_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutCAMPAIGNInput;
    TESTS_A?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_AInput;
    TESTS_B?: Prisma.Test_ABUncheckedCreateNestedManyWithoutCAMPAIGN_BInput;
};
export type CampaignCreateOrConnectWithoutFEATUREInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutFEATUREInput, Prisma.CampaignUncheckedCreateWithoutFEATUREInput>;
};
export type CampaignUpsertWithoutFEATUREInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutFEATUREInput, Prisma.CampaignUncheckedUpdateWithoutFEATUREInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutFEATUREInput, Prisma.CampaignUncheckedCreateWithoutFEATUREInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutFEATUREInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutFEATUREInput, Prisma.CampaignUncheckedUpdateWithoutFEATUREInput>;
};
export type CampaignUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USER?: Prisma.UserUpdateOneWithoutCAMPAIGNSNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutCAMPAIGNNestedInput;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUncheckedUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignCreateManyUSERInput = {
    ID?: string;
    NAME?: string;
    EMBED_JS?: string | null;
    EMBED_IFRAME?: string | null;
    CORS?: string;
    FEATURE_ID?: string | null;
    ANALYTICS_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type CampaignUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutCAMPAIGNNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutCAMPAIGNNestedInput;
    ANALYTICS?: Prisma.AnalyticsUpdateOneWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUncheckedUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNNestedInput;
    TESTS_A?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_ANestedInput;
    TESTS_B?: Prisma.Test_ABUncheckedUpdateManyWithoutCAMPAIGN_BNestedInput;
};
export type CampaignUncheckedUpdateManyWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMBED_JS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMBED_IFRAME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CORS?: Prisma.StringFieldUpdateOperationsInput | string;
    FEATURE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ANALYTICS_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type CampaignCountOutputType
 */
export type CampaignCountOutputType = {
    CAMPAIGN_VIDEOS: number;
    TESTS_A: number;
    TESTS_B: number;
};
export type CampaignCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_VIDEOS?: boolean | CampaignCountOutputTypeCountCAMPAIGN_VIDEOSArgs;
    TESTS_A?: boolean | CampaignCountOutputTypeCountTESTS_AArgs;
    TESTS_B?: boolean | CampaignCountOutputTypeCountTESTS_BArgs;
};
/**
 * CampaignCountOutputType without action
 */
export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: Prisma.CampaignCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CampaignCountOutputType without action
 */
export type CampaignCountOutputTypeCountCAMPAIGN_VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Campaign_VideoWhereInput;
};
/**
 * CampaignCountOutputType without action
 */
export type CampaignCountOutputTypeCountTESTS_AArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Test_ABWhereInput;
};
/**
 * CampaignCountOutputType without action
 */
export type CampaignCountOutputTypeCountTESTS_BArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Test_ABWhereInput;
};
export type CampaignSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CORS?: boolean;
    FEATURE_ID?: boolean;
    USER_ID?: boolean;
    ANALYTICS_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FEATURE?: boolean | Prisma.Campaign$FEATUREArgs<ExtArgs>;
    USER?: boolean | Prisma.Campaign$USERArgs<ExtArgs>;
    CAMPAIGN_VIDEOS?: boolean | Prisma.Campaign$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    ANALYTICS?: boolean | Prisma.Campaign$ANALYTICSArgs<ExtArgs>;
    TESTS_A?: boolean | Prisma.Campaign$TESTS_AArgs<ExtArgs>;
    TESTS_B?: boolean | Prisma.Campaign$TESTS_BArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CORS?: boolean;
    FEATURE_ID?: boolean;
    USER_ID?: boolean;
    ANALYTICS_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FEATURE?: boolean | Prisma.Campaign$FEATUREArgs<ExtArgs>;
    USER?: boolean | Prisma.Campaign$USERArgs<ExtArgs>;
    ANALYTICS?: boolean | Prisma.Campaign$ANALYTICSArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CORS?: boolean;
    FEATURE_ID?: boolean;
    USER_ID?: boolean;
    ANALYTICS_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FEATURE?: boolean | Prisma.Campaign$FEATUREArgs<ExtArgs>;
    USER?: boolean | Prisma.Campaign$USERArgs<ExtArgs>;
    ANALYTICS?: boolean | Prisma.Campaign$ANALYTICSArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectScalar = {
    ID?: boolean;
    NAME?: boolean;
    EMBED_JS?: boolean;
    EMBED_IFRAME?: boolean;
    CORS?: boolean;
    FEATURE_ID?: boolean;
    USER_ID?: boolean;
    ANALYTICS_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type CampaignOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "NAME" | "EMBED_JS" | "EMBED_IFRAME" | "CORS" | "FEATURE_ID" | "USER_ID" | "ANALYTICS_ID" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["campaign"]>;
export type CampaignInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    FEATURE?: boolean | Prisma.Campaign$FEATUREArgs<ExtArgs>;
    USER?: boolean | Prisma.Campaign$USERArgs<ExtArgs>;
    CAMPAIGN_VIDEOS?: boolean | Prisma.Campaign$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    ANALYTICS?: boolean | Prisma.Campaign$ANALYTICSArgs<ExtArgs>;
    TESTS_A?: boolean | Prisma.Campaign$TESTS_AArgs<ExtArgs>;
    TESTS_B?: boolean | Prisma.Campaign$TESTS_BArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CampaignIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    FEATURE?: boolean | Prisma.Campaign$FEATUREArgs<ExtArgs>;
    USER?: boolean | Prisma.Campaign$USERArgs<ExtArgs>;
    ANALYTICS?: boolean | Prisma.Campaign$ANALYTICSArgs<ExtArgs>;
};
export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    FEATURE?: boolean | Prisma.Campaign$FEATUREArgs<ExtArgs>;
    USER?: boolean | Prisma.Campaign$USERArgs<ExtArgs>;
    ANALYTICS?: boolean | Prisma.Campaign$ANALYTICSArgs<ExtArgs>;
};
export type $CampaignPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Campaign";
    objects: {
        FEATURE: Prisma.$FeaturePayload<ExtArgs> | null;
        USER: Prisma.$UserPayload<ExtArgs> | null;
        CAMPAIGN_VIDEOS: Prisma.$Campaign_VideoPayload<ExtArgs>[];
        ANALYTICS: Prisma.$AnalyticsPayload<ExtArgs> | null;
        TESTS_A: Prisma.$Test_ABPayload<ExtArgs>[];
        TESTS_B: Prisma.$Test_ABPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        NAME: string;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CORS: string;
        FEATURE_ID: string | null;
        USER_ID: string | null;
        ANALYTICS_ID: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["campaign"]>;
    composites: {};
};
export type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampaignPayload, S>;
export type CampaignCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignCountAggregateInputType | true;
};
export interface CampaignDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Campaign'];
        meta: {
            name: 'Campaign';
        };
    };
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     *
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const campaignWithIDOnly = await prisma.campaign.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends CampaignFindManyArgs>(args?: Prisma.SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     *
     */
    create<T extends CampaignCreateArgs>(args: Prisma.SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CampaignCreateManyArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Campaigns and only return the `ID`
     * const campaignWithIDOnly = await prisma.campaign.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     *
     */
    delete<T extends CampaignDeleteArgs>(args: Prisma.SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CampaignUpdateArgs>(args: Prisma.SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Campaigns and only return the `ID`
     * const campaignWithIDOnly = await prisma.campaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: Prisma.SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(args?: Prisma.Subset<T, CampaignCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Prisma.Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>;
    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CampaignGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampaignGroupByArgs['orderBy'];
    } : {
        orderBy?: CampaignGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Campaign model
     */
    readonly fields: CampaignFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Campaign.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    FEATURE<T extends Prisma.Campaign$FEATUREArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$FEATUREArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USER<T extends Prisma.Campaign$USERArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$USERArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    CAMPAIGN_VIDEOS<T extends Prisma.Campaign$CAMPAIGN_VIDEOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$CAMPAIGN_VIDEOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ANALYTICS<T extends Prisma.Campaign$ANALYTICSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$ANALYTICSArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    TESTS_A<T extends Prisma.Campaign$TESTS_AArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$TESTS_AArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    TESTS_B<T extends Prisma.Campaign$TESTS_BArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$TESTS_BArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Campaign model
 */
export interface CampaignFieldRefs {
    readonly ID: Prisma.FieldRef<"Campaign", 'String'>;
    readonly NAME: Prisma.FieldRef<"Campaign", 'String'>;
    readonly EMBED_JS: Prisma.FieldRef<"Campaign", 'String'>;
    readonly EMBED_IFRAME: Prisma.FieldRef<"Campaign", 'String'>;
    readonly CORS: Prisma.FieldRef<"Campaign", 'String'>;
    readonly FEATURE_ID: Prisma.FieldRef<"Campaign", 'String'>;
    readonly USER_ID: Prisma.FieldRef<"Campaign", 'String'>;
    readonly ANALYTICS_ID: Prisma.FieldRef<"Campaign", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Campaign", 'DateTime'>;
}
/**
 * Campaign findUnique
 */
export type CampaignFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign to fetch.
     */
    where: Prisma.CampaignWhereUniqueInput;
};
/**
 * Campaign findUniqueOrThrow
 */
export type CampaignFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign to fetch.
     */
    where: Prisma.CampaignWhereUniqueInput;
};
/**
 * Campaign findFirst
 */
export type CampaignFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign to fetch.
     */
    where?: Prisma.CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campaigns.
     */
    cursor?: Prisma.CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaigns.
     */
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
/**
 * Campaign findFirstOrThrow
 */
export type CampaignFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign to fetch.
     */
    where?: Prisma.CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campaigns.
     */
    cursor?: Prisma.CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaigns.
     */
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
/**
 * Campaign findMany
 */
export type CampaignFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: Prisma.CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Campaigns.
     */
    cursor?: Prisma.CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaigns.
     */
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
/**
 * Campaign create
 */
export type CampaignCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Campaign.
     */
    data?: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
};
/**
 * Campaign createMany
 */
export type CampaignCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Campaign createManyAndReturn
 */
export type CampaignCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: Prisma.CampaignSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign
     */
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    /**
     * The data used to create many Campaigns.
     */
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampaignIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Campaign update
 */
export type CampaignUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Campaign.
     */
    data: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
    /**
     * Choose, which Campaign to update.
     */
    where: Prisma.CampaignWhereUniqueInput;
};
/**
 * Campaign updateMany
 */
export type CampaignUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    /**
     * Filter which Campaigns to update
     */
    where?: Prisma.CampaignWhereInput;
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number;
};
/**
 * Campaign updateManyAndReturn
 */
export type CampaignUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: Prisma.CampaignSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign
     */
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    /**
     * The data used to update Campaigns.
     */
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    /**
     * Filter which Campaigns to update
     */
    where?: Prisma.CampaignWhereInput;
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampaignIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Campaign upsert
 */
export type CampaignUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: Prisma.CampaignWhereUniqueInput;
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
};
/**
 * Campaign delete
 */
export type CampaignDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Campaign to delete.
     */
    where: Prisma.CampaignWhereUniqueInput;
};
/**
 * Campaign deleteMany
 */
export type CampaignDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: Prisma.CampaignWhereInput;
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number;
};
/**
 * Campaign.FEATURE
 */
export type Campaign$FEATUREArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Campaign.USER
 */
export type Campaign$USERArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Campaign.CAMPAIGN_VIDEOS
 */
export type Campaign$CAMPAIGN_VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign_Video
     */
    select?: Prisma.Campaign_VideoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign_Video
     */
    omit?: Prisma.Campaign_VideoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Campaign_VideoInclude<ExtArgs> | null;
    where?: Prisma.Campaign_VideoWhereInput;
    orderBy?: Prisma.Campaign_VideoOrderByWithRelationInput | Prisma.Campaign_VideoOrderByWithRelationInput[];
    cursor?: Prisma.Campaign_VideoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Campaign_VideoScalarFieldEnum | Prisma.Campaign_VideoScalarFieldEnum[];
};
/**
 * Campaign.ANALYTICS
 */
export type Campaign$ANALYTICSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Campaign.TESTS_A
 */
export type Campaign$TESTS_AArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Test_ABWhereInput;
    orderBy?: Prisma.Test_ABOrderByWithRelationInput | Prisma.Test_ABOrderByWithRelationInput[];
    cursor?: Prisma.Test_ABWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Test_ABScalarFieldEnum | Prisma.Test_ABScalarFieldEnum[];
};
/**
 * Campaign.TESTS_B
 */
export type Campaign$TESTS_BArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Test_ABWhereInput;
    orderBy?: Prisma.Test_ABOrderByWithRelationInput | Prisma.Test_ABOrderByWithRelationInput[];
    cursor?: Prisma.Test_ABWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Test_ABScalarFieldEnum | Prisma.Test_ABScalarFieldEnum[];
};
/**
 * Campaign without action
 */
export type CampaignDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Campaign.d.ts.map
import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Analytics
 *
 */
export type AnalyticsModel = runtime.Types.Result.DefaultSelection<Prisma.$AnalyticsPayload>;
export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null;
    _avg: AnalyticsAvgAggregateOutputType | null;
    _sum: AnalyticsSumAggregateOutputType | null;
    _min: AnalyticsMinAggregateOutputType | null;
    _max: AnalyticsMaxAggregateOutputType | null;
};
export type AnalyticsAvgAggregateOutputType = {
    TOTAL_PLAYS: number | null;
    TOTAL_VIEWS: number | null;
    TOTAL_PLAY_BLOCK: number | null;
    TOTAL_PLAY_UNIQUE: number | null;
};
export type AnalyticsSumAggregateOutputType = {
    TOTAL_PLAYS: number | null;
    TOTAL_VIEWS: number | null;
    TOTAL_PLAY_BLOCK: number | null;
    TOTAL_PLAY_UNIQUE: number | null;
};
export type AnalyticsMinAggregateOutputType = {
    ID: string | null;
    CAMPAIGN_ID: string | null;
    TEST_AB_ID_A: string | null;
    TEST_AB_ID_B: string | null;
    TOTAL_PLAYS: number | null;
    TOTAL_VIEWS: number | null;
    TOTAL_PLAY_BLOCK: number | null;
    TOTAL_PLAY_UNIQUE: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type AnalyticsMaxAggregateOutputType = {
    ID: string | null;
    CAMPAIGN_ID: string | null;
    TEST_AB_ID_A: string | null;
    TEST_AB_ID_B: string | null;
    TOTAL_PLAYS: number | null;
    TOTAL_VIEWS: number | null;
    TOTAL_PLAY_BLOCK: number | null;
    TOTAL_PLAY_UNIQUE: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type AnalyticsCountAggregateOutputType = {
    ID: number;
    CAMPAIGN_ID: number;
    TEST_AB_ID_A: number;
    TEST_AB_ID_B: number;
    TOTAL_PLAYS: number;
    TOTAL_VIEWS: number;
    TOTAL_PLAY_BLOCK: number;
    TOTAL_PLAY_UNIQUE: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type AnalyticsAvgAggregateInputType = {
    TOTAL_PLAYS?: true;
    TOTAL_VIEWS?: true;
    TOTAL_PLAY_BLOCK?: true;
    TOTAL_PLAY_UNIQUE?: true;
};
export type AnalyticsSumAggregateInputType = {
    TOTAL_PLAYS?: true;
    TOTAL_VIEWS?: true;
    TOTAL_PLAY_BLOCK?: true;
    TOTAL_PLAY_UNIQUE?: true;
};
export type AnalyticsMinAggregateInputType = {
    ID?: true;
    CAMPAIGN_ID?: true;
    TEST_AB_ID_A?: true;
    TEST_AB_ID_B?: true;
    TOTAL_PLAYS?: true;
    TOTAL_VIEWS?: true;
    TOTAL_PLAY_BLOCK?: true;
    TOTAL_PLAY_UNIQUE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type AnalyticsMaxAggregateInputType = {
    ID?: true;
    CAMPAIGN_ID?: true;
    TEST_AB_ID_A?: true;
    TEST_AB_ID_B?: true;
    TOTAL_PLAYS?: true;
    TOTAL_VIEWS?: true;
    TOTAL_PLAY_BLOCK?: true;
    TOTAL_PLAY_UNIQUE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type AnalyticsCountAggregateInputType = {
    ID?: true;
    CAMPAIGN_ID?: true;
    TEST_AB_ID_A?: true;
    TEST_AB_ID_B?: true;
    TOTAL_PLAYS?: true;
    TOTAL_VIEWS?: true;
    TOTAL_PLAY_BLOCK?: true;
    TOTAL_PLAY_UNIQUE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type AnalyticsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: Prisma.AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType;
};
export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalytics[P]> : Prisma.GetScalarType<T[P], AggregateAnalytics[P]>;
};
export type AnalyticsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsWhereInput;
    orderBy?: Prisma.AnalyticsOrderByWithAggregationInput | Prisma.AnalyticsOrderByWithAggregationInput[];
    by: Prisma.AnalyticsScalarFieldEnum[] | Prisma.AnalyticsScalarFieldEnum;
    having?: Prisma.AnalyticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalyticsCountAggregateInputType | true;
    _avg?: AnalyticsAvgAggregateInputType;
    _sum?: AnalyticsSumAggregateInputType;
    _min?: AnalyticsMinAggregateInputType;
    _max?: AnalyticsMaxAggregateInputType;
};
export type AnalyticsGroupByOutputType = {
    ID: string;
    CAMPAIGN_ID: string | null;
    TEST_AB_ID_A: string | null;
    TEST_AB_ID_B: string | null;
    TOTAL_PLAYS: number;
    TOTAL_VIEWS: number;
    TOTAL_PLAY_BLOCK: number;
    TOTAL_PLAY_UNIQUE: number;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: AnalyticsCountAggregateOutputType | null;
    _avg: AnalyticsAvgAggregateOutputType | null;
    _sum: AnalyticsSumAggregateOutputType | null;
    _min: AnalyticsMinAggregateOutputType | null;
    _max: AnalyticsMaxAggregateOutputType | null;
};
type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnalyticsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnalyticsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnalyticsGroupByOutputType[P]>;
}>>;
export type AnalyticsWhereInput = {
    AND?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    OR?: Prisma.AnalyticsWhereInput[];
    NOT?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    ID?: Prisma.StringFilter<"Analytics"> | string;
    CAMPAIGN_ID?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    TEST_AB_ID_A?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    TEST_AB_ID_B?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    TOTAL_PLAYS?: Prisma.IntFilter<"Analytics"> | number;
    TOTAL_VIEWS?: Prisma.IntFilter<"Analytics"> | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFilter<"Analytics"> | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFilter<"Analytics"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Analytics"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Analytics"> | Date | string | null;
    CAMPAIGN?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    TEST_AB_A?: Prisma.XOR<Prisma.Test_ABNullableScalarRelationFilter, Prisma.Test_ABWhereInput> | null;
    TEST_AB_B?: Prisma.XOR<Prisma.Test_ABNullableScalarRelationFilter, Prisma.Test_ABWhereInput> | null;
    MODEL_PLAYS?: Prisma.Model_PlayListRelationFilter;
};
export type AnalyticsOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    TEST_AB_ID_A?: Prisma.SortOrderInput | Prisma.SortOrder;
    TEST_AB_ID_B?: Prisma.SortOrderInput | Prisma.SortOrder;
    TOTAL_PLAYS?: Prisma.SortOrder;
    TOTAL_VIEWS?: Prisma.SortOrder;
    TOTAL_PLAY_BLOCK?: Prisma.SortOrder;
    TOTAL_PLAY_UNIQUE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN?: Prisma.CampaignOrderByWithRelationInput;
    TEST_AB_A?: Prisma.Test_ABOrderByWithRelationInput;
    TEST_AB_B?: Prisma.Test_ABOrderByWithRelationInput;
    MODEL_PLAYS?: Prisma.Model_PlayOrderByRelationAggregateInput;
};
export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    OR?: Prisma.AnalyticsWhereInput[];
    NOT?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    CAMPAIGN_ID?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    TEST_AB_ID_A?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    TEST_AB_ID_B?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    TOTAL_PLAYS?: Prisma.IntFilter<"Analytics"> | number;
    TOTAL_VIEWS?: Prisma.IntFilter<"Analytics"> | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFilter<"Analytics"> | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFilter<"Analytics"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Analytics"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Analytics"> | Date | string | null;
    CAMPAIGN?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    TEST_AB_A?: Prisma.XOR<Prisma.Test_ABNullableScalarRelationFilter, Prisma.Test_ABWhereInput> | null;
    TEST_AB_B?: Prisma.XOR<Prisma.Test_ABNullableScalarRelationFilter, Prisma.Test_ABWhereInput> | null;
    MODEL_PLAYS?: Prisma.Model_PlayListRelationFilter;
}, "ID">;
export type AnalyticsOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    TEST_AB_ID_A?: Prisma.SortOrderInput | Prisma.SortOrder;
    TEST_AB_ID_B?: Prisma.SortOrderInput | Prisma.SortOrder;
    TOTAL_PLAYS?: Prisma.SortOrder;
    TOTAL_VIEWS?: Prisma.SortOrder;
    TOTAL_PLAY_BLOCK?: Prisma.SortOrder;
    TOTAL_PLAY_UNIQUE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AnalyticsCountOrderByAggregateInput;
    _avg?: Prisma.AnalyticsAvgOrderByAggregateInput;
    _max?: Prisma.AnalyticsMaxOrderByAggregateInput;
    _min?: Prisma.AnalyticsMinOrderByAggregateInput;
    _sum?: Prisma.AnalyticsSumOrderByAggregateInput;
};
export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnalyticsScalarWhereWithAggregatesInput | Prisma.AnalyticsScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnalyticsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnalyticsScalarWhereWithAggregatesInput | Prisma.AnalyticsScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Analytics"> | string;
    CAMPAIGN_ID?: Prisma.StringNullableWithAggregatesFilter<"Analytics"> | string | null;
    TEST_AB_ID_A?: Prisma.StringNullableWithAggregatesFilter<"Analytics"> | string | null;
    TEST_AB_ID_B?: Prisma.StringNullableWithAggregatesFilter<"Analytics"> | string | null;
    TOTAL_PLAYS?: Prisma.IntWithAggregatesFilter<"Analytics"> | number;
    TOTAL_VIEWS?: Prisma.IntWithAggregatesFilter<"Analytics"> | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntWithAggregatesFilter<"Analytics"> | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntWithAggregatesFilter<"Analytics"> | number;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Analytics"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Analytics"> | Date | string | null;
};
export type AnalyticsCreateInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_A?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_AInput;
    TEST_AB_B?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_BInput;
    MODEL_PLAYS?: Prisma.Model_PlayCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsUncheckedCreateInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_A?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_AInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_BInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_A?: Prisma.Test_ABUpdateOneWithoutANALYTICS_ANestedInput;
    TEST_AB_B?: Prisma.Test_ABUpdateOneWithoutANALYTICS_BNestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUpdateManyWithoutANALYTICSNestedInput;
};
export type AnalyticsUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_A?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_ANestedInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_BNestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedUpdateManyWithoutANALYTICSNestedInput;
};
export type AnalyticsCreateManyInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type AnalyticsUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AnalyticsUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AnalyticsNullableScalarRelationFilter = {
    is?: Prisma.AnalyticsWhereInput | null;
    isNot?: Prisma.AnalyticsWhereInput | null;
};
export type AnalyticsCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrder;
    TEST_AB_ID_A?: Prisma.SortOrder;
    TEST_AB_ID_B?: Prisma.SortOrder;
    TOTAL_PLAYS?: Prisma.SortOrder;
    TOTAL_VIEWS?: Prisma.SortOrder;
    TOTAL_PLAY_BLOCK?: Prisma.SortOrder;
    TOTAL_PLAY_UNIQUE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type AnalyticsAvgOrderByAggregateInput = {
    TOTAL_PLAYS?: Prisma.SortOrder;
    TOTAL_VIEWS?: Prisma.SortOrder;
    TOTAL_PLAY_BLOCK?: Prisma.SortOrder;
    TOTAL_PLAY_UNIQUE?: Prisma.SortOrder;
};
export type AnalyticsMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrder;
    TEST_AB_ID_A?: Prisma.SortOrder;
    TEST_AB_ID_B?: Prisma.SortOrder;
    TOTAL_PLAYS?: Prisma.SortOrder;
    TOTAL_VIEWS?: Prisma.SortOrder;
    TOTAL_PLAY_BLOCK?: Prisma.SortOrder;
    TOTAL_PLAY_UNIQUE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type AnalyticsMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrder;
    TEST_AB_ID_A?: Prisma.SortOrder;
    TEST_AB_ID_B?: Prisma.SortOrder;
    TOTAL_PLAYS?: Prisma.SortOrder;
    TOTAL_VIEWS?: Prisma.SortOrder;
    TOTAL_PLAY_BLOCK?: Prisma.SortOrder;
    TOTAL_PLAY_UNIQUE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type AnalyticsSumOrderByAggregateInput = {
    TOTAL_PLAYS?: Prisma.SortOrder;
    TOTAL_VIEWS?: Prisma.SortOrder;
    TOTAL_PLAY_BLOCK?: Prisma.SortOrder;
    TOTAL_PLAY_UNIQUE?: Prisma.SortOrder;
};
export type AnalyticsCreateNestedOneWithoutCAMPAIGNInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutCAMPAIGNInput, Prisma.AnalyticsUncheckedCreateWithoutCAMPAIGNInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutCAMPAIGNInput;
    connect?: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsUpdateOneWithoutCAMPAIGNNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutCAMPAIGNInput, Prisma.AnalyticsUncheckedCreateWithoutCAMPAIGNInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutCAMPAIGNInput;
    upsert?: Prisma.AnalyticsUpsertWithoutCAMPAIGNInput;
    disconnect?: Prisma.AnalyticsWhereInput | boolean;
    delete?: Prisma.AnalyticsWhereInput | boolean;
    connect?: Prisma.AnalyticsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalyticsUpdateToOneWithWhereWithoutCAMPAIGNInput, Prisma.AnalyticsUpdateWithoutCAMPAIGNInput>, Prisma.AnalyticsUncheckedUpdateWithoutCAMPAIGNInput>;
};
export type AnalyticsCreateNestedOneWithoutMODEL_PLAYSInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutMODEL_PLAYSInput, Prisma.AnalyticsUncheckedCreateWithoutMODEL_PLAYSInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutMODEL_PLAYSInput;
    connect?: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsUpdateOneWithoutMODEL_PLAYSNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutMODEL_PLAYSInput, Prisma.AnalyticsUncheckedCreateWithoutMODEL_PLAYSInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutMODEL_PLAYSInput;
    upsert?: Prisma.AnalyticsUpsertWithoutMODEL_PLAYSInput;
    disconnect?: Prisma.AnalyticsWhereInput | boolean;
    delete?: Prisma.AnalyticsWhereInput | boolean;
    connect?: Prisma.AnalyticsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalyticsUpdateToOneWithWhereWithoutMODEL_PLAYSInput, Prisma.AnalyticsUpdateWithoutMODEL_PLAYSInput>, Prisma.AnalyticsUncheckedUpdateWithoutMODEL_PLAYSInput>;
};
export type AnalyticsCreateNestedOneWithoutTEST_AB_AInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_AInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_AInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutTEST_AB_AInput;
    connect?: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsCreateNestedOneWithoutTEST_AB_BInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_BInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_BInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutTEST_AB_BInput;
    connect?: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsUpdateOneWithoutTEST_AB_ANestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_AInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_AInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutTEST_AB_AInput;
    upsert?: Prisma.AnalyticsUpsertWithoutTEST_AB_AInput;
    disconnect?: Prisma.AnalyticsWhereInput | boolean;
    delete?: Prisma.AnalyticsWhereInput | boolean;
    connect?: Prisma.AnalyticsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalyticsUpdateToOneWithWhereWithoutTEST_AB_AInput, Prisma.AnalyticsUpdateWithoutTEST_AB_AInput>, Prisma.AnalyticsUncheckedUpdateWithoutTEST_AB_AInput>;
};
export type AnalyticsUpdateOneWithoutTEST_AB_BNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_BInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_BInput>;
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutTEST_AB_BInput;
    upsert?: Prisma.AnalyticsUpsertWithoutTEST_AB_BInput;
    disconnect?: Prisma.AnalyticsWhereInput | boolean;
    delete?: Prisma.AnalyticsWhereInput | boolean;
    connect?: Prisma.AnalyticsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalyticsUpdateToOneWithWhereWithoutTEST_AB_BInput, Prisma.AnalyticsUpdateWithoutTEST_AB_BInput>, Prisma.AnalyticsUncheckedUpdateWithoutTEST_AB_BInput>;
};
export type AnalyticsCreateWithoutCAMPAIGNInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    TEST_AB_A?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_AInput;
    TEST_AB_B?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_BInput;
    MODEL_PLAYS?: Prisma.Model_PlayCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsUncheckedCreateWithoutCAMPAIGNInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    TEST_AB_A?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_AInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_BInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsCreateOrConnectWithoutCAMPAIGNInput = {
    where: Prisma.AnalyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutCAMPAIGNInput, Prisma.AnalyticsUncheckedCreateWithoutCAMPAIGNInput>;
};
export type AnalyticsUpsertWithoutCAMPAIGNInput = {
    update: Prisma.XOR<Prisma.AnalyticsUpdateWithoutCAMPAIGNInput, Prisma.AnalyticsUncheckedUpdateWithoutCAMPAIGNInput>;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutCAMPAIGNInput, Prisma.AnalyticsUncheckedCreateWithoutCAMPAIGNInput>;
    where?: Prisma.AnalyticsWhereInput;
};
export type AnalyticsUpdateToOneWithWhereWithoutCAMPAIGNInput = {
    where?: Prisma.AnalyticsWhereInput;
    data: Prisma.XOR<Prisma.AnalyticsUpdateWithoutCAMPAIGNInput, Prisma.AnalyticsUncheckedUpdateWithoutCAMPAIGNInput>;
};
export type AnalyticsUpdateWithoutCAMPAIGNInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    TEST_AB_A?: Prisma.Test_ABUpdateOneWithoutANALYTICS_ANestedInput;
    TEST_AB_B?: Prisma.Test_ABUpdateOneWithoutANALYTICS_BNestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUpdateManyWithoutANALYTICSNestedInput;
};
export type AnalyticsUncheckedUpdateWithoutCAMPAIGNInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    TEST_AB_A?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_ANestedInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_BNestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedUpdateManyWithoutANALYTICSNestedInput;
};
export type AnalyticsCreateWithoutMODEL_PLAYSInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_A?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_AInput;
    TEST_AB_B?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_BInput;
};
export type AnalyticsUncheckedCreateWithoutMODEL_PLAYSInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_A?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_AInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_BInput;
};
export type AnalyticsCreateOrConnectWithoutMODEL_PLAYSInput = {
    where: Prisma.AnalyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutMODEL_PLAYSInput, Prisma.AnalyticsUncheckedCreateWithoutMODEL_PLAYSInput>;
};
export type AnalyticsUpsertWithoutMODEL_PLAYSInput = {
    update: Prisma.XOR<Prisma.AnalyticsUpdateWithoutMODEL_PLAYSInput, Prisma.AnalyticsUncheckedUpdateWithoutMODEL_PLAYSInput>;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutMODEL_PLAYSInput, Prisma.AnalyticsUncheckedCreateWithoutMODEL_PLAYSInput>;
    where?: Prisma.AnalyticsWhereInput;
};
export type AnalyticsUpdateToOneWithWhereWithoutMODEL_PLAYSInput = {
    where?: Prisma.AnalyticsWhereInput;
    data: Prisma.XOR<Prisma.AnalyticsUpdateWithoutMODEL_PLAYSInput, Prisma.AnalyticsUncheckedUpdateWithoutMODEL_PLAYSInput>;
};
export type AnalyticsUpdateWithoutMODEL_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_A?: Prisma.Test_ABUpdateOneWithoutANALYTICS_ANestedInput;
    TEST_AB_B?: Prisma.Test_ABUpdateOneWithoutANALYTICS_BNestedInput;
};
export type AnalyticsUncheckedUpdateWithoutMODEL_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_A?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_ANestedInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_BNestedInput;
};
export type AnalyticsCreateWithoutTEST_AB_AInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_B?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_BInput;
    MODEL_PLAYS?: Prisma.Model_PlayCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsUncheckedCreateWithoutTEST_AB_AInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_BInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsCreateOrConnectWithoutTEST_AB_AInput = {
    where: Prisma.AnalyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_AInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_AInput>;
};
export type AnalyticsCreateWithoutTEST_AB_BInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_A?: Prisma.Test_ABCreateNestedOneWithoutANALYTICS_AInput;
    MODEL_PLAYS?: Prisma.Model_PlayCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsUncheckedCreateWithoutTEST_AB_BInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    TEST_AB_ID_A?: string | null;
    TEST_AB_ID_B?: string | null;
    TOTAL_PLAYS?: number;
    TOTAL_VIEWS?: number;
    TOTAL_PLAY_BLOCK?: number;
    TOTAL_PLAY_UNIQUE?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutANALYTICSInput;
    TEST_AB_A?: Prisma.Test_ABUncheckedCreateNestedOneWithoutANALYTICS_AInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedCreateNestedManyWithoutANALYTICSInput;
};
export type AnalyticsCreateOrConnectWithoutTEST_AB_BInput = {
    where: Prisma.AnalyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_BInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_BInput>;
};
export type AnalyticsUpsertWithoutTEST_AB_AInput = {
    update: Prisma.XOR<Prisma.AnalyticsUpdateWithoutTEST_AB_AInput, Prisma.AnalyticsUncheckedUpdateWithoutTEST_AB_AInput>;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_AInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_AInput>;
    where?: Prisma.AnalyticsWhereInput;
};
export type AnalyticsUpdateToOneWithWhereWithoutTEST_AB_AInput = {
    where?: Prisma.AnalyticsWhereInput;
    data: Prisma.XOR<Prisma.AnalyticsUpdateWithoutTEST_AB_AInput, Prisma.AnalyticsUncheckedUpdateWithoutTEST_AB_AInput>;
};
export type AnalyticsUpdateWithoutTEST_AB_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_B?: Prisma.Test_ABUpdateOneWithoutANALYTICS_BNestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUpdateManyWithoutANALYTICSNestedInput;
};
export type AnalyticsUncheckedUpdateWithoutTEST_AB_AInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_B?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_BNestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedUpdateManyWithoutANALYTICSNestedInput;
};
export type AnalyticsUpsertWithoutTEST_AB_BInput = {
    update: Prisma.XOR<Prisma.AnalyticsUpdateWithoutTEST_AB_BInput, Prisma.AnalyticsUncheckedUpdateWithoutTEST_AB_BInput>;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutTEST_AB_BInput, Prisma.AnalyticsUncheckedCreateWithoutTEST_AB_BInput>;
    where?: Prisma.AnalyticsWhereInput;
};
export type AnalyticsUpdateToOneWithWhereWithoutTEST_AB_BInput = {
    where?: Prisma.AnalyticsWhereInput;
    data: Prisma.XOR<Prisma.AnalyticsUpdateWithoutTEST_AB_BInput, Prisma.AnalyticsUncheckedUpdateWithoutTEST_AB_BInput>;
};
export type AnalyticsUpdateWithoutTEST_AB_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_A?: Prisma.Test_ABUpdateOneWithoutANALYTICS_ANestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUpdateManyWithoutANALYTICSNestedInput;
};
export type AnalyticsUncheckedUpdateWithoutTEST_AB_BInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_A?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TEST_AB_ID_B?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TOTAL_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_VIEWS?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_BLOCK?: Prisma.IntFieldUpdateOperationsInput | number;
    TOTAL_PLAY_UNIQUE?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutANALYTICSNestedInput;
    TEST_AB_A?: Prisma.Test_ABUncheckedUpdateOneWithoutANALYTICS_ANestedInput;
    MODEL_PLAYS?: Prisma.Model_PlayUncheckedUpdateManyWithoutANALYTICSNestedInput;
};
/**
 * Count Type AnalyticsCountOutputType
 */
export type AnalyticsCountOutputType = {
    MODEL_PLAYS: number;
};
export type AnalyticsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MODEL_PLAYS?: boolean | AnalyticsCountOutputTypeCountMODEL_PLAYSArgs;
};
/**
 * AnalyticsCountOutputType without action
 */
export type AnalyticsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsCountOutputType
     */
    select?: Prisma.AnalyticsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AnalyticsCountOutputType without action
 */
export type AnalyticsCountOutputTypeCountMODEL_PLAYSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Model_PlayWhereInput;
};
export type AnalyticsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    TEST_AB_ID_A?: boolean;
    TEST_AB_ID_B?: boolean;
    TOTAL_PLAYS?: boolean;
    TOTAL_VIEWS?: boolean;
    TOTAL_PLAY_BLOCK?: boolean;
    TOTAL_PLAY_UNIQUE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN?: boolean | Prisma.Analytics$CAMPAIGNArgs<ExtArgs>;
    TEST_AB_A?: boolean | Prisma.Analytics$TEST_AB_AArgs<ExtArgs>;
    TEST_AB_B?: boolean | Prisma.Analytics$TEST_AB_BArgs<ExtArgs>;
    MODEL_PLAYS?: boolean | Prisma.Analytics$MODEL_PLAYSArgs<ExtArgs>;
    _count?: boolean | Prisma.AnalyticsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analytics"]>;
export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    TEST_AB_ID_A?: boolean;
    TEST_AB_ID_B?: boolean;
    TOTAL_PLAYS?: boolean;
    TOTAL_VIEWS?: boolean;
    TOTAL_PLAY_BLOCK?: boolean;
    TOTAL_PLAY_UNIQUE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["analytics"]>;
export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    TEST_AB_ID_A?: boolean;
    TEST_AB_ID_B?: boolean;
    TOTAL_PLAYS?: boolean;
    TOTAL_VIEWS?: boolean;
    TOTAL_PLAY_BLOCK?: boolean;
    TOTAL_PLAY_UNIQUE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["analytics"]>;
export type AnalyticsSelectScalar = {
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    TEST_AB_ID_A?: boolean;
    TEST_AB_ID_B?: boolean;
    TOTAL_PLAYS?: boolean;
    TOTAL_VIEWS?: boolean;
    TOTAL_PLAY_BLOCK?: boolean;
    TOTAL_PLAY_UNIQUE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type AnalyticsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "CAMPAIGN_ID" | "TEST_AB_ID_A" | "TEST_AB_ID_B" | "TOTAL_PLAYS" | "TOTAL_VIEWS" | "TOTAL_PLAY_BLOCK" | "TOTAL_PLAY_UNIQUE" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["analytics"]>;
export type AnalyticsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN?: boolean | Prisma.Analytics$CAMPAIGNArgs<ExtArgs>;
    TEST_AB_A?: boolean | Prisma.Analytics$TEST_AB_AArgs<ExtArgs>;
    TEST_AB_B?: boolean | Prisma.Analytics$TEST_AB_BArgs<ExtArgs>;
    MODEL_PLAYS?: boolean | Prisma.Analytics$MODEL_PLAYSArgs<ExtArgs>;
    _count?: boolean | Prisma.AnalyticsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnalyticsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AnalyticsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AnalyticsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Analytics";
    objects: {
        CAMPAIGN: Prisma.$CampaignPayload<ExtArgs> | null;
        TEST_AB_A: Prisma.$Test_ABPayload<ExtArgs> | null;
        TEST_AB_B: Prisma.$Test_ABPayload<ExtArgs> | null;
        MODEL_PLAYS: Prisma.$Model_PlayPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        CAMPAIGN_ID: string | null;
        TEST_AB_ID_A: string | null;
        TEST_AB_ID_B: string | null;
        TOTAL_PLAYS: number;
        TOTAL_VIEWS: number;
        TOTAL_PLAY_BLOCK: number;
        TOTAL_PLAY_UNIQUE: number;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["analytics"]>;
    composites: {};
};
export type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload, S>;
export type AnalyticsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalyticsCountAggregateInputType | true;
};
export interface AnalyticsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Analytics'];
        meta: {
            name: 'Analytics';
        };
    };
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: Prisma.SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: Prisma.SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     *
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const analyticsWithIDOnly = await prisma.analytics.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     *
     */
    create<T extends AnalyticsCreateArgs>(args: Prisma.SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Analytics and only return the `ID`
     * const analyticsWithIDOnly = await prisma.analytics.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     *
     */
    delete<T extends AnalyticsDeleteArgs>(args: Prisma.SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AnalyticsUpdateArgs>(args: Prisma.SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: Prisma.SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analytics and returns the data updated in the database.
     * @param {AnalyticsUpdateManyAndReturnArgs} args - Arguments to update many Analytics.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Analytics and only return the `ID`
     * const analyticsWithIDOnly = await prisma.analytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: Prisma.SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(args?: Prisma.Subset<T, AnalyticsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnalyticsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(args: Prisma.Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>;
    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AnalyticsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnalyticsGroupByArgs['orderBy'];
    } : {
        orderBy?: AnalyticsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Analytics model
     */
    readonly fields: AnalyticsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Analytics.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CAMPAIGN<T extends Prisma.Analytics$CAMPAIGNArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Analytics$CAMPAIGNArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    TEST_AB_A<T extends Prisma.Analytics$TEST_AB_AArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Analytics$TEST_AB_AArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    TEST_AB_B<T extends Prisma.Analytics$TEST_AB_BArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Analytics$TEST_AB_BArgs<ExtArgs>>): Prisma.Prisma__Test_ABClient<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    MODEL_PLAYS<T extends Prisma.Analytics$MODEL_PLAYSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Analytics$MODEL_PLAYSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Model_PlayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Analytics model
 */
export interface AnalyticsFieldRefs {
    readonly ID: Prisma.FieldRef<"Analytics", 'String'>;
    readonly CAMPAIGN_ID: Prisma.FieldRef<"Analytics", 'String'>;
    readonly TEST_AB_ID_A: Prisma.FieldRef<"Analytics", 'String'>;
    readonly TEST_AB_ID_B: Prisma.FieldRef<"Analytics", 'String'>;
    readonly TOTAL_PLAYS: Prisma.FieldRef<"Analytics", 'Int'>;
    readonly TOTAL_VIEWS: Prisma.FieldRef<"Analytics", 'Int'>;
    readonly TOTAL_PLAY_BLOCK: Prisma.FieldRef<"Analytics", 'Int'>;
    readonly TOTAL_PLAY_UNIQUE: Prisma.FieldRef<"Analytics", 'Int'>;
    readonly CREATED_AT: Prisma.FieldRef<"Analytics", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Analytics", 'DateTime'>;
}
/**
 * Analytics findUnique
 */
export type AnalyticsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Analytics to fetch.
     */
    where: Prisma.AnalyticsWhereUniqueInput;
};
/**
 * Analytics findUniqueOrThrow
 */
export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Analytics to fetch.
     */
    where: Prisma.AnalyticsWhereUniqueInput;
};
/**
 * Analytics findFirst
 */
export type AnalyticsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Analytics to fetch.
     */
    where?: Prisma.AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Analytics.
     */
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Analytics.
     */
    distinct?: Prisma.AnalyticsScalarFieldEnum | Prisma.AnalyticsScalarFieldEnum[];
};
/**
 * Analytics findFirstOrThrow
 */
export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Analytics to fetch.
     */
    where?: Prisma.AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Analytics.
     */
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Analytics.
     */
    distinct?: Prisma.AnalyticsScalarFieldEnum | Prisma.AnalyticsScalarFieldEnum[];
};
/**
 * Analytics findMany
 */
export type AnalyticsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Analytics to fetch.
     */
    where?: Prisma.AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Analytics.
     */
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Analytics.
     */
    distinct?: Prisma.AnalyticsScalarFieldEnum | Prisma.AnalyticsScalarFieldEnum[];
};
/**
 * Analytics create
 */
export type AnalyticsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Analytics.
     */
    data?: Prisma.XOR<Prisma.AnalyticsCreateInput, Prisma.AnalyticsUncheckedCreateInput>;
};
/**
 * Analytics createMany
 */
export type AnalyticsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: Prisma.AnalyticsCreateManyInput | Prisma.AnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Analytics createManyAndReturn
 */
export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: Prisma.AnalyticsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Analytics
     */
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    /**
     * The data used to create many Analytics.
     */
    data: Prisma.AnalyticsCreateManyInput | Prisma.AnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Analytics update
 */
export type AnalyticsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Analytics.
     */
    data: Prisma.XOR<Prisma.AnalyticsUpdateInput, Prisma.AnalyticsUncheckedUpdateInput>;
    /**
     * Choose, which Analytics to update.
     */
    where: Prisma.AnalyticsWhereUniqueInput;
};
/**
 * Analytics updateMany
 */
export type AnalyticsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: Prisma.XOR<Prisma.AnalyticsUpdateManyMutationInput, Prisma.AnalyticsUncheckedUpdateManyInput>;
    /**
     * Filter which Analytics to update
     */
    where?: Prisma.AnalyticsWhereInput;
    /**
     * Limit how many Analytics to update.
     */
    limit?: number;
};
/**
 * Analytics updateManyAndReturn
 */
export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: Prisma.AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Analytics
     */
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    /**
     * The data used to update Analytics.
     */
    data: Prisma.XOR<Prisma.AnalyticsUpdateManyMutationInput, Prisma.AnalyticsUncheckedUpdateManyInput>;
    /**
     * Filter which Analytics to update
     */
    where?: Prisma.AnalyticsWhereInput;
    /**
     * Limit how many Analytics to update.
     */
    limit?: number;
};
/**
 * Analytics upsert
 */
export type AnalyticsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: Prisma.AnalyticsWhereUniqueInput;
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: Prisma.XOR<Prisma.AnalyticsCreateInput, Prisma.AnalyticsUncheckedCreateInput>;
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AnalyticsUpdateInput, Prisma.AnalyticsUncheckedUpdateInput>;
};
/**
 * Analytics delete
 */
export type AnalyticsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Analytics to delete.
     */
    where: Prisma.AnalyticsWhereUniqueInput;
};
/**
 * Analytics deleteMany
 */
export type AnalyticsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: Prisma.AnalyticsWhereInput;
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number;
};
/**
 * Analytics.CAMPAIGN
 */
export type Analytics$CAMPAIGNArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Analytics.TEST_AB_A
 */
export type Analytics$TEST_AB_AArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Analytics.TEST_AB_B
 */
export type Analytics$TEST_AB_BArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Analytics.MODEL_PLAYS
 */
export type Analytics$MODEL_PLAYSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Analytics without action
 */
export type AnalyticsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Analytics.d.ts.map
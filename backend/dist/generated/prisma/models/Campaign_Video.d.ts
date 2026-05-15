import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Campaign_Video
 *
 */
export type Campaign_VideoModel = runtime.Types.Result.DefaultSelection<Prisma.$Campaign_VideoPayload>;
export type AggregateCampaign_Video = {
    _count: Campaign_VideoCountAggregateOutputType | null;
    _avg: Campaign_VideoAvgAggregateOutputType | null;
    _sum: Campaign_VideoSumAggregateOutputType | null;
    _min: Campaign_VideoMinAggregateOutputType | null;
    _max: Campaign_VideoMaxAggregateOutputType | null;
};
export type Campaign_VideoAvgAggregateOutputType = {
    CTA_START: number | null;
    CTA_CLICK_CAMPAING: number | null;
    CTA_CLICK_TEST_AB: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
    ORDER: number | null;
};
export type Campaign_VideoSumAggregateOutputType = {
    CTA_START: number | null;
    CTA_CLICK_CAMPAING: number | null;
    CTA_CLICK_TEST_AB: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
    ORDER: number | null;
};
export type Campaign_VideoMinAggregateOutputType = {
    ID: string | null;
    CAMPAIGN_ID: string | null;
    VIDEO_ID: string | null;
    CTA: boolean | null;
    CTA_TEXT: string | null;
    CTA_URL: string | null;
    CTA_STYLE: string | null;
    CTA_START: number | null;
    CTA_CLICK_CAMPAING: number | null;
    CTA_CLICK_TEST_AB: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
    ORDER: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Campaign_VideoMaxAggregateOutputType = {
    ID: string | null;
    CAMPAIGN_ID: string | null;
    VIDEO_ID: string | null;
    CTA: boolean | null;
    CTA_TEXT: string | null;
    CTA_URL: string | null;
    CTA_STYLE: string | null;
    CTA_START: number | null;
    CTA_CLICK_CAMPAING: number | null;
    CTA_CLICK_TEST_AB: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
    ORDER: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Campaign_VideoCountAggregateOutputType = {
    ID: number;
    CAMPAIGN_ID: number;
    VIDEO_ID: number;
    CTA: number;
    CTA_TEXT: number;
    CTA_URL: number;
    CTA_STYLE: number;
    CTA_START: number;
    CTA_CLICK_CAMPAING: number;
    CTA_CLICK_TEST_AB: number;
    X_POSITION: number;
    Y_POSITION: number;
    ORDER: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Campaign_VideoAvgAggregateInputType = {
    CTA_START?: true;
    CTA_CLICK_CAMPAING?: true;
    CTA_CLICK_TEST_AB?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    ORDER?: true;
};
export type Campaign_VideoSumAggregateInputType = {
    CTA_START?: true;
    CTA_CLICK_CAMPAING?: true;
    CTA_CLICK_TEST_AB?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    ORDER?: true;
};
export type Campaign_VideoMinAggregateInputType = {
    ID?: true;
    CAMPAIGN_ID?: true;
    VIDEO_ID?: true;
    CTA?: true;
    CTA_TEXT?: true;
    CTA_URL?: true;
    CTA_STYLE?: true;
    CTA_START?: true;
    CTA_CLICK_CAMPAING?: true;
    CTA_CLICK_TEST_AB?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    ORDER?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Campaign_VideoMaxAggregateInputType = {
    ID?: true;
    CAMPAIGN_ID?: true;
    VIDEO_ID?: true;
    CTA?: true;
    CTA_TEXT?: true;
    CTA_URL?: true;
    CTA_STYLE?: true;
    CTA_START?: true;
    CTA_CLICK_CAMPAING?: true;
    CTA_CLICK_TEST_AB?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    ORDER?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Campaign_VideoCountAggregateInputType = {
    ID?: true;
    CAMPAIGN_ID?: true;
    VIDEO_ID?: true;
    CTA?: true;
    CTA_TEXT?: true;
    CTA_URL?: true;
    CTA_STYLE?: true;
    CTA_START?: true;
    CTA_CLICK_CAMPAING?: true;
    CTA_CLICK_TEST_AB?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    ORDER?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Campaign_VideoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign_Video to aggregate.
     */
    where?: Prisma.Campaign_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaign_Videos to fetch.
     */
    orderBy?: Prisma.Campaign_VideoOrderByWithRelationInput | Prisma.Campaign_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Campaign_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaign_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaign_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Campaign_Videos
    **/
    _count?: true | Campaign_VideoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Campaign_VideoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Campaign_VideoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Campaign_VideoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Campaign_VideoMaxAggregateInputType;
};
export type GetCampaign_VideoAggregateType<T extends Campaign_VideoAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign_Video]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaign_Video[P]> : Prisma.GetScalarType<T[P], AggregateCampaign_Video[P]>;
};
export type Campaign_VideoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Campaign_VideoWhereInput;
    orderBy?: Prisma.Campaign_VideoOrderByWithAggregationInput | Prisma.Campaign_VideoOrderByWithAggregationInput[];
    by: Prisma.Campaign_VideoScalarFieldEnum[] | Prisma.Campaign_VideoScalarFieldEnum;
    having?: Prisma.Campaign_VideoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Campaign_VideoCountAggregateInputType | true;
    _avg?: Campaign_VideoAvgAggregateInputType;
    _sum?: Campaign_VideoSumAggregateInputType;
    _min?: Campaign_VideoMinAggregateInputType;
    _max?: Campaign_VideoMaxAggregateInputType;
};
export type Campaign_VideoGroupByOutputType = {
    ID: string;
    CAMPAIGN_ID: string | null;
    VIDEO_ID: string | null;
    CTA: boolean;
    CTA_TEXT: string | null;
    CTA_URL: string | null;
    CTA_STYLE: string | null;
    CTA_START: number;
    CTA_CLICK_CAMPAING: number;
    CTA_CLICK_TEST_AB: number;
    X_POSITION: number;
    Y_POSITION: number;
    ORDER: number;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Campaign_VideoCountAggregateOutputType | null;
    _avg: Campaign_VideoAvgAggregateOutputType | null;
    _sum: Campaign_VideoSumAggregateOutputType | null;
    _min: Campaign_VideoMinAggregateOutputType | null;
    _max: Campaign_VideoMaxAggregateOutputType | null;
};
type GetCampaign_VideoGroupByPayload<T extends Campaign_VideoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Campaign_VideoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Campaign_VideoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Campaign_VideoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Campaign_VideoGroupByOutputType[P]>;
}>>;
export type Campaign_VideoWhereInput = {
    AND?: Prisma.Campaign_VideoWhereInput | Prisma.Campaign_VideoWhereInput[];
    OR?: Prisma.Campaign_VideoWhereInput[];
    NOT?: Prisma.Campaign_VideoWhereInput | Prisma.Campaign_VideoWhereInput[];
    ID?: Prisma.StringFilter<"Campaign_Video"> | string;
    CAMPAIGN_ID?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    VIDEO_ID?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA?: Prisma.BoolFilter<"Campaign_Video"> | boolean;
    CTA_TEXT?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_URL?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_STYLE?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_START?: Prisma.IntFilter<"Campaign_Video"> | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFilter<"Campaign_Video"> | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFilter<"Campaign_Video"> | number;
    X_POSITION?: Prisma.FloatFilter<"Campaign_Video"> | number;
    Y_POSITION?: Prisma.FloatFilter<"Campaign_Video"> | number;
    ORDER?: Prisma.IntFilter<"Campaign_Video"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Campaign_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Campaign_Video"> | Date | string | null;
    CAMPAIGN?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    VIDEO?: Prisma.XOR<Prisma.VideoNullableScalarRelationFilter, Prisma.VideoWhereInput> | null;
    BONDS?: Prisma.Bond_VideoListRelationFilter;
};
export type Campaign_VideoOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA?: Prisma.SortOrder;
    CTA_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA_URL?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA_STYLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA_START?: Prisma.SortOrder;
    CTA_CLICK_CAMPAING?: Prisma.SortOrder;
    CTA_CLICK_TEST_AB?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    ORDER?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN?: Prisma.CampaignOrderByWithRelationInput;
    VIDEO?: Prisma.VideoOrderByWithRelationInput;
    BONDS?: Prisma.Bond_VideoOrderByRelationAggregateInput;
};
export type Campaign_VideoWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.Campaign_VideoWhereInput | Prisma.Campaign_VideoWhereInput[];
    OR?: Prisma.Campaign_VideoWhereInput[];
    NOT?: Prisma.Campaign_VideoWhereInput | Prisma.Campaign_VideoWhereInput[];
    CAMPAIGN_ID?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    VIDEO_ID?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA?: Prisma.BoolFilter<"Campaign_Video"> | boolean;
    CTA_TEXT?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_URL?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_STYLE?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_START?: Prisma.IntFilter<"Campaign_Video"> | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFilter<"Campaign_Video"> | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFilter<"Campaign_Video"> | number;
    X_POSITION?: Prisma.FloatFilter<"Campaign_Video"> | number;
    Y_POSITION?: Prisma.FloatFilter<"Campaign_Video"> | number;
    ORDER?: Prisma.IntFilter<"Campaign_Video"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Campaign_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Campaign_Video"> | Date | string | null;
    CAMPAIGN?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    VIDEO?: Prisma.XOR<Prisma.VideoNullableScalarRelationFilter, Prisma.VideoWhereInput> | null;
    BONDS?: Prisma.Bond_VideoListRelationFilter;
}, "ID">;
export type Campaign_VideoOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA?: Prisma.SortOrder;
    CTA_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA_URL?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA_STYLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    CTA_START?: Prisma.SortOrder;
    CTA_CLICK_CAMPAING?: Prisma.SortOrder;
    CTA_CLICK_TEST_AB?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    ORDER?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Campaign_VideoCountOrderByAggregateInput;
    _avg?: Prisma.Campaign_VideoAvgOrderByAggregateInput;
    _max?: Prisma.Campaign_VideoMaxOrderByAggregateInput;
    _min?: Prisma.Campaign_VideoMinOrderByAggregateInput;
    _sum?: Prisma.Campaign_VideoSumOrderByAggregateInput;
};
export type Campaign_VideoScalarWhereWithAggregatesInput = {
    AND?: Prisma.Campaign_VideoScalarWhereWithAggregatesInput | Prisma.Campaign_VideoScalarWhereWithAggregatesInput[];
    OR?: Prisma.Campaign_VideoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Campaign_VideoScalarWhereWithAggregatesInput | Prisma.Campaign_VideoScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Campaign_Video"> | string;
    CAMPAIGN_ID?: Prisma.StringNullableWithAggregatesFilter<"Campaign_Video"> | string | null;
    VIDEO_ID?: Prisma.StringNullableWithAggregatesFilter<"Campaign_Video"> | string | null;
    CTA?: Prisma.BoolWithAggregatesFilter<"Campaign_Video"> | boolean;
    CTA_TEXT?: Prisma.StringNullableWithAggregatesFilter<"Campaign_Video"> | string | null;
    CTA_URL?: Prisma.StringNullableWithAggregatesFilter<"Campaign_Video"> | string | null;
    CTA_STYLE?: Prisma.StringNullableWithAggregatesFilter<"Campaign_Video"> | string | null;
    CTA_START?: Prisma.IntWithAggregatesFilter<"Campaign_Video"> | number;
    CTA_CLICK_CAMPAING?: Prisma.IntWithAggregatesFilter<"Campaign_Video"> | number;
    CTA_CLICK_TEST_AB?: Prisma.IntWithAggregatesFilter<"Campaign_Video"> | number;
    X_POSITION?: Prisma.FloatWithAggregatesFilter<"Campaign_Video"> | number;
    Y_POSITION?: Prisma.FloatWithAggregatesFilter<"Campaign_Video"> | number;
    ORDER?: Prisma.IntWithAggregatesFilter<"Campaign_Video"> | number;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Campaign_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Campaign_Video"> | Date | string | null;
};
export type Campaign_VideoCreateInput = {
    ID?: string;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutCAMPAIGN_VIDEOSInput;
    VIDEO?: Prisma.VideoCreateNestedOneWithoutCAMPAIGN_VIDEOSInput;
    BONDS?: Prisma.Bond_VideoCreateNestedManyWithoutCAMPAIGN_VIDEOSInput;
};
export type Campaign_VideoUncheckedCreateInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    VIDEO_ID?: string | null;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BONDS?: Prisma.Bond_VideoUncheckedCreateNestedManyWithoutCAMPAIGN_VIDEOSInput;
};
export type Campaign_VideoUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput;
    VIDEO?: Prisma.VideoUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput;
    BONDS?: Prisma.Bond_VideoUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput;
};
export type Campaign_VideoUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BONDS?: Prisma.Bond_VideoUncheckedUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput;
};
export type Campaign_VideoCreateManyInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    VIDEO_ID?: string | null;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Campaign_VideoUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Campaign_VideoUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Campaign_VideoListRelationFilter = {
    every?: Prisma.Campaign_VideoWhereInput;
    some?: Prisma.Campaign_VideoWhereInput;
    none?: Prisma.Campaign_VideoWhereInput;
};
export type Campaign_VideoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Campaign_VideoCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrder;
    CTA?: Prisma.SortOrder;
    CTA_TEXT?: Prisma.SortOrder;
    CTA_URL?: Prisma.SortOrder;
    CTA_STYLE?: Prisma.SortOrder;
    CTA_START?: Prisma.SortOrder;
    CTA_CLICK_CAMPAING?: Prisma.SortOrder;
    CTA_CLICK_TEST_AB?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    ORDER?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Campaign_VideoAvgOrderByAggregateInput = {
    CTA_START?: Prisma.SortOrder;
    CTA_CLICK_CAMPAING?: Prisma.SortOrder;
    CTA_CLICK_TEST_AB?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    ORDER?: Prisma.SortOrder;
};
export type Campaign_VideoMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrder;
    CTA?: Prisma.SortOrder;
    CTA_TEXT?: Prisma.SortOrder;
    CTA_URL?: Prisma.SortOrder;
    CTA_STYLE?: Prisma.SortOrder;
    CTA_START?: Prisma.SortOrder;
    CTA_CLICK_CAMPAING?: Prisma.SortOrder;
    CTA_CLICK_TEST_AB?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    ORDER?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Campaign_VideoMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrder;
    CTA?: Prisma.SortOrder;
    CTA_TEXT?: Prisma.SortOrder;
    CTA_URL?: Prisma.SortOrder;
    CTA_STYLE?: Prisma.SortOrder;
    CTA_START?: Prisma.SortOrder;
    CTA_CLICK_CAMPAING?: Prisma.SortOrder;
    CTA_CLICK_TEST_AB?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    ORDER?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Campaign_VideoSumOrderByAggregateInput = {
    CTA_START?: Prisma.SortOrder;
    CTA_CLICK_CAMPAING?: Prisma.SortOrder;
    CTA_CLICK_TEST_AB?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    ORDER?: Prisma.SortOrder;
};
export type Campaign_VideoNullableScalarRelationFilter = {
    is?: Prisma.Campaign_VideoWhereInput | null;
    isNot?: Prisma.Campaign_VideoWhereInput | null;
};
export type Campaign_VideoCreateNestedManyWithoutVIDEOInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput> | Prisma.Campaign_VideoCreateWithoutVIDEOInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput | Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput[];
    createMany?: Prisma.Campaign_VideoCreateManyVIDEOInputEnvelope;
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
};
export type Campaign_VideoUncheckedCreateNestedManyWithoutVIDEOInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput> | Prisma.Campaign_VideoCreateWithoutVIDEOInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput | Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput[];
    createMany?: Prisma.Campaign_VideoCreateManyVIDEOInputEnvelope;
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
};
export type Campaign_VideoUpdateManyWithoutVIDEONestedInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput> | Prisma.Campaign_VideoCreateWithoutVIDEOInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput | Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput[];
    upsert?: Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutVIDEOInput | Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutVIDEOInput[];
    createMany?: Prisma.Campaign_VideoCreateManyVIDEOInputEnvelope;
    set?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    disconnect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    delete?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    update?: Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutVIDEOInput | Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutVIDEOInput[];
    updateMany?: Prisma.Campaign_VideoUpdateManyWithWhereWithoutVIDEOInput | Prisma.Campaign_VideoUpdateManyWithWhereWithoutVIDEOInput[];
    deleteMany?: Prisma.Campaign_VideoScalarWhereInput | Prisma.Campaign_VideoScalarWhereInput[];
};
export type Campaign_VideoUncheckedUpdateManyWithoutVIDEONestedInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput> | Prisma.Campaign_VideoCreateWithoutVIDEOInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput | Prisma.Campaign_VideoCreateOrConnectWithoutVIDEOInput[];
    upsert?: Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutVIDEOInput | Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutVIDEOInput[];
    createMany?: Prisma.Campaign_VideoCreateManyVIDEOInputEnvelope;
    set?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    disconnect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    delete?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    update?: Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutVIDEOInput | Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutVIDEOInput[];
    updateMany?: Prisma.Campaign_VideoUpdateManyWithWhereWithoutVIDEOInput | Prisma.Campaign_VideoUpdateManyWithWhereWithoutVIDEOInput[];
    deleteMany?: Prisma.Campaign_VideoScalarWhereInput | Prisma.Campaign_VideoScalarWhereInput[];
};
export type Campaign_VideoCreateNestedManyWithoutCAMPAIGNInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput> | Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput | Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput[];
    createMany?: Prisma.Campaign_VideoCreateManyCAMPAIGNInputEnvelope;
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
};
export type Campaign_VideoUncheckedCreateNestedManyWithoutCAMPAIGNInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput> | Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput | Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput[];
    createMany?: Prisma.Campaign_VideoCreateManyCAMPAIGNInputEnvelope;
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
};
export type Campaign_VideoUpdateManyWithoutCAMPAIGNNestedInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput> | Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput | Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput[];
    upsert?: Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutCAMPAIGNInput | Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutCAMPAIGNInput[];
    createMany?: Prisma.Campaign_VideoCreateManyCAMPAIGNInputEnvelope;
    set?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    disconnect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    delete?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    update?: Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutCAMPAIGNInput | Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutCAMPAIGNInput[];
    updateMany?: Prisma.Campaign_VideoUpdateManyWithWhereWithoutCAMPAIGNInput | Prisma.Campaign_VideoUpdateManyWithWhereWithoutCAMPAIGNInput[];
    deleteMany?: Prisma.Campaign_VideoScalarWhereInput | Prisma.Campaign_VideoScalarWhereInput[];
};
export type Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNNestedInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput> | Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput[] | Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput[];
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput | Prisma.Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput[];
    upsert?: Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutCAMPAIGNInput | Prisma.Campaign_VideoUpsertWithWhereUniqueWithoutCAMPAIGNInput[];
    createMany?: Prisma.Campaign_VideoCreateManyCAMPAIGNInputEnvelope;
    set?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    disconnect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    delete?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    connect?: Prisma.Campaign_VideoWhereUniqueInput | Prisma.Campaign_VideoWhereUniqueInput[];
    update?: Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutCAMPAIGNInput | Prisma.Campaign_VideoUpdateWithWhereUniqueWithoutCAMPAIGNInput[];
    updateMany?: Prisma.Campaign_VideoUpdateManyWithWhereWithoutCAMPAIGNInput | Prisma.Campaign_VideoUpdateManyWithWhereWithoutCAMPAIGNInput[];
    deleteMany?: Prisma.Campaign_VideoScalarWhereInput | Prisma.Campaign_VideoScalarWhereInput[];
};
export type Campaign_VideoCreateNestedOneWithoutBONDSInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutBONDSInput, Prisma.Campaign_VideoUncheckedCreateWithoutBONDSInput>;
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutBONDSInput;
    connect?: Prisma.Campaign_VideoWhereUniqueInput;
};
export type Campaign_VideoUpdateOneWithoutBONDSNestedInput = {
    create?: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutBONDSInput, Prisma.Campaign_VideoUncheckedCreateWithoutBONDSInput>;
    connectOrCreate?: Prisma.Campaign_VideoCreateOrConnectWithoutBONDSInput;
    upsert?: Prisma.Campaign_VideoUpsertWithoutBONDSInput;
    disconnect?: Prisma.Campaign_VideoWhereInput | boolean;
    delete?: Prisma.Campaign_VideoWhereInput | boolean;
    connect?: Prisma.Campaign_VideoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Campaign_VideoUpdateToOneWithWhereWithoutBONDSInput, Prisma.Campaign_VideoUpdateWithoutBONDSInput>, Prisma.Campaign_VideoUncheckedUpdateWithoutBONDSInput>;
};
export type Campaign_VideoCreateWithoutVIDEOInput = {
    ID?: string;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutCAMPAIGN_VIDEOSInput;
    BONDS?: Prisma.Bond_VideoCreateNestedManyWithoutCAMPAIGN_VIDEOSInput;
};
export type Campaign_VideoUncheckedCreateWithoutVIDEOInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BONDS?: Prisma.Bond_VideoUncheckedCreateNestedManyWithoutCAMPAIGN_VIDEOSInput;
};
export type Campaign_VideoCreateOrConnectWithoutVIDEOInput = {
    where: Prisma.Campaign_VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput>;
};
export type Campaign_VideoCreateManyVIDEOInputEnvelope = {
    data: Prisma.Campaign_VideoCreateManyVIDEOInput | Prisma.Campaign_VideoCreateManyVIDEOInput[];
    skipDuplicates?: boolean;
};
export type Campaign_VideoUpsertWithWhereUniqueWithoutVIDEOInput = {
    where: Prisma.Campaign_VideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.Campaign_VideoUpdateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedUpdateWithoutVIDEOInput>;
    create: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedCreateWithoutVIDEOInput>;
};
export type Campaign_VideoUpdateWithWhereUniqueWithoutVIDEOInput = {
    where: Prisma.Campaign_VideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateWithoutVIDEOInput, Prisma.Campaign_VideoUncheckedUpdateWithoutVIDEOInput>;
};
export type Campaign_VideoUpdateManyWithWhereWithoutVIDEOInput = {
    where: Prisma.Campaign_VideoScalarWhereInput;
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateManyMutationInput, Prisma.Campaign_VideoUncheckedUpdateManyWithoutVIDEOInput>;
};
export type Campaign_VideoScalarWhereInput = {
    AND?: Prisma.Campaign_VideoScalarWhereInput | Prisma.Campaign_VideoScalarWhereInput[];
    OR?: Prisma.Campaign_VideoScalarWhereInput[];
    NOT?: Prisma.Campaign_VideoScalarWhereInput | Prisma.Campaign_VideoScalarWhereInput[];
    ID?: Prisma.StringFilter<"Campaign_Video"> | string;
    CAMPAIGN_ID?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    VIDEO_ID?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA?: Prisma.BoolFilter<"Campaign_Video"> | boolean;
    CTA_TEXT?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_URL?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_STYLE?: Prisma.StringNullableFilter<"Campaign_Video"> | string | null;
    CTA_START?: Prisma.IntFilter<"Campaign_Video"> | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFilter<"Campaign_Video"> | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFilter<"Campaign_Video"> | number;
    X_POSITION?: Prisma.FloatFilter<"Campaign_Video"> | number;
    Y_POSITION?: Prisma.FloatFilter<"Campaign_Video"> | number;
    ORDER?: Prisma.IntFilter<"Campaign_Video"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Campaign_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Campaign_Video"> | Date | string | null;
};
export type Campaign_VideoCreateWithoutCAMPAIGNInput = {
    ID?: string;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    VIDEO?: Prisma.VideoCreateNestedOneWithoutCAMPAIGN_VIDEOSInput;
    BONDS?: Prisma.Bond_VideoCreateNestedManyWithoutCAMPAIGN_VIDEOSInput;
};
export type Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput = {
    ID?: string;
    VIDEO_ID?: string | null;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BONDS?: Prisma.Bond_VideoUncheckedCreateNestedManyWithoutCAMPAIGN_VIDEOSInput;
};
export type Campaign_VideoCreateOrConnectWithoutCAMPAIGNInput = {
    where: Prisma.Campaign_VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput>;
};
export type Campaign_VideoCreateManyCAMPAIGNInputEnvelope = {
    data: Prisma.Campaign_VideoCreateManyCAMPAIGNInput | Prisma.Campaign_VideoCreateManyCAMPAIGNInput[];
    skipDuplicates?: boolean;
};
export type Campaign_VideoUpsertWithWhereUniqueWithoutCAMPAIGNInput = {
    where: Prisma.Campaign_VideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.Campaign_VideoUpdateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedUpdateWithoutCAMPAIGNInput>;
    create: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedCreateWithoutCAMPAIGNInput>;
};
export type Campaign_VideoUpdateWithWhereUniqueWithoutCAMPAIGNInput = {
    where: Prisma.Campaign_VideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateWithoutCAMPAIGNInput, Prisma.Campaign_VideoUncheckedUpdateWithoutCAMPAIGNInput>;
};
export type Campaign_VideoUpdateManyWithWhereWithoutCAMPAIGNInput = {
    where: Prisma.Campaign_VideoScalarWhereInput;
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateManyMutationInput, Prisma.Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNInput>;
};
export type Campaign_VideoCreateWithoutBONDSInput = {
    ID?: string;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutCAMPAIGN_VIDEOSInput;
    VIDEO?: Prisma.VideoCreateNestedOneWithoutCAMPAIGN_VIDEOSInput;
};
export type Campaign_VideoUncheckedCreateWithoutBONDSInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    VIDEO_ID?: string | null;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Campaign_VideoCreateOrConnectWithoutBONDSInput = {
    where: Prisma.Campaign_VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutBONDSInput, Prisma.Campaign_VideoUncheckedCreateWithoutBONDSInput>;
};
export type Campaign_VideoUpsertWithoutBONDSInput = {
    update: Prisma.XOR<Prisma.Campaign_VideoUpdateWithoutBONDSInput, Prisma.Campaign_VideoUncheckedUpdateWithoutBONDSInput>;
    create: Prisma.XOR<Prisma.Campaign_VideoCreateWithoutBONDSInput, Prisma.Campaign_VideoUncheckedCreateWithoutBONDSInput>;
    where?: Prisma.Campaign_VideoWhereInput;
};
export type Campaign_VideoUpdateToOneWithWhereWithoutBONDSInput = {
    where?: Prisma.Campaign_VideoWhereInput;
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateWithoutBONDSInput, Prisma.Campaign_VideoUncheckedUpdateWithoutBONDSInput>;
};
export type Campaign_VideoUpdateWithoutBONDSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput;
    VIDEO?: Prisma.VideoUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput;
};
export type Campaign_VideoUncheckedUpdateWithoutBONDSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Campaign_VideoCreateManyVIDEOInput = {
    ID?: string;
    CAMPAIGN_ID?: string | null;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Campaign_VideoUpdateWithoutVIDEOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput;
    BONDS?: Prisma.Bond_VideoUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput;
};
export type Campaign_VideoUncheckedUpdateWithoutVIDEOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BONDS?: Prisma.Bond_VideoUncheckedUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput;
};
export type Campaign_VideoUncheckedUpdateManyWithoutVIDEOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Campaign_VideoCreateManyCAMPAIGNInput = {
    ID?: string;
    VIDEO_ID?: string | null;
    CTA?: boolean;
    CTA_TEXT?: string | null;
    CTA_URL?: string | null;
    CTA_STYLE?: string | null;
    CTA_START?: number;
    CTA_CLICK_CAMPAING?: number;
    CTA_CLICK_TEST_AB?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    ORDER?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Campaign_VideoUpdateWithoutCAMPAIGNInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    VIDEO?: Prisma.VideoUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput;
    BONDS?: Prisma.Bond_VideoUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput;
};
export type Campaign_VideoUncheckedUpdateWithoutCAMPAIGNInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BONDS?: Prisma.Bond_VideoUncheckedUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput;
};
export type Campaign_VideoUncheckedUpdateManyWithoutCAMPAIGNInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CTA_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CTA_START?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CTA_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    ORDER?: Prisma.IntFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type Campaign_VideoCountOutputType
 */
export type Campaign_VideoCountOutputType = {
    BONDS: number;
};
export type Campaign_VideoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    BONDS?: boolean | Campaign_VideoCountOutputTypeCountBONDSArgs;
};
/**
 * Campaign_VideoCountOutputType without action
 */
export type Campaign_VideoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign_VideoCountOutputType
     */
    select?: Prisma.Campaign_VideoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Campaign_VideoCountOutputType without action
 */
export type Campaign_VideoCountOutputTypeCountBONDSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Bond_VideoWhereInput;
};
export type Campaign_VideoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    VIDEO_ID?: boolean;
    CTA?: boolean;
    CTA_TEXT?: boolean;
    CTA_URL?: boolean;
    CTA_STYLE?: boolean;
    CTA_START?: boolean;
    CTA_CLICK_CAMPAING?: boolean;
    CTA_CLICK_TEST_AB?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    ORDER?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN?: boolean | Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs>;
    VIDEO?: boolean | Prisma.Campaign_Video$VIDEOArgs<ExtArgs>;
    BONDS?: boolean | Prisma.Campaign_Video$BONDSArgs<ExtArgs>;
    _count?: boolean | Prisma.Campaign_VideoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign_Video"]>;
export type Campaign_VideoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    VIDEO_ID?: boolean;
    CTA?: boolean;
    CTA_TEXT?: boolean;
    CTA_URL?: boolean;
    CTA_STYLE?: boolean;
    CTA_START?: boolean;
    CTA_CLICK_CAMPAING?: boolean;
    CTA_CLICK_TEST_AB?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    ORDER?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN?: boolean | Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs>;
    VIDEO?: boolean | Prisma.Campaign_Video$VIDEOArgs<ExtArgs>;
}, ExtArgs["result"]["campaign_Video"]>;
export type Campaign_VideoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    VIDEO_ID?: boolean;
    CTA?: boolean;
    CTA_TEXT?: boolean;
    CTA_URL?: boolean;
    CTA_STYLE?: boolean;
    CTA_START?: boolean;
    CTA_CLICK_CAMPAING?: boolean;
    CTA_CLICK_TEST_AB?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    ORDER?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN?: boolean | Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs>;
    VIDEO?: boolean | Prisma.Campaign_Video$VIDEOArgs<ExtArgs>;
}, ExtArgs["result"]["campaign_Video"]>;
export type Campaign_VideoSelectScalar = {
    ID?: boolean;
    CAMPAIGN_ID?: boolean;
    VIDEO_ID?: boolean;
    CTA?: boolean;
    CTA_TEXT?: boolean;
    CTA_URL?: boolean;
    CTA_STYLE?: boolean;
    CTA_START?: boolean;
    CTA_CLICK_CAMPAING?: boolean;
    CTA_CLICK_TEST_AB?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    ORDER?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Campaign_VideoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "CAMPAIGN_ID" | "VIDEO_ID" | "CTA" | "CTA_TEXT" | "CTA_URL" | "CTA_STYLE" | "CTA_START" | "CTA_CLICK_CAMPAING" | "CTA_CLICK_TEST_AB" | "X_POSITION" | "Y_POSITION" | "ORDER" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["campaign_Video"]>;
export type Campaign_VideoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN?: boolean | Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs>;
    VIDEO?: boolean | Prisma.Campaign_Video$VIDEOArgs<ExtArgs>;
    BONDS?: boolean | Prisma.Campaign_Video$BONDSArgs<ExtArgs>;
    _count?: boolean | Prisma.Campaign_VideoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Campaign_VideoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN?: boolean | Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs>;
    VIDEO?: boolean | Prisma.Campaign_Video$VIDEOArgs<ExtArgs>;
};
export type Campaign_VideoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN?: boolean | Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs>;
    VIDEO?: boolean | Prisma.Campaign_Video$VIDEOArgs<ExtArgs>;
};
export type $Campaign_VideoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Campaign_Video";
    objects: {
        CAMPAIGN: Prisma.$CampaignPayload<ExtArgs> | null;
        VIDEO: Prisma.$VideoPayload<ExtArgs> | null;
        BONDS: Prisma.$Bond_VideoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        CAMPAIGN_ID: string | null;
        VIDEO_ID: string | null;
        CTA: boolean;
        CTA_TEXT: string | null;
        CTA_URL: string | null;
        CTA_STYLE: string | null;
        CTA_START: number;
        CTA_CLICK_CAMPAING: number;
        CTA_CLICK_TEST_AB: number;
        X_POSITION: number;
        Y_POSITION: number;
        ORDER: number;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["campaign_Video"]>;
    composites: {};
};
export type Campaign_VideoGetPayload<S extends boolean | null | undefined | Campaign_VideoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload, S>;
export type Campaign_VideoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Campaign_VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Campaign_VideoCountAggregateInputType | true;
};
export interface Campaign_VideoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Campaign_Video'];
        meta: {
            name: 'Campaign_Video';
        };
    };
    /**
     * Find zero or one Campaign_Video that matches the filter.
     * @param {Campaign_VideoFindUniqueArgs} args - Arguments to find a Campaign_Video
     * @example
     * // Get one Campaign_Video
     * const campaign_Video = await prisma.campaign_Video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Campaign_VideoFindUniqueArgs>(args: Prisma.SelectSubset<T, Campaign_VideoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Campaign_Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Campaign_VideoFindUniqueOrThrowArgs} args - Arguments to find a Campaign_Video
     * @example
     * // Get one Campaign_Video
     * const campaign_Video = await prisma.campaign_Video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Campaign_VideoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Campaign_VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Campaign_Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_VideoFindFirstArgs} args - Arguments to find a Campaign_Video
     * @example
     * // Get one Campaign_Video
     * const campaign_Video = await prisma.campaign_Video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Campaign_VideoFindFirstArgs>(args?: Prisma.SelectSubset<T, Campaign_VideoFindFirstArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Campaign_Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_VideoFindFirstOrThrowArgs} args - Arguments to find a Campaign_Video
     * @example
     * // Get one Campaign_Video
     * const campaign_Video = await prisma.campaign_Video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Campaign_VideoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Campaign_VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Campaign_Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaign_Videos
     * const campaign_Videos = await prisma.campaign_Video.findMany()
     *
     * // Get first 10 Campaign_Videos
     * const campaign_Videos = await prisma.campaign_Video.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const campaign_VideoWithIDOnly = await prisma.campaign_Video.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Campaign_VideoFindManyArgs>(args?: Prisma.SelectSubset<T, Campaign_VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Campaign_Video.
     * @param {Campaign_VideoCreateArgs} args - Arguments to create a Campaign_Video.
     * @example
     * // Create one Campaign_Video
     * const Campaign_Video = await prisma.campaign_Video.create({
     *   data: {
     *     // ... data to create a Campaign_Video
     *   }
     * })
     *
     */
    create<T extends Campaign_VideoCreateArgs>(args: Prisma.SelectSubset<T, Campaign_VideoCreateArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Campaign_Videos.
     * @param {Campaign_VideoCreateManyArgs} args - Arguments to create many Campaign_Videos.
     * @example
     * // Create many Campaign_Videos
     * const campaign_Video = await prisma.campaign_Video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Campaign_VideoCreateManyArgs>(args?: Prisma.SelectSubset<T, Campaign_VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Campaign_Videos and returns the data saved in the database.
     * @param {Campaign_VideoCreateManyAndReturnArgs} args - Arguments to create many Campaign_Videos.
     * @example
     * // Create many Campaign_Videos
     * const campaign_Video = await prisma.campaign_Video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Campaign_Videos and only return the `ID`
     * const campaign_VideoWithIDOnly = await prisma.campaign_Video.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Campaign_VideoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Campaign_VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Campaign_Video.
     * @param {Campaign_VideoDeleteArgs} args - Arguments to delete one Campaign_Video.
     * @example
     * // Delete one Campaign_Video
     * const Campaign_Video = await prisma.campaign_Video.delete({
     *   where: {
     *     // ... filter to delete one Campaign_Video
     *   }
     * })
     *
     */
    delete<T extends Campaign_VideoDeleteArgs>(args: Prisma.SelectSubset<T, Campaign_VideoDeleteArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Campaign_Video.
     * @param {Campaign_VideoUpdateArgs} args - Arguments to update one Campaign_Video.
     * @example
     * // Update one Campaign_Video
     * const campaign_Video = await prisma.campaign_Video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Campaign_VideoUpdateArgs>(args: Prisma.SelectSubset<T, Campaign_VideoUpdateArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Campaign_Videos.
     * @param {Campaign_VideoDeleteManyArgs} args - Arguments to filter Campaign_Videos to delete.
     * @example
     * // Delete a few Campaign_Videos
     * const { count } = await prisma.campaign_Video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Campaign_VideoDeleteManyArgs>(args?: Prisma.SelectSubset<T, Campaign_VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Campaign_Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaign_Videos
     * const campaign_Video = await prisma.campaign_Video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Campaign_VideoUpdateManyArgs>(args: Prisma.SelectSubset<T, Campaign_VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Campaign_Videos and returns the data updated in the database.
     * @param {Campaign_VideoUpdateManyAndReturnArgs} args - Arguments to update many Campaign_Videos.
     * @example
     * // Update many Campaign_Videos
     * const campaign_Video = await prisma.campaign_Video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Campaign_Videos and only return the `ID`
     * const campaign_VideoWithIDOnly = await prisma.campaign_Video.updateManyAndReturn({
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
    updateManyAndReturn<T extends Campaign_VideoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Campaign_VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Campaign_Video.
     * @param {Campaign_VideoUpsertArgs} args - Arguments to update or create a Campaign_Video.
     * @example
     * // Update or create a Campaign_Video
     * const campaign_Video = await prisma.campaign_Video.upsert({
     *   create: {
     *     // ... data to create a Campaign_Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign_Video we want to update
     *   }
     * })
     */
    upsert<T extends Campaign_VideoUpsertArgs>(args: Prisma.SelectSubset<T, Campaign_VideoUpsertArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Campaign_Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_VideoCountArgs} args - Arguments to filter Campaign_Videos to count.
     * @example
     * // Count the number of Campaign_Videos
     * const count = await prisma.campaign_Video.count({
     *   where: {
     *     // ... the filter for the Campaign_Videos we want to count
     *   }
     * })
    **/
    count<T extends Campaign_VideoCountArgs>(args?: Prisma.Subset<T, Campaign_VideoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Campaign_VideoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Campaign_Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Campaign_VideoAggregateArgs>(args: Prisma.Subset<T, Campaign_VideoAggregateArgs>): Prisma.PrismaPromise<GetCampaign_VideoAggregateType<T>>;
    /**
     * Group by Campaign_Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_VideoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Campaign_VideoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Campaign_VideoGroupByArgs['orderBy'];
    } : {
        orderBy?: Campaign_VideoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Campaign_VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaign_VideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Campaign_Video model
     */
    readonly fields: Campaign_VideoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Campaign_Video.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Campaign_VideoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CAMPAIGN<T extends Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign_Video$CAMPAIGNArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    VIDEO<T extends Prisma.Campaign_Video$VIDEOArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign_Video$VIDEOArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    BONDS<T extends Prisma.Campaign_Video$BONDSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign_Video$BONDSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Campaign_Video model
 */
export interface Campaign_VideoFieldRefs {
    readonly ID: Prisma.FieldRef<"Campaign_Video", 'String'>;
    readonly CAMPAIGN_ID: Prisma.FieldRef<"Campaign_Video", 'String'>;
    readonly VIDEO_ID: Prisma.FieldRef<"Campaign_Video", 'String'>;
    readonly CTA: Prisma.FieldRef<"Campaign_Video", 'Boolean'>;
    readonly CTA_TEXT: Prisma.FieldRef<"Campaign_Video", 'String'>;
    readonly CTA_URL: Prisma.FieldRef<"Campaign_Video", 'String'>;
    readonly CTA_STYLE: Prisma.FieldRef<"Campaign_Video", 'String'>;
    readonly CTA_START: Prisma.FieldRef<"Campaign_Video", 'Int'>;
    readonly CTA_CLICK_CAMPAING: Prisma.FieldRef<"Campaign_Video", 'Int'>;
    readonly CTA_CLICK_TEST_AB: Prisma.FieldRef<"Campaign_Video", 'Int'>;
    readonly X_POSITION: Prisma.FieldRef<"Campaign_Video", 'Float'>;
    readonly Y_POSITION: Prisma.FieldRef<"Campaign_Video", 'Float'>;
    readonly ORDER: Prisma.FieldRef<"Campaign_Video", 'Int'>;
    readonly CREATED_AT: Prisma.FieldRef<"Campaign_Video", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Campaign_Video", 'DateTime'>;
}
/**
 * Campaign_Video findUnique
 */
export type Campaign_VideoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign_Video to fetch.
     */
    where: Prisma.Campaign_VideoWhereUniqueInput;
};
/**
 * Campaign_Video findUniqueOrThrow
 */
export type Campaign_VideoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign_Video to fetch.
     */
    where: Prisma.Campaign_VideoWhereUniqueInput;
};
/**
 * Campaign_Video findFirst
 */
export type Campaign_VideoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign_Video to fetch.
     */
    where?: Prisma.Campaign_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaign_Videos to fetch.
     */
    orderBy?: Prisma.Campaign_VideoOrderByWithRelationInput | Prisma.Campaign_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campaign_Videos.
     */
    cursor?: Prisma.Campaign_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaign_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaign_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaign_Videos.
     */
    distinct?: Prisma.Campaign_VideoScalarFieldEnum | Prisma.Campaign_VideoScalarFieldEnum[];
};
/**
 * Campaign_Video findFirstOrThrow
 */
export type Campaign_VideoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign_Video to fetch.
     */
    where?: Prisma.Campaign_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaign_Videos to fetch.
     */
    orderBy?: Prisma.Campaign_VideoOrderByWithRelationInput | Prisma.Campaign_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campaign_Videos.
     */
    cursor?: Prisma.Campaign_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaign_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaign_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaign_Videos.
     */
    distinct?: Prisma.Campaign_VideoScalarFieldEnum | Prisma.Campaign_VideoScalarFieldEnum[];
};
/**
 * Campaign_Video findMany
 */
export type Campaign_VideoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Campaign_Videos to fetch.
     */
    where?: Prisma.Campaign_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaign_Videos to fetch.
     */
    orderBy?: Prisma.Campaign_VideoOrderByWithRelationInput | Prisma.Campaign_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Campaign_Videos.
     */
    cursor?: Prisma.Campaign_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaign_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaign_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaign_Videos.
     */
    distinct?: Prisma.Campaign_VideoScalarFieldEnum | Prisma.Campaign_VideoScalarFieldEnum[];
};
/**
 * Campaign_Video create
 */
export type Campaign_VideoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Campaign_Video.
     */
    data?: Prisma.XOR<Prisma.Campaign_VideoCreateInput, Prisma.Campaign_VideoUncheckedCreateInput>;
};
/**
 * Campaign_Video createMany
 */
export type Campaign_VideoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaign_Videos.
     */
    data: Prisma.Campaign_VideoCreateManyInput | Prisma.Campaign_VideoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Campaign_Video createManyAndReturn
 */
export type Campaign_VideoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign_Video
     */
    select?: Prisma.Campaign_VideoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign_Video
     */
    omit?: Prisma.Campaign_VideoOmit<ExtArgs> | null;
    /**
     * The data used to create many Campaign_Videos.
     */
    data: Prisma.Campaign_VideoCreateManyInput | Prisma.Campaign_VideoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Campaign_VideoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Campaign_Video update
 */
export type Campaign_VideoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Campaign_Video.
     */
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateInput, Prisma.Campaign_VideoUncheckedUpdateInput>;
    /**
     * Choose, which Campaign_Video to update.
     */
    where: Prisma.Campaign_VideoWhereUniqueInput;
};
/**
 * Campaign_Video updateMany
 */
export type Campaign_VideoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaign_Videos.
     */
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateManyMutationInput, Prisma.Campaign_VideoUncheckedUpdateManyInput>;
    /**
     * Filter which Campaign_Videos to update
     */
    where?: Prisma.Campaign_VideoWhereInput;
    /**
     * Limit how many Campaign_Videos to update.
     */
    limit?: number;
};
/**
 * Campaign_Video updateManyAndReturn
 */
export type Campaign_VideoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign_Video
     */
    select?: Prisma.Campaign_VideoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign_Video
     */
    omit?: Prisma.Campaign_VideoOmit<ExtArgs> | null;
    /**
     * The data used to update Campaign_Videos.
     */
    data: Prisma.XOR<Prisma.Campaign_VideoUpdateManyMutationInput, Prisma.Campaign_VideoUncheckedUpdateManyInput>;
    /**
     * Filter which Campaign_Videos to update
     */
    where?: Prisma.Campaign_VideoWhereInput;
    /**
     * Limit how many Campaign_Videos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Campaign_VideoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Campaign_Video upsert
 */
export type Campaign_VideoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Campaign_Video to update in case it exists.
     */
    where: Prisma.Campaign_VideoWhereUniqueInput;
    /**
     * In case the Campaign_Video found by the `where` argument doesn't exist, create a new Campaign_Video with this data.
     */
    create: Prisma.XOR<Prisma.Campaign_VideoCreateInput, Prisma.Campaign_VideoUncheckedCreateInput>;
    /**
     * In case the Campaign_Video was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Campaign_VideoUpdateInput, Prisma.Campaign_VideoUncheckedUpdateInput>;
};
/**
 * Campaign_Video delete
 */
export type Campaign_VideoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Campaign_Video to delete.
     */
    where: Prisma.Campaign_VideoWhereUniqueInput;
};
/**
 * Campaign_Video deleteMany
 */
export type Campaign_VideoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign_Videos to delete
     */
    where?: Prisma.Campaign_VideoWhereInput;
    /**
     * Limit how many Campaign_Videos to delete.
     */
    limit?: number;
};
/**
 * Campaign_Video.CAMPAIGN
 */
export type Campaign_Video$CAMPAIGNArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Campaign_Video.VIDEO
 */
export type Campaign_Video$VIDEOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: Prisma.VideoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Video
     */
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where?: Prisma.VideoWhereInput;
};
/**
 * Campaign_Video.BONDS
 */
export type Campaign_Video$BONDSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond_Video
     */
    select?: Prisma.Bond_VideoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bond_Video
     */
    omit?: Prisma.Bond_VideoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Bond_VideoInclude<ExtArgs> | null;
    where?: Prisma.Bond_VideoWhereInput;
    orderBy?: Prisma.Bond_VideoOrderByWithRelationInput | Prisma.Bond_VideoOrderByWithRelationInput[];
    cursor?: Prisma.Bond_VideoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Bond_VideoScalarFieldEnum | Prisma.Bond_VideoScalarFieldEnum[];
};
/**
 * Campaign_Video without action
 */
export type Campaign_VideoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Campaign_Video.d.ts.map
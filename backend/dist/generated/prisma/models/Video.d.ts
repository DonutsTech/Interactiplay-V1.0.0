import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Video
 *
 */
export type VideoModel = runtime.Types.Result.DefaultSelection<Prisma.$VideoPayload>;
export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null;
    _avg: VideoAvgAggregateOutputType | null;
    _sum: VideoSumAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
};
export type VideoAvgAggregateOutputType = {
    SIZE: number | null;
    DURATION: number | null;
    HEIGHT: number | null;
    WIDTH: number | null;
};
export type VideoSumAggregateOutputType = {
    SIZE: number | null;
    DURATION: number | null;
    HEIGHT: number | null;
    WIDTH: number | null;
};
export type VideoMinAggregateOutputType = {
    ID: string | null;
    NAME: string | null;
    SIZE: number | null;
    FORMAT: string | null;
    DURATION: number | null;
    ORIENTATION: string | null;
    HEIGHT: number | null;
    WIDTH: number | null;
    URL: string | null;
    USER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type VideoMaxAggregateOutputType = {
    ID: string | null;
    NAME: string | null;
    SIZE: number | null;
    FORMAT: string | null;
    DURATION: number | null;
    ORIENTATION: string | null;
    HEIGHT: number | null;
    WIDTH: number | null;
    URL: string | null;
    USER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type VideoCountAggregateOutputType = {
    ID: number;
    NAME: number;
    SIZE: number;
    FORMAT: number;
    DURATION: number;
    ORIENTATION: number;
    HEIGHT: number;
    WIDTH: number;
    URL: number;
    USER_ID: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type VideoAvgAggregateInputType = {
    SIZE?: true;
    DURATION?: true;
    HEIGHT?: true;
    WIDTH?: true;
};
export type VideoSumAggregateInputType = {
    SIZE?: true;
    DURATION?: true;
    HEIGHT?: true;
    WIDTH?: true;
};
export type VideoMinAggregateInputType = {
    ID?: true;
    NAME?: true;
    SIZE?: true;
    FORMAT?: true;
    DURATION?: true;
    ORIENTATION?: true;
    HEIGHT?: true;
    WIDTH?: true;
    URL?: true;
    USER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type VideoMaxAggregateInputType = {
    ID?: true;
    NAME?: true;
    SIZE?: true;
    FORMAT?: true;
    DURATION?: true;
    ORIENTATION?: true;
    HEIGHT?: true;
    WIDTH?: true;
    URL?: true;
    USER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type VideoCountAggregateInputType = {
    ID?: true;
    NAME?: true;
    SIZE?: true;
    FORMAT?: true;
    DURATION?: true;
    ORIENTATION?: true;
    HEIGHT?: true;
    WIDTH?: true;
    URL?: true;
    USER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type VideoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: Prisma.VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Videos to fetch.
     */
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType;
};
export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
    [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVideo[P]> : Prisma.GetScalarType<T[P], AggregateVideo[P]>;
};
export type VideoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithAggregationInput | Prisma.VideoOrderByWithAggregationInput[];
    by: Prisma.VideoScalarFieldEnum[] | Prisma.VideoScalarFieldEnum;
    having?: Prisma.VideoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VideoCountAggregateInputType | true;
    _avg?: VideoAvgAggregateInputType;
    _sum?: VideoSumAggregateInputType;
    _min?: VideoMinAggregateInputType;
    _max?: VideoMaxAggregateInputType;
};
export type VideoGroupByOutputType = {
    ID: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    USER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: VideoCountAggregateOutputType | null;
    _avg: VideoAvgAggregateOutputType | null;
    _sum: VideoSumAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
};
type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VideoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]>;
}>>;
export type VideoWhereInput = {
    AND?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    OR?: Prisma.VideoWhereInput[];
    NOT?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    ID?: Prisma.StringFilter<"Video"> | string;
    NAME?: Prisma.StringFilter<"Video"> | string;
    SIZE?: Prisma.IntFilter<"Video"> | number;
    FORMAT?: Prisma.StringFilter<"Video"> | string;
    DURATION?: Prisma.IntFilter<"Video"> | number;
    ORIENTATION?: Prisma.StringFilter<"Video"> | string;
    HEIGHT?: Prisma.IntFilter<"Video"> | number;
    WIDTH?: Prisma.IntFilter<"Video"> | number;
    URL?: Prisma.StringFilter<"Video"> | string;
    USER_ID?: Prisma.StringNullableFilter<"Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Video"> | Date | string | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoListRelationFilter;
    BONDS?: Prisma.BondListRelationFilter;
};
export type VideoOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    SIZE?: Prisma.SortOrder;
    FORMAT?: Prisma.SortOrder;
    DURATION?: Prisma.SortOrder;
    ORIENTATION?: Prisma.SortOrder;
    HEIGHT?: Prisma.SortOrder;
    WIDTH?: Prisma.SortOrder;
    URL?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER?: Prisma.UserOrderByWithRelationInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoOrderByRelationAggregateInput;
    BONDS?: Prisma.BondOrderByRelationAggregateInput;
};
export type VideoWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    OR?: Prisma.VideoWhereInput[];
    NOT?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    NAME?: Prisma.StringFilter<"Video"> | string;
    SIZE?: Prisma.IntFilter<"Video"> | number;
    FORMAT?: Prisma.StringFilter<"Video"> | string;
    DURATION?: Prisma.IntFilter<"Video"> | number;
    ORIENTATION?: Prisma.StringFilter<"Video"> | string;
    HEIGHT?: Prisma.IntFilter<"Video"> | number;
    WIDTH?: Prisma.IntFilter<"Video"> | number;
    URL?: Prisma.StringFilter<"Video"> | string;
    USER_ID?: Prisma.StringNullableFilter<"Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Video"> | Date | string | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoListRelationFilter;
    BONDS?: Prisma.BondListRelationFilter;
}, "ID">;
export type VideoOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    SIZE?: Prisma.SortOrder;
    FORMAT?: Prisma.SortOrder;
    DURATION?: Prisma.SortOrder;
    ORIENTATION?: Prisma.SortOrder;
    HEIGHT?: Prisma.SortOrder;
    WIDTH?: Prisma.SortOrder;
    URL?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.VideoCountOrderByAggregateInput;
    _avg?: Prisma.VideoAvgOrderByAggregateInput;
    _max?: Prisma.VideoMaxOrderByAggregateInput;
    _min?: Prisma.VideoMinOrderByAggregateInput;
    _sum?: Prisma.VideoSumOrderByAggregateInput;
};
export type VideoScalarWhereWithAggregatesInput = {
    AND?: Prisma.VideoScalarWhereWithAggregatesInput | Prisma.VideoScalarWhereWithAggregatesInput[];
    OR?: Prisma.VideoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VideoScalarWhereWithAggregatesInput | Prisma.VideoScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    NAME?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    SIZE?: Prisma.IntWithAggregatesFilter<"Video"> | number;
    FORMAT?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    DURATION?: Prisma.IntWithAggregatesFilter<"Video"> | number;
    ORIENTATION?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    HEIGHT?: Prisma.IntWithAggregatesFilter<"Video"> | number;
    WIDTH?: Prisma.IntWithAggregatesFilter<"Video"> | number;
    URL?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    USER_ID?: Prisma.StringNullableWithAggregatesFilter<"Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Video"> | Date | string | null;
};
export type VideoCreateInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    USER?: Prisma.UserCreateNestedOneWithoutVIDEOSInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutVIDEOInput;
    BONDS?: Prisma.BondCreateNestedManyWithoutVIDEOInput;
};
export type VideoUncheckedCreateInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutVIDEOInput;
    BONDS?: Prisma.BondUncheckedCreateNestedManyWithoutVIDEOInput;
};
export type VideoUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USER?: Prisma.UserUpdateOneWithoutVIDEOSNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutVIDEONestedInput;
    BONDS?: Prisma.BondUpdateManyWithoutVIDEONestedInput;
};
export type VideoUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutVIDEONestedInput;
    BONDS?: Prisma.BondUncheckedUpdateManyWithoutVIDEONestedInput;
};
export type VideoCreateManyInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type VideoUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VideoUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VideoListRelationFilter = {
    every?: Prisma.VideoWhereInput;
    some?: Prisma.VideoWhereInput;
    none?: Prisma.VideoWhereInput;
};
export type VideoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VideoCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    SIZE?: Prisma.SortOrder;
    FORMAT?: Prisma.SortOrder;
    DURATION?: Prisma.SortOrder;
    ORIENTATION?: Prisma.SortOrder;
    HEIGHT?: Prisma.SortOrder;
    WIDTH?: Prisma.SortOrder;
    URL?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type VideoAvgOrderByAggregateInput = {
    SIZE?: Prisma.SortOrder;
    DURATION?: Prisma.SortOrder;
    HEIGHT?: Prisma.SortOrder;
    WIDTH?: Prisma.SortOrder;
};
export type VideoMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    SIZE?: Prisma.SortOrder;
    FORMAT?: Prisma.SortOrder;
    DURATION?: Prisma.SortOrder;
    ORIENTATION?: Prisma.SortOrder;
    HEIGHT?: Prisma.SortOrder;
    WIDTH?: Prisma.SortOrder;
    URL?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type VideoMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    SIZE?: Prisma.SortOrder;
    FORMAT?: Prisma.SortOrder;
    DURATION?: Prisma.SortOrder;
    ORIENTATION?: Prisma.SortOrder;
    HEIGHT?: Prisma.SortOrder;
    WIDTH?: Prisma.SortOrder;
    URL?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type VideoSumOrderByAggregateInput = {
    SIZE?: Prisma.SortOrder;
    DURATION?: Prisma.SortOrder;
    HEIGHT?: Prisma.SortOrder;
    WIDTH?: Prisma.SortOrder;
};
export type VideoNullableScalarRelationFilter = {
    is?: Prisma.VideoWhereInput | null;
    isNot?: Prisma.VideoWhereInput | null;
};
export type VideoCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutUSERInput, Prisma.VideoUncheckedCreateWithoutUSERInput> | Prisma.VideoCreateWithoutUSERInput[] | Prisma.VideoUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutUSERInput | Prisma.VideoCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.VideoCreateManyUSERInputEnvelope;
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUncheckedCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutUSERInput, Prisma.VideoUncheckedCreateWithoutUSERInput> | Prisma.VideoCreateWithoutUSERInput[] | Prisma.VideoUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutUSERInput | Prisma.VideoCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.VideoCreateManyUSERInputEnvelope;
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutUSERInput, Prisma.VideoUncheckedCreateWithoutUSERInput> | Prisma.VideoCreateWithoutUSERInput[] | Prisma.VideoUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutUSERInput | Prisma.VideoCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.VideoUpsertWithWhereUniqueWithoutUSERInput | Prisma.VideoUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.VideoCreateManyUSERInputEnvelope;
    set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    update?: Prisma.VideoUpdateWithWhereUniqueWithoutUSERInput | Prisma.VideoUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.VideoUpdateManyWithWhereWithoutUSERInput | Prisma.VideoUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutUSERInput, Prisma.VideoUncheckedCreateWithoutUSERInput> | Prisma.VideoCreateWithoutUSERInput[] | Prisma.VideoUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutUSERInput | Prisma.VideoCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.VideoUpsertWithWhereUniqueWithoutUSERInput | Prisma.VideoUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.VideoCreateManyUSERInputEnvelope;
    set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    update?: Prisma.VideoUpdateWithWhereUniqueWithoutUSERInput | Prisma.VideoUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.VideoUpdateManyWithWhereWithoutUSERInput | Prisma.VideoUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoCreateNestedOneWithoutCAMPAIGN_VIDEOSInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput;
    connect?: Prisma.VideoWhereUniqueInput;
};
export type VideoUpdateOneWithoutCAMPAIGN_VIDEOSNestedInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput;
    upsert?: Prisma.VideoUpsertWithoutCAMPAIGN_VIDEOSInput;
    disconnect?: Prisma.VideoWhereInput | boolean;
    delete?: Prisma.VideoWhereInput | boolean;
    connect?: Prisma.VideoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VideoUpdateToOneWithWhereWithoutCAMPAIGN_VIDEOSInput, Prisma.VideoUpdateWithoutCAMPAIGN_VIDEOSInput>, Prisma.VideoUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
};
export type VideoCreateNestedOneWithoutBONDSInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutBONDSInput, Prisma.VideoUncheckedCreateWithoutBONDSInput>;
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutBONDSInput;
    connect?: Prisma.VideoWhereUniqueInput;
};
export type VideoUpdateOneWithoutBONDSNestedInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutBONDSInput, Prisma.VideoUncheckedCreateWithoutBONDSInput>;
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutBONDSInput;
    upsert?: Prisma.VideoUpsertWithoutBONDSInput;
    disconnect?: Prisma.VideoWhereInput | boolean;
    delete?: Prisma.VideoWhereInput | boolean;
    connect?: Prisma.VideoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VideoUpdateToOneWithWhereWithoutBONDSInput, Prisma.VideoUpdateWithoutBONDSInput>, Prisma.VideoUncheckedUpdateWithoutBONDSInput>;
};
export type VideoCreateWithoutUSERInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutVIDEOInput;
    BONDS?: Prisma.BondCreateNestedManyWithoutVIDEOInput;
};
export type VideoUncheckedCreateWithoutUSERInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutVIDEOInput;
    BONDS?: Prisma.BondUncheckedCreateNestedManyWithoutVIDEOInput;
};
export type VideoCreateOrConnectWithoutUSERInput = {
    where: Prisma.VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VideoCreateWithoutUSERInput, Prisma.VideoUncheckedCreateWithoutUSERInput>;
};
export type VideoCreateManyUSERInputEnvelope = {
    data: Prisma.VideoCreateManyUSERInput | Prisma.VideoCreateManyUSERInput[];
    skipDuplicates?: boolean;
};
export type VideoUpsertWithWhereUniqueWithoutUSERInput = {
    where: Prisma.VideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.VideoUpdateWithoutUSERInput, Prisma.VideoUncheckedUpdateWithoutUSERInput>;
    create: Prisma.XOR<Prisma.VideoCreateWithoutUSERInput, Prisma.VideoUncheckedCreateWithoutUSERInput>;
};
export type VideoUpdateWithWhereUniqueWithoutUSERInput = {
    where: Prisma.VideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.VideoUpdateWithoutUSERInput, Prisma.VideoUncheckedUpdateWithoutUSERInput>;
};
export type VideoUpdateManyWithWhereWithoutUSERInput = {
    where: Prisma.VideoScalarWhereInput;
    data: Prisma.XOR<Prisma.VideoUpdateManyMutationInput, Prisma.VideoUncheckedUpdateManyWithoutUSERInput>;
};
export type VideoScalarWhereInput = {
    AND?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
    OR?: Prisma.VideoScalarWhereInput[];
    NOT?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
    ID?: Prisma.StringFilter<"Video"> | string;
    NAME?: Prisma.StringFilter<"Video"> | string;
    SIZE?: Prisma.IntFilter<"Video"> | number;
    FORMAT?: Prisma.StringFilter<"Video"> | string;
    DURATION?: Prisma.IntFilter<"Video"> | number;
    ORIENTATION?: Prisma.StringFilter<"Video"> | string;
    HEIGHT?: Prisma.IntFilter<"Video"> | number;
    WIDTH?: Prisma.IntFilter<"Video"> | number;
    URL?: Prisma.StringFilter<"Video"> | string;
    USER_ID?: Prisma.StringNullableFilter<"Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Video"> | Date | string | null;
};
export type VideoCreateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    USER?: Prisma.UserCreateNestedOneWithoutVIDEOSInput;
    BONDS?: Prisma.BondCreateNestedManyWithoutVIDEOInput;
};
export type VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BONDS?: Prisma.BondUncheckedCreateNestedManyWithoutVIDEOInput;
};
export type VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput = {
    where: Prisma.VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
};
export type VideoUpsertWithoutCAMPAIGN_VIDEOSInput = {
    update: Prisma.XOR<Prisma.VideoUpdateWithoutCAMPAIGN_VIDEOSInput, Prisma.VideoUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
    create: Prisma.XOR<Prisma.VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
    where?: Prisma.VideoWhereInput;
};
export type VideoUpdateToOneWithWhereWithoutCAMPAIGN_VIDEOSInput = {
    where?: Prisma.VideoWhereInput;
    data: Prisma.XOR<Prisma.VideoUpdateWithoutCAMPAIGN_VIDEOSInput, Prisma.VideoUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
};
export type VideoUpdateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USER?: Prisma.UserUpdateOneWithoutVIDEOSNestedInput;
    BONDS?: Prisma.BondUpdateManyWithoutVIDEONestedInput;
};
export type VideoUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BONDS?: Prisma.BondUncheckedUpdateManyWithoutVIDEONestedInput;
};
export type VideoCreateWithoutBONDSInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    USER?: Prisma.UserCreateNestedOneWithoutVIDEOSInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedManyWithoutVIDEOInput;
};
export type VideoUncheckedCreateWithoutBONDSInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    USER_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedCreateNestedManyWithoutVIDEOInput;
};
export type VideoCreateOrConnectWithoutBONDSInput = {
    where: Prisma.VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VideoCreateWithoutBONDSInput, Prisma.VideoUncheckedCreateWithoutBONDSInput>;
};
export type VideoUpsertWithoutBONDSInput = {
    update: Prisma.XOR<Prisma.VideoUpdateWithoutBONDSInput, Prisma.VideoUncheckedUpdateWithoutBONDSInput>;
    create: Prisma.XOR<Prisma.VideoCreateWithoutBONDSInput, Prisma.VideoUncheckedCreateWithoutBONDSInput>;
    where?: Prisma.VideoWhereInput;
};
export type VideoUpdateToOneWithWhereWithoutBONDSInput = {
    where?: Prisma.VideoWhereInput;
    data: Prisma.XOR<Prisma.VideoUpdateWithoutBONDSInput, Prisma.VideoUncheckedUpdateWithoutBONDSInput>;
};
export type VideoUpdateWithoutBONDSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USER?: Prisma.UserUpdateOneWithoutVIDEOSNestedInput;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutVIDEONestedInput;
};
export type VideoUncheckedUpdateWithoutBONDSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutVIDEONestedInput;
};
export type VideoCreateManyUSERInput = {
    ID?: string;
    NAME: string;
    SIZE: number;
    FORMAT: string;
    DURATION: number;
    ORIENTATION?: string;
    HEIGHT: number;
    WIDTH: number;
    URL: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type VideoUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateManyWithoutVIDEONestedInput;
    BONDS?: Prisma.BondUpdateManyWithoutVIDEONestedInput;
};
export type VideoUncheckedUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUncheckedUpdateManyWithoutVIDEONestedInput;
    BONDS?: Prisma.BondUncheckedUpdateManyWithoutVIDEONestedInput;
};
export type VideoUncheckedUpdateManyWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    SIZE?: Prisma.IntFieldUpdateOperationsInput | number;
    FORMAT?: Prisma.StringFieldUpdateOperationsInput | string;
    DURATION?: Prisma.IntFieldUpdateOperationsInput | number;
    ORIENTATION?: Prisma.StringFieldUpdateOperationsInput | string;
    HEIGHT?: Prisma.IntFieldUpdateOperationsInput | number;
    WIDTH?: Prisma.IntFieldUpdateOperationsInput | number;
    URL?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type VideoCountOutputType
 */
export type VideoCountOutputType = {
    CAMPAIGN_VIDEOS: number;
    BONDS: number;
};
export type VideoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_VIDEOS?: boolean | VideoCountOutputTypeCountCAMPAIGN_VIDEOSArgs;
    BONDS?: boolean | VideoCountOutputTypeCountBONDSArgs;
};
/**
 * VideoCountOutputType without action
 */
export type VideoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: Prisma.VideoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VideoCountOutputType without action
 */
export type VideoCountOutputTypeCountCAMPAIGN_VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Campaign_VideoWhereInput;
};
/**
 * VideoCountOutputType without action
 */
export type VideoCountOutputTypeCountBONDSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BondWhereInput;
};
export type VideoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    SIZE?: boolean;
    FORMAT?: boolean;
    DURATION?: boolean;
    ORIENTATION?: boolean;
    HEIGHT?: boolean;
    WIDTH?: boolean;
    URL?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    USER?: boolean | Prisma.Video$USERArgs<ExtArgs>;
    CAMPAIGN_VIDEOS?: boolean | Prisma.Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BONDS?: boolean | Prisma.Video$BONDSArgs<ExtArgs>;
    _count?: boolean | Prisma.VideoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type VideoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    SIZE?: boolean;
    FORMAT?: boolean;
    DURATION?: boolean;
    ORIENTATION?: boolean;
    HEIGHT?: boolean;
    WIDTH?: boolean;
    URL?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    USER?: boolean | Prisma.Video$USERArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type VideoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    SIZE?: boolean;
    FORMAT?: boolean;
    DURATION?: boolean;
    ORIENTATION?: boolean;
    HEIGHT?: boolean;
    WIDTH?: boolean;
    URL?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    USER?: boolean | Prisma.Video$USERArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type VideoSelectScalar = {
    ID?: boolean;
    NAME?: boolean;
    SIZE?: boolean;
    FORMAT?: boolean;
    DURATION?: boolean;
    ORIENTATION?: boolean;
    HEIGHT?: boolean;
    WIDTH?: boolean;
    URL?: boolean;
    USER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type VideoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "NAME" | "SIZE" | "FORMAT" | "DURATION" | "ORIENTATION" | "HEIGHT" | "WIDTH" | "URL" | "USER_ID" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["video"]>;
export type VideoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USER?: boolean | Prisma.Video$USERArgs<ExtArgs>;
    CAMPAIGN_VIDEOS?: boolean | Prisma.Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BONDS?: boolean | Prisma.Video$BONDSArgs<ExtArgs>;
    _count?: boolean | Prisma.VideoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VideoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USER?: boolean | Prisma.Video$USERArgs<ExtArgs>;
};
export type VideoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USER?: boolean | Prisma.Video$USERArgs<ExtArgs>;
};
export type $VideoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Video";
    objects: {
        USER: Prisma.$UserPayload<ExtArgs> | null;
        CAMPAIGN_VIDEOS: Prisma.$Campaign_VideoPayload<ExtArgs>[];
        BONDS: Prisma.$BondPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        NAME: string;
        SIZE: number;
        FORMAT: string;
        DURATION: number;
        ORIENTATION: string;
        HEIGHT: number;
        WIDTH: number;
        URL: string;
        USER_ID: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["video"]>;
    composites: {};
};
export type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VideoPayload, S>;
export type VideoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VideoCountAggregateInputType | true;
};
export interface VideoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Video'];
        meta: {
            name: 'Video';
        };
    };
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: Prisma.SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: Prisma.SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     *
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const videoWithIDOnly = await prisma.video.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends VideoFindManyArgs>(args?: Prisma.SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     *
     */
    create<T extends VideoCreateArgs>(args: Prisma.SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VideoCreateManyArgs>(args?: Prisma.SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Videos and only return the `ID`
     * const videoWithIDOnly = await prisma.video.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     *
     */
    delete<T extends VideoDeleteArgs>(args: Prisma.SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VideoUpdateArgs>(args: Prisma.SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: Prisma.SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VideoUpdateManyArgs>(args: Prisma.SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Videos and only return the `ID`
     * const videoWithIDOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: Prisma.SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(args?: Prisma.Subset<T, VideoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VideoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Prisma.Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>;
    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VideoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VideoGroupByArgs['orderBy'];
    } : {
        orderBy?: VideoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Video model
     */
    readonly fields: VideoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Video.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VideoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USER<T extends Prisma.Video$USERArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Video$USERArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    CAMPAIGN_VIDEOS<T extends Prisma.Video$CAMPAIGN_VIDEOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Video$CAMPAIGN_VIDEOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    BONDS<T extends Prisma.Video$BONDSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Video$BONDSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Video model
 */
export interface VideoFieldRefs {
    readonly ID: Prisma.FieldRef<"Video", 'String'>;
    readonly NAME: Prisma.FieldRef<"Video", 'String'>;
    readonly SIZE: Prisma.FieldRef<"Video", 'Int'>;
    readonly FORMAT: Prisma.FieldRef<"Video", 'String'>;
    readonly DURATION: Prisma.FieldRef<"Video", 'Int'>;
    readonly ORIENTATION: Prisma.FieldRef<"Video", 'String'>;
    readonly HEIGHT: Prisma.FieldRef<"Video", 'Int'>;
    readonly WIDTH: Prisma.FieldRef<"Video", 'Int'>;
    readonly URL: Prisma.FieldRef<"Video", 'String'>;
    readonly USER_ID: Prisma.FieldRef<"Video", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Video", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Video", 'DateTime'>;
}
/**
 * Video findUnique
 */
export type VideoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Video to fetch.
     */
    where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video findUniqueOrThrow
 */
export type VideoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Video to fetch.
     */
    where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video findFirst
 */
export type VideoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Video to fetch.
     */
    where?: Prisma.VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Videos to fetch.
     */
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Videos.
     */
    cursor?: Prisma.VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Videos.
     */
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * Video findFirstOrThrow
 */
export type VideoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Video to fetch.
     */
    where?: Prisma.VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Videos to fetch.
     */
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Videos.
     */
    cursor?: Prisma.VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Videos.
     */
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * Video findMany
 */
export type VideoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Videos to fetch.
     */
    where?: Prisma.VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Videos to fetch.
     */
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Videos.
     */
    cursor?: Prisma.VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Videos.
     */
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * Video create
 */
export type VideoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Video.
     */
    data: Prisma.XOR<Prisma.VideoCreateInput, Prisma.VideoUncheckedCreateInput>;
};
/**
 * Video createMany
 */
export type VideoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: Prisma.VideoCreateManyInput | Prisma.VideoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Video createManyAndReturn
 */
export type VideoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: Prisma.VideoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Video
     */
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    /**
     * The data used to create many Videos.
     */
    data: Prisma.VideoCreateManyInput | Prisma.VideoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Video update
 */
export type VideoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Video.
     */
    data: Prisma.XOR<Prisma.VideoUpdateInput, Prisma.VideoUncheckedUpdateInput>;
    /**
     * Choose, which Video to update.
     */
    where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video updateMany
 */
export type VideoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: Prisma.XOR<Prisma.VideoUpdateManyMutationInput, Prisma.VideoUncheckedUpdateManyInput>;
    /**
     * Filter which Videos to update
     */
    where?: Prisma.VideoWhereInput;
    /**
     * Limit how many Videos to update.
     */
    limit?: number;
};
/**
 * Video updateManyAndReturn
 */
export type VideoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: Prisma.VideoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Video
     */
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    /**
     * The data used to update Videos.
     */
    data: Prisma.XOR<Prisma.VideoUpdateManyMutationInput, Prisma.VideoUncheckedUpdateManyInput>;
    /**
     * Filter which Videos to update
     */
    where?: Prisma.VideoWhereInput;
    /**
     * Limit how many Videos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Video upsert
 */
export type VideoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: Prisma.VideoWhereUniqueInput;
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: Prisma.XOR<Prisma.VideoCreateInput, Prisma.VideoUncheckedCreateInput>;
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VideoUpdateInput, Prisma.VideoUncheckedUpdateInput>;
};
/**
 * Video delete
 */
export type VideoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Video to delete.
     */
    where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video deleteMany
 */
export type VideoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: Prisma.VideoWhereInput;
    /**
     * Limit how many Videos to delete.
     */
    limit?: number;
};
/**
 * Video.USER
 */
export type Video$USERArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Video.CAMPAIGN_VIDEOS
 */
export type Video$CAMPAIGN_VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Video.BONDS
 */
export type Video$BONDSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: Prisma.BondSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bond
     */
    omit?: Prisma.BondOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BondInclude<ExtArgs> | null;
    where?: Prisma.BondWhereInput;
    orderBy?: Prisma.BondOrderByWithRelationInput | Prisma.BondOrderByWithRelationInput[];
    cursor?: Prisma.BondWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BondScalarFieldEnum | Prisma.BondScalarFieldEnum[];
};
/**
 * Video without action
 */
export type VideoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Video.d.ts.map
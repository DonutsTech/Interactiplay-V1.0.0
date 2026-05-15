import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Bond_Video
 *
 */
export type Bond_VideoModel = runtime.Types.Result.DefaultSelection<Prisma.$Bond_VideoPayload>;
export type AggregateBond_Video = {
    _count: Bond_VideoCountAggregateOutputType | null;
    _min: Bond_VideoMinAggregateOutputType | null;
    _max: Bond_VideoMaxAggregateOutputType | null;
};
export type Bond_VideoMinAggregateOutputType = {
    ID: string | null;
    CAMPAIGN_VIDEO_ID: string | null;
    BOND_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Bond_VideoMaxAggregateOutputType = {
    ID: string | null;
    CAMPAIGN_VIDEO_ID: string | null;
    BOND_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Bond_VideoCountAggregateOutputType = {
    ID: number;
    CAMPAIGN_VIDEO_ID: number;
    BOND_ID: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Bond_VideoMinAggregateInputType = {
    ID?: true;
    CAMPAIGN_VIDEO_ID?: true;
    BOND_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Bond_VideoMaxAggregateInputType = {
    ID?: true;
    CAMPAIGN_VIDEO_ID?: true;
    BOND_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Bond_VideoCountAggregateInputType = {
    ID?: true;
    CAMPAIGN_VIDEO_ID?: true;
    BOND_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Bond_VideoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bond_Video to aggregate.
     */
    where?: Prisma.Bond_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bond_Videos to fetch.
     */
    orderBy?: Prisma.Bond_VideoOrderByWithRelationInput | Prisma.Bond_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Bond_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bond_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bond_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bond_Videos
    **/
    _count?: true | Bond_VideoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Bond_VideoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Bond_VideoMaxAggregateInputType;
};
export type GetBond_VideoAggregateType<T extends Bond_VideoAggregateArgs> = {
    [P in keyof T & keyof AggregateBond_Video]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBond_Video[P]> : Prisma.GetScalarType<T[P], AggregateBond_Video[P]>;
};
export type Bond_VideoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Bond_VideoWhereInput;
    orderBy?: Prisma.Bond_VideoOrderByWithAggregationInput | Prisma.Bond_VideoOrderByWithAggregationInput[];
    by: Prisma.Bond_VideoScalarFieldEnum[] | Prisma.Bond_VideoScalarFieldEnum;
    having?: Prisma.Bond_VideoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Bond_VideoCountAggregateInputType | true;
    _min?: Bond_VideoMinAggregateInputType;
    _max?: Bond_VideoMaxAggregateInputType;
};
export type Bond_VideoGroupByOutputType = {
    ID: string;
    CAMPAIGN_VIDEO_ID: string | null;
    BOND_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Bond_VideoCountAggregateOutputType | null;
    _min: Bond_VideoMinAggregateOutputType | null;
    _max: Bond_VideoMaxAggregateOutputType | null;
};
type GetBond_VideoGroupByPayload<T extends Bond_VideoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Bond_VideoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Bond_VideoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Bond_VideoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Bond_VideoGroupByOutputType[P]>;
}>>;
export type Bond_VideoWhereInput = {
    AND?: Prisma.Bond_VideoWhereInput | Prisma.Bond_VideoWhereInput[];
    OR?: Prisma.Bond_VideoWhereInput[];
    NOT?: Prisma.Bond_VideoWhereInput | Prisma.Bond_VideoWhereInput[];
    ID?: Prisma.StringFilter<"Bond_Video"> | string;
    CAMPAIGN_VIDEO_ID?: Prisma.StringNullableFilter<"Bond_Video"> | string | null;
    BOND_ID?: Prisma.StringNullableFilter<"Bond_Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Bond_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Bond_Video"> | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.XOR<Prisma.Campaign_VideoNullableScalarRelationFilter, Prisma.Campaign_VideoWhereInput> | null;
    BOND?: Prisma.XOR<Prisma.BondNullableScalarRelationFilter, Prisma.BondWhereInput> | null;
};
export type Bond_VideoOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_VIDEO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    BOND_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoOrderByWithRelationInput;
    BOND?: Prisma.BondOrderByWithRelationInput;
};
export type Bond_VideoWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    BOND_ID?: string;
    AND?: Prisma.Bond_VideoWhereInput | Prisma.Bond_VideoWhereInput[];
    OR?: Prisma.Bond_VideoWhereInput[];
    NOT?: Prisma.Bond_VideoWhereInput | Prisma.Bond_VideoWhereInput[];
    CAMPAIGN_VIDEO_ID?: Prisma.StringNullableFilter<"Bond_Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Bond_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Bond_Video"> | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.XOR<Prisma.Campaign_VideoNullableScalarRelationFilter, Prisma.Campaign_VideoWhereInput> | null;
    BOND?: Prisma.XOR<Prisma.BondNullableScalarRelationFilter, Prisma.BondWhereInput> | null;
}, "ID" | "BOND_ID">;
export type Bond_VideoOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_VIDEO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    BOND_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Bond_VideoCountOrderByAggregateInput;
    _max?: Prisma.Bond_VideoMaxOrderByAggregateInput;
    _min?: Prisma.Bond_VideoMinOrderByAggregateInput;
};
export type Bond_VideoScalarWhereWithAggregatesInput = {
    AND?: Prisma.Bond_VideoScalarWhereWithAggregatesInput | Prisma.Bond_VideoScalarWhereWithAggregatesInput[];
    OR?: Prisma.Bond_VideoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Bond_VideoScalarWhereWithAggregatesInput | Prisma.Bond_VideoScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Bond_Video"> | string;
    CAMPAIGN_VIDEO_ID?: Prisma.StringNullableWithAggregatesFilter<"Bond_Video"> | string | null;
    BOND_ID?: Prisma.StringNullableWithAggregatesFilter<"Bond_Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Bond_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Bond_Video"> | Date | string | null;
};
export type Bond_VideoCreateInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedOneWithoutBONDSInput;
    BOND?: Prisma.BondCreateNestedOneWithoutBOND_VIDEOSInput;
};
export type Bond_VideoUncheckedCreateInput = {
    ID?: string;
    CAMPAIGN_VIDEO_ID?: string | null;
    BOND_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Bond_VideoUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateOneWithoutBONDSNestedInput;
    BOND?: Prisma.BondUpdateOneWithoutBOND_VIDEOSNestedInput;
};
export type Bond_VideoUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BOND_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Bond_VideoCreateManyInput = {
    ID?: string;
    CAMPAIGN_VIDEO_ID?: string | null;
    BOND_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Bond_VideoUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Bond_VideoUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BOND_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Bond_VideoListRelationFilter = {
    every?: Prisma.Bond_VideoWhereInput;
    some?: Prisma.Bond_VideoWhereInput;
    none?: Prisma.Bond_VideoWhereInput;
};
export type Bond_VideoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Bond_VideoCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_VIDEO_ID?: Prisma.SortOrder;
    BOND_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Bond_VideoMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_VIDEO_ID?: Prisma.SortOrder;
    BOND_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Bond_VideoMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    CAMPAIGN_VIDEO_ID?: Prisma.SortOrder;
    BOND_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Bond_VideoCreateNestedManyWithoutCAMPAIGN_VIDEOSInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput> | Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput[] | Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput[];
    createMany?: Prisma.Bond_VideoCreateManyCAMPAIGN_VIDEOSInputEnvelope;
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
};
export type Bond_VideoUncheckedCreateNestedManyWithoutCAMPAIGN_VIDEOSInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput> | Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput[] | Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput[];
    createMany?: Prisma.Bond_VideoCreateManyCAMPAIGN_VIDEOSInputEnvelope;
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
};
export type Bond_VideoUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput> | Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput[] | Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput[];
    upsert?: Prisma.Bond_VideoUpsertWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoUpsertWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput[];
    createMany?: Prisma.Bond_VideoCreateManyCAMPAIGN_VIDEOSInputEnvelope;
    set?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    disconnect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    delete?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    update?: Prisma.Bond_VideoUpdateWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoUpdateWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput[];
    updateMany?: Prisma.Bond_VideoUpdateManyWithWhereWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoUpdateManyWithWhereWithoutCAMPAIGN_VIDEOSInput[];
    deleteMany?: Prisma.Bond_VideoScalarWhereInput | Prisma.Bond_VideoScalarWhereInput[];
};
export type Bond_VideoUncheckedUpdateManyWithoutCAMPAIGN_VIDEOSNestedInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput> | Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput[] | Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput[];
    upsert?: Prisma.Bond_VideoUpsertWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoUpsertWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput[];
    createMany?: Prisma.Bond_VideoCreateManyCAMPAIGN_VIDEOSInputEnvelope;
    set?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    disconnect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    delete?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    update?: Prisma.Bond_VideoUpdateWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoUpdateWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput[];
    updateMany?: Prisma.Bond_VideoUpdateManyWithWhereWithoutCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoUpdateManyWithWhereWithoutCAMPAIGN_VIDEOSInput[];
    deleteMany?: Prisma.Bond_VideoScalarWhereInput | Prisma.Bond_VideoScalarWhereInput[];
};
export type Bond_VideoCreateNestedManyWithoutBONDInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutBONDInput, Prisma.Bond_VideoUncheckedCreateWithoutBONDInput> | Prisma.Bond_VideoCreateWithoutBONDInput[] | Prisma.Bond_VideoUncheckedCreateWithoutBONDInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutBONDInput | Prisma.Bond_VideoCreateOrConnectWithoutBONDInput[];
    createMany?: Prisma.Bond_VideoCreateManyBONDInputEnvelope;
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
};
export type Bond_VideoUncheckedCreateNestedManyWithoutBONDInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutBONDInput, Prisma.Bond_VideoUncheckedCreateWithoutBONDInput> | Prisma.Bond_VideoCreateWithoutBONDInput[] | Prisma.Bond_VideoUncheckedCreateWithoutBONDInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutBONDInput | Prisma.Bond_VideoCreateOrConnectWithoutBONDInput[];
    createMany?: Prisma.Bond_VideoCreateManyBONDInputEnvelope;
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
};
export type Bond_VideoUpdateManyWithoutBONDNestedInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutBONDInput, Prisma.Bond_VideoUncheckedCreateWithoutBONDInput> | Prisma.Bond_VideoCreateWithoutBONDInput[] | Prisma.Bond_VideoUncheckedCreateWithoutBONDInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutBONDInput | Prisma.Bond_VideoCreateOrConnectWithoutBONDInput[];
    upsert?: Prisma.Bond_VideoUpsertWithWhereUniqueWithoutBONDInput | Prisma.Bond_VideoUpsertWithWhereUniqueWithoutBONDInput[];
    createMany?: Prisma.Bond_VideoCreateManyBONDInputEnvelope;
    set?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    disconnect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    delete?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    update?: Prisma.Bond_VideoUpdateWithWhereUniqueWithoutBONDInput | Prisma.Bond_VideoUpdateWithWhereUniqueWithoutBONDInput[];
    updateMany?: Prisma.Bond_VideoUpdateManyWithWhereWithoutBONDInput | Prisma.Bond_VideoUpdateManyWithWhereWithoutBONDInput[];
    deleteMany?: Prisma.Bond_VideoScalarWhereInput | Prisma.Bond_VideoScalarWhereInput[];
};
export type Bond_VideoUncheckedUpdateManyWithoutBONDNestedInput = {
    create?: Prisma.XOR<Prisma.Bond_VideoCreateWithoutBONDInput, Prisma.Bond_VideoUncheckedCreateWithoutBONDInput> | Prisma.Bond_VideoCreateWithoutBONDInput[] | Prisma.Bond_VideoUncheckedCreateWithoutBONDInput[];
    connectOrCreate?: Prisma.Bond_VideoCreateOrConnectWithoutBONDInput | Prisma.Bond_VideoCreateOrConnectWithoutBONDInput[];
    upsert?: Prisma.Bond_VideoUpsertWithWhereUniqueWithoutBONDInput | Prisma.Bond_VideoUpsertWithWhereUniqueWithoutBONDInput[];
    createMany?: Prisma.Bond_VideoCreateManyBONDInputEnvelope;
    set?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    disconnect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    delete?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    connect?: Prisma.Bond_VideoWhereUniqueInput | Prisma.Bond_VideoWhereUniqueInput[];
    update?: Prisma.Bond_VideoUpdateWithWhereUniqueWithoutBONDInput | Prisma.Bond_VideoUpdateWithWhereUniqueWithoutBONDInput[];
    updateMany?: Prisma.Bond_VideoUpdateManyWithWhereWithoutBONDInput | Prisma.Bond_VideoUpdateManyWithWhereWithoutBONDInput[];
    deleteMany?: Prisma.Bond_VideoScalarWhereInput | Prisma.Bond_VideoScalarWhereInput[];
};
export type Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BOND?: Prisma.BondCreateNestedOneWithoutBOND_VIDEOSInput;
};
export type Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: string;
    BOND_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Bond_VideoCreateOrConnectWithoutCAMPAIGN_VIDEOSInput = {
    where: Prisma.Bond_VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
};
export type Bond_VideoCreateManyCAMPAIGN_VIDEOSInputEnvelope = {
    data: Prisma.Bond_VideoCreateManyCAMPAIGN_VIDEOSInput | Prisma.Bond_VideoCreateManyCAMPAIGN_VIDEOSInput[];
    skipDuplicates?: boolean;
};
export type Bond_VideoUpsertWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput = {
    where: Prisma.Bond_VideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.Bond_VideoUpdateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
    create: Prisma.XOR<Prisma.Bond_VideoCreateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedCreateWithoutCAMPAIGN_VIDEOSInput>;
};
export type Bond_VideoUpdateWithWhereUniqueWithoutCAMPAIGN_VIDEOSInput = {
    where: Prisma.Bond_VideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.Bond_VideoUpdateWithoutCAMPAIGN_VIDEOSInput, Prisma.Bond_VideoUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput>;
};
export type Bond_VideoUpdateManyWithWhereWithoutCAMPAIGN_VIDEOSInput = {
    where: Prisma.Bond_VideoScalarWhereInput;
    data: Prisma.XOR<Prisma.Bond_VideoUpdateManyMutationInput, Prisma.Bond_VideoUncheckedUpdateManyWithoutCAMPAIGN_VIDEOSInput>;
};
export type Bond_VideoScalarWhereInput = {
    AND?: Prisma.Bond_VideoScalarWhereInput | Prisma.Bond_VideoScalarWhereInput[];
    OR?: Prisma.Bond_VideoScalarWhereInput[];
    NOT?: Prisma.Bond_VideoScalarWhereInput | Prisma.Bond_VideoScalarWhereInput[];
    ID?: Prisma.StringFilter<"Bond_Video"> | string;
    CAMPAIGN_VIDEO_ID?: Prisma.StringNullableFilter<"Bond_Video"> | string | null;
    BOND_ID?: Prisma.StringNullableFilter<"Bond_Video"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Bond_Video"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Bond_Video"> | Date | string | null;
};
export type Bond_VideoCreateWithoutBONDInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoCreateNestedOneWithoutBONDSInput;
};
export type Bond_VideoUncheckedCreateWithoutBONDInput = {
    ID?: string;
    CAMPAIGN_VIDEO_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Bond_VideoCreateOrConnectWithoutBONDInput = {
    where: Prisma.Bond_VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.Bond_VideoCreateWithoutBONDInput, Prisma.Bond_VideoUncheckedCreateWithoutBONDInput>;
};
export type Bond_VideoCreateManyBONDInputEnvelope = {
    data: Prisma.Bond_VideoCreateManyBONDInput | Prisma.Bond_VideoCreateManyBONDInput[];
    skipDuplicates?: boolean;
};
export type Bond_VideoUpsertWithWhereUniqueWithoutBONDInput = {
    where: Prisma.Bond_VideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.Bond_VideoUpdateWithoutBONDInput, Prisma.Bond_VideoUncheckedUpdateWithoutBONDInput>;
    create: Prisma.XOR<Prisma.Bond_VideoCreateWithoutBONDInput, Prisma.Bond_VideoUncheckedCreateWithoutBONDInput>;
};
export type Bond_VideoUpdateWithWhereUniqueWithoutBONDInput = {
    where: Prisma.Bond_VideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.Bond_VideoUpdateWithoutBONDInput, Prisma.Bond_VideoUncheckedUpdateWithoutBONDInput>;
};
export type Bond_VideoUpdateManyWithWhereWithoutBONDInput = {
    where: Prisma.Bond_VideoScalarWhereInput;
    data: Prisma.XOR<Prisma.Bond_VideoUpdateManyMutationInput, Prisma.Bond_VideoUncheckedUpdateManyWithoutBONDInput>;
};
export type Bond_VideoCreateManyCAMPAIGN_VIDEOSInput = {
    ID?: string;
    BOND_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Bond_VideoUpdateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BOND?: Prisma.BondUpdateOneWithoutBOND_VIDEOSNestedInput;
};
export type Bond_VideoUncheckedUpdateWithoutCAMPAIGN_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    BOND_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Bond_VideoUncheckedUpdateManyWithoutCAMPAIGN_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    BOND_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Bond_VideoCreateManyBONDInput = {
    ID?: string;
    CAMPAIGN_VIDEO_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Bond_VideoUpdateWithoutBONDInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN_VIDEOS?: Prisma.Campaign_VideoUpdateOneWithoutBONDSNestedInput;
};
export type Bond_VideoUncheckedUpdateWithoutBONDInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Bond_VideoUncheckedUpdateManyWithoutBONDInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CAMPAIGN_VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Bond_VideoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_VIDEO_ID?: boolean;
    BOND_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN_VIDEOS?: boolean | Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BOND?: boolean | Prisma.Bond_Video$BONDArgs<ExtArgs>;
}, ExtArgs["result"]["bond_Video"]>;
export type Bond_VideoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_VIDEO_ID?: boolean;
    BOND_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN_VIDEOS?: boolean | Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BOND?: boolean | Prisma.Bond_Video$BONDArgs<ExtArgs>;
}, ExtArgs["result"]["bond_Video"]>;
export type Bond_VideoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    CAMPAIGN_VIDEO_ID?: boolean;
    BOND_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN_VIDEOS?: boolean | Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BOND?: boolean | Prisma.Bond_Video$BONDArgs<ExtArgs>;
}, ExtArgs["result"]["bond_Video"]>;
export type Bond_VideoSelectScalar = {
    ID?: boolean;
    CAMPAIGN_VIDEO_ID?: boolean;
    BOND_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Bond_VideoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "CAMPAIGN_VIDEO_ID" | "BOND_ID" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["bond_Video"]>;
export type Bond_VideoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_VIDEOS?: boolean | Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BOND?: boolean | Prisma.Bond_Video$BONDArgs<ExtArgs>;
};
export type Bond_VideoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_VIDEOS?: boolean | Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BOND?: boolean | Prisma.Bond_Video$BONDArgs<ExtArgs>;
};
export type Bond_VideoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN_VIDEOS?: boolean | Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs>;
    BOND?: boolean | Prisma.Bond_Video$BONDArgs<ExtArgs>;
};
export type $Bond_VideoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bond_Video";
    objects: {
        CAMPAIGN_VIDEOS: Prisma.$Campaign_VideoPayload<ExtArgs> | null;
        BOND: Prisma.$BondPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        CAMPAIGN_VIDEO_ID: string | null;
        BOND_ID: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["bond_Video"]>;
    composites: {};
};
export type Bond_VideoGetPayload<S extends boolean | null | undefined | Bond_VideoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload, S>;
export type Bond_VideoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Bond_VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Bond_VideoCountAggregateInputType | true;
};
export interface Bond_VideoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bond_Video'];
        meta: {
            name: 'Bond_Video';
        };
    };
    /**
     * Find zero or one Bond_Video that matches the filter.
     * @param {Bond_VideoFindUniqueArgs} args - Arguments to find a Bond_Video
     * @example
     * // Get one Bond_Video
     * const bond_Video = await prisma.bond_Video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Bond_VideoFindUniqueArgs>(args: Prisma.SelectSubset<T, Bond_VideoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Bond_Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Bond_VideoFindUniqueOrThrowArgs} args - Arguments to find a Bond_Video
     * @example
     * // Get one Bond_Video
     * const bond_Video = await prisma.bond_Video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Bond_VideoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Bond_VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bond_Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bond_VideoFindFirstArgs} args - Arguments to find a Bond_Video
     * @example
     * // Get one Bond_Video
     * const bond_Video = await prisma.bond_Video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Bond_VideoFindFirstArgs>(args?: Prisma.SelectSubset<T, Bond_VideoFindFirstArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bond_Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bond_VideoFindFirstOrThrowArgs} args - Arguments to find a Bond_Video
     * @example
     * // Get one Bond_Video
     * const bond_Video = await prisma.bond_Video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Bond_VideoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Bond_VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Bond_Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bond_VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bond_Videos
     * const bond_Videos = await prisma.bond_Video.findMany()
     *
     * // Get first 10 Bond_Videos
     * const bond_Videos = await prisma.bond_Video.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const bond_VideoWithIDOnly = await prisma.bond_Video.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Bond_VideoFindManyArgs>(args?: Prisma.SelectSubset<T, Bond_VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Bond_Video.
     * @param {Bond_VideoCreateArgs} args - Arguments to create a Bond_Video.
     * @example
     * // Create one Bond_Video
     * const Bond_Video = await prisma.bond_Video.create({
     *   data: {
     *     // ... data to create a Bond_Video
     *   }
     * })
     *
     */
    create<T extends Bond_VideoCreateArgs>(args: Prisma.SelectSubset<T, Bond_VideoCreateArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Bond_Videos.
     * @param {Bond_VideoCreateManyArgs} args - Arguments to create many Bond_Videos.
     * @example
     * // Create many Bond_Videos
     * const bond_Video = await prisma.bond_Video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Bond_VideoCreateManyArgs>(args?: Prisma.SelectSubset<T, Bond_VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Bond_Videos and returns the data saved in the database.
     * @param {Bond_VideoCreateManyAndReturnArgs} args - Arguments to create many Bond_Videos.
     * @example
     * // Create many Bond_Videos
     * const bond_Video = await prisma.bond_Video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bond_Videos and only return the `ID`
     * const bond_VideoWithIDOnly = await prisma.bond_Video.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Bond_VideoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Bond_VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Bond_Video.
     * @param {Bond_VideoDeleteArgs} args - Arguments to delete one Bond_Video.
     * @example
     * // Delete one Bond_Video
     * const Bond_Video = await prisma.bond_Video.delete({
     *   where: {
     *     // ... filter to delete one Bond_Video
     *   }
     * })
     *
     */
    delete<T extends Bond_VideoDeleteArgs>(args: Prisma.SelectSubset<T, Bond_VideoDeleteArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Bond_Video.
     * @param {Bond_VideoUpdateArgs} args - Arguments to update one Bond_Video.
     * @example
     * // Update one Bond_Video
     * const bond_Video = await prisma.bond_Video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Bond_VideoUpdateArgs>(args: Prisma.SelectSubset<T, Bond_VideoUpdateArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Bond_Videos.
     * @param {Bond_VideoDeleteManyArgs} args - Arguments to filter Bond_Videos to delete.
     * @example
     * // Delete a few Bond_Videos
     * const { count } = await prisma.bond_Video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Bond_VideoDeleteManyArgs>(args?: Prisma.SelectSubset<T, Bond_VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bond_Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bond_VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bond_Videos
     * const bond_Video = await prisma.bond_Video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Bond_VideoUpdateManyArgs>(args: Prisma.SelectSubset<T, Bond_VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bond_Videos and returns the data updated in the database.
     * @param {Bond_VideoUpdateManyAndReturnArgs} args - Arguments to update many Bond_Videos.
     * @example
     * // Update many Bond_Videos
     * const bond_Video = await prisma.bond_Video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bond_Videos and only return the `ID`
     * const bond_VideoWithIDOnly = await prisma.bond_Video.updateManyAndReturn({
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
    updateManyAndReturn<T extends Bond_VideoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Bond_VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Bond_Video.
     * @param {Bond_VideoUpsertArgs} args - Arguments to update or create a Bond_Video.
     * @example
     * // Update or create a Bond_Video
     * const bond_Video = await prisma.bond_Video.upsert({
     *   create: {
     *     // ... data to create a Bond_Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bond_Video we want to update
     *   }
     * })
     */
    upsert<T extends Bond_VideoUpsertArgs>(args: Prisma.SelectSubset<T, Bond_VideoUpsertArgs<ExtArgs>>): Prisma.Prisma__Bond_VideoClient<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Bond_Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bond_VideoCountArgs} args - Arguments to filter Bond_Videos to count.
     * @example
     * // Count the number of Bond_Videos
     * const count = await prisma.bond_Video.count({
     *   where: {
     *     // ... the filter for the Bond_Videos we want to count
     *   }
     * })
    **/
    count<T extends Bond_VideoCountArgs>(args?: Prisma.Subset<T, Bond_VideoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Bond_VideoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Bond_Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bond_VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bond_VideoAggregateArgs>(args: Prisma.Subset<T, Bond_VideoAggregateArgs>): Prisma.PrismaPromise<GetBond_VideoAggregateType<T>>;
    /**
     * Group by Bond_Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bond_VideoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Bond_VideoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Bond_VideoGroupByArgs['orderBy'];
    } : {
        orderBy?: Bond_VideoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Bond_VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBond_VideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Bond_Video model
     */
    readonly fields: Bond_VideoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Bond_Video.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Bond_VideoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CAMPAIGN_VIDEOS<T extends Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs>>): Prisma.Prisma__Campaign_VideoClient<runtime.Types.Result.GetResult<Prisma.$Campaign_VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    BOND<T extends Prisma.Bond_Video$BONDArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bond_Video$BONDArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Bond_Video model
 */
export interface Bond_VideoFieldRefs {
    readonly ID: Prisma.FieldRef<"Bond_Video", 'String'>;
    readonly CAMPAIGN_VIDEO_ID: Prisma.FieldRef<"Bond_Video", 'String'>;
    readonly BOND_ID: Prisma.FieldRef<"Bond_Video", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Bond_Video", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Bond_Video", 'DateTime'>;
}
/**
 * Bond_Video findUnique
 */
export type Bond_VideoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond_Video to fetch.
     */
    where: Prisma.Bond_VideoWhereUniqueInput;
};
/**
 * Bond_Video findUniqueOrThrow
 */
export type Bond_VideoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond_Video to fetch.
     */
    where: Prisma.Bond_VideoWhereUniqueInput;
};
/**
 * Bond_Video findFirst
 */
export type Bond_VideoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond_Video to fetch.
     */
    where?: Prisma.Bond_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bond_Videos to fetch.
     */
    orderBy?: Prisma.Bond_VideoOrderByWithRelationInput | Prisma.Bond_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bond_Videos.
     */
    cursor?: Prisma.Bond_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bond_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bond_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bond_Videos.
     */
    distinct?: Prisma.Bond_VideoScalarFieldEnum | Prisma.Bond_VideoScalarFieldEnum[];
};
/**
 * Bond_Video findFirstOrThrow
 */
export type Bond_VideoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond_Video to fetch.
     */
    where?: Prisma.Bond_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bond_Videos to fetch.
     */
    orderBy?: Prisma.Bond_VideoOrderByWithRelationInput | Prisma.Bond_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bond_Videos.
     */
    cursor?: Prisma.Bond_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bond_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bond_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bond_Videos.
     */
    distinct?: Prisma.Bond_VideoScalarFieldEnum | Prisma.Bond_VideoScalarFieldEnum[];
};
/**
 * Bond_Video findMany
 */
export type Bond_VideoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond_Videos to fetch.
     */
    where?: Prisma.Bond_VideoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bond_Videos to fetch.
     */
    orderBy?: Prisma.Bond_VideoOrderByWithRelationInput | Prisma.Bond_VideoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bond_Videos.
     */
    cursor?: Prisma.Bond_VideoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bond_Videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bond_Videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bond_Videos.
     */
    distinct?: Prisma.Bond_VideoScalarFieldEnum | Prisma.Bond_VideoScalarFieldEnum[];
};
/**
 * Bond_Video create
 */
export type Bond_VideoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Bond_Video.
     */
    data?: Prisma.XOR<Prisma.Bond_VideoCreateInput, Prisma.Bond_VideoUncheckedCreateInput>;
};
/**
 * Bond_Video createMany
 */
export type Bond_VideoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bond_Videos.
     */
    data: Prisma.Bond_VideoCreateManyInput | Prisma.Bond_VideoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Bond_Video createManyAndReturn
 */
export type Bond_VideoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond_Video
     */
    select?: Prisma.Bond_VideoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bond_Video
     */
    omit?: Prisma.Bond_VideoOmit<ExtArgs> | null;
    /**
     * The data used to create many Bond_Videos.
     */
    data: Prisma.Bond_VideoCreateManyInput | Prisma.Bond_VideoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Bond_VideoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Bond_Video update
 */
export type Bond_VideoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Bond_Video.
     */
    data: Prisma.XOR<Prisma.Bond_VideoUpdateInput, Prisma.Bond_VideoUncheckedUpdateInput>;
    /**
     * Choose, which Bond_Video to update.
     */
    where: Prisma.Bond_VideoWhereUniqueInput;
};
/**
 * Bond_Video updateMany
 */
export type Bond_VideoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Bond_Videos.
     */
    data: Prisma.XOR<Prisma.Bond_VideoUpdateManyMutationInput, Prisma.Bond_VideoUncheckedUpdateManyInput>;
    /**
     * Filter which Bond_Videos to update
     */
    where?: Prisma.Bond_VideoWhereInput;
    /**
     * Limit how many Bond_Videos to update.
     */
    limit?: number;
};
/**
 * Bond_Video updateManyAndReturn
 */
export type Bond_VideoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond_Video
     */
    select?: Prisma.Bond_VideoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bond_Video
     */
    omit?: Prisma.Bond_VideoOmit<ExtArgs> | null;
    /**
     * The data used to update Bond_Videos.
     */
    data: Prisma.XOR<Prisma.Bond_VideoUpdateManyMutationInput, Prisma.Bond_VideoUncheckedUpdateManyInput>;
    /**
     * Filter which Bond_Videos to update
     */
    where?: Prisma.Bond_VideoWhereInput;
    /**
     * Limit how many Bond_Videos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Bond_VideoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Bond_Video upsert
 */
export type Bond_VideoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Bond_Video to update in case it exists.
     */
    where: Prisma.Bond_VideoWhereUniqueInput;
    /**
     * In case the Bond_Video found by the `where` argument doesn't exist, create a new Bond_Video with this data.
     */
    create: Prisma.XOR<Prisma.Bond_VideoCreateInput, Prisma.Bond_VideoUncheckedCreateInput>;
    /**
     * In case the Bond_Video was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Bond_VideoUpdateInput, Prisma.Bond_VideoUncheckedUpdateInput>;
};
/**
 * Bond_Video delete
 */
export type Bond_VideoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Bond_Video to delete.
     */
    where: Prisma.Bond_VideoWhereUniqueInput;
};
/**
 * Bond_Video deleteMany
 */
export type Bond_VideoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bond_Videos to delete
     */
    where?: Prisma.Bond_VideoWhereInput;
    /**
     * Limit how many Bond_Videos to delete.
     */
    limit?: number;
};
/**
 * Bond_Video.CAMPAIGN_VIDEOS
 */
export type Bond_Video$CAMPAIGN_VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Bond_Video.BOND
 */
export type Bond_Video$BONDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Bond_Video without action
 */
export type Bond_VideoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Bond_Video.d.ts.map
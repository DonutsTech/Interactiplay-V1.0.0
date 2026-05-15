import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Feature
 *
 */
export type FeatureModel = runtime.Types.Result.DefaultSelection<Prisma.$FeaturePayload>;
export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null;
    _min: FeatureMinAggregateOutputType | null;
    _max: FeatureMaxAggregateOutputType | null;
};
export type FeatureMinAggregateOutputType = {
    ID: string | null;
    AUTO_PLAY_ID: string | null;
    THUMB_ID: string | null;
    GANCHO_ID: string | null;
    TIMELINE_ID: string | null;
    EXTERNAL_LINK_ID: string | null;
    PIXEL_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type FeatureMaxAggregateOutputType = {
    ID: string | null;
    AUTO_PLAY_ID: string | null;
    THUMB_ID: string | null;
    GANCHO_ID: string | null;
    TIMELINE_ID: string | null;
    EXTERNAL_LINK_ID: string | null;
    PIXEL_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type FeatureCountAggregateOutputType = {
    ID: number;
    AUTO_PLAY_ID: number;
    THUMB_ID: number;
    GANCHO_ID: number;
    TIMELINE_ID: number;
    EXTERNAL_LINK_ID: number;
    PIXEL_ID: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type FeatureMinAggregateInputType = {
    ID?: true;
    AUTO_PLAY_ID?: true;
    THUMB_ID?: true;
    GANCHO_ID?: true;
    TIMELINE_ID?: true;
    EXTERNAL_LINK_ID?: true;
    PIXEL_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type FeatureMaxAggregateInputType = {
    ID?: true;
    AUTO_PLAY_ID?: true;
    THUMB_ID?: true;
    GANCHO_ID?: true;
    TIMELINE_ID?: true;
    EXTERNAL_LINK_ID?: true;
    PIXEL_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type FeatureCountAggregateInputType = {
    ID?: true;
    AUTO_PLAY_ID?: true;
    THUMB_ID?: true;
    GANCHO_ID?: true;
    TIMELINE_ID?: true;
    EXTERNAL_LINK_ID?: true;
    PIXEL_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type FeatureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: Prisma.FeatureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Features to fetch.
     */
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FeatureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Features.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType;
};
export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
    [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeature[P]> : Prisma.GetScalarType<T[P], AggregateFeature[P]>;
};
export type FeatureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithAggregationInput | Prisma.FeatureOrderByWithAggregationInput[];
    by: Prisma.FeatureScalarFieldEnum[] | Prisma.FeatureScalarFieldEnum;
    having?: Prisma.FeatureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeatureCountAggregateInputType | true;
    _min?: FeatureMinAggregateInputType;
    _max?: FeatureMaxAggregateInputType;
};
export type FeatureGroupByOutputType = {
    ID: string;
    AUTO_PLAY_ID: string | null;
    THUMB_ID: string | null;
    GANCHO_ID: string | null;
    TIMELINE_ID: string | null;
    EXTERNAL_LINK_ID: string | null;
    PIXEL_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: FeatureCountAggregateOutputType | null;
    _min: FeatureMinAggregateOutputType | null;
    _max: FeatureMaxAggregateOutputType | null;
};
type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeatureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeatureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeatureGroupByOutputType[P]>;
}>>;
export type FeatureWhereInput = {
    AND?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    OR?: Prisma.FeatureWhereInput[];
    NOT?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    ID?: Prisma.StringFilter<"Feature"> | string;
    AUTO_PLAY_ID?: Prisma.StringNullableFilter<"Feature"> | string | null;
    THUMB_ID?: Prisma.StringNullableFilter<"Feature"> | string | null;
    GANCHO_ID?: Prisma.StringNullableFilter<"Feature"> | string | null;
    TIMELINE_ID?: Prisma.StringNullableFilter<"Feature"> | string | null;
    EXTERNAL_LINK_ID?: Prisma.StringNullableFilter<"Feature"> | string | null;
    PIXEL_ID?: Prisma.StringNullableFilter<"Feature"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Feature"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Feature"> | Date | string | null;
    CAMPAIGN?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    AUTO_PLAY?: Prisma.XOR<Prisma.Auto_PlayNullableScalarRelationFilter, Prisma.Auto_PlayWhereInput> | null;
    THUMB?: Prisma.XOR<Prisma.ThumbNullableScalarRelationFilter, Prisma.ThumbWhereInput> | null;
    GANCHO?: Prisma.XOR<Prisma.GanchoNullableScalarRelationFilter, Prisma.GanchoWhereInput> | null;
    TIMELINE?: Prisma.XOR<Prisma.TimelineNullableScalarRelationFilter, Prisma.TimelineWhereInput> | null;
    EXTERNAL_LINK?: Prisma.XOR<Prisma.External_LinkNullableScalarRelationFilter, Prisma.External_LinkWhereInput> | null;
    PIXEL?: Prisma.XOR<Prisma.PixelNullableScalarRelationFilter, Prisma.PixelWhereInput> | null;
};
export type FeatureOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    AUTO_PLAY_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    THUMB_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    GANCHO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIMELINE_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    EXTERNAL_LINK_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    PIXEL_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    CAMPAIGN?: Prisma.CampaignOrderByWithRelationInput;
    AUTO_PLAY?: Prisma.Auto_PlayOrderByWithRelationInput;
    THUMB?: Prisma.ThumbOrderByWithRelationInput;
    GANCHO?: Prisma.GanchoOrderByWithRelationInput;
    TIMELINE?: Prisma.TimelineOrderByWithRelationInput;
    EXTERNAL_LINK?: Prisma.External_LinkOrderByWithRelationInput;
    PIXEL?: Prisma.PixelOrderByWithRelationInput;
};
export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AUTO_PLAY_ID?: string;
    THUMB_ID?: string;
    GANCHO_ID?: string;
    TIMELINE_ID?: string;
    EXTERNAL_LINK_ID?: string;
    PIXEL_ID?: string;
    AND?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    OR?: Prisma.FeatureWhereInput[];
    NOT?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Feature"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Feature"> | Date | string | null;
    CAMPAIGN?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    AUTO_PLAY?: Prisma.XOR<Prisma.Auto_PlayNullableScalarRelationFilter, Prisma.Auto_PlayWhereInput> | null;
    THUMB?: Prisma.XOR<Prisma.ThumbNullableScalarRelationFilter, Prisma.ThumbWhereInput> | null;
    GANCHO?: Prisma.XOR<Prisma.GanchoNullableScalarRelationFilter, Prisma.GanchoWhereInput> | null;
    TIMELINE?: Prisma.XOR<Prisma.TimelineNullableScalarRelationFilter, Prisma.TimelineWhereInput> | null;
    EXTERNAL_LINK?: Prisma.XOR<Prisma.External_LinkNullableScalarRelationFilter, Prisma.External_LinkWhereInput> | null;
    PIXEL?: Prisma.XOR<Prisma.PixelNullableScalarRelationFilter, Prisma.PixelWhereInput> | null;
}, "ID" | "AUTO_PLAY_ID" | "THUMB_ID" | "GANCHO_ID" | "TIMELINE_ID" | "EXTERNAL_LINK_ID" | "PIXEL_ID">;
export type FeatureOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    AUTO_PLAY_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    THUMB_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    GANCHO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIMELINE_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    EXTERNAL_LINK_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    PIXEL_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FeatureCountOrderByAggregateInput;
    _max?: Prisma.FeatureMaxOrderByAggregateInput;
    _min?: Prisma.FeatureMinOrderByAggregateInput;
};
export type FeatureScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeatureScalarWhereWithAggregatesInput | Prisma.FeatureScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeatureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeatureScalarWhereWithAggregatesInput | Prisma.FeatureScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Feature"> | string;
    AUTO_PLAY_ID?: Prisma.StringNullableWithAggregatesFilter<"Feature"> | string | null;
    THUMB_ID?: Prisma.StringNullableWithAggregatesFilter<"Feature"> | string | null;
    GANCHO_ID?: Prisma.StringNullableWithAggregatesFilter<"Feature"> | string | null;
    TIMELINE_ID?: Prisma.StringNullableWithAggregatesFilter<"Feature"> | string | null;
    EXTERNAL_LINK_ID?: Prisma.StringNullableWithAggregatesFilter<"Feature"> | string | null;
    PIXEL_ID?: Prisma.StringNullableWithAggregatesFilter<"Feature"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Feature"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Feature"> | Date | string | null;
};
export type FeatureCreateInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutFEATUREInput;
    AUTO_PLAY?: Prisma.Auto_PlayCreateNestedOneWithoutFEATUREInput;
    THUMB?: Prisma.ThumbCreateNestedOneWithoutFEATUREInput;
    GANCHO?: Prisma.GanchoCreateNestedOneWithoutFEATUREInput;
    TIMELINE?: Prisma.TimelineCreateNestedOneWithoutFEATUREInput;
    EXTERNAL_LINK?: Prisma.External_LinkCreateNestedOneWithoutFEATUREInput;
    PIXEL?: Prisma.PixelCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    THUMB_ID?: string | null;
    GANCHO_ID?: string | null;
    TIMELINE_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutFEATURENestedInput;
    AUTO_PLAY?: Prisma.Auto_PlayUpdateOneWithoutFEATURENestedInput;
    THUMB?: Prisma.ThumbUpdateOneWithoutFEATURENestedInput;
    GANCHO?: Prisma.GanchoUpdateOneWithoutFEATURENestedInput;
    TIMELINE?: Prisma.TimelineUpdateOneWithoutFEATURENestedInput;
    EXTERNAL_LINK?: Prisma.External_LinkUpdateOneWithoutFEATURENestedInput;
    PIXEL?: Prisma.PixelUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutFEATURENestedInput;
};
export type FeatureCreateManyInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    THUMB_ID?: string | null;
    GANCHO_ID?: string | null;
    TIMELINE_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type FeatureUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FeatureUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FeatureNullableScalarRelationFilter = {
    is?: Prisma.FeatureWhereInput | null;
    isNot?: Prisma.FeatureWhereInput | null;
};
export type FeatureCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    AUTO_PLAY_ID?: Prisma.SortOrder;
    THUMB_ID?: Prisma.SortOrder;
    GANCHO_ID?: Prisma.SortOrder;
    TIMELINE_ID?: Prisma.SortOrder;
    EXTERNAL_LINK_ID?: Prisma.SortOrder;
    PIXEL_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type FeatureMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    AUTO_PLAY_ID?: Prisma.SortOrder;
    THUMB_ID?: Prisma.SortOrder;
    GANCHO_ID?: Prisma.SortOrder;
    TIMELINE_ID?: Prisma.SortOrder;
    EXTERNAL_LINK_ID?: Prisma.SortOrder;
    PIXEL_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type FeatureMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    AUTO_PLAY_ID?: Prisma.SortOrder;
    THUMB_ID?: Prisma.SortOrder;
    GANCHO_ID?: Prisma.SortOrder;
    TIMELINE_ID?: Prisma.SortOrder;
    EXTERNAL_LINK_ID?: Prisma.SortOrder;
    PIXEL_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type FeatureCreateNestedOneWithoutCAMPAIGNInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutCAMPAIGNInput, Prisma.FeatureUncheckedCreateWithoutCAMPAIGNInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutCAMPAIGNInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneWithoutCAMPAIGNNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutCAMPAIGNInput, Prisma.FeatureUncheckedCreateWithoutCAMPAIGNInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutCAMPAIGNInput;
    upsert?: Prisma.FeatureUpsertWithoutCAMPAIGNInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutCAMPAIGNInput, Prisma.FeatureUpdateWithoutCAMPAIGNInput>, Prisma.FeatureUncheckedUpdateWithoutCAMPAIGNInput>;
};
export type FeatureCreateNestedOneWithoutAUTO_PLAYInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedCreateWithoutAUTO_PLAYInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutAUTO_PLAYInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUncheckedCreateNestedOneWithoutAUTO_PLAYInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedCreateWithoutAUTO_PLAYInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutAUTO_PLAYInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneWithoutAUTO_PLAYNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedCreateWithoutAUTO_PLAYInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutAUTO_PLAYInput;
    upsert?: Prisma.FeatureUpsertWithoutAUTO_PLAYInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutAUTO_PLAYInput, Prisma.FeatureUpdateWithoutAUTO_PLAYInput>, Prisma.FeatureUncheckedUpdateWithoutAUTO_PLAYInput>;
};
export type FeatureUncheckedUpdateOneWithoutAUTO_PLAYNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedCreateWithoutAUTO_PLAYInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutAUTO_PLAYInput;
    upsert?: Prisma.FeatureUpsertWithoutAUTO_PLAYInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutAUTO_PLAYInput, Prisma.FeatureUpdateWithoutAUTO_PLAYInput>, Prisma.FeatureUncheckedUpdateWithoutAUTO_PLAYInput>;
};
export type FeatureCreateNestedOneWithoutTHUMBInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTHUMBInput, Prisma.FeatureUncheckedCreateWithoutTHUMBInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTHUMBInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUncheckedCreateNestedOneWithoutTHUMBInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTHUMBInput, Prisma.FeatureUncheckedCreateWithoutTHUMBInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTHUMBInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneWithoutTHUMBNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTHUMBInput, Prisma.FeatureUncheckedCreateWithoutTHUMBInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTHUMBInput;
    upsert?: Prisma.FeatureUpsertWithoutTHUMBInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutTHUMBInput, Prisma.FeatureUpdateWithoutTHUMBInput>, Prisma.FeatureUncheckedUpdateWithoutTHUMBInput>;
};
export type FeatureUncheckedUpdateOneWithoutTHUMBNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTHUMBInput, Prisma.FeatureUncheckedCreateWithoutTHUMBInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTHUMBInput;
    upsert?: Prisma.FeatureUpsertWithoutTHUMBInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutTHUMBInput, Prisma.FeatureUpdateWithoutTHUMBInput>, Prisma.FeatureUncheckedUpdateWithoutTHUMBInput>;
};
export type FeatureCreateNestedOneWithoutGANCHOInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGANCHOInput, Prisma.FeatureUncheckedCreateWithoutGANCHOInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGANCHOInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUncheckedCreateNestedOneWithoutGANCHOInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGANCHOInput, Prisma.FeatureUncheckedCreateWithoutGANCHOInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGANCHOInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneWithoutGANCHONestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGANCHOInput, Prisma.FeatureUncheckedCreateWithoutGANCHOInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGANCHOInput;
    upsert?: Prisma.FeatureUpsertWithoutGANCHOInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutGANCHOInput, Prisma.FeatureUpdateWithoutGANCHOInput>, Prisma.FeatureUncheckedUpdateWithoutGANCHOInput>;
};
export type FeatureUncheckedUpdateOneWithoutGANCHONestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGANCHOInput, Prisma.FeatureUncheckedCreateWithoutGANCHOInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGANCHOInput;
    upsert?: Prisma.FeatureUpsertWithoutGANCHOInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutGANCHOInput, Prisma.FeatureUpdateWithoutGANCHOInput>, Prisma.FeatureUncheckedUpdateWithoutGANCHOInput>;
};
export type FeatureCreateNestedOneWithoutTIMELINEInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTIMELINEInput, Prisma.FeatureUncheckedCreateWithoutTIMELINEInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTIMELINEInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUncheckedCreateNestedOneWithoutTIMELINEInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTIMELINEInput, Prisma.FeatureUncheckedCreateWithoutTIMELINEInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTIMELINEInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneWithoutTIMELINENestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTIMELINEInput, Prisma.FeatureUncheckedCreateWithoutTIMELINEInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTIMELINEInput;
    upsert?: Prisma.FeatureUpsertWithoutTIMELINEInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutTIMELINEInput, Prisma.FeatureUpdateWithoutTIMELINEInput>, Prisma.FeatureUncheckedUpdateWithoutTIMELINEInput>;
};
export type FeatureUncheckedUpdateOneWithoutTIMELINENestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutTIMELINEInput, Prisma.FeatureUncheckedCreateWithoutTIMELINEInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutTIMELINEInput;
    upsert?: Prisma.FeatureUpsertWithoutTIMELINEInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutTIMELINEInput, Prisma.FeatureUpdateWithoutTIMELINEInput>, Prisma.FeatureUncheckedUpdateWithoutTIMELINEInput>;
};
export type FeatureCreateNestedOneWithoutEXTERNAL_LINKInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedCreateWithoutEXTERNAL_LINKInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutEXTERNAL_LINKInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUncheckedCreateNestedOneWithoutEXTERNAL_LINKInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedCreateWithoutEXTERNAL_LINKInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutEXTERNAL_LINKInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneWithoutEXTERNAL_LINKNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedCreateWithoutEXTERNAL_LINKInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutEXTERNAL_LINKInput;
    upsert?: Prisma.FeatureUpsertWithoutEXTERNAL_LINKInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutEXTERNAL_LINKInput, Prisma.FeatureUpdateWithoutEXTERNAL_LINKInput>, Prisma.FeatureUncheckedUpdateWithoutEXTERNAL_LINKInput>;
};
export type FeatureUncheckedUpdateOneWithoutEXTERNAL_LINKNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedCreateWithoutEXTERNAL_LINKInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutEXTERNAL_LINKInput;
    upsert?: Prisma.FeatureUpsertWithoutEXTERNAL_LINKInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutEXTERNAL_LINKInput, Prisma.FeatureUpdateWithoutEXTERNAL_LINKInput>, Prisma.FeatureUncheckedUpdateWithoutEXTERNAL_LINKInput>;
};
export type FeatureCreateNestedOneWithoutPIXELInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutPIXELInput, Prisma.FeatureUncheckedCreateWithoutPIXELInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutPIXELInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUncheckedCreateNestedOneWithoutPIXELInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutPIXELInput, Prisma.FeatureUncheckedCreateWithoutPIXELInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutPIXELInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneWithoutPIXELNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutPIXELInput, Prisma.FeatureUncheckedCreateWithoutPIXELInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutPIXELInput;
    upsert?: Prisma.FeatureUpsertWithoutPIXELInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutPIXELInput, Prisma.FeatureUpdateWithoutPIXELInput>, Prisma.FeatureUncheckedUpdateWithoutPIXELInput>;
};
export type FeatureUncheckedUpdateOneWithoutPIXELNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutPIXELInput, Prisma.FeatureUncheckedCreateWithoutPIXELInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutPIXELInput;
    upsert?: Prisma.FeatureUpsertWithoutPIXELInput;
    disconnect?: Prisma.FeatureWhereInput | boolean;
    delete?: Prisma.FeatureWhereInput | boolean;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutPIXELInput, Prisma.FeatureUpdateWithoutPIXELInput>, Prisma.FeatureUncheckedUpdateWithoutPIXELInput>;
};
export type FeatureCreateWithoutCAMPAIGNInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    AUTO_PLAY?: Prisma.Auto_PlayCreateNestedOneWithoutFEATUREInput;
    THUMB?: Prisma.ThumbCreateNestedOneWithoutFEATUREInput;
    GANCHO?: Prisma.GanchoCreateNestedOneWithoutFEATUREInput;
    TIMELINE?: Prisma.TimelineCreateNestedOneWithoutFEATUREInput;
    EXTERNAL_LINK?: Prisma.External_LinkCreateNestedOneWithoutFEATUREInput;
    PIXEL?: Prisma.PixelCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateWithoutCAMPAIGNInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    THUMB_ID?: string | null;
    GANCHO_ID?: string | null;
    TIMELINE_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type FeatureCreateOrConnectWithoutCAMPAIGNInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutCAMPAIGNInput, Prisma.FeatureUncheckedCreateWithoutCAMPAIGNInput>;
};
export type FeatureUpsertWithoutCAMPAIGNInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutCAMPAIGNInput, Prisma.FeatureUncheckedUpdateWithoutCAMPAIGNInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutCAMPAIGNInput, Prisma.FeatureUncheckedCreateWithoutCAMPAIGNInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutCAMPAIGNInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutCAMPAIGNInput, Prisma.FeatureUncheckedUpdateWithoutCAMPAIGNInput>;
};
export type FeatureUpdateWithoutCAMPAIGNInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    AUTO_PLAY?: Prisma.Auto_PlayUpdateOneWithoutFEATURENestedInput;
    THUMB?: Prisma.ThumbUpdateOneWithoutFEATURENestedInput;
    GANCHO?: Prisma.GanchoUpdateOneWithoutFEATURENestedInput;
    TIMELINE?: Prisma.TimelineUpdateOneWithoutFEATURENestedInput;
    EXTERNAL_LINK?: Prisma.External_LinkUpdateOneWithoutFEATURENestedInput;
    PIXEL?: Prisma.PixelUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateWithoutCAMPAIGNInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FeatureCreateWithoutAUTO_PLAYInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutFEATUREInput;
    THUMB?: Prisma.ThumbCreateNestedOneWithoutFEATUREInput;
    GANCHO?: Prisma.GanchoCreateNestedOneWithoutFEATUREInput;
    TIMELINE?: Prisma.TimelineCreateNestedOneWithoutFEATUREInput;
    EXTERNAL_LINK?: Prisma.External_LinkCreateNestedOneWithoutFEATUREInput;
    PIXEL?: Prisma.PixelCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateWithoutAUTO_PLAYInput = {
    ID?: string;
    THUMB_ID?: string | null;
    GANCHO_ID?: string | null;
    TIMELINE_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutFEATUREInput;
};
export type FeatureCreateOrConnectWithoutAUTO_PLAYInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedCreateWithoutAUTO_PLAYInput>;
};
export type FeatureUpsertWithoutAUTO_PLAYInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedUpdateWithoutAUTO_PLAYInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedCreateWithoutAUTO_PLAYInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutAUTO_PLAYInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutAUTO_PLAYInput, Prisma.FeatureUncheckedUpdateWithoutAUTO_PLAYInput>;
};
export type FeatureUpdateWithoutAUTO_PLAYInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutFEATURENestedInput;
    THUMB?: Prisma.ThumbUpdateOneWithoutFEATURENestedInput;
    GANCHO?: Prisma.GanchoUpdateOneWithoutFEATURENestedInput;
    TIMELINE?: Prisma.TimelineUpdateOneWithoutFEATURENestedInput;
    EXTERNAL_LINK?: Prisma.External_LinkUpdateOneWithoutFEATURENestedInput;
    PIXEL?: Prisma.PixelUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateWithoutAUTO_PLAYInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutFEATURENestedInput;
};
export type FeatureCreateWithoutTHUMBInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutFEATUREInput;
    AUTO_PLAY?: Prisma.Auto_PlayCreateNestedOneWithoutFEATUREInput;
    GANCHO?: Prisma.GanchoCreateNestedOneWithoutFEATUREInput;
    TIMELINE?: Prisma.TimelineCreateNestedOneWithoutFEATUREInput;
    EXTERNAL_LINK?: Prisma.External_LinkCreateNestedOneWithoutFEATUREInput;
    PIXEL?: Prisma.PixelCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateWithoutTHUMBInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    GANCHO_ID?: string | null;
    TIMELINE_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutFEATUREInput;
};
export type FeatureCreateOrConnectWithoutTHUMBInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutTHUMBInput, Prisma.FeatureUncheckedCreateWithoutTHUMBInput>;
};
export type FeatureUpsertWithoutTHUMBInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutTHUMBInput, Prisma.FeatureUncheckedUpdateWithoutTHUMBInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutTHUMBInput, Prisma.FeatureUncheckedCreateWithoutTHUMBInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutTHUMBInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutTHUMBInput, Prisma.FeatureUncheckedUpdateWithoutTHUMBInput>;
};
export type FeatureUpdateWithoutTHUMBInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutFEATURENestedInput;
    AUTO_PLAY?: Prisma.Auto_PlayUpdateOneWithoutFEATURENestedInput;
    GANCHO?: Prisma.GanchoUpdateOneWithoutFEATURENestedInput;
    TIMELINE?: Prisma.TimelineUpdateOneWithoutFEATURENestedInput;
    EXTERNAL_LINK?: Prisma.External_LinkUpdateOneWithoutFEATURENestedInput;
    PIXEL?: Prisma.PixelUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateWithoutTHUMBInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutFEATURENestedInput;
};
export type FeatureCreateWithoutGANCHOInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutFEATUREInput;
    AUTO_PLAY?: Prisma.Auto_PlayCreateNestedOneWithoutFEATUREInput;
    THUMB?: Prisma.ThumbCreateNestedOneWithoutFEATUREInput;
    TIMELINE?: Prisma.TimelineCreateNestedOneWithoutFEATUREInput;
    EXTERNAL_LINK?: Prisma.External_LinkCreateNestedOneWithoutFEATUREInput;
    PIXEL?: Prisma.PixelCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateWithoutGANCHOInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    THUMB_ID?: string | null;
    TIMELINE_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutFEATUREInput;
};
export type FeatureCreateOrConnectWithoutGANCHOInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutGANCHOInput, Prisma.FeatureUncheckedCreateWithoutGANCHOInput>;
};
export type FeatureUpsertWithoutGANCHOInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutGANCHOInput, Prisma.FeatureUncheckedUpdateWithoutGANCHOInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutGANCHOInput, Prisma.FeatureUncheckedCreateWithoutGANCHOInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutGANCHOInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutGANCHOInput, Prisma.FeatureUncheckedUpdateWithoutGANCHOInput>;
};
export type FeatureUpdateWithoutGANCHOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutFEATURENestedInput;
    AUTO_PLAY?: Prisma.Auto_PlayUpdateOneWithoutFEATURENestedInput;
    THUMB?: Prisma.ThumbUpdateOneWithoutFEATURENestedInput;
    TIMELINE?: Prisma.TimelineUpdateOneWithoutFEATURENestedInput;
    EXTERNAL_LINK?: Prisma.External_LinkUpdateOneWithoutFEATURENestedInput;
    PIXEL?: Prisma.PixelUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateWithoutGANCHOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutFEATURENestedInput;
};
export type FeatureCreateWithoutTIMELINEInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutFEATUREInput;
    AUTO_PLAY?: Prisma.Auto_PlayCreateNestedOneWithoutFEATUREInput;
    THUMB?: Prisma.ThumbCreateNestedOneWithoutFEATUREInput;
    GANCHO?: Prisma.GanchoCreateNestedOneWithoutFEATUREInput;
    EXTERNAL_LINK?: Prisma.External_LinkCreateNestedOneWithoutFEATUREInput;
    PIXEL?: Prisma.PixelCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateWithoutTIMELINEInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    THUMB_ID?: string | null;
    GANCHO_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutFEATUREInput;
};
export type FeatureCreateOrConnectWithoutTIMELINEInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutTIMELINEInput, Prisma.FeatureUncheckedCreateWithoutTIMELINEInput>;
};
export type FeatureUpsertWithoutTIMELINEInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutTIMELINEInput, Prisma.FeatureUncheckedUpdateWithoutTIMELINEInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutTIMELINEInput, Prisma.FeatureUncheckedCreateWithoutTIMELINEInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutTIMELINEInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutTIMELINEInput, Prisma.FeatureUncheckedUpdateWithoutTIMELINEInput>;
};
export type FeatureUpdateWithoutTIMELINEInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutFEATURENestedInput;
    AUTO_PLAY?: Prisma.Auto_PlayUpdateOneWithoutFEATURENestedInput;
    THUMB?: Prisma.ThumbUpdateOneWithoutFEATURENestedInput;
    GANCHO?: Prisma.GanchoUpdateOneWithoutFEATURENestedInput;
    EXTERNAL_LINK?: Prisma.External_LinkUpdateOneWithoutFEATURENestedInput;
    PIXEL?: Prisma.PixelUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateWithoutTIMELINEInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutFEATURENestedInput;
};
export type FeatureCreateWithoutEXTERNAL_LINKInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutFEATUREInput;
    AUTO_PLAY?: Prisma.Auto_PlayCreateNestedOneWithoutFEATUREInput;
    THUMB?: Prisma.ThumbCreateNestedOneWithoutFEATUREInput;
    GANCHO?: Prisma.GanchoCreateNestedOneWithoutFEATUREInput;
    TIMELINE?: Prisma.TimelineCreateNestedOneWithoutFEATUREInput;
    PIXEL?: Prisma.PixelCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateWithoutEXTERNAL_LINKInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    THUMB_ID?: string | null;
    GANCHO_ID?: string | null;
    TIMELINE_ID?: string | null;
    PIXEL_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutFEATUREInput;
};
export type FeatureCreateOrConnectWithoutEXTERNAL_LINKInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedCreateWithoutEXTERNAL_LINKInput>;
};
export type FeatureUpsertWithoutEXTERNAL_LINKInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedUpdateWithoutEXTERNAL_LINKInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedCreateWithoutEXTERNAL_LINKInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutEXTERNAL_LINKInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutEXTERNAL_LINKInput, Prisma.FeatureUncheckedUpdateWithoutEXTERNAL_LINKInput>;
};
export type FeatureUpdateWithoutEXTERNAL_LINKInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutFEATURENestedInput;
    AUTO_PLAY?: Prisma.Auto_PlayUpdateOneWithoutFEATURENestedInput;
    THUMB?: Prisma.ThumbUpdateOneWithoutFEATURENestedInput;
    GANCHO?: Prisma.GanchoUpdateOneWithoutFEATURENestedInput;
    TIMELINE?: Prisma.TimelineUpdateOneWithoutFEATURENestedInput;
    PIXEL?: Prisma.PixelUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateWithoutEXTERNAL_LINKInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PIXEL_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutFEATURENestedInput;
};
export type FeatureCreateWithoutPIXELInput = {
    ID?: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignCreateNestedOneWithoutFEATUREInput;
    AUTO_PLAY?: Prisma.Auto_PlayCreateNestedOneWithoutFEATUREInput;
    THUMB?: Prisma.ThumbCreateNestedOneWithoutFEATUREInput;
    GANCHO?: Prisma.GanchoCreateNestedOneWithoutFEATUREInput;
    TIMELINE?: Prisma.TimelineCreateNestedOneWithoutFEATUREInput;
    EXTERNAL_LINK?: Prisma.External_LinkCreateNestedOneWithoutFEATUREInput;
};
export type FeatureUncheckedCreateWithoutPIXELInput = {
    ID?: string;
    AUTO_PLAY_ID?: string | null;
    THUMB_ID?: string | null;
    GANCHO_ID?: string | null;
    TIMELINE_ID?: string | null;
    EXTERNAL_LINK_ID?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedCreateNestedOneWithoutFEATUREInput;
};
export type FeatureCreateOrConnectWithoutPIXELInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutPIXELInput, Prisma.FeatureUncheckedCreateWithoutPIXELInput>;
};
export type FeatureUpsertWithoutPIXELInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutPIXELInput, Prisma.FeatureUncheckedUpdateWithoutPIXELInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutPIXELInput, Prisma.FeatureUncheckedCreateWithoutPIXELInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutPIXELInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutPIXELInput, Prisma.FeatureUncheckedUpdateWithoutPIXELInput>;
};
export type FeatureUpdateWithoutPIXELInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUpdateOneWithoutFEATURENestedInput;
    AUTO_PLAY?: Prisma.Auto_PlayUpdateOneWithoutFEATURENestedInput;
    THUMB?: Prisma.ThumbUpdateOneWithoutFEATURENestedInput;
    GANCHO?: Prisma.GanchoUpdateOneWithoutFEATURENestedInput;
    TIMELINE?: Prisma.TimelineUpdateOneWithoutFEATURENestedInput;
    EXTERNAL_LINK?: Prisma.External_LinkUpdateOneWithoutFEATURENestedInput;
};
export type FeatureUncheckedUpdateWithoutPIXELInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    AUTO_PLAY_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    THUMB_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    GANCHO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    TIMELINE_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EXTERNAL_LINK_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    CAMPAIGN?: Prisma.CampaignUncheckedUpdateOneWithoutFEATURENestedInput;
};
export type FeatureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    AUTO_PLAY_ID?: boolean;
    THUMB_ID?: boolean;
    GANCHO_ID?: boolean;
    TIMELINE_ID?: boolean;
    EXTERNAL_LINK_ID?: boolean;
    PIXEL_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    CAMPAIGN?: boolean | Prisma.Feature$CAMPAIGNArgs<ExtArgs>;
    AUTO_PLAY?: boolean | Prisma.Feature$AUTO_PLAYArgs<ExtArgs>;
    THUMB?: boolean | Prisma.Feature$THUMBArgs<ExtArgs>;
    GANCHO?: boolean | Prisma.Feature$GANCHOArgs<ExtArgs>;
    TIMELINE?: boolean | Prisma.Feature$TIMELINEArgs<ExtArgs>;
    EXTERNAL_LINK?: boolean | Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs>;
    PIXEL?: boolean | Prisma.Feature$PIXELArgs<ExtArgs>;
}, ExtArgs["result"]["feature"]>;
export type FeatureSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    AUTO_PLAY_ID?: boolean;
    THUMB_ID?: boolean;
    GANCHO_ID?: boolean;
    TIMELINE_ID?: boolean;
    EXTERNAL_LINK_ID?: boolean;
    PIXEL_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    AUTO_PLAY?: boolean | Prisma.Feature$AUTO_PLAYArgs<ExtArgs>;
    THUMB?: boolean | Prisma.Feature$THUMBArgs<ExtArgs>;
    GANCHO?: boolean | Prisma.Feature$GANCHOArgs<ExtArgs>;
    TIMELINE?: boolean | Prisma.Feature$TIMELINEArgs<ExtArgs>;
    EXTERNAL_LINK?: boolean | Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs>;
    PIXEL?: boolean | Prisma.Feature$PIXELArgs<ExtArgs>;
}, ExtArgs["result"]["feature"]>;
export type FeatureSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    AUTO_PLAY_ID?: boolean;
    THUMB_ID?: boolean;
    GANCHO_ID?: boolean;
    TIMELINE_ID?: boolean;
    EXTERNAL_LINK_ID?: boolean;
    PIXEL_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    AUTO_PLAY?: boolean | Prisma.Feature$AUTO_PLAYArgs<ExtArgs>;
    THUMB?: boolean | Prisma.Feature$THUMBArgs<ExtArgs>;
    GANCHO?: boolean | Prisma.Feature$GANCHOArgs<ExtArgs>;
    TIMELINE?: boolean | Prisma.Feature$TIMELINEArgs<ExtArgs>;
    EXTERNAL_LINK?: boolean | Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs>;
    PIXEL?: boolean | Prisma.Feature$PIXELArgs<ExtArgs>;
}, ExtArgs["result"]["feature"]>;
export type FeatureSelectScalar = {
    ID?: boolean;
    AUTO_PLAY_ID?: boolean;
    THUMB_ID?: boolean;
    GANCHO_ID?: boolean;
    TIMELINE_ID?: boolean;
    EXTERNAL_LINK_ID?: boolean;
    PIXEL_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type FeatureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "AUTO_PLAY_ID" | "THUMB_ID" | "GANCHO_ID" | "TIMELINE_ID" | "EXTERNAL_LINK_ID" | "PIXEL_ID" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["feature"]>;
export type FeatureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CAMPAIGN?: boolean | Prisma.Feature$CAMPAIGNArgs<ExtArgs>;
    AUTO_PLAY?: boolean | Prisma.Feature$AUTO_PLAYArgs<ExtArgs>;
    THUMB?: boolean | Prisma.Feature$THUMBArgs<ExtArgs>;
    GANCHO?: boolean | Prisma.Feature$GANCHOArgs<ExtArgs>;
    TIMELINE?: boolean | Prisma.Feature$TIMELINEArgs<ExtArgs>;
    EXTERNAL_LINK?: boolean | Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs>;
    PIXEL?: boolean | Prisma.Feature$PIXELArgs<ExtArgs>;
};
export type FeatureIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AUTO_PLAY?: boolean | Prisma.Feature$AUTO_PLAYArgs<ExtArgs>;
    THUMB?: boolean | Prisma.Feature$THUMBArgs<ExtArgs>;
    GANCHO?: boolean | Prisma.Feature$GANCHOArgs<ExtArgs>;
    TIMELINE?: boolean | Prisma.Feature$TIMELINEArgs<ExtArgs>;
    EXTERNAL_LINK?: boolean | Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs>;
    PIXEL?: boolean | Prisma.Feature$PIXELArgs<ExtArgs>;
};
export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AUTO_PLAY?: boolean | Prisma.Feature$AUTO_PLAYArgs<ExtArgs>;
    THUMB?: boolean | Prisma.Feature$THUMBArgs<ExtArgs>;
    GANCHO?: boolean | Prisma.Feature$GANCHOArgs<ExtArgs>;
    TIMELINE?: boolean | Prisma.Feature$TIMELINEArgs<ExtArgs>;
    EXTERNAL_LINK?: boolean | Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs>;
    PIXEL?: boolean | Prisma.Feature$PIXELArgs<ExtArgs>;
};
export type $FeaturePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Feature";
    objects: {
        CAMPAIGN: Prisma.$CampaignPayload<ExtArgs> | null;
        AUTO_PLAY: Prisma.$Auto_PlayPayload<ExtArgs> | null;
        THUMB: Prisma.$ThumbPayload<ExtArgs> | null;
        GANCHO: Prisma.$GanchoPayload<ExtArgs> | null;
        TIMELINE: Prisma.$TimelinePayload<ExtArgs> | null;
        EXTERNAL_LINK: Prisma.$External_LinkPayload<ExtArgs> | null;
        PIXEL: Prisma.$PixelPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["feature"]>;
    composites: {};
};
export type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeaturePayload, S>;
export type FeatureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeatureCountAggregateInputType | true;
};
export interface FeatureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Feature'];
        meta: {
            name: 'Feature';
        };
    };
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: Prisma.SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: Prisma.SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     *
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const featureWithIDOnly = await prisma.feature.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends FeatureFindManyArgs>(args?: Prisma.SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     *
     */
    create<T extends FeatureCreateArgs>(args: Prisma.SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeatureCreateManyArgs>(args?: Prisma.SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Features and only return the `ID`
     * const featureWithIDOnly = await prisma.feature.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     *
     */
    delete<T extends FeatureDeleteArgs>(args: Prisma.SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeatureUpdateArgs>(args: Prisma.SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: Prisma.SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Features and only return the `ID`
     * const featureWithIDOnly = await prisma.feature.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: Prisma.SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(args?: Prisma.Subset<T, FeatureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeatureCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureAggregateArgs>(args: Prisma.Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>;
    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FeatureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeatureGroupByArgs['orderBy'];
    } : {
        orderBy?: FeatureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Feature model
     */
    readonly fields: FeatureFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Feature.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CAMPAIGN<T extends Prisma.Feature$CAMPAIGNArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$CAMPAIGNArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    AUTO_PLAY<T extends Prisma.Feature$AUTO_PLAYArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$AUTO_PLAYArgs<ExtArgs>>): Prisma.Prisma__Auto_PlayClient<runtime.Types.Result.GetResult<Prisma.$Auto_PlayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    THUMB<T extends Prisma.Feature$THUMBArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$THUMBArgs<ExtArgs>>): Prisma.Prisma__ThumbClient<runtime.Types.Result.GetResult<Prisma.$ThumbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    GANCHO<T extends Prisma.Feature$GANCHOArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$GANCHOArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    TIMELINE<T extends Prisma.Feature$TIMELINEArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$TIMELINEArgs<ExtArgs>>): Prisma.Prisma__TimelineClient<runtime.Types.Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    EXTERNAL_LINK<T extends Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$EXTERNAL_LINKArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    PIXEL<T extends Prisma.Feature$PIXELArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$PIXELArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Feature model
 */
export interface FeatureFieldRefs {
    readonly ID: Prisma.FieldRef<"Feature", 'String'>;
    readonly AUTO_PLAY_ID: Prisma.FieldRef<"Feature", 'String'>;
    readonly THUMB_ID: Prisma.FieldRef<"Feature", 'String'>;
    readonly GANCHO_ID: Prisma.FieldRef<"Feature", 'String'>;
    readonly TIMELINE_ID: Prisma.FieldRef<"Feature", 'String'>;
    readonly EXTERNAL_LINK_ID: Prisma.FieldRef<"Feature", 'String'>;
    readonly PIXEL_ID: Prisma.FieldRef<"Feature", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Feature", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Feature", 'DateTime'>;
}
/**
 * Feature findUnique
 */
export type FeatureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Feature to fetch.
     */
    where: Prisma.FeatureWhereUniqueInput;
};
/**
 * Feature findUniqueOrThrow
 */
export type FeatureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Feature to fetch.
     */
    where: Prisma.FeatureWhereUniqueInput;
};
/**
 * Feature findFirst
 */
export type FeatureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Feature to fetch.
     */
    where?: Prisma.FeatureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Features to fetch.
     */
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Features.
     */
    cursor?: Prisma.FeatureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Features.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Features.
     */
    distinct?: Prisma.FeatureScalarFieldEnum | Prisma.FeatureScalarFieldEnum[];
};
/**
 * Feature findFirstOrThrow
 */
export type FeatureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Feature to fetch.
     */
    where?: Prisma.FeatureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Features to fetch.
     */
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Features.
     */
    cursor?: Prisma.FeatureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Features.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Features.
     */
    distinct?: Prisma.FeatureScalarFieldEnum | Prisma.FeatureScalarFieldEnum[];
};
/**
 * Feature findMany
 */
export type FeatureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Features to fetch.
     */
    where?: Prisma.FeatureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Features to fetch.
     */
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Features.
     */
    cursor?: Prisma.FeatureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Features.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Features.
     */
    distinct?: Prisma.FeatureScalarFieldEnum | Prisma.FeatureScalarFieldEnum[];
};
/**
 * Feature create
 */
export type FeatureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Feature.
     */
    data?: Prisma.XOR<Prisma.FeatureCreateInput, Prisma.FeatureUncheckedCreateInput>;
};
/**
 * Feature createMany
 */
export type FeatureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: Prisma.FeatureCreateManyInput | Prisma.FeatureCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Feature createManyAndReturn
 */
export type FeatureCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: Prisma.FeatureSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Feature
     */
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    /**
     * The data used to create many Features.
     */
    data: Prisma.FeatureCreateManyInput | Prisma.FeatureCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeatureIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Feature update
 */
export type FeatureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Feature.
     */
    data: Prisma.XOR<Prisma.FeatureUpdateInput, Prisma.FeatureUncheckedUpdateInput>;
    /**
     * Choose, which Feature to update.
     */
    where: Prisma.FeatureWhereUniqueInput;
};
/**
 * Feature updateMany
 */
export type FeatureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: Prisma.XOR<Prisma.FeatureUpdateManyMutationInput, Prisma.FeatureUncheckedUpdateManyInput>;
    /**
     * Filter which Features to update
     */
    where?: Prisma.FeatureWhereInput;
    /**
     * Limit how many Features to update.
     */
    limit?: number;
};
/**
 * Feature updateManyAndReturn
 */
export type FeatureUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: Prisma.FeatureSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Feature
     */
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    /**
     * The data used to update Features.
     */
    data: Prisma.XOR<Prisma.FeatureUpdateManyMutationInput, Prisma.FeatureUncheckedUpdateManyInput>;
    /**
     * Filter which Features to update
     */
    where?: Prisma.FeatureWhereInput;
    /**
     * Limit how many Features to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeatureIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Feature upsert
 */
export type FeatureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: Prisma.FeatureWhereUniqueInput;
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: Prisma.XOR<Prisma.FeatureCreateInput, Prisma.FeatureUncheckedCreateInput>;
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FeatureUpdateInput, Prisma.FeatureUncheckedUpdateInput>;
};
/**
 * Feature delete
 */
export type FeatureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Feature to delete.
     */
    where: Prisma.FeatureWhereUniqueInput;
};
/**
 * Feature deleteMany
 */
export type FeatureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: Prisma.FeatureWhereInput;
    /**
     * Limit how many Features to delete.
     */
    limit?: number;
};
/**
 * Feature.CAMPAIGN
 */
export type Feature$CAMPAIGNArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Feature.AUTO_PLAY
 */
export type Feature$AUTO_PLAYArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Auto_PlayWhereInput;
};
/**
 * Feature.THUMB
 */
export type Feature$THUMBArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumb
     */
    select?: Prisma.ThumbSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Thumb
     */
    omit?: Prisma.ThumbOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ThumbInclude<ExtArgs> | null;
    where?: Prisma.ThumbWhereInput;
};
/**
 * Feature.GANCHO
 */
export type Feature$GANCHOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gancho
     */
    select?: Prisma.GanchoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gancho
     */
    omit?: Prisma.GanchoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GanchoInclude<ExtArgs> | null;
    where?: Prisma.GanchoWhereInput;
};
/**
 * Feature.TIMELINE
 */
export type Feature$TIMELINEArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: Prisma.TimelineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Timeline
     */
    omit?: Prisma.TimelineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineInclude<ExtArgs> | null;
    where?: Prisma.TimelineWhereInput;
};
/**
 * Feature.EXTERNAL_LINK
 */
export type Feature$EXTERNAL_LINKArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the External_Link
     */
    select?: Prisma.External_LinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the External_Link
     */
    omit?: Prisma.External_LinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.External_LinkInclude<ExtArgs> | null;
    where?: Prisma.External_LinkWhereInput;
};
/**
 * Feature.PIXEL
 */
export type Feature$PIXELArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixel
     */
    select?: Prisma.PixelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pixel
     */
    omit?: Prisma.PixelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PixelInclude<ExtArgs> | null;
    where?: Prisma.PixelWhereInput;
};
/**
 * Feature without action
 */
export type FeatureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Feature.d.ts.map
import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model External_Link
 *
 */
export type External_LinkModel = runtime.Types.Result.DefaultSelection<Prisma.$External_LinkPayload>;
export type AggregateExternal_Link = {
    _count: External_LinkCountAggregateOutputType | null;
    _avg: External_LinkAvgAggregateOutputType | null;
    _sum: External_LinkSumAggregateOutputType | null;
    _min: External_LinkMinAggregateOutputType | null;
    _max: External_LinkMaxAggregateOutputType | null;
};
export type External_LinkAvgAggregateOutputType = {
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
};
export type External_LinkSumAggregateOutputType = {
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
};
export type External_LinkMinAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    TEXT: string | null;
    STYLE_TEXT: string | null;
    BUTTON_TEXT: string | null;
    BUTTON_STYLE: string | null;
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
    LINK_URL: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type External_LinkMaxAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    TEXT: string | null;
    STYLE_TEXT: string | null;
    BUTTON_TEXT: string | null;
    BUTTON_STYLE: string | null;
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
    LINK_URL: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type External_LinkCountAggregateOutputType = {
    ID: number;
    ATIVE: number;
    TEXT: number;
    STYLE_TEXT: number;
    BUTTON_TEXT: number;
    BUTTON_STYLE: number;
    BUTTON_CLICK_CAMPAING: number;
    BUTTON_CLICK_TEST_AB: number;
    LINK_URL: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type External_LinkAvgAggregateInputType = {
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
};
export type External_LinkSumAggregateInputType = {
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
};
export type External_LinkMinAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    TEXT?: true;
    STYLE_TEXT?: true;
    BUTTON_TEXT?: true;
    BUTTON_STYLE?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    LINK_URL?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type External_LinkMaxAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    TEXT?: true;
    STYLE_TEXT?: true;
    BUTTON_TEXT?: true;
    BUTTON_STYLE?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    LINK_URL?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type External_LinkCountAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    TEXT?: true;
    STYLE_TEXT?: true;
    BUTTON_TEXT?: true;
    BUTTON_STYLE?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    LINK_URL?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type External_LinkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which External_Link to aggregate.
     */
    where?: Prisma.External_LinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of External_Links to fetch.
     */
    orderBy?: Prisma.External_LinkOrderByWithRelationInput | Prisma.External_LinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.External_LinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` External_Links from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` External_Links.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned External_Links
    **/
    _count?: true | External_LinkCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: External_LinkAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: External_LinkSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: External_LinkMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: External_LinkMaxAggregateInputType;
};
export type GetExternal_LinkAggregateType<T extends External_LinkAggregateArgs> = {
    [P in keyof T & keyof AggregateExternal_Link]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExternal_Link[P]> : Prisma.GetScalarType<T[P], AggregateExternal_Link[P]>;
};
export type External_LinkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.External_LinkWhereInput;
    orderBy?: Prisma.External_LinkOrderByWithAggregationInput | Prisma.External_LinkOrderByWithAggregationInput[];
    by: Prisma.External_LinkScalarFieldEnum[] | Prisma.External_LinkScalarFieldEnum;
    having?: Prisma.External_LinkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: External_LinkCountAggregateInputType | true;
    _avg?: External_LinkAvgAggregateInputType;
    _sum?: External_LinkSumAggregateInputType;
    _min?: External_LinkMinAggregateInputType;
    _max?: External_LinkMaxAggregateInputType;
};
export type External_LinkGroupByOutputType = {
    ID: string;
    ATIVE: boolean;
    TEXT: string | null;
    STYLE_TEXT: string | null;
    BUTTON_TEXT: string | null;
    BUTTON_STYLE: string | null;
    BUTTON_CLICK_CAMPAING: number;
    BUTTON_CLICK_TEST_AB: number;
    LINK_URL: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: External_LinkCountAggregateOutputType | null;
    _avg: External_LinkAvgAggregateOutputType | null;
    _sum: External_LinkSumAggregateOutputType | null;
    _min: External_LinkMinAggregateOutputType | null;
    _max: External_LinkMaxAggregateOutputType | null;
};
type GetExternal_LinkGroupByPayload<T extends External_LinkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<External_LinkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof External_LinkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], External_LinkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], External_LinkGroupByOutputType[P]>;
}>>;
export type External_LinkWhereInput = {
    AND?: Prisma.External_LinkWhereInput | Prisma.External_LinkWhereInput[];
    OR?: Prisma.External_LinkWhereInput[];
    NOT?: Prisma.External_LinkWhereInput | Prisma.External_LinkWhereInput[];
    ID?: Prisma.StringFilter<"External_Link"> | string;
    ATIVE?: Prisma.BoolFilter<"External_Link"> | boolean;
    TEXT?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    STYLE_TEXT?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    BUTTON_TEXT?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    BUTTON_STYLE?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFilter<"External_Link"> | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFilter<"External_Link"> | number;
    LINK_URL?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"External_Link"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"External_Link"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
};
export type External_LinkOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    STYLE_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    LINK_URL?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    FEATURE?: Prisma.FeatureOrderByWithRelationInput;
};
export type External_LinkWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.External_LinkWhereInput | Prisma.External_LinkWhereInput[];
    OR?: Prisma.External_LinkWhereInput[];
    NOT?: Prisma.External_LinkWhereInput | Prisma.External_LinkWhereInput[];
    ATIVE?: Prisma.BoolFilter<"External_Link"> | boolean;
    TEXT?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    STYLE_TEXT?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    BUTTON_TEXT?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    BUTTON_STYLE?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFilter<"External_Link"> | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFilter<"External_Link"> | number;
    LINK_URL?: Prisma.StringNullableFilter<"External_Link"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"External_Link"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"External_Link"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
}, "ID">;
export type External_LinkOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    STYLE_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    LINK_URL?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.External_LinkCountOrderByAggregateInput;
    _avg?: Prisma.External_LinkAvgOrderByAggregateInput;
    _max?: Prisma.External_LinkMaxOrderByAggregateInput;
    _min?: Prisma.External_LinkMinOrderByAggregateInput;
    _sum?: Prisma.External_LinkSumOrderByAggregateInput;
};
export type External_LinkScalarWhereWithAggregatesInput = {
    AND?: Prisma.External_LinkScalarWhereWithAggregatesInput | Prisma.External_LinkScalarWhereWithAggregatesInput[];
    OR?: Prisma.External_LinkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.External_LinkScalarWhereWithAggregatesInput | Prisma.External_LinkScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"External_Link"> | string;
    ATIVE?: Prisma.BoolWithAggregatesFilter<"External_Link"> | boolean;
    TEXT?: Prisma.StringNullableWithAggregatesFilter<"External_Link"> | string | null;
    STYLE_TEXT?: Prisma.StringNullableWithAggregatesFilter<"External_Link"> | string | null;
    BUTTON_TEXT?: Prisma.StringNullableWithAggregatesFilter<"External_Link"> | string | null;
    BUTTON_STYLE?: Prisma.StringNullableWithAggregatesFilter<"External_Link"> | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntWithAggregatesFilter<"External_Link"> | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntWithAggregatesFilter<"External_Link"> | number;
    LINK_URL?: Prisma.StringNullableWithAggregatesFilter<"External_Link"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"External_Link"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"External_Link"> | Date | string | null;
};
export type External_LinkCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    TEXT?: string | null;
    STYLE_TEXT?: string | null;
    BUTTON_TEXT?: string | null;
    BUTTON_STYLE?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    LINK_URL?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutEXTERNAL_LINKInput;
};
export type External_LinkUncheckedCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    TEXT?: string | null;
    STYLE_TEXT?: string | null;
    BUTTON_TEXT?: string | null;
    BUTTON_STYLE?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    LINK_URL?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedCreateNestedOneWithoutEXTERNAL_LINKInput;
};
export type External_LinkUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STYLE_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    LINK_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutEXTERNAL_LINKNestedInput;
};
export type External_LinkUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STYLE_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    LINK_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedUpdateOneWithoutEXTERNAL_LINKNestedInput;
};
export type External_LinkCreateManyInput = {
    ID?: string;
    ATIVE?: boolean;
    TEXT?: string | null;
    STYLE_TEXT?: string | null;
    BUTTON_TEXT?: string | null;
    BUTTON_STYLE?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    LINK_URL?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type External_LinkUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STYLE_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    LINK_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type External_LinkUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STYLE_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    LINK_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type External_LinkNullableScalarRelationFilter = {
    is?: Prisma.External_LinkWhereInput | null;
    isNot?: Prisma.External_LinkWhereInput | null;
};
export type External_LinkCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TEXT?: Prisma.SortOrder;
    STYLE_TEXT?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    LINK_URL?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type External_LinkAvgOrderByAggregateInput = {
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
};
export type External_LinkMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TEXT?: Prisma.SortOrder;
    STYLE_TEXT?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    LINK_URL?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type External_LinkMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TEXT?: Prisma.SortOrder;
    STYLE_TEXT?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    LINK_URL?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type External_LinkSumOrderByAggregateInput = {
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
};
export type External_LinkCreateNestedOneWithoutFEATUREInput = {
    create?: Prisma.XOR<Prisma.External_LinkCreateWithoutFEATUREInput, Prisma.External_LinkUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.External_LinkCreateOrConnectWithoutFEATUREInput;
    connect?: Prisma.External_LinkWhereUniqueInput;
};
export type External_LinkUpdateOneWithoutFEATURENestedInput = {
    create?: Prisma.XOR<Prisma.External_LinkCreateWithoutFEATUREInput, Prisma.External_LinkUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.External_LinkCreateOrConnectWithoutFEATUREInput;
    upsert?: Prisma.External_LinkUpsertWithoutFEATUREInput;
    disconnect?: Prisma.External_LinkWhereInput | boolean;
    delete?: Prisma.External_LinkWhereInput | boolean;
    connect?: Prisma.External_LinkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.External_LinkUpdateToOneWithWhereWithoutFEATUREInput, Prisma.External_LinkUpdateWithoutFEATUREInput>, Prisma.External_LinkUncheckedUpdateWithoutFEATUREInput>;
};
export type External_LinkCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    TEXT?: string | null;
    STYLE_TEXT?: string | null;
    BUTTON_TEXT?: string | null;
    BUTTON_STYLE?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    LINK_URL?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type External_LinkUncheckedCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    TEXT?: string | null;
    STYLE_TEXT?: string | null;
    BUTTON_TEXT?: string | null;
    BUTTON_STYLE?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    LINK_URL?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type External_LinkCreateOrConnectWithoutFEATUREInput = {
    where: Prisma.External_LinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.External_LinkCreateWithoutFEATUREInput, Prisma.External_LinkUncheckedCreateWithoutFEATUREInput>;
};
export type External_LinkUpsertWithoutFEATUREInput = {
    update: Prisma.XOR<Prisma.External_LinkUpdateWithoutFEATUREInput, Prisma.External_LinkUncheckedUpdateWithoutFEATUREInput>;
    create: Prisma.XOR<Prisma.External_LinkCreateWithoutFEATUREInput, Prisma.External_LinkUncheckedCreateWithoutFEATUREInput>;
    where?: Prisma.External_LinkWhereInput;
};
export type External_LinkUpdateToOneWithWhereWithoutFEATUREInput = {
    where?: Prisma.External_LinkWhereInput;
    data: Prisma.XOR<Prisma.External_LinkUpdateWithoutFEATUREInput, Prisma.External_LinkUncheckedUpdateWithoutFEATUREInput>;
};
export type External_LinkUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STYLE_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    LINK_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type External_LinkUncheckedUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STYLE_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    LINK_URL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type External_LinkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    TEXT?: boolean;
    STYLE_TEXT?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    LINK_URL?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FEATURE?: boolean | Prisma.External_Link$FEATUREArgs<ExtArgs>;
}, ExtArgs["result"]["external_Link"]>;
export type External_LinkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    TEXT?: boolean;
    STYLE_TEXT?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    LINK_URL?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["external_Link"]>;
export type External_LinkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    TEXT?: boolean;
    STYLE_TEXT?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    LINK_URL?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["external_Link"]>;
export type External_LinkSelectScalar = {
    ID?: boolean;
    ATIVE?: boolean;
    TEXT?: boolean;
    STYLE_TEXT?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    LINK_URL?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type External_LinkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "ATIVE" | "TEXT" | "STYLE_TEXT" | "BUTTON_TEXT" | "BUTTON_STYLE" | "BUTTON_CLICK_CAMPAING" | "BUTTON_CLICK_TEST_AB" | "LINK_URL" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["external_Link"]>;
export type External_LinkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    FEATURE?: boolean | Prisma.External_Link$FEATUREArgs<ExtArgs>;
};
export type External_LinkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type External_LinkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $External_LinkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "External_Link";
    objects: {
        FEATURE: Prisma.$FeaturePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        ATIVE: boolean;
        TEXT: string | null;
        STYLE_TEXT: string | null;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
        LINK_URL: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["external_Link"]>;
    composites: {};
};
export type External_LinkGetPayload<S extends boolean | null | undefined | External_LinkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$External_LinkPayload, S>;
export type External_LinkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<External_LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: External_LinkCountAggregateInputType | true;
};
export interface External_LinkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['External_Link'];
        meta: {
            name: 'External_Link';
        };
    };
    /**
     * Find zero or one External_Link that matches the filter.
     * @param {External_LinkFindUniqueArgs} args - Arguments to find a External_Link
     * @example
     * // Get one External_Link
     * const external_Link = await prisma.external_Link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends External_LinkFindUniqueArgs>(args: Prisma.SelectSubset<T, External_LinkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one External_Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {External_LinkFindUniqueOrThrowArgs} args - Arguments to find a External_Link
     * @example
     * // Get one External_Link
     * const external_Link = await prisma.external_Link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends External_LinkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, External_LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first External_Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_LinkFindFirstArgs} args - Arguments to find a External_Link
     * @example
     * // Get one External_Link
     * const external_Link = await prisma.external_Link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends External_LinkFindFirstArgs>(args?: Prisma.SelectSubset<T, External_LinkFindFirstArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first External_Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_LinkFindFirstOrThrowArgs} args - Arguments to find a External_Link
     * @example
     * // Get one External_Link
     * const external_Link = await prisma.external_Link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends External_LinkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, External_LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more External_Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all External_Links
     * const external_Links = await prisma.external_Link.findMany()
     *
     * // Get first 10 External_Links
     * const external_Links = await prisma.external_Link.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const external_LinkWithIDOnly = await prisma.external_Link.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends External_LinkFindManyArgs>(args?: Prisma.SelectSubset<T, External_LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a External_Link.
     * @param {External_LinkCreateArgs} args - Arguments to create a External_Link.
     * @example
     * // Create one External_Link
     * const External_Link = await prisma.external_Link.create({
     *   data: {
     *     // ... data to create a External_Link
     *   }
     * })
     *
     */
    create<T extends External_LinkCreateArgs>(args: Prisma.SelectSubset<T, External_LinkCreateArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many External_Links.
     * @param {External_LinkCreateManyArgs} args - Arguments to create many External_Links.
     * @example
     * // Create many External_Links
     * const external_Link = await prisma.external_Link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends External_LinkCreateManyArgs>(args?: Prisma.SelectSubset<T, External_LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many External_Links and returns the data saved in the database.
     * @param {External_LinkCreateManyAndReturnArgs} args - Arguments to create many External_Links.
     * @example
     * // Create many External_Links
     * const external_Link = await prisma.external_Link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many External_Links and only return the `ID`
     * const external_LinkWithIDOnly = await prisma.external_Link.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends External_LinkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, External_LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a External_Link.
     * @param {External_LinkDeleteArgs} args - Arguments to delete one External_Link.
     * @example
     * // Delete one External_Link
     * const External_Link = await prisma.external_Link.delete({
     *   where: {
     *     // ... filter to delete one External_Link
     *   }
     * })
     *
     */
    delete<T extends External_LinkDeleteArgs>(args: Prisma.SelectSubset<T, External_LinkDeleteArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one External_Link.
     * @param {External_LinkUpdateArgs} args - Arguments to update one External_Link.
     * @example
     * // Update one External_Link
     * const external_Link = await prisma.external_Link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends External_LinkUpdateArgs>(args: Prisma.SelectSubset<T, External_LinkUpdateArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more External_Links.
     * @param {External_LinkDeleteManyArgs} args - Arguments to filter External_Links to delete.
     * @example
     * // Delete a few External_Links
     * const { count } = await prisma.external_Link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends External_LinkDeleteManyArgs>(args?: Prisma.SelectSubset<T, External_LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more External_Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many External_Links
     * const external_Link = await prisma.external_Link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends External_LinkUpdateManyArgs>(args: Prisma.SelectSubset<T, External_LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more External_Links and returns the data updated in the database.
     * @param {External_LinkUpdateManyAndReturnArgs} args - Arguments to update many External_Links.
     * @example
     * // Update many External_Links
     * const external_Link = await prisma.external_Link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more External_Links and only return the `ID`
     * const external_LinkWithIDOnly = await prisma.external_Link.updateManyAndReturn({
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
    updateManyAndReturn<T extends External_LinkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, External_LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one External_Link.
     * @param {External_LinkUpsertArgs} args - Arguments to update or create a External_Link.
     * @example
     * // Update or create a External_Link
     * const external_Link = await prisma.external_Link.upsert({
     *   create: {
     *     // ... data to create a External_Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the External_Link we want to update
     *   }
     * })
     */
    upsert<T extends External_LinkUpsertArgs>(args: Prisma.SelectSubset<T, External_LinkUpsertArgs<ExtArgs>>): Prisma.Prisma__External_LinkClient<runtime.Types.Result.GetResult<Prisma.$External_LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of External_Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_LinkCountArgs} args - Arguments to filter External_Links to count.
     * @example
     * // Count the number of External_Links
     * const count = await prisma.external_Link.count({
     *   where: {
     *     // ... the filter for the External_Links we want to count
     *   }
     * })
    **/
    count<T extends External_LinkCountArgs>(args?: Prisma.Subset<T, External_LinkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], External_LinkCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a External_Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends External_LinkAggregateArgs>(args: Prisma.Subset<T, External_LinkAggregateArgs>): Prisma.PrismaPromise<GetExternal_LinkAggregateType<T>>;
    /**
     * Group by External_Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_LinkGroupByArgs} args - Group by arguments.
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
    groupBy<T extends External_LinkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: External_LinkGroupByArgs['orderBy'];
    } : {
        orderBy?: External_LinkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, External_LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternal_LinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the External_Link model
     */
    readonly fields: External_LinkFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for External_Link.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__External_LinkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    FEATURE<T extends Prisma.External_Link$FEATUREArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.External_Link$FEATUREArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the External_Link model
 */
export interface External_LinkFieldRefs {
    readonly ID: Prisma.FieldRef<"External_Link", 'String'>;
    readonly ATIVE: Prisma.FieldRef<"External_Link", 'Boolean'>;
    readonly TEXT: Prisma.FieldRef<"External_Link", 'String'>;
    readonly STYLE_TEXT: Prisma.FieldRef<"External_Link", 'String'>;
    readonly BUTTON_TEXT: Prisma.FieldRef<"External_Link", 'String'>;
    readonly BUTTON_STYLE: Prisma.FieldRef<"External_Link", 'String'>;
    readonly BUTTON_CLICK_CAMPAING: Prisma.FieldRef<"External_Link", 'Int'>;
    readonly BUTTON_CLICK_TEST_AB: Prisma.FieldRef<"External_Link", 'Int'>;
    readonly LINK_URL: Prisma.FieldRef<"External_Link", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"External_Link", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"External_Link", 'DateTime'>;
}
/**
 * External_Link findUnique
 */
export type External_LinkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which External_Link to fetch.
     */
    where: Prisma.External_LinkWhereUniqueInput;
};
/**
 * External_Link findUniqueOrThrow
 */
export type External_LinkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which External_Link to fetch.
     */
    where: Prisma.External_LinkWhereUniqueInput;
};
/**
 * External_Link findFirst
 */
export type External_LinkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which External_Link to fetch.
     */
    where?: Prisma.External_LinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of External_Links to fetch.
     */
    orderBy?: Prisma.External_LinkOrderByWithRelationInput | Prisma.External_LinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for External_Links.
     */
    cursor?: Prisma.External_LinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` External_Links from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` External_Links.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of External_Links.
     */
    distinct?: Prisma.External_LinkScalarFieldEnum | Prisma.External_LinkScalarFieldEnum[];
};
/**
 * External_Link findFirstOrThrow
 */
export type External_LinkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which External_Link to fetch.
     */
    where?: Prisma.External_LinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of External_Links to fetch.
     */
    orderBy?: Prisma.External_LinkOrderByWithRelationInput | Prisma.External_LinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for External_Links.
     */
    cursor?: Prisma.External_LinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` External_Links from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` External_Links.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of External_Links.
     */
    distinct?: Prisma.External_LinkScalarFieldEnum | Prisma.External_LinkScalarFieldEnum[];
};
/**
 * External_Link findMany
 */
export type External_LinkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which External_Links to fetch.
     */
    where?: Prisma.External_LinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of External_Links to fetch.
     */
    orderBy?: Prisma.External_LinkOrderByWithRelationInput | Prisma.External_LinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing External_Links.
     */
    cursor?: Prisma.External_LinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` External_Links from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` External_Links.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of External_Links.
     */
    distinct?: Prisma.External_LinkScalarFieldEnum | Prisma.External_LinkScalarFieldEnum[];
};
/**
 * External_Link create
 */
export type External_LinkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a External_Link.
     */
    data?: Prisma.XOR<Prisma.External_LinkCreateInput, Prisma.External_LinkUncheckedCreateInput>;
};
/**
 * External_Link createMany
 */
export type External_LinkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many External_Links.
     */
    data: Prisma.External_LinkCreateManyInput | Prisma.External_LinkCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * External_Link createManyAndReturn
 */
export type External_LinkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the External_Link
     */
    select?: Prisma.External_LinkSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the External_Link
     */
    omit?: Prisma.External_LinkOmit<ExtArgs> | null;
    /**
     * The data used to create many External_Links.
     */
    data: Prisma.External_LinkCreateManyInput | Prisma.External_LinkCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * External_Link update
 */
export type External_LinkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a External_Link.
     */
    data: Prisma.XOR<Prisma.External_LinkUpdateInput, Prisma.External_LinkUncheckedUpdateInput>;
    /**
     * Choose, which External_Link to update.
     */
    where: Prisma.External_LinkWhereUniqueInput;
};
/**
 * External_Link updateMany
 */
export type External_LinkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update External_Links.
     */
    data: Prisma.XOR<Prisma.External_LinkUpdateManyMutationInput, Prisma.External_LinkUncheckedUpdateManyInput>;
    /**
     * Filter which External_Links to update
     */
    where?: Prisma.External_LinkWhereInput;
    /**
     * Limit how many External_Links to update.
     */
    limit?: number;
};
/**
 * External_Link updateManyAndReturn
 */
export type External_LinkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the External_Link
     */
    select?: Prisma.External_LinkSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the External_Link
     */
    omit?: Prisma.External_LinkOmit<ExtArgs> | null;
    /**
     * The data used to update External_Links.
     */
    data: Prisma.XOR<Prisma.External_LinkUpdateManyMutationInput, Prisma.External_LinkUncheckedUpdateManyInput>;
    /**
     * Filter which External_Links to update
     */
    where?: Prisma.External_LinkWhereInput;
    /**
     * Limit how many External_Links to update.
     */
    limit?: number;
};
/**
 * External_Link upsert
 */
export type External_LinkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the External_Link to update in case it exists.
     */
    where: Prisma.External_LinkWhereUniqueInput;
    /**
     * In case the External_Link found by the `where` argument doesn't exist, create a new External_Link with this data.
     */
    create: Prisma.XOR<Prisma.External_LinkCreateInput, Prisma.External_LinkUncheckedCreateInput>;
    /**
     * In case the External_Link was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.External_LinkUpdateInput, Prisma.External_LinkUncheckedUpdateInput>;
};
/**
 * External_Link delete
 */
export type External_LinkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which External_Link to delete.
     */
    where: Prisma.External_LinkWhereUniqueInput;
};
/**
 * External_Link deleteMany
 */
export type External_LinkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which External_Links to delete
     */
    where?: Prisma.External_LinkWhereInput;
    /**
     * Limit how many External_Links to delete.
     */
    limit?: number;
};
/**
 * External_Link.FEATURE
 */
export type External_Link$FEATUREArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * External_Link without action
 */
export type External_LinkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=External_Link.d.ts.map
import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Pixel
 *
 */
export type PixelModel = runtime.Types.Result.DefaultSelection<Prisma.$PixelPayload>;
export type AggregatePixel = {
    _count: PixelCountAggregateOutputType | null;
    _avg: PixelAvgAggregateOutputType | null;
    _sum: PixelSumAggregateOutputType | null;
    _min: PixelMinAggregateOutputType | null;
    _max: PixelMaxAggregateOutputType | null;
};
export type PixelAvgAggregateOutputType = {
    SHOOTING_EVENT_VALUE_GOOGLE: number | null;
};
export type PixelSumAggregateOutputType = {
    SHOOTING_EVENT_VALUE_GOOGLE: number | null;
};
export type PixelMinAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    NAME_META: string | null;
    ID_META: string | null;
    NAME_GOOGLE: string | null;
    ID_GOOGLE: string | null;
    LABEL_CONVERSION_GOOGLE: string | null;
    SHOOTING_EVENT_GOOGLE: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type PixelMaxAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    NAME_META: string | null;
    ID_META: string | null;
    NAME_GOOGLE: string | null;
    ID_GOOGLE: string | null;
    LABEL_CONVERSION_GOOGLE: string | null;
    SHOOTING_EVENT_GOOGLE: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type PixelCountAggregateOutputType = {
    ID: number;
    ATIVE: number;
    NAME_META: number;
    ID_META: number;
    NAME_GOOGLE: number;
    ID_GOOGLE: number;
    LABEL_CONVERSION_GOOGLE: number;
    SHOOTING_EVENT_GOOGLE: number;
    SHOOTING_EVENT_VALUE_GOOGLE: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type PixelAvgAggregateInputType = {
    SHOOTING_EVENT_VALUE_GOOGLE?: true;
};
export type PixelSumAggregateInputType = {
    SHOOTING_EVENT_VALUE_GOOGLE?: true;
};
export type PixelMinAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    NAME_META?: true;
    ID_META?: true;
    NAME_GOOGLE?: true;
    ID_GOOGLE?: true;
    LABEL_CONVERSION_GOOGLE?: true;
    SHOOTING_EVENT_GOOGLE?: true;
    SHOOTING_EVENT_VALUE_GOOGLE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type PixelMaxAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    NAME_META?: true;
    ID_META?: true;
    NAME_GOOGLE?: true;
    ID_GOOGLE?: true;
    LABEL_CONVERSION_GOOGLE?: true;
    SHOOTING_EVENT_GOOGLE?: true;
    SHOOTING_EVENT_VALUE_GOOGLE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type PixelCountAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    NAME_META?: true;
    ID_META?: true;
    NAME_GOOGLE?: true;
    ID_GOOGLE?: true;
    LABEL_CONVERSION_GOOGLE?: true;
    SHOOTING_EVENT_GOOGLE?: true;
    SHOOTING_EVENT_VALUE_GOOGLE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type PixelAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pixel to aggregate.
     */
    where?: Prisma.PixelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pixels to fetch.
     */
    orderBy?: Prisma.PixelOrderByWithRelationInput | Prisma.PixelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PixelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pixels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pixels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pixels
    **/
    _count?: true | PixelCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PixelAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PixelSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PixelMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PixelMaxAggregateInputType;
};
export type GetPixelAggregateType<T extends PixelAggregateArgs> = {
    [P in keyof T & keyof AggregatePixel]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePixel[P]> : Prisma.GetScalarType<T[P], AggregatePixel[P]>;
};
export type PixelGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PixelWhereInput;
    orderBy?: Prisma.PixelOrderByWithAggregationInput | Prisma.PixelOrderByWithAggregationInput[];
    by: Prisma.PixelScalarFieldEnum[] | Prisma.PixelScalarFieldEnum;
    having?: Prisma.PixelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PixelCountAggregateInputType | true;
    _avg?: PixelAvgAggregateInputType;
    _sum?: PixelSumAggregateInputType;
    _min?: PixelMinAggregateInputType;
    _max?: PixelMaxAggregateInputType;
};
export type PixelGroupByOutputType = {
    ID: string;
    ATIVE: boolean;
    NAME_META: string | null;
    ID_META: string | null;
    NAME_GOOGLE: string | null;
    ID_GOOGLE: string | null;
    LABEL_CONVERSION_GOOGLE: string | null;
    SHOOTING_EVENT_GOOGLE: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: PixelCountAggregateOutputType | null;
    _avg: PixelAvgAggregateOutputType | null;
    _sum: PixelSumAggregateOutputType | null;
    _min: PixelMinAggregateOutputType | null;
    _max: PixelMaxAggregateOutputType | null;
};
type GetPixelGroupByPayload<T extends PixelGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PixelGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PixelGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PixelGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PixelGroupByOutputType[P]>;
}>>;
export type PixelWhereInput = {
    AND?: Prisma.PixelWhereInput | Prisma.PixelWhereInput[];
    OR?: Prisma.PixelWhereInput[];
    NOT?: Prisma.PixelWhereInput | Prisma.PixelWhereInput[];
    ID?: Prisma.StringFilter<"Pixel"> | string;
    ATIVE?: Prisma.BoolFilter<"Pixel"> | boolean;
    NAME_META?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    ID_META?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    NAME_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    ID_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.FloatNullableFilter<"Pixel"> | number | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Pixel"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Pixel"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
};
export type PixelOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    NAME_META?: Prisma.SortOrderInput | Prisma.SortOrder;
    ID_META?: Prisma.SortOrderInput | Prisma.SortOrder;
    NAME_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    ID_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    LABEL_CONVERSION_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    SHOOTING_EVENT_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    FEATURE?: Prisma.FeatureOrderByWithRelationInput;
};
export type PixelWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.PixelWhereInput | Prisma.PixelWhereInput[];
    OR?: Prisma.PixelWhereInput[];
    NOT?: Prisma.PixelWhereInput | Prisma.PixelWhereInput[];
    ATIVE?: Prisma.BoolFilter<"Pixel"> | boolean;
    NAME_META?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    ID_META?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    NAME_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    ID_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.StringNullableFilter<"Pixel"> | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.FloatNullableFilter<"Pixel"> | number | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Pixel"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Pixel"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
}, "ID">;
export type PixelOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    NAME_META?: Prisma.SortOrderInput | Prisma.SortOrder;
    ID_META?: Prisma.SortOrderInput | Prisma.SortOrder;
    NAME_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    ID_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    LABEL_CONVERSION_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    SHOOTING_EVENT_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PixelCountOrderByAggregateInput;
    _avg?: Prisma.PixelAvgOrderByAggregateInput;
    _max?: Prisma.PixelMaxOrderByAggregateInput;
    _min?: Prisma.PixelMinOrderByAggregateInput;
    _sum?: Prisma.PixelSumOrderByAggregateInput;
};
export type PixelScalarWhereWithAggregatesInput = {
    AND?: Prisma.PixelScalarWhereWithAggregatesInput | Prisma.PixelScalarWhereWithAggregatesInput[];
    OR?: Prisma.PixelScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PixelScalarWhereWithAggregatesInput | Prisma.PixelScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Pixel"> | string;
    ATIVE?: Prisma.BoolWithAggregatesFilter<"Pixel"> | boolean;
    NAME_META?: Prisma.StringNullableWithAggregatesFilter<"Pixel"> | string | null;
    ID_META?: Prisma.StringNullableWithAggregatesFilter<"Pixel"> | string | null;
    NAME_GOOGLE?: Prisma.StringNullableWithAggregatesFilter<"Pixel"> | string | null;
    ID_GOOGLE?: Prisma.StringNullableWithAggregatesFilter<"Pixel"> | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.StringNullableWithAggregatesFilter<"Pixel"> | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.StringNullableWithAggregatesFilter<"Pixel"> | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.FloatNullableWithAggregatesFilter<"Pixel"> | number | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Pixel"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Pixel"> | Date | string | null;
};
export type PixelCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    NAME_META?: string | null;
    ID_META?: string | null;
    NAME_GOOGLE?: string | null;
    ID_GOOGLE?: string | null;
    LABEL_CONVERSION_GOOGLE?: string | null;
    SHOOTING_EVENT_GOOGLE?: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: number | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutPIXELInput;
};
export type PixelUncheckedCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    NAME_META?: string | null;
    ID_META?: string | null;
    NAME_GOOGLE?: string | null;
    ID_GOOGLE?: string | null;
    LABEL_CONVERSION_GOOGLE?: string | null;
    SHOOTING_EVENT_GOOGLE?: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: number | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedCreateNestedOneWithoutPIXELInput;
};
export type PixelUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NAME_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NAME_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutPIXELNestedInput;
};
export type PixelUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NAME_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NAME_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedUpdateOneWithoutPIXELNestedInput;
};
export type PixelCreateManyInput = {
    ID?: string;
    ATIVE?: boolean;
    NAME_META?: string | null;
    ID_META?: string | null;
    NAME_GOOGLE?: string | null;
    ID_GOOGLE?: string | null;
    LABEL_CONVERSION_GOOGLE?: string | null;
    SHOOTING_EVENT_GOOGLE?: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: number | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type PixelUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NAME_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NAME_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PixelUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NAME_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NAME_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PixelNullableScalarRelationFilter = {
    is?: Prisma.PixelWhereInput | null;
    isNot?: Prisma.PixelWhereInput | null;
};
export type PixelCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    NAME_META?: Prisma.SortOrder;
    ID_META?: Prisma.SortOrder;
    NAME_GOOGLE?: Prisma.SortOrder;
    ID_GOOGLE?: Prisma.SortOrder;
    LABEL_CONVERSION_GOOGLE?: Prisma.SortOrder;
    SHOOTING_EVENT_GOOGLE?: Prisma.SortOrder;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type PixelAvgOrderByAggregateInput = {
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.SortOrder;
};
export type PixelMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    NAME_META?: Prisma.SortOrder;
    ID_META?: Prisma.SortOrder;
    NAME_GOOGLE?: Prisma.SortOrder;
    ID_GOOGLE?: Prisma.SortOrder;
    LABEL_CONVERSION_GOOGLE?: Prisma.SortOrder;
    SHOOTING_EVENT_GOOGLE?: Prisma.SortOrder;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type PixelMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    NAME_META?: Prisma.SortOrder;
    ID_META?: Prisma.SortOrder;
    NAME_GOOGLE?: Prisma.SortOrder;
    ID_GOOGLE?: Prisma.SortOrder;
    LABEL_CONVERSION_GOOGLE?: Prisma.SortOrder;
    SHOOTING_EVENT_GOOGLE?: Prisma.SortOrder;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type PixelSumOrderByAggregateInput = {
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.SortOrder;
};
export type PixelCreateNestedOneWithoutFEATUREInput = {
    create?: Prisma.XOR<Prisma.PixelCreateWithoutFEATUREInput, Prisma.PixelUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.PixelCreateOrConnectWithoutFEATUREInput;
    connect?: Prisma.PixelWhereUniqueInput;
};
export type PixelUpdateOneWithoutFEATURENestedInput = {
    create?: Prisma.XOR<Prisma.PixelCreateWithoutFEATUREInput, Prisma.PixelUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.PixelCreateOrConnectWithoutFEATUREInput;
    upsert?: Prisma.PixelUpsertWithoutFEATUREInput;
    disconnect?: Prisma.PixelWhereInput | boolean;
    delete?: Prisma.PixelWhereInput | boolean;
    connect?: Prisma.PixelWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PixelUpdateToOneWithWhereWithoutFEATUREInput, Prisma.PixelUpdateWithoutFEATUREInput>, Prisma.PixelUncheckedUpdateWithoutFEATUREInput>;
};
export type PixelCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    NAME_META?: string | null;
    ID_META?: string | null;
    NAME_GOOGLE?: string | null;
    ID_GOOGLE?: string | null;
    LABEL_CONVERSION_GOOGLE?: string | null;
    SHOOTING_EVENT_GOOGLE?: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: number | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type PixelUncheckedCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    NAME_META?: string | null;
    ID_META?: string | null;
    NAME_GOOGLE?: string | null;
    ID_GOOGLE?: string | null;
    LABEL_CONVERSION_GOOGLE?: string | null;
    SHOOTING_EVENT_GOOGLE?: string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: number | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type PixelCreateOrConnectWithoutFEATUREInput = {
    where: Prisma.PixelWhereUniqueInput;
    create: Prisma.XOR<Prisma.PixelCreateWithoutFEATUREInput, Prisma.PixelUncheckedCreateWithoutFEATUREInput>;
};
export type PixelUpsertWithoutFEATUREInput = {
    update: Prisma.XOR<Prisma.PixelUpdateWithoutFEATUREInput, Prisma.PixelUncheckedUpdateWithoutFEATUREInput>;
    create: Prisma.XOR<Prisma.PixelCreateWithoutFEATUREInput, Prisma.PixelUncheckedCreateWithoutFEATUREInput>;
    where?: Prisma.PixelWhereInput;
};
export type PixelUpdateToOneWithWhereWithoutFEATUREInput = {
    where?: Prisma.PixelWhereInput;
    data: Prisma.XOR<Prisma.PixelUpdateWithoutFEATUREInput, Prisma.PixelUncheckedUpdateWithoutFEATUREInput>;
};
export type PixelUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NAME_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NAME_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PixelUncheckedUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NAME_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_META?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NAME_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ID_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    LABEL_CONVERSION_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_GOOGLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SHOOTING_EVENT_VALUE_GOOGLE?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PixelSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    NAME_META?: boolean;
    ID_META?: boolean;
    NAME_GOOGLE?: boolean;
    ID_GOOGLE?: boolean;
    LABEL_CONVERSION_GOOGLE?: boolean;
    SHOOTING_EVENT_GOOGLE?: boolean;
    SHOOTING_EVENT_VALUE_GOOGLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FEATURE?: boolean | Prisma.Pixel$FEATUREArgs<ExtArgs>;
}, ExtArgs["result"]["pixel"]>;
export type PixelSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    NAME_META?: boolean;
    ID_META?: boolean;
    NAME_GOOGLE?: boolean;
    ID_GOOGLE?: boolean;
    LABEL_CONVERSION_GOOGLE?: boolean;
    SHOOTING_EVENT_GOOGLE?: boolean;
    SHOOTING_EVENT_VALUE_GOOGLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["pixel"]>;
export type PixelSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    NAME_META?: boolean;
    ID_META?: boolean;
    NAME_GOOGLE?: boolean;
    ID_GOOGLE?: boolean;
    LABEL_CONVERSION_GOOGLE?: boolean;
    SHOOTING_EVENT_GOOGLE?: boolean;
    SHOOTING_EVENT_VALUE_GOOGLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["pixel"]>;
export type PixelSelectScalar = {
    ID?: boolean;
    ATIVE?: boolean;
    NAME_META?: boolean;
    ID_META?: boolean;
    NAME_GOOGLE?: boolean;
    ID_GOOGLE?: boolean;
    LABEL_CONVERSION_GOOGLE?: boolean;
    SHOOTING_EVENT_GOOGLE?: boolean;
    SHOOTING_EVENT_VALUE_GOOGLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type PixelOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "ATIVE" | "NAME_META" | "ID_META" | "NAME_GOOGLE" | "ID_GOOGLE" | "LABEL_CONVERSION_GOOGLE" | "SHOOTING_EVENT_GOOGLE" | "SHOOTING_EVENT_VALUE_GOOGLE" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["pixel"]>;
export type PixelInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    FEATURE?: boolean | Prisma.Pixel$FEATUREArgs<ExtArgs>;
};
export type PixelIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PixelIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PixelPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pixel";
    objects: {
        FEATURE: Prisma.$FeaturePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        ATIVE: boolean;
        NAME_META: string | null;
        ID_META: string | null;
        NAME_GOOGLE: string | null;
        ID_GOOGLE: string | null;
        LABEL_CONVERSION_GOOGLE: string | null;
        SHOOTING_EVENT_GOOGLE: string | null;
        SHOOTING_EVENT_VALUE_GOOGLE: number | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["pixel"]>;
    composites: {};
};
export type PixelGetPayload<S extends boolean | null | undefined | PixelDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PixelPayload, S>;
export type PixelCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PixelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PixelCountAggregateInputType | true;
};
export interface PixelDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pixel'];
        meta: {
            name: 'Pixel';
        };
    };
    /**
     * Find zero or one Pixel that matches the filter.
     * @param {PixelFindUniqueArgs} args - Arguments to find a Pixel
     * @example
     * // Get one Pixel
     * const pixel = await prisma.pixel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PixelFindUniqueArgs>(args: Prisma.SelectSubset<T, PixelFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pixel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PixelFindUniqueOrThrowArgs} args - Arguments to find a Pixel
     * @example
     * // Get one Pixel
     * const pixel = await prisma.pixel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PixelFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PixelFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pixel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelFindFirstArgs} args - Arguments to find a Pixel
     * @example
     * // Get one Pixel
     * const pixel = await prisma.pixel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PixelFindFirstArgs>(args?: Prisma.SelectSubset<T, PixelFindFirstArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pixel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelFindFirstOrThrowArgs} args - Arguments to find a Pixel
     * @example
     * // Get one Pixel
     * const pixel = await prisma.pixel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PixelFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PixelFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pixels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pixels
     * const pixels = await prisma.pixel.findMany()
     *
     * // Get first 10 Pixels
     * const pixels = await prisma.pixel.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const pixelWithIDOnly = await prisma.pixel.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends PixelFindManyArgs>(args?: Prisma.SelectSubset<T, PixelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pixel.
     * @param {PixelCreateArgs} args - Arguments to create a Pixel.
     * @example
     * // Create one Pixel
     * const Pixel = await prisma.pixel.create({
     *   data: {
     *     // ... data to create a Pixel
     *   }
     * })
     *
     */
    create<T extends PixelCreateArgs>(args: Prisma.SelectSubset<T, PixelCreateArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pixels.
     * @param {PixelCreateManyArgs} args - Arguments to create many Pixels.
     * @example
     * // Create many Pixels
     * const pixel = await prisma.pixel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PixelCreateManyArgs>(args?: Prisma.SelectSubset<T, PixelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pixels and returns the data saved in the database.
     * @param {PixelCreateManyAndReturnArgs} args - Arguments to create many Pixels.
     * @example
     * // Create many Pixels
     * const pixel = await prisma.pixel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pixels and only return the `ID`
     * const pixelWithIDOnly = await prisma.pixel.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PixelCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PixelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pixel.
     * @param {PixelDeleteArgs} args - Arguments to delete one Pixel.
     * @example
     * // Delete one Pixel
     * const Pixel = await prisma.pixel.delete({
     *   where: {
     *     // ... filter to delete one Pixel
     *   }
     * })
     *
     */
    delete<T extends PixelDeleteArgs>(args: Prisma.SelectSubset<T, PixelDeleteArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pixel.
     * @param {PixelUpdateArgs} args - Arguments to update one Pixel.
     * @example
     * // Update one Pixel
     * const pixel = await prisma.pixel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PixelUpdateArgs>(args: Prisma.SelectSubset<T, PixelUpdateArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pixels.
     * @param {PixelDeleteManyArgs} args - Arguments to filter Pixels to delete.
     * @example
     * // Delete a few Pixels
     * const { count } = await prisma.pixel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PixelDeleteManyArgs>(args?: Prisma.SelectSubset<T, PixelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pixels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pixels
     * const pixel = await prisma.pixel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PixelUpdateManyArgs>(args: Prisma.SelectSubset<T, PixelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pixels and returns the data updated in the database.
     * @param {PixelUpdateManyAndReturnArgs} args - Arguments to update many Pixels.
     * @example
     * // Update many Pixels
     * const pixel = await prisma.pixel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pixels and only return the `ID`
     * const pixelWithIDOnly = await prisma.pixel.updateManyAndReturn({
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
    updateManyAndReturn<T extends PixelUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PixelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pixel.
     * @param {PixelUpsertArgs} args - Arguments to update or create a Pixel.
     * @example
     * // Update or create a Pixel
     * const pixel = await prisma.pixel.upsert({
     *   create: {
     *     // ... data to create a Pixel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pixel we want to update
     *   }
     * })
     */
    upsert<T extends PixelUpsertArgs>(args: Prisma.SelectSubset<T, PixelUpsertArgs<ExtArgs>>): Prisma.Prisma__PixelClient<runtime.Types.Result.GetResult<Prisma.$PixelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pixels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelCountArgs} args - Arguments to filter Pixels to count.
     * @example
     * // Count the number of Pixels
     * const count = await prisma.pixel.count({
     *   where: {
     *     // ... the filter for the Pixels we want to count
     *   }
     * })
    **/
    count<T extends PixelCountArgs>(args?: Prisma.Subset<T, PixelCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PixelCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pixel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PixelAggregateArgs>(args: Prisma.Subset<T, PixelAggregateArgs>): Prisma.PrismaPromise<GetPixelAggregateType<T>>;
    /**
     * Group by Pixel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PixelGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PixelGroupByArgs['orderBy'];
    } : {
        orderBy?: PixelGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PixelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPixelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Pixel model
     */
    readonly fields: PixelFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Pixel.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PixelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    FEATURE<T extends Prisma.Pixel$FEATUREArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pixel$FEATUREArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Pixel model
 */
export interface PixelFieldRefs {
    readonly ID: Prisma.FieldRef<"Pixel", 'String'>;
    readonly ATIVE: Prisma.FieldRef<"Pixel", 'Boolean'>;
    readonly NAME_META: Prisma.FieldRef<"Pixel", 'String'>;
    readonly ID_META: Prisma.FieldRef<"Pixel", 'String'>;
    readonly NAME_GOOGLE: Prisma.FieldRef<"Pixel", 'String'>;
    readonly ID_GOOGLE: Prisma.FieldRef<"Pixel", 'String'>;
    readonly LABEL_CONVERSION_GOOGLE: Prisma.FieldRef<"Pixel", 'String'>;
    readonly SHOOTING_EVENT_GOOGLE: Prisma.FieldRef<"Pixel", 'String'>;
    readonly SHOOTING_EVENT_VALUE_GOOGLE: Prisma.FieldRef<"Pixel", 'Float'>;
    readonly CREATED_AT: Prisma.FieldRef<"Pixel", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Pixel", 'DateTime'>;
}
/**
 * Pixel findUnique
 */
export type PixelFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Pixel to fetch.
     */
    where: Prisma.PixelWhereUniqueInput;
};
/**
 * Pixel findUniqueOrThrow
 */
export type PixelFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Pixel to fetch.
     */
    where: Prisma.PixelWhereUniqueInput;
};
/**
 * Pixel findFirst
 */
export type PixelFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Pixel to fetch.
     */
    where?: Prisma.PixelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pixels to fetch.
     */
    orderBy?: Prisma.PixelOrderByWithRelationInput | Prisma.PixelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pixels.
     */
    cursor?: Prisma.PixelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pixels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pixels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pixels.
     */
    distinct?: Prisma.PixelScalarFieldEnum | Prisma.PixelScalarFieldEnum[];
};
/**
 * Pixel findFirstOrThrow
 */
export type PixelFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Pixel to fetch.
     */
    where?: Prisma.PixelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pixels to fetch.
     */
    orderBy?: Prisma.PixelOrderByWithRelationInput | Prisma.PixelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pixels.
     */
    cursor?: Prisma.PixelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pixels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pixels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pixels.
     */
    distinct?: Prisma.PixelScalarFieldEnum | Prisma.PixelScalarFieldEnum[];
};
/**
 * Pixel findMany
 */
export type PixelFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Pixels to fetch.
     */
    where?: Prisma.PixelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pixels to fetch.
     */
    orderBy?: Prisma.PixelOrderByWithRelationInput | Prisma.PixelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pixels.
     */
    cursor?: Prisma.PixelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pixels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pixels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pixels.
     */
    distinct?: Prisma.PixelScalarFieldEnum | Prisma.PixelScalarFieldEnum[];
};
/**
 * Pixel create
 */
export type PixelCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Pixel.
     */
    data?: Prisma.XOR<Prisma.PixelCreateInput, Prisma.PixelUncheckedCreateInput>;
};
/**
 * Pixel createMany
 */
export type PixelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pixels.
     */
    data: Prisma.PixelCreateManyInput | Prisma.PixelCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pixel createManyAndReturn
 */
export type PixelCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixel
     */
    select?: Prisma.PixelSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pixel
     */
    omit?: Prisma.PixelOmit<ExtArgs> | null;
    /**
     * The data used to create many Pixels.
     */
    data: Prisma.PixelCreateManyInput | Prisma.PixelCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pixel update
 */
export type PixelUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Pixel.
     */
    data: Prisma.XOR<Prisma.PixelUpdateInput, Prisma.PixelUncheckedUpdateInput>;
    /**
     * Choose, which Pixel to update.
     */
    where: Prisma.PixelWhereUniqueInput;
};
/**
 * Pixel updateMany
 */
export type PixelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Pixels.
     */
    data: Prisma.XOR<Prisma.PixelUpdateManyMutationInput, Prisma.PixelUncheckedUpdateManyInput>;
    /**
     * Filter which Pixels to update
     */
    where?: Prisma.PixelWhereInput;
    /**
     * Limit how many Pixels to update.
     */
    limit?: number;
};
/**
 * Pixel updateManyAndReturn
 */
export type PixelUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pixel
     */
    select?: Prisma.PixelSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pixel
     */
    omit?: Prisma.PixelOmit<ExtArgs> | null;
    /**
     * The data used to update Pixels.
     */
    data: Prisma.XOR<Prisma.PixelUpdateManyMutationInput, Prisma.PixelUncheckedUpdateManyInput>;
    /**
     * Filter which Pixels to update
     */
    where?: Prisma.PixelWhereInput;
    /**
     * Limit how many Pixels to update.
     */
    limit?: number;
};
/**
 * Pixel upsert
 */
export type PixelUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Pixel to update in case it exists.
     */
    where: Prisma.PixelWhereUniqueInput;
    /**
     * In case the Pixel found by the `where` argument doesn't exist, create a new Pixel with this data.
     */
    create: Prisma.XOR<Prisma.PixelCreateInput, Prisma.PixelUncheckedCreateInput>;
    /**
     * In case the Pixel was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PixelUpdateInput, Prisma.PixelUncheckedUpdateInput>;
};
/**
 * Pixel delete
 */
export type PixelDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Pixel to delete.
     */
    where: Prisma.PixelWhereUniqueInput;
};
/**
 * Pixel deleteMany
 */
export type PixelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pixels to delete
     */
    where?: Prisma.PixelWhereInput;
    /**
     * Limit how many Pixels to delete.
     */
    limit?: number;
};
/**
 * Pixel.FEATURE
 */
export type Pixel$FEATUREArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Pixel without action
 */
export type PixelDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Pixel.d.ts.map
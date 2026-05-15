import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Bond
 *
 */
export type BondModel = runtime.Types.Result.DefaultSelection<Prisma.$BondPayload>;
export type AggregateBond = {
    _count: BondCountAggregateOutputType | null;
    _avg: BondAvgAggregateOutputType | null;
    _sum: BondSumAggregateOutputType | null;
    _min: BondMinAggregateOutputType | null;
    _max: BondMaxAggregateOutputType | null;
};
export type BondAvgAggregateOutputType = {
    CONTINUITY_CAMPAING: number | null;
    CONTINUITY_TEST_AB: number | null;
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
    BUTTON_START: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
};
export type BondSumAggregateOutputType = {
    CONTINUITY_CAMPAING: number | null;
    CONTINUITY_TEST_AB: number | null;
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
    BUTTON_START: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
};
export type BondMinAggregateOutputType = {
    ID: string | null;
    VIDEO_ID: string | null;
    CONTINUITY_CAMPAING: number | null;
    CONTINUITY_TEST_AB: number | null;
    BUTTON: boolean | null;
    BUTTON_TEXT: string | null;
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
    BUTTON_STYLE: string | null;
    BUTTON_START: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type BondMaxAggregateOutputType = {
    ID: string | null;
    VIDEO_ID: string | null;
    CONTINUITY_CAMPAING: number | null;
    CONTINUITY_TEST_AB: number | null;
    BUTTON: boolean | null;
    BUTTON_TEXT: string | null;
    BUTTON_CLICK_CAMPAING: number | null;
    BUTTON_CLICK_TEST_AB: number | null;
    BUTTON_STYLE: string | null;
    BUTTON_START: number | null;
    X_POSITION: number | null;
    Y_POSITION: number | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type BondCountAggregateOutputType = {
    ID: number;
    VIDEO_ID: number;
    CONTINUITY_CAMPAING: number;
    CONTINUITY_TEST_AB: number;
    BUTTON: number;
    BUTTON_TEXT: number;
    BUTTON_CLICK_CAMPAING: number;
    BUTTON_CLICK_TEST_AB: number;
    BUTTON_STYLE: number;
    BUTTON_START: number;
    X_POSITION: number;
    Y_POSITION: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type BondAvgAggregateInputType = {
    CONTINUITY_CAMPAING?: true;
    CONTINUITY_TEST_AB?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    BUTTON_START?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
};
export type BondSumAggregateInputType = {
    CONTINUITY_CAMPAING?: true;
    CONTINUITY_TEST_AB?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    BUTTON_START?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
};
export type BondMinAggregateInputType = {
    ID?: true;
    VIDEO_ID?: true;
    CONTINUITY_CAMPAING?: true;
    CONTINUITY_TEST_AB?: true;
    BUTTON?: true;
    BUTTON_TEXT?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    BUTTON_STYLE?: true;
    BUTTON_START?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type BondMaxAggregateInputType = {
    ID?: true;
    VIDEO_ID?: true;
    CONTINUITY_CAMPAING?: true;
    CONTINUITY_TEST_AB?: true;
    BUTTON?: true;
    BUTTON_TEXT?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    BUTTON_STYLE?: true;
    BUTTON_START?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type BondCountAggregateInputType = {
    ID?: true;
    VIDEO_ID?: true;
    CONTINUITY_CAMPAING?: true;
    CONTINUITY_TEST_AB?: true;
    BUTTON?: true;
    BUTTON_TEXT?: true;
    BUTTON_CLICK_CAMPAING?: true;
    BUTTON_CLICK_TEST_AB?: true;
    BUTTON_STYLE?: true;
    BUTTON_START?: true;
    X_POSITION?: true;
    Y_POSITION?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type BondAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bond to aggregate.
     */
    where?: Prisma.BondWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bonds to fetch.
     */
    orderBy?: Prisma.BondOrderByWithRelationInput | Prisma.BondOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BondWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bonds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bonds
    **/
    _count?: true | BondCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BondAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BondSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BondMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BondMaxAggregateInputType;
};
export type GetBondAggregateType<T extends BondAggregateArgs> = {
    [P in keyof T & keyof AggregateBond]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBond[P]> : Prisma.GetScalarType<T[P], AggregateBond[P]>;
};
export type BondGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BondWhereInput;
    orderBy?: Prisma.BondOrderByWithAggregationInput | Prisma.BondOrderByWithAggregationInput[];
    by: Prisma.BondScalarFieldEnum[] | Prisma.BondScalarFieldEnum;
    having?: Prisma.BondScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BondCountAggregateInputType | true;
    _avg?: BondAvgAggregateInputType;
    _sum?: BondSumAggregateInputType;
    _min?: BondMinAggregateInputType;
    _max?: BondMaxAggregateInputType;
};
export type BondGroupByOutputType = {
    ID: string;
    VIDEO_ID: string | null;
    CONTINUITY_CAMPAING: number;
    CONTINUITY_TEST_AB: number;
    BUTTON: boolean;
    BUTTON_TEXT: string | null;
    BUTTON_CLICK_CAMPAING: number;
    BUTTON_CLICK_TEST_AB: number;
    BUTTON_STYLE: string | null;
    BUTTON_START: number;
    X_POSITION: number;
    Y_POSITION: number;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: BondCountAggregateOutputType | null;
    _avg: BondAvgAggregateOutputType | null;
    _sum: BondSumAggregateOutputType | null;
    _min: BondMinAggregateOutputType | null;
    _max: BondMaxAggregateOutputType | null;
};
type GetBondGroupByPayload<T extends BondGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BondGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BondGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BondGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BondGroupByOutputType[P]>;
}>>;
export type BondWhereInput = {
    AND?: Prisma.BondWhereInput | Prisma.BondWhereInput[];
    OR?: Prisma.BondWhereInput[];
    NOT?: Prisma.BondWhereInput | Prisma.BondWhereInput[];
    ID?: Prisma.StringFilter<"Bond"> | string;
    VIDEO_ID?: Prisma.StringNullableFilter<"Bond"> | string | null;
    CONTINUITY_CAMPAING?: Prisma.IntFilter<"Bond"> | number;
    CONTINUITY_TEST_AB?: Prisma.IntFilter<"Bond"> | number;
    BUTTON?: Prisma.BoolFilter<"Bond"> | boolean;
    BUTTON_TEXT?: Prisma.StringNullableFilter<"Bond"> | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFilter<"Bond"> | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFilter<"Bond"> | number;
    BUTTON_STYLE?: Prisma.StringNullableFilter<"Bond"> | string | null;
    BUTTON_START?: Prisma.IntFilter<"Bond"> | number;
    X_POSITION?: Prisma.FloatFilter<"Bond"> | number;
    Y_POSITION?: Prisma.FloatFilter<"Bond"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Bond"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Bond"> | Date | string | null;
    VIDEO?: Prisma.XOR<Prisma.VideoNullableScalarRelationFilter, Prisma.VideoWhereInput> | null;
    BOND_VIDEOS?: Prisma.Bond_VideoListRelationFilter;
};
export type BondOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CONTINUITY_CAMPAING?: Prisma.SortOrder;
    CONTINUITY_TEST_AB?: Prisma.SortOrder;
    BUTTON?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_START?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    VIDEO?: Prisma.VideoOrderByWithRelationInput;
    BOND_VIDEOS?: Prisma.Bond_VideoOrderByRelationAggregateInput;
};
export type BondWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.BondWhereInput | Prisma.BondWhereInput[];
    OR?: Prisma.BondWhereInput[];
    NOT?: Prisma.BondWhereInput | Prisma.BondWhereInput[];
    VIDEO_ID?: Prisma.StringNullableFilter<"Bond"> | string | null;
    CONTINUITY_CAMPAING?: Prisma.IntFilter<"Bond"> | number;
    CONTINUITY_TEST_AB?: Prisma.IntFilter<"Bond"> | number;
    BUTTON?: Prisma.BoolFilter<"Bond"> | boolean;
    BUTTON_TEXT?: Prisma.StringNullableFilter<"Bond"> | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFilter<"Bond"> | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFilter<"Bond"> | number;
    BUTTON_STYLE?: Prisma.StringNullableFilter<"Bond"> | string | null;
    BUTTON_START?: Prisma.IntFilter<"Bond"> | number;
    X_POSITION?: Prisma.FloatFilter<"Bond"> | number;
    Y_POSITION?: Prisma.FloatFilter<"Bond"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Bond"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Bond"> | Date | string | null;
    VIDEO?: Prisma.XOR<Prisma.VideoNullableScalarRelationFilter, Prisma.VideoWhereInput> | null;
    BOND_VIDEOS?: Prisma.Bond_VideoListRelationFilter;
}, "ID">;
export type BondOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    CONTINUITY_CAMPAING?: Prisma.SortOrder;
    CONTINUITY_TEST_AB?: Prisma.SortOrder;
    BUTTON?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrderInput | Prisma.SortOrder;
    BUTTON_START?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BondCountOrderByAggregateInput;
    _avg?: Prisma.BondAvgOrderByAggregateInput;
    _max?: Prisma.BondMaxOrderByAggregateInput;
    _min?: Prisma.BondMinOrderByAggregateInput;
    _sum?: Prisma.BondSumOrderByAggregateInput;
};
export type BondScalarWhereWithAggregatesInput = {
    AND?: Prisma.BondScalarWhereWithAggregatesInput | Prisma.BondScalarWhereWithAggregatesInput[];
    OR?: Prisma.BondScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BondScalarWhereWithAggregatesInput | Prisma.BondScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Bond"> | string;
    VIDEO_ID?: Prisma.StringNullableWithAggregatesFilter<"Bond"> | string | null;
    CONTINUITY_CAMPAING?: Prisma.IntWithAggregatesFilter<"Bond"> | number;
    CONTINUITY_TEST_AB?: Prisma.IntWithAggregatesFilter<"Bond"> | number;
    BUTTON?: Prisma.BoolWithAggregatesFilter<"Bond"> | boolean;
    BUTTON_TEXT?: Prisma.StringNullableWithAggregatesFilter<"Bond"> | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntWithAggregatesFilter<"Bond"> | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntWithAggregatesFilter<"Bond"> | number;
    BUTTON_STYLE?: Prisma.StringNullableWithAggregatesFilter<"Bond"> | string | null;
    BUTTON_START?: Prisma.IntWithAggregatesFilter<"Bond"> | number;
    X_POSITION?: Prisma.FloatWithAggregatesFilter<"Bond"> | number;
    Y_POSITION?: Prisma.FloatWithAggregatesFilter<"Bond"> | number;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Bond"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Bond"> | Date | string | null;
};
export type BondCreateInput = {
    ID?: string;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    VIDEO?: Prisma.VideoCreateNestedOneWithoutBONDSInput;
    BOND_VIDEOS?: Prisma.Bond_VideoCreateNestedManyWithoutBONDInput;
};
export type BondUncheckedCreateInput = {
    ID?: string;
    VIDEO_ID?: string | null;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BOND_VIDEOS?: Prisma.Bond_VideoUncheckedCreateNestedManyWithoutBONDInput;
};
export type BondUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    VIDEO?: Prisma.VideoUpdateOneWithoutBONDSNestedInput;
    BOND_VIDEOS?: Prisma.Bond_VideoUpdateManyWithoutBONDNestedInput;
};
export type BondUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BOND_VIDEOS?: Prisma.Bond_VideoUncheckedUpdateManyWithoutBONDNestedInput;
};
export type BondCreateManyInput = {
    ID?: string;
    VIDEO_ID?: string | null;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type BondUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BondUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BondListRelationFilter = {
    every?: Prisma.BondWhereInput;
    some?: Prisma.BondWhereInput;
    none?: Prisma.BondWhereInput;
};
export type BondOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BondNullableScalarRelationFilter = {
    is?: Prisma.BondWhereInput | null;
    isNot?: Prisma.BondWhereInput | null;
};
export type BondCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrder;
    CONTINUITY_CAMPAING?: Prisma.SortOrder;
    CONTINUITY_TEST_AB?: Prisma.SortOrder;
    BUTTON?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrder;
    BUTTON_START?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type BondAvgOrderByAggregateInput = {
    CONTINUITY_CAMPAING?: Prisma.SortOrder;
    CONTINUITY_TEST_AB?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    BUTTON_START?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
};
export type BondMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrder;
    CONTINUITY_CAMPAING?: Prisma.SortOrder;
    CONTINUITY_TEST_AB?: Prisma.SortOrder;
    BUTTON?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrder;
    BUTTON_START?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type BondMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    VIDEO_ID?: Prisma.SortOrder;
    CONTINUITY_CAMPAING?: Prisma.SortOrder;
    CONTINUITY_TEST_AB?: Prisma.SortOrder;
    BUTTON?: Prisma.SortOrder;
    BUTTON_TEXT?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    BUTTON_STYLE?: Prisma.SortOrder;
    BUTTON_START?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type BondSumOrderByAggregateInput = {
    CONTINUITY_CAMPAING?: Prisma.SortOrder;
    CONTINUITY_TEST_AB?: Prisma.SortOrder;
    BUTTON_CLICK_CAMPAING?: Prisma.SortOrder;
    BUTTON_CLICK_TEST_AB?: Prisma.SortOrder;
    BUTTON_START?: Prisma.SortOrder;
    X_POSITION?: Prisma.SortOrder;
    Y_POSITION?: Prisma.SortOrder;
};
export type BondCreateNestedManyWithoutVIDEOInput = {
    create?: Prisma.XOR<Prisma.BondCreateWithoutVIDEOInput, Prisma.BondUncheckedCreateWithoutVIDEOInput> | Prisma.BondCreateWithoutVIDEOInput[] | Prisma.BondUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.BondCreateOrConnectWithoutVIDEOInput | Prisma.BondCreateOrConnectWithoutVIDEOInput[];
    createMany?: Prisma.BondCreateManyVIDEOInputEnvelope;
    connect?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
};
export type BondUncheckedCreateNestedManyWithoutVIDEOInput = {
    create?: Prisma.XOR<Prisma.BondCreateWithoutVIDEOInput, Prisma.BondUncheckedCreateWithoutVIDEOInput> | Prisma.BondCreateWithoutVIDEOInput[] | Prisma.BondUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.BondCreateOrConnectWithoutVIDEOInput | Prisma.BondCreateOrConnectWithoutVIDEOInput[];
    createMany?: Prisma.BondCreateManyVIDEOInputEnvelope;
    connect?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
};
export type BondUpdateManyWithoutVIDEONestedInput = {
    create?: Prisma.XOR<Prisma.BondCreateWithoutVIDEOInput, Prisma.BondUncheckedCreateWithoutVIDEOInput> | Prisma.BondCreateWithoutVIDEOInput[] | Prisma.BondUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.BondCreateOrConnectWithoutVIDEOInput | Prisma.BondCreateOrConnectWithoutVIDEOInput[];
    upsert?: Prisma.BondUpsertWithWhereUniqueWithoutVIDEOInput | Prisma.BondUpsertWithWhereUniqueWithoutVIDEOInput[];
    createMany?: Prisma.BondCreateManyVIDEOInputEnvelope;
    set?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    disconnect?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    delete?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    connect?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    update?: Prisma.BondUpdateWithWhereUniqueWithoutVIDEOInput | Prisma.BondUpdateWithWhereUniqueWithoutVIDEOInput[];
    updateMany?: Prisma.BondUpdateManyWithWhereWithoutVIDEOInput | Prisma.BondUpdateManyWithWhereWithoutVIDEOInput[];
    deleteMany?: Prisma.BondScalarWhereInput | Prisma.BondScalarWhereInput[];
};
export type BondUncheckedUpdateManyWithoutVIDEONestedInput = {
    create?: Prisma.XOR<Prisma.BondCreateWithoutVIDEOInput, Prisma.BondUncheckedCreateWithoutVIDEOInput> | Prisma.BondCreateWithoutVIDEOInput[] | Prisma.BondUncheckedCreateWithoutVIDEOInput[];
    connectOrCreate?: Prisma.BondCreateOrConnectWithoutVIDEOInput | Prisma.BondCreateOrConnectWithoutVIDEOInput[];
    upsert?: Prisma.BondUpsertWithWhereUniqueWithoutVIDEOInput | Prisma.BondUpsertWithWhereUniqueWithoutVIDEOInput[];
    createMany?: Prisma.BondCreateManyVIDEOInputEnvelope;
    set?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    disconnect?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    delete?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    connect?: Prisma.BondWhereUniqueInput | Prisma.BondWhereUniqueInput[];
    update?: Prisma.BondUpdateWithWhereUniqueWithoutVIDEOInput | Prisma.BondUpdateWithWhereUniqueWithoutVIDEOInput[];
    updateMany?: Prisma.BondUpdateManyWithWhereWithoutVIDEOInput | Prisma.BondUpdateManyWithWhereWithoutVIDEOInput[];
    deleteMany?: Prisma.BondScalarWhereInput | Prisma.BondScalarWhereInput[];
};
export type BondCreateNestedOneWithoutBOND_VIDEOSInput = {
    create?: Prisma.XOR<Prisma.BondCreateWithoutBOND_VIDEOSInput, Prisma.BondUncheckedCreateWithoutBOND_VIDEOSInput>;
    connectOrCreate?: Prisma.BondCreateOrConnectWithoutBOND_VIDEOSInput;
    connect?: Prisma.BondWhereUniqueInput;
};
export type BondUpdateOneWithoutBOND_VIDEOSNestedInput = {
    create?: Prisma.XOR<Prisma.BondCreateWithoutBOND_VIDEOSInput, Prisma.BondUncheckedCreateWithoutBOND_VIDEOSInput>;
    connectOrCreate?: Prisma.BondCreateOrConnectWithoutBOND_VIDEOSInput;
    upsert?: Prisma.BondUpsertWithoutBOND_VIDEOSInput;
    disconnect?: Prisma.BondWhereInput | boolean;
    delete?: Prisma.BondWhereInput | boolean;
    connect?: Prisma.BondWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BondUpdateToOneWithWhereWithoutBOND_VIDEOSInput, Prisma.BondUpdateWithoutBOND_VIDEOSInput>, Prisma.BondUncheckedUpdateWithoutBOND_VIDEOSInput>;
};
export type BondCreateWithoutVIDEOInput = {
    ID?: string;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BOND_VIDEOS?: Prisma.Bond_VideoCreateNestedManyWithoutBONDInput;
};
export type BondUncheckedCreateWithoutVIDEOInput = {
    ID?: string;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    BOND_VIDEOS?: Prisma.Bond_VideoUncheckedCreateNestedManyWithoutBONDInput;
};
export type BondCreateOrConnectWithoutVIDEOInput = {
    where: Prisma.BondWhereUniqueInput;
    create: Prisma.XOR<Prisma.BondCreateWithoutVIDEOInput, Prisma.BondUncheckedCreateWithoutVIDEOInput>;
};
export type BondCreateManyVIDEOInputEnvelope = {
    data: Prisma.BondCreateManyVIDEOInput | Prisma.BondCreateManyVIDEOInput[];
    skipDuplicates?: boolean;
};
export type BondUpsertWithWhereUniqueWithoutVIDEOInput = {
    where: Prisma.BondWhereUniqueInput;
    update: Prisma.XOR<Prisma.BondUpdateWithoutVIDEOInput, Prisma.BondUncheckedUpdateWithoutVIDEOInput>;
    create: Prisma.XOR<Prisma.BondCreateWithoutVIDEOInput, Prisma.BondUncheckedCreateWithoutVIDEOInput>;
};
export type BondUpdateWithWhereUniqueWithoutVIDEOInput = {
    where: Prisma.BondWhereUniqueInput;
    data: Prisma.XOR<Prisma.BondUpdateWithoutVIDEOInput, Prisma.BondUncheckedUpdateWithoutVIDEOInput>;
};
export type BondUpdateManyWithWhereWithoutVIDEOInput = {
    where: Prisma.BondScalarWhereInput;
    data: Prisma.XOR<Prisma.BondUpdateManyMutationInput, Prisma.BondUncheckedUpdateManyWithoutVIDEOInput>;
};
export type BondScalarWhereInput = {
    AND?: Prisma.BondScalarWhereInput | Prisma.BondScalarWhereInput[];
    OR?: Prisma.BondScalarWhereInput[];
    NOT?: Prisma.BondScalarWhereInput | Prisma.BondScalarWhereInput[];
    ID?: Prisma.StringFilter<"Bond"> | string;
    VIDEO_ID?: Prisma.StringNullableFilter<"Bond"> | string | null;
    CONTINUITY_CAMPAING?: Prisma.IntFilter<"Bond"> | number;
    CONTINUITY_TEST_AB?: Prisma.IntFilter<"Bond"> | number;
    BUTTON?: Prisma.BoolFilter<"Bond"> | boolean;
    BUTTON_TEXT?: Prisma.StringNullableFilter<"Bond"> | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFilter<"Bond"> | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFilter<"Bond"> | number;
    BUTTON_STYLE?: Prisma.StringNullableFilter<"Bond"> | string | null;
    BUTTON_START?: Prisma.IntFilter<"Bond"> | number;
    X_POSITION?: Prisma.FloatFilter<"Bond"> | number;
    Y_POSITION?: Prisma.FloatFilter<"Bond"> | number;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Bond"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Bond"> | Date | string | null;
};
export type BondCreateWithoutBOND_VIDEOSInput = {
    ID?: string;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    VIDEO?: Prisma.VideoCreateNestedOneWithoutBONDSInput;
};
export type BondUncheckedCreateWithoutBOND_VIDEOSInput = {
    ID?: string;
    VIDEO_ID?: string | null;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type BondCreateOrConnectWithoutBOND_VIDEOSInput = {
    where: Prisma.BondWhereUniqueInput;
    create: Prisma.XOR<Prisma.BondCreateWithoutBOND_VIDEOSInput, Prisma.BondUncheckedCreateWithoutBOND_VIDEOSInput>;
};
export type BondUpsertWithoutBOND_VIDEOSInput = {
    update: Prisma.XOR<Prisma.BondUpdateWithoutBOND_VIDEOSInput, Prisma.BondUncheckedUpdateWithoutBOND_VIDEOSInput>;
    create: Prisma.XOR<Prisma.BondCreateWithoutBOND_VIDEOSInput, Prisma.BondUncheckedCreateWithoutBOND_VIDEOSInput>;
    where?: Prisma.BondWhereInput;
};
export type BondUpdateToOneWithWhereWithoutBOND_VIDEOSInput = {
    where?: Prisma.BondWhereInput;
    data: Prisma.XOR<Prisma.BondUpdateWithoutBOND_VIDEOSInput, Prisma.BondUncheckedUpdateWithoutBOND_VIDEOSInput>;
};
export type BondUpdateWithoutBOND_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    VIDEO?: Prisma.VideoUpdateOneWithoutBONDSNestedInput;
};
export type BondUncheckedUpdateWithoutBOND_VIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    VIDEO_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BondCreateManyVIDEOInput = {
    ID?: string;
    CONTINUITY_CAMPAING?: number;
    CONTINUITY_TEST_AB?: number;
    BUTTON?: boolean;
    BUTTON_TEXT?: string | null;
    BUTTON_CLICK_CAMPAING?: number;
    BUTTON_CLICK_TEST_AB?: number;
    BUTTON_STYLE?: string | null;
    BUTTON_START?: number;
    X_POSITION?: number;
    Y_POSITION?: number;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type BondUpdateWithoutVIDEOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BOND_VIDEOS?: Prisma.Bond_VideoUpdateManyWithoutBONDNestedInput;
};
export type BondUncheckedUpdateWithoutVIDEOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    BOND_VIDEOS?: Prisma.Bond_VideoUncheckedUpdateManyWithoutBONDNestedInput;
};
export type BondUncheckedUpdateManyWithoutVIDEOInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CONTINUITY_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    CONTINUITY_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    BUTTON_TEXT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_CLICK_CAMPAING?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_CLICK_TEST_AB?: Prisma.IntFieldUpdateOperationsInput | number;
    BUTTON_STYLE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    BUTTON_START?: Prisma.IntFieldUpdateOperationsInput | number;
    X_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    Y_POSITION?: Prisma.FloatFieldUpdateOperationsInput | number;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type BondCountOutputType
 */
export type BondCountOutputType = {
    BOND_VIDEOS: number;
};
export type BondCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    BOND_VIDEOS?: boolean | BondCountOutputTypeCountBOND_VIDEOSArgs;
};
/**
 * BondCountOutputType without action
 */
export type BondCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BondCountOutputType
     */
    select?: Prisma.BondCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BondCountOutputType without action
 */
export type BondCountOutputTypeCountBOND_VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Bond_VideoWhereInput;
};
export type BondSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    VIDEO_ID?: boolean;
    CONTINUITY_CAMPAING?: boolean;
    CONTINUITY_TEST_AB?: boolean;
    BUTTON?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_START?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    VIDEO?: boolean | Prisma.Bond$VIDEOArgs<ExtArgs>;
    BOND_VIDEOS?: boolean | Prisma.Bond$BOND_VIDEOSArgs<ExtArgs>;
    _count?: boolean | Prisma.BondCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bond"]>;
export type BondSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    VIDEO_ID?: boolean;
    CONTINUITY_CAMPAING?: boolean;
    CONTINUITY_TEST_AB?: boolean;
    BUTTON?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_START?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    VIDEO?: boolean | Prisma.Bond$VIDEOArgs<ExtArgs>;
}, ExtArgs["result"]["bond"]>;
export type BondSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    VIDEO_ID?: boolean;
    CONTINUITY_CAMPAING?: boolean;
    CONTINUITY_TEST_AB?: boolean;
    BUTTON?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_START?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    VIDEO?: boolean | Prisma.Bond$VIDEOArgs<ExtArgs>;
}, ExtArgs["result"]["bond"]>;
export type BondSelectScalar = {
    ID?: boolean;
    VIDEO_ID?: boolean;
    CONTINUITY_CAMPAING?: boolean;
    CONTINUITY_TEST_AB?: boolean;
    BUTTON?: boolean;
    BUTTON_TEXT?: boolean;
    BUTTON_CLICK_CAMPAING?: boolean;
    BUTTON_CLICK_TEST_AB?: boolean;
    BUTTON_STYLE?: boolean;
    BUTTON_START?: boolean;
    X_POSITION?: boolean;
    Y_POSITION?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type BondOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "VIDEO_ID" | "CONTINUITY_CAMPAING" | "CONTINUITY_TEST_AB" | "BUTTON" | "BUTTON_TEXT" | "BUTTON_CLICK_CAMPAING" | "BUTTON_CLICK_TEST_AB" | "BUTTON_STYLE" | "BUTTON_START" | "X_POSITION" | "Y_POSITION" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["bond"]>;
export type BondInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    VIDEO?: boolean | Prisma.Bond$VIDEOArgs<ExtArgs>;
    BOND_VIDEOS?: boolean | Prisma.Bond$BOND_VIDEOSArgs<ExtArgs>;
    _count?: boolean | Prisma.BondCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BondIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    VIDEO?: boolean | Prisma.Bond$VIDEOArgs<ExtArgs>;
};
export type BondIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    VIDEO?: boolean | Prisma.Bond$VIDEOArgs<ExtArgs>;
};
export type $BondPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bond";
    objects: {
        VIDEO: Prisma.$VideoPayload<ExtArgs> | null;
        BOND_VIDEOS: Prisma.$Bond_VideoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        VIDEO_ID: string | null;
        CONTINUITY_CAMPAING: number;
        CONTINUITY_TEST_AB: number;
        BUTTON: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
        BUTTON_STYLE: string | null;
        BUTTON_START: number;
        X_POSITION: number;
        Y_POSITION: number;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["bond"]>;
    composites: {};
};
export type BondGetPayload<S extends boolean | null | undefined | BondDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BondPayload, S>;
export type BondCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BondFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BondCountAggregateInputType | true;
};
export interface BondDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bond'];
        meta: {
            name: 'Bond';
        };
    };
    /**
     * Find zero or one Bond that matches the filter.
     * @param {BondFindUniqueArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BondFindUniqueArgs>(args: Prisma.SelectSubset<T, BondFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Bond that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BondFindUniqueOrThrowArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BondFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BondFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bond that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondFindFirstArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BondFindFirstArgs>(args?: Prisma.SelectSubset<T, BondFindFirstArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bond that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondFindFirstOrThrowArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BondFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BondFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Bonds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bonds
     * const bonds = await prisma.bond.findMany()
     *
     * // Get first 10 Bonds
     * const bonds = await prisma.bond.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const bondWithIDOnly = await prisma.bond.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends BondFindManyArgs>(args?: Prisma.SelectSubset<T, BondFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Bond.
     * @param {BondCreateArgs} args - Arguments to create a Bond.
     * @example
     * // Create one Bond
     * const Bond = await prisma.bond.create({
     *   data: {
     *     // ... data to create a Bond
     *   }
     * })
     *
     */
    create<T extends BondCreateArgs>(args: Prisma.SelectSubset<T, BondCreateArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Bonds.
     * @param {BondCreateManyArgs} args - Arguments to create many Bonds.
     * @example
     * // Create many Bonds
     * const bond = await prisma.bond.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BondCreateManyArgs>(args?: Prisma.SelectSubset<T, BondCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Bonds and returns the data saved in the database.
     * @param {BondCreateManyAndReturnArgs} args - Arguments to create many Bonds.
     * @example
     * // Create many Bonds
     * const bond = await prisma.bond.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bonds and only return the `ID`
     * const bondWithIDOnly = await prisma.bond.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BondCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BondCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Bond.
     * @param {BondDeleteArgs} args - Arguments to delete one Bond.
     * @example
     * // Delete one Bond
     * const Bond = await prisma.bond.delete({
     *   where: {
     *     // ... filter to delete one Bond
     *   }
     * })
     *
     */
    delete<T extends BondDeleteArgs>(args: Prisma.SelectSubset<T, BondDeleteArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Bond.
     * @param {BondUpdateArgs} args - Arguments to update one Bond.
     * @example
     * // Update one Bond
     * const bond = await prisma.bond.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BondUpdateArgs>(args: Prisma.SelectSubset<T, BondUpdateArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Bonds.
     * @param {BondDeleteManyArgs} args - Arguments to filter Bonds to delete.
     * @example
     * // Delete a few Bonds
     * const { count } = await prisma.bond.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BondDeleteManyArgs>(args?: Prisma.SelectSubset<T, BondDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bonds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bonds
     * const bond = await prisma.bond.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BondUpdateManyArgs>(args: Prisma.SelectSubset<T, BondUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bonds and returns the data updated in the database.
     * @param {BondUpdateManyAndReturnArgs} args - Arguments to update many Bonds.
     * @example
     * // Update many Bonds
     * const bond = await prisma.bond.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bonds and only return the `ID`
     * const bondWithIDOnly = await prisma.bond.updateManyAndReturn({
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
    updateManyAndReturn<T extends BondUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BondUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Bond.
     * @param {BondUpsertArgs} args - Arguments to update or create a Bond.
     * @example
     * // Update or create a Bond
     * const bond = await prisma.bond.upsert({
     *   create: {
     *     // ... data to create a Bond
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bond we want to update
     *   }
     * })
     */
    upsert<T extends BondUpsertArgs>(args: Prisma.SelectSubset<T, BondUpsertArgs<ExtArgs>>): Prisma.Prisma__BondClient<runtime.Types.Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Bonds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondCountArgs} args - Arguments to filter Bonds to count.
     * @example
     * // Count the number of Bonds
     * const count = await prisma.bond.count({
     *   where: {
     *     // ... the filter for the Bonds we want to count
     *   }
     * })
    **/
    count<T extends BondCountArgs>(args?: Prisma.Subset<T, BondCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BondCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Bond.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BondAggregateArgs>(args: Prisma.Subset<T, BondAggregateArgs>): Prisma.PrismaPromise<GetBondAggregateType<T>>;
    /**
     * Group by Bond.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BondGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BondGroupByArgs['orderBy'];
    } : {
        orderBy?: BondGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BondGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBondGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Bond model
     */
    readonly fields: BondFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Bond.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BondClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    VIDEO<T extends Prisma.Bond$VIDEOArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bond$VIDEOArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    BOND_VIDEOS<T extends Prisma.Bond$BOND_VIDEOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bond$BOND_VIDEOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Bond_VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Bond model
 */
export interface BondFieldRefs {
    readonly ID: Prisma.FieldRef<"Bond", 'String'>;
    readonly VIDEO_ID: Prisma.FieldRef<"Bond", 'String'>;
    readonly CONTINUITY_CAMPAING: Prisma.FieldRef<"Bond", 'Int'>;
    readonly CONTINUITY_TEST_AB: Prisma.FieldRef<"Bond", 'Int'>;
    readonly BUTTON: Prisma.FieldRef<"Bond", 'Boolean'>;
    readonly BUTTON_TEXT: Prisma.FieldRef<"Bond", 'String'>;
    readonly BUTTON_CLICK_CAMPAING: Prisma.FieldRef<"Bond", 'Int'>;
    readonly BUTTON_CLICK_TEST_AB: Prisma.FieldRef<"Bond", 'Int'>;
    readonly BUTTON_STYLE: Prisma.FieldRef<"Bond", 'String'>;
    readonly BUTTON_START: Prisma.FieldRef<"Bond", 'Int'>;
    readonly X_POSITION: Prisma.FieldRef<"Bond", 'Float'>;
    readonly Y_POSITION: Prisma.FieldRef<"Bond", 'Float'>;
    readonly CREATED_AT: Prisma.FieldRef<"Bond", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Bond", 'DateTime'>;
}
/**
 * Bond findUnique
 */
export type BondFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond to fetch.
     */
    where: Prisma.BondWhereUniqueInput;
};
/**
 * Bond findUniqueOrThrow
 */
export type BondFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond to fetch.
     */
    where: Prisma.BondWhereUniqueInput;
};
/**
 * Bond findFirst
 */
export type BondFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond to fetch.
     */
    where?: Prisma.BondWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bonds to fetch.
     */
    orderBy?: Prisma.BondOrderByWithRelationInput | Prisma.BondOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bonds.
     */
    cursor?: Prisma.BondWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bonds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bonds.
     */
    distinct?: Prisma.BondScalarFieldEnum | Prisma.BondScalarFieldEnum[];
};
/**
 * Bond findFirstOrThrow
 */
export type BondFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bond to fetch.
     */
    where?: Prisma.BondWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bonds to fetch.
     */
    orderBy?: Prisma.BondOrderByWithRelationInput | Prisma.BondOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bonds.
     */
    cursor?: Prisma.BondWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bonds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bonds.
     */
    distinct?: Prisma.BondScalarFieldEnum | Prisma.BondScalarFieldEnum[];
};
/**
 * Bond findMany
 */
export type BondFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bonds to fetch.
     */
    where?: Prisma.BondWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bonds to fetch.
     */
    orderBy?: Prisma.BondOrderByWithRelationInput | Prisma.BondOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bonds.
     */
    cursor?: Prisma.BondWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bonds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bonds.
     */
    distinct?: Prisma.BondScalarFieldEnum | Prisma.BondScalarFieldEnum[];
};
/**
 * Bond create
 */
export type BondCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Bond.
     */
    data?: Prisma.XOR<Prisma.BondCreateInput, Prisma.BondUncheckedCreateInput>;
};
/**
 * Bond createMany
 */
export type BondCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bonds.
     */
    data: Prisma.BondCreateManyInput | Prisma.BondCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Bond createManyAndReturn
 */
export type BondCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: Prisma.BondSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bond
     */
    omit?: Prisma.BondOmit<ExtArgs> | null;
    /**
     * The data used to create many Bonds.
     */
    data: Prisma.BondCreateManyInput | Prisma.BondCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BondIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Bond update
 */
export type BondUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Bond.
     */
    data: Prisma.XOR<Prisma.BondUpdateInput, Prisma.BondUncheckedUpdateInput>;
    /**
     * Choose, which Bond to update.
     */
    where: Prisma.BondWhereUniqueInput;
};
/**
 * Bond updateMany
 */
export type BondUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Bonds.
     */
    data: Prisma.XOR<Prisma.BondUpdateManyMutationInput, Prisma.BondUncheckedUpdateManyInput>;
    /**
     * Filter which Bonds to update
     */
    where?: Prisma.BondWhereInput;
    /**
     * Limit how many Bonds to update.
     */
    limit?: number;
};
/**
 * Bond updateManyAndReturn
 */
export type BondUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: Prisma.BondSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bond
     */
    omit?: Prisma.BondOmit<ExtArgs> | null;
    /**
     * The data used to update Bonds.
     */
    data: Prisma.XOR<Prisma.BondUpdateManyMutationInput, Prisma.BondUncheckedUpdateManyInput>;
    /**
     * Filter which Bonds to update
     */
    where?: Prisma.BondWhereInput;
    /**
     * Limit how many Bonds to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BondIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Bond upsert
 */
export type BondUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Bond to update in case it exists.
     */
    where: Prisma.BondWhereUniqueInput;
    /**
     * In case the Bond found by the `where` argument doesn't exist, create a new Bond with this data.
     */
    create: Prisma.XOR<Prisma.BondCreateInput, Prisma.BondUncheckedCreateInput>;
    /**
     * In case the Bond was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BondUpdateInput, Prisma.BondUncheckedUpdateInput>;
};
/**
 * Bond delete
 */
export type BondDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Bond to delete.
     */
    where: Prisma.BondWhereUniqueInput;
};
/**
 * Bond deleteMany
 */
export type BondDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bonds to delete
     */
    where?: Prisma.BondWhereInput;
    /**
     * Limit how many Bonds to delete.
     */
    limit?: number;
};
/**
 * Bond.VIDEO
 */
export type Bond$VIDEOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Bond.BOND_VIDEOS
 */
export type Bond$BOND_VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Bond without action
 */
export type BondDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Bond.d.ts.map
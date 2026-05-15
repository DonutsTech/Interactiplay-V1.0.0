import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model History_Plays
 *
 */
export type History_PlaysModel = runtime.Types.Result.DefaultSelection<Prisma.$History_PlaysPayload>;
export type AggregateHistory_Plays = {
    _count: History_PlaysCountAggregateOutputType | null;
    _avg: History_PlaysAvgAggregateOutputType | null;
    _sum: History_PlaysSumAggregateOutputType | null;
    _min: History_PlaysMinAggregateOutputType | null;
    _max: History_PlaysMaxAggregateOutputType | null;
};
export type History_PlaysAvgAggregateOutputType = {
    QTD_PLAYS: number | null;
    PRICE_MONTH: number | null;
};
export type History_PlaysSumAggregateOutputType = {
    QTD_PLAYS: number | null;
    PRICE_MONTH: number | null;
};
export type History_PlaysMinAggregateOutputType = {
    ID: string | null;
    QTD_PLAYS: number | null;
    PRICE_MONTH: number | null;
    STATUS: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    USER_ID: string | null;
};
export type History_PlaysMaxAggregateOutputType = {
    ID: string | null;
    QTD_PLAYS: number | null;
    PRICE_MONTH: number | null;
    STATUS: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    USER_ID: string | null;
};
export type History_PlaysCountAggregateOutputType = {
    ID: number;
    QTD_PLAYS: number;
    PRICE_MONTH: number;
    STATUS: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    USER_ID: number;
    _all: number;
};
export type History_PlaysAvgAggregateInputType = {
    QTD_PLAYS?: true;
    PRICE_MONTH?: true;
};
export type History_PlaysSumAggregateInputType = {
    QTD_PLAYS?: true;
    PRICE_MONTH?: true;
};
export type History_PlaysMinAggregateInputType = {
    ID?: true;
    QTD_PLAYS?: true;
    PRICE_MONTH?: true;
    STATUS?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    USER_ID?: true;
};
export type History_PlaysMaxAggregateInputType = {
    ID?: true;
    QTD_PLAYS?: true;
    PRICE_MONTH?: true;
    STATUS?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    USER_ID?: true;
};
export type History_PlaysCountAggregateInputType = {
    ID?: true;
    QTD_PLAYS?: true;
    PRICE_MONTH?: true;
    STATUS?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    USER_ID?: true;
    _all?: true;
};
export type History_PlaysAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which History_Plays to aggregate.
     */
    where?: Prisma.History_PlaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of History_Plays to fetch.
     */
    orderBy?: Prisma.History_PlaysOrderByWithRelationInput | Prisma.History_PlaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.History_PlaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` History_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` History_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned History_Plays
    **/
    _count?: true | History_PlaysCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: History_PlaysAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: History_PlaysSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: History_PlaysMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: History_PlaysMaxAggregateInputType;
};
export type GetHistory_PlaysAggregateType<T extends History_PlaysAggregateArgs> = {
    [P in keyof T & keyof AggregateHistory_Plays]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistory_Plays[P]> : Prisma.GetScalarType<T[P], AggregateHistory_Plays[P]>;
};
export type History_PlaysGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.History_PlaysWhereInput;
    orderBy?: Prisma.History_PlaysOrderByWithAggregationInput | Prisma.History_PlaysOrderByWithAggregationInput[];
    by: Prisma.History_PlaysScalarFieldEnum[] | Prisma.History_PlaysScalarFieldEnum;
    having?: Prisma.History_PlaysScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: History_PlaysCountAggregateInputType | true;
    _avg?: History_PlaysAvgAggregateInputType;
    _sum?: History_PlaysSumAggregateInputType;
    _min?: History_PlaysMinAggregateInputType;
    _max?: History_PlaysMaxAggregateInputType;
};
export type History_PlaysGroupByOutputType = {
    ID: string;
    QTD_PLAYS: number;
    PRICE_MONTH: number | null;
    STATUS: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    USER_ID: string | null;
    _count: History_PlaysCountAggregateOutputType | null;
    _avg: History_PlaysAvgAggregateOutputType | null;
    _sum: History_PlaysSumAggregateOutputType | null;
    _min: History_PlaysMinAggregateOutputType | null;
    _max: History_PlaysMaxAggregateOutputType | null;
};
type GetHistory_PlaysGroupByPayload<T extends History_PlaysGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<History_PlaysGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof History_PlaysGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], History_PlaysGroupByOutputType[P]> : Prisma.GetScalarType<T[P], History_PlaysGroupByOutputType[P]>;
}>>;
export type History_PlaysWhereInput = {
    AND?: Prisma.History_PlaysWhereInput | Prisma.History_PlaysWhereInput[];
    OR?: Prisma.History_PlaysWhereInput[];
    NOT?: Prisma.History_PlaysWhereInput | Prisma.History_PlaysWhereInput[];
    ID?: Prisma.StringFilter<"History_Plays"> | string;
    QTD_PLAYS?: Prisma.IntFilter<"History_Plays"> | number;
    PRICE_MONTH?: Prisma.FloatNullableFilter<"History_Plays"> | number | null;
    STATUS?: Prisma.StringNullableFilter<"History_Plays"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"History_Plays"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"History_Plays"> | Date | string | null;
    USER_ID?: Prisma.StringNullableFilter<"History_Plays"> | string | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type History_PlaysOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    QTD_PLAYS?: Prisma.SortOrder;
    PRICE_MONTH?: Prisma.SortOrderInput | Prisma.SortOrder;
    STATUS?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER?: Prisma.UserOrderByWithRelationInput;
};
export type History_PlaysWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.History_PlaysWhereInput | Prisma.History_PlaysWhereInput[];
    OR?: Prisma.History_PlaysWhereInput[];
    NOT?: Prisma.History_PlaysWhereInput | Prisma.History_PlaysWhereInput[];
    QTD_PLAYS?: Prisma.IntFilter<"History_Plays"> | number;
    PRICE_MONTH?: Prisma.FloatNullableFilter<"History_Plays"> | number | null;
    STATUS?: Prisma.StringNullableFilter<"History_Plays"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"History_Plays"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"History_Plays"> | Date | string | null;
    USER_ID?: Prisma.StringNullableFilter<"History_Plays"> | string | null;
    USER?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "ID">;
export type History_PlaysOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    QTD_PLAYS?: Prisma.SortOrder;
    PRICE_MONTH?: Prisma.SortOrderInput | Prisma.SortOrder;
    STATUS?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    USER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.History_PlaysCountOrderByAggregateInput;
    _avg?: Prisma.History_PlaysAvgOrderByAggregateInput;
    _max?: Prisma.History_PlaysMaxOrderByAggregateInput;
    _min?: Prisma.History_PlaysMinOrderByAggregateInput;
    _sum?: Prisma.History_PlaysSumOrderByAggregateInput;
};
export type History_PlaysScalarWhereWithAggregatesInput = {
    AND?: Prisma.History_PlaysScalarWhereWithAggregatesInput | Prisma.History_PlaysScalarWhereWithAggregatesInput[];
    OR?: Prisma.History_PlaysScalarWhereWithAggregatesInput[];
    NOT?: Prisma.History_PlaysScalarWhereWithAggregatesInput | Prisma.History_PlaysScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"History_Plays"> | string;
    QTD_PLAYS?: Prisma.IntWithAggregatesFilter<"History_Plays"> | number;
    PRICE_MONTH?: Prisma.FloatNullableWithAggregatesFilter<"History_Plays"> | number | null;
    STATUS?: Prisma.StringNullableWithAggregatesFilter<"History_Plays"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"History_Plays"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"History_Plays"> | Date | string | null;
    USER_ID?: Prisma.StringNullableWithAggregatesFilter<"History_Plays"> | string | null;
};
export type History_PlaysCreateInput = {
    ID?: string;
    QTD_PLAYS?: number;
    PRICE_MONTH?: number | null;
    STATUS?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    USER?: Prisma.UserCreateNestedOneWithoutHISTORY_PLAYSInput;
};
export type History_PlaysUncheckedCreateInput = {
    ID?: string;
    QTD_PLAYS?: number;
    PRICE_MONTH?: number | null;
    STATUS?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    USER_ID?: string | null;
};
export type History_PlaysUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    QTD_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PRICE_MONTH?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USER?: Prisma.UserUpdateOneWithoutHISTORY_PLAYSNestedInput;
};
export type History_PlaysUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    QTD_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PRICE_MONTH?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type History_PlaysCreateManyInput = {
    ID?: string;
    QTD_PLAYS?: number;
    PRICE_MONTH?: number | null;
    STATUS?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    USER_ID?: string | null;
};
export type History_PlaysUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    QTD_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PRICE_MONTH?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type History_PlaysUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    QTD_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PRICE_MONTH?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type History_PlaysListRelationFilter = {
    every?: Prisma.History_PlaysWhereInput;
    some?: Prisma.History_PlaysWhereInput;
    none?: Prisma.History_PlaysWhereInput;
};
export type History_PlaysOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type History_PlaysCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    QTD_PLAYS?: Prisma.SortOrder;
    PRICE_MONTH?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
};
export type History_PlaysAvgOrderByAggregateInput = {
    QTD_PLAYS?: Prisma.SortOrder;
    PRICE_MONTH?: Prisma.SortOrder;
};
export type History_PlaysMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    QTD_PLAYS?: Prisma.SortOrder;
    PRICE_MONTH?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
};
export type History_PlaysMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    QTD_PLAYS?: Prisma.SortOrder;
    PRICE_MONTH?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
    USER_ID?: Prisma.SortOrder;
};
export type History_PlaysSumOrderByAggregateInput = {
    QTD_PLAYS?: Prisma.SortOrder;
    PRICE_MONTH?: Prisma.SortOrder;
};
export type History_PlaysCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.History_PlaysCreateWithoutUSERInput, Prisma.History_PlaysUncheckedCreateWithoutUSERInput> | Prisma.History_PlaysCreateWithoutUSERInput[] | Prisma.History_PlaysUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.History_PlaysCreateOrConnectWithoutUSERInput | Prisma.History_PlaysCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.History_PlaysCreateManyUSERInputEnvelope;
    connect?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
};
export type History_PlaysUncheckedCreateNestedManyWithoutUSERInput = {
    create?: Prisma.XOR<Prisma.History_PlaysCreateWithoutUSERInput, Prisma.History_PlaysUncheckedCreateWithoutUSERInput> | Prisma.History_PlaysCreateWithoutUSERInput[] | Prisma.History_PlaysUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.History_PlaysCreateOrConnectWithoutUSERInput | Prisma.History_PlaysCreateOrConnectWithoutUSERInput[];
    createMany?: Prisma.History_PlaysCreateManyUSERInputEnvelope;
    connect?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
};
export type History_PlaysUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.History_PlaysCreateWithoutUSERInput, Prisma.History_PlaysUncheckedCreateWithoutUSERInput> | Prisma.History_PlaysCreateWithoutUSERInput[] | Prisma.History_PlaysUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.History_PlaysCreateOrConnectWithoutUSERInput | Prisma.History_PlaysCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.History_PlaysUpsertWithWhereUniqueWithoutUSERInput | Prisma.History_PlaysUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.History_PlaysCreateManyUSERInputEnvelope;
    set?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    disconnect?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    delete?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    connect?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    update?: Prisma.History_PlaysUpdateWithWhereUniqueWithoutUSERInput | Prisma.History_PlaysUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.History_PlaysUpdateManyWithWhereWithoutUSERInput | Prisma.History_PlaysUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.History_PlaysScalarWhereInput | Prisma.History_PlaysScalarWhereInput[];
};
export type History_PlaysUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: Prisma.XOR<Prisma.History_PlaysCreateWithoutUSERInput, Prisma.History_PlaysUncheckedCreateWithoutUSERInput> | Prisma.History_PlaysCreateWithoutUSERInput[] | Prisma.History_PlaysUncheckedCreateWithoutUSERInput[];
    connectOrCreate?: Prisma.History_PlaysCreateOrConnectWithoutUSERInput | Prisma.History_PlaysCreateOrConnectWithoutUSERInput[];
    upsert?: Prisma.History_PlaysUpsertWithWhereUniqueWithoutUSERInput | Prisma.History_PlaysUpsertWithWhereUniqueWithoutUSERInput[];
    createMany?: Prisma.History_PlaysCreateManyUSERInputEnvelope;
    set?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    disconnect?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    delete?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    connect?: Prisma.History_PlaysWhereUniqueInput | Prisma.History_PlaysWhereUniqueInput[];
    update?: Prisma.History_PlaysUpdateWithWhereUniqueWithoutUSERInput | Prisma.History_PlaysUpdateWithWhereUniqueWithoutUSERInput[];
    updateMany?: Prisma.History_PlaysUpdateManyWithWhereWithoutUSERInput | Prisma.History_PlaysUpdateManyWithWhereWithoutUSERInput[];
    deleteMany?: Prisma.History_PlaysScalarWhereInput | Prisma.History_PlaysScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type History_PlaysCreateWithoutUSERInput = {
    ID?: string;
    QTD_PLAYS?: number;
    PRICE_MONTH?: number | null;
    STATUS?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type History_PlaysUncheckedCreateWithoutUSERInput = {
    ID?: string;
    QTD_PLAYS?: number;
    PRICE_MONTH?: number | null;
    STATUS?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type History_PlaysCreateOrConnectWithoutUSERInput = {
    where: Prisma.History_PlaysWhereUniqueInput;
    create: Prisma.XOR<Prisma.History_PlaysCreateWithoutUSERInput, Prisma.History_PlaysUncheckedCreateWithoutUSERInput>;
};
export type History_PlaysCreateManyUSERInputEnvelope = {
    data: Prisma.History_PlaysCreateManyUSERInput | Prisma.History_PlaysCreateManyUSERInput[];
    skipDuplicates?: boolean;
};
export type History_PlaysUpsertWithWhereUniqueWithoutUSERInput = {
    where: Prisma.History_PlaysWhereUniqueInput;
    update: Prisma.XOR<Prisma.History_PlaysUpdateWithoutUSERInput, Prisma.History_PlaysUncheckedUpdateWithoutUSERInput>;
    create: Prisma.XOR<Prisma.History_PlaysCreateWithoutUSERInput, Prisma.History_PlaysUncheckedCreateWithoutUSERInput>;
};
export type History_PlaysUpdateWithWhereUniqueWithoutUSERInput = {
    where: Prisma.History_PlaysWhereUniqueInput;
    data: Prisma.XOR<Prisma.History_PlaysUpdateWithoutUSERInput, Prisma.History_PlaysUncheckedUpdateWithoutUSERInput>;
};
export type History_PlaysUpdateManyWithWhereWithoutUSERInput = {
    where: Prisma.History_PlaysScalarWhereInput;
    data: Prisma.XOR<Prisma.History_PlaysUpdateManyMutationInput, Prisma.History_PlaysUncheckedUpdateManyWithoutUSERInput>;
};
export type History_PlaysScalarWhereInput = {
    AND?: Prisma.History_PlaysScalarWhereInput | Prisma.History_PlaysScalarWhereInput[];
    OR?: Prisma.History_PlaysScalarWhereInput[];
    NOT?: Prisma.History_PlaysScalarWhereInput | Prisma.History_PlaysScalarWhereInput[];
    ID?: Prisma.StringFilter<"History_Plays"> | string;
    QTD_PLAYS?: Prisma.IntFilter<"History_Plays"> | number;
    PRICE_MONTH?: Prisma.FloatNullableFilter<"History_Plays"> | number | null;
    STATUS?: Prisma.StringNullableFilter<"History_Plays"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"History_Plays"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"History_Plays"> | Date | string | null;
    USER_ID?: Prisma.StringNullableFilter<"History_Plays"> | string | null;
};
export type History_PlaysCreateManyUSERInput = {
    ID?: string;
    QTD_PLAYS?: number;
    PRICE_MONTH?: number | null;
    STATUS?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type History_PlaysUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    QTD_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PRICE_MONTH?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type History_PlaysUncheckedUpdateWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    QTD_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PRICE_MONTH?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type History_PlaysUncheckedUpdateManyWithoutUSERInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    QTD_PLAYS?: Prisma.IntFieldUpdateOperationsInput | number;
    PRICE_MONTH?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type History_PlaysSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    QTD_PLAYS?: boolean;
    PRICE_MONTH?: boolean;
    STATUS?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    USER_ID?: boolean;
    USER?: boolean | Prisma.History_Plays$USERArgs<ExtArgs>;
}, ExtArgs["result"]["history_Plays"]>;
export type History_PlaysSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    QTD_PLAYS?: boolean;
    PRICE_MONTH?: boolean;
    STATUS?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    USER_ID?: boolean;
    USER?: boolean | Prisma.History_Plays$USERArgs<ExtArgs>;
}, ExtArgs["result"]["history_Plays"]>;
export type History_PlaysSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    QTD_PLAYS?: boolean;
    PRICE_MONTH?: boolean;
    STATUS?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    USER_ID?: boolean;
    USER?: boolean | Prisma.History_Plays$USERArgs<ExtArgs>;
}, ExtArgs["result"]["history_Plays"]>;
export type History_PlaysSelectScalar = {
    ID?: boolean;
    QTD_PLAYS?: boolean;
    PRICE_MONTH?: boolean;
    STATUS?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    USER_ID?: boolean;
};
export type History_PlaysOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "QTD_PLAYS" | "PRICE_MONTH" | "STATUS" | "CREATED_AT" | "UPDATED_AT" | "USER_ID", ExtArgs["result"]["history_Plays"]>;
export type History_PlaysInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USER?: boolean | Prisma.History_Plays$USERArgs<ExtArgs>;
};
export type History_PlaysIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USER?: boolean | Prisma.History_Plays$USERArgs<ExtArgs>;
};
export type History_PlaysIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USER?: boolean | Prisma.History_Plays$USERArgs<ExtArgs>;
};
export type $History_PlaysPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "History_Plays";
    objects: {
        USER: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        QTD_PLAYS: number;
        PRICE_MONTH: number | null;
        STATUS: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
    }, ExtArgs["result"]["history_Plays"]>;
    composites: {};
};
export type History_PlaysGetPayload<S extends boolean | null | undefined | History_PlaysDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload, S>;
export type History_PlaysCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<History_PlaysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: History_PlaysCountAggregateInputType | true;
};
export interface History_PlaysDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['History_Plays'];
        meta: {
            name: 'History_Plays';
        };
    };
    /**
     * Find zero or one History_Plays that matches the filter.
     * @param {History_PlaysFindUniqueArgs} args - Arguments to find a History_Plays
     * @example
     * // Get one History_Plays
     * const history_Plays = await prisma.history_Plays.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends History_PlaysFindUniqueArgs>(args: Prisma.SelectSubset<T, History_PlaysFindUniqueArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one History_Plays that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {History_PlaysFindUniqueOrThrowArgs} args - Arguments to find a History_Plays
     * @example
     * // Get one History_Plays
     * const history_Plays = await prisma.history_Plays.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends History_PlaysFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, History_PlaysFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first History_Plays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_PlaysFindFirstArgs} args - Arguments to find a History_Plays
     * @example
     * // Get one History_Plays
     * const history_Plays = await prisma.history_Plays.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends History_PlaysFindFirstArgs>(args?: Prisma.SelectSubset<T, History_PlaysFindFirstArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first History_Plays that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_PlaysFindFirstOrThrowArgs} args - Arguments to find a History_Plays
     * @example
     * // Get one History_Plays
     * const history_Plays = await prisma.history_Plays.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends History_PlaysFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, History_PlaysFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more History_Plays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_PlaysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all History_Plays
     * const history_Plays = await prisma.history_Plays.findMany()
     *
     * // Get first 10 History_Plays
     * const history_Plays = await prisma.history_Plays.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const history_PlaysWithIDOnly = await prisma.history_Plays.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends History_PlaysFindManyArgs>(args?: Prisma.SelectSubset<T, History_PlaysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a History_Plays.
     * @param {History_PlaysCreateArgs} args - Arguments to create a History_Plays.
     * @example
     * // Create one History_Plays
     * const History_Plays = await prisma.history_Plays.create({
     *   data: {
     *     // ... data to create a History_Plays
     *   }
     * })
     *
     */
    create<T extends History_PlaysCreateArgs>(args: Prisma.SelectSubset<T, History_PlaysCreateArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many History_Plays.
     * @param {History_PlaysCreateManyArgs} args - Arguments to create many History_Plays.
     * @example
     * // Create many History_Plays
     * const history_Plays = await prisma.history_Plays.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends History_PlaysCreateManyArgs>(args?: Prisma.SelectSubset<T, History_PlaysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many History_Plays and returns the data saved in the database.
     * @param {History_PlaysCreateManyAndReturnArgs} args - Arguments to create many History_Plays.
     * @example
     * // Create many History_Plays
     * const history_Plays = await prisma.history_Plays.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many History_Plays and only return the `ID`
     * const history_PlaysWithIDOnly = await prisma.history_Plays.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends History_PlaysCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, History_PlaysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a History_Plays.
     * @param {History_PlaysDeleteArgs} args - Arguments to delete one History_Plays.
     * @example
     * // Delete one History_Plays
     * const History_Plays = await prisma.history_Plays.delete({
     *   where: {
     *     // ... filter to delete one History_Plays
     *   }
     * })
     *
     */
    delete<T extends History_PlaysDeleteArgs>(args: Prisma.SelectSubset<T, History_PlaysDeleteArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one History_Plays.
     * @param {History_PlaysUpdateArgs} args - Arguments to update one History_Plays.
     * @example
     * // Update one History_Plays
     * const history_Plays = await prisma.history_Plays.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends History_PlaysUpdateArgs>(args: Prisma.SelectSubset<T, History_PlaysUpdateArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more History_Plays.
     * @param {History_PlaysDeleteManyArgs} args - Arguments to filter History_Plays to delete.
     * @example
     * // Delete a few History_Plays
     * const { count } = await prisma.history_Plays.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends History_PlaysDeleteManyArgs>(args?: Prisma.SelectSubset<T, History_PlaysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more History_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_PlaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many History_Plays
     * const history_Plays = await prisma.history_Plays.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends History_PlaysUpdateManyArgs>(args: Prisma.SelectSubset<T, History_PlaysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more History_Plays and returns the data updated in the database.
     * @param {History_PlaysUpdateManyAndReturnArgs} args - Arguments to update many History_Plays.
     * @example
     * // Update many History_Plays
     * const history_Plays = await prisma.history_Plays.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more History_Plays and only return the `ID`
     * const history_PlaysWithIDOnly = await prisma.history_Plays.updateManyAndReturn({
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
    updateManyAndReturn<T extends History_PlaysUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, History_PlaysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one History_Plays.
     * @param {History_PlaysUpsertArgs} args - Arguments to update or create a History_Plays.
     * @example
     * // Update or create a History_Plays
     * const history_Plays = await prisma.history_Plays.upsert({
     *   create: {
     *     // ... data to create a History_Plays
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History_Plays we want to update
     *   }
     * })
     */
    upsert<T extends History_PlaysUpsertArgs>(args: Prisma.SelectSubset<T, History_PlaysUpsertArgs<ExtArgs>>): Prisma.Prisma__History_PlaysClient<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of History_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_PlaysCountArgs} args - Arguments to filter History_Plays to count.
     * @example
     * // Count the number of History_Plays
     * const count = await prisma.history_Plays.count({
     *   where: {
     *     // ... the filter for the History_Plays we want to count
     *   }
     * })
    **/
    count<T extends History_PlaysCountArgs>(args?: Prisma.Subset<T, History_PlaysCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], History_PlaysCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a History_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_PlaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends History_PlaysAggregateArgs>(args: Prisma.Subset<T, History_PlaysAggregateArgs>): Prisma.PrismaPromise<GetHistory_PlaysAggregateType<T>>;
    /**
     * Group by History_Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {History_PlaysGroupByArgs} args - Group by arguments.
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
    groupBy<T extends History_PlaysGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: History_PlaysGroupByArgs['orderBy'];
    } : {
        orderBy?: History_PlaysGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, History_PlaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistory_PlaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the History_Plays model
     */
    readonly fields: History_PlaysFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for History_Plays.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__History_PlaysClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USER<T extends Prisma.History_Plays$USERArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.History_Plays$USERArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the History_Plays model
 */
export interface History_PlaysFieldRefs {
    readonly ID: Prisma.FieldRef<"History_Plays", 'String'>;
    readonly QTD_PLAYS: Prisma.FieldRef<"History_Plays", 'Int'>;
    readonly PRICE_MONTH: Prisma.FieldRef<"History_Plays", 'Float'>;
    readonly STATUS: Prisma.FieldRef<"History_Plays", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"History_Plays", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"History_Plays", 'DateTime'>;
    readonly USER_ID: Prisma.FieldRef<"History_Plays", 'String'>;
}
/**
 * History_Plays findUnique
 */
export type History_PlaysFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * Filter, which History_Plays to fetch.
     */
    where: Prisma.History_PlaysWhereUniqueInput;
};
/**
 * History_Plays findUniqueOrThrow
 */
export type History_PlaysFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * Filter, which History_Plays to fetch.
     */
    where: Prisma.History_PlaysWhereUniqueInput;
};
/**
 * History_Plays findFirst
 */
export type History_PlaysFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * Filter, which History_Plays to fetch.
     */
    where?: Prisma.History_PlaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of History_Plays to fetch.
     */
    orderBy?: Prisma.History_PlaysOrderByWithRelationInput | Prisma.History_PlaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for History_Plays.
     */
    cursor?: Prisma.History_PlaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` History_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` History_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of History_Plays.
     */
    distinct?: Prisma.History_PlaysScalarFieldEnum | Prisma.History_PlaysScalarFieldEnum[];
};
/**
 * History_Plays findFirstOrThrow
 */
export type History_PlaysFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * Filter, which History_Plays to fetch.
     */
    where?: Prisma.History_PlaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of History_Plays to fetch.
     */
    orderBy?: Prisma.History_PlaysOrderByWithRelationInput | Prisma.History_PlaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for History_Plays.
     */
    cursor?: Prisma.History_PlaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` History_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` History_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of History_Plays.
     */
    distinct?: Prisma.History_PlaysScalarFieldEnum | Prisma.History_PlaysScalarFieldEnum[];
};
/**
 * History_Plays findMany
 */
export type History_PlaysFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * Filter, which History_Plays to fetch.
     */
    where?: Prisma.History_PlaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of History_Plays to fetch.
     */
    orderBy?: Prisma.History_PlaysOrderByWithRelationInput | Prisma.History_PlaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing History_Plays.
     */
    cursor?: Prisma.History_PlaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` History_Plays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` History_Plays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of History_Plays.
     */
    distinct?: Prisma.History_PlaysScalarFieldEnum | Prisma.History_PlaysScalarFieldEnum[];
};
/**
 * History_Plays create
 */
export type History_PlaysCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * The data needed to create a History_Plays.
     */
    data?: Prisma.XOR<Prisma.History_PlaysCreateInput, Prisma.History_PlaysUncheckedCreateInput>;
};
/**
 * History_Plays createMany
 */
export type History_PlaysCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many History_Plays.
     */
    data: Prisma.History_PlaysCreateManyInput | Prisma.History_PlaysCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * History_Plays createManyAndReturn
 */
export type History_PlaysCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * The data used to create many History_Plays.
     */
    data: Prisma.History_PlaysCreateManyInput | Prisma.History_PlaysCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * History_Plays update
 */
export type History_PlaysUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * The data needed to update a History_Plays.
     */
    data: Prisma.XOR<Prisma.History_PlaysUpdateInput, Prisma.History_PlaysUncheckedUpdateInput>;
    /**
     * Choose, which History_Plays to update.
     */
    where: Prisma.History_PlaysWhereUniqueInput;
};
/**
 * History_Plays updateMany
 */
export type History_PlaysUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update History_Plays.
     */
    data: Prisma.XOR<Prisma.History_PlaysUpdateManyMutationInput, Prisma.History_PlaysUncheckedUpdateManyInput>;
    /**
     * Filter which History_Plays to update
     */
    where?: Prisma.History_PlaysWhereInput;
    /**
     * Limit how many History_Plays to update.
     */
    limit?: number;
};
/**
 * History_Plays updateManyAndReturn
 */
export type History_PlaysUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * The data used to update History_Plays.
     */
    data: Prisma.XOR<Prisma.History_PlaysUpdateManyMutationInput, Prisma.History_PlaysUncheckedUpdateManyInput>;
    /**
     * Filter which History_Plays to update
     */
    where?: Prisma.History_PlaysWhereInput;
    /**
     * Limit how many History_Plays to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * History_Plays upsert
 */
export type History_PlaysUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * The filter to search for the History_Plays to update in case it exists.
     */
    where: Prisma.History_PlaysWhereUniqueInput;
    /**
     * In case the History_Plays found by the `where` argument doesn't exist, create a new History_Plays with this data.
     */
    create: Prisma.XOR<Prisma.History_PlaysCreateInput, Prisma.History_PlaysUncheckedCreateInput>;
    /**
     * In case the History_Plays was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.History_PlaysUpdateInput, Prisma.History_PlaysUncheckedUpdateInput>;
};
/**
 * History_Plays delete
 */
export type History_PlaysDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
    /**
     * Filter which History_Plays to delete.
     */
    where: Prisma.History_PlaysWhereUniqueInput;
};
/**
 * History_Plays deleteMany
 */
export type History_PlaysDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which History_Plays to delete
     */
    where?: Prisma.History_PlaysWhereInput;
    /**
     * Limit how many History_Plays to delete.
     */
    limit?: number;
};
/**
 * History_Plays.USER
 */
export type History_Plays$USERArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * History_Plays without action
 */
export type History_PlaysDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History_Plays
     */
    select?: Prisma.History_PlaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the History_Plays
     */
    omit?: Prisma.History_PlaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.History_PlaysInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=History_Plays.d.ts.map
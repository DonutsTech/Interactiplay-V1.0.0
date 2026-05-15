import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Gancho
 *
 */
export type GanchoModel = runtime.Types.Result.DefaultSelection<Prisma.$GanchoPayload>;
export type AggregateGancho = {
    _count: GanchoCountAggregateOutputType | null;
    _min: GanchoMinAggregateOutputType | null;
    _max: GanchoMaxAggregateOutputType | null;
};
export type GanchoMinAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    TITLE: string | null;
    TITLE_STYLE: string | null;
    SUBTITLE: string | null;
    SUBTITLE_ANIMATION: boolean | null;
    SUBTITLE_ANIMATION_TYPE: string | null;
    SUBTITLE_STYLE: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type GanchoMaxAggregateOutputType = {
    ID: string | null;
    ATIVE: boolean | null;
    TITLE: string | null;
    TITLE_STYLE: string | null;
    SUBTITLE: string | null;
    SUBTITLE_ANIMATION: boolean | null;
    SUBTITLE_ANIMATION_TYPE: string | null;
    SUBTITLE_STYLE: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type GanchoCountAggregateOutputType = {
    ID: number;
    ATIVE: number;
    TITLE: number;
    TITLE_STYLE: number;
    SUBTITLE: number;
    SUBTITLE_ANIMATION: number;
    SUBTITLE_ANIMATION_TYPE: number;
    SUBTITLE_STYLE: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type GanchoMinAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    TITLE?: true;
    TITLE_STYLE?: true;
    SUBTITLE?: true;
    SUBTITLE_ANIMATION?: true;
    SUBTITLE_ANIMATION_TYPE?: true;
    SUBTITLE_STYLE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type GanchoMaxAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    TITLE?: true;
    TITLE_STYLE?: true;
    SUBTITLE?: true;
    SUBTITLE_ANIMATION?: true;
    SUBTITLE_ANIMATION_TYPE?: true;
    SUBTITLE_STYLE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type GanchoCountAggregateInputType = {
    ID?: true;
    ATIVE?: true;
    TITLE?: true;
    TITLE_STYLE?: true;
    SUBTITLE?: true;
    SUBTITLE_ANIMATION?: true;
    SUBTITLE_ANIMATION_TYPE?: true;
    SUBTITLE_STYLE?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type GanchoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Gancho to aggregate.
     */
    where?: Prisma.GanchoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ganchos to fetch.
     */
    orderBy?: Prisma.GanchoOrderByWithRelationInput | Prisma.GanchoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GanchoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ganchos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ganchos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Ganchos
    **/
    _count?: true | GanchoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GanchoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GanchoMaxAggregateInputType;
};
export type GetGanchoAggregateType<T extends GanchoAggregateArgs> = {
    [P in keyof T & keyof AggregateGancho]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGancho[P]> : Prisma.GetScalarType<T[P], AggregateGancho[P]>;
};
export type GanchoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GanchoWhereInput;
    orderBy?: Prisma.GanchoOrderByWithAggregationInput | Prisma.GanchoOrderByWithAggregationInput[];
    by: Prisma.GanchoScalarFieldEnum[] | Prisma.GanchoScalarFieldEnum;
    having?: Prisma.GanchoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GanchoCountAggregateInputType | true;
    _min?: GanchoMinAggregateInputType;
    _max?: GanchoMaxAggregateInputType;
};
export type GanchoGroupByOutputType = {
    ID: string;
    ATIVE: boolean;
    TITLE: string;
    TITLE_STYLE: string;
    SUBTITLE: string;
    SUBTITLE_ANIMATION: boolean;
    SUBTITLE_ANIMATION_TYPE: string | null;
    SUBTITLE_STYLE: string;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: GanchoCountAggregateOutputType | null;
    _min: GanchoMinAggregateOutputType | null;
    _max: GanchoMaxAggregateOutputType | null;
};
type GetGanchoGroupByPayload<T extends GanchoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GanchoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GanchoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GanchoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GanchoGroupByOutputType[P]>;
}>>;
export type GanchoWhereInput = {
    AND?: Prisma.GanchoWhereInput | Prisma.GanchoWhereInput[];
    OR?: Prisma.GanchoWhereInput[];
    NOT?: Prisma.GanchoWhereInput | Prisma.GanchoWhereInput[];
    ID?: Prisma.StringFilter<"Gancho"> | string;
    ATIVE?: Prisma.BoolFilter<"Gancho"> | boolean;
    TITLE?: Prisma.StringFilter<"Gancho"> | string;
    TITLE_STYLE?: Prisma.StringFilter<"Gancho"> | string;
    SUBTITLE?: Prisma.StringFilter<"Gancho"> | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFilter<"Gancho"> | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.StringNullableFilter<"Gancho"> | string | null;
    SUBTITLE_STYLE?: Prisma.StringFilter<"Gancho"> | string;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Gancho"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Gancho"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
};
export type GanchoOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TITLE?: Prisma.SortOrder;
    TITLE_STYLE?: Prisma.SortOrder;
    SUBTITLE?: Prisma.SortOrder;
    SUBTITLE_ANIMATION?: Prisma.SortOrder;
    SUBTITLE_ANIMATION_TYPE?: Prisma.SortOrderInput | Prisma.SortOrder;
    SUBTITLE_STYLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    FEATURE?: Prisma.FeatureOrderByWithRelationInput;
};
export type GanchoWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.GanchoWhereInput | Prisma.GanchoWhereInput[];
    OR?: Prisma.GanchoWhereInput[];
    NOT?: Prisma.GanchoWhereInput | Prisma.GanchoWhereInput[];
    ATIVE?: Prisma.BoolFilter<"Gancho"> | boolean;
    TITLE?: Prisma.StringFilter<"Gancho"> | string;
    TITLE_STYLE?: Prisma.StringFilter<"Gancho"> | string;
    SUBTITLE?: Prisma.StringFilter<"Gancho"> | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFilter<"Gancho"> | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.StringNullableFilter<"Gancho"> | string | null;
    SUBTITLE_STYLE?: Prisma.StringFilter<"Gancho"> | string;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Gancho"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Gancho"> | Date | string | null;
    FEATURE?: Prisma.XOR<Prisma.FeatureNullableScalarRelationFilter, Prisma.FeatureWhereInput> | null;
}, "ID">;
export type GanchoOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TITLE?: Prisma.SortOrder;
    TITLE_STYLE?: Prisma.SortOrder;
    SUBTITLE?: Prisma.SortOrder;
    SUBTITLE_ANIMATION?: Prisma.SortOrder;
    SUBTITLE_ANIMATION_TYPE?: Prisma.SortOrderInput | Prisma.SortOrder;
    SUBTITLE_STYLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.GanchoCountOrderByAggregateInput;
    _max?: Prisma.GanchoMaxOrderByAggregateInput;
    _min?: Prisma.GanchoMinOrderByAggregateInput;
};
export type GanchoScalarWhereWithAggregatesInput = {
    AND?: Prisma.GanchoScalarWhereWithAggregatesInput | Prisma.GanchoScalarWhereWithAggregatesInput[];
    OR?: Prisma.GanchoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GanchoScalarWhereWithAggregatesInput | Prisma.GanchoScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Gancho"> | string;
    ATIVE?: Prisma.BoolWithAggregatesFilter<"Gancho"> | boolean;
    TITLE?: Prisma.StringWithAggregatesFilter<"Gancho"> | string;
    TITLE_STYLE?: Prisma.StringWithAggregatesFilter<"Gancho"> | string;
    SUBTITLE?: Prisma.StringWithAggregatesFilter<"Gancho"> | string;
    SUBTITLE_ANIMATION?: Prisma.BoolWithAggregatesFilter<"Gancho"> | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.StringNullableWithAggregatesFilter<"Gancho"> | string | null;
    SUBTITLE_STYLE?: Prisma.StringWithAggregatesFilter<"Gancho"> | string;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Gancho"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Gancho"> | Date | string | null;
};
export type GanchoCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    TITLE: string;
    TITLE_STYLE: string;
    SUBTITLE: string;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: string | null;
    SUBTITLE_STYLE: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureCreateNestedOneWithoutGANCHOInput;
};
export type GanchoUncheckedCreateInput = {
    ID?: string;
    ATIVE?: boolean;
    TITLE: string;
    TITLE_STYLE: string;
    SUBTITLE: string;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: string | null;
    SUBTITLE_STYLE: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedCreateNestedOneWithoutGANCHOInput;
};
export type GanchoUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    TITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SUBTITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUpdateOneWithoutGANCHONestedInput;
};
export type GanchoUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    TITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SUBTITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FEATURE?: Prisma.FeatureUncheckedUpdateOneWithoutGANCHONestedInput;
};
export type GanchoCreateManyInput = {
    ID?: string;
    ATIVE?: boolean;
    TITLE: string;
    TITLE_STYLE: string;
    SUBTITLE: string;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: string | null;
    SUBTITLE_STYLE: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type GanchoUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    TITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SUBTITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GanchoUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    TITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SUBTITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GanchoNullableScalarRelationFilter = {
    is?: Prisma.GanchoWhereInput | null;
    isNot?: Prisma.GanchoWhereInput | null;
};
export type GanchoCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TITLE?: Prisma.SortOrder;
    TITLE_STYLE?: Prisma.SortOrder;
    SUBTITLE?: Prisma.SortOrder;
    SUBTITLE_ANIMATION?: Prisma.SortOrder;
    SUBTITLE_ANIMATION_TYPE?: Prisma.SortOrder;
    SUBTITLE_STYLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type GanchoMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TITLE?: Prisma.SortOrder;
    TITLE_STYLE?: Prisma.SortOrder;
    SUBTITLE?: Prisma.SortOrder;
    SUBTITLE_ANIMATION?: Prisma.SortOrder;
    SUBTITLE_ANIMATION_TYPE?: Prisma.SortOrder;
    SUBTITLE_STYLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type GanchoMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    ATIVE?: Prisma.SortOrder;
    TITLE?: Prisma.SortOrder;
    TITLE_STYLE?: Prisma.SortOrder;
    SUBTITLE?: Prisma.SortOrder;
    SUBTITLE_ANIMATION?: Prisma.SortOrder;
    SUBTITLE_ANIMATION_TYPE?: Prisma.SortOrder;
    SUBTITLE_STYLE?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type GanchoCreateNestedOneWithoutFEATUREInput = {
    create?: Prisma.XOR<Prisma.GanchoCreateWithoutFEATUREInput, Prisma.GanchoUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.GanchoCreateOrConnectWithoutFEATUREInput;
    connect?: Prisma.GanchoWhereUniqueInput;
};
export type GanchoUpdateOneWithoutFEATURENestedInput = {
    create?: Prisma.XOR<Prisma.GanchoCreateWithoutFEATUREInput, Prisma.GanchoUncheckedCreateWithoutFEATUREInput>;
    connectOrCreate?: Prisma.GanchoCreateOrConnectWithoutFEATUREInput;
    upsert?: Prisma.GanchoUpsertWithoutFEATUREInput;
    disconnect?: Prisma.GanchoWhereInput | boolean;
    delete?: Prisma.GanchoWhereInput | boolean;
    connect?: Prisma.GanchoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GanchoUpdateToOneWithWhereWithoutFEATUREInput, Prisma.GanchoUpdateWithoutFEATUREInput>, Prisma.GanchoUncheckedUpdateWithoutFEATUREInput>;
};
export type GanchoCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    TITLE: string;
    TITLE_STYLE: string;
    SUBTITLE: string;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: string | null;
    SUBTITLE_STYLE: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type GanchoUncheckedCreateWithoutFEATUREInput = {
    ID?: string;
    ATIVE?: boolean;
    TITLE: string;
    TITLE_STYLE: string;
    SUBTITLE: string;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: string | null;
    SUBTITLE_STYLE: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type GanchoCreateOrConnectWithoutFEATUREInput = {
    where: Prisma.GanchoWhereUniqueInput;
    create: Prisma.XOR<Prisma.GanchoCreateWithoutFEATUREInput, Prisma.GanchoUncheckedCreateWithoutFEATUREInput>;
};
export type GanchoUpsertWithoutFEATUREInput = {
    update: Prisma.XOR<Prisma.GanchoUpdateWithoutFEATUREInput, Prisma.GanchoUncheckedUpdateWithoutFEATUREInput>;
    create: Prisma.XOR<Prisma.GanchoCreateWithoutFEATUREInput, Prisma.GanchoUncheckedCreateWithoutFEATUREInput>;
    where?: Prisma.GanchoWhereInput;
};
export type GanchoUpdateToOneWithWhereWithoutFEATUREInput = {
    where?: Prisma.GanchoWhereInput;
    data: Prisma.XOR<Prisma.GanchoUpdateWithoutFEATUREInput, Prisma.GanchoUncheckedUpdateWithoutFEATUREInput>;
};
export type GanchoUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    TITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SUBTITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GanchoUncheckedUpdateWithoutFEATUREInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    ATIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    TITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    TITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBTITLE_ANIMATION?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    SUBTITLE_ANIMATION_TYPE?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SUBTITLE_STYLE?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GanchoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    TITLE?: boolean;
    TITLE_STYLE?: boolean;
    SUBTITLE?: boolean;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: boolean;
    SUBTITLE_STYLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FEATURE?: boolean | Prisma.Gancho$FEATUREArgs<ExtArgs>;
}, ExtArgs["result"]["gancho"]>;
export type GanchoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    TITLE?: boolean;
    TITLE_STYLE?: boolean;
    SUBTITLE?: boolean;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: boolean;
    SUBTITLE_STYLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["gancho"]>;
export type GanchoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    ATIVE?: boolean;
    TITLE?: boolean;
    TITLE_STYLE?: boolean;
    SUBTITLE?: boolean;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: boolean;
    SUBTITLE_STYLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["gancho"]>;
export type GanchoSelectScalar = {
    ID?: boolean;
    ATIVE?: boolean;
    TITLE?: boolean;
    TITLE_STYLE?: boolean;
    SUBTITLE?: boolean;
    SUBTITLE_ANIMATION?: boolean;
    SUBTITLE_ANIMATION_TYPE?: boolean;
    SUBTITLE_STYLE?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type GanchoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "ATIVE" | "TITLE" | "TITLE_STYLE" | "SUBTITLE" | "SUBTITLE_ANIMATION" | "SUBTITLE_ANIMATION_TYPE" | "SUBTITLE_STYLE" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["gancho"]>;
export type GanchoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    FEATURE?: boolean | Prisma.Gancho$FEATUREArgs<ExtArgs>;
};
export type GanchoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GanchoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GanchoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Gancho";
    objects: {
        FEATURE: Prisma.$FeaturePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        ATIVE: boolean;
        TITLE: string;
        TITLE_STYLE: string;
        SUBTITLE: string;
        SUBTITLE_ANIMATION: boolean;
        SUBTITLE_ANIMATION_TYPE: string | null;
        SUBTITLE_STYLE: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["gancho"]>;
    composites: {};
};
export type GanchoGetPayload<S extends boolean | null | undefined | GanchoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GanchoPayload, S>;
export type GanchoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GanchoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GanchoCountAggregateInputType | true;
};
export interface GanchoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Gancho'];
        meta: {
            name: 'Gancho';
        };
    };
    /**
     * Find zero or one Gancho that matches the filter.
     * @param {GanchoFindUniqueArgs} args - Arguments to find a Gancho
     * @example
     * // Get one Gancho
     * const gancho = await prisma.gancho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GanchoFindUniqueArgs>(args: Prisma.SelectSubset<T, GanchoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Gancho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GanchoFindUniqueOrThrowArgs} args - Arguments to find a Gancho
     * @example
     * // Get one Gancho
     * const gancho = await prisma.gancho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GanchoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GanchoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Gancho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanchoFindFirstArgs} args - Arguments to find a Gancho
     * @example
     * // Get one Gancho
     * const gancho = await prisma.gancho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GanchoFindFirstArgs>(args?: Prisma.SelectSubset<T, GanchoFindFirstArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Gancho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanchoFindFirstOrThrowArgs} args - Arguments to find a Gancho
     * @example
     * // Get one Gancho
     * const gancho = await prisma.gancho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GanchoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GanchoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ganchos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanchoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ganchos
     * const ganchos = await prisma.gancho.findMany()
     *
     * // Get first 10 Ganchos
     * const ganchos = await prisma.gancho.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const ganchoWithIDOnly = await prisma.gancho.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends GanchoFindManyArgs>(args?: Prisma.SelectSubset<T, GanchoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Gancho.
     * @param {GanchoCreateArgs} args - Arguments to create a Gancho.
     * @example
     * // Create one Gancho
     * const Gancho = await prisma.gancho.create({
     *   data: {
     *     // ... data to create a Gancho
     *   }
     * })
     *
     */
    create<T extends GanchoCreateArgs>(args: Prisma.SelectSubset<T, GanchoCreateArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ganchos.
     * @param {GanchoCreateManyArgs} args - Arguments to create many Ganchos.
     * @example
     * // Create many Ganchos
     * const gancho = await prisma.gancho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GanchoCreateManyArgs>(args?: Prisma.SelectSubset<T, GanchoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ganchos and returns the data saved in the database.
     * @param {GanchoCreateManyAndReturnArgs} args - Arguments to create many Ganchos.
     * @example
     * // Create many Ganchos
     * const gancho = await prisma.gancho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ganchos and only return the `ID`
     * const ganchoWithIDOnly = await prisma.gancho.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GanchoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GanchoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Gancho.
     * @param {GanchoDeleteArgs} args - Arguments to delete one Gancho.
     * @example
     * // Delete one Gancho
     * const Gancho = await prisma.gancho.delete({
     *   where: {
     *     // ... filter to delete one Gancho
     *   }
     * })
     *
     */
    delete<T extends GanchoDeleteArgs>(args: Prisma.SelectSubset<T, GanchoDeleteArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Gancho.
     * @param {GanchoUpdateArgs} args - Arguments to update one Gancho.
     * @example
     * // Update one Gancho
     * const gancho = await prisma.gancho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GanchoUpdateArgs>(args: Prisma.SelectSubset<T, GanchoUpdateArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ganchos.
     * @param {GanchoDeleteManyArgs} args - Arguments to filter Ganchos to delete.
     * @example
     * // Delete a few Ganchos
     * const { count } = await prisma.gancho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GanchoDeleteManyArgs>(args?: Prisma.SelectSubset<T, GanchoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ganchos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanchoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ganchos
     * const gancho = await prisma.gancho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GanchoUpdateManyArgs>(args: Prisma.SelectSubset<T, GanchoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ganchos and returns the data updated in the database.
     * @param {GanchoUpdateManyAndReturnArgs} args - Arguments to update many Ganchos.
     * @example
     * // Update many Ganchos
     * const gancho = await prisma.gancho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ganchos and only return the `ID`
     * const ganchoWithIDOnly = await prisma.gancho.updateManyAndReturn({
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
    updateManyAndReturn<T extends GanchoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GanchoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Gancho.
     * @param {GanchoUpsertArgs} args - Arguments to update or create a Gancho.
     * @example
     * // Update or create a Gancho
     * const gancho = await prisma.gancho.upsert({
     *   create: {
     *     // ... data to create a Gancho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gancho we want to update
     *   }
     * })
     */
    upsert<T extends GanchoUpsertArgs>(args: Prisma.SelectSubset<T, GanchoUpsertArgs<ExtArgs>>): Prisma.Prisma__GanchoClient<runtime.Types.Result.GetResult<Prisma.$GanchoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ganchos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanchoCountArgs} args - Arguments to filter Ganchos to count.
     * @example
     * // Count the number of Ganchos
     * const count = await prisma.gancho.count({
     *   where: {
     *     // ... the filter for the Ganchos we want to count
     *   }
     * })
    **/
    count<T extends GanchoCountArgs>(args?: Prisma.Subset<T, GanchoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GanchoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Gancho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanchoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GanchoAggregateArgs>(args: Prisma.Subset<T, GanchoAggregateArgs>): Prisma.PrismaPromise<GetGanchoAggregateType<T>>;
    /**
     * Group by Gancho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GanchoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends GanchoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GanchoGroupByArgs['orderBy'];
    } : {
        orderBy?: GanchoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GanchoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGanchoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Gancho model
     */
    readonly fields: GanchoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Gancho.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GanchoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    FEATURE<T extends Prisma.Gancho$FEATUREArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Gancho$FEATUREArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Gancho model
 */
export interface GanchoFieldRefs {
    readonly ID: Prisma.FieldRef<"Gancho", 'String'>;
    readonly ATIVE: Prisma.FieldRef<"Gancho", 'Boolean'>;
    readonly TITLE: Prisma.FieldRef<"Gancho", 'String'>;
    readonly TITLE_STYLE: Prisma.FieldRef<"Gancho", 'String'>;
    readonly SUBTITLE: Prisma.FieldRef<"Gancho", 'String'>;
    readonly SUBTITLE_ANIMATION: Prisma.FieldRef<"Gancho", 'Boolean'>;
    readonly SUBTITLE_ANIMATION_TYPE: Prisma.FieldRef<"Gancho", 'String'>;
    readonly SUBTITLE_STYLE: Prisma.FieldRef<"Gancho", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Gancho", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Gancho", 'DateTime'>;
}
/**
 * Gancho findUnique
 */
export type GanchoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gancho to fetch.
     */
    where: Prisma.GanchoWhereUniqueInput;
};
/**
 * Gancho findUniqueOrThrow
 */
export type GanchoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gancho to fetch.
     */
    where: Prisma.GanchoWhereUniqueInput;
};
/**
 * Gancho findFirst
 */
export type GanchoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gancho to fetch.
     */
    where?: Prisma.GanchoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ganchos to fetch.
     */
    orderBy?: Prisma.GanchoOrderByWithRelationInput | Prisma.GanchoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ganchos.
     */
    cursor?: Prisma.GanchoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ganchos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ganchos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ganchos.
     */
    distinct?: Prisma.GanchoScalarFieldEnum | Prisma.GanchoScalarFieldEnum[];
};
/**
 * Gancho findFirstOrThrow
 */
export type GanchoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gancho to fetch.
     */
    where?: Prisma.GanchoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ganchos to fetch.
     */
    orderBy?: Prisma.GanchoOrderByWithRelationInput | Prisma.GanchoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ganchos.
     */
    cursor?: Prisma.GanchoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ganchos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ganchos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ganchos.
     */
    distinct?: Prisma.GanchoScalarFieldEnum | Prisma.GanchoScalarFieldEnum[];
};
/**
 * Gancho findMany
 */
export type GanchoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ganchos to fetch.
     */
    where?: Prisma.GanchoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ganchos to fetch.
     */
    orderBy?: Prisma.GanchoOrderByWithRelationInput | Prisma.GanchoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Ganchos.
     */
    cursor?: Prisma.GanchoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ganchos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ganchos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ganchos.
     */
    distinct?: Prisma.GanchoScalarFieldEnum | Prisma.GanchoScalarFieldEnum[];
};
/**
 * Gancho create
 */
export type GanchoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Gancho.
     */
    data: Prisma.XOR<Prisma.GanchoCreateInput, Prisma.GanchoUncheckedCreateInput>;
};
/**
 * Gancho createMany
 */
export type GanchoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ganchos.
     */
    data: Prisma.GanchoCreateManyInput | Prisma.GanchoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Gancho createManyAndReturn
 */
export type GanchoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gancho
     */
    select?: Prisma.GanchoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Gancho
     */
    omit?: Prisma.GanchoOmit<ExtArgs> | null;
    /**
     * The data used to create many Ganchos.
     */
    data: Prisma.GanchoCreateManyInput | Prisma.GanchoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Gancho update
 */
export type GanchoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Gancho.
     */
    data: Prisma.XOR<Prisma.GanchoUpdateInput, Prisma.GanchoUncheckedUpdateInput>;
    /**
     * Choose, which Gancho to update.
     */
    where: Prisma.GanchoWhereUniqueInput;
};
/**
 * Gancho updateMany
 */
export type GanchoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Ganchos.
     */
    data: Prisma.XOR<Prisma.GanchoUpdateManyMutationInput, Prisma.GanchoUncheckedUpdateManyInput>;
    /**
     * Filter which Ganchos to update
     */
    where?: Prisma.GanchoWhereInput;
    /**
     * Limit how many Ganchos to update.
     */
    limit?: number;
};
/**
 * Gancho updateManyAndReturn
 */
export type GanchoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gancho
     */
    select?: Prisma.GanchoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Gancho
     */
    omit?: Prisma.GanchoOmit<ExtArgs> | null;
    /**
     * The data used to update Ganchos.
     */
    data: Prisma.XOR<Prisma.GanchoUpdateManyMutationInput, Prisma.GanchoUncheckedUpdateManyInput>;
    /**
     * Filter which Ganchos to update
     */
    where?: Prisma.GanchoWhereInput;
    /**
     * Limit how many Ganchos to update.
     */
    limit?: number;
};
/**
 * Gancho upsert
 */
export type GanchoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Gancho to update in case it exists.
     */
    where: Prisma.GanchoWhereUniqueInput;
    /**
     * In case the Gancho found by the `where` argument doesn't exist, create a new Gancho with this data.
     */
    create: Prisma.XOR<Prisma.GanchoCreateInput, Prisma.GanchoUncheckedCreateInput>;
    /**
     * In case the Gancho was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GanchoUpdateInput, Prisma.GanchoUncheckedUpdateInput>;
};
/**
 * Gancho delete
 */
export type GanchoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Gancho to delete.
     */
    where: Prisma.GanchoWhereUniqueInput;
};
/**
 * Gancho deleteMany
 */
export type GanchoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Ganchos to delete
     */
    where?: Prisma.GanchoWhereInput;
    /**
     * Limit how many Ganchos to delete.
     */
    limit?: number;
};
/**
 * Gancho.FEATURE
 */
export type Gancho$FEATUREArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Gancho without action
 */
export type GanchoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Gancho.d.ts.map
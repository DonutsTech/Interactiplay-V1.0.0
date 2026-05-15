import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Stripe_events
 *
 */
export type Stripe_eventsModel = runtime.Types.Result.DefaultSelection<Prisma.$Stripe_eventsPayload>;
export type AggregateStripe_events = {
    _count: Stripe_eventsCountAggregateOutputType | null;
    _min: Stripe_eventsMinAggregateOutputType | null;
    _max: Stripe_eventsMaxAggregateOutputType | null;
};
export type Stripe_eventsMinAggregateOutputType = {
    ID: string | null;
    TYPE: string | null;
    CUSTOMER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Stripe_eventsMaxAggregateOutputType = {
    ID: string | null;
    TYPE: string | null;
    CUSTOMER_ID: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
};
export type Stripe_eventsCountAggregateOutputType = {
    ID: number;
    TYPE: number;
    CUSTOMER_ID: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    _all: number;
};
export type Stripe_eventsMinAggregateInputType = {
    ID?: true;
    TYPE?: true;
    CUSTOMER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Stripe_eventsMaxAggregateInputType = {
    ID?: true;
    TYPE?: true;
    CUSTOMER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
};
export type Stripe_eventsCountAggregateInputType = {
    ID?: true;
    TYPE?: true;
    CUSTOMER_ID?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    _all?: true;
};
export type Stripe_eventsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Stripe_events to aggregate.
     */
    where?: Prisma.Stripe_eventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stripe_events to fetch.
     */
    orderBy?: Prisma.Stripe_eventsOrderByWithRelationInput | Prisma.Stripe_eventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Stripe_eventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stripe_events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stripe_events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Stripe_events
    **/
    _count?: true | Stripe_eventsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Stripe_eventsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Stripe_eventsMaxAggregateInputType;
};
export type GetStripe_eventsAggregateType<T extends Stripe_eventsAggregateArgs> = {
    [P in keyof T & keyof AggregateStripe_events]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStripe_events[P]> : Prisma.GetScalarType<T[P], AggregateStripe_events[P]>;
};
export type Stripe_eventsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Stripe_eventsWhereInput;
    orderBy?: Prisma.Stripe_eventsOrderByWithAggregationInput | Prisma.Stripe_eventsOrderByWithAggregationInput[];
    by: Prisma.Stripe_eventsScalarFieldEnum[] | Prisma.Stripe_eventsScalarFieldEnum;
    having?: Prisma.Stripe_eventsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Stripe_eventsCountAggregateInputType | true;
    _min?: Stripe_eventsMinAggregateInputType;
    _max?: Stripe_eventsMaxAggregateInputType;
};
export type Stripe_eventsGroupByOutputType = {
    ID: string;
    TYPE: string;
    CUSTOMER_ID: string;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    _count: Stripe_eventsCountAggregateOutputType | null;
    _min: Stripe_eventsMinAggregateOutputType | null;
    _max: Stripe_eventsMaxAggregateOutputType | null;
};
type GetStripe_eventsGroupByPayload<T extends Stripe_eventsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Stripe_eventsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Stripe_eventsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Stripe_eventsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Stripe_eventsGroupByOutputType[P]>;
}>>;
export type Stripe_eventsWhereInput = {
    AND?: Prisma.Stripe_eventsWhereInput | Prisma.Stripe_eventsWhereInput[];
    OR?: Prisma.Stripe_eventsWhereInput[];
    NOT?: Prisma.Stripe_eventsWhereInput | Prisma.Stripe_eventsWhereInput[];
    ID?: Prisma.StringFilter<"Stripe_events"> | string;
    TYPE?: Prisma.StringFilter<"Stripe_events"> | string;
    CUSTOMER_ID?: Prisma.StringFilter<"Stripe_events"> | string;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Stripe_events"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Stripe_events"> | Date | string | null;
};
export type Stripe_eventsOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    TYPE?: Prisma.SortOrder;
    CUSTOMER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type Stripe_eventsWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    AND?: Prisma.Stripe_eventsWhereInput | Prisma.Stripe_eventsWhereInput[];
    OR?: Prisma.Stripe_eventsWhereInput[];
    NOT?: Prisma.Stripe_eventsWhereInput | Prisma.Stripe_eventsWhereInput[];
    TYPE?: Prisma.StringFilter<"Stripe_events"> | string;
    CUSTOMER_ID?: Prisma.StringFilter<"Stripe_events"> | string;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"Stripe_events"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"Stripe_events"> | Date | string | null;
}, "ID">;
export type Stripe_eventsOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    TYPE?: Prisma.SortOrder;
    CUSTOMER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Stripe_eventsCountOrderByAggregateInput;
    _max?: Prisma.Stripe_eventsMaxOrderByAggregateInput;
    _min?: Prisma.Stripe_eventsMinOrderByAggregateInput;
};
export type Stripe_eventsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Stripe_eventsScalarWhereWithAggregatesInput | Prisma.Stripe_eventsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Stripe_eventsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Stripe_eventsScalarWhereWithAggregatesInput | Prisma.Stripe_eventsScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"Stripe_events"> | string;
    TYPE?: Prisma.StringWithAggregatesFilter<"Stripe_events"> | string;
    CUSTOMER_ID?: Prisma.StringWithAggregatesFilter<"Stripe_events"> | string;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Stripe_events"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"Stripe_events"> | Date | string | null;
};
export type Stripe_eventsCreateInput = {
    ID: string;
    TYPE: string;
    CUSTOMER_ID: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Stripe_eventsUncheckedCreateInput = {
    ID: string;
    TYPE: string;
    CUSTOMER_ID: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Stripe_eventsUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TYPE?: Prisma.StringFieldUpdateOperationsInput | string;
    CUSTOMER_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Stripe_eventsUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TYPE?: Prisma.StringFieldUpdateOperationsInput | string;
    CUSTOMER_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Stripe_eventsCreateManyInput = {
    ID: string;
    TYPE: string;
    CUSTOMER_ID: string;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
};
export type Stripe_eventsUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TYPE?: Prisma.StringFieldUpdateOperationsInput | string;
    CUSTOMER_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Stripe_eventsUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    TYPE?: Prisma.StringFieldUpdateOperationsInput | string;
    CUSTOMER_ID?: Prisma.StringFieldUpdateOperationsInput | string;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Stripe_eventsCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    TYPE?: Prisma.SortOrder;
    CUSTOMER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Stripe_eventsMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    TYPE?: Prisma.SortOrder;
    CUSTOMER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Stripe_eventsMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    TYPE?: Prisma.SortOrder;
    CUSTOMER_ID?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
};
export type Stripe_eventsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    TYPE?: boolean;
    CUSTOMER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["stripe_events"]>;
export type Stripe_eventsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    TYPE?: boolean;
    CUSTOMER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["stripe_events"]>;
export type Stripe_eventsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    TYPE?: boolean;
    CUSTOMER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
}, ExtArgs["result"]["stripe_events"]>;
export type Stripe_eventsSelectScalar = {
    ID?: boolean;
    TYPE?: boolean;
    CUSTOMER_ID?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
};
export type Stripe_eventsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "TYPE" | "CUSTOMER_ID" | "CREATED_AT" | "UPDATED_AT", ExtArgs["result"]["stripe_events"]>;
export type $Stripe_eventsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Stripe_events";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        TYPE: string;
        CUSTOMER_ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
    }, ExtArgs["result"]["stripe_events"]>;
    composites: {};
};
export type Stripe_eventsGetPayload<S extends boolean | null | undefined | Stripe_eventsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload, S>;
export type Stripe_eventsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Stripe_eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Stripe_eventsCountAggregateInputType | true;
};
export interface Stripe_eventsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Stripe_events'];
        meta: {
            name: 'Stripe_events';
        };
    };
    /**
     * Find zero or one Stripe_events that matches the filter.
     * @param {Stripe_eventsFindUniqueArgs} args - Arguments to find a Stripe_events
     * @example
     * // Get one Stripe_events
     * const stripe_events = await prisma.stripe_events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Stripe_eventsFindUniqueArgs>(args: Prisma.SelectSubset<T, Stripe_eventsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Stripe_events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Stripe_eventsFindUniqueOrThrowArgs} args - Arguments to find a Stripe_events
     * @example
     * // Get one Stripe_events
     * const stripe_events = await prisma.stripe_events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Stripe_eventsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Stripe_eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Stripe_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stripe_eventsFindFirstArgs} args - Arguments to find a Stripe_events
     * @example
     * // Get one Stripe_events
     * const stripe_events = await prisma.stripe_events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Stripe_eventsFindFirstArgs>(args?: Prisma.SelectSubset<T, Stripe_eventsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Stripe_events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stripe_eventsFindFirstOrThrowArgs} args - Arguments to find a Stripe_events
     * @example
     * // Get one Stripe_events
     * const stripe_events = await prisma.stripe_events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Stripe_eventsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Stripe_eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Stripe_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stripe_eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stripe_events
     * const stripe_events = await prisma.stripe_events.findMany()
     *
     * // Get first 10 Stripe_events
     * const stripe_events = await prisma.stripe_events.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const stripe_eventsWithIDOnly = await prisma.stripe_events.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends Stripe_eventsFindManyArgs>(args?: Prisma.SelectSubset<T, Stripe_eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Stripe_events.
     * @param {Stripe_eventsCreateArgs} args - Arguments to create a Stripe_events.
     * @example
     * // Create one Stripe_events
     * const Stripe_events = await prisma.stripe_events.create({
     *   data: {
     *     // ... data to create a Stripe_events
     *   }
     * })
     *
     */
    create<T extends Stripe_eventsCreateArgs>(args: Prisma.SelectSubset<T, Stripe_eventsCreateArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Stripe_events.
     * @param {Stripe_eventsCreateManyArgs} args - Arguments to create many Stripe_events.
     * @example
     * // Create many Stripe_events
     * const stripe_events = await prisma.stripe_events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Stripe_eventsCreateManyArgs>(args?: Prisma.SelectSubset<T, Stripe_eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Stripe_events and returns the data saved in the database.
     * @param {Stripe_eventsCreateManyAndReturnArgs} args - Arguments to create many Stripe_events.
     * @example
     * // Create many Stripe_events
     * const stripe_events = await prisma.stripe_events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Stripe_events and only return the `ID`
     * const stripe_eventsWithIDOnly = await prisma.stripe_events.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Stripe_eventsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Stripe_eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Stripe_events.
     * @param {Stripe_eventsDeleteArgs} args - Arguments to delete one Stripe_events.
     * @example
     * // Delete one Stripe_events
     * const Stripe_events = await prisma.stripe_events.delete({
     *   where: {
     *     // ... filter to delete one Stripe_events
     *   }
     * })
     *
     */
    delete<T extends Stripe_eventsDeleteArgs>(args: Prisma.SelectSubset<T, Stripe_eventsDeleteArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Stripe_events.
     * @param {Stripe_eventsUpdateArgs} args - Arguments to update one Stripe_events.
     * @example
     * // Update one Stripe_events
     * const stripe_events = await prisma.stripe_events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Stripe_eventsUpdateArgs>(args: Prisma.SelectSubset<T, Stripe_eventsUpdateArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Stripe_events.
     * @param {Stripe_eventsDeleteManyArgs} args - Arguments to filter Stripe_events to delete.
     * @example
     * // Delete a few Stripe_events
     * const { count } = await prisma.stripe_events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Stripe_eventsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Stripe_eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Stripe_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stripe_eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stripe_events
     * const stripe_events = await prisma.stripe_events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Stripe_eventsUpdateManyArgs>(args: Prisma.SelectSubset<T, Stripe_eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Stripe_events and returns the data updated in the database.
     * @param {Stripe_eventsUpdateManyAndReturnArgs} args - Arguments to update many Stripe_events.
     * @example
     * // Update many Stripe_events
     * const stripe_events = await prisma.stripe_events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Stripe_events and only return the `ID`
     * const stripe_eventsWithIDOnly = await prisma.stripe_events.updateManyAndReturn({
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
    updateManyAndReturn<T extends Stripe_eventsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Stripe_eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Stripe_events.
     * @param {Stripe_eventsUpsertArgs} args - Arguments to update or create a Stripe_events.
     * @example
     * // Update or create a Stripe_events
     * const stripe_events = await prisma.stripe_events.upsert({
     *   create: {
     *     // ... data to create a Stripe_events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stripe_events we want to update
     *   }
     * })
     */
    upsert<T extends Stripe_eventsUpsertArgs>(args: Prisma.SelectSubset<T, Stripe_eventsUpsertArgs<ExtArgs>>): Prisma.Prisma__Stripe_eventsClient<runtime.Types.Result.GetResult<Prisma.$Stripe_eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Stripe_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stripe_eventsCountArgs} args - Arguments to filter Stripe_events to count.
     * @example
     * // Count the number of Stripe_events
     * const count = await prisma.stripe_events.count({
     *   where: {
     *     // ... the filter for the Stripe_events we want to count
     *   }
     * })
    **/
    count<T extends Stripe_eventsCountArgs>(args?: Prisma.Subset<T, Stripe_eventsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Stripe_eventsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Stripe_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stripe_eventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stripe_eventsAggregateArgs>(args: Prisma.Subset<T, Stripe_eventsAggregateArgs>): Prisma.PrismaPromise<GetStripe_eventsAggregateType<T>>;
    /**
     * Group by Stripe_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stripe_eventsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Stripe_eventsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Stripe_eventsGroupByArgs['orderBy'];
    } : {
        orderBy?: Stripe_eventsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Stripe_eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripe_eventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Stripe_events model
     */
    readonly fields: Stripe_eventsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Stripe_events.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Stripe_eventsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the Stripe_events model
 */
export interface Stripe_eventsFieldRefs {
    readonly ID: Prisma.FieldRef<"Stripe_events", 'String'>;
    readonly TYPE: Prisma.FieldRef<"Stripe_events", 'String'>;
    readonly CUSTOMER_ID: Prisma.FieldRef<"Stripe_events", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"Stripe_events", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"Stripe_events", 'DateTime'>;
}
/**
 * Stripe_events findUnique
 */
export type Stripe_eventsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * Filter, which Stripe_events to fetch.
     */
    where: Prisma.Stripe_eventsWhereUniqueInput;
};
/**
 * Stripe_events findUniqueOrThrow
 */
export type Stripe_eventsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * Filter, which Stripe_events to fetch.
     */
    where: Prisma.Stripe_eventsWhereUniqueInput;
};
/**
 * Stripe_events findFirst
 */
export type Stripe_eventsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * Filter, which Stripe_events to fetch.
     */
    where?: Prisma.Stripe_eventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stripe_events to fetch.
     */
    orderBy?: Prisma.Stripe_eventsOrderByWithRelationInput | Prisma.Stripe_eventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Stripe_events.
     */
    cursor?: Prisma.Stripe_eventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stripe_events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stripe_events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Stripe_events.
     */
    distinct?: Prisma.Stripe_eventsScalarFieldEnum | Prisma.Stripe_eventsScalarFieldEnum[];
};
/**
 * Stripe_events findFirstOrThrow
 */
export type Stripe_eventsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * Filter, which Stripe_events to fetch.
     */
    where?: Prisma.Stripe_eventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stripe_events to fetch.
     */
    orderBy?: Prisma.Stripe_eventsOrderByWithRelationInput | Prisma.Stripe_eventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Stripe_events.
     */
    cursor?: Prisma.Stripe_eventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stripe_events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stripe_events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Stripe_events.
     */
    distinct?: Prisma.Stripe_eventsScalarFieldEnum | Prisma.Stripe_eventsScalarFieldEnum[];
};
/**
 * Stripe_events findMany
 */
export type Stripe_eventsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * Filter, which Stripe_events to fetch.
     */
    where?: Prisma.Stripe_eventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stripe_events to fetch.
     */
    orderBy?: Prisma.Stripe_eventsOrderByWithRelationInput | Prisma.Stripe_eventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Stripe_events.
     */
    cursor?: Prisma.Stripe_eventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stripe_events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stripe_events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Stripe_events.
     */
    distinct?: Prisma.Stripe_eventsScalarFieldEnum | Prisma.Stripe_eventsScalarFieldEnum[];
};
/**
 * Stripe_events create
 */
export type Stripe_eventsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * The data needed to create a Stripe_events.
     */
    data: Prisma.XOR<Prisma.Stripe_eventsCreateInput, Prisma.Stripe_eventsUncheckedCreateInput>;
};
/**
 * Stripe_events createMany
 */
export type Stripe_eventsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stripe_events.
     */
    data: Prisma.Stripe_eventsCreateManyInput | Prisma.Stripe_eventsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Stripe_events createManyAndReturn
 */
export type Stripe_eventsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * The data used to create many Stripe_events.
     */
    data: Prisma.Stripe_eventsCreateManyInput | Prisma.Stripe_eventsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Stripe_events update
 */
export type Stripe_eventsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * The data needed to update a Stripe_events.
     */
    data: Prisma.XOR<Prisma.Stripe_eventsUpdateInput, Prisma.Stripe_eventsUncheckedUpdateInput>;
    /**
     * Choose, which Stripe_events to update.
     */
    where: Prisma.Stripe_eventsWhereUniqueInput;
};
/**
 * Stripe_events updateMany
 */
export type Stripe_eventsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Stripe_events.
     */
    data: Prisma.XOR<Prisma.Stripe_eventsUpdateManyMutationInput, Prisma.Stripe_eventsUncheckedUpdateManyInput>;
    /**
     * Filter which Stripe_events to update
     */
    where?: Prisma.Stripe_eventsWhereInput;
    /**
     * Limit how many Stripe_events to update.
     */
    limit?: number;
};
/**
 * Stripe_events updateManyAndReturn
 */
export type Stripe_eventsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * The data used to update Stripe_events.
     */
    data: Prisma.XOR<Prisma.Stripe_eventsUpdateManyMutationInput, Prisma.Stripe_eventsUncheckedUpdateManyInput>;
    /**
     * Filter which Stripe_events to update
     */
    where?: Prisma.Stripe_eventsWhereInput;
    /**
     * Limit how many Stripe_events to update.
     */
    limit?: number;
};
/**
 * Stripe_events upsert
 */
export type Stripe_eventsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * The filter to search for the Stripe_events to update in case it exists.
     */
    where: Prisma.Stripe_eventsWhereUniqueInput;
    /**
     * In case the Stripe_events found by the `where` argument doesn't exist, create a new Stripe_events with this data.
     */
    create: Prisma.XOR<Prisma.Stripe_eventsCreateInput, Prisma.Stripe_eventsUncheckedCreateInput>;
    /**
     * In case the Stripe_events was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Stripe_eventsUpdateInput, Prisma.Stripe_eventsUncheckedUpdateInput>;
};
/**
 * Stripe_events delete
 */
export type Stripe_eventsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
    /**
     * Filter which Stripe_events to delete.
     */
    where: Prisma.Stripe_eventsWhereUniqueInput;
};
/**
 * Stripe_events deleteMany
 */
export type Stripe_eventsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Stripe_events to delete
     */
    where?: Prisma.Stripe_eventsWhereInput;
    /**
     * Limit how many Stripe_events to delete.
     */
    limit?: number;
};
/**
 * Stripe_events without action
 */
export type Stripe_eventsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stripe_events
     */
    select?: Prisma.Stripe_eventsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stripe_events
     */
    omit?: Prisma.Stripe_eventsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Stripe_events.d.ts.map
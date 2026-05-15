import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    ID: string | null;
    NAME: string | null;
    EMAIL: string | null;
    PHONE: string | null;
    AVATAR: string | null;
    HASHED_PASSWORD: string | null;
    HASHED_TOKEN: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    FIRST_ACESS: boolean | null;
    VALIDATION_EMAIL: boolean | null;
    ROLE: string | null;
    ACTIVE: boolean | null;
    STRIPE_CUSTOMER_ID: string | null;
    STRIPE_SUBSCRIPTION_ID: string | null;
    STRIPE_SUBSCRIPTION_STATUS: string | null;
    STRIPE_TRIAL_END: Date | null;
    STRIPE_TRIAL_START: Date | null;
    STRIPE_CURRENT_PERIOD_START: Date | null;
    STRIPE_CURRENT_PERIOD_END: Date | null;
    PLAN_ID: string | null;
};
export type UserMaxAggregateOutputType = {
    ID: string | null;
    NAME: string | null;
    EMAIL: string | null;
    PHONE: string | null;
    AVATAR: string | null;
    HASHED_PASSWORD: string | null;
    HASHED_TOKEN: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    FIRST_ACESS: boolean | null;
    VALIDATION_EMAIL: boolean | null;
    ROLE: string | null;
    ACTIVE: boolean | null;
    STRIPE_CUSTOMER_ID: string | null;
    STRIPE_SUBSCRIPTION_ID: string | null;
    STRIPE_SUBSCRIPTION_STATUS: string | null;
    STRIPE_TRIAL_END: Date | null;
    STRIPE_TRIAL_START: Date | null;
    STRIPE_CURRENT_PERIOD_START: Date | null;
    STRIPE_CURRENT_PERIOD_END: Date | null;
    PLAN_ID: string | null;
};
export type UserCountAggregateOutputType = {
    ID: number;
    NAME: number;
    EMAIL: number;
    PHONE: number;
    AVATAR: number;
    HASHED_PASSWORD: number;
    HASHED_TOKEN: number;
    CREATED_AT: number;
    UPDATED_AT: number;
    FIRST_ACESS: number;
    VALIDATION_EMAIL: number;
    ROLE: number;
    ACTIVE: number;
    STRIPE_CUSTOMER_ID: number;
    STRIPE_SUBSCRIPTION_ID: number;
    STRIPE_SUBSCRIPTION_STATUS: number;
    STRIPE_TRIAL_END: number;
    STRIPE_TRIAL_START: number;
    STRIPE_CURRENT_PERIOD_START: number;
    STRIPE_CURRENT_PERIOD_END: number;
    PLAN_ID: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    ID?: true;
    NAME?: true;
    EMAIL?: true;
    PHONE?: true;
    AVATAR?: true;
    HASHED_PASSWORD?: true;
    HASHED_TOKEN?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    FIRST_ACESS?: true;
    VALIDATION_EMAIL?: true;
    ROLE?: true;
    ACTIVE?: true;
    STRIPE_CUSTOMER_ID?: true;
    STRIPE_SUBSCRIPTION_ID?: true;
    STRIPE_SUBSCRIPTION_STATUS?: true;
    STRIPE_TRIAL_END?: true;
    STRIPE_TRIAL_START?: true;
    STRIPE_CURRENT_PERIOD_START?: true;
    STRIPE_CURRENT_PERIOD_END?: true;
    PLAN_ID?: true;
};
export type UserMaxAggregateInputType = {
    ID?: true;
    NAME?: true;
    EMAIL?: true;
    PHONE?: true;
    AVATAR?: true;
    HASHED_PASSWORD?: true;
    HASHED_TOKEN?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    FIRST_ACESS?: true;
    VALIDATION_EMAIL?: true;
    ROLE?: true;
    ACTIVE?: true;
    STRIPE_CUSTOMER_ID?: true;
    STRIPE_SUBSCRIPTION_ID?: true;
    STRIPE_SUBSCRIPTION_STATUS?: true;
    STRIPE_TRIAL_END?: true;
    STRIPE_TRIAL_START?: true;
    STRIPE_CURRENT_PERIOD_START?: true;
    STRIPE_CURRENT_PERIOD_END?: true;
    PLAN_ID?: true;
};
export type UserCountAggregateInputType = {
    ID?: true;
    NAME?: true;
    EMAIL?: true;
    PHONE?: true;
    AVATAR?: true;
    HASHED_PASSWORD?: true;
    HASHED_TOKEN?: true;
    CREATED_AT?: true;
    UPDATED_AT?: true;
    FIRST_ACESS?: true;
    VALIDATION_EMAIL?: true;
    ROLE?: true;
    ACTIVE?: true;
    STRIPE_CUSTOMER_ID?: true;
    STRIPE_SUBSCRIPTION_ID?: true;
    STRIPE_SUBSCRIPTION_STATUS?: true;
    STRIPE_TRIAL_END?: true;
    STRIPE_TRIAL_START?: true;
    STRIPE_CURRENT_PERIOD_START?: true;
    STRIPE_CURRENT_PERIOD_END?: true;
    PLAN_ID?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    ID: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN: string | null;
    CREATED_AT: Date | null;
    UPDATED_AT: Date | null;
    FIRST_ACESS: boolean;
    VALIDATION_EMAIL: boolean;
    ROLE: string;
    ACTIVE: boolean;
    STRIPE_CUSTOMER_ID: string | null;
    STRIPE_SUBSCRIPTION_ID: string | null;
    STRIPE_SUBSCRIPTION_STATUS: string | null;
    STRIPE_TRIAL_END: Date | null;
    STRIPE_TRIAL_START: Date | null;
    STRIPE_CURRENT_PERIOD_START: Date | null;
    STRIPE_CURRENT_PERIOD_END: Date | null;
    PLAN_ID: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    ID?: Prisma.StringFilter<"User"> | string;
    NAME?: Prisma.StringFilter<"User"> | string;
    EMAIL?: Prisma.StringFilter<"User"> | string;
    PHONE?: Prisma.StringFilter<"User"> | string;
    AVATAR?: Prisma.StringFilter<"User"> | string;
    HASHED_PASSWORD?: Prisma.StringFilter<"User"> | string;
    HASHED_TOKEN?: Prisma.StringNullableFilter<"User"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFilter<"User"> | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFilter<"User"> | boolean;
    ROLE?: Prisma.StringFilter<"User"> | string;
    ACTIVE?: Prisma.BoolFilter<"User"> | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_TRIAL_END?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    PLAN_ID?: Prisma.StringNullableFilter<"User"> | string | null;
    PLAN?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    HISTORY_PLAYS?: Prisma.History_PlaysListRelationFilter;
    VIDEOS?: Prisma.VideoListRelationFilter;
    CAMPAIGNS?: Prisma.CampaignListRelationFilter;
    TESTS_AB?: Prisma.Test_ABListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMAIL?: Prisma.SortOrder;
    PHONE?: Prisma.SortOrder;
    AVATAR?: Prisma.SortOrder;
    HASHED_PASSWORD?: Prisma.SortOrder;
    HASHED_TOKEN?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    FIRST_ACESS?: Prisma.SortOrder;
    VALIDATION_EMAIL?: Prisma.SortOrder;
    ROLE?: Prisma.SortOrder;
    ACTIVE?: Prisma.SortOrder;
    STRIPE_CUSTOMER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_TRIAL_END?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_TRIAL_START?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_START?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_END?: Prisma.SortOrderInput | Prisma.SortOrder;
    PLAN_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    PLAN?: Prisma.PlanOrderByWithRelationInput;
    HISTORY_PLAYS?: Prisma.History_PlaysOrderByRelationAggregateInput;
    VIDEOS?: Prisma.VideoOrderByRelationAggregateInput;
    CAMPAIGNS?: Prisma.CampaignOrderByRelationAggregateInput;
    TESTS_AB?: Prisma.Test_ABOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    ID?: string;
    EMAIL?: string;
    STRIPE_CUSTOMER_ID?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    NAME?: Prisma.StringFilter<"User"> | string;
    PHONE?: Prisma.StringFilter<"User"> | string;
    AVATAR?: Prisma.StringFilter<"User"> | string;
    HASHED_PASSWORD?: Prisma.StringFilter<"User"> | string;
    HASHED_TOKEN?: Prisma.StringNullableFilter<"User"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFilter<"User"> | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFilter<"User"> | boolean;
    ROLE?: Prisma.StringFilter<"User"> | string;
    ACTIVE?: Prisma.BoolFilter<"User"> | boolean;
    STRIPE_SUBSCRIPTION_ID?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_TRIAL_END?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    PLAN_ID?: Prisma.StringNullableFilter<"User"> | string | null;
    PLAN?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    HISTORY_PLAYS?: Prisma.History_PlaysListRelationFilter;
    VIDEOS?: Prisma.VideoListRelationFilter;
    CAMPAIGNS?: Prisma.CampaignListRelationFilter;
    TESTS_AB?: Prisma.Test_ABListRelationFilter;
}, "ID" | "EMAIL" | "STRIPE_CUSTOMER_ID">;
export type UserOrderByWithAggregationInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMAIL?: Prisma.SortOrder;
    PHONE?: Prisma.SortOrder;
    AVATAR?: Prisma.SortOrder;
    HASHED_PASSWORD?: Prisma.SortOrder;
    HASHED_TOKEN?: Prisma.SortOrderInput | Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrderInput | Prisma.SortOrder;
    FIRST_ACESS?: Prisma.SortOrder;
    VALIDATION_EMAIL?: Prisma.SortOrder;
    ROLE?: Prisma.SortOrder;
    ACTIVE?: Prisma.SortOrder;
    STRIPE_CUSTOMER_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_TRIAL_END?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_TRIAL_START?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_START?: Prisma.SortOrderInput | Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_END?: Prisma.SortOrderInput | Prisma.SortOrder;
    PLAN_ID?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    ID?: Prisma.StringWithAggregatesFilter<"User"> | string;
    NAME?: Prisma.StringWithAggregatesFilter<"User"> | string;
    EMAIL?: Prisma.StringWithAggregatesFilter<"User"> | string;
    PHONE?: Prisma.StringWithAggregatesFilter<"User"> | string;
    AVATAR?: Prisma.StringWithAggregatesFilter<"User"> | string;
    HASHED_PASSWORD?: Prisma.StringWithAggregatesFilter<"User"> | string;
    HASHED_TOKEN?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    FIRST_ACESS?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    VALIDATION_EMAIL?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    ROLE?: Prisma.StringWithAggregatesFilter<"User"> | string;
    ACTIVE?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    STRIPE_TRIAL_END?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    PLAN_ID?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
};
export type UserCreateInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN?: Prisma.PlanCreateNestedOneWithoutUsersInput;
    HISTORY_PLAYS?: Prisma.History_PlaysCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABCreateNestedManyWithoutUSERInput;
};
export type UserUncheckedCreateInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN_ID?: string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoUncheckedCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABUncheckedCreateNestedManyWithoutUSERInput;
};
export type UserUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN?: Prisma.PlanUpdateOneWithoutUsersNestedInput;
    HISTORY_PLAYS?: Prisma.History_PlaysUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUpdateManyWithoutUSERNestedInput;
};
export type UserUncheckedUpdateInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUncheckedUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUncheckedUpdateManyWithoutUSERNestedInput;
};
export type UserCreateManyInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN_ID?: string | null;
};
export type UserUpdateManyMutationInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCountOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMAIL?: Prisma.SortOrder;
    PHONE?: Prisma.SortOrder;
    AVATAR?: Prisma.SortOrder;
    HASHED_PASSWORD?: Prisma.SortOrder;
    HASHED_TOKEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
    FIRST_ACESS?: Prisma.SortOrder;
    VALIDATION_EMAIL?: Prisma.SortOrder;
    ROLE?: Prisma.SortOrder;
    ACTIVE?: Prisma.SortOrder;
    STRIPE_CUSTOMER_ID?: Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_ID?: Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.SortOrder;
    STRIPE_TRIAL_END?: Prisma.SortOrder;
    STRIPE_TRIAL_START?: Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_START?: Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_END?: Prisma.SortOrder;
    PLAN_ID?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMAIL?: Prisma.SortOrder;
    PHONE?: Prisma.SortOrder;
    AVATAR?: Prisma.SortOrder;
    HASHED_PASSWORD?: Prisma.SortOrder;
    HASHED_TOKEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
    FIRST_ACESS?: Prisma.SortOrder;
    VALIDATION_EMAIL?: Prisma.SortOrder;
    ROLE?: Prisma.SortOrder;
    ACTIVE?: Prisma.SortOrder;
    STRIPE_CUSTOMER_ID?: Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_ID?: Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.SortOrder;
    STRIPE_TRIAL_END?: Prisma.SortOrder;
    STRIPE_TRIAL_START?: Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_START?: Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_END?: Prisma.SortOrder;
    PLAN_ID?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    ID?: Prisma.SortOrder;
    NAME?: Prisma.SortOrder;
    EMAIL?: Prisma.SortOrder;
    PHONE?: Prisma.SortOrder;
    AVATAR?: Prisma.SortOrder;
    HASHED_PASSWORD?: Prisma.SortOrder;
    HASHED_TOKEN?: Prisma.SortOrder;
    CREATED_AT?: Prisma.SortOrder;
    UPDATED_AT?: Prisma.SortOrder;
    FIRST_ACESS?: Prisma.SortOrder;
    VALIDATION_EMAIL?: Prisma.SortOrder;
    ROLE?: Prisma.SortOrder;
    ACTIVE?: Prisma.SortOrder;
    STRIPE_CUSTOMER_ID?: Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_ID?: Prisma.SortOrder;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.SortOrder;
    STRIPE_TRIAL_END?: Prisma.SortOrder;
    STRIPE_TRIAL_START?: Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_START?: Prisma.SortOrder;
    STRIPE_CURRENT_PERIOD_END?: Prisma.SortOrder;
    PLAN_ID?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserCreateNestedManyWithoutPLANInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPLANInput, Prisma.UserUncheckedCreateWithoutPLANInput> | Prisma.UserCreateWithoutPLANInput[] | Prisma.UserUncheckedCreateWithoutPLANInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPLANInput | Prisma.UserCreateOrConnectWithoutPLANInput[];
    createMany?: Prisma.UserCreateManyPLANInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutPLANInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPLANInput, Prisma.UserUncheckedCreateWithoutPLANInput> | Prisma.UserCreateWithoutPLANInput[] | Prisma.UserUncheckedCreateWithoutPLANInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPLANInput | Prisma.UserCreateOrConnectWithoutPLANInput[];
    createMany?: Prisma.UserCreateManyPLANInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutPLANNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPLANInput, Prisma.UserUncheckedCreateWithoutPLANInput> | Prisma.UserCreateWithoutPLANInput[] | Prisma.UserUncheckedCreateWithoutPLANInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPLANInput | Prisma.UserCreateOrConnectWithoutPLANInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutPLANInput | Prisma.UserUpsertWithWhereUniqueWithoutPLANInput[];
    createMany?: Prisma.UserCreateManyPLANInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutPLANInput | Prisma.UserUpdateWithWhereUniqueWithoutPLANInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutPLANInput | Prisma.UserUpdateManyWithWhereWithoutPLANInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutPLANNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPLANInput, Prisma.UserUncheckedCreateWithoutPLANInput> | Prisma.UserCreateWithoutPLANInput[] | Prisma.UserUncheckedCreateWithoutPLANInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPLANInput | Prisma.UserCreateOrConnectWithoutPLANInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutPLANInput | Prisma.UserUpsertWithWhereUniqueWithoutPLANInput[];
    createMany?: Prisma.UserCreateManyPLANInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutPLANInput | Prisma.UserUpdateWithWhereUniqueWithoutPLANInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutPLANInput | Prisma.UserUpdateManyWithWhereWithoutPLANInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type UserCreateNestedOneWithoutHISTORY_PLAYSInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHISTORY_PLAYSInput, Prisma.UserUncheckedCreateWithoutHISTORY_PLAYSInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHISTORY_PLAYSInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutHISTORY_PLAYSNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHISTORY_PLAYSInput, Prisma.UserUncheckedCreateWithoutHISTORY_PLAYSInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHISTORY_PLAYSInput;
    upsert?: Prisma.UserUpsertWithoutHISTORY_PLAYSInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutHISTORY_PLAYSInput, Prisma.UserUpdateWithoutHISTORY_PLAYSInput>, Prisma.UserUncheckedUpdateWithoutHISTORY_PLAYSInput>;
};
export type UserCreateNestedOneWithoutVIDEOSInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVIDEOSInput, Prisma.UserUncheckedCreateWithoutVIDEOSInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVIDEOSInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutVIDEOSNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVIDEOSInput, Prisma.UserUncheckedCreateWithoutVIDEOSInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVIDEOSInput;
    upsert?: Prisma.UserUpsertWithoutVIDEOSInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutVIDEOSInput, Prisma.UserUpdateWithoutVIDEOSInput>, Prisma.UserUncheckedUpdateWithoutVIDEOSInput>;
};
export type UserCreateNestedOneWithoutCAMPAIGNSInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCAMPAIGNSInput, Prisma.UserUncheckedCreateWithoutCAMPAIGNSInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCAMPAIGNSInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutCAMPAIGNSNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCAMPAIGNSInput, Prisma.UserUncheckedCreateWithoutCAMPAIGNSInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCAMPAIGNSInput;
    upsert?: Prisma.UserUpsertWithoutCAMPAIGNSInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCAMPAIGNSInput, Prisma.UserUpdateWithoutCAMPAIGNSInput>, Prisma.UserUncheckedUpdateWithoutCAMPAIGNSInput>;
};
export type UserCreateNestedOneWithoutTESTS_ABInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTESTS_ABInput, Prisma.UserUncheckedCreateWithoutTESTS_ABInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTESTS_ABInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutTESTS_ABNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTESTS_ABInput, Prisma.UserUncheckedCreateWithoutTESTS_ABInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTESTS_ABInput;
    upsert?: Prisma.UserUpsertWithoutTESTS_ABInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTESTS_ABInput, Prisma.UserUpdateWithoutTESTS_ABInput>, Prisma.UserUncheckedUpdateWithoutTESTS_ABInput>;
};
export type UserCreateWithoutPLANInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABCreateNestedManyWithoutUSERInput;
};
export type UserUncheckedCreateWithoutPLANInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoUncheckedCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABUncheckedCreateNestedManyWithoutUSERInput;
};
export type UserCreateOrConnectWithoutPLANInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPLANInput, Prisma.UserUncheckedCreateWithoutPLANInput>;
};
export type UserCreateManyPLANInputEnvelope = {
    data: Prisma.UserCreateManyPLANInput | Prisma.UserCreateManyPLANInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutPLANInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutPLANInput, Prisma.UserUncheckedUpdateWithoutPLANInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPLANInput, Prisma.UserUncheckedCreateWithoutPLANInput>;
};
export type UserUpdateWithWhereUniqueWithoutPLANInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPLANInput, Prisma.UserUncheckedUpdateWithoutPLANInput>;
};
export type UserUpdateManyWithWhereWithoutPLANInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutPLANInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    ID?: Prisma.StringFilter<"User"> | string;
    NAME?: Prisma.StringFilter<"User"> | string;
    EMAIL?: Prisma.StringFilter<"User"> | string;
    PHONE?: Prisma.StringFilter<"User"> | string;
    AVATAR?: Prisma.StringFilter<"User"> | string;
    HASHED_PASSWORD?: Prisma.StringFilter<"User"> | string;
    HASHED_TOKEN?: Prisma.StringNullableFilter<"User"> | string | null;
    CREATED_AT?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    UPDATED_AT?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFilter<"User"> | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFilter<"User"> | boolean;
    ROLE?: Prisma.StringFilter<"User"> | string;
    ACTIVE?: Prisma.BoolFilter<"User"> | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.StringNullableFilter<"User"> | string | null;
    STRIPE_TRIAL_END?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    PLAN_ID?: Prisma.StringNullableFilter<"User"> | string | null;
};
export type UserCreateWithoutHISTORY_PLAYSInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN?: Prisma.PlanCreateNestedOneWithoutUsersInput;
    VIDEOS?: Prisma.VideoCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABCreateNestedManyWithoutUSERInput;
};
export type UserUncheckedCreateWithoutHISTORY_PLAYSInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN_ID?: string | null;
    VIDEOS?: Prisma.VideoUncheckedCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABUncheckedCreateNestedManyWithoutUSERInput;
};
export type UserCreateOrConnectWithoutHISTORY_PLAYSInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutHISTORY_PLAYSInput, Prisma.UserUncheckedCreateWithoutHISTORY_PLAYSInput>;
};
export type UserUpsertWithoutHISTORY_PLAYSInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutHISTORY_PLAYSInput, Prisma.UserUncheckedUpdateWithoutHISTORY_PLAYSInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutHISTORY_PLAYSInput, Prisma.UserUncheckedCreateWithoutHISTORY_PLAYSInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutHISTORY_PLAYSInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutHISTORY_PLAYSInput, Prisma.UserUncheckedUpdateWithoutHISTORY_PLAYSInput>;
};
export type UserUpdateWithoutHISTORY_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN?: Prisma.PlanUpdateOneWithoutUsersNestedInput;
    VIDEOS?: Prisma.VideoUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUpdateManyWithoutUSERNestedInput;
};
export type UserUncheckedUpdateWithoutHISTORY_PLAYSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIDEOS?: Prisma.VideoUncheckedUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUncheckedUpdateManyWithoutUSERNestedInput;
};
export type UserCreateWithoutVIDEOSInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN?: Prisma.PlanCreateNestedOneWithoutUsersInput;
    HISTORY_PLAYS?: Prisma.History_PlaysCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABCreateNestedManyWithoutUSERInput;
};
export type UserUncheckedCreateWithoutVIDEOSInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN_ID?: string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABUncheckedCreateNestedManyWithoutUSERInput;
};
export type UserCreateOrConnectWithoutVIDEOSInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutVIDEOSInput, Prisma.UserUncheckedCreateWithoutVIDEOSInput>;
};
export type UserUpsertWithoutVIDEOSInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutVIDEOSInput, Prisma.UserUncheckedUpdateWithoutVIDEOSInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutVIDEOSInput, Prisma.UserUncheckedCreateWithoutVIDEOSInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutVIDEOSInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutVIDEOSInput, Prisma.UserUncheckedUpdateWithoutVIDEOSInput>;
};
export type UserUpdateWithoutVIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN?: Prisma.PlanUpdateOneWithoutUsersNestedInput;
    HISTORY_PLAYS?: Prisma.History_PlaysUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUpdateManyWithoutUSERNestedInput;
};
export type UserUncheckedUpdateWithoutVIDEOSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUncheckedUpdateManyWithoutUSERNestedInput;
};
export type UserCreateWithoutCAMPAIGNSInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN?: Prisma.PlanCreateNestedOneWithoutUsersInput;
    HISTORY_PLAYS?: Prisma.History_PlaysCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABCreateNestedManyWithoutUSERInput;
};
export type UserUncheckedCreateWithoutCAMPAIGNSInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN_ID?: string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoUncheckedCreateNestedManyWithoutUSERInput;
    TESTS_AB?: Prisma.Test_ABUncheckedCreateNestedManyWithoutUSERInput;
};
export type UserCreateOrConnectWithoutCAMPAIGNSInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCAMPAIGNSInput, Prisma.UserUncheckedCreateWithoutCAMPAIGNSInput>;
};
export type UserUpsertWithoutCAMPAIGNSInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCAMPAIGNSInput, Prisma.UserUncheckedUpdateWithoutCAMPAIGNSInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCAMPAIGNSInput, Prisma.UserUncheckedCreateWithoutCAMPAIGNSInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCAMPAIGNSInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCAMPAIGNSInput, Prisma.UserUncheckedUpdateWithoutCAMPAIGNSInput>;
};
export type UserUpdateWithoutCAMPAIGNSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN?: Prisma.PlanUpdateOneWithoutUsersNestedInput;
    HISTORY_PLAYS?: Prisma.History_PlaysUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUpdateManyWithoutUSERNestedInput;
};
export type UserUncheckedUpdateWithoutCAMPAIGNSInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUncheckedUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUncheckedUpdateManyWithoutUSERNestedInput;
};
export type UserCreateWithoutTESTS_ABInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN?: Prisma.PlanCreateNestedOneWithoutUsersInput;
    HISTORY_PLAYS?: Prisma.History_PlaysCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignCreateNestedManyWithoutUSERInput;
};
export type UserUncheckedCreateWithoutTESTS_ABInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
    PLAN_ID?: string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedCreateNestedManyWithoutUSERInput;
    VIDEOS?: Prisma.VideoUncheckedCreateNestedManyWithoutUSERInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedCreateNestedManyWithoutUSERInput;
};
export type UserCreateOrConnectWithoutTESTS_ABInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTESTS_ABInput, Prisma.UserUncheckedCreateWithoutTESTS_ABInput>;
};
export type UserUpsertWithoutTESTS_ABInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTESTS_ABInput, Prisma.UserUncheckedUpdateWithoutTESTS_ABInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTESTS_ABInput, Prisma.UserUncheckedCreateWithoutTESTS_ABInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTESTS_ABInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTESTS_ABInput, Prisma.UserUncheckedUpdateWithoutTESTS_ABInput>;
};
export type UserUpdateWithoutTESTS_ABInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN?: Prisma.PlanUpdateOneWithoutUsersNestedInput;
    HISTORY_PLAYS?: Prisma.History_PlaysUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUpdateManyWithoutUSERNestedInput;
};
export type UserUncheckedUpdateWithoutTESTS_ABInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PLAN_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUncheckedUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedUpdateManyWithoutUSERNestedInput;
};
export type UserCreateManyPLANInput = {
    ID?: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    AVATAR?: string;
    HASHED_PASSWORD: string;
    HASHED_TOKEN?: string | null;
    CREATED_AT?: Date | string | null;
    UPDATED_AT?: Date | string | null;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: string;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: string | null;
    STRIPE_SUBSCRIPTION_ID?: string | null;
    STRIPE_SUBSCRIPTION_STATUS?: string | null;
    STRIPE_TRIAL_END?: Date | string | null;
    STRIPE_TRIAL_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Date | string | null;
};
export type UserUpdateWithoutPLANInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUpdateManyWithoutUSERNestedInput;
};
export type UserUncheckedUpdateWithoutPLANInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    HISTORY_PLAYS?: Prisma.History_PlaysUncheckedUpdateManyWithoutUSERNestedInput;
    VIDEOS?: Prisma.VideoUncheckedUpdateManyWithoutUSERNestedInput;
    CAMPAIGNS?: Prisma.CampaignUncheckedUpdateManyWithoutUSERNestedInput;
    TESTS_AB?: Prisma.Test_ABUncheckedUpdateManyWithoutUSERNestedInput;
};
export type UserUncheckedUpdateManyWithoutPLANInput = {
    ID?: Prisma.StringFieldUpdateOperationsInput | string;
    NAME?: Prisma.StringFieldUpdateOperationsInput | string;
    EMAIL?: Prisma.StringFieldUpdateOperationsInput | string;
    PHONE?: Prisma.StringFieldUpdateOperationsInput | string;
    AVATAR?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_PASSWORD?: Prisma.StringFieldUpdateOperationsInput | string;
    HASHED_TOKEN?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CREATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UPDATED_AT?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FIRST_ACESS?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    VALIDATION_EMAIL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ROLE?: Prisma.StringFieldUpdateOperationsInput | string;
    ACTIVE?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    STRIPE_CUSTOMER_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_ID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_SUBSCRIPTION_STATUS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    STRIPE_TRIAL_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_TRIAL_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_START?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    STRIPE_CURRENT_PERIOD_END?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    HISTORY_PLAYS: number;
    VIDEOS: number;
    CAMPAIGNS: number;
    TESTS_AB: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    HISTORY_PLAYS?: boolean | UserCountOutputTypeCountHISTORY_PLAYSArgs;
    VIDEOS?: boolean | UserCountOutputTypeCountVIDEOSArgs;
    CAMPAIGNS?: boolean | UserCountOutputTypeCountCAMPAIGNSArgs;
    TESTS_AB?: boolean | UserCountOutputTypeCountTESTS_ABArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountHISTORY_PLAYSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.History_PlaysWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountVIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCAMPAIGNSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTESTS_ABArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Test_ABWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    EMAIL?: boolean;
    PHONE?: boolean;
    AVATAR?: boolean;
    HASHED_PASSWORD?: boolean;
    HASHED_TOKEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: boolean;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: boolean;
    STRIPE_SUBSCRIPTION_ID?: boolean;
    STRIPE_SUBSCRIPTION_STATUS?: boolean;
    STRIPE_TRIAL_END?: boolean;
    STRIPE_TRIAL_START?: boolean;
    STRIPE_CURRENT_PERIOD_START?: boolean;
    STRIPE_CURRENT_PERIOD_END?: boolean;
    PLAN_ID?: boolean;
    PLAN?: boolean | Prisma.User$PLANArgs<ExtArgs>;
    HISTORY_PLAYS?: boolean | Prisma.User$HISTORY_PLAYSArgs<ExtArgs>;
    VIDEOS?: boolean | Prisma.User$VIDEOSArgs<ExtArgs>;
    CAMPAIGNS?: boolean | Prisma.User$CAMPAIGNSArgs<ExtArgs>;
    TESTS_AB?: boolean | Prisma.User$TESTS_ABArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    EMAIL?: boolean;
    PHONE?: boolean;
    AVATAR?: boolean;
    HASHED_PASSWORD?: boolean;
    HASHED_TOKEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: boolean;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: boolean;
    STRIPE_SUBSCRIPTION_ID?: boolean;
    STRIPE_SUBSCRIPTION_STATUS?: boolean;
    STRIPE_TRIAL_END?: boolean;
    STRIPE_TRIAL_START?: boolean;
    STRIPE_CURRENT_PERIOD_START?: boolean;
    STRIPE_CURRENT_PERIOD_END?: boolean;
    PLAN_ID?: boolean;
    PLAN?: boolean | Prisma.User$PLANArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID?: boolean;
    NAME?: boolean;
    EMAIL?: boolean;
    PHONE?: boolean;
    AVATAR?: boolean;
    HASHED_PASSWORD?: boolean;
    HASHED_TOKEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: boolean;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: boolean;
    STRIPE_SUBSCRIPTION_ID?: boolean;
    STRIPE_SUBSCRIPTION_STATUS?: boolean;
    STRIPE_TRIAL_END?: boolean;
    STRIPE_TRIAL_START?: boolean;
    STRIPE_CURRENT_PERIOD_START?: boolean;
    STRIPE_CURRENT_PERIOD_END?: boolean;
    PLAN_ID?: boolean;
    PLAN?: boolean | Prisma.User$PLANArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    ID?: boolean;
    NAME?: boolean;
    EMAIL?: boolean;
    PHONE?: boolean;
    AVATAR?: boolean;
    HASHED_PASSWORD?: boolean;
    HASHED_TOKEN?: boolean;
    CREATED_AT?: boolean;
    UPDATED_AT?: boolean;
    FIRST_ACESS?: boolean;
    VALIDATION_EMAIL?: boolean;
    ROLE?: boolean;
    ACTIVE?: boolean;
    STRIPE_CUSTOMER_ID?: boolean;
    STRIPE_SUBSCRIPTION_ID?: boolean;
    STRIPE_SUBSCRIPTION_STATUS?: boolean;
    STRIPE_TRIAL_END?: boolean;
    STRIPE_TRIAL_START?: boolean;
    STRIPE_CURRENT_PERIOD_START?: boolean;
    STRIPE_CURRENT_PERIOD_END?: boolean;
    PLAN_ID?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID" | "NAME" | "EMAIL" | "PHONE" | "AVATAR" | "HASHED_PASSWORD" | "HASHED_TOKEN" | "CREATED_AT" | "UPDATED_AT" | "FIRST_ACESS" | "VALIDATION_EMAIL" | "ROLE" | "ACTIVE" | "STRIPE_CUSTOMER_ID" | "STRIPE_SUBSCRIPTION_ID" | "STRIPE_SUBSCRIPTION_STATUS" | "STRIPE_TRIAL_END" | "STRIPE_TRIAL_START" | "STRIPE_CURRENT_PERIOD_START" | "STRIPE_CURRENT_PERIOD_END" | "PLAN_ID", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PLAN?: boolean | Prisma.User$PLANArgs<ExtArgs>;
    HISTORY_PLAYS?: boolean | Prisma.User$HISTORY_PLAYSArgs<ExtArgs>;
    VIDEOS?: boolean | Prisma.User$VIDEOSArgs<ExtArgs>;
    CAMPAIGNS?: boolean | Prisma.User$CAMPAIGNSArgs<ExtArgs>;
    TESTS_AB?: boolean | Prisma.User$TESTS_ABArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PLAN?: boolean | Prisma.User$PLANArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PLAN?: boolean | Prisma.User$PLANArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        PLAN: Prisma.$PlanPayload<ExtArgs> | null;
        HISTORY_PLAYS: Prisma.$History_PlaysPayload<ExtArgs>[];
        VIDEOS: Prisma.$VideoPayload<ExtArgs>[];
        CAMPAIGNS: Prisma.$CampaignPayload<ExtArgs>[];
        TESTS_AB: Prisma.$Test_ABPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID: string;
        NAME: string;
        EMAIL: string;
        PHONE: string;
        AVATAR: string;
        HASHED_PASSWORD: string;
        HASHED_TOKEN: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        FIRST_ACESS: boolean;
        VALIDATION_EMAIL: boolean;
        ROLE: string;
        ACTIVE: boolean;
        STRIPE_CUSTOMER_ID: string | null;
        STRIPE_SUBSCRIPTION_ID: string | null;
        STRIPE_SUBSCRIPTION_STATUS: string | null;
        STRIPE_TRIAL_END: Date | null;
        STRIPE_TRIAL_START: Date | null;
        STRIPE_CURRENT_PERIOD_START: Date | null;
        STRIPE_CURRENT_PERIOD_END: Date | null;
        PLAN_ID: string | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `ID`
     * const userWithIDOnly = await prisma.user.findMany({ select: { ID: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `ID`
     * const userWithIDOnly = await prisma.user.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `ID`
     * const userWithIDOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    PLAN<T extends Prisma.User$PLANArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$PLANArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    HISTORY_PLAYS<T extends Prisma.User$HISTORY_PLAYSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$HISTORY_PLAYSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$History_PlaysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    VIDEOS<T extends Prisma.User$VIDEOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$VIDEOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    CAMPAIGNS<T extends Prisma.User$CAMPAIGNSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$CAMPAIGNSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    TESTS_AB<T extends Prisma.User$TESTS_ABArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$TESTS_ABArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Test_ABPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly ID: Prisma.FieldRef<"User", 'String'>;
    readonly NAME: Prisma.FieldRef<"User", 'String'>;
    readonly EMAIL: Prisma.FieldRef<"User", 'String'>;
    readonly PHONE: Prisma.FieldRef<"User", 'String'>;
    readonly AVATAR: Prisma.FieldRef<"User", 'String'>;
    readonly HASHED_PASSWORD: Prisma.FieldRef<"User", 'String'>;
    readonly HASHED_TOKEN: Prisma.FieldRef<"User", 'String'>;
    readonly CREATED_AT: Prisma.FieldRef<"User", 'DateTime'>;
    readonly UPDATED_AT: Prisma.FieldRef<"User", 'DateTime'>;
    readonly FIRST_ACESS: Prisma.FieldRef<"User", 'Boolean'>;
    readonly VALIDATION_EMAIL: Prisma.FieldRef<"User", 'Boolean'>;
    readonly ROLE: Prisma.FieldRef<"User", 'String'>;
    readonly ACTIVE: Prisma.FieldRef<"User", 'Boolean'>;
    readonly STRIPE_CUSTOMER_ID: Prisma.FieldRef<"User", 'String'>;
    readonly STRIPE_SUBSCRIPTION_ID: Prisma.FieldRef<"User", 'String'>;
    readonly STRIPE_SUBSCRIPTION_STATUS: Prisma.FieldRef<"User", 'String'>;
    readonly STRIPE_TRIAL_END: Prisma.FieldRef<"User", 'DateTime'>;
    readonly STRIPE_TRIAL_START: Prisma.FieldRef<"User", 'DateTime'>;
    readonly STRIPE_CURRENT_PERIOD_START: Prisma.FieldRef<"User", 'DateTime'>;
    readonly STRIPE_CURRENT_PERIOD_END: Prisma.FieldRef<"User", 'DateTime'>;
    readonly PLAN_ID: Prisma.FieldRef<"User", 'String'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.PLAN
 */
export type User$PLANArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where?: Prisma.PlanWhereInput;
};
/**
 * User.HISTORY_PLAYS
 */
export type User$HISTORY_PLAYSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.History_PlaysWhereInput;
    orderBy?: Prisma.History_PlaysOrderByWithRelationInput | Prisma.History_PlaysOrderByWithRelationInput[];
    cursor?: Prisma.History_PlaysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.History_PlaysScalarFieldEnum | Prisma.History_PlaysScalarFieldEnum[];
};
/**
 * User.VIDEOS
 */
export type User$VIDEOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    cursor?: Prisma.VideoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * User.CAMPAIGNS
 */
export type User$CAMPAIGNSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
/**
 * User.TESTS_AB
 */
export type User$TESTS_ABArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_AB
     */
    select?: Prisma.Test_ABSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Test_AB
     */
    omit?: Prisma.Test_ABOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Test_ABInclude<ExtArgs> | null;
    where?: Prisma.Test_ABWhereInput;
    orderBy?: Prisma.Test_ABOrderByWithRelationInput | Prisma.Test_ABOrderByWithRelationInput[];
    cursor?: Prisma.Test_ABWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Test_ABScalarFieldEnum | Prisma.Test_ABScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=User.d.ts.map
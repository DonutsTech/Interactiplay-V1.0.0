export async function formatProductsForPlan(products) {
    const Plan = await Promise.all(products.map(async (product) => {
        const planItem = {
            PLAN: product.name,
            STRIPE_PLAN_ID: product.id,
            STRIPE_PLAN_PRICE: product.default_price,
            ...(product.metadata || {}),
        };
        return planItem;
    }));
    return Plan.map((plan) => ({
        PLAN: plan.PLAN,
        STRIPE_PLAN_ID: plan.STRIPE_PLAN_ID || "",
        STRIPE_PLAN_PRICE: plan.STRIPE_PLAN_PRICE || "",
        PLAYS: Number(plan.PLAYS),
        PLAYS_PRICE: Number(plan.PLAYS_PRICE),
        PRICE: Number(plan.PRICE),
        STATUS: plan.STATUS === 'true',
        VIDEO_LIMIT: Number(plan.VIDEO_LIMIT),
    }));
}
//# sourceMappingURL=plan.js.map
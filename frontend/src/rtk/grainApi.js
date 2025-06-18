import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const grainApi = createApi({
    reducerPath: "grainApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),

    endpoints: (builder) => ({
        // Grains
        getGrains: builder.query({
            query: () => "/grain",
        }),

        getnutrients: builder.query({
            query: () => "/grain/nutrients",
        }),

        addGrain: builder.mutation({
            query: (grain) => ({
                url: "/grain",
                method: "POST",
                body: grain,
            }),
        }),

        deleteGrain: builder.mutation({
            query: (id) => ({
                url: `/grain?id=${id}`,
                method: "DELETE",
            }),
        }),

        updateGrain: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/grain`,
                method: "PUT",
                body: { id, ...body },
            }),
        }),

        // Grain Combos
        getGrainCombos: builder.query({
            query: () => "/grain/combo",
        }),

        deleteGrainCombo: builder.mutation({
            query: (id) => ({
                url: `/grain/combo?id=${id}`,
                method: "DELETE",
            }),
        }),

        updateGrainCombo: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/grain/combo/`,
                method: "PUT",
                body: { id, ...body },
            }),
        }),

        addGrainCombo: builder.mutation({
            query: (combo) => ({
                url: "/grain/combo",
                method: "POST",
                body: combo,
            }),
        }),

        // Product API
        getProducts: builder.query({
            query: () => `/product `,
        }),

        getoneProduct: builder.query({
            query: (id) => `/product?id=${id}`,
        }),

        updateProduct: builder.mutation({
            query: (formData) => ({
                url: `/product`,
                method: "PUT",
                body: formData,
            }),
        }),

        addProduct: builder.mutation({
            query: (formData) => ({
                url: "/product",
                method: "POST",
                body: formData,
            }),
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product?id=${id}`,
                method: "DELETE",
            }),
        }),

        //product variant

        getProductVariants: builder.query({
            query: () => `/productVariant`,
        }),

        getOneProductVariant: builder.query({
            query: (productId) => `/productVariant?productId=${productId}`,
        }),

        addProductVariant: builder.mutation({
            query: (variant) => ({
                url: "/productVariant",
                method: "POST",
                body: variant,
            }),
        }),

        updateProductVariant: builder.mutation({
            query: ({ id, ...body }) => {
                const fullBody = { id, ...body };
                console.log("Payload sent to backend:", JSON.stringify(fullBody, null, 2));
                return {
                    url: "/productVariant",
                    method: "PUT",
                    body: fullBody,
                };
            },
        }),

        deleteProductVariant: builder.mutation({
            query: (id) => ({
                url: `/productVariant?id=${id}`,
                method: "DELETE",
            }),
        }),

        //custom variant
        

        getCustomVariants: builder.query({
            query: (productId) => `/CustomVariant?productId=${productId}`,
        }),

        addCustomVariant: builder.mutation({
            query: (variant) => ({
                url: "/CustomVariant",
                method: "POST",
                body: variant,
            }),
        }),

        updateCustomVariant: builder.mutation({
            query: ({ id, ...body }) => {
                const fullBody = { id, ...body };
                console.log("Payload sent to backend:", JSON.stringify(fullBody, null, 2));
                return {
                    url: "/CustomVariant",
                    method: "PUT",
                    body: fullBody,
                };
            },
        }),

        deleteCustomVariant: builder.mutation({
            query: (id) => ({
                url: `/CustomVariant?id=${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    // Grains
    useGetGrainsQuery,
    useAddGrainMutation,
    useDeleteGrainMutation,
    useUpdateGrainMutation,
    useGetnutrientsQuery,

    // Grain Combos
    useGetGrainCombosQuery,
    useAddGrainComboMutation,
    useDeleteGrainComboMutation,
    useUpdateGrainComboMutation,

    // Products
    useGetProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useGetoneProductQuery,

    //product variant
    useGetProductVariantsQuery,
    useAddProductVariantMutation,
    useUpdateProductVariantMutation,
    useDeleteProductVariantMutation,
    useGetOneProductVariantQuery,

    //customVarient
    useGetCustomVariantsQuery,
    useAddCustomVariantMutation,
    useUpdateCustomVariantMutation,
    useDeleteCustomVariantMutation,
} = grainApi;

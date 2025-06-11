import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const grainApi = createApi({
  reducerPath: 'grainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

  endpoints: (builder) => ({
    getGrains: builder.query({
      query: () => '/grain',
    }),


    addGrain: builder.mutation({
      query: (grain) => ({
        url: '/grain',
        method: 'POST',
        body: grain,
      }),
    }),


    deleteGrain: builder.mutation({
      query: (id) => ({
        url: `/grain?id=${id}`,
        method: 'DELETE',
      }),
    }),

     getGrainCombos: builder.query({
      query: () => '/grain/combo',
    }),

    deleteGrainCombo: builder.mutation({
      query: (id) => ({
        url: `/grain/combo?id=${id}`,
        method: 'DELETE',
      }),
    }),

    
    addGrainCombo: builder.mutation({
      query: (combo) => ({
        url: '/grain/combo',
        method: 'POST',
        body: combo,
      }),
    }),
  }),
});

export const {
  useGetGrainsQuery,
  useAddGrainMutation,
  useDeleteGrainMutation,
  useGetGrainCombosQuery,
  useAddGrainComboMutation,
  useDeleteGrainComboMutation,
} = grainApi;

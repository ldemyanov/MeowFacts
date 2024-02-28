import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DetailMeowFact, MeowFact } from './types';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://cat-fact.herokuapp.com',
})

type BaseQueryWithRepeats = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>

const baseQueryWithRepeats: BaseQueryWithRepeats = async (args, api, extraOptions) => {
  const repeats = 5;
  let i = 0;
  let result = await baseQuery(args, api, extraOptions);

  while (i++ < repeats && result.error) {
    result = await baseQuery(args, api, extraOptions);
  }

  return result;
}

export const meowfactsApi = createApi({
  reducerPath: 'meowfacts',
  baseQuery: baseQueryWithRepeats,
  endpoints: (builder) => ({
    getMeowFacts: builder.query<MeowFact[], void>({
      query: () => ({
        url: '/facts/random?animal_type=cat&amount=9',
        method: 'GET',
      })
    }),
    getDetailMeowFact: builder.query<DetailMeowFact, { id: string }>({
      query: ({ id }) => ({
        url: `/facts/${id}`,
        method: 'GET',
      })
    })
  }),
})

export const { useGetMeowFactsQuery, useGetDetailMeowFactQuery } = meowfactsApi;
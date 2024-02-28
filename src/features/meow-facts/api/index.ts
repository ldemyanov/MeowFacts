/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MoewFactsParams, MoewFactsResponse } from './types';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://meowfacts.herokuapp.com/',
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
    console.error(result.error.data, result.error);
    result = await baseQuery(args, api, extraOptions);
  }

  return result;
}

export const meowfactsApi = createApi({
  reducerPath: 'meowfacts',
  baseQuery: baseQueryWithRepeats,
  endpoints: (builder) => ({
    getMeowFacts: builder.query<MoewFactsResponse, MoewFactsParams>({
      query: (params) => ({
        url: '',
        params,
        method: 'GET',
      })
    }),
  }),
})

export const { useGetMeowFactsQuery } = meowfactsApi;
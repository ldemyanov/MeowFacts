import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CanImgResponse } from './types';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thecatapi.com/v1/images/',
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

export const meowimgApi = createApi({
  reducerPath: 'meowimages',
  baseQuery: baseQueryWithRepeats,
  keepUnusedDataFor: 1,
  endpoints: (builder) => ({
    getMeowImg: builder.query<CanImgResponse[], void>({
      query: () => ({
        url: 'search?limit=2',
        method: 'GET',
      })
    }),
  }),
})

export const { useGetMeowImgQuery } = meowimgApi;
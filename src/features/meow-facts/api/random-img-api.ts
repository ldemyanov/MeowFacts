import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CatImgResponse } from './types';

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
  endpoints: (builder) => ({
    getMeowImg: builder.query<CatImgResponse[], void>({
      query: () => ({
        url: 'search?limit=10',
        method: 'GET',
      })
    }),
    getMeowImgById: builder.query<CatImgResponse, { imgId: string }>({
      query: ({ imgId }) => ({
        url: imgId,
        method: 'GET',
      })
    })
  }),
})

export const { useGetMeowImgQuery, useGetMeowImgByIdQuery } = meowimgApi;
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { meowfactsApi } from '../features/meow-facts/api/meow-facts-api'
import { meowimgApi } from '../features/meow-facts/api/random-img-api'
import { meowFactsSlice } from '../features/meow-facts/slice/meow-facts-slice'

export const store = configureStore({
  reducer: {
    [meowfactsApi.reducerPath]: meowfactsApi.reducer,
    [meowimgApi.reducerPath]: meowimgApi.reducer,
    [meowFactsSlice.name]: meowFactsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(meowfactsApi.middleware, meowimgApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
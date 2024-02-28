import { configureStore } from '@reduxjs/toolkit'
import { meowfactsApi } from '../features/meow-facts/api'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { meowimgApi } from '../features/randomCat/api'

export const store = configureStore({
  reducer: {
    [meowfactsApi.reducerPath]: meowfactsApi.reducer,
    [meowimgApi.reducerPath]: meowimgApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(meowfactsApi.middleware, meowimgApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
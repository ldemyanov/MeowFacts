import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { meowfactsApi } from '../api/meow-facts-api'
import { AppMeowFact, CatImgResponse } from '../api/types'
import { meowimgApi } from '../api/random-img-api'

type MeowFactsState = {
  facts: AppMeowFact[],
  images: CatImgResponse[],
}

const initialState: MeowFactsState = {
  facts: [],
  images: [],
}

export const meowFactsSlice = createSlice({
  name: 'meowSlice',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.facts.findIndex((appMeowFact) => appMeowFact._id == action.payload.id);
      state.facts[index].isLiked = !state.facts[index].isLiked;
    },
    removeFact: (state, action: PayloadAction<{ id: string }>) => {
      state.facts = state.facts.filter((appMeowFact) => appMeowFact._id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      meowfactsApi.endpoints.getMeowFacts.matchFulfilled,
      (state, action) => {
        state.facts = action.payload.map((meowFact, index) => ({ isLiked: false, indexImg: index, ...meowFact }));
      },
    ),
      builder.addMatcher(
        meowimgApi.endpoints.getMeowImg.matchFulfilled,
        (state, action) => {
          state.images = action.payload;
        },
      )
  },
})

export const { toggleLike, removeFact } = meowFactsSlice.actions;

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CarouselSlidesIF } from '../../types/slides'

const initialState = {
  slides: [] as CarouselSlidesIF[],
}

export const slidesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSlides: (state, action: PayloadAction<CarouselSlidesIF[]>) => {
      state.slides = action.payload
    },
  },
})

export const { setSlides } = slidesSlice.actions

export default slidesSlice.reducer

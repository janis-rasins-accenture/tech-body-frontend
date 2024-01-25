import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TextsIF } from '../../types/texts'

const initialState = {
  texts: [
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      isActive: false,
    },
    {
      title: 'Second Title',
      text: 'Fuga fugiat doloremque optio pariatur minus repudiandae, necessitatibus laudantium magnam voluptatum, eius saepe possimus harum eos natus eaque voluptate cupiditate?',
      isActive: true,
    },
  ] as TextsIF[],
}

export const textsSlice = createSlice({
  name: 'texts',
  initialState,
  reducers: {
    setTexts: (state, action: PayloadAction<TextsIF[]>) => {
      state.texts = action.payload
    },
  },
})

export const { setTexts } = textsSlice.actions

export default textsSlice.reducer

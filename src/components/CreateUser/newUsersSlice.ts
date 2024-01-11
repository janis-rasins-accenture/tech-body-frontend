import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'

const initialState = {
  newUser: {} as UserIF,
}

export const createUserSlice = createSlice({
  name: 'newUser',
  initialState,
  reducers: {
    setNewUser: (state, action: PayloadAction<UserIF>) => {
      state.newUser = action.payload
    },
  },
})

export const { setNewUser } = createUserSlice.actions

export default createUserSlice.reducer

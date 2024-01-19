import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'

const initialState = {
  userProfile: [] as UserIF[],
}

export const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserIF[]>) => {
      state.userProfile = action.payload
    },
  },
})

export const { setUserProfile } = userSlice.actions

export default userSlice.reducer

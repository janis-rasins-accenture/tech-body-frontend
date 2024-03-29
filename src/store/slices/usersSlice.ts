import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'

const initialState = {
  user: {} as UserIF,
  users: [] as UserIF[],
  expireTimestamp: 0,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserIF>) => {
      state.user = action.payload
    },
    setUsers: (state, action: PayloadAction<UserIF[]>) => {
      state.users = action.payload
    },
    setExpireTimestamp: (state, action: PayloadAction<number>) => {
      state.expireTimestamp = action.payload
    },
  },
})

export const { setUser, setUsers, setExpireTimestamp } = userSlice.actions

export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'
import { PostIF } from '../../types/posts'

const initialState = {
  profile: {} as UserIF,
  expireTimestamp: 0,
  loginError: '',
  posts: [] as PostIF[],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserIF>) => {
      state.profile = action.payload
    },
    setExpireTimestamp: (state, action: PayloadAction<number>) => {
      state.expireTimestamp = action.payload
    },
    setLoginError: (state, action: PayloadAction<string>) => {
      state.loginError = action.payload
    },
    resetProfile: () => initialState,
    setCurrentProfilePosts: (state, action: PayloadAction<PostIF[]>) => {
      state.posts = action.payload
    },
  },
})

export const {
  setProfile,
  setLoginError,
  setExpireTimestamp,
  resetProfile,
  setCurrentProfilePosts,
} = profileSlice.actions

export default profileSlice.reducer

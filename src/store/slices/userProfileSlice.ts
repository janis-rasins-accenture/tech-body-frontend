import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'
import { PostIF } from '../../types/posts'

const initialState = {
  targetProfile: {} as UserIF,
  posts: [] as PostIF[],
}

export const userSlice = createSlice({
  name: 'targetProfile',
  initialState,
  reducers: {
    setTargetProfile: (state, action: PayloadAction<UserIF>) => {
      state.targetProfile = action.payload
    },
    setTargetPosts: (state, action: PayloadAction<PostIF[]>) => {
      state.posts = action.payload
    },
  },
})

export const { setTargetProfile, setTargetPosts } = userSlice.actions

export default userSlice.reducer

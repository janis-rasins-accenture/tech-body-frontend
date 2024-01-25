import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'
import { PostIF } from '../../types/posts'

const initialState = {
  currentProfile: {} as UserIF,
  expireTimestamp: 0,
  loginError: '',
  posts: [] as PostIF[],
}

export const currentProfileSlice = createSlice({
  name: 'currentProfile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserIF>) => {
      state.currentProfile = action.payload
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
    addPost: (state, action: PayloadAction<PostIF>) => {
      const postIndex = state.posts.findIndex((post) => {
        return action.payload.postId === post.postId
      })
      const newPosts = [...state.posts]
      newPosts[postIndex] = {
        ...action.payload,
      }
      state.posts = [...newPosts]
    },
  },
})

export const {
  setProfile,
  setLoginError,
  setExpireTimestamp,
  resetProfile,
  setCurrentProfilePosts,
  addPost,
} = currentProfileSlice.actions

export default currentProfileSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostIF } from '../../types/posts'

const initialState = {
  post: {} as PostIF,
  posts: [] as PostIF[],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<PostIF>) => {
      state.post = action.payload
    },
    setPosts: (state, action: PayloadAction<PostIF[]>) => {
      state.posts = action.payload
    },
  },
})

export const { setPost, setPosts } = postsSlice.actions

export default postsSlice.reducer

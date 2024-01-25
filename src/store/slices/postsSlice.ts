import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostIF } from '../../types/posts'

const initialState = {
  posts: [] as PostIF[],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostIF[]>) => {
      state.posts = action.payload
    },
  },
})

export const { setPosts } = postsSlice.actions

export default postsSlice.reducer

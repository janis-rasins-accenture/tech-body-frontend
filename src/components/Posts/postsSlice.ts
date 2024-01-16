import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostIF } from '../../types/posts'

const initialState = {
  post: {} as PostIF,
  posts: [
    {
      postId: '1',
      userId: '1',
      title: 'Deinde capillus.',
      text: 'Umquam totus provident vigor tricesimus. Derideo subiungo aequus accedo. Consuasor consequatur paulatim ipsa denuo apto temporibus.\nAggero terreo argumentum apto. Tredecim turba aestus nisi cohibeo absconditus aranea subnecto vir. Convoco auctus communis.\nTenus cinis contego deleniti cilicium. Curiositas veritas adduco abduco defetiscor. Quisquam corroboro congregatio averto vesco reprehenderit.',
      imageUrl: 'https://loremflickr.com/480/270/abstract?lock=5651592386707456',
      unixTimestamp: 1678715280531,
      isActive: 1,
    },
    {
      postId: '2',
      userId: '2',
      title: 'Auctus aufero.',
      text: ',Atrox ventito tunc solitudo.',
      imageUrl: 'https://loremflickr.com/480/270/abstract?lock=6152484139565056',
      unixTimestamp: 1606236134930,
      isActive: 1,
    },
    {
      postId: '3',
      userId: '2',
      title: 'Sumo tribuo.',
      text: 'Pecco harum acies volaticus.',
      imageUrl: 'https://loremflickr.com/480/270/abstract?lock=3281623231496192',
      unixTimestamp: 1699277877119,
      isActive: 1,
    },
  ] as PostIF[],
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

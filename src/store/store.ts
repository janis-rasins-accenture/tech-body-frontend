import { configureStore } from '@reduxjs/toolkit'
import isLoadingReducer from '../components/common/Loader/loaderSlice'
import currentProfileReducer from './slices/currentProfileSlice'
import usersReducer from './slices/usersSlice'
import slidesReducer from './slices/slidesSlice'
import textsReducer from './slices/textsSlice'
import alertReducer from '../components/common/Alert/alertSlice'
import postsReducer from './slices/postsSlice'
import targetProfileReducer from './slices/targetProfileSlice'

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    currentProfile: currentProfileReducer,
    targetProfile: targetProfileReducer,
    users: usersReducer,
    slides: slidesReducer,
    texts: textsReducer,
    alert: alertReducer,
    posts: postsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

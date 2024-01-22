import { configureStore } from '@reduxjs/toolkit'
import isLoadingReducer from '../components/common/Loader/loaderSlice'
import profileReducer from '../components/Profile/profileSlice'
import usersReducer from '../components/UserCards/usersSlice'
import slidesReducer from '../components/CarouselExample/slidesSlice'
import textsReducer from '../components/Accordion/textsSlice'
import alertReducer from '../components/common/Alert/alertSlice'
import postsReducer from '../components/Posts/postsSlice'
import targetProfileReducer from '../components/UsersProfile/userProfileSlice'

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    profile: profileReducer,
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

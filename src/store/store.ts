import { configureStore } from '@reduxjs/toolkit'
import isLoadingReducer from '../components/common/Loader/loaderSlice'
import profileReducer from '../components/Profile/profileSlice'
import usersReducer from '../components/UserCards/usersSlice'
import slidesReducer from '../components/CarouselExample/slidesSlice'
import textsReducer from '../components/Accordion/textsSlice'
import createUserReducer from '../components/CreateUser/newUsersSlice'

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    profile: profileReducer,
    users: usersReducer,
    slides: slidesReducer,
    texts: textsReducer,
    newUser: createUserReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

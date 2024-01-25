import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setLoading } from '../../components/common/Loader/loaderSlice'
import postsAPI from '../../api/postsApi'
import { ResponseIF } from '../../api/models'
import { setCurrentProfilePosts } from '../slices/currentProfileSlice'

export const getCurrentPosts = (userId: string) => (dispatch: Dispatch<AnyAction>) => {
  dispatch(setLoading(true))
  postsAPI
    .getTargetPosts(userId)
    .then((data) => {
      if (data.data) {
        dispatch(setCurrentProfilePosts(data.data))
      }
    })
    .catch((error: ResponseIF<undefined>) => {
      console.log('Fetch posts error: ', error)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
}

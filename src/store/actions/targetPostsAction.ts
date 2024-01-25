import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setLoading } from '../../components/common/Loader/loaderSlice'
import postsAPI from '../../api/postsApi'
import { ResponseIF } from '../../api/models'
import { setTargetPosts } from '../slices/targetProfileSlice'

export const getTargetPosts = (userId: string) => (dispatch: Dispatch<AnyAction>) => {
  dispatch(setLoading(true))
  postsAPI
    .getTargetPosts(userId)
    .then((data) => {
      if (data.data) {
        dispatch(setTargetPosts(data.data))
      }
    })
    .catch((error: ResponseIF<undefined>) => {
      console.log('Fetch posts error: ', error)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
}

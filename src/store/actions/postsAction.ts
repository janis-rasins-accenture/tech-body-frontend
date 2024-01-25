import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setLoading } from '../../components/common/Loader/loaderSlice'
import postsAPI from '../../api/postsApi'
import { ResponseIF } from '../../api/models'
import { setPosts } from '../slices/postsSlice'
import { addPost } from '../slices/currentProfileSlice'
import { setAlert } from '../../components/common/Alert/alertSlice'
import { AlertEnum } from '../../components/common/Alert/models'
import { BasicPostIF } from '../../types/posts'

export const getPosts = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(setLoading(true))
  postsAPI
    .getPosts()
    .then((data) => {
      if (data.data) {
        dispatch(setPosts(data.data))
      }
    })
    .catch((error: ResponseIF<undefined>) => {
      console.log('Fetch posts error: ', error)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
}

export const editPosts =
  (postId: string, newPost: BasicPostIF) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setLoading(true))
    try {
      const response = await postsAPI.updatePost(postId, newPost)
      if (response.data) {
        dispatch(addPost(response.data))
      }
    } catch (error: any) {
      console.log('Error: ', error)
      dispatch(setAlert({ message: error.message, variant: AlertEnum.DANGER }))
    } finally {
      dispatch(setLoading(false))
    }
  }

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import { ResponseIF } from '../../api/models'
import postsAPI from '../../api/postsApi'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from '@reduxjs/toolkit'
import { setPosts } from '../Posts/postsSlice'
import PostsByUser from './PostsByUser'

const PostsByUserContainer = () => {
  const posts: PostIF[] | undefined = useSelector((state: RootState) => state.posts.posts)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!posts?.length) {
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
    }
  }, [posts, dispatch])
  return Object.keys(posts) ? <PostsByUser posts={posts} /> : null
}

export default compose(withAuthRedirect)(PostsByUserContainer)

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import Posts from './Posts'
import { ResponseIF } from '../../api/models'
import postsAPI from '../../api/postsApi'
import { setPosts } from './postsSlice'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'

const PostsContainer = () => {
  const posts: PostIF[] = useSelector((state: RootState) => state.posts.posts)
  const currentProfile: UserIF = useSelector((state: RootState) => state.profile.profile)
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
  return posts.length ? <Posts posts={posts} currentProfile={currentProfile} /> : null
}

export default compose(withAuthRedirect)(PostsContainer)

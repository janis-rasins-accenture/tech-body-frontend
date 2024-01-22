import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import { ResponseIF } from '../../api/models'
import postsAPI from '../../api/postsApi'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from '@reduxjs/toolkit'
import Posts from '../Posts/Posts'
import { UserIF } from '../../types/users'
import { setCurrentProfilePosts } from './profileSlice'

const ProfilePostsContainer = () => {
  const posts: PostIF[] = useSelector((state: RootState) => state.profile.posts)
  const currentProfile: UserIF = useSelector((state: RootState) => state.profile.profile)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!posts?.length) {
      postsAPI
        .getPostsByUser(currentProfile.userId)
        .then((data) => {
          if (data.data) {
            dispatch(setCurrentProfilePosts(data.data))
          }
        })
        .catch((error: ResponseIF<undefined>) => {
          console.log('Fetch posts error: ', error)
        })
    }
  }, [posts, dispatch, currentProfile.userId])
  return posts.length ? <Posts posts={posts} currentProfile={currentProfile} /> : null
}

export default compose(withAuthRedirect)(ProfilePostsContainer)

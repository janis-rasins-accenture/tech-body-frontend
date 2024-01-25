import React from 'react'
import { useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from '@reduxjs/toolkit'
import Posts from '../Posts/Posts'
import { UserIF } from '../../types/users'
import { getCurrentPosts } from '../../store/actions/currentPostsAction'
import { useAppDispatch } from '../../store/hooks'

const CurrentProfilePostsContainer = () => {
  const posts: PostIF[] = useSelector((state: RootState) => state.currentProfile.posts)
  const currentProfile: UserIF = useSelector(
    (state: RootState) => state.currentProfile.currentProfile
  )
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    if (posts?.length) {
      return
    }
    dispatch(getCurrentPosts(currentProfile.userId))
  }, [posts, dispatch, currentProfile.userId])
  return posts.length ? <Posts posts={posts} currentProfile={currentProfile} /> : null
}

export default compose(withAuthRedirect)(CurrentProfilePostsContainer)

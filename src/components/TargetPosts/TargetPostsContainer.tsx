import React from 'react'
import { useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from '@reduxjs/toolkit'
import Posts from '../Posts/Posts'
import { UserIF } from '../../types/users'
import { getTargetPosts } from '../../store/actions/targetPostsAction'
import { useAppDispatch } from '../../store/hooks'

const TargetPostsContainer = () => {
  const posts: PostIF[] = useSelector((state: RootState) => state.targetProfile.posts)
  const targetProfile: UserIF = useSelector((state: RootState) => state.targetProfile.targetProfile)
  const currentProfile: UserIF = useSelector(
    (state: RootState) => state.currentProfile.currentProfile
  )
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!posts?.length || posts[0].userId !== targetProfile.userId) {
      const userId = targetProfile.userId
      dispatch(getTargetPosts(userId))
    }
  }, [posts, dispatch, targetProfile.userId])
  return posts.length ? <Posts posts={posts} currentProfile={currentProfile} /> : null
}

export default compose(withAuthRedirect)(TargetPostsContainer)

import React from 'react'
import { useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import Posts from './Posts'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from '@reduxjs/toolkit'
import { UserIF } from '../../types/users'
import { getPosts } from '../../store/actions/postsAction'
import { useAppDispatch } from '../../store/hooks'

const PostsContainer = () => {
  const posts: PostIF[] = useSelector((state: RootState) => state.posts.posts)
  const currentProfile: UserIF = useSelector(
    (state: RootState) => state.currentProfile.currentProfile
  )
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    if (!posts?.length) {
      dispatch(getPosts())
    }
  }, [posts, dispatch])
  return posts.length ? <Posts posts={posts} currentProfile={currentProfile} /> : null
}

export default compose(withAuthRedirect)(PostsContainer)

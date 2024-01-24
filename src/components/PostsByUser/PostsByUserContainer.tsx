import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import { ResponseIF } from '../../api/models'
import postsAPI from '../../api/postsApi'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from '@reduxjs/toolkit'
import Posts from '../Posts/Posts'
import { setTargetPosts } from '../../store/slices/userProfileSlice'
import { UserIF } from '../../types/users'

const PostsByUserContainer = () => {
  const posts: PostIF[] = useSelector((state: RootState) => state.targetProfile.posts)
  const targetProfile: UserIF = useSelector((state: RootState) => state.targetProfile.targetProfile)
  const currentProfile: UserIF = useSelector((state: RootState) => state.profile.profile)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!posts?.length || posts[0].userId !== targetProfile.userId) {
      postsAPI
        .getPostsByUser(targetProfile.userId)
        .then((data) => {
          if (data.data) {
            dispatch(setTargetPosts(data.data))
          }
        })
        .catch((error: ResponseIF<undefined>) => {
          console.log('Fetch posts error: ', error)
        })
    }
  }, [posts, dispatch, targetProfile.userId])
  return posts.length ? <Posts posts={posts} currentProfile={currentProfile} /> : null
}

export default compose(withAuthRedirect)(PostsByUserContainer)

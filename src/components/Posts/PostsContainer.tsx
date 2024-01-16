import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostIF } from '../../types/posts'
import { RootState } from '../../store/store'
import Posts from './Posts'
import { ResponseIF } from '../../api/models'
import postsAPI from '../../api/postsApi'
import { setPosts } from './postsSlice'
import { useNavigate } from 'react-router-dom'

const PostsContainer = () => {
  const posts: PostIF[] | undefined = useSelector((state: RootState) => state.posts.posts)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(resetAlert())
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
        .finally(() => {
          navigate('/')
        })
    }
  }, [posts, dispatch, resetAlert])
  return Object.keys(posts) ? <Posts posts={posts} /> : null
}

export default PostsContainer
function resetAlert(): any {
  throw new Error('Function not implemented.')
}

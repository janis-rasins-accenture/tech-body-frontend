import React from 'react'
import formFields from './formFields'
import { BasicPostIF, PostIF } from '../../types/posts'
import validationSchema from './validation'
import PostEditModal2 from './PostEditModal'
import { PostsEditModalProps } from '../Posts/models'
import { editPosts } from '../../store/actions/postsAction'
import { useAppDispatch } from '../../store/hooks'

const PostEditModalContainer = ({ post, setPostEditModalItem }: PostsEditModalProps) => {
  const dispatch = useAppDispatch()
  const closeModalHandler = () => {
    setPostEditModalItem({} as PostIF)
  }

  const handleEditPost = async (values: BasicPostIF) => {
    dispatch(editPosts(post.postId, values)).then(() => closeModalHandler())
  }

  const initialValues: BasicPostIF = {
    title: post.title,
    text: post.text,
    imageUrl: post.imageUrl,
  }

  return (
    <PostEditModal2
      handleEditPost={handleEditPost}
      formFields={formFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
      post={post}
      setPostEditModalItem={setPostEditModalItem}
    />
  )
}

export default PostEditModalContainer

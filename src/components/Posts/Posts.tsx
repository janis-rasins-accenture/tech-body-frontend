import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { PostIF } from '../../types/posts'
import PostsItem from './PostsItem'
import PostModal from './PostModal'
import { PostsCardsProps } from './models'
import PostEditModalContainer from '../PostEditModal/PostEditModalContainer'

const Posts = ({ posts, currentProfile }: PostsCardsProps) => {
  const [postModalItem, setPostModalItem] = useState({} as PostIF)
  const [postEditModalItem, setPostEditModalItem] = useState({} as PostIF)

  return (
    <>
      <Row>
        {posts.map((post) => (
          <Col key={`custom-user-${post.postId}`} sm={12} md={6} xl={4} className="d-flex">
            <PostsItem
              post={post}
              currentProfile={currentProfile}
              setPostModalItem={setPostModalItem}
              setPostEditModalItem={setPostEditModalItem}
            />
          </Col>
        ))}
      </Row>
      <PostModal post={postModalItem} setPostModalItem={setPostModalItem} />
      <PostEditModalContainer
        post={postEditModalItem}
        setPostEditModalItem={setPostEditModalItem}
      />
    </>
  )
}

export default Posts

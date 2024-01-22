import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { PostIF } from '../../types/posts'
import PostsItem from './PostsItem'
import PostModal from './PostModal'
import { PostsCardsProps } from './models'

const Posts = ({ posts, currentProfile }: PostsCardsProps) => {
  const [postItem, setPostItem] = useState({} as PostIF)

  return (
    <>
      <Row>
        {posts.map((post) => (
          <Col key={`custom-user-${post.postId}`} sm={12} md={6} xl={4} className="d-flex">
            <PostsItem post={post} currentProfile={currentProfile} setPostItem={setPostItem} />
          </Col>
        ))}
      </Row>
      <PostModal post={postItem} setPostItem={setPostItem} />
    </>
  )
}

export default Posts

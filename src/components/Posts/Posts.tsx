import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PostIF } from '../../types/posts'
import PostsItem from './PostsItem'

const Posts = ({ posts }: { posts: PostIF[] }) => {
  return (
    <Row>
      {posts.map((post) => (
        <Col key={`custom-user-${post.postId}`} sm={12} md={6} xl={4} className="d-flex">
          <PostsItem post={post} />
        </Col>
      ))}
    </Row>
  )
}

export default Posts

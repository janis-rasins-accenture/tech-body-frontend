import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PostIF } from '../../types/posts'
import PostsItem from '../Posts/PostsItem'
import { UserIF } from '../../types/users'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const PostsByUser = ({ posts }: { posts: PostIF[] }) => {
  const usersProfile: UserIF[] = useSelector((state: RootState) => state.userProfile.userProfile)
  const userPosts = posts.filter((post) => post.userId === usersProfile[0].userId)
  return (
    <Row>
      {userPosts.map((post) => (
        <Col key={`custom-user-${post.postId}`} sm={12} md={6} xl={4} className="d-flex">
          <PostsItem post={post} />
        </Col>
      ))}
    </Row>
  )
}

export default PostsByUser

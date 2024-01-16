import React from 'react'
import { Card } from 'react-bootstrap'
import { PostsCardsItemProps } from './models'
import Image from 'react-bootstrap/Image'

const PostsItem = ({ post }: PostsCardsItemProps): JSX.Element => {
  return (
    <Card className="d-flex w-100 mb-4">
      <Card.Header className="text-center py-3">
        <Image
          src={
            post.imageUrl
              ? post.imageUrl
              : 'https://images.pexels.com/photos/1827548/pexels-photo-1827548.jpeg'
          }
          style={{ width: '100%', height: '100%' }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PostsItem

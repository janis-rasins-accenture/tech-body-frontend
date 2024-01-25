import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { PostsCardsItemProps } from './models'
import Image from 'react-bootstrap/Image'
import styles from './Posts.module.css'

const PostsItem = ({
  post,
  currentProfile,
  setPostModalItem,
  setPostEditModalItem,
}: PostsCardsItemProps): JSX.Element => {
  const isLong = post.text.length > 200

  const convertTimestampToDateString = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  const onClickShowMoreHandler = () => {
    setPostModalItem(post)
  }

  const onClickEditHandler = () => {
    setPostEditModalItem(post)
  }

  return (
    <Card className="d-flex w-100 mb-4">
      <Card.Header className="text-center py-3">
        <Image
          src={
            post.imageUrl
              ? post.imageUrl
              : 'https://images.pexels.com/photos/1827548/pexels-photo-1827548.jpeg'
          }
          style={{ width: '100%', maxHeight: '215px', objectFit: 'cover' }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text style={{ position: 'relative' }}>
          {isLong ? `${post.text.slice(0, 180)}...` : post.text}
          {isLong ? (
            <span className={styles.viewMore} onClick={onClickShowMoreHandler}>
              Show more
            </span>
          ) : null}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="d-flex text-muted justify-content-between">
          {convertTimestampToDateString(post.unixTimestamp)}{' '}
          {post.userId === currentProfile.userId ? (
            <Button variant="outline-primary" size="sm" onClick={onClickEditHandler}>
              Edit
            </Button>
          ) : null}
        </small>
      </Card.Footer>
    </Card>
  )
}

export default PostsItem

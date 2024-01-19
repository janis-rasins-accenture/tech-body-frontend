import React from 'react'
import { Card } from 'react-bootstrap'
import { PostsCardsItemProps } from './models'
import Image from 'react-bootstrap/Image'
import styles from './Posts.module.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const PostsItem = ({ post }: PostsCardsItemProps): JSX.Element => {
  const isLong = post.text.length > 200
  const [modalShow, setModalShow] = React.useState(false)

  const convertTimestampToDateString = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  return (
    <>
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
              <div className={styles.viewMore} onClick={() => setModalShow(true)}>
                Show more
              </div>
            ) : null}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{convertTimestampToDateString(post.unixTimestamp)}</small>
        </Card.Footer>
      </Card>
      <Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <Image
              style={{ width: '100%', height: '450px', objectFit: 'cover' }}
              src={
                post.imageUrl
                  ? post.imageUrl
                  : 'https://images.pexels.com/photos/1827548/pexels-photo-1827548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{post.title}</h4>
          <p>{post.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PostsItem

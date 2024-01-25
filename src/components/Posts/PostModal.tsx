import React from 'react'
import { PostsModalProps } from './models'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { PostIF } from '../../types/posts'

const PostModal = ({ post, setPostModalItem }: PostsModalProps) => {
  const closeModalHandler = () => {
    setPostModalItem({} as PostIF)
  }

  return (
    <Modal
      show={!!post.postId}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModalHandler}
    >
      <Modal.Header closeButton>
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
        <Button onClick={closeModalHandler}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostModal

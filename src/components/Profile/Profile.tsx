import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import { UserIF } from '../../types/users'

const Profile = ({ user }: { user: UserIF }) => {
  return (
    <Card>
      <Image
        style={{ width: '200px', height: '200px' }}
        roundedCircle
        src={
          user.avatarUrl ? user.avatarUrl : 'https://www.svgrepo.com/show/452030/avatar-default.svg'
        }
      />
      <Card.Body>
        <Card.Title>
          {user.firstName} {user.lastName}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{user.userName}</ListGroup.Item>
          <ListGroup.Item>{user.email}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Profile

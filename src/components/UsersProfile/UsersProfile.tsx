import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import { UserIF } from '../../types/users'

const UsersProfile = ({ userProfile }: { userProfile: UserIF[] }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Image
            style={{ width: '100px', height: '100px' }}
            roundedCircle
            src={
              userProfile[0].avatarUrl
                ? userProfile[0].avatarUrl
                : 'https://www.svgrepo.com/show/452030/avatar-default.svg'
            }
          />{' '}
          {userProfile[0].firstName} {userProfile[0].lastName}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{userProfile[0].userName}</ListGroup.Item>
          <ListGroup.Item>{userProfile[0].email}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default UsersProfile

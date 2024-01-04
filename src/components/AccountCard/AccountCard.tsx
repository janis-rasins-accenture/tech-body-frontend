import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import { UserIF } from '../../store/types'
import { useSelector } from 'react-redux'
import { getLogedInUser } from '../../store/selector'

const AccountCard = () => {
  const userLogedIn: UserIF | undefined = useSelector(getLogedInUser)

  return userLogedIn ? (
    <Card>
      <Image
        style={{ width: '200px', height: '200px' }}
        roundedCircle
        src={
          userLogedIn.avatarUrl
            ? userLogedIn.avatarUrl
            : 'https://www.svgrepo.com/show/452030/avatar-default.svg'
        }
      />
      <Card.Body>
        <Card.Title>
          {userLogedIn.firstName} {userLogedIn.lastName}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{userLogedIn.userName}</ListGroup.Item>
          <ListGroup.Item>{userLogedIn.email}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  ) : null
}

export default AccountCard

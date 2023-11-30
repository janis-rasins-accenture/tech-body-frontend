import React from 'react'
import Card from 'react-bootstrap/Card'
import { UserCardsItemProps } from './models'
import Image from 'react-bootstrap/Image'

const UserCardsItem = ({ item }: UserCardsItemProps): JSX.Element => {
  const { email, firstName, lastName, avatarUrl } = item
  return (
    <Card className="d-flex align-self-stretch">
      <Card.Header className="text-center py-3">
        <Image src={avatarUrl} roundedCircle />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Card.Text>{email}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserCardsItem

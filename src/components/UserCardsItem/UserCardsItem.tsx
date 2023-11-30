import React from 'react'
import Card from 'react-bootstrap/Card'
import { UserCardsItemProps } from '../UserCards/models'

const UserCardsItem = (props: UserCardsItemProps): JSX.Element => {
  const { nameFirst, nameLast, image, email } = props.item

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {nameFirst} {nameLast}
        </Card.Title>
        <Card.Text>{email}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserCardsItem

import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserCardsItem from '../UserCardsItem/UserCardsItem'
import { UserIF } from '../../types/users'

const UserCards = ({ users }: { users: UserIF[] }) => {
  return (
    <Row>
      {users.map((user) => (
        <Col key={`custom-user-${user.userId}`} xs={12} sm={6} md={4} xl={3} className="d-flex">
          <UserCardsItem item={user} />
        </Col>
      ))}
    </Row>
  )
}

export default UserCards

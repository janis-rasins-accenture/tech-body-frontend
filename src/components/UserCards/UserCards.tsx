import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserCardsItem from '../UserCardsItem/UserCardsItem'
import { UserCardsProps } from './models'

const UserCards = (props: UserCardsProps): JSX.Element => {
  return (
    <Row>
      {props.users?.map((item) => (
        <Col key={`custom-user-${item.userId}`} xs={12} sm={6} md={4} xl={3} className="d-flex">
          <UserCardsItem item={item} />
        </Col>
      ))}
    </Row>
  )
}

export default UserCards

import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import { UserIF } from '../../types/users'
import { Col, Row } from 'react-bootstrap'

const CurrentProfile = ({ user }: { user: UserIF }) => {
  return (
    <Row>
      <Col sm={12} md={6} xl={4} className="d-flex">
        <Card className="w-100 mb-4">
          <Card.Header className="text-center py-3">
            <Image
              roundedCircle
              src={
                user.avatarUrl
                  ? user.avatarUrl
                  : 'https://www.svgrepo.com/show/452030/avatar-default.svg'
              }
            />
          </Card.Header>
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
      </Col>
    </Row>
  )
}

export default CurrentProfile

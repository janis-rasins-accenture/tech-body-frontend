import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Col, Row } from 'react-bootstrap'
import { UserIF } from '../../types/users'
import Image from 'react-bootstrap/Image'

const UserProfile = ({ targetProfile }: { targetProfile: UserIF }) => {
  return (
    <Row>
      <Col sm={12} md={6} xl={4} className="d-flex">
        <Card className="w-100 mb-4">
          <Card.Header className="text-center py-3">
            <Image
              src={
                targetProfile.avatarUrl
                  ? targetProfile.avatarUrl
                  : 'https://www.svgrepo.com/show/452030/avatar-default.svg'
              }
              roundedCircle
            />
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {targetProfile.firstName} {targetProfile.lastName}
            </Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{targetProfile.userName}</ListGroup.Item>
              <ListGroup.Item>{targetProfile.email}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default UserProfile

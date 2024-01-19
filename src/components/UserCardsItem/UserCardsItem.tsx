import React from 'react'
import Card from 'react-bootstrap/Card'
import { UserCardsItemProps } from './models'
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'

const UserCardsItem = ({ item }: UserCardsItemProps): JSX.Element => {
  const navigate = useNavigate()
  const { email, firstName, lastName, avatarUrl, userName } = item
  const handleClick = () => {
    navigate(`/users/${userName}`)
  }

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', width: '100%' }}>
      <Card className="d-flex w-100 mb-4">
        <Card.Header className="text-center py-3">
          <Image
            src={avatarUrl ? avatarUrl : 'https://www.svgrepo.com/show/452030/avatar-default.svg'}
            style={{ width: '50px', height: '50px' }}
            roundedCircle
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {firstName} {lastName}
          </Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserCardsItem

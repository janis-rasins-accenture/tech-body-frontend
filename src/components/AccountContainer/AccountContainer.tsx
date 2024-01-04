import React from 'react'
import Container from 'react-bootstrap/Container'
import AccountCard from '../AccountCard/AccountCard'
import ChangePassword from '../ChangePassword/ChangePassword'

const AccountContainer = () => {
  return (
    <Container>
      <AccountCard />
      <div className="mt-4"></div>
      <ChangePassword />
    </Container>
  )
}

export default AccountContainer

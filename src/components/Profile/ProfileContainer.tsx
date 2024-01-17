import React from 'react'
import Container from 'react-bootstrap/Container'
import Profile from './Profile'
import ChangePassword from '../ChangePassword/ChangePassword'
import { UserIF } from '../../types/users'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'

const ProfileContainer = () => {
  const user: UserIF = useSelector((state: RootState) => state.profile.profile)

  return Object.keys(user).length ? (
    <Container>
      <Profile user={user} />
      <div className="mt-4"></div>
      <ChangePassword />
    </Container>
  ) : null
}

export default compose(withAuthRedirect)(ProfileContainer)

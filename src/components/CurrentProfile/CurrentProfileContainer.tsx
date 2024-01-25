import React from 'react'
import CurrentProfile from './CurrentProfile'
import { UserIF } from '../../types/users'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'

const CurrentProfileContainer = () => {
  const user: UserIF = useSelector((state: RootState) => state.currentProfile.currentProfile)
  return Object.keys(user).length ? (
    <>
      <CurrentProfile user={user} />
      <div className="mt-4"></div>
    </>
  ) : null
}

export default compose(withAuthRedirect)(CurrentProfileContainer)

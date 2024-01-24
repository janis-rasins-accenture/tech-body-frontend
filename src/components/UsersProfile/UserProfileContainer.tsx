import React from 'react'
import UserProfile from './UserProfile'
import { UserIF } from '../../types/users'
import { RootState } from '../../store/store'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'
import PostsByUserContainer from '../PostsByUser/PostsByUserContainer'
import { useParams } from 'react-router-dom'
import { getProfile } from '../../store/actions/profileActions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const UserProfileContainer = () => {
  const { userName } = useParams()

  const targetProfile: UserIF = useAppSelector(
    (state: RootState) => state.targetProfile.targetProfile
  )
  const isLoading = useAppSelector((state: RootState) => state.isLoading.state)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!userName) {
      return
    }
    dispatch(getProfile(userName))
  }, [userName, dispatch])

  return targetProfile.userId && !isLoading ? (
    <>
      <UserProfile targetProfile={targetProfile} />
      <PostsByUserContainer />
    </>
  ) : null
}

export default compose(withAuthRedirect)(UserProfileContainer)

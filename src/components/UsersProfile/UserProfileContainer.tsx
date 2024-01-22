import React from 'react'
import UserProfile from './UserProfile'
import { UserIF } from '../../types/users'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'
import PostsByUserContainer from '../PostsByUser/PostsByUserContainer'
import { useParams } from 'react-router-dom'
import usersAPI from '../../api/usersApi'
import { setLoading } from '../common/Loader/loaderSlice'
import { setTargetProfile } from './userProfileSlice'
import { ResponseIF } from '../../api/models'
import { setAlert } from '../common/Alert/alertSlice'
import { AlertEnum } from '../common/Alert/models'

const UserProfileContainer = () => {
  const { userName } = useParams()
  const dispatch = useDispatch()

  const targetProfile: UserIF = useSelector((state: RootState) => state.targetProfile.targetProfile)

  React.useEffect(() => {
    if (!userName) {
      return
    }
    dispatch(setLoading(true))
    usersAPI
      .getUserByName(userName)
      .then((response) => {
        if (response.data) {
          dispatch(setTargetProfile(response.data))
        }
      })
      .catch((error: ResponseIF<undefined>) => {
        console.log('Get user error: ', error)
        dispatch(setAlert({ message: error.message, variant: AlertEnum.DANGER }))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }, [userName, dispatch])

  return targetProfile.userId ? (
    <>
      <UserProfile targetProfile={targetProfile} />
      <PostsByUserContainer />
    </>
  ) : null
}

export default compose(withAuthRedirect)(UserProfileContainer)

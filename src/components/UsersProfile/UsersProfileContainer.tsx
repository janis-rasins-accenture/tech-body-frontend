import React from 'react'
import Container from 'react-bootstrap/Container'
import UsersProfile from './UsersProfile'
import { UserIF } from '../../types/users'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'
import PostsByUserContainer from '../PostsByUser/PostsByUserContainer'
import { useParams } from 'react-router-dom'
import usersAPI from '../../api/usersApi'
import { setLoading } from '../common/Loader/loaderSlice'
import { setUserProfile } from './userProfileSlice'
import { ResponseIF } from '../../api/models'
import { setAlert } from '../common/Alert/alertSlice'
import { AlertEnum } from '../common/Alert/models'

const UsersProfileContainer = () => {
  const { userName } = useParams()
  const dispatch = useDispatch()

  const userProfile: UserIF[] = useSelector((state: RootState) => state.userProfile.userProfile)

  React.useEffect(() => {
    if (!userName) {
      return
    }
    dispatch(setLoading(true))
    usersAPI
      .getUserByName(userName)
      .then((response) => {
        if (response.data) {
          dispatch(setUserProfile(response.data))
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

  return Object.keys(userProfile).length ? (
    <Container>
      <UsersProfile userProfile={userProfile} />
      <div className="mt-4"></div>
      <PostsByUserContainer />
    </Container>
  ) : null
}

export default compose(withAuthRedirect)(UsersProfileContainer)

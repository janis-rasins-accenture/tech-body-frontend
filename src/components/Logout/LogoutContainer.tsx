import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import authAPI from '../../api/authApi'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { resetProfile } from '../../store/slices/currentProfileSlice'

const LogoutContainer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    authAPI
      .logoutUser()
      .then(() => {
        dispatch(resetProfile())
      })
      .catch((error) => console.log('Logout error', error))
      .finally(() => {
        navigate('/')
      })
  }

  return (
    <Button variant="primary" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default compose(withAuthRedirect)(LogoutContainer)

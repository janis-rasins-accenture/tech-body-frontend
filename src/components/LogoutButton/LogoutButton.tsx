import React from 'react'
import Button from 'react-bootstrap/Button'
import { logoutUser } from '../../api/usersApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoginStatus } from '../../store/action'
import { LoginStatusIF } from '../../store/types'

const LogoutButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        const updatedLoginStatus: LoginStatusIF = { loggedInStatus: false }
        dispatch(setLoginStatus(updatedLoginStatus))
      })
      .then(() => {
        navigate('/')
      })
  }

  return (
    <Button variant="primary" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default LogoutButton

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Login from './Login'
import { setLoading } from '../common/Loader/loaderSlice'
import authAPI from '../../api/authApi'
import { setLoginError, setProfile } from '../../store/slices/currentProfileSlice'
import { UserAuthIF, UserIF } from '../../types/users'
import { ResponseIF } from '../../api/models'
import { setAlert } from '../common/Alert/alertSlice'
import { AlertEnum } from '../common/Alert/models'
import formFields from './formFields'
import validationSchema from './validation'

const LoginContainer = () => {
  const { loginError, currentProfile } = useSelector((state: RootState) => state.currentProfile)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const from = location.state?.from?.pathname || '/'

  React.useEffect(() => {
    if (Object.keys(currentProfile).length) {
      navigate(from, { replace: true })
    }
  }, [loginError, currentProfile, from, navigate])

  const submitLogin = (values: UserAuthIF) => {
    dispatch(setLoading(true))
    authAPI
      .loginUser(values)
      .then((response: ResponseIF<UserIF>) => {
        console.log('Login response: ', response)
        if (!response.data) {
          return
        }
        dispatch(setLoginError(''))
        dispatch(setProfile(response.data))
      })
      .catch((error: ResponseIF<undefined>) => {
        console.log('Login error: ', error)
        dispatch(setLoginError(error.message))
        dispatch(setAlert({ message: error.message, variant: AlertEnum.DANGER }))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }

  const initialValues: UserAuthIF = {
    email: '',
    password: '',
  }

  return (
    <Login
      submitLogin={submitLogin}
      formFields={formFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
    />
  )
}

export default LoginContainer

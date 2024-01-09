import React from 'react'
import * as Yup from 'yup'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Login from './Login'
import { setLoading } from '../common/Loader/loaderSlice'
import authAPI from '../../api/authApi'
import { setLoginError, setProfile } from '../Profile/profileSlice'
import { UserAuthIF, UserIF } from '../../types/users'
import { ResponseIF } from '../../api/models'
import { CustomFormIF } from '../common/CustomForm/models'

const LoginContainer = () => {
  const { loginError, profile } = useSelector((state: RootState) => state.profile)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const from = location.state?.from?.pathname || '/'

  React.useEffect(() => {
    if (Object.keys(profile).length) {
      navigate(from, { replace: true })
    }
  }, [loginError, profile, from, navigate])

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
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }

  const formFields: CustomFormIF[] = [
    {
      feedbackMessage: 'Fine!',
      grids: {
        xxl: '6',
        xl: '6',
        lg: '6',
        md: '6',
        sm: '12',
      },
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      feedbackMessage: 'Fine!',
      grids: {
        xxl: '6',
        xl: '6',
        lg: '6',
        md: '6',
        sm: '12',
      },
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'Password',
    },
  ]

  const initialValues: UserAuthIF = {
    email: '',
    password: '',
  }

  const validationSchema: Yup.ObjectSchema<UserAuthIF> = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  })

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

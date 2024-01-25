import React from 'react'
import CreateNewUser from './CreateNewUser'
import { CreateUserIF, UserIF } from '../../types/users'
import { useDispatch } from 'react-redux'
import usersAPI from '../../api/usersApi'
import validationSchema from './validation'
import formFields from './formFields'
import { resetAlert, setAlert } from '../common/Alert/alertSlice'
import { setUser } from '../../store/slices/usersSlice'
import { AlertEnum } from '../common/Alert/models'
import { setLoading } from '../common/Loader/loaderSlice'
import { useNavigate } from 'react-router-dom'

const CreateNewUserContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(resetAlert())
  }, [resetAlert])

  const submitCreateNewUser = async (values: CreateUserIF) => {
    dispatch(setLoading(true))
    try {
      const response = await usersAPI.createUser(values)
      if (response.data) {
        const user: UserIF = {
          ...values,
          userId: response.data.userId,
        }
        dispatch(setUser(user))
        navigate('/login')
      } else {
        console.error('Invalid response format or missing userId')
      }
    } catch (error: any) {
      console.log('Error: ', error)
      dispatch(setAlert({ message: error.message, variant: AlertEnum.DANGER }))
    } finally {
      dispatch(setLoading(false))
    }
  }

  const initialValues: CreateUserIF = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatarUrl: '',
  }

  return (
    <CreateNewUser
      submitCreateNewUser={submitCreateNewUser}
      formFields={formFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
    />
  )
}

export default CreateNewUserContainer

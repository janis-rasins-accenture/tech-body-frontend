import React from 'react'
import CreateNewUser from './CreateNewUser'
import { CreateUserIF, UserIF } from '../../types/users'
import { useDispatch } from 'react-redux'
import { submitForm } from '../../store/action'
import usersAPI from '../../api/usersApi'
import validationSchema from './validation'
import formFields from './formFields'
import { setNewUser } from './newUsersSlice'

const CreateNewUserContainer = () => {
  const dispatch = useDispatch()

  const submitCreateNewUser = async (values: CreateUserIF) => {
    try {
      dispatch(submitForm(values))
      const response = await usersAPI.createUser(values)
      if (response.data) {
        const user: UserIF = {
          ...values,
          userId: response.data.userId,
        }
        dispatch(setNewUser(user))
      } else {
        console.error('Invalid response format or missing userId')
      }
    } catch (error) {
      console.error('Error creating user:', error)
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

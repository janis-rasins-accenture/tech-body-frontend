import * as Yup from 'yup'
import { CreateUserIF } from '../../types/users'

const validationSchema: Yup.ObjectSchema<CreateUserIF> = Yup.object().shape({
  firstName: Yup.string().min(2).max(20).required(),
  lastName: Yup.string().min(2).max(20).required(),
  userName: Yup.string().min(2).max(20).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/)
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  avatarUrl: Yup.string().url(),
})

export default validationSchema

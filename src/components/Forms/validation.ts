import * as yup from 'yup'

export const schema = yup.object().shape({
  firstName: yup.string().min(2).max(20).required(),
  lastName: yup.string().min(2).max(20).required(),
  userName: yup.string().min(2).max(20).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/)
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  avatarUrl: yup.string().url(),
})

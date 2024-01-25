import * as Yup from 'yup'
import { UserAuthIF } from '../../types/users'

const validationSchema: Yup.ObjectSchema<UserAuthIF> = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})

export default validationSchema

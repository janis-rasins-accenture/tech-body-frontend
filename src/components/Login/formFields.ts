import { CustomFormIF } from '../common/CustomForm/models'

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
    type: 'password',
  },
]

export default formFields

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
    id: 'password',
    name: 'password',
    label: 'Old password',
    type: 'password',
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
    label: 'New password',
    type: 'password',
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
    id: 'confirmPassword',
    name: 'confirmPassword',
    label: 'Confirm new password',
    type: 'password',
  },
]

export default formFields

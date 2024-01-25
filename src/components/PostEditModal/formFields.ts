import { CustomFormIF } from '../common/CustomForm/models'

const formFields: CustomFormIF[] = [
  {
    feedbackMessage: 'Fine!',
    grids: {
      xxl: '12',
      xl: '12',
      lg: '12',
      md: '12',
      sm: '12',
    },
    id: 'title',
    name: 'title',
    label: 'Title',
    type: 'text',
  },
  {
    feedbackMessage: 'Fine!',
    grids: {
      xxl: '12',
      xl: '12',
      lg: '12',
      md: '12',
      sm: '12',
    },
    id: 'imageUrl',
    name: 'imageUrl',
    label: 'Image URL',
    type: 'text',
  },
  {
    feedbackMessage: 'Fine!',
    grids: {
      xxl: '12',
      xl: '12',
      lg: '12',
      md: '12',
      sm: '12',
    },
    id: 'text',
    name: 'text',
    label: 'Text',
    type: 'textarea',
    rows: 5,
  },
]

export default formFields

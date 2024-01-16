import React from 'react'
import Yup from 'yup'
import { FormikHelpers, Formik } from 'formik'
import { CustomFormIF } from '../common/CustomForm/models'
import CustomForm from '../common/CustomForm/CustomForm'
import { CreateUserIF } from '../../types/users'

interface CreateNewUserProps {
  validationSchema: Yup.ObjectSchema<CreateUserIF>
  formFields: CustomFormIF[]
  initialValues: CreateUserIF
  submitCreateNewUser: (values: CreateUserIF) => void
}

const CreateNewUser = ({
  validationSchema,
  formFields,
  initialValues,
  submitCreateNewUser,
}: CreateNewUserProps) => {
  const handleSubmit = (values: CreateUserIF, actions: FormikHelpers<CreateUserIF>) => {
    actions.setSubmitting(false)
    submitCreateNewUser(values)
  }
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {({ handleChange, values, handleSubmit, touched, errors }) => (
        <CustomForm
          formFields={formFields}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitText="Send"
          touched={touched}
          values={values}
        />
      )}
    </Formik>
  )
}

export default CreateNewUser

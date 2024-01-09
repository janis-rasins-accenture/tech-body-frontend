import React from 'react'
import Yup from 'yup'
import { FormikHelpers, Formik } from 'formik'
import { UserAuthIF } from '../../types/users'
import { CustomFormIF } from '../common/CustomForm/models'
import CustomForm from '../common/CustomForm/CustomForm'

interface LoginProps {
  validationSchema: Yup.ObjectSchema<UserAuthIF>
  formFields: CustomFormIF[]
  initialValues: UserAuthIF
  // eslint-disable-next-line no-unused-vars
  submitLogin: (values: UserAuthIF) => void
}

const Login = ({ validationSchema, formFields, initialValues, submitLogin }: LoginProps) => {
  const handleSubmit = (values: UserAuthIF, actions: FormikHelpers<UserAuthIF>) => {
    actions.setSubmitting(false)
    submitLogin(values)
    actions.resetForm()
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

export default Login

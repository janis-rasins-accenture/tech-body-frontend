import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Formik } from 'formik'
import { Button } from 'react-bootstrap'
import { schema } from '../ChangePassword/validation'

const ChangePassword = () => {
  const handleSubmit = () => {
    console.log('handleSubmit')
  }
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={schema}
      initialValues={{
        oldPassword: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {({ handleChange, handleSubmit, touched, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Old password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                isInvalid={touched.oldPassword && !!errors.oldPassword}
                isValid={touched.oldPassword && !errors.oldPassword}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.oldPassword}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>New password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={touched.password && !!errors.password}
                isValid={touched.password && !errors.password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik05">
              <Form.Label>Confirm new password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                isValid={touched.confirmPassword && !errors.confirmPassword}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePassword

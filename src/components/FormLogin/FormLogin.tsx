import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import * as formik from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { UserAuthIF } from '../../store/types'
import { FormikHelpers } from 'formik'
import { loginUser } from '../../api/authApi'

const FormLogin = () => {
  const { Formik } = formik

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })

  const handleSubmit = (
    values: UserAuthIF,
    { setSubmitting, resetForm }: FormikHelpers<UserAuthIF>
  ) => {
    console.log('Login', values)
    setSubmitting(false)
    resetForm()
    loginUser(values).then((response) => {
      console.log(response)
    })
  }

  return (
    <Container>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <Form
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <Row className="justify-content-center mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormikEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{''}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{''}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md="6" className="text-center">
                <Button type="submit">Login</Button>{' '}
                <Button variant="outline-primary">
                  <Link to="/registration" className="nav-link">
                    Register
                  </Link>
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default FormLogin

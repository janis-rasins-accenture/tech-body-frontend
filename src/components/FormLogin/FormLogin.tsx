import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import * as formik from 'formik'
import * as yup from 'yup'

const FormLogin = () => {
  const { Formik } = formik

  const schema = yup.object().shape({
    userName: yup.string().min(2).max(20).required(),
    password: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/)
      .required(),
  })

  const handleSubmit = () => {
    console.log('Login')
  }

  return (
    <Container>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          userName: '',
          password: '',
        }}
      >
        {({ handleChange }) => (
          <Form noValidate>
            <Row className="justify-content-center mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="userName"
                    value={''}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">{''}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={''}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{''}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md="4" className="text-center">
                <Button type="submit">Login</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default FormLogin

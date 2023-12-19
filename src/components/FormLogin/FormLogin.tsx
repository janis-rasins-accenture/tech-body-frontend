import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import * as formik from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const FormLogin = () => {
  const { Formik } = formik

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
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
          email: '',
          password: '',
        }}
      >
        {({ handleChange }) => (
          <Form noValidate>
            <Row className="justify-content-center mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormikEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
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

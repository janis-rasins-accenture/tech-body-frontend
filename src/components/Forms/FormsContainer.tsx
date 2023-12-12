import React from 'react'
import { submitForm } from '../../store/action'
import { createUser } from '../../api/usersApi'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import { BasicUserIF } from '../../store/types'
import * as formik from 'formik'
import * as yup from 'yup'
import { connect, useDispatch } from 'react-redux'

const FormsContainer = ({ submitForm }: any) => {
  const { Formik } = formik
  const dispatch = useDispatch()

  const schema = yup.object().shape({
    firstName: yup.string().min(2).max(20).required(),
    lastName: yup.string().min(2).max(20).required(),
    userName: yup.string().min(2).max(20).required(),
    email: yup.string().email().required(),
    avatarUrl: yup.string().url(),
  })

  const handleSubmit = async (values: BasicUserIF) => {
    try {
      console.log(values)
      dispatch(submitForm(values))
      await createUser(values)
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return (
    <Container>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values)}
        initialValues={{
          firstName: '',
          lastName: '',
          userName: '',
          email: '',
          avatarUrl: '',
        }}
      >
        {({ handleSubmit, handleChange, touched, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="userName"
                    value={values.userName}
                    onChange={handleChange}
                    isValid={touched.userName && !errors.userName}
                    isInvalid={!!errors.userName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationFormik05">
                <Form.Label>Avatar URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter URL of avatar"
                  name="avatarUrl"
                  value={values.avatarUrl}
                  onChange={handleChange}
                  isInvalid={!!errors.avatarUrl}
                  isValid={!!errors.avatarUrl}
                />
              </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default connect(null, { submitForm })(FormsContainer)

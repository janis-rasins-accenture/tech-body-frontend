import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { CustomFormIF } from './models'

interface CustomFormFieldProps {
  formField: CustomFormIF
  value: any
  isValid?: boolean
  isInvalid?: boolean
  error?: string
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.SyntheticEvent) => void
}

const CustomFormField = ({
  formField: { grids, type, name, feedbackMessage, id, label, rows },
  handleChange,
  isValid,
  isInvalid,
  error,
  value,
}: CustomFormFieldProps) => {
  const inputType = ['email', 'text', 'number', 'password']
  return (
    <Form.Group
      as={Col}
      controlId={id}
      xxl={grids.xxl}
      xl={grids.xl}
      lg={grids.lg}
      md={grids.md}
      sm={grids.sm}
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...(inputType.includes(type) ? { type } : { as: 'textarea' })}
        name={name}
        value={value}
        onChange={handleChange}
        isValid={isValid}
        isInvalid={isInvalid}
        {...{ rows }}
      />
      <Form.Control.Feedback>{feedbackMessage}</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default CustomFormField

import React from 'react'
import BootstrapAlert from 'react-bootstrap/Alert'
import { AlertEnum } from './models'

interface AlertPropsIF {
  message: string
  variant: AlertEnum
}

const Alert = (props: AlertPropsIF) => {
  return (
    <BootstrapAlert variant={props.variant}>
      {/* <BootstrapAlert.Heading>Hey, nice to see you</BootstrapAlert.Heading> */}
      <p>{props.message}</p>
    </BootstrapAlert>
  )
}

export default Alert

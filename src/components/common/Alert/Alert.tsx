import React from 'react'
import BootstrapAlert from 'react-bootstrap/Alert'
import { AlertEnum } from './models'
import { resetAlert } from './alertSlice'

interface AlertPropsIF {
  message: string
  variant: AlertEnum
}

const Alert = (props: AlertPropsIF) => {
  return (
    <BootstrapAlert variant={props.variant} onClose={() => resetAlert()} dismissible>
      {/* <BootstrapAlert.Heading>Hey, nice to see you</BootstrapAlert.Heading> */}
      <p>{props.message}</p>
    </BootstrapAlert>
  )
}

export default Alert

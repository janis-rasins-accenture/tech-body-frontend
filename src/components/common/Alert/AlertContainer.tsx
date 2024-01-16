import React from 'react'
import { RootState } from '../../../store/store'
import Alert from './Alert'
import { useSelector } from 'react-redux'

const AlertContainer = () => {
  const alert = useSelector((state: RootState) => state.alert)
  return alert.isVisible ? <Alert variant={alert.variant} message={alert.message} /> : null
}

export default AlertContainer

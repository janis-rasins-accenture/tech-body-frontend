import React from 'react'
import { RootState } from '../../../store/store'
import Alert from './Alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetAlert } from './alertSlice'

const AlertContainer = () => {
  const alert = useSelector((state: RootState) => state.alert)
  const dispatch = useDispatch()
  const resetAlertHandler = () => {
    dispatch(resetAlert())
  }
  return alert.isVisible ? (
    <Alert variant={alert.variant} message={alert.message} resetAlertHandler={resetAlertHandler} />
  ) : null
}

export default AlertContainer

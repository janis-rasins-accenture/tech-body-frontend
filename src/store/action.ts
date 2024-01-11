import { BasicUserIF } from '../types/users'
import { ActionTypes } from './actionTypes'

export const submitForm = (userData: BasicUserIF) => {
  return {
    type: ActionTypes.SUBMIT_FORM,
    payload: userData,
  }
}

import { PayloadAction } from '@reduxjs/toolkit'
import { ActionTypes } from './actionTypes'

const defaultState = {}

const reducer = (state = defaultState, action: PayloadAction<any>) => {
  switch (action.type) {
    case ActionTypes.SUBMIT_FORM:
      return {
        ...state,
        values: action.payload,
      }
    default:
      return state
  }
}

export default reducer

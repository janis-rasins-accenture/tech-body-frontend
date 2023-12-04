import { ActionTypes } from './actionTypes'
import { UserIF } from './types'

export const setUsers = (users: UserIF[]) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  }
}

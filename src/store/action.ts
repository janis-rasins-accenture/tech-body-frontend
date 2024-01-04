import { ActionTypes } from './actionTypes'
import { UserIF, BasicUserIF, CarouselSlidesModel, LoginStatusIF } from './types'

export const setUsers = (users: UserIF[]) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  }
}

export const setCurrentUser = (userId: string) => {
  return {
    type: ActionTypes.SET_USER_ID,
    payload: userId,
  }
}

export const setLoginUserData = (userLogedIn: UserIF) => {
  console.log('action.ts', userLogedIn)
  return {
    type: ActionTypes.SET_USER,
    payload: userLogedIn,
  }
}

export const addUser = (user: UserIF) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: user,
  }
}

export const setCarouselSlides = (carouselSlides: CarouselSlidesModel[]) => {
  return {
    type: ActionTypes.SET_SLIDES,
    payload: carouselSlides,
  }
}

export const submitForm = (userData: BasicUserIF) => {
  console.log('submitForm', userData)
  return {
    type: ActionTypes.SUBMIT_FORM,
    payload: userData,
  }
}

export const setLoginStatus = (loggedInStatus: LoginStatusIF) => {
  console.log('setLoginStatus', loggedInStatus)
  return {
    type: ActionTypes.SET_LOGIN_STATUS,
    payload: loggedInStatus,
  }
}

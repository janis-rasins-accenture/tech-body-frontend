import { RootState } from './types'

export const getUsers = (state: RootState) => {
  return state.users
}

export const getCarouselSlides = (state: RootState) => {
  return state.carouselSlides
}

export const getCurrentUserID = (state: RootState) => {
  return state.currentUser?.userId
}

export const getTexts = (state: RootState) => {
  return state.texts
}

export const createUser = (state: RootState) => {
  return state.values
}

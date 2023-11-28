import { RootState } from './types'

export const getUsers = (state: RootState) => {
  return state.users
}

export const getImages = (state: RootState) => {
  return state.images
}

export const getTexts = (state: RootState) => {
  return state.texts
}

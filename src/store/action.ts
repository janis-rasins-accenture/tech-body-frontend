import { ActionTypes } from './actionTypes'
import { UserIF } from './types'
import { CarouselSlidesModel } from './types'

export const setUsers = (users: UserIF[]) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  }
}

export const setCarouselSlides = (carouselSlides: CarouselSlidesModel[]) => {
  return {
    type: ActionTypes.SET_SLIDES,
    payload: carouselSlides,
  }
}

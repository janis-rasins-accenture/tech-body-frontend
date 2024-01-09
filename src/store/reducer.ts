import { PayloadAction } from '@reduxjs/toolkit'
import { ActionTypes } from './actionTypes'

const defaultState = {
  loggedInStatus: {
    loggedInStatus: false,
  },
  texts: [
    {
      isActive: false,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      title: 'Title',
    },
    {
      isActive: true,
      text: 'Fuga fugiat doloremque optio pariatur minus repudiandae, necessitatibus laudantium magnam voluptatum, eius saepe possimus harum eos natus eaque voluptate cupiditate?',
      title: 'Second Title',
    },
  ],
}

const reducer = (state = defaultState, action: PayloadAction<any>) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload, // Store fetched users data in users state
      }
    case ActionTypes.SET_USER_ID:
      return {
        ...state,
        currentUser: {
          userId: action.payload,
          firstName: '',
          lastName: '',
          email: '',
          userName: '',
        }, // Store fetched users data in users state
      }
    case ActionTypes.SET_USER:
      console.log(', reducer.ts, SET_USER', action.payload)
      return {
        ...state,
        userLogedIn: action.payload,
      }
    case ActionTypes.SET_SLIDES:
      return {
        ...state,
        carouselSlides: action.payload, // Store fetched carousel slides in carouselSlides state
      }
    case ActionTypes.SUBMIT_FORM:
      return {
        ...state,
        values: action.payload,
      }
    case ActionTypes.ADD_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case ActionTypes.SET_LOGIN_STATUS:
      return {
        ...state,
        loggedInStatus: action.payload,
      }
    default:
      return state
  }
}

export default reducer

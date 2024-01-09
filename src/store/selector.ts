export const getUsers = (state: any) => {
  return state.users
}

export const getCarouselSlides = (state: any) => {
  return state.carouselSlides
}

export const getCurrentUserID = (state: any) => {
  return state.currentUser?.userId
}

export const getLogedInUser = (state: any) => {
  return state.userLogedIn
}

export const getLoggedInStatus = (state: any) => {
  return state.loggedInStatus
}

export const getTexts = (state: any) => {
  return state.texts
}

export const createUser = (state: any) => {
  return state.values
}

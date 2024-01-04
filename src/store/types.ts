export interface RootState {
  users?: UserIF[]
  texts?: Text[]
  carouselSlides?: CarouselSlidesModel[]
  values?: BasicUserIF
  currentUser?: UserIF
  userLogedIn?: UserIF
  loggedInStatus: LoginStatusIF
}

export interface BasicUserIF {
  firstName: string
  lastName: string
  email: string
  avatarUrl?: string
  userName: string
}

export interface UserFormValues extends BasicUserIF {
  confirmPassword: string
  password: string
}

export interface PasswordFormValues {
  oldPassword: string
  confirmPassword: string
  password: string
}

export interface UserIF extends BasicUserIF {
  userId: string
}

export interface UserAuthIF {
  email: string
  password: string
}

export interface LoginStatusIF {
  loggedInStatus: boolean
}

export interface Text {
  title: string
  text: string
  isActive: boolean
}

export interface CarouselSlidesModel {
  title: string
  link: string
  description: string
}

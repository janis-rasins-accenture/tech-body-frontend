export interface RootState {
  users?: UserIF[]
  texts?: Text[]
  carouselSlides?: CarouselSlidesModel[]
  values?: BasicUserIF
}

export interface BasicUserIF {
  firstName: string
  lastName: string
  email: string
  avatarUrl?: string
  userName: string
}

export interface UserIF extends BasicUserIF {
  userId: string
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

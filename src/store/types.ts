export interface RootState {
  users?: UserIF[]
  texts?: Text[]
  images?: ImageModel[]
}

export interface UserIF {
  userId: string
  firstName: string
  lastName: string
  email: string
  avatarUrl?: string
  userName: string
}

export interface Text {
  title: string
  text: string
  isActive: boolean
}

export interface ImageModel {
  title: string
  link: string
  description: string
}

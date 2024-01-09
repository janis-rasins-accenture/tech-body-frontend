export interface BasicUserIF {
  firstName: string
  lastName: string
  email: string
  avatarUrl?: string
  userName: string
}

export interface CreateUserIF extends BasicUserIF {
  confirmPassword: string
  password: string
}

export interface UserChangePasswordIF {
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

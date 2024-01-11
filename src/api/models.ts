export interface FetchOptionsIF {
  method: string
  mode: RequestMode
  cache: RequestCache
  credentials: RequestCredentials
  headers: {
    'Content-Type': string
  }
  redirect: RequestRedirect
  referrerPolicy: ReferrerPolicy
  body?: string
}

export interface CreateUserResponseIF {
  userId: string
}

export interface LoginUserResponseIF {
  success: boolean
  userId: string
}

export interface ResponseIF<T> {
  message: string
  success: boolean
  data?: T
}

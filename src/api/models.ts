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
  message: string
  data: {
    userId: string
  }
}

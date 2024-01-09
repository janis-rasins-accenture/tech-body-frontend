import { BasicUserIF, UserIF } from '../store/types'
import { callService } from './api'
import { CreateUserResponseIF, ResponseIF } from './models'

// export async function fetchUsers() {
//   const options = getData()
//   return fetch(`${API_URL}/${STAGE}/users`, options)
//     .then((response) => response.json())
//     .catch((error: unknown) => {
//       processError(error)
//     })
// }

// export async function fetchCurrentUser(userId: string) {
//   const options = getData()
//   return fetch(`${API_URL}/${STAGE}/currentUser/${userId}`, options)
//     .then((response) => response.json())
//     .catch((error: unknown) => {
//       processError(error)
//     })
// }

// export async function createUser(userData: BasicUserIF): Promise<CreateUserResponseIF> {
//   const options = postData(JSON.stringify(userData))
//   return fetch(`${API_URL}/${STAGE}/users`, options)
//     .then((response) => response.json())
// }

// export async function logoutUser(): Promise<void> {
//   const fetchOptions = FETCH_OPTIONS
//   console.log('User loged out')
//   return fetch(`${API_URL}/${STAGE}/logout`, fetchOptions)
//     .then((response) => response.json())
//     .catch((error: unknown) => {
//       processError(error)
//     })
// }

const usersAPI = {
  async getUser(userId: string): Promise<ResponseIF<UserIF>> {
    const response = await callService<UserIF>('POST', `users/${userId}`)
    return response
  },
  async getUsers(): Promise<ResponseIF<UserIF[]>> {
    const response = await callService<UserIF[]>('GET', `users`)
    return response
  },
  async createUser(userData: BasicUserIF): Promise<ResponseIF<CreateUserResponseIF>> {
    const response = await callService<CreateUserResponseIF>('POST', `users`, userData)
    return response
  },
}

export default usersAPI

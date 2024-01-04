import { BasicUserIF } from '../store/types'
import { API_URL, STAGE, getData, processError, postData, FETCH_OPTIONS } from './api'
import { CreateUserResponseIF } from './models'

export async function fetchUsers() {
  const options = getData()
  return fetch(`${API_URL}/${STAGE}/users`, options)
    .then((response) => response.json())
    .catch((error: unknown) => {
      processError(error)
    })
}

export async function fetchCurrentUser(userId: string) {
  const options = getData()
  return fetch(`${API_URL}/${STAGE}/currentUser/${userId}`, options)
    .then((response) => response.json())
    .catch((error: unknown) => {
      processError(error)
    })
}

export async function createUser(userData: BasicUserIF): Promise<CreateUserResponseIF> {
  const options = postData(JSON.stringify(userData))
  return fetch(`${API_URL}/${STAGE}/users`, options).then((response) => response.json())
}

export async function logoutUser(): Promise<void> {
  const fetchOptions = FETCH_OPTIONS
  console.log('User loged out')
  return fetch(`${API_URL}/${STAGE}/logout`, fetchOptions)
    .then((response) => response.json())
    .catch((error: unknown) => {
      processError(error)
    })
}

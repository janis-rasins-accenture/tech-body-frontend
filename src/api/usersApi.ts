import { BasicUserIF } from '../store/types'
import { API_URL, STAGE, getData, processError, createData } from './api'
import { CreateUserResponseIF } from './models'

export async function fetchUsers() {
  const options = getData()
  return fetch(`${API_URL}/${STAGE}/users`, options)
    .then((response) => response.json())
    .catch((error: unknown) => {
      processError(error)
    })
}

export async function createUser(userData: BasicUserIF): Promise<CreateUserResponseIF> {
  console.log('createUser()', userData)
  const options = createData(userData)
  return fetch(`${API_URL}/${STAGE}/users`, options).then((response) => response.json()) //fetch(http://localhost:4000/local/users/createData)
}

// export async function createUser(userData: BasicUserIF): Promise<CreateUserResponseIF> {
//   console.log('createUser()', userData)
//   const options = createData(userData)
//   try {
//     const response = await fetch(`${API_URL}/${STAGE}/users`, options)
//     if (!response.ok) {
//       // Handle non-2xx status codes
//       throw new Error(`HTTP error! 345 Status: ${response.status}`)
//     }
//     const responseData = await response.json()
//     return responseData
//   } catch (error) {
//     console.error('Error creating user:', error)
//     throw error // Re-throw the error to handle it in the calling function
//   }
// }

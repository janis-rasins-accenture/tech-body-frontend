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

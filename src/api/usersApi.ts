import { API_URL, STAGE, getData } from './api'

export async function fetchUsers() {
  const options = getData()
  return fetch(`${API_URL}/${STAGE}/users`, options).then((response) => response.json())
}

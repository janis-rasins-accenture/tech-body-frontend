import { UserAuthIF } from '../store/types'
import { API_URL, STAGE, postData } from './api'
import { LoginUserResponseIF } from './models'

export async function loginUser(loginData: UserAuthIF): Promise<LoginUserResponseIF> {
  const options = postData(JSON.stringify(loginData))
  return fetch(`${API_URL}/${STAGE}/login`, options).then((response) => response.json())
}

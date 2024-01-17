import { AuthResponseIF, ResponseIF } from './models'
import { callService } from './api'
import { UserAuthIF, UserIF } from '../types/users'

const authAPI = {
  async loginUser(loginData: UserAuthIF): Promise<ResponseIF<UserIF>> {
    const response = await callService<UserIF>('post', 'login', loginData)
    return response
  },
  async logoutUser() {
    const response = await callService('post', 'logout')
    return response
  },
  async isAuth(): Promise<ResponseIF<AuthResponseIF>> {
    const response = await callService<AuthResponseIF>('get', 'auth')
    return response
  },
}

export default authAPI

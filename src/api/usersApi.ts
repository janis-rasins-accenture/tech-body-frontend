import { UserIF, CreateUserIF } from '../types/users'
import { callService } from './api'
import { CreateUserResponseIF, ResponseIF } from './models'

const usersAPI = {
  async getUser(userId: string): Promise<ResponseIF<UserIF>> {
    const response = await callService<UserIF>('POST', `users/${userId}`)
    return response
  },
  async getUserByName(userName: string): Promise<ResponseIF<UserIF[]>> {
    console.log('Start get user')
    const response = await callService<UserIF[]>('GET', `user/${userName}`)
    return response
  },
  async getUsers(): Promise<ResponseIF<UserIF[]>> {
    const response = await callService<UserIF[]>('GET', `users`)
    return response
  },
  async createUser(userData: CreateUserIF): Promise<ResponseIF<CreateUserResponseIF>> {
    const response = await callService<CreateUserResponseIF>('POST', `users`, userData)
    return response
  },
}

export default usersAPI

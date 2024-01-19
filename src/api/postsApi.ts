import { PostIF } from '../types/posts'
import { callService } from './api'
import { ResponseIF } from './models'

const postsAPI = {
  async getPostsByUser(userId: string): Promise<ResponseIF<PostIF>> {
    const response = await callService<PostIF>('POST', `posts/${userId}`)
    return response
  },
  async getPosts(): Promise<ResponseIF<PostIF[]>> {
    const response = await callService<PostIF[]>('GET', `posts`)
    return response
  },
}

export default postsAPI

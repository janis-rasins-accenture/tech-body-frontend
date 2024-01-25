import { BasicPostIF, PostIF } from '../types/posts'
import { callService } from './api'
import { ResponseIF } from './models'

const postsAPI = {
  async getTargetPosts(userId: string): Promise<ResponseIF<PostIF[]>> {
    const response = await callService<PostIF[]>('GET', `posts/${userId}`)
    return response
  },
  async getPosts(): Promise<ResponseIF<PostIF[]>> {
    const response = await callService<PostIF[]>('GET', `posts`)
    return response
  },
  async updatePost(postId: string, values: BasicPostIF): Promise<ResponseIF<PostIF>> {
    const response = await callService<PostIF>('PUT', `posts/${postId}`, values)
    return response
  },
}

export default postsAPI

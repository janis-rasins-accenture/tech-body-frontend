export interface BasicPostIF {
  title: string
  text: string
  imageUrl?: string
}

export interface PostIF extends BasicPostIF {
  userId: string
  postId: string
  isActive: number
  unixTimestamp: number
}

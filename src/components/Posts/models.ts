import { PostIF } from '../../types/posts'
import { UserIF } from '../../types/users'

export interface PostsCardsItemProps {
  post: PostIF
  currentProfile: UserIF
  setPostItem: (post: PostIF) => void
}

export interface PostsModalProps {
  post: PostIF
  setPostItem: (post: PostIF) => void
}

export interface PostsCardsProps {
  posts: PostIF[]
  currentProfile: UserIF
}

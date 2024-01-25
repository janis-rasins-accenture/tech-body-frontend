import { PostIF } from '../../types/posts'
import { UserIF } from '../../types/users'

export interface PostsCardsItemProps {
  post: PostIF
  currentProfile: UserIF
  setPostModalItem: (post: PostIF) => void
  setPostEditModalItem: (post: PostIF) => void
}

export interface PostsModalProps {
  post: PostIF
  setPostModalItem: (post: PostIF) => void
}

export interface PostsEditModalProps {
  post: PostIF
  setPostEditModalItem: (post: PostIF) => void
}

export interface PostsCardsProps {
  posts: PostIF[]
  currentProfile: UserIF
}

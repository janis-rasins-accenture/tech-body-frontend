import { ImageModel } from '../../store/types'

export interface CustomCarouselProps {
  images: ImageModel[]
}

export interface CarouselItemExampleProps {
  item: ImageModel
}

export interface ImageModel {
  title: string
  link: string
  description: string
}

import { CarouselSlidesIF } from '../types/slides'
import { callService } from './api'
import { ResponseIF } from './models'

const slidesAPI = {
  async getSlides(): Promise<ResponseIF<CarouselSlidesIF[]>> {
    const response = await callService<CarouselSlidesIF[]>('GET', `carouselSlides`)
    return response
  },
}

export default slidesAPI

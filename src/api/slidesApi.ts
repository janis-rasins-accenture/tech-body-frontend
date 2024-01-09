import { CarouselSlidesModel } from '../store/types'
import { callService } from './api'
import { ResponseIF } from './models'

// export async function fetchCarouselSlides() {
//   const options = getData()
//   return fetch(`${API_URL}/${STAGE}/carouselSlides`, options)
//     .then((response) => response.json())
//     .catch((error: any) => {
//       processError(error)
//     })
// }

const slidesAPI = {
  async getSlides(): Promise<ResponseIF<CarouselSlidesModel[]>> {
    const response = await callService<CarouselSlidesModel[]>('GET', `carouselSlides`)
    return response
  },
}

export default slidesAPI

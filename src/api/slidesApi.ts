import { API_URL, STAGE, getData } from './api'

export async function fetchCarouselSlides() {
  const options = getData()
  return fetch(`${API_URL}/${STAGE}/carouselSlides`, options).then((response) => response.json())
}

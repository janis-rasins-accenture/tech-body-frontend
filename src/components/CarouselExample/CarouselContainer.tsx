import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarouselSlides } from '../../store/selector'
import { fetchCarouselSlides } from '../../api/slidesApi'
import { setCarouselSlides } from '../../store/action'
import { CarouselSlidesModel } from '../../store/types'
import CarouselExample from './CarouselExample'

const CarouselContainer = () => {
  const carouselSlides: CarouselSlidesModel[] | undefined = useSelector(getCarouselSlides)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!carouselSlides) {
      fetchCarouselSlides().then((data) => {
        dispatch(setCarouselSlides(data.data))
      })
    }
  }, [carouselSlides, dispatch])
  return carouselSlides ? <CarouselExample carouselSlides={carouselSlides} /> : null
}

export default CarouselContainer

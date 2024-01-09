import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarouselSlides } from '../../store/selector'
import slidesAPI from '../../api/slidesApi'
import { setCarouselSlides } from '../../store/action'
import { CarouselSlidesModel } from '../../store/types'
import CarouselExample from './CarouselExample'
import processStandardError from '../../utils/processError'

const CarouselContainer = () => {
  const carouselSlides: CarouselSlidesModel[] | undefined = useSelector(getCarouselSlides)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!carouselSlides) {
      slidesAPI
        .getSlides()
        .then((data) => {
          if (data.data) {
            dispatch(setCarouselSlides(data.data))
          }
        })
        .catch((error) => {
          processStandardError(error)
        })
    }
  }, [carouselSlides, dispatch])
  return carouselSlides ? <CarouselExample carouselSlides={carouselSlides} /> : null
}

export default CarouselContainer

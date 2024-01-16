import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import slidesAPI from '../../api/slidesApi'
import { setSlides } from './slidesSlice'
import { CarouselSlidesIF } from '../../types/slides'
import CarouselExample from './CarouselExample'
import processStandardError from '../../utils/processError'
import { resetAlert } from '../common/Alert/alertSlice'

const CarouselContainer = () => {
  const slides: CarouselSlidesIF[] | undefined = useSelector(
    (state: RootState) => state.slides.slides
  )
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(resetAlert())
    if (!slides?.length) {
      slidesAPI
        .getSlides()
        .then((data) => {
          if (data.data) {
            dispatch(setSlides(data.data))
          }
        })
        .catch((error) => {
          processStandardError(error)
        })
    }
  }, [slides, dispatch])
  return Object.keys(slides) ? <CarouselExample slides={slides} /> : null
}

export default CarouselContainer

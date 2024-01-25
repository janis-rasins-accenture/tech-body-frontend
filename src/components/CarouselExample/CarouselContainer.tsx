import React from 'react'
import { RootState } from '../../store/store'
import { CarouselSlidesIF } from '../../types/slides'
import CarouselExample from './CarouselExample'
import { resetAlert } from '../common/Alert/alertSlice'
import { getSlides } from '../../store/actions/slidesActions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const CarouselContainer = () => {
  const dispatch = useAppDispatch()
  const slides: CarouselSlidesIF[] | undefined = useAppSelector(
    (state: RootState) => state.slides.slides
  )

  React.useEffect(() => {
    dispatch(resetAlert())
    if (!slides.length) {
      dispatch(getSlides())
    }
  }, [slides, dispatch])
  return slides ? <CarouselExample slides={slides} /> : null
}

export default CarouselContainer

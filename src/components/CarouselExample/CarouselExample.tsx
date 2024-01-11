import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItemExample from '../CarouselItemExample/CarouselItemExample'
import { CustomCarouselProps } from './models'

const CarouseExample = (props: CustomCarouselProps): JSX.Element => {
  const itemRender = (): JSX.Element[] => {
    return props.slides?.map((item, index) => {
      return (
        <Carousel.Item key={`custom-carousel-${index.toString()}`}>
          <CarouselItemExample item={item} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }

  return props.slides?.length ? <Carousel>{itemRender()}</Carousel> : <></>
}

export default CarouseExample

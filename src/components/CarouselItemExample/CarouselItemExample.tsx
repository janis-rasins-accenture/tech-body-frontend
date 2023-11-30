import React from 'react'
import ImageComponent from 'react-bootstrap/Image'
import { CarouselItemExampleProps } from '../CarouselExample/models'

const CarouselItemExample = (props: CarouselItemExampleProps): JSX.Element => {
  const { link, title } = props.item

  return (
    <div>
      <ImageComponent src={link} alt={title} fluid className="w-100" />
    </div>
  )
}

export default CarouselItemExample

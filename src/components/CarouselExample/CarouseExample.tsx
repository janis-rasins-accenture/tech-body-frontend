import React from 'react'
import { CustomCarouselProps } from './models'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItemExample from '../CarouselItemExample/CarouselItemExample'

const CarouseExample = (props: CustomCarouselProps): JSX.Element => {
  //   const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  const itemRender = (): JSX.Element[] => {
    return props.images.map((item, index) => {
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

  return <Carousel>{itemRender()}</Carousel>
}

export default CarouseExample

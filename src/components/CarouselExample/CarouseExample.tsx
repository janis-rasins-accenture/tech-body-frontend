import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItemExample from '../CarouselItemExample/CarouselItemExample'
import { useSelector } from 'react-redux'
import { getImages } from '../../store/selector'

const CarouseExample = (): JSX.Element => {
  //   const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  const images = useSelector(getImages) ?? []

  const itemRender = (): JSX.Element[] => {
    return images.map((item, index) => {
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

  return images?.length ? <Carousel>{itemRender()}</Carousel> : <></>
}

export default CarouseExample

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItemExample from '../CarouselItemExample/CarouselItemExample'
import { useSelector } from 'react-redux'
import { getCarouselSlides } from '../../store/selector'
import { CustomCarouselProps } from './models'

const CarouseExample = (props: CustomCarouselProps): JSX.Element => {
  //   const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  const carouselSlides = useSelector(getCarouselSlides) ?? []

  const itemRender = (): JSX.Element[] => {
    return props.carouselSlides?.map((item, index) => {
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

  return carouselSlides?.length ? <Carousel>{itemRender()}</Carousel> : <></>
}

export default CarouseExample

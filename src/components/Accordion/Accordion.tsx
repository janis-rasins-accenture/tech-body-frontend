import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { CustomAccordionProps } from './models'

const CustomAccordion = (props: CustomAccordionProps): JSX.Element => {
  const [activeItem, setActiveItem] = React.useState('0')

  const onClickHandler = (event: React.SyntheticEvent) => {
    const newActiveItem = event.currentTarget.parentElement?.dataset.item
    if (newActiveItem && newActiveItem !== activeItem) {
      setActiveItem(newActiveItem)
    }
  }
  const itemRender = (): JSX.Element[] => {
    return props.texts?.map((item, index) => {
      const indexString = index.toString()
      return (
        <Accordion.Item eventKey={indexString} key={`custom-texts-${index.toString()}`}>
          <Accordion.Header onClick={onClickHandler} data-item={`${index.toString()}`}>
            {item.title}
          </Accordion.Header>
          <Accordion.Body>{item.text}</Accordion.Body>
        </Accordion.Item>
      )
    })
  }
  return props.texts?.length ? <Accordion activeKey={activeItem}>{itemRender()}</Accordion> : <></>
}

export default CustomAccordion

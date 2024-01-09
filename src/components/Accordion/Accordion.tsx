import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useSelector } from 'react-redux'
import { getTexts } from '../../store/selector'
import { Text } from '../../types/text'

const CustomAccordion = (): React.JSX.Element | null => {
  const texts: Text[] = useSelector(getTexts)
  const [activeItem, setActiveItem] = React.useState('0')
  React.useEffect(() => {
    if (!texts?.length) {
      return
    }
    for (const index in texts) {
      if (texts[index].isActive) {
        setActiveItem(index)
        break
      }
    }
  }, [texts])
  const onClickHandler = (event: React.SyntheticEvent) => {
    const newActiveItem = event.currentTarget.parentElement?.dataset.item
    if (newActiveItem && newActiveItem !== activeItem) {
      setActiveItem(newActiveItem)
    }
  }
  const itemRender = (): JSX.Element[] => {
    if (!texts?.length) {
      return [<></>]
    }
    const result = texts.map((item, index) => {
      const indexString = index.toString()
      return (
        <Accordion.Item eventKey={indexString} key={`Accordion-${indexString}`}>
          <Accordion.Header onClick={onClickHandler} data-item={indexString}>
            {item.title}
          </Accordion.Header>
          <Accordion.Body>{item.text}</Accordion.Body>
        </Accordion.Item>
      )
    })
    return result
  }
  return texts?.length ? <Accordion activeKey={activeItem}>{itemRender()}</Accordion> : <></>
}

export default CustomAccordion

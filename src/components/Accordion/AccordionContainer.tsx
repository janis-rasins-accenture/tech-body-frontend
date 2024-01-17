import React from 'react'
import Accordion from './Accordion'
import { TextsIF } from '../../types/texts'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const AccordionContainer = () => {
  const texts: TextsIF[] | undefined = useSelector((state: RootState) => state.texts.texts)

  return Object.keys(texts) ? <Accordion texts={texts} /> : null
}

export default AccordionContainer

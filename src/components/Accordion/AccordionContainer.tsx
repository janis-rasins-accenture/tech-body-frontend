import React from 'react'
import Accordion from './Accordion'
import { TextsIF } from '../../types/texts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { resetAlert } from '../common/Alert/alertSlice'

const AccordionContainer = () => {
  const texts: TextsIF[] | undefined = useSelector((state: RootState) => state.texts.texts)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(resetAlert())
  }, [])

  return Object.keys(texts) ? <Accordion texts={texts} /> : null
}

export default AccordionContainer

import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import { Text } from './components/Accordion/models'

const App = (): React.JSX.Element => {
  const texts: Text[] = [
    {
      isActive: false,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      title: 'Title',
    },
    {
      isActive: true,
      text: 'Fuga fugiat doloremque optio pariatur minus repudiandae, necessitatibus laudantium magnam voluptatum, eius saepe possimus harum eos natus eaque voluptate cupiditate?',
      title: 'Second Title',
    },
  ]
  return (
    <div className="container">
      <CustomAccordion texts={texts} />
    </div>
  )
}

export default App

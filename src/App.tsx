import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import { Text } from './components/Accordion/models'
import { ImageModel } from './components/CarouselExample/models'
import CarouseExample from './components/CarouselExample/CarouseExample'
import NavbarExample from './components/NavbarExample/NavbarExample'

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
  ];
  const images: ImageModel[] = [
    {
      title: "Cliff",
      link: "https://images.pexels.com/photos/6136015/pexels-photo-6136015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Forest",
      link: "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Ocean",
      link: "https://images.pexels.com/photos/5359974/pexels-photo-5359974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
  ];
  return (
    <div className="container">
      <NavbarExample />
      <CustomAccordion texts={texts} />
      <CarouseExample images={images}/>
    </div>
  )
}

export default App

import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import CarouseExample from './components/CarouselExample/CarouseExample'
import NavbarExample from './components/NavbarExample/NavbarExample'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import UserContainer from './components/UserCards/UserContainer'

const App = (): React.JSX.Element => {
  return (
    <Container>
      <NavbarExample />
      <Routes>
        <Route path="/" element={<CustomAccordion />} />
        <Route path="/carousel" element={<CarouseExample />} />
        <Route path="/users" element={<UserContainer />} />
      </Routes>
    </Container>
  )
}

export default App

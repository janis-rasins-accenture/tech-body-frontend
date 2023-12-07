import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import CarouselContainer from './components/CarouselExample/CarouselContainer'
import NavbarExample from './components/NavbarExample/NavbarExample'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import UserContainer from './components/UserCards/UserContainer'

const App = (): React.JSX.Element => {
  return (
    <Container>
      <NavbarExample />
      <Routes>
        <Route path="/" />
        <Route path="/carousel" element={<CarouselContainer />} />
        <Route path="/users" element={<UserContainer />} />
        <Route path="/accordion" element={<CustomAccordion />} />
      </Routes>
    </Container>
  )
}

export default App

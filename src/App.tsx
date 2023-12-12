import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import CarouselContainer from './components/CarouselExample/CarouselContainer'
import NavbarExample from './components/NavbarExample/NavbarExample'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import UserContainer from './components/UserCards/UserContainer'
import FormsContainer from './components/Forms/FormsContainer'

const App = (): React.JSX.Element => {
  return (
    <Container>
      <NavbarExample />
      <Routes>
        <Route path="/" />
        <Route path="/carousel" element={<CarouselContainer />} />
        <Route path="/users" element={<UserContainer />} />
        <Route path="/accordion" element={<CustomAccordion />} />
        <Route path="/forms" element={<FormsContainer />} />
      </Routes>
    </Container>
  )
}

export default App

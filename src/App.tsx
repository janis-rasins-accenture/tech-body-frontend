import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import CarouselContainer from './components/CarouselExample/CarouselContainer'
import Navbar from './components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import UserContainer from './components/UserCards/UserContainer'
import FormsContainer from './components/Forms/FormsContainer'
import FormLogin from './components/FormLogin/FormLogin'

const App = (): React.JSX.Element => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarouselContainer />} />
        <Route path="/users" element={<UserContainer />} />
        <Route path="/faq" element={<CustomAccordion />} />
        <Route path="/registration" element={<FormsContainer />} />
        <Route path="/login" element={<FormLogin />} />
      </Routes>
    </Container>
  )
}

export default App

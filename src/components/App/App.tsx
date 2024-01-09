import React from 'react'
import CustomAccordion from '../Accordion/Accordion'
import CarouselContainer from '../CarouselExample/CarouselContainer'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import UserContainer from '../UserCards/UserContainer'
import FormsContainer from '../Forms/FormsContainer'
import LoginContainer from '../Login/LoginContainer'
import ProfileContainer from '../Profile/ProfileContainer'
import LogoutContainer from '../Logout/LogoutContainer'
import NavbarContainer from '../Navbar/NavbarContainer'

const App = (): React.JSX.Element => {
  return (
    <Container>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<CarouselContainer />} />
        <Route path="/users" element={<UserContainer />} />
        <Route path="/faq" element={<CustomAccordion />} />
        <Route path="/registration" element={<FormsContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/logout" element={<LogoutContainer />} />
      </Routes>
    </Container>
  )
}

export default App

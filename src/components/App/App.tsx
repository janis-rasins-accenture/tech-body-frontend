import React from 'react'
import AccordionContainer from '../Accordion/AccordionContainer'
import CarouselContainer from '../CarouselExample/CarouselContainer'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import UserContainer from '../UserCards/UserContainer'
import CreateNewUserContainer from '../CreateUser/CreateNewUserContainer'
import LoginContainer from '../Login/LoginContainer'
import ProfileContainer from '../Profile/ProfileContainer'
import LogoutContainer from '../Logout/LogoutContainer'
import NavbarContainer from '../Navbar/NavbarContainer'
import AlertContainer from '../common/Alert/AlertContainer'
import PostsContainer from '../Posts/PostsContainer'

const App = (): React.JSX.Element => {
  return (
    <Container>
      <NavbarContainer />
      <AlertContainer />
      <Routes>
        <Route path="/" element={<CarouselContainer />} />
        <Route path="/users" element={<UserContainer />} />
        <Route path="/faq" element={<AccordionContainer />} />
        <Route path="/registration" element={<CreateNewUserContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/posts" element={<PostsContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/logout" element={<LogoutContainer />} />
      </Routes>
    </Container>
  )
}

export default App

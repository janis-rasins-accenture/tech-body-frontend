import React from 'react'
import AccordionContainer from '../Accordion/AccordionContainer'
import CarouselContainer from '../CarouselExample/CarouselContainer'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import UsersContainer from '../UserCards/UsersContainer'
import CreateNewUserContainer from '../CreateUser/CreateNewUserContainer'
import LoginContainer from '../Login/LoginContainer'
import LogoutContainer from '../Logout/LogoutContainer'
import NavbarContainer from '../Navbar/NavbarContainer'
import AlertContainer from '../common/Alert/AlertContainer'
import PostsContainer from '../Posts/PostsContainer'
import TargetProfileContainer from '../TargetProfile/TargetProfileContainer'
import NotMatch from '../common/NotMatch/NotMatch'
import CurrentProfileWrapperContainer from '../CurrentProfile/CurrentProfileWrapperContainer'

const App = () => {
  return (
    <Container>
      <NavbarContainer />
      <AlertContainer />
      <Routes>
        <Route path="/" element={<CarouselContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/faq" element={<AccordionContainer />} />
        <Route path="/registration" element={<CreateNewUserContainer />} />
        <Route
          path="/users/:userName"
          // loader={async ({ params }) => {
          //   return fetch(`/fake/api/teams/${params.userName}.json`)
          // }}
          errorElement={<NotMatch />}
          element={<TargetProfileContainer />}
        />
        <Route path="/profile" element={<CurrentProfileWrapperContainer />} />
        <Route path="/posts" element={<PostsContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/logout" element={<LogoutContainer />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Container>
  )
}

export default App

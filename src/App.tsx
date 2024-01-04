import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import CarouselContainer from './components/CarouselExample/CarouselContainer'
import Navbar from './components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'
import { Route, Routes, Navigate } from 'react-router-dom'
import UserContainer from './components/UserCards/UserContainer'
import FormsContainer from './components/Forms/FormsContainer'
import FormLogin from './components/FormLogin/FormLogin'
import AccountContainer from './components/AccountContainer/AccountContainer'
import { UserIF, LoginStatusIF } from './store/types'
import { getLogedInUser, getLoggedInStatus } from './store/selector'
import { useSelector } from 'react-redux'
//import Account from './components/Account/Account'

const App = (): React.JSX.Element => {
  const loggedInStatus: LoginStatusIF | undefined = useSelector(getLoggedInStatus)
  const userLogedIn: UserIF | undefined = useSelector(getLogedInUser)

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarouselContainer />} />
        <Route
          path="/users"
          element={loggedInStatus.loggedInStatus ? <UserContainer /> : <Navigate to="/" />}
        />
        <Route path="/faq" element={<CustomAccordion />} />
        <Route
          path="/registration"
          element={!loggedInStatus.loggedInStatus ? <FormsContainer /> : <Navigate to="/" />}
        />
        <Route
          path="/account"
          element={
            loggedInStatus.loggedInStatus && userLogedIn ? (
              <AccountContainer />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={!loggedInStatus.loggedInStatus ? <FormLogin /> : <Navigate to="/" />}
        />
      </Routes>
    </Container>
  )
}

export default App

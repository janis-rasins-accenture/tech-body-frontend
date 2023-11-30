import React from 'react'
import CustomAccordion from './components/Accordion/Accordion'
import CarouseExample from './components/CarouselExample/CarouseExample'
import NavbarExample from './components/NavbarExample/NavbarExample'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUsers } from './store/selector'
import UserCards from './components/UserCards/UserCards'

const App = (): React.JSX.Element => {
  const users = useSelector(getUsers)
  console.log('users: ', users)

  return (
    <Container>
      <NavbarExample />
      <Routes>
        <Route path="/" element={<CustomAccordion />} />
        <Route path="/carousel" element={<CarouseExample />} />
        <Route path="/users" element={<UserCards users={users} />} />
      </Routes>
    </Container>
  )
}

export default App

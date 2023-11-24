import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/ACN.svg'

const NavbarExample = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />{' '}
          <p></p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarExample

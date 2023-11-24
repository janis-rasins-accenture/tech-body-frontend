import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/ACN.svg'
import { Link } from 'react-router-dom'

const NavbarExample = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />{' '}
            </Link>
            <Link to="/carousel">Carousel</Link>
            <Link to="/accordion">Accordion</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarExample

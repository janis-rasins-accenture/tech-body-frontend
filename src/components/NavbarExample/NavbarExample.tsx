import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/ACN.svg'
import { Link } from 'react-router-dom'

const NavbarExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />{' '}
            </Link>
            <Link to="/carousel" className="nav-link">
              Carousel
            </Link>
            <Link to="/accordion" className="nav-link">
              Accordion
            </Link>
            <Link to="/users" className="nav-link">
              Users
            </Link>
            <Link to="/forms" className="nav-link">
              Forms
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarExample

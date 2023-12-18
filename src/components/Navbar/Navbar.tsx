import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootstrapNavbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/ACN.svg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <BootstrapNavbar.Toggle aria-controls="basic-BootstrapNavbar-nav" />
        <BootstrapNavbar.Collapse id="basic-BootstrapNavbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Link to="/" className="nav-link">
              <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />{' '}
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Link to="/registration" className="nav-link">
              Registration
            </Link>
            <Link to="/login" className="nav-link">
              <Button variant="primary">Login</Button>{' '}
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar

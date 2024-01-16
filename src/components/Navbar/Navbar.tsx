import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootstrapNavbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/ACN.svg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { UserIF } from '../../types/users'
import LogoutContainer from '../Logout/LogoutContainer'

const Navbar = ({ user }: { user: UserIF }) => {
  const isLoggedIn = Object.keys(user).length
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
            {isLoggedIn ? (
              <Link to="/users" className="nav-link">
                Users
              </Link>
            ) : null}
            {isLoggedIn ? (
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            ) : null}
          </Nav>
          <Nav className="d-flex align-items-center">
            {!isLoggedIn ? (
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            ) : null}
            {isLoggedIn ? (
              <Link to="/profile" className="nav-link">
                Hello, {user.firstName} {user.lastName}
              </Link>
            ) : null}
            {!isLoggedIn ? (
              <Link to="/login" className="nav-link">
                <Button variant="primary">Login</Button>{' '}
              </Link>
            ) : null}
            {isLoggedIn ? <LogoutContainer /> : null}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar

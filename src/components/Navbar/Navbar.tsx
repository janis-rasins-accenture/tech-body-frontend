import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootstrapNavbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/ACN.svg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import LogoutButton from '../LogoutButton/LogoutButton'
import { LoginStatusIF, UserIF } from '../../store/types'
import { useSelector } from 'react-redux'
import { getLoggedInStatus, getLogedInUser } from '../../store/selector'

const Navbar = () => {
  const loggedInStatus: LoginStatusIF | undefined = useSelector(getLoggedInStatus)
  const userLogedIn: UserIF | undefined = useSelector(getLogedInUser)

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
            {loggedInStatus.loggedInStatus ? (
              <Link to="/users" className="nav-link">
                Users
              </Link>
            ) : null}
          </Nav>
          <Nav className="d-flex align-items-center">
            {!loggedInStatus.loggedInStatus ? (
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            ) : null}
            {loggedInStatus.loggedInStatus && userLogedIn ? (
              <Link to="/account" className="nav-link">
                Hello, {userLogedIn.firstName} {userLogedIn.lastName}
              </Link>
            ) : null}
            {!loggedInStatus.loggedInStatus ? (
              <Link to="/login" className="nav-link">
                <Button variant="primary">Login</Button>{' '}
              </Link>
            ) : null}
            {loggedInStatus.loggedInStatus ? <LogoutButton /> : null}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar

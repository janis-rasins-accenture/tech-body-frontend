import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Navbar from './Navbar'

const NavbarContainer = () => {
  const user = useSelector((state: RootState) => state.profile.profile)
  return <Navbar user={user} />
}

export default NavbarContainer

import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { UserIF } from '../../types/users'

function withAuthRedirect(WrappedComponent: React.ComponentType) {
  const RedirectComponent: React.FC = () => {
    const user: UserIF | undefined = useSelector((state: RootState) => state.profile.profile)
    const location = useLocation()
    return Object.keys(user).length ? (
      <WrappedComponent />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace={true} />
    )
  }

  return RedirectComponent
}

export default withAuthRedirect

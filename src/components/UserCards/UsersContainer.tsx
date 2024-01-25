import React from 'react'
import { useSelector } from 'react-redux'
import UserCards from './UserCards'
import { RootState } from '../../store/store'
import { UserIF } from '../../types/users'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { getUsers } from '../../store/actions/usersAction'
import { useAppDispatch } from '../../store/hooks'

const UsersContainer = () => {
  const users: UserIF[] = useSelector((state: RootState) => state.users.users)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!users?.length) {
      dispatch(getUsers())
    }
  }, [users, dispatch])
  return users.length ? <UserCards users={users} /> : null
}

export default compose(withAuthRedirect)(UsersContainer)

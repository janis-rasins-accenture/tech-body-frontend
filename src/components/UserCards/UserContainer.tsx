import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCards from './UserCards'
import { RootState } from '../../store/store'
import { UserIF } from '../../types/users'
import usersAPI from '../../api/usersApi'
import { setUsers } from './usersSlice'
import { ResponseIF } from '../../api/models'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'

const UserContainer = () => {
  const users: UserIF[] = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!users?.length) {
      usersAPI
        .getUsers()
        .then((data) => {
          if (data.data) {
            dispatch(setUsers(data.data))
          }
        })
        .catch((error: ResponseIF<undefined>) => {
          console.log('Fetch users error: ', error)
        })
    }
  }, [users, dispatch])
  return users.length ? <UserCards users={users} /> : null
}

export default compose(withAuthRedirect)(UserContainer)

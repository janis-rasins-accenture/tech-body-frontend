import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCards from './UserCards'
import { RootState } from '../../store/store'
import { UserIF } from '../../types/users'
import usersAPI from '../../api/usersApi'
import { setUsers } from './usersSlice'
import { ResponseIF } from '../../api/models'
import { useNavigate } from 'react-router-dom'

const UserContainer = () => {
  const users: UserIF[] | undefined = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
        .finally(() => {
          navigate('/')
        })
    }
  }, [users, dispatch])
  return Object.keys(users) ? <UserCards users={users} /> : null
}

export default UserContainer

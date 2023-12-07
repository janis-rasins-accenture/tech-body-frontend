import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/selector'
import { fetchUsers } from '../../api/usersApi'
import { setUsers } from '../../store/action'
import { UserIF } from '../../store/types'
import UserCards from './UserCards'
import processStandardError from '../../utils/processError'

const UserContainer = () => {
  const users: UserIF[] | undefined = useSelector(getUsers)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!users?.length) {
      fetchUsers()
        .then((data) => {
          dispatch(setUsers(data.data))
        })
        .catch((error) => {
          processStandardError(error)
        })
    }
  }, [users, dispatch])
  return users?.length ? <UserCards users={users} /> : null
}

export default UserContainer

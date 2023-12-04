import React from 'react'
import { useSelector } from 'react-redux'
import { getUsers } from '../../store/selector'
import { fetchUsers } from '../../api/usersApi'
import { setUsers } from '../../store/action'
import { UserIF } from '../../store/types'
import UserCards from './UserCards'

const UserContainer = () => {
  const users: UserIF[] | undefined = useSelector(getUsers)
  React.useEffect(() => {
    if (!users?.length) {
      fetchUsers().then((data) => {
        setUsers(data.data)
      })
    }
  }, [users])
  return users?.length ? <UserCards users={users} /> : null
}

export default UserContainer

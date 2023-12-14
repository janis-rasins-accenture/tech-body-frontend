import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { getUsers } from '../../store/selector'
import { fetchUsers } from '../../api/usersApi'
import { setUsers } from '../../store/action'
import { RootState, UserIF } from '../../store/types'
import UserCards from './UserCards'
import processStandardError from '../../utils/processError'

const UserContainer = ({ users }: { users: UserIF[] | undefined }) => {
  console.log('Render users!')
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log('Users: ', !users?.length)
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

const mapStateToProps = (state: RootState) => ({
  users: getUsers(state),
})

export default connect(mapStateToProps, {})(UserContainer)

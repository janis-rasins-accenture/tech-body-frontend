import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setLoading } from '../../components/common/Loader/loaderSlice'
import { ResponseIF } from '../../api/models'
import usersAPI from '../../api/usersApi'
import { setUsers } from '../slices/usersSlice'

export const getUsers = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(setLoading(true))
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
      dispatch(setLoading(false))
    })
}

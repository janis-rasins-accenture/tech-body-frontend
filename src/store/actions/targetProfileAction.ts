import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setLoading } from '../../components/common/Loader/loaderSlice'
import usersAPI from '../../api/usersApi'
import { ResponseIF } from '../../api/models'
import { setAlert } from '../../components/common/Alert/alertSlice'
import { AlertEnum } from '../../components/common/Alert/models'
import { setTargetProfile } from '../slices/targetProfileSlice'

export const getProfile = (userName: string) => (dispatch: Dispatch<AnyAction>) => {
  dispatch(setLoading(true))
  usersAPI
    .getTargetProfile(userName)
    .then((response) => {
      if (response.data) {
        dispatch(setTargetProfile(response.data))
      }
    })
    .catch((error: ResponseIF<undefined>) => {
      console.log('Get user error: ', error)
      dispatch(setAlert({ message: error.message, variant: AlertEnum.DANGER }))
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
}

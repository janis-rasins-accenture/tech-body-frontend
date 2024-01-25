import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { UserIF } from '../../types/users'
import authAPI from '../../api/authApi'
import { setExpireTimestamp, setProfile } from '../../store/slices/currentProfileSlice'
import { setLoading } from '../common/Loader/loaderSlice'

function withAuthRedirect(WrappedComponent: React.ComponentType) {
  const RedirectComponent: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user: UserIF = useSelector((state: RootState) => state.currentProfile.currentProfile)

    React.useEffect(() => {
      if (user.userId) {
        return
      }
      dispatch(setLoading(true))
      authAPI
        .isAuth()
        .then((response) => {
          if (!response.data) {
            return
          }
          dispatch(setProfile(response.data.user))
          dispatch(setExpireTimestamp(response.data.expireTimestamp))
        })
        .catch(() => {
          navigate('/login')
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }, [user.userId, dispatch, navigate])
    return <WrappedComponent />
  }

  return RedirectComponent
}

export default withAuthRedirect

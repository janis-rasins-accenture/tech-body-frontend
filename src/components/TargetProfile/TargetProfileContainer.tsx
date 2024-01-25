import React from 'react'
import TargetProfile from './TargetProfile'
import { UserIF } from '../../types/users'
import { RootState } from '../../store/store'
import { compose } from '@reduxjs/toolkit'
import withAuthRedirect from '../hoc/withAuthRedirect'
import TargetPostsContainer from '../TargetPosts/TargetPostsContainer'
import { useParams } from 'react-router-dom'
import { getProfile } from '../../store/actions/targetProfileAction'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const TargetProfileContainer = () => {
  const { userName } = useParams()
  const dispatch = useAppDispatch()
  const targetProfile: UserIF = useAppSelector(
    (state: RootState) => state.targetProfile.targetProfile
  )

  React.useEffect(() => {
    if (!userName) {
      return
    }
    dispatch(getProfile(userName))
  }, [userName, dispatch])

  return targetProfile.userId ? (
    <>
      <TargetProfile targetProfile={targetProfile} />
      <TargetPostsContainer />
    </>
  ) : null
}

export default compose(withAuthRedirect)(TargetProfileContainer)

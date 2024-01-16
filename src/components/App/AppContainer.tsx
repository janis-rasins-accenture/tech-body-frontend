import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../common/Loader/Loader'
import { RootState } from '../../store/store'
import App from './App'

const AppContainer = (): React.JSX.Element => {
  const isLoading = useSelector((state: RootState) => state.isLoading.state)

  return (
    <>
      {isLoading ? <Loader /> : null}
      <App />
    </>
  )
}

export default AppContainer

import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setLoading } from '../../components/common/Loader/loaderSlice'
import slidesAPI from '../../api/slidesApi'
import { setSlides } from '../slices/slidesSlice'
import processStandardError from '../../utils/processError'

export const getSlides = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(setLoading(true))
  slidesAPI
    .getSlides()
    .then((data) => {
      if (data.data) {
        dispatch(setSlides(data.data))
      }
    })
    .catch((error) => {
      processStandardError(error)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
}

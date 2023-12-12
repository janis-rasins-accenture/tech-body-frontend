import { BasicUserIF } from '../store/types'
import { FetchOptionsIF } from './models'

const FETCH_OPTIONS: FetchOptionsIF = {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'include', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: '',
}
export const API_URL = 'http://localhost:4000'
export const STAGE = 'local'

export const getData = () => {
  const fetchOptions = { ...FETCH_OPTIONS, method: 'GET' }
  delete fetchOptions.body
  return fetchOptions
}

export const processError = (error: any) => {
  if (error.message) {
    throw new Error(error.message)
  }
  throw new Error(JSON.stringify(error))
}

export const createData = (userData: BasicUserIF) => {
  console.log('createData()', userData)
  const fetchOptions = { ...FETCH_OPTIONS, method: 'POST', body: JSON.stringify(userData) }
  return fetchOptions
}

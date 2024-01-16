import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AlertEnum, AlertStateIF } from './models'

const initialState: AlertStateIF = {
  message: '',
  variant: AlertEnum.PRIMARY,
  isVisible: false,
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<Omit<AlertStateIF, 'isVisible'>>) => {
      return {
        message: action.payload.message,
        variant: action.payload.variant,
        isVisible: true,
      }
    },
    resetAlert: () => initialState,
  },
})

export const { setAlert, resetAlert } = alertSlice.actions

export default alertSlice.reducer

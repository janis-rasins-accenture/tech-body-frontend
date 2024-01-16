export enum AlertEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  DARK = 'dark',
  LIGHT = 'light',
}

export interface AlertStateIF {
  message: string
  variant: AlertEnum
  isVisible: boolean
}

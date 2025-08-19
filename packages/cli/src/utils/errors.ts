export const PandaConfigNotFound = (message: string) => ({
  _tag: 'PandaConfigNotFound' as const,
  message,
})

export const PandaConfigInvalid = {
  _tag: 'PandaConfigInvalid',
} as const

export const ParkUIConfigNotFound = {
  _tag: 'ParkUIConfigNotFound',
} as const

export const ParkUIConfigInvalid = {
  _tag: 'ParkUIConfigNotFound',
} as const

export const RegistryItemNotFound = {
  _tag: 'RegistryItemNotFound',
} as const

export const HttpError = {
  _tag: 'HttpError',
} as const

export const PandaConfigNotFound = (configPath: string) => ({
  _tag: 'PandaConfigNotFound' as const,
  message: `No Panda CSS configuration found at ${configPath}\nInstall Panda CSS then try again.`,
})

export const PandaConfigInvalid = {
  _tag: 'PandaConfigInvalid',
} as const

export const ParkUIConfigNotFound = (configPath: string) => ({
  _tag: 'ParkUIConfigNotFound' as const,
  message: `No Park UI configuration found at ${configPath}\nRun npx @park-ui/cli init to create a new configuration.`,
})

export const ParkUIConfigInvalid = (configPath: string) => ({
  _tag: 'ParkUIConfigNotFound' as const,
  message: `Park UI configuration at ${configPath} is invalid or outdated.\nRun npx @park-ui/cli init to create a new configuration.`,
})

export const RegistryItemNotFound = {
  _tag: 'RegistryItemNotFound',
} as const

export const HttpError = {
  _tag: 'HttpError',
} as const

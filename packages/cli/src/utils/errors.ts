export const PandaConfigNotFound = (configPath: string) => ({
  _tag: 'PandaConfigNotFound' as const,
  message: `No Panda CSS configuration found at ${configPath}\nInstall Panda CSS then try again.`,
})

export const PandaConfigInvalid = (configPath: string) => ({
  _tag: 'PandaConfigInvalid' as const,
  message: `Failed to update your Panda config at ${configPath}.\nPlease review your configuration file`,
})

export const ParkUIConfigNotFound = (configPath: string) => ({
  _tag: 'ParkUIConfigNotFound' as const,
  message: `No Park UI configuration found at ${configPath}.`,
})

export const ParkUIConfigInvalid = (configPath: string) => ({
  _tag: 'ParkUIConfigInvalid' as const,
  message: `Park UI configuration at ${configPath} is invalid or outdated.`,
})

export const RegistryItemNotFound = {
  _tag: 'RegistryItemNotFound',
} as const

export const HttpError = {
  _tag: 'HttpError',
} as const

export const FileError = (filePath: string) => ({
  _tag: 'FileError' as const,
  message: `Failed to read or write file at ${filePath}`,
})

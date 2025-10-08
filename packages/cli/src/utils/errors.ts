export const PandaConfigNotFound = (configPath: string) => ({
  _tag: 'PandaConfigNotFound' as const,
  message: `No Panda CSS configuration found at ${configPath}\nInstall Panda CSS then try again.`,
})

export const PandaConfigInvalid = (configPath: string) => ({
  _tag: 'PandaConfigInvalid' as const,
  message: `Failed to update your Panda config at ${configPath}.\nPlease review your configuration file`,
})

export const ConfigNotFound = (configPath: string) => ({
  _tag: 'ConfigNotFound' as const,
  message: `No Park UI configuration found at ${configPath}.`,
})

export const ConfigInvalid = (configPath: string) => ({
  _tag: 'ConfigInvalid' as const,
  message: `Park UI configuration at ${configPath} is invalid or outdated.`,
})

export const TSConfigNotFound = (configPath: string) => ({
  _tag: 'TSConfigNotFound' as const,
  message: `No tsconfig.json or jsconfig.json found at ${configPath}.\nPlease create one then try again.`,
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

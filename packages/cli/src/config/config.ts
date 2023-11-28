import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { packageDirectorySync } from 'pkg-dir'
import { ParkUiConfiguration } from '../../schema'

export type Config = ParkUiConfiguration

export const CONFIG_FILE_NAME = 'park-ui.json'
const getProjectRoot = () => {
  return packageDirectorySync()
}
let cachedConfig: Config | null = null
let cachedConfigPath: string | null = null

export const getConfigPath = (): string => {
  if (cachedConfigPath) {
    return cachedConfigPath
  }
  const root = getProjectRoot()
  if (!root) {
    throw new Error('Could not find project root.')
  }
  cachedConfigPath = resolve(root, CONFIG_FILE_NAME)
  return cachedConfigPath
}

export const getConfig = (): Config => {
  if (cachedConfig) {
    return cachedConfig
  }
  const configPath = getConfigPath()
  try {
    const config = readFileSync(configPath, 'utf8')
    cachedConfig = JSON.parse(config)
    if (!cachedConfig) {
      throw new Error('Could not parse config file.')
    }
    return cachedConfig
  } catch (e) {
    throw new Error(`Could not find config file at ${configPath}.\nPlease run init first.`)
  }
}

export const writeConfig = (config: Config): void => {
  const configPath = getConfigPath()
  writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8')
  cachedConfig = config
}

export const getCssFramework = (): Config['cssFramework'] => {
  const config = getConfig()
  return config.cssFramework
}

export const getJsFramework = (): Config['jsFramework'] => {
  const config = getConfig()
  return config.jsFramework
}

export const getImportAliases = (): { componentsImportAlias: string; utilsImportAlias: string } => {
  const config = getConfig()
  const { components, utils } = config.importAliases
  return { componentsImportAlias: components, utilsImportAlias: utils }
}

export const getUseReactServerComponents = (): boolean => {
  const config = getConfig()
  if (config.jsFramework !== 'React') {
    throw new Error('React server components are only supported with React framework.')
  }

  // @ts-expect-error ts(2339) - the field is only available for react and is not generated from json2ts
  return config.useReactServerComponents
}

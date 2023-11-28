import { readFileSync, writeFile } from 'fs'
import { packageDirectory } from 'pkg-dir'
import { ParkUiConfiguration } from '../../schema'

export type Config = ParkUiConfiguration

export const CONFIG_FILE_NAME = 'park-ui.json'

const getProjectRoot = async () => {
  return await packageDirectory()
}

export const getConfigPath = async () => {
  const root = await getProjectRoot()
  return `${root}/${CONFIG_FILE_NAME}`
}

export const getConfig = async (): Promise<Config> => {
  const configPath = await getConfigPath()
  try {
    const config = readFileSync(configPath, 'utf8')
    return JSON.parse(config)
  } catch (e) {
    throw new Error(`Could not find config file at ${configPath}.\nPlease run init first.`)
  }
}

export const writeConfig = async (config: Config) => {
  writeFile(await getConfigPath(), JSON.stringify(config, null, 2), (err) => {
    if (err) throw err
  })
}

export const getCssFramework = async () => {
  const config = await getConfig()
  return config.cssFramework
}

export const getJsFramework = async () => {
  const config = await getConfig()
  return config.jsFramework
}

export const getImportAliases = async () => {
  const config = await getConfig()
  const { components, utils } = config.importAliases
  return { componentsImportAlias: components, utilsImportAlias: utils }
}

export const getUseReactServerComponents = async (): Promise<boolean> => {
  const config = await getConfig()
  if (config.jsFramework !== 'React') {
    throw new Error('React server components are only supported with React framework.')
  }

  // @ts-expect-error ts(2339) - the field is only available for react and is not generated from json2ts
  return config.useReactServerComponents
}

import { readFileSync, writeFile } from 'fs'
import { FromSchema } from 'json-schema-to-ts'
// import jsonSchema from './schema.json'
import { packageDirectory } from 'pkg-dir'

const configSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'park-ui Configuration',
  type: 'object',
  properties: {
    cssFramework: {
      type: 'string',
      enum: ['panda', 'tailwind'],
      description: 'The CSS framework to use.',
    },
    jsFramework: {
      type: 'string',
      enum: ['React', 'Solid', 'Vue'],
      description: 'The JavaScript framework to use.',
    },
    importAliases: {
      type: 'object',
      properties: {
        components: {
          type: 'string',
          pattern: '^~/',
          description: 'The import alias for components.',
        },
        utils: {
          type: 'string',
          pattern: '^~/',
          description: 'The import alias for utilities.',
        },
      },
      additionalProperties: false,
      description: 'Configuration for import aliases.',
    },
  },
  additionalProperties: false,
  required: ['cssFramework', 'jsFramework', 'importAliases'],
  if: {
    properties: {
      jsFramework: {
        const: 'React',
      },
    },
    required: ['jsFramework'],
  },
  then: {
    properties: {
      useReactServerComponents: {
        type: 'boolean',
        description: 'Whether React Server Components are being used.',
      },
    },
    required: ['useReactServerComponents'],
  },
} as const // use asConst from json-schema-to-ts

export type Config = FromSchema<typeof configSchema>

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

export const getUseReactServerComponents = async () => {
  const config = await getConfig()
  if (config.jsFramework !== 'React') {
    throw new Error('React Server Components are only available for React projects.')
  }
  // @ts-expect-error ts(2339) - typeguard needed, because useReactServerComponents only exists for react
  return config.useReactServerComponents
}

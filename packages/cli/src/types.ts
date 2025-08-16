type RegistryItemType = 'block' | 'component' | 'recipe' | 'item'

interface RegistryFile {
  /** The path to the file relative to the registry root */
  path: string

  /** The content of the file */
  content?: string

  /** The type of the file. This is used to determine the type of the file when resolved for a project */
  type: RegistryItemType
}

interface PandaConfig {
  theme?: Record<string, string>
}

interface PandaConfiguration {
  config?: PandaConfig
}

export interface RegistryItem {
  /** The id of the item. This is used to identify the item in the registry. It should be unique for your registry */
  id: string

  /** The type of the item. This is used to determine the type and target path of the item when resolved for a project */
  type: RegistryItemType

  /** The description of the item. This is used to provide a brief overview of the item */
  description?: string

  /** The human-readable name for your registry item. Keep it short and descriptive */
  name?: string

  /** An array of NPM dependencies required by the registry item */
  dependencies?: string[]

  /** An array of NPM dev dependencies required by the registry item */
  devDependencies?: string[]

  /** An array of registry items that this item depends on. Use the id of the item to reference components and urls to reference other registries */
  registryDependencies?: string[]

  /** The main payload of the registry item. This is an array of files that are part of the registry item */
  files?: RegistryFile[]

  /** The panda configuration for the registry item. This is an object with a config property. */
  panda?: PandaConfiguration

  /** The categories of the registry item. This is an array of strings */
  categories?: string[]
}

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ParkUiConfiguration {
  $schema?: string

  /**
   * The CSS framework to use.
   */
  cssFramework: 'panda' | 'tailwind'
  /**
   * The JavaScript framework to use.
   */
  jsFramework: 'React' | 'Solid' | 'Vue'
  /**
   * Configuration for import aliases.
   */
  importAliases: {
    /**
     * The import alias for components.
     */
    components: string
    /**
     * The import alias for utilities.
     */
    utils: string
  },

  /**
   * Configuration for location of the tsconfig.json file.
   */
  tsConfig?: {
    /**
     * The search path for the tsconfig.json file.
     */
    searchPath?: string,

    /*
     * The name of the tsconfig.json file.
     */
    configName?: string
  }
}

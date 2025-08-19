import { join } from 'node:path'
import { Effect, pipe, Schema } from 'effect'
import { outputJSON, readJSON } from 'fs-extra'
import { packageDirectory } from 'pkg-dir'
import type { ParkUIConfig } from '~/schema'
import { FileError, ParkUIConfigInvalid, ParkUIConfigNotFound } from './errors'

export const createParkUIConfig = (config: ParkUIConfig) =>
  getConfigPath().pipe(Effect.flatMap((configPath) => saveConfigFile({ config, configPath })))

export const getParkUIConfig = () =>
  pipe(
    getConfigPath(),
    Effect.flatMap((configPath) =>
      pipe(
        Effect.tryPromise({
          try: () => readJSON(configPath),
          catch: () => ParkUIConfigNotFound(configPath),
        }),
        Effect.flatMap((config) => Schema.decodeUnknown(ConfigSchema)(config)),
        Effect.catchTag('ParseError', () => Effect.fail(ParkUIConfigInvalid(configPath))),
      ),
    ),
  )

const getConfigPath = () =>
  pipe(
    Effect.promise(() => packageDirectory()),
    Effect.flatMap(Effect.fromNullable),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.map((packageDir) => join(packageDir, 'park-ui.json')),
  )

interface CreateConfigArgs {
  configPath: string
  config: ParkUIConfig
}

const saveConfigFile = ({ config, configPath }: CreateConfigArgs) =>
  Effect.tryPromise({
    try: () =>
      outputJSON(
        configPath,
        {
          $schema: 'https://next.park-ui.com/schema/park-ui-config.json',
          ...config,
        },
        { spaces: 2 },
      ),
    catch: () => FileError(configPath),
  })

const ConfigSchema = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
  paths: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
  }),
})

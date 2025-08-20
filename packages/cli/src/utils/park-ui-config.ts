import { join } from 'node:path'
import * as p from '@clack/prompts'
import { Context, Effect, Layer, pipe, Schema } from 'effect'
import { outputJSON, readJSON } from 'fs-extra'
import { packageDirectory } from 'pkg-dir'
import { FileError, ParkUIConfigInvalid, ParkUIConfigNotFound } from './errors'

const ConfigSchema = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
  paths: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
  }),
})

type Config = Schema.Schema.Type<typeof ConfigSchema>

const loadConfig = () =>
  getConfigPath().pipe(
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

export const ParkUIConfig = Context.GenericTag<Config>('ParkUIConfig')
const ConfigLayer = Layer.effect(ParkUIConfig, loadConfig())

export const withParkUIConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
  effect.pipe(
    Effect.provide(ConfigLayer),
    Effect.catchTag('ParkUIConfigInvalid', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Run npx @park-ui/cli init to create a new configuration.`)
      }),
    ),
    Effect.catchTag('ParkUIConfigNotFound', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Run npx @park-ui/cli init to create a new configuration.`)
      }),
    ),
  )

export const createParkUIConfig = (config: Config) =>
  getConfigPath().pipe(
    Effect.flatMap((configPath) =>
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
      }),
    ),
  )

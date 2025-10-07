import { join } from 'node:path'
import * as p from '@clack/prompts'
import { Context, Effect, Layer, pipe, Schema } from 'effect'
import { outputJSON, readJSON } from 'fs-extra'
import { packageDirectory } from 'package-directory'
import type { Framework } from '~/schema'
import { FileError, ParkUIConfigInvalid, ParkUIConfigNotFound } from './errors'

const ConfigSchema = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
  aliases: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
    hooks: Schema.String,
    lib: Schema.String,
    ui: Schema.String,
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
    Effect.map((packageDir) => join(packageDir, 'components.json')),
  )

export const ParkUIConfig = Context.GenericTag<Config>('ParkUIConfig')
const ConfigLayer = Layer.effect(ParkUIConfig, loadConfig())

export const withParkUIConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
  effect.pipe(
    Effect.provide(ConfigLayer),
    Effect.catchAll(({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Run npx @park-ui/cli init to create a new configuration.`)
      }),
    ),
  )

export const saveConfig = (framework: Framework) =>
  getConfigPath().pipe(
    Effect.flatMap((configPath) => {
      const config = {
        $schema: 'https://next.park-ui.com/schema/components.json',
        framework,
        aliases: {
          components: '@/components',
          hooks: '@/hooks',
          lib: '@/lib',
          theme: '@/theme',
          ui: '@/components/ui',
        },
      }
      return Effect.tryPromise({
        try: () => outputJSON(configPath, config, { spaces: 2 }),
        catch: () => FileError(configPath),
      }).pipe(Effect.map(() => config))
    }),
  )

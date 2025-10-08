import path, { join } from 'node:path'
import * as p from '@clack/prompts'
import { cosmiconfig } from 'cosmiconfig'
import { Context, Effect, Layer, pipe, Schema } from 'effect'
import { outputJSON, readJSON } from 'fs-extra'
import { type ConfigLoaderSuccessResult, loadConfig } from 'tsconfig-paths'
import type { Framework } from '~/schema'
import { ConfigInvalid, ConfigNotFound, FileError, TSConfigNotFound } from './errors'
import { PandaConfig } from './panda-config'
import { resolveImport } from './resolve-import'

const ConfigSchema = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
  panda: Schema.Struct({
    config: Schema.String,
  }),
  aliases: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
    hooks: Schema.String,
    lib: Schema.String,
    ui: Schema.String,
  }),
})

export const ConfigSchemaWithResolvedPaths = (tsConfig: ConfigLoaderSuccessResult) =>
  ConfigSchema.pipe(
    Schema.transformOrFail(
      Schema.Struct({
        framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
        panda: Schema.Struct({
          config: Schema.String,
        }),
        aliases: Schema.Struct({
          components: Schema.String,
          theme: Schema.String,
          hooks: Schema.String,
          lib: Schema.String,
          ui: Schema.String,
        }),
        resolvedPaths: Schema.Struct({
          components: Schema.String,
          theme: Schema.String,
          hooks: Schema.String,
          lib: Schema.String,
          ui: Schema.String,
          pandaConfig: Schema.String,
        }),
      }),
      {
        decode: (config) =>
          Effect.promise(async () => {
            const cwd = process.cwd()
            const componentsPath = (await resolveImport(config.aliases.components, tsConfig)) ?? cwd

            return {
              ...config,
              resolvedPaths: {
                components: componentsPath,
                ui: config.aliases.ui
                  ? ((await resolveImport(config.aliases.ui, tsConfig)) ??
                    path.resolve(componentsPath, 'ui'))
                  : path.resolve(componentsPath, 'ui'),
                hooks: config.aliases.hooks
                  ? ((await resolveImport(config.aliases.hooks, tsConfig)) ??
                    path.resolve(componentsPath, '..', 'hooks'))
                  : path.resolve(componentsPath, '..', 'hooks'),
                theme: config.aliases.theme
                  ? ((await resolveImport(config.aliases.theme, tsConfig)) ??
                    path.resolve(componentsPath, '..', 'theme'))
                  : path.resolve(componentsPath, '..', 'theme'),
                lib: config.aliases.lib
                  ? ((await resolveImport(config.aliases.lib, tsConfig)) ??
                    path.resolve(componentsPath, '..'))
                  : path.resolve(componentsPath, '..'),
                pandaConfig: path.resolve(cwd, config.panda.config),
              },
            }
          }),
        encode: (config) => Effect.succeed(config),
      },
    ),
  )

type Config = Schema.Schema.Type<ReturnType<typeof ConfigSchemaWithResolvedPaths>>

const getConfig = () =>
  getConfigPath().pipe(
    Effect.flatMap((configPath) =>
      pipe(
        Effect.all([
          Effect.tryPromise({
            try: () => readJSON(configPath),
            catch: () => ConfigNotFound(configPath),
          }),
          Effect.succeed(loadConfig(process.cwd())).pipe(
            Effect.filterOrFail(
              (result): result is Extract<typeof result, { resultType: 'success' }> =>
                result.resultType !== 'failed',
              () => TSConfigNotFound(process.cwd()),
            ),
          ),
        ]),
        Effect.flatMap(([config, tsConfig]) =>
          Schema.decodeUnknown(ConfigSchemaWithResolvedPaths(tsConfig))(config).pipe(
            Effect.mapError(() => ConfigInvalid(configPath)),
          ),
        ),
      ),
    ),
  )

const explorer = cosmiconfig('components', {
  searchPlaces: ['components.json'],
})

const getConfigPath = () =>
  pipe(
    Effect.promise(() => explorer.search(process.cwd())),
    Effect.flatMap(Effect.fromNullable),
    Effect.map((result) => result.filepath),
    Effect.catchTag('NoSuchElementException', () =>
      Effect.succeed(join(process.cwd(), 'components.json')),
    ),
  )

export const Config = Context.GenericTag<Config>('Config')
const ConfigLayer = Layer.effect(Config, getConfig())

export const withConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
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
  Effect.all([
    PandaConfig.pipe(
      Effect.map((pandaConfig) => ({
        $schema: 'https://next.park-ui.com/schema/components.json',
        framework,
        panda: {
          config: path.relative(process.cwd(), pandaConfig.path),
        },
        aliases: {
          components: '@/components',
          hooks: '@/hooks',
          lib: '@/lib',
          theme: '@/theme',
          ui: '@/components/ui',
        },
      })),
    ),
    getConfigPath(),
  ]).pipe(
    Effect.flatMap(([config, configPath]) =>
      Effect.tryPromise({
        try: () => outputJSON(configPath, config, { spaces: 2 }),
        catch: () => FileError(configPath),
      }).pipe(Effect.map(() => config)),
    ),
  )

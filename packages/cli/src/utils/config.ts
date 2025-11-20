import path, { join } from 'node:path'
import * as p from '@clack/prompts'
import { cosmiconfig } from 'cosmiconfig'
import { Context, Effect, Layer, pipe, Schema } from 'effect'
// @ts-expect-error
import { outputJSON, readJSON } from 'fs-extra/esm'
import { createMatchPath } from 'tsconfig-paths'
import type { Framework } from '~/schema'
import { ConfigInvalid, ConfigNotFound, FileError } from './errors'
import { PandaConfig } from './panda-config'
import { TSConfig } from './tsconfig'

const BaseConfigSchema = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
  panda: Schema.Struct({
    config: Schema.String,
  }),
  aliases: Schema.Struct({
    components: Schema.String,
    hooks: Schema.String,
    lib: Schema.String,
    recipes: Schema.String,
    theme: Schema.String,
    ui: Schema.String,
  }),
})

export const ConigSchema = BaseConfigSchema.pipe(
  Schema.transformOrFail(
    Schema.Struct({
      framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
      panda: Schema.Struct({
        config: Schema.String,
      }),
      aliases: Schema.Struct({
        components: Schema.String,
        hooks: Schema.String,
        lib: Schema.String,
        recipes: Schema.String,
        theme: Schema.String,
        ui: Schema.String,
      }),
      resolvedPaths: Schema.Struct({
        components: Schema.String,
        hooks: Schema.String,
        lib: Schema.String,
        recipes: Schema.String,
        theme: Schema.String,
        ui: Schema.String,
      }),
    }),
    {
      decode: (config) =>
        TSConfig.pipe(
          Effect.flatMap((tsConfig) =>
            pipe(
              Effect.promise(() => resolveImport(config.aliases.components, tsConfig)),
              Effect.map((componentsPath) => componentsPath ?? process.cwd()),
              Effect.flatMap((componentsPath) =>
                pipe(
                  Effect.all({
                    ui: config.aliases.ui
                      ? Effect.promise(() => resolveImport(config.aliases.ui, tsConfig))
                      : Effect.succeed(null),
                    hooks: config.aliases.hooks
                      ? Effect.promise(() => resolveImport(config.aliases.hooks, tsConfig))
                      : Effect.succeed(null),
                    lib: config.aliases.lib
                      ? Effect.promise(() => resolveImport(config.aliases.lib, tsConfig))
                      : Effect.succeed(null),
                    recipes: config.aliases.recipes
                      ? Effect.promise(() => resolveImport(config.aliases.recipes, tsConfig))
                      : Effect.succeed(null),
                    theme: config.aliases.theme
                      ? Effect.promise(() => resolveImport(config.aliases.theme, tsConfig))
                      : Effect.succeed(null),
                  }),
                  Effect.map((resolved) => ({
                    ...config,
                    resolvedPaths: {
                      components: componentsPath,
                      hooks: resolved.hooks ?? path.resolve(componentsPath, '..', 'hooks'),
                      lib: resolved.lib ?? path.resolve(componentsPath, '..'),
                      recipes:
                        resolved.recipes ?? path.resolve(componentsPath, '..', 'theme', 'recipes'),
                      theme: resolved.theme ?? path.resolve(componentsPath, '..', 'theme'),
                      ui: resolved.ui ?? path.resolve(componentsPath, 'ui'),
                    },
                  })),
                ),
              ),
            ),
          ),
        ),
      encode: (config) => Effect.succeed(config),
    },
  ),
)

type Config = Schema.Schema.Type<typeof ConigSchema>

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

const getConfig = () =>
  getConfigPath().pipe(
    Effect.flatMap((configPath) =>
      pipe(
        Effect.tryPromise({
          try: () => readJSON(configPath),
          catch: () => ConfigNotFound(configPath),
        }),
        Effect.flatMap((config) =>
          Schema.decodeUnknown(ConigSchema)(config).pipe(
            Effect.mapError(() => ConfigInvalid(configPath)),
          ),
        ),
      ),
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
    pipe(
      Effect.all([PandaConfig, TSConfig]),
      Effect.map(([pandaConfig, { aliasPrefix }]) => ({
        $schema: 'https://park-ui.com/schema/components.json',
        framework,
        panda: {
          config: path.relative(process.cwd(), pandaConfig.path),
        },
        aliases: {
          components: `${aliasPrefix}/components`,
          hooks: `${aliasPrefix}/hooks`,
          lib: `${aliasPrefix}/lib`,
          recipes: `${aliasPrefix}/theme/recipes`,
          theme: `${aliasPrefix}/theme`,
          ui: `${aliasPrefix}/components/ui`,
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

const resolveImport = async (importPath: string, tsConfig: TSConfig) =>
  createMatchPath(tsConfig.baseUrl, tsConfig.paths)(importPath, undefined, () => true, [
    '.ts',
    '.tsx',
    '.jsx',
    '.js',
    '.css',
  ])

import * as p from '@clack/prompts'
import { cosmiconfig } from 'cosmiconfig'
import { Context, Effect, Layer, pipe, Schema } from 'effect'
import { loadFile, writeFile } from 'magicast'
import { deepMergeObject } from 'magicast/helpers'
import { PandaConfigNotFound } from './errors'

const ConfigSchema = Schema.Struct({
  path: Schema.String,
})

type ConfigSchema = Schema.Schema.Type<typeof ConfigSchema>

const explorer = cosmiconfig('panda', {
  searchPlaces: ['panda.config.ts'],
})

const getConfigPath = () =>
  pipe(
    Effect.promise(() => explorer.search(process.cwd())),
    Effect.flatMap(Effect.fromNullable),
    Effect.map((result) => ({ path: result.filepath })),
    Effect.mapError(() => PandaConfigNotFound(process.cwd())),
  )

export const PandaConfig = Context.GenericTag<ConfigSchema>('PandaConfig')
const ConfigLayer = Layer.effect(PandaConfig, getConfigPath())

export const withPandaConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
  effect.pipe(
    Effect.provide(ConfigLayer),
    Effect.catchTag('PandaConfigNotFound', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Visit https://panda-css.com/docs/overview/getting-started to get started.`)
      }),
    ),
  )

interface UpdatePandaConfigOptions {
  extension: Record<string, unknown>
}

export const updatePandaConfig = ({ extension }: UpdatePandaConfigOptions) =>
  PandaConfig.pipe(
    Effect.flatMap((config) =>
      Effect.promise(() => loadFile(config.path)).pipe(
        Effect.map((mod) => {
          const options =
            mod.exports['default'].$type === 'function-call'
              ? mod.exports['default'].$args[0]
              : mod.exports['default']

          deepMergeObject(options, extension)
          return mod
        }),
        Effect.flatMap((mod) => Effect.promise(() => writeFile(mod, config.path))),
      ),
    ),
  )

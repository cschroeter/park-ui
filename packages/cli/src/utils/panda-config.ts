import { join } from 'node:path'
import * as p from '@clack/prompts'
import { cosmiconfig } from 'cosmiconfig'
import { Context, Effect, Layer, pipe, Schema } from 'effect'
import { builders, loadFile, writeFile } from 'magicast'
import { deepMergeObject } from 'magicast/helpers'
import type { JsonValue, RegistryItemImport } from '~/schema'
import { Config } from './config'
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
  extension?: JsonValue
  imports?: RegistryItemImport[]
}

export const updatePandaConfig = ({ extension, imports = [] }: UpdatePandaConfigOptions = {}) =>
  Effect.all([PandaConfig, Config]).pipe(
    Effect.flatMap(([pandaConfig, { aliases }]) =>
      Effect.promise(() => loadFile(pandaConfig.path)).pipe(
        Effect.map((mod) => {
          const options =
            mod.exports['default'].$type === 'function-call'
              ? mod.exports['default'].$args[0]
              : mod.exports['default']

          deepMergeObject(options, replaceRefs(extension))

          for (const item of imports) {
            if (['registry:theme', 'registry:color', 'registry:recipe'].includes(item.type)) {
              mod.imports.$prepend({
                from: join(aliases.theme, item.from),
                local: item.name,
                imported: item.name,
              })
            }
          }

          return mod
        }),
        Effect.flatMap((mod) => Effect.promise(() => writeFile(mod, pandaConfig.path))),
      ),
    ),
  )

export const replaceRefs = <T>(obj: T): T => {
  if (typeof obj === 'string' && obj.startsWith('$ref:')) {
    return builders.raw(obj.slice(5)) as T
  }

  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      obj[key] = replaceRefs(obj[key])
    }
  }

  return obj
}

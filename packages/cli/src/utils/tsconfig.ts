import * as p from '@clack/prompts'
import { Context, Effect, Layer } from 'effect'
import { type ConfigLoaderResult, type ConfigLoaderSuccessResult, loadConfig } from 'tsconfig-paths'
import { TSConfigNotFound } from './errors'

const getConfig = Effect.succeed(loadConfig(process.cwd())).pipe(
  Effect.filterOrFail(
    (result): result is Extract<ConfigLoaderResult, { resultType: 'success' }> =>
      result.resultType !== 'failed',
    () => TSConfigNotFound(process.cwd()),
  ),
)

export const TSConfig = Context.GenericTag<ConfigLoaderSuccessResult>('TSConfig')
const ConfigLayer = Layer.effect(TSConfig, getConfig)

export const withTSConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
  effect.pipe(
    Effect.provide(ConfigLayer),
    Effect.catchTag('TSConfigNotFound', () =>
      Effect.sync(() => {
        p.log.error('No import alias found in your tsconfig.json file.')
        p.outro(
          'Visit https://next.park-ui.com/docs/installation to learn how to set an import alias.',
        )
      }),
    ),
  )

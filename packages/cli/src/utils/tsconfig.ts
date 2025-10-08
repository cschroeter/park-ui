import * as p from '@clack/prompts'
import { Context, Effect, Layer } from 'effect'
import { type ConfigLoaderResult, type ConfigLoaderSuccessResult, loadConfig } from 'tsconfig-paths'
import { TSConfigInvalid, TSConfigNotFound } from './errors'

interface TSConfig extends ConfigLoaderSuccessResult {
  aliasPrefix: string
}

const getConfig = Effect.succeed(loadConfig(process.cwd())).pipe(
  Effect.filterOrFail(
    (result): result is Extract<ConfigLoaderResult, { resultType: 'success' }> =>
      result.resultType !== 'failed',
    () => TSConfigNotFound(process.cwd()),
  ),
  Effect.flatMap((config) =>
    Effect.fromNullable(getTsConfigAliasPrefix(config)).pipe(
      Effect.mapError(() => TSConfigInvalid()),
      Effect.map((aliasPrefix) => ({ ...config, aliasPrefix })),
    ),
  ),
)

export const TSConfig = Context.GenericTag<TSConfig>('TSConfig')
const ConfigLayer = Layer.effect(TSConfig, getConfig)

export const withTSConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
  effect.pipe(
    Effect.provide(ConfigLayer),
    Effect.catchAll(({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro('Visit https://next.park-ui.com/docs/installation to learn how to get started.')
      }),
    ),
  )

const getTsConfigAliasPrefix = (tsConfig: ConfigLoaderSuccessResult) => {
  for (const [alias, paths] of Object.entries(tsConfig.paths)) {
    if (
      paths.includes('./*') ||
      paths.includes('./src/*') ||
      paths.includes('./app/*') ||
      paths.includes('./resources/js/*')
    ) {
      return alias.replace(/\/\*$/, '') ?? null
    }
  }

  return Object.keys(tsConfig?.paths)?.[0].replace(/\/\*$/, '') ?? null
}

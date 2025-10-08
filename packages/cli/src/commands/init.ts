import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, Layer, Schema } from 'effect'
import color from 'picocolors'
import { loadConfig } from 'tsconfig-paths'
import { Config, ConfigSchemaWithResolvedPaths, saveConfig } from '~/utils/config'
import { TSConfigNotFound } from '~/utils/errors'
import { install } from '~/utils/install'
import { withPandaConfig } from '~/utils/panda-config'
import { promptInitConfig } from '~/utils/prompt'
import { fetchRegistryThemeItems } from '~/utils/registry-client'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const program = promptInitConfig().pipe(
    Effect.flatMap(({ framework, accentColor, grayColor }) =>
      Effect.all([
        saveConfig(framework),
        fetchRegistryThemeItems(['__init', accentColor, grayColor]),
        Effect.succeed(loadConfig(process.cwd())).pipe(
          Effect.filterOrFail(
            (result): result is Extract<typeof result, { resultType: 'success' }> =>
              result.resultType !== 'failed',
            () => TSConfigNotFound(process.cwd()),
          ),
        ),
      ]),
    ),
    Effect.flatMap(([config, items, tsConfig]) =>
      Schema.decodeUnknown(ConfigSchemaWithResolvedPaths(tsConfig))(config).pipe(
        Effect.flatMap((resolvedConfig) =>
          Effect.all(items.map((item) => install(item))).pipe(
            Effect.provide(Layer.effect(Config, Effect.succeed(resolvedConfig))),
          ),
        ),
      ),
    ),
    Effect.tap(() => p.outro(`Park UI has been initialized successfully! 🎉`)),
    Effect.catchAll(() =>
      Effect.sync(() => {
        p.log.error('An error occurred while initializing Park UI.')
        p.outro(
          `You can report this issue at: ${color.underline(color.cyan('https://github.com/cschroeter/park-ui/issues'))}`,
        )
      }),
    ),
  )

  await Effect.runPromise(withPandaConfig(program))
})

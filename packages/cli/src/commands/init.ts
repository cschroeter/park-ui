import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, Layer, Schema } from 'effect'
import color from 'picocolors'
import { Config, ConigSchema, saveConfig } from '~/utils/config'
import { install } from '~/utils/install'
import { withPandaConfig } from '~/utils/panda-config'
import { promptInitConfig } from '~/utils/prompt'
import { fetchRegistryThemeItems } from '~/utils/registry-client'
import { withTSConfig } from '~/utils/tsconfig'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const program = promptInitConfig().pipe(
    Effect.flatMap(({ framework, accentColor, grayColor }) =>
      Effect.all([
        saveConfig(framework),
        // updatePandaConfig(borderRadius),
        fetchRegistryThemeItems(['__init', accentColor, grayColor]),
      ]),
    ),
    Effect.flatMap(([config, items]) =>
      Schema.decodeUnknown(ConigSchema)(config).pipe(
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

  await Effect.runPromise(withTSConfig(withPandaConfig(program)))
})

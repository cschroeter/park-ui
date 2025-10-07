import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, Layer } from 'effect'
import color from 'picocolors'
import { install } from '~/utils/install'
import { withPandaConfig } from '~/utils/panda-config'
import { ParkUIConfig, saveConfig } from '~/utils/park-ui-config'
import { promptInitConfig } from '~/utils/prompt'
import { fetchRegistryThemeItems } from '~/utils/registry-client'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const program = promptInitConfig().pipe(
    Effect.flatMap(({ framework, accentColor, grayColor }) =>
      Effect.all([
        saveConfig(framework),
        fetchRegistryThemeItems(['__init', accentColor, grayColor]),
      ]),
    ),
    Effect.flatMap(([config, items]) =>
      Effect.all(items.map((item) => install(item))).pipe(
        Effect.provide(Layer.effect(ParkUIConfig, Effect.succeed(config))),
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

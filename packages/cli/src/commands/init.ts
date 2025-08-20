import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, Layer } from 'effect'
import color from 'picocolors'
import { withPandaConfig } from '~/utils/panda-config'
import { createParkUIConfig, ParkUIConfig } from '~/utils/park-ui-config'
import { promptInitConfig } from '~/utils/prompt'
import { initTheme } from '~/utils/theme'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const program = promptInitConfig().pipe(
    Effect.flatMap(({ config, colors }) =>
      Effect.all([
        createParkUIConfig(config),
        initTheme(colors).pipe(Effect.provide(Layer.effect(ParkUIConfig, Effect.succeed(config)))),
      ]),
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

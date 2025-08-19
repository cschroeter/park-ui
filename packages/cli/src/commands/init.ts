import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, pipe } from 'effect'
import color from 'picocolors'
import { verifyPandaConfig } from '~/utils/panda'
import { createParkUIConfig } from '~/utils/park-ui'
import { promptInitConfig } from '~/utils/prompt'
import { createThemeConfig } from '~/utils/theme'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const program = Effect.all([
    verifyPandaConfig(),
    pipe(
      promptInitConfig(),
      Effect.flatMap(({ config, colors }) =>
        Effect.all([createParkUIConfig(config), createThemeConfig(colors)]),
      ),
    ),
  ]).pipe(
    Effect.tap(() => p.outro(`Park UI has been initialized successfully! 🎉`)),
    Effect.catchTag('FileError', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Please check the file permissions or path and try again.`)
      }),
    ),
    Effect.catchTag('PandaConfigNotFound', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Visit https://panda-css.com/docs/overview/getting-started to get started.`)
      }),
    ),
  )

  await Effect.runPromise(program)
})

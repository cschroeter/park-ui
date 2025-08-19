import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect } from 'effect'
import color from 'picocolors'
import { verifyPandaConfig } from '~/utils/panda'
import { createParkUIConfig } from '~/utils/park-ui'
import { promptInitConfig } from '~/utils/prompt'
import { createThemeConfig } from '~/utils/theme'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const programm = Effect.all([
    verifyPandaConfig(),
    promptInitConfig().pipe(
      Effect.flatMap((config) => Effect.all([createParkUIConfig(), createThemeConfig()])),
    ),
  ]).pipe(
    Effect.tap(() => p.outro(`Park UI has been initialized successfully! 🎉`)),
    Effect.tapErrorTag('PandaConfigNotFound', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Visit https://panda-css.com/docs/overview/getting-started to get started.`)
      }),
    ),
  )

  await Effect.runPromise(programm).catch(() => process.exit(1))
})

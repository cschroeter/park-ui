import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect } from 'effect'
import color from 'picocolors'
import { getPandaConfigPath } from '~/utils/panda'
import { createConfig, getParkUIConfigPath } from '~/utils/park-ui'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const programm = Effect.all([
    getPandaConfigPath(),
    getParkUIConfigPath().pipe(
      Effect.flatMap(createConfig),
      Effect.tap(() => p.outro(`Park UI has been initialized successfully! 🎉`)),
    ),
  ]).pipe(
    Effect.tapErrorTag('PandaConfigNotFound', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Visit https://panda-css.com/docs/overview/getting-started to get started.`)
      }),
    ),
  )

  await Effect.runPromise(programm).catch(() => process.exit(1))
})

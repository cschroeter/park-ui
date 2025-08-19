import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect } from 'effect'
import color from 'picocolors'
import { createConfig, getConfigPath } from '~/utils/park-ui'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const programm = getConfigPath().pipe(
    Effect.flatMap(createConfig),
    Effect.tap(() => p.outro(`Park UI has been initialized successfully! 🎉`)),
    Effect.tapError((error) =>
      Effect.sync(() => {
        p.note(error, 'Error')
        p.outro('You can report this issue at: https://github.com/cschroeter/park-ui/issues')
      }),
    ),
  )

  await Effect.runPromise(programm).catch(() => process.exit(1))
})

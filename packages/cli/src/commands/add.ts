import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, pipe } from 'effect'
import color from 'picocolors'
import { fetchComponents } from '~/utils/components'
import { withPandaConfig } from '~/utils/panda-config'
import { withParkUIConfig } from '~/utils/park-ui-config'
import { install } from '~/utils/registry-item'

export const add = new Command('add')
  .description('add components to your project')
  .argument('[components...]', 'list of components to add')
  .option('--all', 'add all components', false)
  .action(async (components, opts) => {
    console.clear()

    p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

    // const spinner = p.spinner()
    // spinner.start()

    const program = fetchComponents(components, opts).pipe(
      Effect.flatMap((components) =>
        Effect.forEach(components, (component) => {
          p.log.info(`Installing component: ${color.cyan(component.id)}`)
          // spinner.message(`Installing component: ${color.cyan(component.id)}`)
          return pipe(install(component))
        }),
      ),
      Effect.tap(() => {
        // spinner.stop()
        p.outro('Happy Hacking 🤞')
      }),
      Effect.catchAll(() =>
        Effect.sync(() => {
          p.log.error('An unexpected error occurred while installing components.')
          p.outro(
            `You can report this issue at: ${color.underline(color.cyan('https://github.com/cschroeter/park-ui/issues'))})`,
          )
        }),
      ),
    )
    await Effect.runPromise(withPandaConfig(withParkUIConfig(program)))
  })

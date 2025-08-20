import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect } from 'effect'
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
    p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

    const program = fetchComponents(components, opts).pipe(
      Effect.flatMap((components) => {
        p.note(`Installing ${components.length} components...`, 'Info')
        return Effect.forEach(components, (component) => install(component))
      }),
      Effect.tap(() => p.outro('Components installed. Happy Hacking 🤞')),
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

import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, pipe } from 'effect'
import color from 'picocolors'
import { withConfig } from '~/utils/config'
import { install } from '~/utils/install'
import { withPandaConfig } from '~/utils/panda-config'
import { fetchRegistryIndex, fetchRegistryItems } from '~/utils/registry-client'

export const add = new Command('add')
  .description('add components to your project')
  .argument('[components...]', 'list of components to add')
  .option('--all', 'add all components', false)
  .action(async (components, opts) => {
    p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

    const program = pipe(
      opts.all
        ? fetchRegistryIndex().pipe(
            Effect.map((items) => items.filter((item) => item.type === 'registry:ui')),
            Effect.map((items) => items.map((item) => item.name)),
          )
        : Effect.succeed(components),
      Effect.tap((items) => p.note(`Installing ${items.length} components...`, 'Info')),
      Effect.flatMap((ids) => fetchRegistryItems({ ids })),
      Effect.flatMap((items) => Effect.forEach(items, (item) => install(item))),
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
    await Effect.runPromise(withPandaConfig(withConfig(program)))
  })

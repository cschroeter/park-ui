import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, pipe } from 'effect'
import color from 'picocolors'
import { installRegistryItem } from '../utils/install'
import { getParkUIConfig } from '../utils/park-ui'
import { registry } from '../utils/registry'

export const add = new Command('add')
  .description('add components to your project')
  .argument('[components...]', 'list of components to add')
  .option('--all', 'add all components', false)
  .action(async (components: string[], opts) => {
    console.clear()
    p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

    if (components.length === 0 && !opts.all) {
      p.note('You need to specify at least one component or use the --all flag', 'Error')
      p.outro(`Run ${color.cyan('npx @park-ui/cli --help')} for more information`)
      return
    }

    const spinner = p.spinner()
    spinner.start()

    const programm = getParkUIConfig().pipe(
      Effect.flatMap((ctx) =>
        pipe(
          Effect.if(opts.all, {
            onTrue: () => registry.getComponentIds({ framework: ctx.framework }),
            onFalse: () => Effect.succeed(components),
          }),
          Effect.flatMap((components) =>
            Effect.forEach(components, (id) => {
              spinner.message(`Installing component: ${color.cyan(id)}`)
              return pipe(
                registry.getComponent({ framework: ctx.framework, id }),
                Effect.tap(() => spinner.message(`Installing component: ${color.cyan(id)}`)),
                Effect.flatMap((item) => installRegistryItem({ item, ctx })),
                Effect.catchTag('RegistryItemNotFound', () => {
                  p.log.error(`Component "${id}" not found in the registry`)
                  return Effect.succeed(undefined)
                }),
                Effect.catchTag('HttpError', () => {
                  p.log.error(`Failed to fetch component "${id}" due to a server error`)
                  return Effect.succeed(undefined)
                }),
              )
            }),
          ),
        ),
      ),
      Effect.tapErrorTag('ParkUIConfigNotFound', ({ message }) =>
        Effect.sync(() => {
          p.log.error(message)
          p.outro(`Run npx @park-ui/cli init to create a new configuration.`)
        }),
      ),
      Effect.tapErrorTag('PandaConfigInvalid', ({ message }) =>
        Effect.sync(() => {
          p.log.error(message)
          p.outro(
            `If you believe this is a mistake, open an issue at https://github.com/cschroeter/park-ui/issues`,
          )
        }),
      ),
      Effect.tapErrorTag('PandaConfigNotFound', ({ message }) =>
        Effect.sync(() => {
          p.log.error(message)
          p.outro(`Visit https://panda-css.com/docs/overview/getting-started to get started.`)
        }),
      ),
    )

    await Effect.runPromise(programm)
      .then(() => {
        spinner.stop('Components installed.')
        p.outro('Happy Hacking 🤞')
      })
      .catch((error) => {
        spinner.stop('An error occurred')
        p.note(error, 'Error')
        p.outro(
          `You can report this issue at: ${color.underline(color.cyan('https://github.com/cschroeter/park-ui/issues/new'))}`,
        )
      })
  })

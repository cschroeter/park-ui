import * as p from '@clack/prompts'
import { Effect, pipe } from 'effect'
import color from 'picocolors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { installRegistryItem } from './install'
import { getParkUIConfig } from './park-ui'
import { registry } from './registry'

const main = async () => {
  await yargs(hideBin(process.argv))
    .command(
      'components add [components..]',
      'Add components to your project',
      (yargs) => {
        return yargs
          .positional('components', {
            describe: 'List of components to add',
            type: 'string',
            array: true,
            default: [],
          })
          .option('all', {
            type: 'boolean',
            description: 'Add all components',
            default: false,
          })
      },
      async (argv) => {
        console.clear()
        p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

        if (argv.components.length === 0 && !argv.all) {
          p.note('You need to specify at least one component or use the --all flag', 'Error')
          p.outro(`Run ${color.cyan('npx @park-ui/cli --help')} for more information`)
          return
        }

        const spinner = p.spinner()
        spinner.start()

        const programm = getParkUIConfig().pipe(
          Effect.flatMap((ctx) =>
            pipe(
              Effect.if(argv.all, {
                onTrue: () => registry.getComponentIds({ framework: ctx.framework }),
                onFalse: () => Effect.succeed(argv.components),
              }),
              Effect.flatMap((components) =>
                Effect.forEach(components, (id) => {
                  spinner.message(`Installing component: ${color.cyan(id)}`)
                  return pipe(
                    registry.getComponent({ framework: ctx.framework, id }),
                    Effect.tap(() => spinner.message(`Installing component: ${color.cyan(id)}`)),
                    Effect.flatMap((item) => installRegistryItem({ item, ctx })),
                    Effect.catchTag('NotFound', () => {
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
          Effect.catchTag('PandaConfigInvalid', () => {
            p.log.error(
              `Your Panda CSS configuration is invalid.\nPlease review your configuration file.`,
            )
            p.outro(
              `If you believe this is a mistake, open an issue at ${color.underline(color.cyan('https://github.com/cschroeter/park-ui/issues/new'))}`,
            )
            return Effect.succeed(undefined)
          }),
          Effect.catchTag('PandaConfigNotFound', () => {
            p.log.error(
              `No Panda CSS configuration found at /Users/christian/Developer/park-ui/demo/nextjs.\nInstall Panda CSS then try again.`,
            )
            p.outro(`Visit https://panda-css.com/docs/overview/getting-started to get started.`)
            return Effect.succeed(undefined)
          }),
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
      },
    )
    .demandCommand(1, 'You need at least one command before moving on')
    .strict()
    .help().argv
}

main()

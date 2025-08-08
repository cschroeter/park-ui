#!/usr/bin/env node
import path from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import color from 'picocolors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { getComponent } from './client'
import { getConfig } from './get-config'

const isEmpty = (arr: string[]) => arr.length === 0

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
        const spinner = p.spinner()
        p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

        if (isEmpty(argv.components) && !argv.all) {
          p.note('You need to specify at least one component or use the --all flag', 'Error')
          p.outro(`Run ${color.cyan('npx @park-ui/cli --help')} for more information`)
          return
        }

        const components = ['button', 'select', 'avatar']

        const programm = pipe(
          getConfig(),
          Effect.tap(() => spinner.start('Installing components...')),
          Effect.flatMap(({ framework, paths }) =>
            Effect.forEach(components, (id) =>
              pipe(
                Effect.tryPromise({
                  try: () => getComponent({ framework, id }),
                  catch: () => HttpError,
                }),
                Effect.filterOrFail(
                  (result) => 'data' in result && result.data !== null,
                  () => HttpError,
                ),
                Effect.flatMap(({ data: { sourceCode, filename } }) =>
                  Effect.promise(() =>
                    fs.outputFile(path.join(paths.components, filename), sourceCode),
                  ),
                ),
                Effect.catchAll(() => {
                  p.log.error(`Failed to install component: ${id}`)
                  return Effect.succeed(undefined)
                }),
              ),
            ),
          ),
        )

        await Effect.runPromise(programm)
          .then(() => {
            spinner.stop('Components installed.')
            p.outro('Happy Hacking 🤞')
          })
          .catch((error) => {
            spinner.stop('An error occurred')
            p.note(error, 'Error Details')
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

export const HttpError = {
  _tag: 'HttpError',
}

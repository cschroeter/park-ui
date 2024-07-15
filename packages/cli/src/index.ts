#!/usr/bin/env node
import path from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import color from 'picocolors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { fetchComponents, fetchHelpers } from './client'
import { getConfig } from './get-config'
import { getImportAliasPath } from './tsconfig'

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
        p.intro(
          `${color.bgCyan(
            color.black(
              ` Park UI v${
                // biome-ignore lint/complexity/useLiteralKeys: <explanation>
                process.env['npm_package_version']
              }`,
            ),
          )}`,
        )

        if (isEmpty(argv.components) && !argv.all) {
          p.note('You need to specify at least one component or use the --all flag', 'Error')
          p.outro(`Run ${color.cyan('npx @park-ui/cli --help')} for more information`)
          return
        }

        const programm = pipe(
          getConfig(),
          Effect.tap(() => spinner.start('Installing components...')),
          Effect.flatMap((config) =>
            pipe(
              getImportAliasPath(config),
              Effect.flatMap((basePath) =>
                Effect.all([
                  fetchComponents(config, argv),
                  Effect.succeed(
                    path.join(
                      basePath,
                      config.outputPaths.componentsDir.replace(
                        config.importAlias.replace(/\/\*$/, ''),
                        '',
                      ),
                    ),
                  ),
                  Effect.succeed(
                    path.join(
                      basePath,
                      config.outputPaths.libDir.replace(
                        config.importAlias.replace(/\/\*$/, ''),
                        '',
                      ),
                    ),
                  ),
                ]),
              ),
              Effect.flatMap(([components, componentsDir, libDir]) =>
                Effect.all([
                  pipe(
                    Effect.succeed(path.join(componentsDir, 'index.ts')),
                    Effect.flatMap((indexFile) =>
                      pipe(
                        Effect.promise(() => fs.ensureFile(indexFile)),
                        Effect.flatMap(() => Effect.promise(() => fs.readFile(indexFile, 'utf-8'))),
                        Effect.flatMap((content) =>
                          Effect.if(content.includes('./primitives'), {
                            onTrue: () => Effect.succeed(''),
                            onFalse: () =>
                              Effect.promise(() =>
                                fs.appendFile(indexFile, "export * from './primitives'\n"),
                              ),
                          }),
                        ),
                      ),
                    ),
                  ),
                  Effect.forEach(components, (component) =>
                    pipe(
                      Effect.forEach(component.variants, (variant) =>
                        pipe(
                          Effect.all([
                            Effect.promise(() =>
                              fs.outputFile(
                                path.join(componentsDir, variant.file),
                                variant.content
                                  .replaceAll('~/components/ui', config.outputPaths.componentsDir)
                                  .replaceAll('~/lib', config.outputPaths.libDir),
                              ),
                            ),
                            pipe(
                              Effect.succeed(
                                path.join(
                                  path.parse(path.join(componentsDir, variant.file)).dir,
                                  'index.ts',
                                ),
                              ),
                              Effect.flatMap((indexFile) =>
                                pipe(
                                  Effect.promise(() => fs.ensureFile(indexFile)),
                                  Effect.flatMap(() =>
                                    Effect.promise(() => fs.readFile(indexFile, 'utf-8')),
                                  ),
                                  Effect.flatMap((content) =>
                                    Effect.if(content.includes(`./${component.id}`), {
                                      onTrue: () => Effect.succeed(''),
                                      onFalse: () =>
                                        Effect.promise(() =>
                                          fs.appendFile(indexFile, `${variant.exports}\n`),
                                        ),
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          ]),
                        ),
                      ),
                    ),
                  ),
                  pipe(
                    fetchHelpers(config),
                    Effect.flatMap((helpers) =>
                      Effect.forEach(helpers, (helper) =>
                        Effect.promise(() =>
                          fs.outputFile(path.join(libDir, helper.filename), helper.content),
                        ),
                      ),
                    ),
                  ),
                ]),
              ),
            ),
          ),
          Effect.catchAll((error) => Effect.fail(error.message)),
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

import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect } from 'effect'
import color from 'picocolors'
import { generateRegistry } from './generate-registry'
import { generateRegistryFiles } from './generate-registry-files'

export const registry = new Command('registry')
  .description('manage registry files')
  .addCommand(
    new Command('prepare')
      .description('prepare registry.json from component files')
      .requiredOption('--name <name>', 'registry name (e.g., @park-ui/react)')
      .argument('[pattern]', 'glob pattern for component files (e.g., src/components/ui/*.tsx)')
      .action(async (pattern, options) => {
        p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

        const program = Effect.promise(() =>
          generateRegistry({ name: options.name, pattern }),
        ).pipe(
          Effect.tap(() => p.outro('Registry prepared successfully! 🎉')),
          Effect.catchAll((error) =>
            Effect.sync(() => {
              p.log.error(`An error occurred while preparing the registry: ${error}`)
              p.outro(
                `You can report this issue at: ${color.underline(color.cyan('https://github.com/cschroeter/park-ui/issues'))}`,
              )
            }),
          ),
        )

        await Effect.runPromise(program)
      }),
  )
  .addCommand(
    new Command('build')
      .description('build individual registry JSON files from registry.json')
      .argument('[output-dir]', 'output subdirectory within the registry (e.g., react)')
      .action(async (outputDir?: string) => {
        p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

        const program = Effect.promise(() => generateRegistryFiles({ outputDir })).pipe(
          Effect.tap(() => p.outro('Registry files built successfully! 🎉')),
          Effect.catchAll((error) =>
            Effect.sync(() => {
              p.log.error(`An error occurred while building registry files: ${error}`)
              p.outro(
                `You can report this issue at: ${color.underline(color.cyan('https://github.com/cschroeter/park-ui/issues'))}`,
              )
            }),
          ),
        )

        await Effect.runPromise(program)
      }),
  )

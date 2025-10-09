import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect } from 'effect'
import { generateTypes } from './generate-types'

export const typedoc = new Command('typedoc')
  .description('Generate component type documentation from Ark UI and recipe definitions')
  .option('-o, --out <path>', 'Output directory for generated type files')
  .action(async (options: { out?: string }) => {
    const program = Effect.promise(() =>
      generateTypes({
        glob: 'src/components/ui/**/*.{ts,tsx,vue,svelte}',
        dist: options.out ?? process.cwd(),
      }),
    ).pipe(
      Effect.tap(() => p.outro('Component types generated successfully.')),
      Effect.catchAll((error) =>
        Effect.sync(() => {
          p.outro(`An error occurred while generating component types: ${error}`)
        }),
      ),
    )

    await Effect.runPromise(program)
  })

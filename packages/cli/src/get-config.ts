import path from 'node:path'
import * as p from '@clack/prompts'
import { Schema } from '@effect/schema'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { packageDirectorySync } from 'pkg-dir'

const Config = Schema.Struct({
  importAlias: Schema.String,
  jsFramework: Schema.Literal('react', 'solid', 'vue'),
  outputPaths: Schema.Struct({
    componentsDir: Schema.String,
    libDir: Schema.String,
  }),
})
export type Config = Schema.Schema.Type<typeof Config>

export const getConfig = (): Effect.Effect<Config, never, never> =>
  pipe(
    Effect.fromNullable(packageDirectorySync()),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.map((packageDirectory) => path.join(packageDirectory, 'park-ui.json')),
    Effect.flatMap((configFilePath) =>
      pipe(
        Effect.try({
          try: () => fs.readJSONSync(configFilePath),
          catch: () => new FileNotFoundError(),
        }),
        Effect.flatMap((fileContent) => Schema.decodeUnknown(Config)(fileContent)),
        Effect.catchAll(() => {
          p.note(
            'No park-ui.json found or it is outdated in the project. Creating new config file.',
            'Info',
          )
          return pipe(
            Effect.promise(promptConfig),
            Effect.map(({ importAlias, jsFramework, componentsDir, libDir }) => ({
              $schema: 'https://park-ui.com/registry/latest/schema.json',
              importAlias,
              jsFramework,
              outputPaths: {
                componentsDir,
                libDir,
              },
            })),
            Effect.flatMap((config) =>
              pipe(
                Effect.promise(() => fs.outputJSON(configFilePath, config, { spaces: 2 })),
                Effect.map(() => config),
              ),
            ),
          )
        }),
      ),
    ),
  )

class FileNotFoundError {
  readonly _tag = 'FileNotFoundError'
}

interface Prompt {
  jsFramework: 'react' | 'solid' | 'vue'
  importAlias: string
  componentsDir: string
  libDir: string
}

const promptConfig = async () =>
  p.group(
    {
      jsFramework: () =>
        p.select({
          message: 'Which JS framework do you use?',
          options: [
            { value: 'react', label: 'React' },
            { value: 'solid', label: 'Solid' },
            { value: 'vue', label: 'Vue' },
          ],
          initialValue: 'react',
        }),
      importAlias: () =>
        p.text({
          message: 'Would you like to customize the default import alias?',
          initialValue: '~/*',
          validate: (value) => {
            if (!value) return 'Please enter an alias.'
            if (!value.endsWith('/*')) return 'Please enter an alias ending with /*.'
          },
        }),
      componentsDir: ({ results }) => {
        const importAlias = (results.importAlias as string).replace(/\/\*$/, '')
        return p.text({
          message: 'Where would you like to store your components?',
          initialValue: `${importAlias}/components/ui`,
          validate: (value) => {
            if (!value) return 'Please enter a path.'
            if (!value.startsWith(importAlias))
              return 'Please enter a path starting with the alias.'
          },
        })
      },
      libDir: ({ results }) => {
        const importAlias = (results.importAlias as string).replace(/\/\*$/, '')
        return p.text({
          message: 'Where would you like to store your lib?',
          initialValue: `${importAlias}/lib`,
          validate: (value) => {
            if (!value) return 'Please enter a path.'
            if (!value.startsWith(importAlias))
              return 'Please enter a path starting with the alias.'
          },
        })
      },
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.')
        process.exit(0)
      },
    },
  ) as Promise<Prompt>

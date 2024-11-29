import path from 'node:path'
import * as p from '@clack/prompts'
import { Effect, Schema, pipe } from 'effect'
import fs from 'fs-extra'
import { packageDirectorySync } from 'pkg-dir'

const Config = Schema.Struct({
  jsFramework: Schema.Literal('react', 'solid', 'vue'),
  outputPath: Schema.String,
})
export type Config = Schema.Schema.Type<typeof Config>

export const getConfig = (): Effect.Effect<Config, never, never> =>
  pipe(
    Effect.fromNullable(packageDirectorySync()),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.flatMap((packageDirectory) =>
      pipe(
        Effect.succeed(path.join(packageDirectory, 'park-ui.json')),
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
                Effect.map(({ jsFramework, outputPath }) => ({
                  $schema: 'https://park-ui.com/registry/latest/schema.json',
                  jsFramework,
                  outputPath,
                })),
                Effect.flatMap((config) =>
                  pipe(
                    Effect.promise(() => fs.outputJSON(configFilePath, config, { spaces: 2 })),
                    Effect.map(() => ({
                      ...config,
                      outputPath: path.join(packageDirectory, config.outputPath),
                    })),
                  ),
                ),
              )
            }),
          ),
        ),
      ),
    ),
  )

class FileNotFoundError {
  readonly _tag = 'FileNotFoundError'
}

interface Prompt {
  jsFramework: 'react' | 'solid' | 'vue'
  outputPath: string
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
      outputPath: () =>
        p.text({
          message: 'Where would you like to store your components?',
          initialValue: './src/components/ui',
          validate: (value) => {
            if (!value) return 'Please enter a path.'
            if (!value.startsWith('.')) return 'Please enter a relative path to the project root.'
          },
        }),
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.')
        process.exit(0)
      },
    },
  ) as Promise<Prompt>

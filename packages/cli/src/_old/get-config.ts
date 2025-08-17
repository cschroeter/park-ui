import path from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe, Schema } from 'effect'
import fs from 'fs-extra'
import { packageDirectorySync } from 'pkg-dir'

const Config = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'vue'),
  paths: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
  }),
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
                Effect.map(({ framework, components, theme }) => ({
                  $schema: 'https://next.park-ui.com/registry/latest/schema.json',
                  framework,
                  paths: {
                    components,
                    theme,
                  },
                })),
                Effect.flatMap((config) =>
                  pipe(
                    Effect.promise(() => fs.outputJSON(configFilePath, config, { spaces: 2 })),
                    Effect.map(() => ({
                      ...config,
                      paths: {
                        components: path.join(packageDirectory, config.paths.components),
                        theme: path.join(packageDirectory, config.paths.theme),
                      },
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

type Framework = 'react' | 'solid' | 'vue'

interface Prompt {
  framework: Framework
  components: string
  theme: string
}

const promptConfig = async () =>
  p.group(
    {
      framework: () =>
        p.select({
          message: 'Which JS framework do you use?',
          options: [
            { value: 'react', label: 'React' },
            { value: 'solid', label: 'Solid' },
            { value: 'vue', label: 'Vue' },
          ],
          initialValue: 'react',
        }),
      components: () =>
        p.text({
          message: 'Where should components be stored?',
          initialValue: './src/components/ui',
          validate: (value) => {
            if (!value) return 'Please enter a path.'
            if (!value.startsWith('.')) return 'Please enter a relative path from the project root.'
          },
        }),
      theme: () =>
        p.text({
          message: 'Where should theme related files be stored?',
          initialValue: './src/theme',
          validate: (value) => {
            if (!value) return 'Please enter a path.'
            if (!value.startsWith('.')) return 'Please enter a relative path from the project root.'
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

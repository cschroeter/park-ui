import { join, parse } from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe, Schema } from 'effect'
import fs from 'fs-extra'
import { packageDirectory } from 'pkg-dir'
import { ParkUIConfigNotFound } from './error'
import type { Framework } from './schema'

export const getParkUIConfig = () =>
  pipe(
    Effect.promise(() => packageDirectory()),
    Effect.flatMap(Effect.fromNullable),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.map((packageDir) => join(packageDir, 'park-ui.json')),
    Effect.flatMap((configPath) =>
      pipe(
        Effect.tryPromise({
          try: () => fs.readJSONSync(configPath),
          catch: () => ParkUIConfigNotFound,
        }),
        Effect.flatMap((config) => Schema.decodeUnknown(ParkUIConfig)(config)),
        Effect.catchTag('ParseError', () => {
          p.note('Invalid or outdated Park UI config detected.\nCreating new config...', 'Info')
          return createParkUIConfig(configPath)
        }),
        Effect.catchTag('ParkUIConfigNotFound', () => {
          p.note(
            `Park UI config not found at ${parse(configPath).dir}.\nCreating new config...`,
            'Info',
          )
          return createParkUIConfig(configPath)
        }),
      ),
    ),
  )

const createParkUIConfig = (configPath: string) =>
  pipe(
    Effect.promise(promptUser),
    Effect.map(({ framework, components, theme }) => ({
      $schema: 'https://next.park-ui.com/schema/park-ui-config.json',
      framework,
      paths: {
        components,
        theme,
      },
    })),
    Effect.flatMap((config) =>
      pipe(
        Effect.promise(() => fs.outputJSON(configPath, config, { spaces: 2 })),
        Effect.map(() => config),
      ),
    ),
  )

interface Prompt {
  framework: Framework
  components: string
  theme: string
}

const promptUser = async () =>
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

const ParkUIConfig = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'vue'),
  paths: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
  }),
})

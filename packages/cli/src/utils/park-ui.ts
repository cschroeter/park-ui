import { join } from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe, Schema } from 'effect'
import { outputJSON, readJSON } from 'fs-extra'
import { packageDirectory } from 'pkg-dir'
import { ParkUIConfigInvalid, ParkUIConfigNotFound } from './errors'

export const createParkUIConfig = () => getConfigPath().pipe(Effect.flatMap(createConfig))

export const getParkUIConfig = () =>
  pipe(
    getConfigPath(),
    Effect.flatMap((configPath) =>
      pipe(
        Effect.tryPromise({
          try: () => readJSON(configPath),
          catch: () => ParkUIConfigNotFound(configPath),
        }),
        Effect.flatMap((config) => Schema.decodeUnknown(ConfigSchema)(config)),
        Effect.catchTag('ParseError', () => Effect.fail(ParkUIConfigInvalid(configPath))),
      ),
    ),
  )

const getConfigPath = () =>
  pipe(
    Effect.promise(() => packageDirectory()),
    Effect.flatMap(Effect.fromNullable),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.map((packageDir) => join(packageDir, 'park-ui.json')),
  )

const createConfig = (configPath: string) =>
  pipe(
    Effect.promise(collectConfig),
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
        Effect.promise(() => outputJSON(configPath, config, { spaces: 2 })),
        Effect.map(() => config),
      ),
    ),
  )

const ConfigSchema = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
  paths: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
  }),
})

const collectConfig = async () =>
  p.group(
    {
      framework: () =>
        p.select({
          message: 'Which JavaScript framework are you using?',
          options: [
            { value: 'react', label: 'React' },
            { value: 'solid', label: 'Solid' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ],
          initialValue: 'react',
        }),
      components: () =>
        p.text({
          message: 'Where should UI components be stored?',
          initialValue: './src/components/ui',
          validate: (value) => {
            if (!value) return 'Please enter a valid path.'
            if (!value.startsWith('.'))
              return 'Please enter a relative path from the project root (e.g., ./src/components/ui).'
          },
        }),
      theme: () =>
        p.text({
          message: 'Where should theme files be stored?',
          initialValue: './src/theme',
          validate: (value) => {
            if (!value) return 'Please enter a valid path.'
            if (!value.startsWith('.'))
              return 'Please enter a relative path from the project root (e.g., ./src/theme).'
          },
        }),
    },
    {
      onCancel: () => {
        p.cancel("Setup cancelled. Run the command again when you're ready to configure Park UI.")
        process.exit(0)
      },
    },
  )

import { join, parse } from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe, Schema } from 'effect'
import { outputJSON, readJSON } from 'fs-extra'
import { packageDirectory } from 'pkg-dir'
import type { Framework } from '../schema'
import { ParkUIConfigNotFound } from './errors'

export const getParkUIConfig = () =>
  pipe(
    getParkUIConfigPath(),
    Effect.flatMap((configPath) =>
      pipe(
        Effect.tryPromise({
          try: () => readJSON(configPath),
          catch: () => ParkUIConfigNotFound,
        }),
        Effect.flatMap((config) => Schema.decodeUnknown(ParkUIConfig)(config)),
        Effect.catchTag('ParseError', () => {
          p.note(
            'Invalid or outdated Park UI configuration detected.\nCreating a new configuration file...',
            'Info',
          )
          return createConfig(configPath)
        }),
        Effect.catchTag('ParkUIConfigNotFound', () => {
          p.note(
            `Park UI configuration not found in ${parse(configPath).dir}.\nInitializing a new configuration...`,
            'Info',
          )
          return createConfig(configPath)
        }),
      ),
    ),
  )

export const getParkUIConfigPath = () =>
  pipe(
    Effect.promise(() => packageDirectory()),
    Effect.flatMap(Effect.fromNullable),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.map((packageDir) => join(packageDir, 'park-ui.json')),
  )

export const createConfig = (configPath: string) =>
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
        Effect.promise(() => outputJSON(configPath, config, { spaces: 2 })),
        Effect.map(() => config),
      ),
    ),
  )

interface Prompt {
  framework: Framework
  components: string
  theme: string
}

const countries = [
  { value: 'us', label: 'United States', hint: 'NA' },
  { value: 'ca', label: 'Canada', hint: 'NA' },
  { value: 'mx', label: 'Mexico', hint: 'NA' },
  { value: 'br', label: 'Brazil', hint: 'SA' },
  { value: 'ar', label: 'Argentina', hint: 'SA' },
  { value: 'uk', label: 'United Kingdom', hint: 'EU' },
  { value: 'fr', label: 'France', hint: 'EU' },
  { value: 'de', label: 'Germany', hint: 'EU' },
  { value: 'it', label: 'Italy', hint: 'EU' },
  { value: 'es', label: 'Spain', hint: 'EU' },
  { value: 'pt', label: 'Portugal', hint: 'EU' },
  { value: 'ru', label: 'Russia', hint: 'EU/AS' },
  { value: 'cn', label: 'China', hint: 'AS' },
  { value: 'jp', label: 'Japan', hint: 'AS' },
  { value: 'in', label: 'India', hint: 'AS' },
  { value: 'kr', label: 'South Korea', hint: 'AS' },
  { value: 'au', label: 'Australia', hint: 'OC' },
  { value: 'nz', label: 'New Zealand', hint: 'OC' },
  { value: 'za', label: 'South Africa', hint: 'AF' },
  { value: 'eg', label: 'Egypt', hint: 'AF' },
]

const promptUser = async () =>
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
      accentColor: () =>
        p.autocomplete({
          message: 'Select an accent color',
          options: countries,
          placeholder: 'Type to search...',
          maxItems: 8,
        }),
      grayColor: () =>
        p.autocomplete({
          message: 'Select a gray color',
          options: countries,
          placeholder: 'Type to search...',
          maxItems: 8,
        }),
    },
    {
      onCancel: () => {
        p.cancel("Setup cancelled. Run the command again when you're ready to configure Park UI.")
        process.exit(0)
      },
    },
  ) as Promise<Prompt>

const ParkUIConfig = Schema.Struct({
  framework: Schema.Literal('react', 'solid', 'svelte', 'vue'),
  paths: Schema.Struct({
    components: Schema.String,
    theme: Schema.String,
  }),
})

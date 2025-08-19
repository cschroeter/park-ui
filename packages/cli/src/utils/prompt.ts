import * as p from '@clack/prompts'
import { Effect } from 'effect'
import { titleCase } from 'scule'
import type { Framework } from '~/schema'
import { registry } from './registry'

export const promptInitConfig = () =>
  Effect.all([registry.getAcccentColors(), registry.getGrayColors()])
    .pipe(
      Effect.map(([accentColors, grayColors]) => {
        const accentOptions = accentColors.map((color) => ({
          value: color,
          label: titleCase(color),
        }))
        const grayOptions = grayColors.map((color) => ({
          value: color,
          label: titleCase(color),
        }))
        return {
          accentColors: accentOptions,
          neutralColors: grayOptions,
        }
      }),
    )
    .pipe(
      Effect.flatMap((colors) =>
        Effect.tryPromise({
          try: () => prompt(colors),
          catch: () => new Error('Failed to collect configuration. Please try again.'),
        }).pipe(
          Effect.map(({ accentColor, framework, components, grayColor, theme }) => ({
            config: {
              framework,
              paths: {
                components,
                theme,
              },
            },
            colors: {
              accentColor,
              grayColor,
            },
          })),
        ),
      ),
    )

type Option = p.Option<string>

interface Args {
  accentColors: Option[]
  neutralColors: Option[]
}

const prompt = ({ accentColors, neutralColors }: Args) =>
  p.group(
    {
      framework: () =>
        p.select<Framework>({
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
          options: accentColors,
          placeholder: 'Type to search...',
          maxItems: 8,
        }),
      grayColor: () =>
        p.autocomplete({
          message: 'Select a neutral color',
          options: neutralColors,
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
  )

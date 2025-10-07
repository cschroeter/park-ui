import * as p from '@clack/prompts'
import { Effect } from 'effect'
import { titleCase } from 'scule'
import type { Framework } from '~/schema'
import { fetchRegistryThemeIndex } from './registry-client'

export const promptInitConfig = () =>
  fetchRegistryThemeIndex()
    .pipe(
      Effect.map((items) => items.filter((item) => item.type === 'registry:color')),
      Effect.map((colors) => {
        const grayColors = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand']
        const accentColors = colors.filter((color) => !grayColors.includes(color.name))
        const accentOptions = accentColors.map(({ name }) => ({
          value: name,
          label: titleCase(name),
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
          Effect.map(({ accentColor, framework, grayColor }) => ({
            framework,
            accentColor,
            grayColor,
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
      accentColor: () =>
        p.autocomplete({
          message: 'Which color would you like to use as the accent color?',
          options: accentColors,
          placeholder: 'Type to search...',
          maxItems: 8,
        }),
      grayColor: () =>
        p.autocomplete({
          message: 'Which color would you like to use as the gray color?',
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

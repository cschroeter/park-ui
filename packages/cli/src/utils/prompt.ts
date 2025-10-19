import * as p from '@clack/prompts'
import { Effect } from 'effect'
import type { Framework } from '~/schema'
import { fetchColors } from './registry-client'

export const promptInitConfig = () =>
  fetchColors().pipe(
    Effect.flatMap((colors) =>
      Effect.tryPromise({
        try: () => prompt(colors),
        catch: () => new Error('Failed to collect configuration. Please try again.'),
      }),
    ),
    Effect.map(({ framework, accentColor, grayColor }) => ({
      framework,
      accentColor,
      grayColor,
      borderRadius: {
        theme: {
          extend: {
            semanticTokens: {
              radii: {
                l1: { value: '{radii.xs}' },
                l2: { value: '{radii.sm}' },
                l3: { value: '{radii.md}' },
              },
            },
          },
        },
      },
    })),
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
          options: [{ value: 'react' }, { value: 'solid' }],
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
      borderRadius: () =>
        p.select({
          message: 'What border radius scale would you like to use?',
          options: [
            { value: 'none' },
            { value: 'xs' },
            { value: 'sm', hint: 'default' },
            { value: 'md' },
            { value: 'lg' },
            { value: 'xl' },
            { value: '2xl' },
          ],
          initialValue: 'sm',
        }),
    },
    {
      onCancel: () => {
        p.cancel("Setup cancelled. Run the command again when you're ready to configure Park UI.")
        process.exit(0)
      },
    },
  )

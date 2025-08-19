import * as p from '@clack/prompts'
import { Effect } from 'effect'

export const promptInitConfig = () =>
  Effect.tryPromise({
    try: () => prompt(),
    catch: () => new Error('Failed to collect configuration. Please try again.'),
  })

const prompt = () =>
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
          options: [],
          placeholder: 'Type to search...',
          maxItems: 8,
        }),
      grayColor: () =>
        p.autocomplete({
          message: 'Select a gray color',
          options: [],
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

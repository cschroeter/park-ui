import * as p from '@clack/prompts'
import { CONFIG_FILE_NAME, type Config, writeConfig } from '../config/park-ui-config'
import { addUtils } from '../helpers/add-utils'

const getInitialConfig = async (): Promise<Config> => {
  const config = await p.group(
    {
      cssFramework: () =>
        p.select({
          message: 'Which CSS framework do you use?',
          options: [
            { value: 'panda', label: 'Panda' },
            { value: 'tailwind', label: 'Tailwind' },
          ],
          initialValue: 'panda',
        }),
      jsFramework: () =>
        p.select({
          message: 'Which JavaScript framework do you use?',
          options: [
            { value: 'react', label: 'React' },
            { value: 'solid', label: 'Solid' },
            { value: 'vue', label: 'Vue' },
          ],
          initialValue: 'react',
        }),
      importAliasComponents: () =>
        p.text({
          message: 'What is your import alias for components?',
          initialValue: '~/components/ui',
        }),
      importAliasUtils: () =>
        p.text({ message: 'What is your import alias for utilities?', initialValue: '~/lib' }),
      useServerComponents: ({ results }) => {
        const isReact = results.jsFramework === 'react'
        if (!isReact) return Promise.resolve(false)
        return p.confirm({ message: 'Do you want to use React Server Components?' })
      },
      confirm: () =>
        p.confirm({ message: `Would you like to write the configuration to ${CONFIG_FILE_NAME}?` }),
      outro: async () =>
        p.note(
          'Run `npx @park-ui/cli add button` to add your first component.',
          "🚀 You're all set now. Happy hacking!",
        ),
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.')
        process.exit(0)
      },
    },
  )

  return {
    $schema: 'https://park-ui.com/schema.json',
    cssFramework: config.cssFramework as any,
    jsFramework: config.jsFramework as any,
    importAliases: {
      components: config.importAliasComponents,
      utils: config.importAliasUtils,
    },
    // @ts-ignore typeguard needed because of jsFramework if/then in config schema
    useReactServerComponents: config.useServerComponents,
  }
}

const getUtils = async () => {
  const spinner = p.spinner()
  spinner.start('Start to add helpers...')
  await addUtils()
    .catch((error) => {
      spinner.stop(`Failed to download utils. ${error.message}`)
      process.exit(1)
    })
    .then(() => {
      spinner.stop('Done')
      process.exit(0)
    })
}

export const initCommand = async () => {
  p.intro('Welcome to Park UI!')
  const config = await getInitialConfig()
  writeConfig(config)

  await getUtils()
}

import * as p from '@clack/prompts'
import { CONFIG_FILE_NAME, Config, writeConfig } from '../config/config'
import { addUtils } from '../helpers/add-utils'

const getInitialConfig = async (): Promise<Config> => {
  const config = await p.group(
    {
      cssFramework: () =>
        p.select({
          message: `Which css framework do you use?`,
          options: [
            { value: 'panda', label: 'Panda' },
            { value: 'tailwind', label: 'Tailwind' },
          ],
          initialValue: 'panda',
        }),
      jsFramework: () =>
        p.select({
          message: `Which javascript framework do you use? (vue coming soon)`,
          options: [
            { value: 'react', label: 'React' },
            { value: 'solid', label: 'Solid' },
            // { value: 'vue', label: 'Vue' },
          ],
          initialValue: 'react',
        }),
      importAliasComponents: () =>
        p.text({
          message: 'What is your import alias for components?',
          initialValue: '~/components/ui',
        }),
      importAliasUtils: () =>
        p.text({ message: 'What is your import alias for utils?', initialValue: '~/lib' }),
      useServerComponents: ({ results }) => {
        const isReact = results.jsFramework === 'react'
        if (!isReact) return Promise.resolve(false)
        return p.confirm({ message: 'Do you want to use server components?' })
      },
      confirm: () => p.confirm({ message: `Write the config to ${CONFIG_FILE_NAME} ?` }),
      outro: async () =>
        p.note(
          "🚀 You're all set now. Happy hacking! \n \nYou can start now adding your first component.\nFor example, run `park-ui add button`.",
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
  spinner.start(`Start to add helpers...`)
  await addUtils()
    .catch(() => {
      spinner.stop(`Failed to download utils.`)
      process.exit(1)
    })
    .then(() => {
      spinner.stop(`Downloaded utils 🏁`)
    })
}

export const initCommand = async () => {
  p.intro(`🚀 Setup park-ui`)
  const config = await getInitialConfig()
  writeConfig(config)

  await getUtils()
}

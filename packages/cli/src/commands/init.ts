import * as p from '@clack/prompts'
import {
  CONFIG_FILE_NAME,
  Config,
  getCssFramework,
  getImportAliases,
  getJsFramework,
  writeConfig,
} from '../config/config'
import { saveComponentToFile } from '../helpers/save-file'

const downloadHelpers = async (options: {
  cssFramework: Config['cssFramework']
  jsFramework: Config['jsFramework']
}): Promise<{ filename: string; content: string }[]> => {
  const { cssFramework, jsFramework } = options
  const helpersUrl = `https://park-ui.com/registry/${cssFramework}/${jsFramework}/helpers/index.json`
  const components = await fetch(helpersUrl)
    .then((res) => res.json())
    .then((res) => res.files)
    .catch((e) => {
      throw new Error(`Failed to download ${jsFramework} ${cssFramework} helpers\n${e?.message}`)
    })
  return components
}

export const addHelpers = async () => {
  const cssFramework = getCssFramework()
  const jsFramework = getJsFramework()
  const { utilsImportAlias } = getImportAliases()

  const components = await downloadHelpers({
    cssFramework,
    jsFramework,
  })
  components.forEach(({ filename, content }) => {
    saveComponentToFile(utilsImportAlias, filename, content)
  })
}

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
          message: `Which javascript framework do you use?`,
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

export const initCommand = async () => {
  p.intro(`🚀 Setup park-ui`)
  const config = await getInitialConfig()
  writeConfig(config)

  // TODO show spinner while downloading the files before ending the group https://github.com/natemoo-re/clack/issues/152
  // maybe consider another lib than clack??

  await addHelpers()
}

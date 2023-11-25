import * as p from '@clack/prompts'

import { Config, getCssFramework, getImportAliases, getJsFramework } from '../config/config'
import { saveComponentToFile } from '../helpers/save-file'

const downloadComponents = async (options: {
  componentName: string
  cssFramework: Config['cssFramework']
  jsFramework: Config['jsFramework']
}): Promise<{ filename: string; content: string }[]> => {
  const { componentName, cssFramework, jsFramework } = options
  const componentsUrl = `https://park-ui.com/registry/${cssFramework}/${jsFramework}/components/${componentName}.json`
  const components = await fetch(componentsUrl)
    .then((res) => res.json())
    .then((res) => res.files)
    .catch((e) => {
      throw new Error(`Failed to download ${componentName} component\n${e?.message}`)
    })
  return components
}

export const addComponent = async (componentName: string) => {
  const cssFramework = await getCssFramework()
  const jsFramework = await getJsFramework()
  const { componentsImportAlias } = await getImportAliases()

  const components = await downloadComponents({
    componentName,
    cssFramework,
    jsFramework,
  })
  components.forEach(({ filename, content }) => {
    saveComponentToFile(componentsImportAlias, filename, content)
  })
}

export const addComponentsCommand = async () => {
  const components = process.argv.slice(3)

  const spinner = p.spinner()
  spinner.start(`Start to add components ${components.join(', ')}`)

  for (const component of components) {
    spinner.message(`Downloading ${component} component...`)
    try {
      await addComponent(component)
    } catch (e: any) {
      spinner.stop(`Failed to download ${component} component\n${e?.message}`)
      return
    }
  }

  spinner.stop(`Downloaded ${components.join(', ')} 🏁`)
}

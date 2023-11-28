import * as p from '@clack/prompts'

import { getImportAliases } from '../config/config'
import { downloadComponents, getComponents } from '../helpers/park-api'
import { saveComponentToFile } from '../helpers/save-file'

const toKebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export const addComponent = async (options: { componentName: string; componentUrl: string }) => {
  const { componentName, componentUrl } = options
  const { componentsImportAlias } = getImportAliases()

  const components = await downloadComponents({
    componentName,
    componentUrl,
  })
  components.forEach(({ filename, content }) => {
    saveComponentToFile(componentsImportAlias, filename, content)
  })
}

export const addComponentsCommand = async () => {
  const spinner = p.spinner()
  spinner.start(`Start to add components...`)

  const registeredComponents = await getComponents()

  let componentNames = process.argv.slice(3)
  if (componentNames.length === 1 && componentNames[0] === '--all') {
    componentNames = registeredComponents.map((component) => component.name)
  }

  const components = componentNames.map((componentName) => {
    const component = registeredComponents.find(
      (registeredComponent) => toKebabCase(registeredComponent.name) === toKebabCase(componentName),
    )
    if (!component) {
      spinner.stop(`Component ${componentName} is not known.`)
      process.exit(1)
    }
    return component
  })

  for (const component of components) {
    spinner.message(`Downloading ${component.name} component...`)
    try {
      await addComponent({ componentName: component.name, componentUrl: component.href })
    } catch (e: any) {
      spinner.stop(`Failed to download ${component.name} component\n${e?.message}`)
      return
    }
  }

  spinner.stop(`Downloaded ${componentNames.join(', ')} 🏁`)
}

import * as p from '@clack/prompts'

import { select } from '@clack/prompts'
import { getImportAliases, getUseReactServerComponents } from '../config/park-ui-config'
import { downloadComponents, getComponents } from '../helpers/park-api'
import { saveToFile } from '../helpers/save-file'

const toKebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export const addComponent = async (options: { componentName: string; componentUrl: string }) => {
  const serverComponents = getUseReactServerComponents()
  const { componentName, componentUrl } = options
  const { componentsImportAlias } = getImportAliases()

  const components = await downloadComponents({
    componentName,
    componentUrl,
  })
  components.forEach(({ filename, content }) => {
    if (serverComponents) {
      content = `'use client'\n\n${content}`
      saveToFile(componentsImportAlias, filename, content)
    }
  })
}

export const addComponentsCommand = async () => {
  const spinner = p.spinner()
  spinner.start(`Start to add components...`)

  const registeredComponents = await getComponents().catch((error) => {
    spinner.stop(`Failed to fetch components\n${error?.message}`)
  })
  if (!registeredComponents) {
    return
  }

  let componentNames = process.argv.slice(3)

  if (componentNames.length === 0) {
    spinner.stop('No component name provided. Please select a component.')

    const selectedComponentName = await askUserForComponent(registeredComponents)
    componentNames.push(selectedComponentName)

    spinner.start(`Start to add components...`)
  }
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
  p.note(
    'The installed components are now in place.\nTo update any component, simply rerun the add command at a later time.',
  )
}

const askUserForComponent = async (
  registeredComponents: { name: string; href: string }[],
): Promise<string> => {
  const supportedComponents = registeredComponents.map((component) => component.name)
  return (await select({
    message: 'Select components to add.',
    options: [
      { label: 'Add all components', value: '--all' },
      ...supportedComponents.map((component) => ({ value: component, label: component })),
    ],
    // https://github.com/natemoo-re/clack/issues/173
    maxItems: 10, // ui glitch with multi select, so limit to 10
  })) as string
}

import * as p from '@clack/prompts'

import { mkdirSync, writeFileSync } from 'fs'
import { match } from 'ts-pattern'
import { Config, getCssFramework, getImportAliases } from '../config/config'

const getComponentDownloadPaths = (
  componentName: string,
  cssFramework: Config['cssFramework'],
): { fileName: string; url: string }[] => {
  return match(cssFramework)
    .with('panda', () => [
      {
        fileName: `${componentName}.tsx`,
        url: `https://raw.githubusercontent.com/cschroeter/park-ui/main/website/src/components/ui/${componentName}.tsx`,
      },
    ])
    .with('tailwind', () => [
      {
        fileName: `${componentName}/snippet.ts`,
        url: `https://raw.githubusercontent.com/cschroeter/park-ui/main/packages/tailwind/src/components/${componentName}/snippet.ts`,
      },
      {
        fileName: `${componentName}/recipe.ts`,
        url: `https://raw.githubusercontent.com/cschroeter/park-ui/main/packages/tailwind/src/components/${componentName}/recipe.ts`,
      },
    ])
    .exhaustive()
}

const downloadComponent = async (url: string) => {
  const componentResult = await fetch(url)
  if (componentResult.status === 200) {
    const component = await componentResult.text()
    return component
  }
  throw new Error(`Component at ${url} not found`)
}

const saveComponentToFile = (
  componentsImportAlias: string | undefined,
  componentName: string,
  component: string,
) => {
  // TODO resolve imports like ~ with tsconfig, but for now just make sure to not end up in the home dir
  const componentPath = `${componentsImportAlias?.replace('~/', './')}/${componentName}`
  const folder = componentPath.split('/').slice(0, -1).join('/')
  mkdirSync(folder, { recursive: true })
  writeFileSync(componentPath, component)
}

export const addComponent = async (componentName: string) => {
  const cssFramework = await getCssFramework()
  const { componentsImportAlias } = await getImportAliases()

  const componentDownloadPaths = getComponentDownloadPaths(componentName, cssFramework)
  for (const { fileName, url } of componentDownloadPaths) {
    const component = await downloadComponent(url)
    if (!component) {
      throw new Error(`Component ${componentName} not found`)
    }
    saveComponentToFile(componentsImportAlias, fileName, component)
  }
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

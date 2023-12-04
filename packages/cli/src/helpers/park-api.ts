import fetch from 'node-fetch'
import { getCssFramework, getJsFramework } from '../config/park-ui-config'

export const getComponents = async (): Promise<{ name: string; href: string }[]> => {
  const cssFramework = getCssFramework()
  const jsFramework = getJsFramework()

  const componentsUrl = `https://park-ui.com/registry/${cssFramework}/${jsFramework}/components/index.json`
  const components = await fetch(componentsUrl)
    .then((res) => res.json())
    .then((res: any) => res.components)
    .catch((e) => {
      throw new Error(`Failed to download components\n${e?.message}`)
    })
  return components
}

export const downloadComponents = async (options: {
  componentName: string
  componentUrl: string
}): Promise<{ filename: string; content: string }[]> => {
  const { componentName, componentUrl: componentsUrl } = options

  const components = await fetch(componentsUrl)
    .then((res) => res.json())
    .then((res) => res.files)
    .catch((e) => {
      throw new Error(`Failed to download ${componentName} component\n${e?.message}`)
    })
  return components
}

export const downloadUtils = async (): Promise<{ filename: string; content: string }[]> => {
  const cssFramework = getCssFramework()
  const jsFramework = getJsFramework()

  const helpersUrl = `https://park-ui.com/registry/${cssFramework}/${jsFramework}/helpers/index.json`
  const components = await fetch(helpersUrl)
    .then((res) => res.json())
    .then((res) => res.files)
    .catch((e) => {
      throw new Error(`Failed to download ${jsFramework} ${cssFramework} helpers\n${e?.message}`)
    })
  return components
}

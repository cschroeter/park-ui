import { mkdirSync, writeFileSync } from 'fs'

export const saveComponentToFile = (
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

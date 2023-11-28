import { mkdirSync, writeFileSync } from 'fs'

export const saveToFile = (importAlias: string | undefined, fileName: string, content: string) => {
  // TODO resolve imports like ~ with tsconfig, but for now just make sure to not end up in the home dir
  const filePath = `${importAlias?.replace('~/', './')}/${fileName}`
  const folder = filePath.split('/').slice(0, -1).join('/')
  mkdirSync(folder, { recursive: true })
  writeFileSync(filePath, content)
}

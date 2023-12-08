import { mkdirSync, writeFileSync } from 'fs'
import { resolveTypescriptPath } from '../config/typescript-config'

export const saveToFile = (importAlias: string | undefined, fileName: string, content: string) => {
  const filePath = resolveTypescriptPath(`${importAlias}/${fileName}`)
  const folder = filePath.split('/').slice(0, -1).join('/')
  mkdirSync(folder, { recursive: true })
  writeFileSync(filePath, content)
}

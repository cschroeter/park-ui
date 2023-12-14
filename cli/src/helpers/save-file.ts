import { mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { resolveTypescriptPath } from '../config/typescript-config'

export const saveToFile = (importAlias: string | undefined, fileName: string, content: string) => {
  const filePath = resolveTypescriptPath(`${importAlias}${path.sep}${fileName}`)
  const folder = filePath.split(path.sep).slice(0, -1).join(path.sep)
  mkdirSync(folder, { recursive: true })
  writeFileSync(filePath, content)
}

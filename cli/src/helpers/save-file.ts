import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { resolveTypescriptPath } from '../config/typescript-config'

export const saveToFile = (importAlias: string | undefined, fileName: string, content: string) => {
  const filePath = resolveTypescriptPath(`${importAlias}/${fileName}`)
  const folder = path.dirname(filePath)
  mkdirSync(folder, { recursive: true })
  writeFileSync(filePath, content)
}

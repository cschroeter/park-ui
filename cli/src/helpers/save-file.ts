import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { resolveTypescriptPath } from '../config/typescript-config'

export const saveToFile = ({
                               filename,
                               content,
                               importAlias,
                               tsConfig }: {
    importAlias: string | undefined,
    filename: string,
    content: string
    tsConfig?: {
        searchPath?: string,
        configName?: string
    }
}) => {
    const filePath = resolveTypescriptPath({
        pathToResolve: `${importAlias}/${filename}`,
        configName: tsConfig?.configName,
        searchPath: tsConfig?.searchPath
    })

    const folder = path.dirname(filePath)
    mkdirSync(folder, { recursive: true })
    writeFileSync(filePath, content)
}

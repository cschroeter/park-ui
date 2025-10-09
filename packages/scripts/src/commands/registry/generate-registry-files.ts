import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { readFile, readJson, writeFile } from 'fs-extra'
import type { Registry, RegistryItem } from './schema'

const resolveFilePath = (filePath: string): string => {
  return join(process.cwd(), filePath)
}

const readFileContent = async (filePath: string): Promise<string> => {
  try {
    return await readFile(resolveFilePath(filePath), 'utf-8')
  } catch (error) {
    console.error(`⚠️  Error reading file ${filePath}:`, error)
    return ''
  }
}

const transformPath = (filePath: string, type: string): string => {
  if (type === 'registry:ui') {
    return filePath.replace(/^src\/components\/ui\//, '')
  }

  if (type === 'registry:recipe') {
    return filePath.replace(/^.*\/recipes\//, 'recipes/')
  }

  if (type === 'registry:color' || type === 'registry:theme') {
    return filePath.replace(/^src\/theme\//, '')
  }

  return filePath
}

export const generateRegistryFiles = async (options?: { outputDir?: string }) => {
  const registry: Registry = await readJson('./registry.json')
  const baseDir = join(process.cwd(), '../../website/public/registry')
  const distDir = options?.outputDir ? join(baseDir, options.outputDir) : baseDir
  await mkdir(distDir, { recursive: true })

  let successCount = 0
  let errorCount = 0
  const indexItems: Array<{ name: string; type: string }> = []

  for (const item of registry.items) {
    try {
      const filesWithContent = await Promise.all(
        (item.files ?? []).map(async (file) => ({
          content: await readFileContent(file.path),
          type: file.type,
          path: transformPath(file.path, file.type),
        })),
      )

      const output: RegistryItem = {
        $schema: 'https://next.park-ui.com/schema/registry-item.json',
        name: item.name,
        type: item.type,
        dependencies: item.dependencies,
        files: filesWithContent,
        ...(item.panda && { panda: item.panda }),
        ...(item.registryDependencies?.length && {
          registryDependencies: item.registryDependencies,
        }),
      }

      const outputPath = join(distDir, `${item.name}.json`)
      await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf-8')

      indexItems.push({ name: item.name, type: item.type })

      successCount++
    } catch (error) {
      console.error(`❌ ${item.name}:`, error)
      errorCount++
    }
  }

  const indexPath = join(distDir, 'index.json')
  await writeFile(indexPath, `${JSON.stringify(indexItems, null, 2)}\n`, 'utf-8')

  console.log(`✨ Generated ${successCount} registry files`)
  console.log(`✨ Generated index.json with ${indexItems.length} items`)
  if (errorCount > 0) console.log(`❌ Failed: ${errorCount}`)
}

// Run the script only if this file is executed directly
if (import.meta.main) {
  await generateRegistryFiles()
}

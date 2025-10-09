import { parse } from 'node:path'
import fg from 'fast-glob'
import { readFile, writeFile } from 'fs-extra'
import type { Registry, RegistryItemPartial } from './schema'

const toKebabCase = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const extractDependencies = (sourceCode: string) => {
  const importRegex = /import\s+(?:[\w*{}\s,]+\s+from\s+)?['"]([^'"]+)['"]/g
  const dependencies = new Set<string>()

  // biome-ignore lint/suspicious/noAssignInExpressions: regex exec pattern
  for (let match: RegExpExecArray | null; (match = importRegex.exec(sourceCode)) !== null; ) {
    const importPath = match[1]
    if (importPath && !importPath.startsWith('.') && !importPath.startsWith('styled-system')) {
      dependencies.add(importPath.split('/').slice(0, 2).join('/'))
    }
  }

  return Array.from(dependencies)
}

const extractRecipeDependencies = (sourceCode: string) => {
  const recipeImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]styled-system\/recipes['"]/g
  const recipes = new Set<string>()

  // biome-ignore lint/suspicious/noAssignInExpressions: regex exec pattern
  for (let match: RegExpExecArray | null; (match = recipeImportRegex.exec(sourceCode)) !== null; ) {
    const imports = match[1]?.split(',').map((item) => item.trim()) || []

    for (const importItem of imports) {
      if (importItem.startsWith('type ')) continue

      const importName = importItem.trim().replace(/Recipe$/, '')
      if (importName) {
        recipes.add(`${toKebabCase(importName)}-recipe`)
      }
    }
  }

  return Array.from(recipes)
}

const extractRegistryDependencies = (sourceCode: string, componentName: string) => {
  const relativeImportRegex = /import\s+(?:[\w*{}\s,]+\s+from\s+)?['"]\.\/([\w-]+)['"]/g
  const dependencies = new Set<string>()

  for (
    let match: RegExpExecArray | null;
    // biome-ignore lint/suspicious/noAssignInExpressions: regex exec pattern
    (match = relativeImportRegex.exec(sourceCode)) !== null;
  ) {
    const importedComponent = match[1]
    if (importedComponent && importedComponent !== componentName) {
      dependencies.add(importedComponent)
    }
  }

  for (const recipe of extractRecipeDependencies(sourceCode)) {
    dependencies.add(recipe)
  }

  return Array.from(dependencies).sort()
}

const generateRecipeItems = async (recipeNames: Set<string>): Promise<RegistryItemPartial[]> => {
  console.log('\n🔍 Scanning recipe files...')
  const recipeItems: RegistryItemPartial[] = []

  for (const recipeName of recipeNames) {
    const kebabName = toKebabCase(recipeName.replace(/-recipe$/, ''))
    const recipePath = `../../packages/preset/src/recipes/${kebabName}.ts`
    const registryRecipeName = `${kebabName}-recipe`

    try {
      const content = await readFile(recipePath, 'utf-8')
      const deps = extractDependencies(content)
      const dependencies = ['@pandacss/dev', ...deps.filter((d) => d !== '@pandacss/dev')]

      const recipeDepRegex = /import\s+\{[^}]*\}\s+from\s+['"]\.\/([\w-]+)['"]/g
      const recipeDeps: string[] = []

      // biome-ignore lint/suspicious/noAssignInExpressions: regex exec pattern
      for (let match: RegExpExecArray | null; (match = recipeDepRegex.exec(content)) !== null; ) {
        recipeDeps.push(`${match[1]}-recipe`)
      }

      const recipeItem: RegistryItemPartial = {
        name: registryRecipeName,
        type: 'registry:recipe',
        dependencies,
        files: [{ path: recipePath, type: 'registry:recipe' }],
        ...(recipeDeps.length > 0 && { registryDependencies: recipeDeps.sort() }),
      }

      recipeItems.push(recipeItem)
      console.log(`✅ Processed recipe: ${registryRecipeName}`)
    } catch {
      console.log(`⚠️  Could not find recipe file: ${recipePath}`)
    }
  }

  return recipeItems
}

const getRegistryType = (filePath: string) => {
  if (filePath.includes('src/theme/colors')) return 'registry:color'
  if (filePath.includes('src/components/ui')) return 'registry:ui'
  if (filePath.includes('src/theme')) return 'registry:theme'
  return 'registry:ui' // default fallback
}

export const generateRegistry = async (options: { name: string; pattern?: string }) => {
  const pattern = options.pattern || 'src/components/ui/*.tsx'
  console.log(`🔍 Scanning files matching: ${pattern}`)

  const files = await fg(pattern, {
    ignore: ['**/*.test.tsx', '**/*.spec.tsx', '**/index.ts'],
  })

  const items: RegistryItemPartial[] = []
  const allRecipes = new Set<string>()

  for (const filePath of files) {
    const componentName = parse(filePath).name
    const content = await readFile(filePath, 'utf-8')
    const dependencies = extractDependencies(content)
    const registryDependencies = extractRegistryDependencies(content, componentName)
    const registryType = getRegistryType(filePath)

    for (const recipe of extractRecipeDependencies(content)) {
      allRecipes.add(recipe)
    }

    const item: RegistryItemPartial = {
      name: componentName,
      type: registryType,
      dependencies: dependencies.length > 0 ? dependencies : ['@ark-ui/react'],
      files: [{ path: filePath, type: registryType }],
      ...(registryDependencies.length > 0 && { registryDependencies }),
    }

    items.push(item)
    console.log(`✅ Processed: ${componentName}`)
  }

  const recipeItems = await generateRecipeItems(allRecipes)
  const allItems = [...items, ...recipeItems].sort((a, b) => a.name.localeCompare(b.name))

  const registry: Registry = {
    $schema: 'https://next.park-ui.com/schema/registry.json',
    name: options.name,
    homepage: 'https://park-ui.com',
    items: allItems,
  }

  const outputPath = './registry.json'
  await writeFile(outputPath, `${JSON.stringify(registry, null, 2)}\n`, 'utf-8')

  console.log(
    `\n✨ Generated registry.json with ${items.length} components and ${recipeItems.length} recipes`,
  )
  console.log(`📝 Output: ${outputPath}`)
}

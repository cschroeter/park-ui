import { generateCode, loadFile, writeFile } from 'magicast'

interface Recipe {
  type: 'recipe' | 'slotRecipe'
  imports: string
}
export async function updateRecipeIndex(indexPath: string, recipe: Recipe) {
  const mod = await loadFile(indexPath)

  // Parse import statement and add it to the module
  // e.g. "import { avatar } from './avatar'" or "import { switchRecipe } from './switch'"
  const match = recipe.imports.match(/import\s*{?\s*(\w+)\s*}?\s*from\s*['"]([^'"]+)['"]/)
  if (!match) {
    throw new Error(`Invalid import statement: ${recipe.imports}`)
  }

  const [, recipeName, importPath] = match
  mod.imports.$prepend({
    from: importPath,
    local: recipeName,
    imported: recipeName,
  })

  if (recipe.type === 'recipe') {
    const recipesExport = mod.exports['recipes']

    if (recipesExport && typeof recipesExport === 'object' && recipesExport.$ast) {
      // Create shorthand property by modifying AST directly
      const existingProp = recipesExport.$ast.properties.find(
        (p: any) => p.key?.name === recipeName,
      )
      if (existingProp) {
        existingProp.shorthand = true
      } else {
        recipesExport.$ast.properties.push({
          type: 'Property',
          kind: 'init',
          key: { type: 'Identifier', name: recipeName },
          value: { type: 'Identifier', name: recipeName },
          shorthand: true,
        })
      }
    }
  }

  if (recipe.type === 'slotRecipe') {
    const slotRecipesExport = mod.exports['slotRecipes']

    if (slotRecipesExport && typeof slotRecipesExport === 'object' && slotRecipesExport.$ast) {
      // Create shorthand property by modifying AST directly
      const existingProp = slotRecipesExport.$ast.properties.find(
        (p: any) => p.key?.name === recipeName,
      )
      if (existingProp) {
        existingProp.shorthand = true
      } else {
        slotRecipesExport.$ast.properties.push({
          type: 'Property',
          kind: 'init',
          key: { type: 'Identifier', name: recipeName },
          value: { type: 'Identifier', name: recipeName },
          shorthand: true,
        })
      }
    }
  }

  const { code } = generateCode(mod)
  await writeFile(mod, indexPath)

  return code
}

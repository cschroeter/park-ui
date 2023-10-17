// for each recipe in the recipes folder, run the transform function

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { supportedClassNames } from '../supported-components'
import { transformRecipe } from './transform'

const getCodeSnippet = async (transformedRecipe: any, componentName: string) => {
  const code = `import { tv } from "tailwind-variants";

export const ${componentName}Styles = tv(${JSON.stringify(transformedRecipe, null, 2)});`
  return code
}

const removeAllPartsFunctionsInInputDir = async (inputDir: string) => {
  const recipeFiles = readdirSync(inputDir)
  await Promise.all(
    recipeFiles.map(async (recipeFile) => {
      const recipeFileContent = readFileSync(join(inputDir, recipeFile), {
        encoding: 'utf-8',
      })
      const recipeFileContentWithoutParts = recipeFileContent
        .replaceAll('parts(', '(')
        .replaceAll('as const', '')

      writeFileSync(join(inputDir, recipeFile), recipeFileContentWithoutParts)
    }),
  )
}

const recipeDir = join(__dirname, '../../../../panda/src/theme/recipes')

const main = async () => {
  const recipeFiles = readdirSync(recipeDir)

  // if not in the supportedClassNames, remove it
  recipeFiles.forEach((recipeFile) => {
    if (!supportedClassNames.includes(recipeFile.replace('.ts', ''))) {
      recipeFiles.splice(recipeFiles.indexOf(recipeFile), 1)
    }
  })

  await removeAllPartsFunctionsInInputDir(recipeDir)

  recipeFiles.forEach(async (recipeFile) => {
    // read the recipe file
    const recipeExports = require(join(recipeDir, recipeFile))
    const [recipeExportName] = Object.keys(recipeExports)
    console.log(`transform: ${recipeExportName}`)
    const recipe = recipeExports[recipeExportName]

    // transform the recipe
    const transformedRecipe = transformRecipe(recipe)

    const outputDir = join(__dirname, `../../components/${recipeFile.replace('.ts', '')}`)
    mkdirSync(outputDir, { recursive: true })

    // write the transformed recipe to the output directory
    const transformedRecipeFile = join(outputDir, `recipe.ts`)
    const code = await getCodeSnippet(transformedRecipe, recipeExportName)
    writeFileSync(transformedRecipeFile, code)
    console.log(`transform: ${recipeExportName} [transformed]`)
  })
}

main()

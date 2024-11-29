import fs from 'node:fs/promises'
import { parse } from 'node:path'
import { Effect, pipe } from 'effect'
import { globby } from 'globby'
import type { Config } from './get-config'

export const updateRecipeIndex = (config: Config) =>
  Effect.promise(() =>
    globby([`${config.paths.recipes}/*.ts`, `!${config.paths.recipes}/index.ts`]),
  )
    .pipe(
      Effect.map((recipes) => recipes.sort()),
      Effect.flatMap((recipes) =>
        pipe(
          Effect.forEach(recipes, (recipe) =>
            pipe(
              Effect.promise(() => fs.readFile(recipe, 'utf-8')),
              Effect.map((content) => ({
                filename: parse(recipe).name,
                exportName: content.match(/export const (\w+)/)?.[1] ?? '',
                slotRecipe: content.includes('defineSlotRecipe'),
              })),
            ),
          ),
        ),
      ),
    )
    .pipe(
      Effect.map(
        (recipes) =>
          `import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev'
${recipes.map(({ filename, exportName }) => `import { ${exportName} } from './${filename}'`).join('\n')}

export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
${recipes
  .filter((recipe) => !recipe.slotRecipe)
  .map(({ exportName }) => `  ${exportName},`)
  .join('\n')}
}
  
export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
${recipes
  .filter((recipe) => recipe.slotRecipe)
  .map(({ exportName }) => `  ${exportName},`)
  .join('\n')}
}
`,
      ),
      Effect.flatMap((content) =>
        Effect.promise(() => fs.writeFile(`${config.paths.recipes}/index.ts`, `${content}`)),
      ),
    )

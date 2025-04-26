import { parse } from 'node:path'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { globby } from 'globby'

/**
 * Reads all the recipes from the theme and generates a JSON file for each recipe.
 */
const programm = pipe(
  Effect.promise(() => globby(['../packages/preset/src/theme/recipes/*.ts'])),
  Effect.flatMap((recipes) =>
    Effect.forEach(recipes, (recipe) =>
      pipe(
        Effect.promise(() => fs.readFile(recipe, 'utf-8')),
        Effect.map((content) => ({
          id: parse(recipe).name,
          filename: parse(recipe).base,
          slotRecipe: content.includes('defineSlotRecipe'),
          content,
        })),
        Effect.flatMap((item) =>
          Effect.promise(() =>
            fs.outputJSON(`../website/public/registry/latest/recipes/${item.id}.json`, item),
          ),
        ),
      ),
    ),
  ),
)

await Effect.runPromise(programm)

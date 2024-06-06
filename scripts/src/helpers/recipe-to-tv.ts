import type { RecipeConfig, SlotRecipeConfig } from '@pandacss/dev'
import { recipes, slotRecipes } from '@park-ui/panda-preset/src/theme/recipes'
export type TailwindClassString = string

const allRecipes = {
  ...recipes,
  ...slotRecipes,
}

const isSlotRecipeConfig = (
  recipe: RecipeConfig | SlotRecipeConfig,
): recipe is SlotRecipeConfig => {
  return 'slots' in recipe
}
const prefix = ''

const transformRecipeToTvConfig = (
  recipe: RecipeConfig | SlotRecipeConfig,
): Record<string, TailwindClassString> | string => {
  const { className, variants = {}, defaultVariants } = recipe

  const result: Record<string, any> = {
    base: `${prefix}${className}`,
  }

  if (defaultVariants) {
    result.defaultVariants = defaultVariants
  }

  if (isSlotRecipeConfig(recipe)) {
    result.slots = {}
    recipe.slots.forEach((slot) => {
      result.slots[slot] = `${prefix}${className}__${slot}`
    })
  }

  result.variants = Object.keys(variants).reduce(
    (acc, variantName) => {
      const variant = variants[variantName]
      if (!acc[variantName]) {
        acc[variantName] = {}
      }
      Object.keys(variant).forEach((variantValue) => {
        // if recipe is SlotRecipeConfig typeguard

        if (isSlotRecipeConfig(recipe)) {
          recipe.slots.forEach((slot) => {
            if (!acc[variantName][variantValue]) {
              acc[variantName][variantValue] = {}
            }
            acc[variantName][variantValue][slot] =
              `${prefix}${className}__${slot}--${variantName}_${variantValue}`
          })
        } else {
          acc[variantName][variantValue] = `${prefix}${className}--${variantName}_${variantValue}`
        }
      })
      return acc
    },
    {} as Record<string, any>,
  )

  return result
}

export const transformComponentToTvConfig = (component: string) => {
  // @ts-expect-error ts(7053) string index
  const recipe = allRecipes[component]

  if (!recipe) {
    throw new Error(`Recipe ${component} not found`)
  }
  return transformRecipeToTvConfig(recipe)
}

import { RecipeConfig, SlotRecipeConfig } from '@pandacss/types'
export type TailwindClassString = string

const isSlotRecipeConfig = (
  recipe: RecipeConfig | SlotRecipeConfig,
): recipe is SlotRecipeConfig => {
  return 'slots' in recipe
}
const prefix = ''

export const transformRecipe = (
  recipe: RecipeConfig | SlotRecipeConfig,
): Record<string, TailwindClassString> | string => {
  const { base: baseStyles = {}, className, variants = {}, defaultVariants } = recipe

  let result: Record<string, any> = {
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

  result.variants = Object.keys(variants).reduce((acc, variantName) => {
    const variant = variants[variantName]
    if (!acc[variantName]) {
      acc[variantName] = {}
    }
    Object.keys(variant).forEach((variantValue) => {
      // if recipe is SlotRecipeConfig typeguard

      if (isSlotRecipeConfig(recipe)) {
        recipe.slots.forEach((slot) => {
          if (!acc[variantName]) {
            acc[variantName] = {}
          }
          if (!acc[variantName][variantValue]) {
            acc[variantName][variantValue] = {}
          }
          acc[variantName][variantValue][
            slot
          ] = `${prefix}${className}__${slot}--${variantName}_${variantValue}`
        })
      } else {
        acc[variantName][variantValue] = `${prefix}${className}--${variantName}_${variantValue}`
      }
    })
    return acc
  }, {})

  return result
}

import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const badgeFn = /* @__PURE__ */ createRecipe('badge', {
  "variant": "subtle",
  "size": "md"
}, [])

const badgeVariantMap = {
  "variant": [
    "solid",
    "subtle",
    "outline"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const badgeVariantKeys = Object.keys(badgeVariantMap)

export const badge = /* @__PURE__ */ Object.assign(badgeFn, {
  __recipe__: true,
  __name__: 'badge',
  raw: (props) => props,
  variantKeys: badgeVariantKeys,
  variantMap: badgeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, badgeVariantKeys)
  },
})
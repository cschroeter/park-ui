import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const proseFn = /* @__PURE__ */ createRecipe('prose', {
  "size": "base"
}, [])

const proseVariantMap = {
  "size": [
    "base"
  ]
}

const proseVariantKeys = Object.keys(proseVariantMap)

export const prose = /* @__PURE__ */ Object.assign(proseFn, {
  __recipe__: true,
  __name__: 'prose',
  raw: (props) => props,
  variantKeys: proseVariantKeys,
  variantMap: proseVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, proseVariantKeys)
  },
})
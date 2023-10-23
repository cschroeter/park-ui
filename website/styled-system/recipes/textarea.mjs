import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textareaFn = /* @__PURE__ */ createRecipe('textarea', {
  "size": "md"
}, [])

const textareaVariantMap = {
  "size": [
    "sm",
    "md",
    "lg",
    "xl"
  ]
}

const textareaVariantKeys = Object.keys(textareaVariantMap)

export const textarea = /* @__PURE__ */ Object.assign(textareaFn, {
  __recipe__: true,
  __name__: 'textarea',
  raw: (props) => props,
  variantKeys: textareaVariantKeys,
  variantMap: textareaVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textareaVariantKeys)
  },
})
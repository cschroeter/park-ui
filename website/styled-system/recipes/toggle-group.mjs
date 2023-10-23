import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const toggleGroupDefaultVariants = {
  "size": "md",
  "variant": "outline"
}
const toggleGroupCompoundVariants = []

const toggleGroupSlotNames = [
  [
    "root",
    "toggleGroup__root"
  ],
  [
    "toggle",
    "toggleGroup__toggle"
  ]
]
const toggleGroupSlotFns = /* @__PURE__ */ toggleGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toggleGroupDefaultVariants, getSlotCompoundVariant(toggleGroupCompoundVariants, slotName))])

const toggleGroupFn = (props = {}) => {
  return Object.fromEntries(toggleGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const toggleGroupVariantKeys = [
  "variant",
  "size"
]

export const toggleGroup = /* @__PURE__ */ Object.assign(toggleGroupFn, {
  __recipe__: false,
  __name__: 'toggleGroup',
  raw: (props) => props,
  variantKeys: toggleGroupVariantKeys,
  variantMap: {
  "variant": [
    "outline",
    "ghost"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, toggleGroupVariantKeys)
  },
})
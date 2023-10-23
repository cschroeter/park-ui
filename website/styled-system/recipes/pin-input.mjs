import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const pinInputDefaultVariants = {
  "size": "md"
}
const pinInputCompoundVariants = []

const pinInputSlotNames = [
  [
    "root",
    "pinInput__root"
  ],
  [
    "label",
    "pinInput__label"
  ],
  [
    "input",
    "pinInput__input"
  ],
  [
    "control",
    "pinInput__control"
  ]
]
const pinInputSlotFns = /* @__PURE__ */ pinInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, pinInputDefaultVariants, getSlotCompoundVariant(pinInputCompoundVariants, slotName))])

const pinInputFn = (props = {}) => {
  return Object.fromEntries(pinInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const pinInputVariantKeys = [
  "size"
]

export const pinInput = /* @__PURE__ */ Object.assign(pinInputFn, {
  __recipe__: false,
  __name__: 'pinInput',
  raw: (props) => props,
  variantKeys: pinInputVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, pinInputVariantKeys)
  },
})
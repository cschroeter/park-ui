import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const toastDefaultVariants = {}
const toastCompoundVariants = []

const toastSlotNames = [
  [
    "group",
    "toast__group"
  ],
  [
    "root",
    "toast__root"
  ],
  [
    "title",
    "toast__title"
  ],
  [
    "description",
    "toast__description"
  ],
  [
    "closeTrigger",
    "toast__closeTrigger"
  ]
]
const toastSlotFns = /* @__PURE__ */ toastSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toastDefaultVariants, getSlotCompoundVariant(toastCompoundVariants, slotName))])

const toastFn = (props = {}) => {
  return Object.fromEntries(toastSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const toastVariantKeys = []

export const toast = /* @__PURE__ */ Object.assign(toastFn, {
  __recipe__: false,
  __name__: 'toast',
  raw: (props) => props,
  variantKeys: toastVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, toastVariantKeys)
  },
})
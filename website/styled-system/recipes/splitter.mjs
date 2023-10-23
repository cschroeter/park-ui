import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const splitterDefaultVariants = {}
const splitterCompoundVariants = []

const splitterSlotNames = [
  [
    "root",
    "splitter__root"
  ],
  [
    "panel",
    "splitter__panel"
  ],
  [
    "resizeTrigger",
    "splitter__resizeTrigger"
  ]
]
const splitterSlotFns = /* @__PURE__ */ splitterSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, splitterDefaultVariants, getSlotCompoundVariant(splitterCompoundVariants, slotName))])

const splitterFn = (props = {}) => {
  return Object.fromEntries(splitterSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const splitterVariantKeys = []

export const splitter = /* @__PURE__ */ Object.assign(splitterFn, {
  __recipe__: false,
  __name__: 'splitter',
  raw: (props) => props,
  variantKeys: splitterVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, splitterVariantKeys)
  },
})
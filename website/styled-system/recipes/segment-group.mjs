import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const segmentGroupDefaultVariants = {
  "size": "md"
}
const segmentGroupCompoundVariants = []

const segmentGroupSlotNames = [
  [
    "root",
    "segmentGroup__root"
  ],
  [
    "label",
    "segmentGroup__label"
  ],
  [
    "radio",
    "segmentGroup__radio"
  ],
  [
    "radioLabel",
    "segmentGroup__radioLabel"
  ],
  [
    "radioControl",
    "segmentGroup__radioControl"
  ],
  [
    "indicator",
    "segmentGroup__indicator"
  ]
]
const segmentGroupSlotFns = /* @__PURE__ */ segmentGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, segmentGroupDefaultVariants, getSlotCompoundVariant(segmentGroupCompoundVariants, slotName))])

const segmentGroupFn = (props = {}) => {
  return Object.fromEntries(segmentGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const segmentGroupVariantKeys = [
  "size"
]

export const segmentGroup = /* @__PURE__ */ Object.assign(segmentGroupFn, {
  __recipe__: false,
  __name__: 'segmentGroup',
  raw: (props) => props,
  variantKeys: segmentGroupVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, segmentGroupVariantKeys)
  },
})
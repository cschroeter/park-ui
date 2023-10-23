import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const rangeSliderDefaultVariants = {
  "size": "md"
}
const rangeSliderCompoundVariants = []

const rangeSliderSlotNames = [
  [
    "root",
    "range-slider__root"
  ],
  [
    "label",
    "range-slider__label"
  ],
  [
    "thumb",
    "range-slider__thumb"
  ],
  [
    "output",
    "range-slider__output"
  ],
  [
    "track",
    "range-slider__track"
  ],
  [
    "range",
    "range-slider__range"
  ],
  [
    "control",
    "range-slider__control"
  ],
  [
    "markerGroup",
    "range-slider__markerGroup"
  ],
  [
    "marker",
    "range-slider__marker"
  ]
]
const rangeSliderSlotFns = /* @__PURE__ */ rangeSliderSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, rangeSliderDefaultVariants, getSlotCompoundVariant(rangeSliderCompoundVariants, slotName))])

const rangeSliderFn = (props = {}) => {
  return Object.fromEntries(rangeSliderSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const rangeSliderVariantKeys = [
  "size"
]

export const rangeSlider = /* @__PURE__ */ Object.assign(rangeSliderFn, {
  __recipe__: false,
  __name__: 'rangeSlider',
  raw: (props) => props,
  variantKeys: rangeSliderVariantKeys,
  variantMap: {
  "size": [
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, rangeSliderVariantKeys)
  },
})
import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const datePickerDefaultVariants = {}
const datePickerCompoundVariants = []

const datePickerSlotNames = [
  [
    "cellTrigger",
    "datePicker__cellTrigger"
  ],
  [
    "clearTrigger",
    "datePicker__clearTrigger"
  ],
  [
    "content",
    "datePicker__content"
  ],
  [
    "control",
    "datePicker__control"
  ],
  [
    "grid",
    "datePicker__grid"
  ],
  [
    "input",
    "datePicker__input"
  ],
  [
    "monthSelect",
    "datePicker__monthSelect"
  ],
  [
    "nextTrigger",
    "datePicker__nextTrigger"
  ],
  [
    "positioner",
    "datePicker__positioner"
  ],
  [
    "prevTrigger",
    "datePicker__prevTrigger"
  ],
  [
    "rowHeader",
    "datePicker__rowHeader"
  ],
  [
    "trigger",
    "datePicker__trigger"
  ],
  [
    "viewTrigger",
    "datePicker__viewTrigger"
  ],
  [
    "yearSelect",
    "datePicker__yearSelect"
  ],
  [
    "row",
    "datePicker__row"
  ],
  [
    "rowGroup",
    "datePicker__rowGroup"
  ],
  [
    "columnHeader",
    "datePicker__columnHeader"
  ]
]
const datePickerSlotFns = /* @__PURE__ */ datePickerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, datePickerDefaultVariants, getSlotCompoundVariant(datePickerCompoundVariants, slotName))])

const datePickerFn = (props = {}) => {
  return Object.fromEntries(datePickerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const datePickerVariantKeys = []

export const datePicker = /* @__PURE__ */ Object.assign(datePickerFn, {
  __recipe__: false,
  __name__: 'datePicker',
  raw: (props) => props,
  variantKeys: datePickerVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, datePickerVariantKeys)
  },
})
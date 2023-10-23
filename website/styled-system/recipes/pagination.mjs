import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const paginationDefaultVariants = {}
const paginationCompoundVariants = []

const paginationSlotNames = [
  [
    "root",
    "pagination__root"
  ],
  [
    "pageTrigger",
    "pagination__pageTrigger"
  ],
  [
    "ellipsis",
    "pagination__ellipsis"
  ],
  [
    "prevPageTrigger",
    "pagination__prevPageTrigger"
  ],
  [
    "nextPageTrigger",
    "pagination__nextPageTrigger"
  ],
  [
    "list",
    "pagination__list"
  ],
  [
    "listItem",
    "pagination__listItem"
  ]
]
const paginationSlotFns = /* @__PURE__ */ paginationSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, paginationDefaultVariants, getSlotCompoundVariant(paginationCompoundVariants, slotName))])

const paginationFn = (props = {}) => {
  return Object.fromEntries(paginationSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const paginationVariantKeys = []

export const pagination = /* @__PURE__ */ Object.assign(paginationFn, {
  __recipe__: false,
  __name__: 'pagination',
  raw: (props) => props,
  variantKeys: paginationVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, paginationVariantKeys)
  },
})
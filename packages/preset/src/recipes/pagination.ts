import { defineSlotRecipe } from '@pandacss/dev'

export const pagination = defineSlotRecipe({
  className: 'pagination',
  slots: ['root', 'item', 'ellipsis'],
  base: {
    root: {
      display: 'flex',
      gap: '2.5',
    },
    item: {
      fontVariantNumeric: 'tabular-nums',
    },
    ellipsis: {
      alignItems: 'center',
      color: 'fg.default',
      display: 'inline-flex',
      fontWeight: 'semibold',
      px: '2',
    },
  },
})

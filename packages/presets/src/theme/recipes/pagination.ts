import { paginationAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const pagination = defineSlotRecipe({
  className: 'pagination',
  description: 'A pagination style',
  slots: paginationAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '4',
    },
    list: {
      display: 'flex',
      gap: '2',
    },
    pageTrigger: {
      fontVariantNumeric: 'tabular-nums',
    },
    ellipsis: {
      alignItems: 'center',
      color: 'fg.emphasized',
      display: 'inline-flex',
      fontWeight: 'semibold',
      px: '2',
    },
  },
})

import { paginationAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(paginationAnatomy.build())

export const pagination = defineRecipe({
  className: 'pagination',
  description: 'A pagination style',
  base: parts({
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
  }),
})

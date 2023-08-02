import { editableAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(editableAnatomy.build())

export const editable = defineRecipe({
  className: 'editable',
  description: 'An editable style',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: '100%',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
  }),
})

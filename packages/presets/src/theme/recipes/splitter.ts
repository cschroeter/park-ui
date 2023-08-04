import { splitterAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(splitterAnatomy.build())

export const splitter = defineRecipe({
  className: 'splitter',
  description: 'A splitter style',
  base: parts({
    root: {
      display: 'flex',
      gap: '2',
    },
    panel: {
      borderWidth: '1px',
      background: 'bg.subtle',
      borderRadius: 'sm',
      color: 'fg.muted',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    resizeTrigger: {
      borderRadius: 'full',
      transitionDuration: 'normal',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'default',
      outline: '0',
      background: 'bg.muted',
      _hover: {
        background: 'bg.emphasized',
      },
      _active: {
        background: 'bg.emphasized',
      },
      _horizontal: {
        minWidth: '6px',
        margin: 'min(1rem, 20%) 0',
      },
      _vertical: {
        minHeight: '6px',
        margin: '0 min(1rem, 20%)',
      },
    },
  }),
})

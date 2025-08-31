import { defineLayerStyles } from '@pandacss/dev'

export const layerStyles = defineLayerStyles({
  disabled: {
    value: {
      color: 'gray.9',
      background: 'gray.5',
      _hover: {
        color: 'gray.9',
        background: 'gray.5',
      },
    },
  },
})

import { defineLayerStyles } from '@pandacss/dev'

export const layerStyles = defineLayerStyles({
  disabled: {
    value: {
      cursor: 'not-allowed',
      opacity: '0.67',
      filter: 'grayscale(100%)',
    },
  },
})

import { progressAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const progress = defineSlotRecipe({
  className: 'progress',
  slots: progressAnatomy.keys(),
  base: {
    root: {
      colorPalette: 'accent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5',
    },
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
    },
    circleTrack: {
      stroke: 'bg.subtle',
    },
    circleRange: {
      stroke: 'colorPalette.default',
    },
  },
})

import { progressAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const progressCircle = defineSlotRecipe({
  className: 'progress-circle',
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
    circle: {
      '--size': '120px',
      '--thickness': '12px',
    },
    circleTrack: {
      stroke: 'bg.subtle',
    },
    circleRange: {
      stroke: 'colorPalette.default',
      transitionProperty: 'stroke-dasharray, stroke',
      transitionDuration: '0.6s',
    },
  },
})

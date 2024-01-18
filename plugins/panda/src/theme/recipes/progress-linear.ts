import { progressAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const progressLinear = defineSlotRecipe({
  className: 'progress-linear',
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
    track: {
      width: '100%',
      height: '20px',
      borderRadius: 'l1',
      borderWidth: '1px',
      stroke: 'bg.subtle',
      overflow: 'hidden',
    },
    range: {
      height: '100%',
      backgroundColor: 'colorPalette.default',
      transition: 'width 0.2s ease-in-out',
      '--translate-x': '-100%',
    },
  },
})

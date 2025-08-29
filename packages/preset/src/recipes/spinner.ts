import { defineRecipe } from '@pandacss/dev'

export const spinner = defineRecipe({
  className: 'spinner',
  base: {
    '--spinner-track-color': 'transparent',
    animation: 'spin',
    animationDuration: 'slowest',
    borderBottomColor: 'var(--spinner-track-color)',
    borderColor: 'currentColor',
    borderInlineStartColor: 'var(--spinner-track-color)',
    borderRadius: 'full',
    borderStyle: 'solid',
    borderWidth: '2px',
    display: 'inline-block',
    height: 'var(--spinner-size)',
    width: 'var(--spinner-size)',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      inherit: { '--spinner-size': '1em' },
      xs: { '--spinner-size': 'sizes.3' },
      sm: { '--spinner-size': 'sizes.4' },
      md: { '--spinner-size': 'sizes.5' },
      lg: { '--spinner-size': 'sizes.6' },
      xl: { '--spinner-size': 'sizes.7' },
      '2xl': { '--spinner-size': 'sizes.8' },
    },
  },
})

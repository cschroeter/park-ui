import { defineRecipe } from '@pandacss/dev'

export const skeleton = defineRecipe({
  className: 'skeleton',
  jsx: ['Skeleton', 'SkeletonCircle', 'SkeletonText'],
  base: {},
  variants: {
    loading: {
      true: {
        borderRadius: 'l2',
        boxShadow: 'none',
        backgroundClip: 'padding-box',
        cursor: 'default',
        color: 'transparent',
        pointerEvents: 'none',
        userSelect: 'none',
        flexShrink: '0',
        '&::before, &::after, *': {
          visibility: 'hidden',
        },
      },
      false: {
        background: 'unset',
        animation: 'fade-in var(--fade-duration, 0.1s) ease-out !important',
      },
    },

    circle: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
        borderRadius: '9999px',
      },
    },

    variant: {
      pulse: {
        background: 'gray.subtle.bg.active',
        animation: 'pulse',
        animationDuration: 'var(--duration, 1.2s)',
      },
      shine: {
        '--animate-from': '200%',
        '--animate-to': '-200%',
        '--start-color': 'colors.gray.subtle.bg',
        '--end-color': 'colors.gray.subtle.bg.active',
        backgroundImage:
          'linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))',
        backgroundSize: '400% 100%',
        animation: 'bg-position var(--duration, 5s) ease-in-out infinite',
      },
      none: {
        animation: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'pulse',
    loading: true,
  },
})

import { defineRecipe } from '@pandacss/dev'

export const skeleton = defineRecipe({
  className: 'skeleton',
  base: {
    animation: 'skeleton',
    backgroundImage: {
      base: 'linear-gradient(90deg, {colors.gray.a4} 8%, {colors.gray.a3} 22%, {colors.gray.a4} 36%)',
      _dark:
        'linear-gradient(90deg, {colors.gray.a3} 8%, {colors.gray.a4} 22%, {colors.gray.a3} 36%)',
    },
    backgroundSize: '200% 100%',
    backgroundClip: 'padding-box',
    borderRadius: 'l3',
    color: 'transparent',
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    '&::before, &::after, *': {
      visibility: 'hidden',
    },
  },
})

import { defineRecipe } from '@pandacss/dev'

export const skeleton = defineRecipe({
  className: 'skeleton',
  base: {
    bg: 'bg.muted',
    borderRadius: 'full',
    animation: 'pulse 2s ease-in-out infinite',
  },
})

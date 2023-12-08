import { defineRecipe } from '@pandacss/dev'

export const heading = defineRecipe({
  className: 'heading',
  base: {
    color: 'fg.default',
    fontWeight: 'semibold',
    textStyle: 'xl',
  },
})

import { defineRecipe } from '@pandacss/dev'

export const alert = defineRecipe({
  className: 'alert',
  description: 'An alert style',
  base: {
    background: 'bg.default',
    borderRadius: 'lg',
    borderWidth: '1px',
    p: '4',
    textStyle: 'sm',
    width: 'full',
  },
})

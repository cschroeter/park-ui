import { defineRecipe } from '@pandacss/dev'

export const inputAddon = defineRecipe({
  className: 'input-addon',
  base: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 'l2',
    color: 'fg.muted',
    display: 'flex',
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    width: 'auto',
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        borderWidth: '1px',
        borderColor: 'gray.outline.border',
      },
      surface: {
        bg: 'gray.surface.bg',
        borderWidth: '1px',
        borderColor: 'gray.surface.border',
      },
      subtle: {
        bg: 'gray.subtle.bg',
      },
    },
    size: {
      xs: { textStyle: 'sm', px: '2', _icon: { boxSize: '4' } },
      sm: { textStyle: 'sm', px: '2.5', _icon: { boxSize: '4.5' } },
      md: { textStyle: 'md', px: '3', _icon: { boxSize: '5' } },
      lg: { textStyle: 'md', px: '3.5', _icon: { boxSize: '5' } },
      xl: { textStyle: 'lg', px: '4', _icon: { boxSize: '5.5' } },
    },
  },
})

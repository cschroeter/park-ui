import { defineSlotRecipe } from '@pandacss/dev'

export const breadcrumb = defineSlotRecipe({
  className: 'breadcrumb',
  slots: ['root', 'list', 'item', 'link', 'separator'],
  base: {
    root: {
      color: 'fg.default',
      colorPalette: 'accent',
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        textDecoration: 'underline',
      },
      '&.active': {
        color: 'colorPalette.default',
      },
    },
    separator: {
      marginInline: '0.5rem',
    },
  },
})

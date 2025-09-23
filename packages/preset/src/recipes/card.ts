import { defineSlotRecipe } from '@pandacss/dev'

export const card = defineSlotRecipe({
  className: 'card',
  slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
  base: {
    root: {
      borderRadius: 'l3',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      p: '6',
    },
    body: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      pb: '6',
      px: '6',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      pb: '6',
      pt: '2',
      px: '6',
    },
    title: {
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      textStyle: 'sm',
    },
  },
  defaultVariants: {
    variant: 'surface',
  },
  variants: {
    variant: {
      surface: {
        root: {
          layerStyle: 'surface',
        },
      },
    },
  },
})

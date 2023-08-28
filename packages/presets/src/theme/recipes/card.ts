import { defineSlotRecipe } from '@pandacss/dev'

export const card = defineSlotRecipe({
  className: 'card',
  description: 'An card style',
  slots: ['root', 'header', 'content', 'footer', 'title', 'description'],
  base: {
    root: {
      bg: 'bg.default',
      borderRadius: 'l3',
      borderWidth: '1px',
      boxShadow: 'xs',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      p: '6',
    },
    content: {
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
      color: 'fg.muted',
      textStyle: 'sm',
    },
  },
})

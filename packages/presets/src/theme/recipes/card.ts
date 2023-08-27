import { defineSlotRecipe } from '@pandacss/dev'

export const card = defineSlotRecipe({
  className: 'card',
  description: 'An card style',
  slots: ['root', 'header', 'content', 'footer', 'title', 'description'],
  base: {
    root: {
      borderRadius: 'l3',
      borderWidth: '1px',
      bg: 'bg.default',
      boxShadow: 'xs',
    },
    header: {
      p: '6',
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
    },
    content: {
      px: '6',
      pb: '6',
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      pt: '2',
      px: '6',
      pb: '6',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '3',
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

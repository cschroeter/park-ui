import { tv } from 'tailwind-variants'

export const alertStyles = tv({
  base: 'alert',
  slots: {
    root: 'alert__root',
    content: 'alert__content',
    description: 'alert__description',
    icon: 'alert__icon',
    title: 'alert__title',
  },
  variants: {},
})

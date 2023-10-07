import { tv } from 'tailwind-variants'

export const cardStyles = tv({
  base: 'card',
  slots: {
    root: 'card__root',
    header: 'card__header',
    content: 'card__content',
    footer: 'card__footer',
    title: 'card__title',
    description: 'card__description',
  },
  variants: {},
})

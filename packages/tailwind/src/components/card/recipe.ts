import { tv } from 'tailwind-variants'

export const cardStyles = tv({
  base: 'card',
  slots: {
    root: 'card__root',
    header: 'card__header',
    body: 'card__body',
    footer: 'card__footer',
    title: 'card__title',
    description: 'card__description',
  },
  variants: {},
})

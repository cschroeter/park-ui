import { tv } from 'tailwind-variants'

export const hoverCardStyles = tv({
  base: 'hoverCard',
  slots: {
    arrow: 'hoverCard__arrow',
    arrowTip: 'hoverCard__arrowTip',
    trigger: 'hoverCard__trigger',
    positioner: 'hoverCard__positioner',
    content: 'hoverCard__content',
  },
  variants: {},
})

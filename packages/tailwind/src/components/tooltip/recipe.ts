import { tv } from 'tailwind-variants'

export const tooltipStyles = tv({
  base: 'tooltip',
  slots: {
    trigger: 'tooltip__trigger',
    arrow: 'tooltip__arrow',
    arrowTip: 'tooltip__arrowTip',
    positioner: 'tooltip__positioner',
    content: 'tooltip__content',
  },
  variants: {},
})

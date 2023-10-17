import { tv } from 'tailwind-variants'

export const popoverStyles = tv({
  base: 'popover',
  slots: {
    arrow: 'popover__arrow',
    arrowTip: 'popover__arrowTip',
    anchor: 'popover__anchor',
    trigger: 'popover__trigger',
    positioner: 'popover__positioner',
    content: 'popover__content',
    title: 'popover__title',
    description: 'popover__description',
    closeTrigger: 'popover__closeTrigger',
  },
  variants: {},
})

import { tv } from 'tailwind-variants'

export const drawerStyles = tv({
  base: 'drawer',
  defaultVariants: {
    placement: 'right',
  },
  slots: {
    trigger: 'drawer__trigger',
    backdrop: 'drawer__backdrop',
    container: 'drawer__container',
    content: 'drawer__content',
    title: 'drawer__title',
    description: 'drawer__description',
    closeTrigger: 'drawer__closeTrigger',
    header: 'drawer__header',
    body: 'drawer__body',
    footer: 'drawer__footer',
  },
  variants: {
    placement: {
      left: {
        trigger: 'drawer__trigger--placement_left',
        backdrop: 'drawer__backdrop--placement_left',
        container: 'drawer__container--placement_left',
        content: 'drawer__content--placement_left',
        title: 'drawer__title--placement_left',
        description: 'drawer__description--placement_left',
        closeTrigger: 'drawer__closeTrigger--placement_left',
        header: 'drawer__header--placement_left',
        body: 'drawer__body--placement_left',
        footer: 'drawer__footer--placement_left',
      },
      right: {
        trigger: 'drawer__trigger--placement_right',
        backdrop: 'drawer__backdrop--placement_right',
        container: 'drawer__container--placement_right',
        content: 'drawer__content--placement_right',
        title: 'drawer__title--placement_right',
        description: 'drawer__description--placement_right',
        closeTrigger: 'drawer__closeTrigger--placement_right',
        header: 'drawer__header--placement_right',
        body: 'drawer__body--placement_right',
        footer: 'drawer__footer--placement_right',
      },
    },
  },
})

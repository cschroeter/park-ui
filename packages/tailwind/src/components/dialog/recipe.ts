import { tv } from 'tailwind-variants'

export const dialogStyles = tv({
  base: 'dialog',
  slots: {
    trigger: 'dialog__trigger',
    backdrop: 'dialog__backdrop',
    container: 'dialog__container',
    content: 'dialog__content',
    title: 'dialog__title',
    description: 'dialog__description',
    closeTrigger: 'dialog__closeTrigger',
  },
  variants: {},
})

import { tv } from 'tailwind-variants'

export const toastStyles = tv({
  base: 'toast',
  slots: {
    group: 'toast__group',
    root: 'toast__root',
    title: 'toast__title',
    description: 'toast__description',
    closeTrigger: 'toast__closeTrigger',
  },
  variants: {},
})

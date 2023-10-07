import { tv } from 'tailwind-variants'

export const editableStyles = tv({
  base: 'editable',
  slots: {
    root: 'editable__root',
    area: 'editable__area',
    label: 'editable__label',
    preview: 'editable__preview',
    input: 'editable__input',
    editTrigger: 'editable__editTrigger',
    submitTrigger: 'editable__submitTrigger',
    cancelTrigger: 'editable__cancelTrigger',
    control: 'editable__control',
  },
  variants: {},
})

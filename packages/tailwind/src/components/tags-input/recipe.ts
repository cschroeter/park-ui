import { tv } from 'tailwind-variants'

export const tagsInputStyles = tv({
  base: 'tagsInput',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'tagsInput__root',
    label: 'tagsInput__label',
    control: 'tagsInput__control',
    input: 'tagsInput__input',
    clearTrigger: 'tagsInput__clearTrigger',
    tag: 'tagsInput__tag',
    tagInput: 'tagsInput__tagInput',
    tagDeleteTrigger: 'tagsInput__tagDeleteTrigger',
  },
  variants: {
    size: {
      md: {
        root: 'tagsInput__root--size_md',
        label: 'tagsInput__label--size_md',
        control: 'tagsInput__control--size_md',
        input: 'tagsInput__input--size_md',
        clearTrigger: 'tagsInput__clearTrigger--size_md',
        tag: 'tagsInput__tag--size_md',
        tagInput: 'tagsInput__tagInput--size_md',
        tagDeleteTrigger: 'tagsInput__tagDeleteTrigger--size_md',
      },
    },
  },
})

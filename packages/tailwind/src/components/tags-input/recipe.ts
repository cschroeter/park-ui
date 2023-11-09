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
    item: 'tagsInput__item',
    itemInput: 'tagsInput__itemInput',
    itemText: 'tagsInput__itemText',
    itemDeleteTrigger: 'tagsInput__itemDeleteTrigger',
  },
  variants: {
    size: {
      md: {
        root: 'tagsInput__root--size_md',
        label: 'tagsInput__label--size_md',
        control: 'tagsInput__control--size_md',
        input: 'tagsInput__input--size_md',
        clearTrigger: 'tagsInput__clearTrigger--size_md',
        item: 'tagsInput__item--size_md',
        itemInput: 'tagsInput__itemInput--size_md',
        itemText: 'tagsInput__itemText--size_md',
        itemDeleteTrigger: 'tagsInput__itemDeleteTrigger--size_md',
      },
    },
  },
})

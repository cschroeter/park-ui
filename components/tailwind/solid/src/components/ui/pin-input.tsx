import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'pinInput',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'pinInput__root',
    label: 'pinInput__label',
    input: 'pinInput__input',
    control: 'pinInput__control',
  },
  variants: {
    size: {
      xs: {
        root: 'pinInput__root--size_xs',
        label: 'pinInput__label--size_xs',
        input: 'pinInput__input--size_xs',
        control: 'pinInput__control--size_xs',
      },
      sm: {
        root: 'pinInput__root--size_sm',
        label: 'pinInput__label--size_sm',
        input: 'pinInput__input--size_sm',
        control: 'pinInput__control--size_sm',
      },
      md: {
        root: 'pinInput__root--size_md',
        label: 'pinInput__label--size_md',
        input: 'pinInput__input--size_md',
        control: 'pinInput__control--size_md',
      },
      lg: {
        root: 'pinInput__root--size_lg',
        label: 'pinInput__label--size_lg',
        input: 'pinInput__input--size_lg',
        control: 'pinInput__control--size_lg',
      },
      xl: {
        root: 'pinInput__root--size_xl',
        label: 'pinInput__label--size_xl',
        input: 'pinInput__input--size_xl',
        control: 'pinInput__control--size_xl',
      },
      '2xl': {
        root: 'pinInput__root--size_2xl',
        label: 'pinInput__label--size_2xl',
        input: 'pinInput__input--size_2xl',
        control: 'pinInput__control--size_2xl',
      },
    },
  },
})

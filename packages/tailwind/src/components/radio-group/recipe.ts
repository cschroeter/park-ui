import { tv } from 'tailwind-variants'

export const radioGroupStyles = tv({
  base: 'radioGroup',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'radioGroup__root',
    label: 'radioGroup__label',
    radio: 'radioGroup__radio',
    radioLabel: 'radioGroup__radioLabel',
    radioControl: 'radioGroup__radioControl',
    indicator: 'radioGroup__indicator',
  },
  variants: {
    size: {
      sm: {
        root: 'radioGroup__root--size_sm',
        label: 'radioGroup__label--size_sm',
        radio: 'radioGroup__radio--size_sm',
        radioLabel: 'radioGroup__radioLabel--size_sm',
        radioControl: 'radioGroup__radioControl--size_sm',
        indicator: 'radioGroup__indicator--size_sm',
      },
      md: {
        root: 'radioGroup__root--size_md',
        label: 'radioGroup__label--size_md',
        radio: 'radioGroup__radio--size_md',
        radioLabel: 'radioGroup__radioLabel--size_md',
        radioControl: 'radioGroup__radioControl--size_md',
        indicator: 'radioGroup__indicator--size_md',
      },
      lg: {
        root: 'radioGroup__root--size_lg',
        label: 'radioGroup__label--size_lg',
        radio: 'radioGroup__radio--size_lg',
        radioLabel: 'radioGroup__radioLabel--size_lg',
        radioControl: 'radioGroup__radioControl--size_lg',
        indicator: 'radioGroup__indicator--size_lg',
      },
    },
  },
})

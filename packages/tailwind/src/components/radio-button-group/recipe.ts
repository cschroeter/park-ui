import { tv } from 'tailwind-variants'

export const radioButtonGroupStyles = tv({
  base: 'radioButtonGroup',
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
  slots: {
    root: 'radioButtonGroup__root',
    label: 'radioButtonGroup__label',
    radio: 'radioButtonGroup__radio',
    radioLabel: 'radioButtonGroup__radioLabel',
    radioControl: 'radioButtonGroup__radioControl',
    indicator: 'radioButtonGroup__indicator',
  },
  variants: {
    variant: {
      solid: {
        root: 'radioButtonGroup__root--variant_solid',
        label: 'radioButtonGroup__label--variant_solid',
        radio: 'radioButtonGroup__radio--variant_solid',
        radioLabel: 'radioButtonGroup__radioLabel--variant_solid',
        radioControl: 'radioButtonGroup__radioControl--variant_solid',
        indicator: 'radioButtonGroup__indicator--variant_solid',
      },
      outline: {
        root: 'radioButtonGroup__root--variant_outline',
        label: 'radioButtonGroup__label--variant_outline',
        radio: 'radioButtonGroup__radio--variant_outline',
        radioLabel: 'radioButtonGroup__radioLabel--variant_outline',
        radioControl: 'radioButtonGroup__radioControl--variant_outline',
        indicator: 'radioButtonGroup__indicator--variant_outline',
      },
    },
    size: {
      sm: {
        root: 'radioButtonGroup__root--size_sm',
        label: 'radioButtonGroup__label--size_sm',
        radio: 'radioButtonGroup__radio--size_sm',
        radioLabel: 'radioButtonGroup__radioLabel--size_sm',
        radioControl: 'radioButtonGroup__radioControl--size_sm',
        indicator: 'radioButtonGroup__indicator--size_sm',
      },
      md: {
        root: 'radioButtonGroup__root--size_md',
        label: 'radioButtonGroup__label--size_md',
        radio: 'radioButtonGroup__radio--size_md',
        radioLabel: 'radioButtonGroup__radioLabel--size_md',
        radioControl: 'radioButtonGroup__radioControl--size_md',
        indicator: 'radioButtonGroup__indicator--size_md',
      },
      lg: {
        root: 'radioButtonGroup__root--size_lg',
        label: 'radioButtonGroup__label--size_lg',
        radio: 'radioButtonGroup__radio--size_lg',
        radioLabel: 'radioButtonGroup__radioLabel--size_lg',
        radioControl: 'radioButtonGroup__radioControl--size_lg',
        indicator: 'radioButtonGroup__indicator--size_lg',
      },
      xl: {
        root: 'radioButtonGroup__root--size_xl',
        label: 'radioButtonGroup__label--size_xl',
        radio: 'radioButtonGroup__radio--size_xl',
        radioLabel: 'radioButtonGroup__radioLabel--size_xl',
        radioControl: 'radioButtonGroup__radioControl--size_xl',
        indicator: 'radioButtonGroup__indicator--size_xl',
      },
    },
  },
})

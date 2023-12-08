import { Checkbox as ArkCheckbox } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'checkbox',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'checkbox__root',
    label: 'checkbox__label',
    control: 'checkbox__control',
    indicator: 'checkbox__indicator',
  },
  variants: {
    size: {
      sm: {
        root: 'checkbox__root--size_sm',
        label: 'checkbox__label--size_sm',
        control: 'checkbox__control--size_sm',
        indicator: 'checkbox__indicator--size_sm',
      },
      md: {
        root: 'checkbox__root--size_md',
        label: 'checkbox__label--size_md',
        control: 'checkbox__control--size_md',
        indicator: 'checkbox__indicator--size_md',
      },
      lg: {
        root: 'checkbox__root--size_lg',
        label: 'checkbox__label--size_lg',
        control: 'checkbox__control--size_lg',
        indicator: 'checkbox__indicator--size_lg',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

export const CheckboxRoot = withProvider(ArkCheckbox.Root, 'root')
export const CheckboxControl = withContext(ArkCheckbox.Control, 'control')
export const CheckboxIndicator = withContext(ArkCheckbox.Indicator, 'indicator')
export const CheckboxLabel = withContext(ArkCheckbox.Label, 'label')

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
})

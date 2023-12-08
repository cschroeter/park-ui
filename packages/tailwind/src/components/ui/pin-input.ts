import { PinInput as ArkPinInput } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

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
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

export const PinInputRoot = withProvider(ArkPinInput.Root, 'root')
export const PinInputControl = withContext(ArkPinInput.Control, 'control')
export const PinInputInput = withContext(ArkPinInput.Input, 'input')
export const PinInputLabel = withContext(ArkPinInput.Label, 'label')

export const PinInput = Object.assign(PinInputRoot, {
  Root: PinInputRoot,
  Control: PinInputControl,
  Input: PinInputInput,
  Label: PinInputLabel,
})

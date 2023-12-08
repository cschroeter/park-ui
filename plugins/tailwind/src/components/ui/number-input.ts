import { NumberInput as ArkNumberInput } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'numberInput',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'numberInput__root',
    label: 'numberInput__label',
    input: 'numberInput__input',
    control: 'numberInput__control',
    incrementTrigger: 'numberInput__incrementTrigger',
    decrementTrigger: 'numberInput__decrementTrigger',
    scrubber: 'numberInput__scrubber',
  },
  variants: {
    size: {
      md: {
        root: 'numberInput__root--size_md',
        label: 'numberInput__label--size_md',
        input: 'numberInput__input--size_md',
        control: 'numberInput__control--size_md',
        incrementTrigger: 'numberInput__incrementTrigger--size_md',
        decrementTrigger: 'numberInput__decrementTrigger--size_md',
        scrubber: 'numberInput__scrubber--size_md',
      },
      lg: {
        root: 'numberInput__root--size_lg',
        label: 'numberInput__label--size_lg',
        input: 'numberInput__input--size_lg',
        control: 'numberInput__control--size_lg',
        incrementTrigger: 'numberInput__incrementTrigger--size_lg',
        decrementTrigger: 'numberInput__decrementTrigger--size_lg',
        scrubber: 'numberInput__scrubber--size_lg',
      },
      xl: {
        root: 'numberInput__root--size_xl',
        label: 'numberInput__label--size_xl',
        input: 'numberInput__input--size_xl',
        control: 'numberInput__control--size_xl',
        incrementTrigger: 'numberInput__incrementTrigger--size_xl',
        decrementTrigger: 'numberInput__decrementTrigger--size_xl',
        scrubber: 'numberInput__scrubber--size_xl',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

export const NumberInputRoot = withProvider(ArkNumberInput.Root, 'root')
export const NumberInputControl = withContext(ArkNumberInput.Control, 'control')
export const NumberInputDecrementTrigger = withContext(
  ArkNumberInput.DecrementTrigger,
  'decrementTrigger',
)
export const NumberInputIncrementTrigger = withContext(
  ArkNumberInput.IncrementTrigger,
  'incrementTrigger',
)
export const NumberInputInput = withContext(ArkNumberInput.Input, 'input')
export const NumberInputLabel = withContext(ArkNumberInput.Label, 'label')
export const NumberInputScrubber = withContext(ArkNumberInput.Scrubber, 'scrubber')

export const NumberInput = Object.assign(NumberInputRoot, {
  Root: NumberInputRoot,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Label: NumberInputLabel,
  Scrubber: NumberInputScrubber,
})

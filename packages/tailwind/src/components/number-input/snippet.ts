import * as Ark from '@ark-ui/react/number-input'
import { createStyleContext } from '~/lib/create-style-context'
import { numberInputStyles } from './recipe'
export * from '@ark-ui/react/number-input'

export type NumberInputProps = React.ComponentProps<typeof NumberInput>

const { withProvider, withContext } = createStyleContext(numberInputStyles)

const NumberInputRoot = withProvider(Ark.NumberInput.Root, 'root')
export const NumberInputControl = withContext(Ark.NumberInput.Control, 'control')
export const NumberInputDecrementTrigger = withContext(
  Ark.NumberInput.DecrementTrigger,
  'decrementTrigger',
)
export const NumberInputInput = withContext(Ark.NumberInput.Input, 'input')
export const NumberInputIncrementTrigger = withContext(
  Ark.NumberInput.IncrementTrigger,
  'incrementTrigger',
)
export const NumberInputLabel = withContext(Ark.NumberInput.Label, 'label')
export const NumberInputScrubber = withContext(Ark.NumberInput.Scrubber, 'scrubber')

export const NumberInput = Object.assign(NumberInputRoot, {
  Root: NumberInputRoot,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  Input: NumberInputInput,
  IncrementTrigger: NumberInputIncrementTrigger,
  Label: NumberInputLabel,
  Scrubber: NumberInputScrubber,
})

import * as Ark from '@ark-ui/solid/number-input'
import { styled } from 'styled-system/jsx'
import { numberInput, type NumberInputVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(numberInput)

export * from '@ark-ui/solid/number-input'
export type NumberInputProps = Ark.NumberInputProps & NumberInputVariantProps

const NumberInputRoot = withProvider(styled(Ark.NumberInput), 'root')
export const NumberInputControl = withContext(styled(Ark.NumberInputControl), 'control')
export const NumberInputDecrementTrigger = withContext(
  styled(Ark.NumberInputDecrementTrigger),
  'decrementTrigger',
)
export const NumberInputInput = withContext(styled(Ark.NumberInputField), 'input')
export const NumberInputIncrementTrigger = withContext(
  styled(Ark.NumberInputIncrementTrigger),
  'incrementTrigger',
)
export const NumberInputLabel = withContext(styled(Ark.NumberInputLabel), 'label')
export const NumberInputScrubber = withContext(styled(Ark.NumberInputScrubber), 'scrubber')

export const NumberInput = Object.assign(NumberInputRoot, {
  Root: NumberInputRoot,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  Input: NumberInputInput,
  IncrementTrigger: NumberInputIncrementTrigger,
  Label: NumberInputLabel,
  Scrubber: NumberInputScrubber,
})

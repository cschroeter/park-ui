import { NumberInput as ArkNumberInput } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { numberInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(numberInput)

export const NumberInputRoot = withProvider(styled(ArkNumberInput.Root), 'root')
export const NumberInputControl = withContext(styled(ArkNumberInput.Control), 'control')
export const NumberInputDecrementTrigger = withContext(
  styled(ArkNumberInput.DecrementTrigger),
  'decrementTrigger',
)
export const NumberInputIncrementTrigger = withContext(
  styled(ArkNumberInput.IncrementTrigger),
  'incrementTrigger',
)
export const NumberInputInput = withContext(styled(ArkNumberInput.Input), 'input')
export const NumberInputLabel = withContext(styled(ArkNumberInput.Label), 'label')
export const NumberInputScrubber = withContext(styled(ArkNumberInput.Scrubber), 'scrubber')

export const NumberInput = Object.assign(NumberInputRoot, {
  Root: NumberInputRoot,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Label: NumberInputLabel,
  Scrubber: NumberInputScrubber,
})

export type NumberInputProps = typeof NumberInputRoot
export type NumberInputControlProps = typeof NumberInputControl
export type NumberInputDecrementTriggerProps = typeof NumberInputDecrementTrigger
export type NumberInputIncrementTriggerProps = typeof NumberInputIncrementTrigger
export type NumberInputInputProps = typeof NumberInputInput
export type NumberInputLabelProps = typeof NumberInputLabel
export type NumberInputScrubberProps = typeof NumberInputScrubber

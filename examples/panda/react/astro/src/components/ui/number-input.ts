import { NumberInput as ArkNumberInput } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { numberInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(numberInput)

const NumberInput = withProvider(styled(ArkNumberInput.Root), 'root')
const NumberInputControl = withContext(styled(ArkNumberInput.Control), 'control')
const NumberInputDecrementTrigger = withContext(
  styled(ArkNumberInput.DecrementTrigger),
  'decrementTrigger',
)
const NumberInputIncrementTrigger = withContext(
  styled(ArkNumberInput.IncrementTrigger),
  'incrementTrigger',
)
const NumberInputInput = withContext(styled(ArkNumberInput.Input), 'input')
const NumberInputLabel = withContext(styled(ArkNumberInput.Label), 'label')
const NumberInputScrubber = withContext(styled(ArkNumberInput.Scrubber), 'scrubber')

const Root = NumberInput
const Control = NumberInputControl
const DecrementTrigger = NumberInputDecrementTrigger
const IncrementTrigger = NumberInputIncrementTrigger
const Input = NumberInputInput
const Label = NumberInputLabel
const Scrubber = NumberInputScrubber

export {
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input,
  Label,
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputScrubber,
  Root,
  Scrubber,
}

export interface NumberInputProps extends HTMLStyledProps<typeof NumberInput> {}
export interface NumberInputControlProps extends HTMLStyledProps<typeof NumberInputControl> {}
export interface NumberInputDecrementTriggerProps
  extends HTMLStyledProps<typeof NumberInputDecrementTrigger> {}
export interface NumberInputIncrementTriggerProps
  extends HTMLStyledProps<typeof NumberInputIncrementTrigger> {}
export interface NumberInputInputProps extends HTMLStyledProps<typeof NumberInputInput> {}
export interface NumberInputLabelProps extends HTMLStyledProps<typeof NumberInputLabel> {}
export interface NumberInputScrubberProps extends HTMLStyledProps<typeof NumberInputScrubber> {}

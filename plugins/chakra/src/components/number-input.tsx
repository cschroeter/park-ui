import { NumberInput as ArkNumberInput } from '@ark-ui/react/number-input'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('NumberInput')

const NumberInput = withProvider(chakra(ArkNumberInput.Root), 'root')
const NumberInputControl = withContext(chakra(ArkNumberInput.Control), 'control')
const NumberInputDecrementTrigger = withContext(
  chakra(ArkNumberInput.DecrementTrigger),
  'decrementTrigger',
)
const NumberInputIncrementTrigger = withContext(
  chakra(ArkNumberInput.IncrementTrigger),
  'incrementTrigger',
)
const NumberInputInput = withContext(chakra(ArkNumberInput.Input), 'input')
const NumberInputLabel = withContext(chakra(ArkNumberInput.Label), 'label')
const NumberInputScrubber = withContext(chakra(ArkNumberInput.Scrubber), 'scrubber')

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

export interface NumberInputProps extends HTMLChakraProps<typeof NumberInput> {}
export interface NumberInputControlProps extends HTMLChakraProps<typeof NumberInputControl> {}
export interface NumberInputDecrementTriggerProps
  extends HTMLChakraProps<typeof NumberInputDecrementTrigger> {}
export interface NumberInputIncrementTriggerProps
  extends HTMLChakraProps<typeof NumberInputIncrementTrigger> {}
export interface NumberInputInputProps extends HTMLChakraProps<typeof NumberInputInput> {}
export interface NumberInputLabelProps extends HTMLChakraProps<typeof NumberInputLabel> {}
export interface NumberInputScrubberProps extends HTMLChakraProps<typeof NumberInputScrubber> {}

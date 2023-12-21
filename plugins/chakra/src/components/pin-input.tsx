import { PinInput as ArkPinInput } from '@ark-ui/react/pin-input'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('PinInput')

const PinInput = withProvider(chakra(ArkPinInput.Root), 'root')
const PinInputControl = withContext(chakra(ArkPinInput.Control), 'control')
const PinInputInput = withContext(chakra(ArkPinInput.Input), 'input')
const PinInputLabel = withContext(chakra(ArkPinInput.Label), 'label')

const Root = PinInput
const Control = PinInputControl
const Input = PinInputInput
const Label = PinInputLabel

export { Control, Input, Label, PinInput, PinInputControl, PinInputInput, PinInputLabel, Root }

export interface PinInputProps extends HTMLChakraProps<typeof PinInput> {}
export interface PinInputControlProps extends HTMLChakraProps<typeof PinInputControl> {}
export interface PinInputInputProps extends HTMLChakraProps<typeof PinInputInput> {}
export interface PinInputLabelProps extends HTMLChakraProps<typeof PinInputLabel> {}

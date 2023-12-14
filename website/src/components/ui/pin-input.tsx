import { PinInput as ArkPinInput } from '@ark-ui/react/pin-input'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { pinInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pinInput)

const PinInput = withProvider(styled(ArkPinInput.Root), 'root')
const PinInputControl = withContext(styled(ArkPinInput.Control), 'control')
const PinInputInput = withContext(styled(ArkPinInput.Input), 'input')
const PinInputLabel = withContext(styled(ArkPinInput.Label), 'label')

const Root = PinInput
const Control = PinInputControl
const Input = PinInputInput
const Label = PinInputLabel

export { Control, Input, Label, PinInput, PinInputControl, PinInputInput, PinInputLabel, Root }

export interface PinInputProps extends HTMLStyledProps<typeof PinInput> {}
export interface PinInputControlProps extends HTMLStyledProps<typeof PinInputControl> {}
export interface PinInputInputProps extends HTMLStyledProps<typeof PinInputInput> {}
export interface PinInputLabelProps extends HTMLStyledProps<typeof PinInputLabel> {}

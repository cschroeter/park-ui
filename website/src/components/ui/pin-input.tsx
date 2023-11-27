import { PinInput as ArkPinInput } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { pinInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pinInput)

export const PinInputRoot = withProvider(styled(ArkPinInput.Root), 'root')
export const PinInputControl = withContext(styled(ArkPinInput.Control), 'control')
export const PinInputInput = withContext(styled(ArkPinInput.Input), 'input')
export const PinInputLabel = withContext(styled(ArkPinInput.Label), 'label')

export const PinInput = Object.assign(PinInputRoot, {
  Root: PinInputRoot,
  Control: PinInputControl,
  Input: PinInputInput,
  Label: PinInputLabel,
})

export type PinInputProps = typeof PinInputRoot
export type PinInputControlProps = typeof PinInputControl
export type PinInputInputProps = typeof PinInputInput
export type PinInputLabelProps = typeof PinInputLabel

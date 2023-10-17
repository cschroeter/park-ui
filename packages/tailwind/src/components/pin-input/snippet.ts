import * as Ark from '@ark-ui/react/pin-input'
import { createStyleContext } from '~/lib/create-style-context'
import { pinInputStyles } from './recipe'
export * from '@ark-ui/react/pin-input'

export type PinInputProps = React.ComponentProps<typeof PinInput>

const { withProvider, withContext } = createStyleContext(pinInputStyles)

const PinInputRoot = withProvider(Ark.PinInput.Root, 'root')
export const PinInputControl = withContext(Ark.PinInput.Control, 'control')
export const PinInputInput = withContext(Ark.PinInput.Input, 'input')
export const PinInputLabel = withContext(Ark.PinInput.Label, 'label')

export const PinInput = Object.assign(PinInputRoot, {
  Root: PinInputRoot,
  Control: PinInputControl,
  Input: PinInputInput,
  Label: PinInputLabel,
})

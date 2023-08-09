import * as Ark from '@ark-ui/react/pin-input'
import { styled } from 'styled-system/jsx'
import { pinInput, type PinInputVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/pin-input'

const { withProvider, withContext } = createStyleContext(pinInput)

export type PinInputProps = Ark.PinInputProps & PinInputVariantProps

const PinInputRoot = withProvider(styled(Ark.PinInput.Root), 'root')
const PinInputControl = withContext(styled(Ark.PinInput.Control), 'control')
const PinInputInput = withContext(styled(Ark.PinInput.Input), 'input')
const PinInputLabel = withContext(styled(Ark.PinInput.Label), 'label')

const PinInput = Object.assign(PinInputRoot, {
  Root: PinInputRoot,
  Control: PinInputControl,
  Input: PinInputInput,
  Label: PinInputLabel,
})

export { PinInput, PinInputControl, PinInputInput, PinInputLabel }

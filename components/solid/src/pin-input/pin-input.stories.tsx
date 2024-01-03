import type { Meta } from 'storybook-solidjs'
import { PinInput, type PinInputProps } from './pin-input'

const meta: Meta<PinInputProps> = {
  title: 'PinInput',
  component: PinInput,
}

export default meta

export const Base = () => (
  <PinInput placeholder="0" onValueComplete={(e) => alert(e.valueAsString)}>
    Label
  </PinInput>
)
export const CustomLength = () => (
  <PinInput length={6} placeholder="0" onValueComplete={(e) => alert(e.valueAsString)}>
    Label
  </PinInput>
)

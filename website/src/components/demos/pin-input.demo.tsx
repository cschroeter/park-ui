import { PinInput, type PinInputProps } from '~/components/ui/pin-input'

export const Demo = (props: PinInputProps) => (
  <PinInput placeholder="0" onValueComplete={(e) => alert(e.valueAsString)} {...props} />
)

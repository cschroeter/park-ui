import { Input } from '~/components/input'
import {
  PinInput,
  PinInputControl,
  PinInputField,
  type PinInputProps,
} from '~/components/pin-input'

export const PinInputDemo = (props: PinInputProps) => (
  <PinInput placeholder="0" onComplete={(e) => alert(e.valueAsString)}>
    <PinInputControl>
      {[0, 1, 2, 3].map((id, index) => (
        <PinInputField key={id} index={index} asChild>
          <Input size="xl" width="0" textAlign="center" />
        </PinInputField>
      ))}
    </PinInputControl>
  </PinInput>
)

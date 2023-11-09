import { Input } from '../input/snippet'
import { PinInput, type PinInputProps } from './snippet'

export const Demo = (props: PinInputProps) => (
  <PinInput.Root placeholder="0" onValueComplete={(e) => alert(e.valueAsString)}>
    <PinInput.Label>Pin Input</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2, 3].map((id, index) => (
        <PinInput.Input key={id} index={index} asChild>
          <Input size="lg" className="text-center w-0" />
        </PinInput.Input>
      ))}
    </PinInput.Control>
  </PinInput.Root>
)

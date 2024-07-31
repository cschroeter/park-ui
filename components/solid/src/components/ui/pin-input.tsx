import { Index, Show, children } from 'solid-js'
import { Input } from './input'
import * as StyledPinInput from './styled/pin-input'

export interface PinInputProps extends StyledPinInput.RootProps {
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
}

export const PinInput = (props: PinInputProps) => {
  const getChildren = children(() => props.children)

  return (
    <StyledPinInput.Root {...props}>
      <Show when={getChildren()}>
        <StyledPinInput.Label>{getChildren()}</StyledPinInput.Label>
      </Show>
      <StyledPinInput.Control>
        <Index each={Array.from({ length: props.length ?? 4 }, (_, index) => index)}>
          {(index) => (
            <StyledPinInput.Input
              index={index()}
              asChild={(inputProps) => <Input {...inputProps()} size={props.size} />}
            />
          )}
        </Index>
      </StyledPinInput.Control>
      <StyledPinInput.HiddenInput />
    </StyledPinInput.Root>
  )
}

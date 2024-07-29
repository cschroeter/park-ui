import { Index, Show, children } from 'solid-js'
import { Input } from './input'
import * as ArkPinInput from './primitives/pin-input'

export interface PinInputProps extends ArkPinInput.RootProps {
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
}

export const PinInput = (props: PinInputProps) => {
  const getChildren = children(() => props.children)

  return (
    <ArkPinInput.Root {...props}>
      <Show when={getChildren()}>
        <ArkPinInput.Label>{getChildren()}</ArkPinInput.Label>
      </Show>
      <ArkPinInput.Control>
        <Index each={Array.from({ length: props.length ?? 4 }, (_, index) => index)}>
          {(index) => (
            <ArkPinInput.Input
              index={index()}
              asChild={(inputProps) => <Input {...inputProps()} size={props.size} />}
            />
          )}
        </Index>
      </ArkPinInput.Control>
      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  )
}

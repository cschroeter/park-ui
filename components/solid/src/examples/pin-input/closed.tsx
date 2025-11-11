import { type ComponentProps, For, splitProps } from 'solid-js'
import { Group } from '@/components/ui'
import * as StyledPinInput from '@/components/ui/pin-input'

export interface PinInputProps extends StyledPinInput.RootProps {
  count?: number
  inputProps?: ComponentProps<typeof StyledPinInput.HiddenInput>
  attached?: boolean
}

export const PinInput = (props: PinInputProps) => {
  const [local, rest] = splitProps(props, ['count', 'inputProps', 'attached'])
  const count = () => local.count ?? 4

  return (
    <StyledPinInput.Root {...rest}>
      <StyledPinInput.HiddenInput {...local.inputProps} />
      <StyledPinInput.Control>
        <Group attached={local.attached}>
          <For each={Array.from({ length: count() })}>
            {(_, index) => <StyledPinInput.Input index={index()} />}
          </For>
        </Group>
      </StyledPinInput.Control>
    </StyledPinInput.Root>
  )
}

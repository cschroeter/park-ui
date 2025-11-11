import { For } from 'solid-js'
import { Group, PinInput as StyledPinInput } from '@/components/ui'

export interface PinInputProps extends StyledPinInput.RootProps {
  rootRef?: RefObject<HTMLDivElement | null>
  count?: number
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  attached?: boolean
}

export const PinInput = forwardRef<HTMLInputElement, PinInputProps>(function PinInput(props, ref) {
  const { count = 4, inputProps, rootRef, attached, ...rest } = props
  return (
    <StyledPinInput.Root ref={rootRef} {...rest}>
      <StyledPinInput.HiddenInput ref={ref} {...inputProps} />
      <StyledPinInput.Control>
        <Group attached={attached}>
          <For each={Array.from({ length: count })}>
            {(_, index) => <StyledPinInput.Input index={index()} />}
          </For>
        </Group>
      </StyledPinInput.Control>
    </StyledPinInput.Root>
  )
})

import { type ComponentProps, type JSX, Show, splitProps } from 'solid-js'
import { VisuallyHidden } from 'styled-system/jsx'
import * as StyledCheckbox from '@/components/ui/checkbox'

export type { CheckboxCheckedState } from '@ark-ui/solid/checkbox'

export interface CheckboxProps extends StyledCheckbox.RootProps {
  inputProps?: ComponentProps<typeof StyledCheckbox.HiddenInput>
  children?: JSX.Element
  'aria-label'?: string
}

export const Checkbox = (props: CheckboxProps) => {
  const [local, rest] = splitProps(props, ['children', 'inputProps', 'aria-label'])

  return (
    <StyledCheckbox.Root {...rest}>
      <StyledCheckbox.HiddenInput {...local.inputProps} />
      <StyledCheckbox.Control>
        <StyledCheckbox.Indicator />
      </StyledCheckbox.Control>
      <Show when={local.children}>
        <StyledCheckbox.Label>{local.children}</StyledCheckbox.Label>
      </Show>
      <Show when={local['aria-label']}>
        <StyledCheckbox.Label
          asChild={(props) => <VisuallyHidden {...props()}>{local['aria-label']}</VisuallyHidden>}
        />
      </Show>
    </StyledCheckbox.Root>
  )
}

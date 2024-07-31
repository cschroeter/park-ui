import { Show, children } from 'solid-js'
import * as StyledCheckbox from './styled/checkbox'

export interface CheckboxProps extends StyledCheckbox.RootProps {}

export const Checkbox = (props: CheckboxProps) => {
  const getChildren = children(() => props.children)

  return (
    <StyledCheckbox.Root {...props}>
      <StyledCheckbox.Control>
        <StyledCheckbox.Indicator>
          <CheckIcon />
        </StyledCheckbox.Indicator>
        <StyledCheckbox.Indicator indeterminate>
          <MinusIcon />
        </StyledCheckbox.Indicator>
      </StyledCheckbox.Control>
      <Show when={getChildren()}>
        <StyledCheckbox.Label>{getChildren()}</StyledCheckbox.Label>
      </Show>
      <StyledCheckbox.HiddenInput />
    </StyledCheckbox.Root>
  )
}

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Check Icon</title>
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Minus Icon</title>
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

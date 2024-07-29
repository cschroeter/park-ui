import { Show, children } from 'solid-js'
import * as ArkCheckbox from './primitives/checkbox'

export interface CheckboxProps extends ArkCheckbox.RootProps {}

export const Checkbox = (props: CheckboxProps) => {
  const getChildren = children(() => props.children)

  return (
    <ArkCheckbox.Root {...props}>
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator>
          <CheckIcon />
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator indeterminate>
          <MinusIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <Show when={getChildren()}>
        <ArkCheckbox.Label>{getChildren()}</ArkCheckbox.Label>
      </Show>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
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

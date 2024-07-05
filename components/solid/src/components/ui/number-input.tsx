import { Show, children } from 'solid-js'
import { NumberInput as ArkNumberInput } from '~/components/ui/primitives'

export interface NumberInputProps extends ArkNumberInput.RootProps {}

export const NumberInput = (props: NumberInputProps) => {
  const getChildren = children(() => props.children)

  return (
    <ArkNumberInput.Root {...props}>
      <Show when={getChildren()}>
        <ArkNumberInput.Label>{getChildren()}</ArkNumberInput.Label>
      </Show>
      <ArkNumberInput.Control>
        <ArkNumberInput.Input />
        <ArkNumberInput.IncrementTrigger>
          <ChevronUpIcon />
        </ArkNumberInput.IncrementTrigger>
        <ArkNumberInput.DecrementTrigger>
          <ChevronDownIcon />
        </ArkNumberInput.DecrementTrigger>
      </ArkNumberInput.Control>
    </ArkNumberInput.Root>
  )
}

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Up Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m18 15l-6-6l-6 6"
    />
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Down Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m6 9l6 6l6-6"
    />
  </svg>
)

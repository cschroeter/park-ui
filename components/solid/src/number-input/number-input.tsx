import {
  NumberInput as ArkNumberInput,
  type NumberInputProps as ArkNumberInputProps,
} from '@ark-ui/solid'
import { Show, children, splitProps, type JSX } from 'solid-js'
import { numberInput, type NumberInputVariantProps } from 'styled-system/recipes'

export interface NumberInputProps extends ArkNumberInputProps, NumberInputVariantProps {
  min?: number
  max?: number
  children?: JSX.Element
}

export const NumberInput = (props: NumberInputProps) => {
  const [variantProps, localProps] = numberInput.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['children', 'min', 'max'])
  const getChildren = children(() => local.children)
  const styles = numberInput(variantProps)

  return (
    <ArkNumberInput.Root class={styles.root} min={local.min} max={local.max} {...rootProps}>
      <Show when={getChildren()}>
        <ArkNumberInput.Label class={styles.label}>{local.children}</ArkNumberInput.Label>
      </Show>
      <ArkNumberInput.Control class={styles.control}>
        <ArkNumberInput.Input class={styles.input} />
        <ArkNumberInput.IncrementTrigger class={styles.incrementTrigger}>
          <ChevronUpIcon />
        </ArkNumberInput.IncrementTrigger>
        <ArkNumberInput.DecrementTrigger class={styles.decrementTrigger}>
          <ChevronDownIcon />
        </ArkNumberInput.DecrementTrigger>
      </ArkNumberInput.Control>
    </ArkNumberInput.Root>
  )
}

NumberInput.displayName = 'NumberInput'

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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

import { NumberInput as ArkNumberInput, type NumberInputRootProps } from '@ark-ui/solid'
import { Show, children, splitProps, type JSX } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { numberInput, type NumberInputVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

export interface NumberInputProps
  extends Assign<JsxStyleProps, NumberInputRootProps>,
    NumberInputVariantProps {
  children?: JSX.Element
}

export const NumberInput = (props: NumberInputProps) => {
  const [variantProps, numberInputProps] = numberInput.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(numberInputProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class'])
  const getChildren = children(() => localProps.children)
  const styles = numberInput(variantProps)

  return (
    <ArkNumberInput.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      <Show when={getChildren()}>
        <ArkNumberInput.Label class={styles.label}>{getChildren()}</ArkNumberInput.Label>
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

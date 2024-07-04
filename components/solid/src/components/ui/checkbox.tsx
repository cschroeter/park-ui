import { Checkbox as ArkCheckbox, type Assign, type CheckboxRootProps } from '@ark-ui/solid'
import { Show, children, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { type CheckboxVariantProps, checkbox } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface CheckboxProps
  extends Assign<JsxStyleProps, CheckboxRootProps>,
    CheckboxVariantProps {}

export const Checkbox = (props: CheckboxProps) => {
  const [variantProps, checkboxProps] = checkbox.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(checkboxProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class'])
  const getChildren = children(() => localProps.children)
  const styles = checkbox(variantProps)

  return (
    <ArkCheckbox.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      <ArkCheckbox.Control class={styles.control}>
        <ArkCheckbox.Indicator class={styles.indicator}>
          <CheckIcon />
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator indeterminate class={styles.indicator}>
          <MinusIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <Show when={getChildren()}>
        <ArkCheckbox.Label class={styles.label}>{getChildren()}</ArkCheckbox.Label>
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

import { Checkbox as ArkCheckbox, type CheckboxProps as ArkCheckboxProps } from '@ark-ui/solid'
import { Show, children, splitProps, type JSX } from 'solid-js'
import { checkbox, type CheckboxVariantProps } from 'styled-system/recipes'

export interface CheckboxProps extends ArkCheckboxProps, CheckboxVariantProps {
  children?: JSX.Element
}

export const Checkbox = (props: CheckboxProps) => {
  const [variantProps, localProps] = checkbox.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['children'])
  const getChildren = children(() => local.children)
  const styles = checkbox(variantProps)

  return (
    <ArkCheckbox.Root class={styles.root} {...rootProps}>
      {(state) => (
        <>
          <ArkCheckbox.Control class={styles.control}>
            <Show when={state().isChecked}>
              <CheckIcon />
            </Show>
            <Show when={state().isIndeterminate}>
              <MinusIcon />
            </Show>
          </ArkCheckbox.Control>
          <Show when={getChildren()}>
            <ArkCheckbox.Label class={styles.label}>{local.children}</ArkCheckbox.Label>
          </Show>
        </>
      )}
    </ArkCheckbox.Root>
  )
}

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

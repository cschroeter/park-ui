import { Switch as ArkSwitch, type SwitchProps as ArkSwitchProps } from '@ark-ui/solid'
import { Show, children, splitProps, type JSX } from 'solid-js'
import { switchRecipe, type SwitchRecipeVariantProps } from 'styled-system/recipes'

export interface SwitchProps extends ArkSwitchProps, SwitchRecipeVariantProps {
  children?: JSX.Element
}

export const Switch = (props: SwitchProps) => {
  const [variantProps, localProps] = switchRecipe.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['children'])
  const getChildren = children(() => local.children)
  const styles = switchRecipe(variantProps)

  return (
    <ArkSwitch.Root class={styles.root} {...rootProps}>
      <ArkSwitch.Control class={styles.control}>
        <ArkSwitch.Thumb class={styles.thumb} />
      </ArkSwitch.Control>
      <Show when={getChildren()}>
        <ArkSwitch.Label class={styles.label}>{getChildren()}</ArkSwitch.Label>
      </Show>
    </ArkSwitch.Root>
  )
}

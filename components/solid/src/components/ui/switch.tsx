import { Switch as ArkSwitch, type Assign, type SwitchRootProps } from '@ark-ui/solid'
import { Show, children, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { type SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface SwitchProps
  extends Assign<JsxStyleProps, SwitchRootProps>,
    SwitchRecipeVariantProps {}

export const Switch = (props: SwitchProps) => {
  const [variantProps, switchProps] = switchRecipe.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(switchProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class'])
  const getChildren = children(() => localProps.children)
  const styles = switchRecipe(variantProps)

  return (
    <ArkSwitch.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      <ArkSwitch.Control class={styles.control}>
        <ArkSwitch.Thumb class={styles.thumb} />
      </ArkSwitch.Control>
      <Show when={getChildren()}>
        <ArkSwitch.Label class={styles.label}>{getChildren()}</ArkSwitch.Label>
      </Show>
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
}

import { Switch as ArkSwitch, type SwitchProps as ArkSwitchProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { switchRecipe, type SwitchRecipeVariantProps } from 'styled-system/recipes'

export interface SwitchProps extends ArkSwitchProps, SwitchRecipeVariantProps {
  labelName?: string
}

export const Switch = (props: SwitchProps) => {
  const [variantProps, localProps] = switchRecipe.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['labelName'])
  const styles = switchRecipe(variantProps)

  return (
    <ArkSwitch.Root class={styles.root} {...rootProps}>
      <ArkSwitch.Control class={styles.control}>
        <ArkSwitch.Thumb class={styles.thumb} />
      </ArkSwitch.Control>
      <ArkSwitch.Label class={styles.label}>{local.labelName}</ArkSwitch.Label>
    </ArkSwitch.Root>
  )
}

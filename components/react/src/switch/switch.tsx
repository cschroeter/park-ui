import { Switch as ArkSwitch, type SwitchProps as ArkSwitchProps } from '@ark-ui/react/switch'
import { forwardRef } from 'react'
import { switchRecipe, type SwitchRecipeVariantProps } from 'styled-system/recipes'

export interface SwitchProps extends ArkSwitchProps, SwitchRecipeVariantProps {
  labelName?: string
}

export const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const [variantProps, localProps] = switchRecipe.splitVariantProps(props)
  const { labelName, checked, ...rootProps } = localProps
  const styles = switchRecipe(variantProps)

  return (
    <ArkSwitch.Root defaultChecked className={styles.root} {...rootProps}>
      <ArkSwitch.Control className={styles.control}>
        <ArkSwitch.Thumb className={styles.thumb} />
      </ArkSwitch.Control>
      <ArkSwitch.Label className={styles.label}>{labelName}</ArkSwitch.Label>
    </ArkSwitch.Root>
  )
})

Switch.displayName = 'Switch'

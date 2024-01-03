import { Switch as ArkSwitch, type SwitchProps as ArkSwitchProps } from '@ark-ui/react/switch'
import { forwardRef, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { switchRecipe, type SwitchRecipeVariantProps } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'

export interface SwitchProps
  extends ArkSwitchProps,
    SwitchRecipeVariantProps,
    Omit<HTMLStyledProps<'label'>, 'defaultChecked' | 'dir' | 'translate' | 'content' | 'color'> {
  children?: ReactNode
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const [variantProps, localProps] = switchRecipe.splitVariantProps(props)
  const { children, checked, ...rootProps } = localProps
  const styles = switchRecipe(variantProps)

  return (
    <ArkSwitch.Root ref={ref} className={cx(styles.root, css(rootProps))} {...rootProps}>
      <ArkSwitch.Control className={styles.control}>
        <ArkSwitch.Thumb className={styles.thumb} />
      </ArkSwitch.Control>
      {children && <ArkSwitch.Label className={styles.label}>{children}</ArkSwitch.Label>}
    </ArkSwitch.Root>
  )
})

Switch.displayName = 'Switch'

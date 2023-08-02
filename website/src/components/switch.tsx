import { Switch as ArkSwitch, type SwitchProps as ArkSwitchProps } from '@ark-ui/react/switch'
import { styled } from 'styled-system/jsx'
import { switchRecipe, type SwitchRecipeVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/switch'

export type SwitchProps = SwitchRecipeVariantProps & ArkSwitchProps
export const Switch = styled(ArkSwitch, switchRecipe)

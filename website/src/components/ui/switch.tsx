import { Switch as ArkSwitch } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { switchRecipe } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export const SwitchRoot = withProvider(styled(ArkSwitch.Root), 'root')
export const SwitchControl = withContext(styled(ArkSwitch.Control), 'control')
export const SwitchLabel = withContext(styled(ArkSwitch.Label), 'label')
export const SwitchThumb = withContext(styled(ArkSwitch.Thumb), 'thumb')

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Label: SwitchLabel,
  Thumb: SwitchThumb,
})

export type SwitchProps = typeof SwitchRoot
export type SwitchControlProps = typeof SwitchControl
export type SwitchLabelProps = typeof SwitchLabel
export type SwitchThumbProps = typeof SwitchThumb

import { Switch as ArkSwitch } from '@ark-ui/react/switch'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { switchRecipe } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(switchRecipe)

const Switch = withProvider(styled(ArkSwitch.Root), 'root')
const SwitchControl = withContext(styled(ArkSwitch.Control), 'control')
const SwitchLabel = withContext(styled(ArkSwitch.Label), 'label')
const SwitchThumb = withContext(styled(ArkSwitch.Thumb), 'thumb')

const Root = Switch
const Control = SwitchControl
const Label = SwitchLabel
const Thumb = SwitchThumb

export { Control, Label, Root, Switch, SwitchControl, SwitchLabel, SwitchThumb, Thumb }

export interface SwitchProps extends HTMLStyledProps<typeof Switch> {}
export interface SwitchControlProps extends HTMLStyledProps<typeof SwitchControl> {}
export interface SwitchLabelProps extends HTMLStyledProps<typeof SwitchLabel> {}
export interface SwitchThumbProps extends HTMLStyledProps<typeof SwitchThumb> {}

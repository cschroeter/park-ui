import { Switch as ArkSwitch } from '@ark-ui/react/switch'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Switch')

const Switch = withProvider(chakra(ArkSwitch.Root), 'root')
const SwitchControl = withContext(chakra(ArkSwitch.Control), 'control')
const SwitchLabel = withContext(chakra(ArkSwitch.Label), 'label')
const SwitchThumb = withContext(chakra(ArkSwitch.Thumb), 'thumb')

const Root = Switch
const Control = SwitchControl
const Label = SwitchLabel
const Thumb = SwitchThumb

export { Control, Label, Root, Switch, SwitchControl, SwitchLabel, SwitchThumb, Thumb }

export interface SwitchProps extends HTMLChakraProps<typeof Switch> {}
export interface SwitchControlProps extends HTMLChakraProps<typeof SwitchControl> {}
export interface SwitchLabelProps extends HTMLChakraProps<typeof SwitchLabel> {}
export interface SwitchThumbProps extends HTMLChakraProps<typeof SwitchThumb> {}

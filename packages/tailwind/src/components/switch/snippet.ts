import * as Ark from '@ark-ui/react/switch'
import { createStyleContext } from '~/lib/create-style-context'
import { switchRecipeStyles } from './recipe'
export * from '@ark-ui/react/switch'

export type SwitchProps = React.ComponentProps<typeof Switch>

const { withProvider, withContext } = createStyleContext(switchRecipeStyles)

const SwitchRoot = withProvider(Ark.Switch.Root, 'root')
export const SwitchControl = withContext(Ark.Switch.Control, 'control')
export const SwitchLabel = withContext(Ark.Switch.Label, 'label')
export const SwitchThumb = withContext(Ark.Switch.Thumb, 'thumb')

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Label: SwitchLabel,
  Thumb: SwitchThumb,
})

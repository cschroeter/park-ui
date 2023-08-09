import * as Ark from '@ark-ui/react/switch'
import { styled } from 'styled-system/jsx'
import { switchRecipe, type SwitchRecipeVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/switch'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export type SwitchProps = Ark.SwitchProps & SwitchRecipeVariantProps

const SwitchRoot = withProvider(styled(Ark.Switch.Root), 'root')
const SwitchControl = withContext(styled(Ark.Switch.Control), 'control')
const SwitchInput = withContext(styled(Ark.Switch.Input), 'input')
const SwitchLabel = withContext(styled(Ark.Switch.Label), 'label')
const SwitchThumb = withContext(styled(Ark.Switch.Thumb), 'thumb')

const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Input: SwitchInput,
  Label: SwitchLabel,
  Thumb: SwitchThumb,
})

export { Switch, SwitchControl, SwitchInput, SwitchLabel, SwitchThumb }

import * as Ark from '@ark-ui/solid/switch'
import { styled } from 'styled-system/jsx'
import { switchRecipe, type SwitchRecipeVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export * from '@ark-ui/solid/switch'
export type SwitchProps = Ark.SwitchProps & SwitchRecipeVariantProps

const SwitchRoot = withProvider(styled(Ark.Switch), 'root')
export const SwitchControl = withContext(styled(Ark.SwitchControl), 'control')
export const SwitchInput = withContext(styled(Ark.SwitchInput), 'input')
export const SwitchLabel = withContext(styled(Ark.SwitchLabel), 'label')
export const SwitchThumb = withContext(styled(Ark.SwitchThumb), 'thumb')

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Input: SwitchInput,
  Label: SwitchLabel,
  Thumb: SwitchThumb,
})

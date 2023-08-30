import * as Ark from '@ark-ui/solid/radio-group'
import { styled } from 'styled-system/jsx'
import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

export * from '@ark-ui/solid/radio-group'
export type RadioGroupProps = Ark.RadioGroupProps & RadioGroupVariantProps

const RadioGroupRoot = withProvider(styled(Ark.RadioGroup), 'root')
export const RadioGroupLabel = withContext(styled(Ark.RadioGroupLabel), 'label')
export const Radio = withContext(styled(Ark.RadioInput), 'radio')
export const RadioLabel = withContext(styled(Ark.RadioLabel), 'radioLabel')
export const RadioControl = withContext(styled(Ark.RadioControl), 'radioControl')

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Radio: Radio,
  RadioLabel: RadioLabel,
  RadioControl: RadioControl,
})

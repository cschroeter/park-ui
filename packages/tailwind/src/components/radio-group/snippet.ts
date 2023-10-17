import * as Ark from '@ark-ui/react/radio-group'
import { createStyleContext } from '~/lib/create-style-context'
import { radioGroupStyles } from './recipe'
export * from '@ark-ui/react/radio-group'

export type RadioGroupProps = React.ComponentProps<typeof RadioGroup>

const { withProvider, withContext } = createStyleContext(radioGroupStyles)

const RadioGroupRoot = withProvider(Ark.RadioGroup.Root, 'root')
export const RadioGroupLabel = withContext(Ark.RadioGroup.Label, 'label')
export const Radio = withContext(Ark.RadioGroup.Radio, 'radio')
export const RadioLabel = withContext(Ark.RadioGroup.RadioLabel, 'radioLabel')
export const RadioControl = withContext(Ark.RadioGroup.RadioControl, 'radioControl')

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Radio: Radio,
  RadioLabel: RadioLabel,
  RadioControl: RadioControl,
})

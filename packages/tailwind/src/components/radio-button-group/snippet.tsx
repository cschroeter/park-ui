import * as Ark from '@ark-ui/react/radio-group'
import { createStyleContext } from '~/lib/create-style-context'
import { radioButtonGroupStyles } from './recipe'

export * from '@ark-ui/react/radio-group'

const { withProvider, withContext } = createStyleContext(radioButtonGroupStyles)

const RadioGroupRoot = withProvider(Ark.RadioGroup.Root, 'root')
const RadioGroupLabel = withContext(Ark.RadioGroup.Label, 'label')
const Radio = withContext(Ark.RadioGroup.Radio, 'radio')
const RadioLabel = withContext(Ark.RadioGroup.RadioLabel, 'radioLabel')
const RadioControl = withContext(Ark.RadioGroup.RadioControl, 'radioControl')

const RadioButtonGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Radio: Radio,
  RadioLabel: RadioLabel,
  RadioControl: RadioControl,
})

export { Radio, RadioButtonGroup, RadioControl, RadioGroupLabel, RadioLabel }

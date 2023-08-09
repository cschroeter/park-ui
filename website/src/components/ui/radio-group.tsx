import * as Ark from '@ark-ui/react/radio-group'
import { styled } from 'styled-system/jsx'
import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/radio-group'

const { withProvider, withContext } = createStyleContext(radioGroup)

export type RadioGroupProps = Ark.RadioGroupProps & RadioGroupVariantProps

const RadioGroupRoot = withProvider(styled(Ark.RadioGroup.Root), 'root')
const RadioGroupLabel = withContext(styled(Ark.RadioGroup.Label), 'label')
const Radio = withContext(styled(Ark.RadioGroup.Radio), 'radio')
const RadioInput = withContext(styled(Ark.RadioGroup.RadioInput), 'radioInput')
const RadioLabel = withContext(styled(Ark.RadioGroup.RadioLabel), 'radioLabel')
const RadioControl = withContext(styled(Ark.RadioGroup.RadioControl), 'radioControl')

const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Radio: Radio,
  RadioInput: RadioInput,
  RadioLabel: RadioLabel,
  RadioControl: RadioControl,
})

export { Radio, RadioControl, RadioGroup, RadioGroupLabel, RadioInput, RadioLabel }

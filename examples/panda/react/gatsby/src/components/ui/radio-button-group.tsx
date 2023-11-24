import * as Ark from '@ark-ui/react/radio-group'
import { styled } from 'styled-system/jsx'
import { radioButtonGroup, type RadioButtonGroupVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export * from '@ark-ui/react/radio-group'
export type RadioButtonGroupProps = Ark.RadioGroupProps & RadioButtonGroupVariantProps

const RadioButtonGroupRoot = withProvider(styled(Ark.RadioGroup.Root), 'root')
export const RadioButtonGroupIndicator = withContext(styled(Ark.RadioGroup.Indicator), 'indicator')
export const RadioButtonGroupItem = withContext(styled(Ark.RadioGroup.Item), 'item')
export const RadioButtonGroupItemControl = withContext(
  styled(Ark.RadioGroup.ItemControl),
  'itemControl',
)
export const RadioButtonGroupItemText = withContext(styled(Ark.RadioGroup.ItemText), 'itemText')
export const RadioButtonGroupLabel = withContext(styled(Ark.RadioGroup.Label), 'label')

export const RadioButtonGroup = Object.assign(RadioButtonGroupRoot, {
  Root: RadioButtonGroupRoot,
  Indicator: RadioButtonGroupIndicator,
  Item: RadioButtonGroupItem,
  ItemControl: RadioButtonGroupItemControl,
  ItemText: RadioButtonGroupItemText,
  Label: RadioButtonGroupLabel,
})

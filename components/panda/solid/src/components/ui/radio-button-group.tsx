import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { radioButtonGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export const RadioButtonGroupRoot = withProvider(styled(ArkRadioButtonGroup.Root), 'root')
export const RadioButtonGroupIndicator = withContext(
  styled(ArkRadioButtonGroup.Indicator),
  'indicator',
)
export const RadioButtonGroupItem = withContext(styled(ArkRadioButtonGroup.Item), 'item')
export const RadioButtonGroupItemControl = withContext(
  styled(ArkRadioButtonGroup.ItemControl),
  'itemControl',
)
export const RadioButtonGroupItemText = withContext(
  styled(ArkRadioButtonGroup.ItemText),
  'itemText',
)
export const RadioButtonGroupLabel = withContext(styled(ArkRadioButtonGroup.Label), 'label')

export const RadioButtonGroup = Object.assign(RadioButtonGroupRoot, {
  Root: RadioButtonGroupRoot,
  Indicator: RadioButtonGroupIndicator,
  Item: RadioButtonGroupItem,
  ItemControl: RadioButtonGroupItemControl,
  ItemText: RadioButtonGroupItemText,
  Label: RadioButtonGroupLabel,
})

export type RadioButtonGroupProps = typeof RadioButtonGroupRoot
export type RadioButtonGroupIndicatorProps = typeof RadioButtonGroupIndicator
export type RadioButtonGroupItemProps = typeof RadioButtonGroupItem
export type RadioButtonGroupItemControlProps = typeof RadioButtonGroupItemControl
export type RadioButtonGroupItemTextProps = typeof RadioButtonGroupItemText
export type RadioButtonGroupLabelProps = typeof RadioButtonGroupLabel
